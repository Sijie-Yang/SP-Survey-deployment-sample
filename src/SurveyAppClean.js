import React, { useState, useEffect } from "react";
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
      
      console.log(`Survey config loaded: ${surveyConfig.pages.length} pages`);

      // Process preloaded images if available
      const preloadedImages = getPreloadedImages();
      
      if (preloadedImages && preloadedImages.length > 0) {
        console.log(`Using ${preloadedImages.length} preloaded images from deployment`);
        
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
                      value: `image_${index}`,
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
            screen_resolution: `${window.screen.width}x${window.screen.height}`,
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
