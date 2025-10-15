// Project management system for handling multiple survey projects
import { saveSurveyConfig, loadSurveyConfig, deleteSurveyConfig, getSavedConfigList } from './surveyStorage';
import { saveProjectToProjectsFolder } from './fileSystemManager';
import { projectTemplates, getTemplateById } from './projectTemplates';

const PROJECT_LIST_KEY = 'user_projects_list';
const ACTIVE_PROJECT_KEY = 'active_project_id';

// Project structure:
// {
//   id: string,
//   name: string,
//   description: string,
//   createdAt: string,
//   lastModified: string,
//   templateId: string | null,  // null for custom projects
//   supabaseConfig: object | null
// }

export const createProject = async (projectData) => {
  try {
    const projectId = generateProjectId();
    const now = new Date().toISOString();
    
    const project = {
      id: projectId,
      name: projectData.name,
      description: projectData.description || '',
      createdAt: now,
      lastModified: now,
      templateId: projectData.templateId || null,
      supabaseConfig: projectData.supabaseConfig || null
    };
    
    // Save project metadata
    const projects = getUserProjects();
    projects.push(project);
    localStorage.setItem(PROJECT_LIST_KEY, JSON.stringify(projects));
    
    // Save survey configuration
    let surveyConfig;
    if (projectData.templateId) {
      const template = getTemplateById(projectData.templateId);
      if (!template) {
        throw new Error('Template not found');
      }
      surveyConfig = { ...template.config };
      surveyConfig.title = projectData.name; // Override title with project name
    } else {
      // Create default config for custom project
      surveyConfig = createDefaultSurveyConfig(projectData.name);
    }
    
    await saveSurveyConfig(projectId, surveyConfig);
    
    // Create the actual project file
    const fileResult = await saveProjectToProjectsFolder(project, surveyConfig);
    if (!fileResult.success) {
      console.error('Failed to create project file:', fileResult.error);
      // Don't fail the entire operation, just log the error
    } else {
      console.log('✅ Project file created successfully');
    }
    
    return { success: true, project, surveyConfig };
  } catch (error) {
    console.error('Error creating project:', error);
    return { success: false, error: error.message };
  }
};

export const duplicateProject = async (sourceProjectId, newName) => {
  try {
    const sourceConfig = await loadSurveyConfig(sourceProjectId);
    if (!sourceConfig) {
      throw new Error('Source project not found');
    }
    
    const projects = getUserProjects();
    const sourceProject = projects.find(p => p.id === sourceProjectId);
    
    const result = await createProject({
      name: newName,
      description: `Copy of ${sourceProject?.name || 'Unknown Project'}`,
      templateId: null, // Duplicated projects are always custom
      supabaseConfig: sourceProject?.supabaseConfig || null
    });
    
    if (result.success) {
      // Override the survey config with the source config
      const modifiedConfig = { ...sourceConfig };
      modifiedConfig.title = newName;
      await saveSurveyConfig(result.project.id, modifiedConfig);
    }
    
    return result;
  } catch (error) {
    console.error('Error duplicating project:', error);
    return { success: false, error: error.message };
  }
};

export const createProjectFromTemplate = async (templateId, projectName) => {
  try {
    const template = getTemplateById(templateId);
    if (!template) {
      throw new Error('Template not found');
    }
    
    return await createProject({
      name: projectName,
      description: `Based on ${template.name}`,
      templateId: templateId
    });
  } catch (error) {
    console.error('Error creating project from template:', error);
    return { success: false, error: error.message };
  }
};

export const deleteProject = async (projectId) => {
  try {
    // Delete survey configuration
    await deleteSurveyConfig(projectId);
    
    // Remove from project list
    const projects = getUserProjects();
    const updatedProjects = projects.filter(p => p.id !== projectId);
    localStorage.setItem(PROJECT_LIST_KEY, JSON.stringify(updatedProjects));
    
    // If this was the active project, clear active project
    const activeProjectId = getActiveProjectId();
    if (activeProjectId === projectId) {
      localStorage.removeItem(ACTIVE_PROJECT_KEY);
    }
    
    return { success: true };
  } catch (error) {
    console.error('Error deleting project:', error);
    return { success: false, error: error.message };
  }
};

export const updateProject = async (projectId, updates) => {
  try {
    const projects = getUserProjects();
    const projectIndex = projects.findIndex(p => p.id === projectId);
    
    if (projectIndex === -1) {
      throw new Error('Project not found');
    }
    
    projects[projectIndex] = {
      ...projects[projectIndex],
      ...updates,
      lastModified: new Date().toISOString()
    };
    
    localStorage.setItem(PROJECT_LIST_KEY, JSON.stringify(projects));
    
    return { success: true, project: projects[projectIndex] };
  } catch (error) {
    console.error('Error updating project:', error);
    return { success: false, error: error.message };
  }
};

export const getUserProjects = () => {
  try {
    const projectsStr = localStorage.getItem(PROJECT_LIST_KEY);
    return projectsStr ? JSON.parse(projectsStr) : [];
  } catch (error) {
    console.error('Error getting user projects:', error);
    return [];
  }
};

export const getProjectById = (projectId) => {
  const projects = getUserProjects();
  return projects.find(p => p.id === projectId);
};

export const setActiveProject = (projectId) => {
  localStorage.setItem(ACTIVE_PROJECT_KEY, projectId);
};

export const getActiveProjectId = () => {
  return localStorage.getItem(ACTIVE_PROJECT_KEY);
};

export const getActiveProject = () => {
  const activeId = getActiveProjectId();
  return activeId ? getProjectById(activeId) : null;
};

const generateProjectId = () => {
  return 'proj_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
};

const createDefaultSurveyConfig = (title) => {
  return {
    title: title,
    description: "This survey helps us understand user preferences and opinions.",
    logo: "",
    logoPosition: "right",
    settings: {
      showQuestionNumbers: "off",
      showProgressBar: "aboveheader",
      progressBarType: "questions",
      autoGrowComment: true,
      showPreviewBeforeComplete: "showAllQuestions"
    },
    images: [],
    pages: [
      {
        name: "page1",
        title: "Survey Questions",
        description: "Please answer the following questions.",
        elements: []
      }
    ]
  };
};

// Migration function to handle existing 'default' config
export const migrateExistingConfig = async () => {
  try {
    const existingConfig = await loadSurveyConfig('default');
    if (existingConfig && existingConfig.title) {
      // Check if we already have projects
      const projects = getUserProjects();
      if (projects.length === 0) {
        // Create a project from the existing default config
        const result = await createProject({
          name: existingConfig.title,
          description: 'Migrated from existing configuration'
        });
        
        if (result.success) {
          // Save the existing config to the new project
          await saveSurveyConfig(result.project.id, existingConfig);
          setActiveProject(result.project.id);
          
          console.log('Migrated existing configuration to project:', result.project.id);
          return result.project;
        }
      }
    }
    return null;
  } catch (error) {
    console.error('Error migrating existing config:', error);
    return null;
  }
};
