import React from 'react';
import { ReactQuestionFactory } from 'survey-react-ui';
import { Serializer, Question } from 'survey-core';
import ImageRankingWidget from './ImageRankingWidget';
import ImageRatingWidget from './ImageRatingWidget';
import ImageBooleanWidget from './ImageBooleanWidget';

// Define the custom question type
const WIDGET_NAME = 'imageranking';

// Register the custom question type with SurveyJS
export function registerImageRankingWidget() {
  console.log('Registering ImageRanking widget...');
  
  // First, add imageLink property to ItemValue
  Serializer.addProperty('itemvalue', {
    name: 'imageLink',
    category: 'general'
  });
  
  console.log('Added imageLink property to itemvalue');

  // Add custom properties to the serializer
  Serializer.addClass(
    WIDGET_NAME,
    [
      {
        name: 'choices:itemvalue[]',
        category: 'choices',
      },
      {
        name: 'imageCount:number',
        default: 4,
        category: 'general',
      },
      {
        name: 'imageSelectionMode',
        default: 'random',
        choices: ['random', 'manual'],
        category: 'general',
      },
      {
        name: 'selectedImageUrls:string[]',
        category: 'general',
      },
      {
        name: 'randomImageSelection:boolean',
        default: false,
        category: 'general',
      },
      {
        name: 'bucketPath',
        category: 'general',
      },
      {
        name: 'supabaseConfig',
        category: 'general',
      },
      {
        name: 'imageFit',
        default: 'cover',
        category: 'general',
      },
    ],
    function () {
      return new ImageRankingQuestion();
    },
    'question'
  );

  // Register the React component
  ReactQuestionFactory.Instance.registerQuestion(WIDGET_NAME, (props) => {
    console.log('ImageRanking component factory called with props:', props);
    return React.createElement(ImageRankingQuestionComponent, props);
  });
  
  console.log('ImageRanking widget registered successfully');
}

// Custom Question Class
class ImageRankingQuestion extends Question {
  getType() {
    return WIDGET_NAME;
  }

  // Ensure the value is always an array
  getValueCore() {
    const val = super.getValueCore();
    return Array.isArray(val) ? val : [];
  }

  setValueCore(newValue) {
    if (Array.isArray(newValue)) {
      super.setValueCore(newValue);
    }
  }
}

// React Component Wrapper
function ImageRankingQuestionComponent(props) {
  const { question } = props;

  console.log('ImageRankingQuestionComponent - props:', props);
  console.log('ImageRankingQuestionComponent - question:', question);
  console.log('ImageRankingQuestionComponent - question.choices:', question.choices);

  const handleValueChange = (newValue) => {
    console.log('ImageRankingQuestionComponent - handleValueChange:', newValue);
    question.value = newValue;
  };

  // Simple test rendering first
  if (!question.choices || question.choices.length === 0) {
    return (
      <div style={{ padding: '20px', border: '1px solid #ccc', backgroundColor: '#f9f9f9' }}>
        <p>Image Ranking Component Loaded</p>
        <p>No choices available yet. Choices: {JSON.stringify(question.choices)}</p>
        <p>Question type: {question.getType()}</p>
      </div>
    );
  }

  // Return only the widget content, let SurveyJS handle the question wrapper, title, and description
  return (
    <ImageRankingWidget
      question={question}
      value={question.value}
      onValueChanged={handleValueChange}
    />
  );
}

// Register Image Rating Widget
export function registerImageRatingWidget() {
  console.log('Registering ImageRating widget...');
  
  const RATING_WIDGET_NAME = 'imagerating';
  
  // First, add imageLink property to ItemValue (if not already added)
  Serializer.addProperty('itemvalue', {
    name: 'imageLink',
    category: 'general'
  });
  
  console.log('Added imageLink property to itemvalue for rating');

  // Add custom properties to the serializer
  Serializer.addClass(
    RATING_WIDGET_NAME,
    [
      {
        name: 'choices:itemvalue[]',
        category: 'choices',
      },
      {
        name: 'imageCount:number',
        default: 1,
        category: 'general',
      },
      {
        name: 'imageSelectionMode',
        default: 'random',
        choices: ['random', 'manual'],
        category: 'general',
      },
      {
        name: 'selectedImageUrls:string[]',
        category: 'general',
      },
      {
        name: 'randomImageSelection:boolean',
        default: false,
        category: 'general',
      },
      {
        name: 'bucketPath',
        category: 'general',
      },
      {
        name: 'supabaseConfig',
        category: 'general',
      },
      {
        name: 'imageFit',
        default: 'cover',
        category: 'general',
      },
      {
        name: 'rateMin:number',
        default: 1,
        category: 'general',
      },
      {
        name: 'rateMax:number',
        default: 5,
        category: 'general',
      },
      {
        name: 'minRateDescription',
        category: 'general',
      },
      {
        name: 'maxRateDescription',
        category: 'general',
      },
    ],
    function () {
      return new ImageRatingQuestion();
    },
    'question'
  );

  // Register the React component
  ReactQuestionFactory.Instance.registerQuestion(RATING_WIDGET_NAME, (props) => {
    console.log('ImageRating component factory called with props:', props);
    return React.createElement(ImageRatingQuestionComponent, props);
  });
  
  console.log('ImageRating widget registered successfully');
}

// Custom Question Class for Image Rating
class ImageRatingQuestion extends Question {
  getType() {
    return 'imagerating';
  }

  // Ensure the value is a number (rating value)
  getValueCore() {
    const val = super.getValueCore();
    return typeof val === 'number' ? val : null;
  }

  setValueCore(newValue) {
    if (typeof newValue === 'number' || newValue === null) {
      super.setValueCore(newValue);
    }
  }
}

// React Component Wrapper for Image Rating
function ImageRatingQuestionComponent(props) {
  const { question } = props;

  console.log('ImageRatingQuestionComponent - props:', props);
  console.log('ImageRatingQuestionComponent - question:', question);
  console.log('ImageRatingQuestionComponent - question.choices:', question.choices);

  const handleValueChange = (newValue) => {
    console.log('ImageRatingQuestionComponent - handleValueChange:', newValue);
    question.value = newValue;
  };

  // Simple test rendering first
  if (!question.choices || question.choices.length === 0) {
    return (
      <div style={{ padding: '20px', border: '1px solid #ccc', backgroundColor: '#f9f9f9' }}>
        <p>Image Rating Component Loaded</p>
        <p>No choices available yet. Choices: {JSON.stringify(question.choices)}</p>
        <p>Question type: {question.getType()}</p>
      </div>
    );
  }

  // Return only the widget content, let SurveyJS handle the question wrapper, title, and description
  return (
    <ImageRatingWidget
      question={question}
      value={question.value}
      onValueChanged={handleValueChange}
    />
  );
}

// Register Image Boolean Widget
export function registerImageBooleanWidget() {
  console.log('Registering ImageBoolean widget...');
  
  const BOOLEAN_WIDGET_NAME = 'imageboolean';
  
  // First, add imageLink property to ItemValue (if not already added)
  Serializer.addProperty('itemvalue', {
    name: 'imageLink',
    category: 'general'
  });
  
  console.log('Added imageLink property to itemvalue for boolean');

  // Add custom properties to the serializer
  Serializer.addClass(
    BOOLEAN_WIDGET_NAME,
    [
      {
        name: 'choices:itemvalue[]',
        category: 'choices',
      },
      {
        name: 'imageCount:number',
        default: 1,
        category: 'general',
      },
      {
        name: 'imageSelectionMode',
        default: 'random',
        choices: ['random', 'manual'],
        category: 'general',
      },
      {
        name: 'selectedImageUrls:string[]',
        category: 'general',
      },
      {
        name: 'randomImageSelection:boolean',
        default: false,
        category: 'general',
      },
      {
        name: 'bucketPath',
        category: 'general',
      },
      {
        name: 'supabaseConfig',
        category: 'general',
      },
      {
        name: 'imageFit',
        default: 'cover',
        category: 'general',
      },
      {
        name: 'labelTrue',
        default: 'Yes',
        category: 'general',
      },
      {
        name: 'labelFalse',
        default: 'No',
        category: 'general',
      },
    ],
    function () {
      return new ImageBooleanQuestion();
    },
    'question'
  );

  // Register the React component
  ReactQuestionFactory.Instance.registerQuestion(BOOLEAN_WIDGET_NAME, (props) => {
    console.log('ImageBoolean component factory called with props:', props);
    return React.createElement(ImageBooleanQuestionComponent, props);
  });
  
  console.log('ImageBoolean widget registered successfully');
}

// Custom Question Class for Image Boolean
class ImageBooleanQuestion extends Question {
  getType() {
    return 'imageboolean';
  }

  // Ensure the value is a boolean
  getValueCore() {
    const val = super.getValueCore();
    return typeof val === 'boolean' ? val : null;
  }

  setValueCore(newValue) {
    if (typeof newValue === 'boolean' || newValue === null) {
      super.setValueCore(newValue);
    }
  }
}

// React Component Wrapper for Image Boolean
function ImageBooleanQuestionComponent(props) {
  const { question } = props;

  console.log('ImageBooleanQuestionComponent - props:', props);
  console.log('ImageBooleanQuestionComponent - question:', question);
  console.log('ImageBooleanQuestionComponent - question.choices:', question.choices);

  const handleValueChange = (newValue) => {
    console.log('ImageBooleanQuestionComponent - handleValueChange:', newValue);
    question.value = newValue;
  };

  // Simple test rendering first
  if (!question.choices || question.choices.length === 0) {
    return (
      <div style={{ padding: '20px', border: '1px solid #ccc', backgroundColor: '#f9f9f9' }}>
        <p>Image Boolean Component Loaded</p>
        <p>No choices available yet. Choices: {JSON.stringify(question.choices)}</p>
        <p>Question type: {question.getType()}</p>
      </div>
    );
  }

  // Return only the widget content, let SurveyJS handle the question wrapper, title, and description
  return (
    <ImageBooleanWidget
      question={question}
      value={question.value}
      onValueChanged={handleValueChange}
    />
  );
}

// Export default registration function
export default registerImageRankingWidget;
