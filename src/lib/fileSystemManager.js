// File system manager for templates and projects
// Uses API calls to backend server for file operations

const API_BASE_URL = 'http://localhost:3001/api';
const TEMPLATES_PATH = '/project_templates';
const PROJECTS_PATH = '/projects';

// Template management
export const loadTemplatesFromFiles = async () => {
  try {
    console.log('Loading templates from backend API...');
    
    // Get list of template files from backend
    const response = await fetch(`${API_BASE_URL}/templates`);
    if (!response.ok) {
      throw new Error(`Failed to fetch template list: ${response.statusText}`);
    }
    
    const { files } = await response.json();
    console.log('Template files found:', files);
    
    const templates = [];
    
    // Load each template file
    for (const filename of files) {
      try {
        const templateResponse = await fetch(`${TEMPLATES_PATH}/${filename}`);
        if (templateResponse.ok) {
          const template = await templateResponse.json();
          // Validate that it's actually a template (has required fields)
          if (template.id && template.name && template.config) {
            console.log(`Successfully loaded template: ${template.name}`);
            templates.push(template);
          } else {
            console.warn(`File ${filename} is not a valid template (missing required fields)`);
          }
        }
      } catch (error) {
        console.warn(`Failed to load template ${filename}:`, error);
      }
    }
    
    console.log(`Successfully loaded ${templates.length} templates`);
    return templates;
  } catch (error) {
    console.error('Error loading templates from files:', error);
    return [];
  }
};

export const saveTemplateToFile = async (template) => {
  try {
    const response = await fetch(`${API_BASE_URL}/templates`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ template }),
    });
    
    const result = await response.json();
    
    if (result.success) {
      console.log(`✅ Template "${template.name}" saved to file system`);
      return result;
    } else {
      throw new Error(result.error);
    }
  } catch (error) {
    console.error('Error saving template to file:', error);
    return { success: false, error: error.message };
  }
};

export const deleteTemplateFile = async (templateId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/templates/${templateId}`, {
      method: 'DELETE',
    });
    
    const result = await response.json();
    
    if (result.success) {
      console.log(`✅ Template ${templateId} deleted from file system`);
      return result;
    } else {
      throw new Error(result.error);
    }
  } catch (error) {
    console.error('Error deleting template file:', error);
    return { success: false, error: error.message };
  }
};

// Project management
export const loadProjectsFromFiles = async () => {
  try {
    console.log('Loading projects from backend API...');
    
    // Get list of project files from backend
    const response = await fetch(`${API_BASE_URL}/projects`);
    if (!response.ok) {
      throw new Error(`Failed to fetch project list: ${response.statusText}`);
    }
    
    const { files } = await response.json();
    console.log('Project files found:', files);
    
    const projects = [];
    
    // Load each project file
    for (const filename of files) {
      try {
        const projectResponse = await fetch(`${PROJECTS_PATH}/${filename}`);
        if (projectResponse.ok) {
          const projectData = await projectResponse.json();
          // Validate that it's actually a project (has required fields)
          if (projectData.project && projectData.surveyConfig && projectData.project.id && projectData.project.name) {
            console.log(`Successfully loaded project: ${projectData.project.name}`);
            projects.push(projectData.project);
          } else {
            console.warn(`File ${filename} is not a valid project (missing required fields)`);
          }
        }
      } catch (error) {
        console.warn(`Failed to load project ${filename}:`, error);
      }
    }
    
    console.log(`Successfully loaded ${projects.length} projects`);
    return projects;
  } catch (error) {
    console.error('Error loading projects from files:', error);
    return [];
  }
};


// Export project - download to external location
export const exportProjectToExternal = async (project, surveyConfig) => {
  try {
    const filename = `${project.name.replace(/[^a-zA-Z0-9]/g, '-')}-${new Date().toISOString().split('T')[0]}.json`;
    const projectData = {
      project: project,
      surveyConfig: surveyConfig,
      supabaseConfig: getSupabaseConfig(),
      savedAt: new Date().toISOString(),
      version: '2.0'
    };
    
    const dataStr = JSON.stringify(projectData, null, 2);
    
    // Download the file to user's download folder
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    link.click();
    URL.revokeObjectURL(url);
    
    console.log(`Project exported as ${filename} to your downloads folder.`);
    return { success: true, filename };
  } catch (error) {
    console.error('Error exporting project:', error);
    return { success: false, error: error.message };
  }
};

// Save project to projects folder (for internal use)
export const saveProjectToProjectsFolder = async (project, surveyConfig) => {
  try {
    const response = await fetch(`${API_BASE_URL}/projects`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        project,
        surveyConfig,
        supabaseConfig: getSupabaseConfig(),
      }),
    });
    
    const result = await response.json();
    
    if (result.success) {
      // 暂时禁用 localStorage 备份以调试刷新问题
      // saveProjectToStorage(project, surveyConfig);
      
      console.log(`✅ Project "${project.name}" saved to file system`);
      return { success: true, filename: result.filename, filePath: result.filePath, project };
    } else {
      throw new Error(result.error);
    }
  } catch (error) {
    console.error('Error saving project to projects folder:', error);
    return { success: false, error: error.message };
  }
};

export const loadProjectConfigFromFile = async (projectId) => {
  try {
    // First try the direct project ID filename
    let response = await fetch(`${PROJECTS_PATH}/${projectId}.json`);
    
    if (!response.ok) {
      // If direct access fails, try to find the project in our loaded projects
      const allProjects = await loadProjectsFromFiles();
      const project = allProjects.find(p => p.id === projectId);
      
      if (project) {
        // Try to load the config from the file we know exists
        const projectFiles = await getProjectFileMapping();
        const filename = projectFiles[projectId];
        if (filename) {
          response = await fetch(`${PROJECTS_PATH}/${filename}`);
        }
      }
    }
    
    if (response.ok) {
      const projectData = await response.json();
      return projectData.surveyConfig;
    } else {
      // Fallback to localStorage
      return loadProjectConfigFromStorage(projectId);
    }
  } catch (error) {
    console.error('Error loading project config from file:', error);
    // Fallback to localStorage
    return loadProjectConfigFromStorage(projectId);
  }
};

// Helper function to create a mapping of project IDs to filenames
const getProjectFileMapping = async () => {
  const mapping = {};
  const possibleProjectFiles = [
    'project1.json', 'project2.json', 'project3.json', 'project4.json', 'project5.json',
    'my-project.json', 'new-project.json', 'test-project.json', 'demo-project.json'
  ];
  
  for (const filename of possibleProjectFiles) {
    try {
      const response = await fetch(`${PROJECTS_PATH}/${filename}`);
      if (response.ok) {
        const projectData = await response.json();
        if (projectData.project && projectData.project.id) {
          mapping[projectData.project.id] = filename;
        }
      }
    } catch (error) {
      // Ignore errors
    }
  }
  
  return mapping;
};

// Duplicate project - create a copy in projects folder
export const duplicateProjectInFolder = async (sourceProject, surveyConfig, newName) => {
  try {
    // Create new project with different ID and name
    const newProjectId = `proj_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    const duplicatedProject = {
      ...sourceProject,
      id: newProjectId,
      name: newName,
      createdAt: new Date().toISOString(),
      lastModified: new Date().toISOString()
    };
    
    const duplicatedSurveyConfig = { ...surveyConfig, title: newName };
    
    const response = await fetch(`${API_BASE_URL}/projects`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        project: duplicatedProject,
        surveyConfig: duplicatedSurveyConfig,
        supabaseConfig: getSupabaseConfig(),
      }),
    });
    
    const result = await response.json();
    
    if (result.success) {
      // Save to localStorage as backup
      saveProjectToStorage(duplicatedProject, duplicatedSurveyConfig);
      
      console.log(`✅ Project "${newName}" duplicated and saved to file system`);
      return { success: true, project: duplicatedProject, surveyConfig: duplicatedSurveyConfig };
    } else {
      throw new Error(result.error);
    }
  } catch (error) {
    console.error('Error duplicating project:', error);
    return { success: false, error: error.message };
  }
};

// Save project as template - automatically save to templates folder
export const saveProjectAsTemplate = async (project, surveyConfig) => {
  try {
    const templateId = `user_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    
    const template = {
      id: templateId,
      name: `${project.name} Template`,
      description: `Template created from project: ${project.name}`,
      author: 'User',
      year: new Date().getFullYear().toString(),
      category: 'User Templates',
      tags: ['custom', 'user-created'],
      createdAt: new Date().toISOString(),
      config: { ...surveyConfig }
    };
    
    const response = await fetch(`${API_BASE_URL}/templates`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ template }),
    });
    
    const result = await response.json();
    
    if (result.success) {
      console.log(`✅ Template "${template.name}" created and saved to file system`);
      return { success: true, template };
    } else {
      throw new Error(result.error);
    }
  } catch (error) {
    console.error('Error saving project as template:', error);
    return { success: false, error: error.message };
  }
};

// Import project - automatically save uploaded JSON file to projects folder
export const importProjectFromFile = async (file) => {
  try {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = async (e) => {
        try {
          const importData = JSON.parse(e.target.result);
          
          // Validate the imported data
          if (importData.project && importData.surveyConfig) {
            // Generate new ID for the imported project
            const newProjectId = `proj_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
            const importedProject = {
              ...importData.project,
              id: newProjectId,
              name: `${importData.project.name} (Imported)`,
              createdAt: new Date().toISOString(),
              lastModified: new Date().toISOString()
            };
            
            const response = await fetch(`${API_BASE_URL}/projects`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                project: importedProject,
                surveyConfig: importData.surveyConfig,
                supabaseConfig: importData.supabaseConfig || getSupabaseConfig(),
              }),
            });
            
            const result = await response.json();
            
            if (result.success) {
              // Save to localStorage as backup
              saveProjectToStorage(importedProject, importData.surveyConfig);
              
              // Import Supabase configuration if present
              if (importData.supabaseConfig) {
                localStorage.setItem('supabase_config', JSON.stringify(importData.supabaseConfig));
              }
              
              console.log(`✅ Project "${importedProject.name}" imported and saved to file system`);
              resolve({ success: true, project: importedProject, surveyConfig: importData.surveyConfig });
            } else {
              reject(new Error(result.error));
            }
          } else {
            reject(new Error('Invalid project file format'));
          }
        } catch (parseError) {
          reject(new Error('Invalid JSON file'));
        }
      };
      reader.onerror = () => reject(new Error('Error reading file'));
      reader.readAsText(file);
    });
  } catch (error) {
    console.error('Error importing project:', error);
    return { success: false, error: error.message };
  }
};

export const deleteProjectFile = async (projectId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/projects/${projectId}`, {
      method: 'DELETE',
    });
    
    const result = await response.json();
    
    if (result.success) {
      // Remove from localStorage
      deleteProjectFromStorage(projectId);
      
      console.log(`✅ Project ${projectId} deleted from file system`);
      return result;
    } else {
      throw new Error(result.error);
    }
  } catch (error) {
    console.error('Error deleting project file:', error);
    return { success: false, error: error.message };
  }
};

// Helper functions for localStorage fallback

const getProjectListFromStorage = () => {
  try {
    const projects = localStorage.getItem('user_projects_list');
    return projects ? JSON.parse(projects) : [];
  } catch (error) {
    return [];
  }
};

const saveProjectToStorage = (project, surveyConfig) => {
  try {
    // Save project metadata
    const projects = getProjectListFromStorage();
    const existingIndex = projects.findIndex(p => p.id === project.id);
    if (existingIndex >= 0) {
      projects[existingIndex] = project;
    } else {
      projects.push(project);
    }
    localStorage.setItem('user_projects_list', JSON.stringify(projects));
    
    // Save survey config
    localStorage.setItem(`survey_config_${project.id}`, JSON.stringify({
      surveyConfig: surveyConfig,
      metadata: {
        name: project.id,
        savedAt: new Date().toISOString(),
        version: '2.0'
      }
    }));
  } catch (error) {
    console.error('Error saving to localStorage:', error);
  }
};

const loadProjectConfigFromStorage = (projectId) => {
  try {
    const configStr = localStorage.getItem(`survey_config_${projectId}`);
    if (configStr) {
      const data = JSON.parse(configStr);
      return data.surveyConfig || data;
    }
    return null;
  } catch (error) {
    console.error('Error loading from localStorage:', error);
    return null;
  }
};

const deleteProjectFromStorage = (projectId) => {
  try {
    // Remove project metadata
    const projects = getProjectListFromStorage();
    const updatedProjects = projects.filter(p => p.id !== projectId);
    localStorage.setItem('user_projects_list', JSON.stringify(updatedProjects));
    
    // Remove survey config
    localStorage.removeItem(`survey_config_${projectId}`);
  } catch (error) {
    console.error('Error deleting from localStorage:', error);
  }
};

const getSupabaseConfig = () => {
  try {
    const config = localStorage.getItem('supabase_config');
    return config ? JSON.parse(config) : null;
  } catch (error) {
    return null;
  }
};

// File system watcher (simulated)
export const watchFileSystem = (callback) => {
  // In a real app, you'd use file system watchers or websockets
  // For now, we'll poll periodically
  const interval = setInterval(async () => {
    try {
      const templates = await loadTemplatesFromFiles();
      const projects = await loadProjectsFromFiles();
      callback({ templates, projects });
    } catch (error) {
      console.error('Error watching file system:', error);
    }
  }, 5000); // Check every 5 seconds
  
  return () => clearInterval(interval);
};
