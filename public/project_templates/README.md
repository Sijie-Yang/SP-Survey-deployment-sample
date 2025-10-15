# Project Templates

This directory contains survey project templates that appear in the admin panel.

## Template Format

Each template is a JSON file with the following structure:

```json
{
  "id": "unique-template-id",
  "name": "Display Name",
  "description": "Template description",
  "author": "Author Name",
  "year": "2024",
  "category": "Academic Research|General|User Templates",
  "tags": ["tag1", "tag2"],
  "createdAt": "2024-01-01T00:00:00.000Z",
  "config": {
    // SurveyJS configuration object
    "title": "Survey Title",
    "description": "Survey description",
    "pages": [
      // Survey pages and questions
    ]
  }
}
```

## Adding New Templates

1. Create a new JSON file in this directory
2. Follow the template format above
3. The template will automatically appear in the admin panel
4. Users can copy templates to create new projects

## Built-in Templates

- `yang-2025.json` - Academic streetscape perception survey
- `basic-survey.json` - Simple general-purpose survey template

## User Templates

User-created templates are saved here when users export their projects as templates.
