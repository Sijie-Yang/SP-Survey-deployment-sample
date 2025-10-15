import React from 'react';
import { Box, Typography, Card, CardMedia, Button, Grid, ButtonGroup } from '@mui/material';

export default function ImageBooleanWidget({ question, value, onValueChanged }) {
  console.log('ImageBooleanWidget - question:', question);
  console.log('ImageBooleanWidget - question.choices:', question.choices);
  console.log('ImageBooleanWidget - current value:', value);

  const handleValueChange = (newValue) => {
    console.log('ImageBooleanWidget - value changed to:', newValue);
    onValueChanged(newValue);
  };

  if (!question.choices || question.choices.length === 0) {
    return (
      <Box sx={{ p: 2, textAlign: 'center', color: 'text.secondary' }}>
        <Typography>No images available for yes/no question</Typography>
        <Typography variant="caption">Choices: {JSON.stringify(question.choices)}</Typography>
      </Box>
    );
  }

  const imageCount = question.choices.length;
  const labelTrue = question.labelTrue || 'Yes';
  const labelFalse = question.labelFalse || 'No';

  // Single image display (larger)
  if (imageCount === 1) {
    const choice = question.choices[0];
    let imageLink;
    
    // Extract imageLink from SurveyJS ItemValue object
    if (choice.imageLink) {
      imageLink = choice.imageLink;
    } else if (choice.getPropertyValue) {
      imageLink = choice.getPropertyValue('imageLink');
    } else if (choice.propertyHash) {
      imageLink = choice.propertyHash.imageLink;
    }

    if (!imageLink) {
      return (
        <Box sx={{ p: 2, textAlign: 'center', color: 'error.main' }}>
          <Typography>Error: No image data found</Typography>
        </Box>
      );
    }

    return (
      <Box sx={{ width: '100%', maxWidth: 600, mx: 'auto' }}>
        <Card sx={{ mb: 3 }}>
          <CardMedia
            component="img"
            height="300"
            image={imageLink}
            alt="Image for yes/no question"
            sx={{ objectFit: 'cover' }}
          />
        </Card>
        
        <Box sx={{ textAlign: 'center' }}>
          <ButtonGroup variant="contained" size="large" sx={{ mb: 2 }}>
            <Button
              onClick={() => handleValueChange(true)}
              color={value === true ? 'primary' : 'inherit'}
              variant={value === true ? 'contained' : 'outlined'}
              sx={{ 
                minWidth: 120,
                fontWeight: value === true ? 'bold' : 'normal'
              }}
            >
              {labelTrue}
            </Button>
            <Button
              onClick={() => handleValueChange(false)}
              color={value === false ? 'primary' : 'inherit'}
              variant={value === false ? 'contained' : 'outlined'}
              sx={{ 
                minWidth: 120,
                fontWeight: value === false ? 'bold' : 'normal'
              }}
            >
              {labelFalse}
            </Button>
          </ButtonGroup>
        </Box>
      </Box>
    );
  }

  // Multiple images display (compact grid)
  return (
    <Box sx={{ width: '100%', maxWidth: 800, mx: 'auto' }}>
      <Grid container spacing={2} sx={{ mb: 3 }}>
        {question.choices.map((choice, index) => {
          let imageLink;
          
          // Extract imageLink from SurveyJS ItemValue object
          if (choice.imageLink) {
            imageLink = choice.imageLink;
          } else if (choice.getPropertyValue) {
            imageLink = choice.getPropertyValue('imageLink');
          } else if (choice.propertyHash) {
            imageLink = choice.propertyHash.imageLink;
          }

          if (!imageLink) {
            return (
              <Grid item xs={6} sm={4} md={3} key={index}>
                <Card sx={{ bgcolor: 'error.light', p: 2 }}>
                  <Typography variant="caption">No image data</Typography>
                </Card>
              </Grid>
            );
          }

          return (
            <Grid item xs={6} sm={4} md={3} key={index}>
              <Card>
                <CardMedia
                  component="img"
                  height="120"
                  image={imageLink}
                  alt={`Image ${index + 1}`}
                  sx={{ objectFit: 'cover' }}
                />
              </Card>
            </Grid>
          );
        })}
      </Grid>
      
      <Box sx={{ textAlign: 'center' }}>
        <Typography variant="body2" sx={{ mb: 2, color: 'text.secondary' }}>
          Based on the images shown above, please answer:
        </Typography>
        
        <ButtonGroup variant="contained" size="large" sx={{ mb: 2 }}>
          <Button
            onClick={() => handleValueChange(true)}
            color={value === true ? 'primary' : 'inherit'}
            variant={value === true ? 'contained' : 'outlined'}
            sx={{ 
              minWidth: 120,
              fontWeight: value === true ? 'bold' : 'normal'
            }}
          >
            {labelTrue}
          </Button>
          <Button
            onClick={() => handleValueChange(false)}
            color={value === false ? 'primary' : 'inherit'}
            variant={value === false ? 'contained' : 'outlined'}
            sx={{ 
              minWidth: 120,
              fontWeight: value === false ? 'bold' : 'normal'
            }}
          >
            {labelFalse}
          </Button>
        </ButtonGroup>
      </Box>
    </Box>
  );
}
