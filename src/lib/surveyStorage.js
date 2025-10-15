// Survey configuration storage using localStorage
// In a production environment, you might want to use a database instead

const STORAGE_PREFIX = 'survey_config_';

export const saveSurveyConfig = async (name, config, options = {}) => {
  try {
    const key = STORAGE_PREFIX + name;
    
    // Include Supabase configuration in the saved config
    const supabaseConfig = localStorage.getItem('supabase_config');
    
    const configWithMetadata = {
      surveyConfig: config,
      supabaseConfig: supabaseConfig ? JSON.parse(supabaseConfig) : null,
      metadata: {
        name,
        savedAt: new Date().toISOString(),
        version: '2.0', // Updated version to include Supabase config
        lastModified: Date.now() // 添加时间戳用于检测更新
      }
    };
    
    localStorage.setItem(key, JSON.stringify(configWithMetadata));
    
    // Also update the list of saved configurations
    const savedConfigs = getSavedConfigList();
    if (!savedConfigs.includes(name)) {
      savedConfigs.push(name);
      localStorage.setItem('survey_config_list', JSON.stringify(savedConfigs));
    }
    
    // 触发storage事件，通知其他页面配置已更新（可选）
    if (!options.silent) {
      window.dispatchEvent(new StorageEvent('storage', {
        key: key,
        newValue: JSON.stringify(configWithMetadata),
        storageArea: localStorage
      }));
    }
    
    return { success: true };
  } catch (error) {
    console.error('Error saving survey config:', error);
    return { success: false, error: error.message };
  }
};

export const loadSurveyConfig = async (name) => {
  try {
    const key = STORAGE_PREFIX + name;
    const configStr = localStorage.getItem(key);
    
    if (!configStr) {
      return null;
    }
    
    const loadedData = JSON.parse(configStr);
    
    // Handle both old format (direct survey config) and new format (with Supabase config)
    if (loadedData.surveyConfig && loadedData.metadata && loadedData.metadata.version === '2.0') {
      // New format - only restore Supabase configuration if none exists
      if (loadedData.supabaseConfig) {
        const existingConfig = localStorage.getItem('supabase_config');
        if (!existingConfig) {
          console.log('No existing Supabase config, loading from survey storage');
          localStorage.setItem('supabase_config', JSON.stringify(loadedData.supabaseConfig));
          // Reinitialize Supabase with loaded config
          try {
            import('./supabase').then(({ reinitializeSupabase }) => {
              reinitializeSupabase();
            }).catch(error => {
              console.error('Error reinitializing Supabase on load:', error);
            });
          } catch (error) {
            console.error('Error importing Supabase module:', error);
          }
        } else {
          console.log('Existing Supabase config found, not overriding');
        }
      }
      return loadedData.surveyConfig;
    } else {
      // Old format - just return the config as is
      return loadedData;
    }
  } catch (error) {
    console.error('Error loading survey config:', error);
    return null;
  }
};

export const deleteSurveyConfig = async (name) => {
  try {
    const key = STORAGE_PREFIX + name;
    localStorage.removeItem(key);
    
    // Update the list of saved configurations
    const savedConfigs = getSavedConfigList();
    const updatedConfigs = savedConfigs.filter(config => config !== name);
    localStorage.setItem('survey_config_list', JSON.stringify(updatedConfigs));
    
    return { success: true };
  } catch (error) {
    console.error('Error deleting survey config:', error);
    return { success: false, error: error.message };
  }
};

export const getSavedConfigList = () => {
  try {
    const listStr = localStorage.getItem('survey_config_list');
    return listStr ? JSON.parse(listStr) : [];
  } catch (error) {
    console.error('Error getting saved config list:', error);
    return [];
  }
};

export const exportSurveyConfig = (config) => {
  const dataStr = JSON.stringify(config, null, 2);
  const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
  
  const exportFileDefaultName = `survey-config-${new Date().toISOString().split('T')[0]}.json`;
  
  const linkElement = document.createElement('a');
  linkElement.setAttribute('href', dataUri);
  linkElement.setAttribute('download', exportFileDefaultName);
  linkElement.click();
};

// Convert admin config to SurveyJS format for actual survey use
export const convertToSurveyJS = (adminConfig) => {
  return {
    title: adminConfig.title,
    description: adminConfig.description,
    logo: adminConfig.logo,
    logoPosition: adminConfig.logoPosition,
    pages: adminConfig.pages?.map(page => ({
      name: page.name,
      title: page.title,
      description: page.description,
      elements: page.elements?.map(element => {
        const question = { ...element };
        
        // Handle image questions
        if (element.type === 'imagepicker' && element.imageLinks) {
          // Randomly select images for the survey
          const shuffled = [...element.imageLinks].sort(() => 0.5 - Math.random());
          const selectedImages = shuffled.slice(0, element.imageCount || 4);
          
          question.choices = selectedImages.map((url, index) => ({
            value: `image_${index}`,
            imageLink: url
          }));
          question.imageFit = "cover";
          question.multiSelect = element.multiSelect || false;
        }
        
        // Handle image display
        if (element.type === 'image' && element.imageLinks && element.imageLinks.length > 0) {
          // Randomly select one image
          const randomIndex = Math.floor(Math.random() * element.imageLinks.length);
          question.imageLink = element.imageLinks[randomIndex];
          question.imageFit = "cover";
          question.imageHeight = "300px";
          question.imageWidth = "100%";
        }
        
        return question;
      }) || []
    })) || [],
    ...adminConfig.settings
  };
};

// Generate custom theme based on admin config
export const generateCustomTheme = (adminConfig) => {
  if (!adminConfig.theme) {
    return null; // Use default theme
  }

  const theme = adminConfig.theme;
  
  return {
    "cssVariables": {
      // General background colors
      "--sjs-general-backcolor": theme.backgroundColor || "#ffffff",
      "--sjs-general-backcolor-dark": theme.cardBackground || "#f8f9fa",
      "--sjs-general-backcolor-dim": theme.headerBackground || "#fafafa",
      
      // Text colors
      "--sjs-general-forecolor": theme.textColor || "#212121",
      "--sjs-general-forecolor-light": theme.secondaryText || "#757575",
      "--sjs-general-dim-forecolor": theme.disabledText || "#bdbdbd",
      
      // Primary colors
      "--sjs-primary-backcolor": theme.primaryColor || "#1976d2",
      "--sjs-primary-backcolor-light": theme.primaryLight || "#42a5f5",
      "--sjs-primary-backcolor-dark": theme.primaryDark || "#1565c0",
      "--sjs-primary-forecolor": "#ffffff",
      
      // Secondary colors
      "--sjs-secondary-backcolor": theme.secondaryColor || "#dc004e",
      "--sjs-secondary-backcolor-light": theme.accentColor || "#ff9800",
      "--sjs-secondary-backcolor-semi-light": theme.successColor || "#4caf50",
      "--sjs-secondary-forecolor": "#ffffff",
      
      // Border colors
      "--sjs-border-light": theme.borderColor || "#e0e0e0",
      "--sjs-border-default": theme.borderColor || "#e0e0e0",
      "--sjs-border-inside": theme.borderColor || "#e0e0e0",
      
      // Focus and active states
      "--sjs-special-red": theme.accentColor || "#ff9800",
      "--sjs-special-green": theme.successColor || "#4caf50",
      "--sjs-special-blue": theme.focusBorder || theme.primaryColor || "#1976d2",
      
      // Shadows and effects
      "--sjs-shadow-small": "0px 1px 2px 0px rgba(0, 0, 0, 0.15)",
      "--sjs-shadow-medium": "0px 2px 6px 0px rgba(0, 0, 0, 0.1)",
      "--sjs-shadow-large": "0px 8px 16px 0px rgba(0, 0, 0, 0.1)",
      "--sjs-shadow-inner": "inset 0px 1px 2px 0px rgba(0, 0, 0, 0.15)",
      
      // Additional customizations for better appearance
      "--sjs-header-backcolor": theme.headerBackground || "#ffffff",
      "--sjs-corner-radius": "8px",
      "--sjs-base-unit": "8px",
      
      // Input and form elements
      "--sjs-editor-backcolor": theme.backgroundColor || "#ffffff",
      "--sjs-editorpanel-backcolor": theme.cardBackground || "#f8f9fa",
      "--sjs-editorpanel-hovercolor": theme.primaryLight || "#42a5f5",
      
      // Progress bar
      "--sjs-progressbar-color": theme.primaryColor || "#1976d2",
      
      // Question panel
      "--sjs-questionpanel-backcolor": theme.cardBackground || "#f8f9fa",
      "--sjs-questionpanel-hovercolor": theme.headerBackground || "#fafafa",
      "--sjs-questionpanel-cornerradius": "8px"
    },
    "themeName": "custom",
    "colorPalette": "light",
    "isPanelless": false
  };
};
