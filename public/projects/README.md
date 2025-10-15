# Projects

This directory contains individual survey projects created by users.

## Project Format

Each project is a JSON file with the following structure:

```json
{
  "project": {
    "id": "unique-project-id",
    "name": "Project Name",
    "description": "Project description",
    "createdAt": "2024-01-01T00:00:00.000Z",
    "lastModified": "2024-01-01T00:00:00.000Z",
    "templateId": "source-template-id-or-null"
  },
  "surveyConfig": {
    // Complete SurveyJS configuration
    "title": "Survey Title",
    "pages": [
      // Survey pages and questions
    ]
  },
  "supabaseConfig": {
    // Supabase connection settings (optional)
    "url": "https://project.supabase.co",
    "bucketPath": "survey-images"
  },
  "savedAt": "2024-01-01T00:00:00.000Z",
  "version": "2.0"
}
```

## Project Lifecycle

1. **Creation**: Projects are created from templates or from scratch
2. **Editing**: Survey configuration is modified in the admin panel
3. **Auto-save**: Changes are automatically saved to localStorage
4. **Export**: Projects can be exported as JSON files to this directory
5. **Backup**: Files in this directory serve as backups and can be shared

## File Management

- Each project has a unique ID used as the filename
- Projects are automatically loaded from this directory on startup
- Manual edits to JSON files will be reflected in the admin panel
- Deleted files will remove projects from the admin panel

## Sharing Projects

To share a project:
1. Copy the project JSON file
2. Place it in another user's `projects/` directory
3. The project will appear in their admin panel
