import { getImagesFromHuggingFace } from './huggingface';

export const prepareDeploymentFolder = async (currentProject) => {
  try {
    console.log('🚀 Preparing deployment folder...');
    
    // 1. Create deployment folder structure
    const deploymentData = {
      projectName: currentProject?.name || 'survey-project',
      timestamp: new Date().toISOString(),
      config: currentProject,
      preloadedImages: null
    };

    // 2. Pre-fetch all Hugging Face images if configured
    if (currentProject?.imageDatasetConfig?.enabled && currentProject?.imageDatasetConfig?.datasetName) {
      console.log('📸 Pre-fetching Hugging Face images...');
      deploymentData.preloadedImages = await preloadHuggingFaceImages(currentProject.imageDatasetConfig);
    }

    // 3. Generate deployment files
    const deploymentFiles = await generateDeploymentFiles(deploymentData);
    
    // 4. Create the deployment folder
    const response = await fetch('http://localhost:3001/api/create-deployment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        projectName: deploymentData.projectName,
        files: deploymentFiles
      })
    });

    if (!response.ok) {
      throw new Error(`Failed to create deployment folder: ${response.statusText}`);
    }

    const result = await response.json();
    return {
      success: true,
      deploymentPath: result.deploymentPath,
      preloadedImageCount: deploymentData.preloadedImages?.length || 0,
      message: `Deployment folder created successfully at: ${result.deploymentPath}`
    };

  } catch (error) {
    console.error('❌ Deployment preparation failed:', error);
    return {
      success: false,
      error: error.message
    };
  }
};

const preloadHuggingFaceImages = async (imageDatasetConfig) => {
  try {
    const { huggingFaceToken, datasetName } = imageDatasetConfig;
    
    console.log(`🔄 Loading all images from dataset: ${datasetName}`);
    
    // Load ALL images from the dataset
    const allImages = [];
    let offset = 0;
    const batchSize = 100;
    let hasMore = true;
    
    while (hasMore) {
      const result = await getImagesFromHuggingFace(huggingFaceToken, datasetName, batchSize, offset);
      
      if (result.success && result.images.length > 0) {
        allImages.push(...result.images);
        offset += batchSize;
        
        console.log(`📥 Loaded batch: ${result.images.length} images (total: ${allImages.length})`);
        
        // Check if we've reached the end
        if (result.images.length < batchSize || (result.total && offset >= result.total)) {
          hasMore = false;
        }
      } else {
        hasMore = false;
        if (allImages.length === 0) {
          throw new Error(`Failed to load images: ${result.error}`);
        }
      }
    }
    
    console.log(`✅ Successfully preloaded ${allImages.length} images from Hugging Face`);
    return allImages;
    
  } catch (error) {
    console.error('❌ Failed to preload Hugging Face images:', error);
    throw error;
  }
};

const generateDeploymentFiles = async (deploymentData) => {
  const files = {};
  
  // 1. Package.json for deployment (survey-only, minimal dependencies)
  files['package.json'] = JSON.stringify({
    "name": deploymentData.projectName.toLowerCase().replace(/[^a-z0-9-]/g, '-'),
    "version": "1.0.0",
    "private": true,
    "dependencies": {
      "@dnd-kit/core": "^6.0.8",
      "@dnd-kit/sortable": "^7.0.2",
      "@dnd-kit/utilities": "^3.2.1",
      "@emotion/react": "^11.11.1",
      "@emotion/styled": "^11.11.0",
      "@mui/material": "^5.14.20",
      "@supabase/supabase-js": "^2.38.4",
      "react": "^18.2.0",
      "react-dom": "^18.2.0",
      "react-scripts": "5.0.1",
      "survey-core": "^1.9.131",
      "survey-react-ui": "^1.9.131"
    },
    "scripts": {
      "start": "react-scripts start",
      "build": "react-scripts build",
      "test": "react-scripts test",
      "eject": "react-scripts eject"
    },
    "eslintConfig": {
      "extends": [
        "react-app",
        "react-app/jest"
      ]
    },
    "browserslist": {
      "production": [
        ">0.2%",
        "not dead",
        "not op_mini all"
      ],
      "development": [
        "last 1 chrome version",
        "last 1 firefox version",
        "last 1 safari version"
      ]
    }
  }, null, 2);

  // 2. Vercel configuration (survey-only SPA)
  files['vercel.json'] = JSON.stringify({
    "rewrites": [
      {
        "source": "/(.*)",
        "destination": "/index.html"
      }
    ]
  }, null, 2);

  // 3. Environment template
  files['.env.example'] = `# Supabase Configuration
REACT_APP_SUPABASE_URL=your-supabase-project-url
REACT_APP_SUPABASE_ANON_KEY=your-supabase-anon-key

# Hugging Face Configuration (Optional)
REACT_APP_HUGGINGFACE_TOKEN=your-huggingface-token

# Production Settings
REACT_APP_ENVIRONMENT=production
GENERATE_SOURCEMAP=false`;

  // 4. README for deployment
  files['README.md'] = `# ${deploymentData.projectName}

This is a survey application built with React and deployed on Vercel.

## Quick Start

1. Clone this repository
2. Install dependencies: \`npm install\`
3. Copy \`.env.example\` to \`.env\` and fill in your configuration
4. Start development server: \`npm start\`
5. Build for production: \`npm run build\`

## Deployment

This project is configured for easy deployment on Vercel:

1. Push to GitHub
2. Connect your repository to Vercel
3. Set environment variables in Vercel dashboard
4. Deploy automatically

## Configuration

- **Supabase**: Database for storing survey responses
- **Hugging Face**: Image datasets for survey questions
- **Vercel**: Hosting and deployment platform

Generated on: ${new Date(deploymentData.timestamp).toLocaleString()}
`;

  // 5. Project configuration with preloaded images
  if (deploymentData.config) {
    const configWithPreloadedImages = { ...deploymentData.config };
    
    // Add preloaded images to the configuration
    if (deploymentData.preloadedImages) {
      configWithPreloadedImages.preloadedImages = deploymentData.preloadedImages;
      configWithPreloadedImages.imagePreloadTimestamp = deploymentData.timestamp;
    }
    
    files['src/config/deploymentConfig.js'] = `// Auto-generated deployment configuration
// Generated on: ${new Date(deploymentData.timestamp).toLocaleString()}

export const deploymentConfig = ${JSON.stringify(configWithPreloadedImages, null, 2)};

export const getPreloadedImages = () => {
  return deploymentConfig.preloadedImages || [];
};

export const isImagePreloaded = () => {
  return deploymentConfig.preloadedImages && deploymentConfig.preloadedImages.length > 0;
};
`;
  }

  // 6. Generate simplified App.js for deployment (Survey only, no Admin)
  files['src/App.js'] = `import React from "react";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import SurveyAppClean from "./SurveyAppClean";

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <SurveyAppClean />
    </ThemeProvider>
  );
}
`;

  // 7. Generate clean SurveyApp without navigation buttons (deployment-only)
  files['src/SurveyAppClean.js'] = `import React, { useState, useEffect } from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.min.css";
import { Box, Alert, CircularProgress, Typography } from '@mui/material';
import { saveSurveyResponse } from './lib/supabase';
import { deploymentConfig, getPreloadedImages } from './config/deploymentConfig';
import { generateCustomTheme } from './lib/surveyStorage';
import registerImageRankingWidget, { registerImageRatingWidget, registerImageBooleanWidget } from './components/SurveyCustomComponents';

export default function SurveyAppClean() {
  const [surveyModel, setSurveyModel] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    initializeSurvey();
  }, []);

  const initializeSurvey = async () => {
    try {
      setLoading(true);
      console.log('Starting survey initialization...');
      
      // Register custom components
      registerImageRankingWidget();
      registerImageRatingWidget();
      registerImageBooleanWidget();
      console.log('Custom widgets registered');
      
      // Deep clone deployment configuration to avoid mutations
      const surveyConfig = JSON.parse(JSON.stringify(deploymentConfig));
      
      if (!surveyConfig) {
        throw new Error('Deployment configuration not found');
      }
      
      if (!surveyConfig.pages || surveyConfig.pages.length === 0) {
        throw new Error('No pages found in survey configuration');
      }
      
      console.log(\`Survey config loaded: \${surveyConfig.pages.length} pages\`);

      // Process preloaded images if available
      const preloadedImages = getPreloadedImages();
      
      if (preloadedImages && preloadedImages.length > 0) {
        console.log(\`Using \${preloadedImages.length} preloaded images from deployment\`);
        
        // Replace image URLs in survey config with preloaded ones
        if (surveyConfig.pages) {
          for (const page of surveyConfig.pages) {
            if (page.elements) {
              for (const element of page.elements) {
                // Handle different image question types
                if (element.randomImageSelection && preloadedImages.length > 0) {
                  const imageCount = element.imageCount || 4;
                  const shuffled = [...preloadedImages].sort(() => 0.5 - Math.random());
                  const selectedImages = shuffled.slice(0, imageCount);
                  
                  if (element.type === 'image') {
                    element.imageLink = selectedImages[0].url;
                  } else {
                    element.choices = selectedImages.map((image, index) => ({
                      value: \`image_\${index}\`,
                      imageLink: image.url
                    }));
                  }
                  element.imageFit = "cover";
                }
              }
            }
          }
        }
      } else {
        console.warn('No preloaded images available');
      }

      // Create survey model
      console.log('Creating survey model...');
      const model = new Model(surveyConfig);
      console.log('Survey model created successfully');
      
      // Apply theme
      if (surveyConfig.theme) {
        const customTheme = generateCustomTheme(surveyConfig);
        if (customTheme) {
          model.applyTheme(customTheme);
        }
      }
      
      // Apply survey configuration
      model.title = surveyConfig.title || '';
      model.description = surveyConfig.description || '';
      model.logo = surveyConfig.logo || '';
      model.logoPosition = surveyConfig.logoPosition || 'right';

      // Handle survey completion
      model.onComplete.add(async (survey, options) => {
        const responses = survey.data;
        
        const completeData = {
          responses: responses,
          survey_metadata: {
            completion_time: new Date().toISOString(),
            user_agent: navigator.userAgent,
            screen_resolution: \`\${window.screen.width}x\${window.screen.height}\`,
            survey_version: deploymentConfig.name || 'deployment',
            project_id: deploymentConfig.id || 'unknown'
          }
        };
        
        console.log("Survey completed:", completeData);
        
        // Save to Supabase
        const result = await saveSurveyResponse(completeData);
        
        if (result.success) {
          const storageMessage = result.storage === 'localStorage' 
            ? "Thank you for completing the survey! Your responses have been saved locally."
            : "Thank you for completing the survey! Your responses have been saved.";
          alert(storageMessage);
        } else {
          console.error("Failed to save survey response:", result.error);
          alert("There was an error saving your responses. Please try again.");
        }
      });

      setSurveyModel(model);
      setError(null);
    } catch (err) {
      console.error('Error initializing survey:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh', gap: 2 }}>
        <CircularProgress />
        <Typography variant="body2" color="text.secondary">Loading survey...</Typography>
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ p: 3, maxWidth: 800, mx: 'auto', mt: 4 }}>
        <Alert severity="error">
          <strong>Error loading survey:</strong><br/>
          {error}
          <br/><br/>
          Please check the browser console (F12) for more details.
        </Alert>
      </Box>
    );
  }

  if (!surveyModel) {
    return (
      <Box sx={{ p: 3, maxWidth: 800, mx: 'auto', mt: 4 }}>
        <Alert severity="warning">
          Survey model not initialized. Please refresh the page.
        </Alert>
      </Box>
    );
  }

  return (
    <Box>
      <Survey model={surveyModel} />
    </Box>
  );
}
`;

  // 7. .gitignore file for deployment
  files['.gitignore'] = `# Dependencies
node_modules/
/.pnp
.pnp.js

# Testing
/coverage

# Production build
/build

# Misc
.DS_Store
.env.local
.env.development.local
.env.test.local
.env.production.local

# Logs
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# IDE
.vscode/
.idea/
*.swp
*.swo
*~

# OS
Thumbs.db

# Optional: Uncomment if you want to exclude the deployment config
# src/config/deploymentConfig.js
`;

  // 8. Deployment instructions
  files['DEPLOYMENT.md'] = `# Deployment Instructions

## Step 1: Prepare Repository

This folder contains all the files needed for deployment.

**IMPORTANT: Run these commands from THIS deployment folder, not the source directory!**

### 📁 Files Included

- ✅ Source code (src/)
- ✅ Public assets (public/)
- ✅ Package configuration (package.json)
- ✅ Deployment config with preloaded images
- ✅ .gitignore (excludes node_modules/, build/, etc.)

**Note:** The \`.gitignore\` file is configured to exclude:
- \`node_modules/\` - Will be reinstalled on Vercel
- \`build/\` - Will be rebuilt on Vercel
- IDE and OS temporary files

This keeps your repository clean and avoids uploading large files to GitHub.

\`\`\`bash
# Make sure you're in the deployment folder
pwd  # Should show: .../deployments/your-project-name-timestamp

# Install dependencies and test build
npm install
npm run build

# Initialize git repository
git init
git add .
git commit -m "Initial survey deployment setup"

# Add remote repository (replace with your GitHub repo URL)
git remote add origin https://github.com/yourusername/your-survey-repo.git
git branch -M main
git push -u origin main
\`\`\`

## Step 2: Deploy to Vercel

1. Go to [vercel.com/new](https://vercel.com/new)
2. Import your GitHub repository
3. Configure environment variables:
   - Copy values from \`.env.example\`
   - Set them in Vercel dashboard under Settings → Environment Variables
4. Deploy!

## Step 3: Test Your Survey

- Live Survey: \`https://your-project.vercel.app/\`

**Note:** This deployment is survey-only. No admin panel is included in the deployed version.

## Preloaded Images

${deploymentData.preloadedImages ? 
  `✅ This deployment includes ${deploymentData.preloadedImages.length} preloaded images from Hugging Face.
This will significantly improve loading speed for survey participants.` : 
  `ℹ️ No images were preloaded. Images will be loaded dynamically during the survey.`}

---
Generated on: ${new Date(deploymentData.timestamp).toLocaleString()}
`;

  return files;
};

export const getDeploymentStatus = async () => {
  try {
    const response = await fetch('http://localhost:3001/api/deployment-status');
    if (!response.ok) {
      throw new Error('Failed to get deployment status');
    }
    return await response.json();
  } catch (error) {
    console.error('Failed to get deployment status:', error);
    return { deployments: [] };
  }
};

export const testDeployment = async (deploymentPath) => {
  try {
    console.log('🧪 Testing deployment build...');
    
    const response = await fetch('http://localhost:3001/api/test-deployment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ deploymentPath })
    });

    if (!response.ok) {
      throw new Error(`Failed to test deployment: ${response.statusText}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('❌ Deployment test failed:', error);
    return {
      success: false,
      error: error.message
    };
  }
};

export const uploadToGitHub = async (deploymentPath, githubRepoUrl, commitMessage = 'Initial deployment setup') => {
  try {
    console.log('📤 Uploading to GitHub...');
    
    const response = await fetch('http://localhost:3001/api/upload-to-github', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
        deploymentPath,
        githubRepoUrl,
        commitMessage
      })
    });

    if (!response.ok) {
      throw new Error(`Failed to upload to GitHub: ${response.statusText}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('❌ GitHub upload failed:', error);
    return {
      success: false,
      error: error.message
    };
  }
};
