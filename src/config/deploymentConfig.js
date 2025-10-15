// Auto-generated deployment configuration
// Generated on: 15/10/2025, 12:38:18

export const deploymentConfig = {
  "id": "proj_1760443900832_5fq0x84sh",
  "name": "Yang et al. 2025 - New",
  "description": "This survey investigates how people perceive different urban streetscape environments. Based on the methodology from Yang et al. 2025.",
  "createdAt": "2025-10-14T12:11:40.832Z",
  "lastModified": "2025-10-14T14:16:22.163Z",
  "templateId": "yang-2025",
  "supabaseConfig": {
    "url": "https://hsblghbczhayitazlhsh.supabase.co",
    "secretKey": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhzYmxnaGJjemhheWl0YXpsaHNoIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0OTk0MjMyNywiZXhwIjoyMDY1NTE4MzI3fQ.6KG1OeV_yjTByAJGDyGt7kgem2jWLzlQ0HVdPZUExEc",
    "bucketPath": "street-images",
    "enabled": true
  },
  "imageDatasetConfig": {
    "huggingFaceToken": "",
    "datasetName": "sijiey/Thermal-Affordance-Dataset",
    "enabled": true
  },
  "title": "Yang et al. 2025 - New6",
  "logo": "",
  "logoPosition": "right",
  "settings": {
    "showQuestionNumbers": "off",
    "showProgressBar": "aboveheader",
    "progressBarType": "questions",
    "autoGrowComment": true,
    "showPreviewBeforeComplete": "showAllQuestions"
  },
  "images": [],
  "pages": [
    {
      "name": "demographics",
      "title": "Part 1: Background Information",
      "description": "Please tell us a bit about yourself. All questions are optional.",
      "elements": [
        {
          "type": "dropdown",
          "name": "age_group",
          "title": "What is your age group?",
          "isRequired": true,
          "choices": [
            {
              "value": "18-24",
              "text": "18-24 years"
            },
            {
              "value": "25-34",
              "text": "25-34 years"
            },
            {
              "value": "35-44",
              "text": "35-44 years"
            },
            {
              "value": "45-54",
              "text": "45-54 years"
            },
            {
              "value": "55-64",
              "text": "55-64 years"
            },
            {
              "value": "65+",
              "text": "65+ years"
            }
          ]
        },
        {
          "type": "dropdown",
          "name": "education",
          "title": "What is your highest level of education?",
          "isRequired": false,
          "choices": [
            {
              "value": "high_school",
              "text": "High School"
            },
            {
              "value": "bachelor",
              "text": "Bachelor's Degree"
            },
            {
              "value": "master",
              "text": "Master's Degree"
            },
            {
              "value": "phd",
              "text": "PhD/Doctorate"
            },
            {
              "value": "other",
              "text": "Other"
            }
          ]
        }
      ]
    },
    {
      "name": "streetscape_evaluation",
      "title": "Part 2: Streetscape Evaluation",
      "description": "Please evaluate the following street environments based on your perception.",
      "elements": [
        {
          "type": "imagepicker",
          "name": "street_preference",
          "title": "Which street environment do you find most appealing?",
          "description": "Select the street image that you find most visually appealing and comfortable.",
          "isRequired": true,
          "imageLinks": [],
          "imageCount": 4,
          "multiSelect": false,
          "imageSelectionMode": "random",
          "selectedImageUrls": [
            "https://hsblghbczhayitazlhsh.supabase.co/storage/v1/object/public/street-images/10188_103.828278905746_1.44319655784859.jpg",
            "https://hsblghbczhayitazlhsh.supabase.co/storage/v1/object/public/street-images/10480_103.758699183904_1.31736295161644.jpg",
            "https://hsblghbczhayitazlhsh.supabase.co/storage/v1/object/public/street-images/10588_103.97534255475_1.37690724605747.jpg",
            "https://hsblghbczhayitazlhsh.supabase.co/storage/v1/object/public/street-images/10396_103.687376020797_1.32301216979197.jpg"
          ],
          "imageFit": "cover",
          "randomImageSelection": true,
          "bucketPath": "street-images",
          "supabaseConfig": {
            "url": "https://hsblghbczhayitazlhsh.supabase.co",
            "secretKey": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhzYmxnaGJjemhheWl0YXpsaHNoIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0OTk0MjMyNywiZXhwIjoyMDY1NTE4MzI3fQ.6KG1OeV_yjTByAJGDyGt7kgem2jWLzlQ0HVdPZUExEc",
            "bucketPath": "street-images",
            "enabled": true
          },
          "choices": [
            {
              "value": "image_0",
              "imageLink": "https://hsblghbczhayitazlhsh.supabase.co/storage/v1/object/public/street-images/22589_103.767410209669_1.35990597789132.jpg"
            },
            {
              "value": "image_1",
              "imageLink": "https://hsblghbczhayitazlhsh.supabase.co/storage/v1/object/public/street-images/86808_103.678452503693_1.32803208871469.jpg"
            },
            {
              "value": "image_2",
              "imageLink": "https://hsblghbczhayitazlhsh.supabase.co/storage/v1/object/public/street-images/87082_103.719026641998_1.33534299179013.jpg"
            },
            {
              "value": "image_3",
              "imageLink": "https://hsblghbczhayitazlhsh.supabase.co/storage/v1/object/public/street-images/49994_103.961147064639_1.34333009729117.jpg"
            }
          ]
        },
        {
          "type": "rating",
          "name": "perception_ratings",
          "title": "Rate your perception of the street environments",
          "description": "Please rate each aspect on a scale from 1 (Very Poor) to 5 (Excellent)",
          "isRequired": true,
          "columns": [
            {
              "value": "1",
              "text": "1 - Very Poor"
            },
            {
              "value": "2",
              "text": "2 - Poor"
            },
            {
              "value": "3",
              "text": "3 - Neutral"
            },
            {
              "value": "4",
              "text": "4 - Good"
            },
            {
              "value": "5",
              "text": "5 - Excellent"
            }
          ],
          "rows": [
            {
              "value": "safety",
              "text": "Safety"
            },
            {
              "value": "walkability",
              "text": "Walkability"
            },
            {
              "value": "aesthetics",
              "text": "Visual Appeal"
            },
            {
              "value": "comfort",
              "text": "Comfort"
            },
            {
              "value": "accessibility",
              "text": "Accessibility"
            }
          ]
        },
        {
          "type": "comment",
          "name": "question_1760448342878",
          "title": "New Question",
          "isRequired": false,
          "imageSelectionMode": "random",
          "imageFit": "cover",
          "randomImageSelection": true,
          "bucketPath": "street-images",
          "supabaseConfig": {
            "url": "https://hsblghbczhayitazlhsh.supabase.co",
            "secretKey": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhzYmxnaGJjemhheWl0YXpsaHNoIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0OTk0MjMyNywiZXhwIjoyMDY1NTE4MzI3fQ.6KG1OeV_yjTByAJGDyGt7kgem2jWLzlQ0HVdPZUExEc",
            "bucketPath": "street-images",
            "enabled": true
          },
          "isImageRanking": true,
          "imageHeight": "150px",
          "imageWidth": "150px",
          "choicesDisplayMode": "image",
          "multiSelect": true,
          "maxSelectedChoices": 4,
          "minSelectedChoices": 4,
          "description": "Do you like this place",
          "choices": [
            {
              "value": "image_0",
              "imageLink": "https://hsblghbczhayitazlhsh.supabase.co/storage/v1/object/public/street-images/12575_103.851037624618_1.31487053077719.jpg"
            },
            {
              "value": "image_1",
              "imageLink": "https://hsblghbczhayitazlhsh.supabase.co/storage/v1/object/public/street-images/30695_103.73112907434_1.38149353199118.jpg"
            },
            {
              "value": "image_2",
              "imageLink": "https://hsblghbczhayitazlhsh.supabase.co/storage/v1/object/public/street-images/45630_103.88044985545_1.363337736928.jpg"
            },
            {
              "value": "image_3",
              "imageLink": "https://hsblghbczhayitazlhsh.supabase.co/storage/v1/object/public/street-images/79298_103.924234646448_1.31501335144199.jpg"
            }
          ]
        },
        {
          "type": "imagerating",
          "name": "question_1760451159254",
          "title": "New Question",
          "isRequired": false,
          "rateMax": 5,
          "imageCount": 4,
          "imageFit": "cover",
          "minRateDescription": "1",
          "maxRateDescription": "10",
          "imageSelectionMode": "huggingface_random",
          "randomImageSelection": true,
          "bucketPath": "street-images",
          "supabaseConfig": {
            "url": "https://hsblghbczhayitazlhsh.supabase.co",
            "secretKey": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhzYmxnaGJjemhheWl0YXpsaHNoIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0OTk0MjMyNywiZXhwIjoyMDY1NTE4MzI3fQ.6KG1OeV_yjTByAJGDyGt7kgem2jWLzlQ0HVdPZUExEc",
            "bucketPath": "street-images",
            "enabled": true
          },
          "imageSource": "huggingface",
          "huggingFaceConfig": {
            "huggingFaceToken": "",
            "datasetName": "sijiey/Thermal-Affordance-Dataset",
            "enabled": true
          },
          "choices": [
            {
              "value": "image_0",
              "imageLink": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/91/image/image.jpg?Expires=1760459689&Signature=zh8wtn~wqIeudtpPLL60UuAj~PxQvQTD1KEikOJm3UscnJSHlPHz30YUGdBQhMdrSm2BymEBniSI8zqDEnb2q9AC5asyefx4yacn4NJSBH67p2WXohaL71H3akJBjDuO9VvnOmuA0yW65ytrL2~mRhiLR22vB76ekaJS3IN-bLFAFlN2R3TPCBF3GV3nzklDNKMsFTgqWWBTQo6X3P2qyD6KjTYYIFH1AggktoS760r6Vlh69v7av0dZDiGXYShLSdzGhrIFp-TLDUMrEPDzKNQDYqdrXlLR7cR1qBoa~Mln9UNDN~O7BfU8T9lkCb~vW3vOZdDeodi6681pDPLPPw__&Key-Pair-Id=K3EI6M078Z3AC3"
            },
            {
              "value": "image_1",
              "imageLink": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/214/image/image.jpg?Expires=1760459689&Signature=qMN5wGeo0b2wWmhYVVbk-ABpDVgpahG2aFtScK6Q3B2sQ1si~bSZcbDRI9MlS0qZFuRCUFdNCN5kfM9CWr061dQWCXI-IIRMyNyQjZOHqSSzYZyVPbm5mcA7O894HHfj0oZvrb6OkXcQ7pLTP35njJsvzG~EOU54Suv4Z26ZdiK8BK8xm3I0Xv9tjb7EpWtIpW5Ax7cOXYjFKgxFKlQ46-CJE~46mcHA0FAn-lwLJFgBGeAMt8iX5het0K1UxlpbjtFo4wlrQ36UQptQuovy~OorgKAYSgTbNxu2TDooLiWUOYqGhBDqPy6S3NE0Q8mitsnaWO8HYOik7lJS8x76Fg__&Key-Pair-Id=K3EI6M078Z3AC3"
            },
            {
              "value": "image_2",
              "imageLink": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/421/image/image.jpg?Expires=1760459690&Signature=Eh3OGLaGKgY17F7W6vRQAtoO7hKXnxH7UynPj6Hub5IloI9S43l0ZI1twB94YLFYn1~~ZqyyLu-3Nrs7c8Utbuy-0FaHjKPWaNVYi~SAkKs6dqcUU9z-K~aHu~4N6-ZwwWYaWO2xQESSAbzozjihATT8k291FkjgTLTsOQq1R5s3JWQdnEYdx-M9arFXBwac5gZRcZ-Qwtpm07Wu5o2PttNV2jgVLLasW4pwob4rZVdGnIbRuxeEvnAyOmRWSQv2C0GFkR-3XF8nz600cmulw64Nu-CCB6s2LRTNvjoi3fC9rHsjdnP5i2~g8dNF3ciCB1gU5OYsMQAfV-t-2Er9Og__&Key-Pair-Id=K3EI6M078Z3AC3"
            },
            {
              "value": "image_3",
              "imageLink": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/143/image/image.jpg?Expires=1760459695&Signature=UOEcFX0R-AI4Ko5f9LWaWwN8EeETNkZK9qJ5AOiAsExDopxRhWaoiCN0L942IBsZfr65Hve3IUzWQW5SNONZBkTLeuVLyfxuq0MbxfU7D7E33rZfnp4PzK9DKY1mYMGBLj6WWkIqk8sEKxkb0~DGRYjuLWm3VHaEOFOBKbhZ0vEBGYA699QRSLKecYUEp3CHeb78-2wrapTdRAzkRCJhJxlgaPWQc5Iqf128o6Ye~~aCI4xCwkNYOhG4hEJTEYpW4nefWhio1l6iKaRyZyeuvQGzm-sPnXON92pn3cnmN-YO8t6QpE8nn80IzxDLB7Z9PNeS~phuGHV3Mj42dI-Bww__&Key-Pair-Id=K3EI6M078Z3AC3"
            }
          ]
        },
        {
          "type": "imageranking",
          "name": "question_1760451904690",
          "title": "New Question",
          "isRequired": false,
          "imageSelectionMode": "huggingface_random",
          "imageFit": "cover",
          "randomImageSelection": true,
          "imageSource": "huggingface",
          "huggingFaceConfig": {
            "huggingFaceToken": "",
            "datasetName": "sijiey/Thermal-Affordance-Dataset",
            "enabled": true
          },
          "choices": [
            {
              "value": "image_0",
              "imageLink": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/70/image/image.jpg?Expires=1760459692&Signature=VknXoYJrt8p2Sx0zbHH7yRf03Rp5PEdflqY--VPgJyFGJEbPZk37KHbmsa8zps-0BCtV3dexsJfaLKh1feAUKjF2iAi7P3V7WFIYQ5FCytTlqEyzMkNoa3GK4HglZN6Dxrk43ajMyCdYQ~1X97cq2QNjdxyZuViOvx2DHCPiDssn8jG6IzRb7pkqHlCzKGAJjuLYQ4AaWpmpMdD3zAZSnagz63lSxxoSwQuKu61ZzdvURihHDMihO0DtMjjCn-~u~scjtLq9uN4V7qYXZnqTy~QwILusiwz4~edwdFY4wQFxjrL4--I0pZa6INmuojRwYnOpXjOyNtBDkrmANdsccw__&Key-Pair-Id=K3EI6M078Z3AC3"
            },
            {
              "value": "image_1",
              "imageLink": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/151/image/image.jpg?Expires=1760459696&Signature=PuREfycuzUOvm-WKeopxZBy3j-BSYVX9oPZpS2Q848JGp6vDLxOekBZx-73Y3kdIo5sxG5swwvMX7WRsfu1IaUxROUseHVd9RnoL8od~nKnTKGrzrFkF56NoHYglmepNTHE7dNWJrZDaEsDYphLCF7EOHAC6t0nP5emT27fWWKvZbefRtQlzE7EPSZg2tYthZ5RWwWdEmEW4iXiwwW9yJGdLzfM7D1GawVdjYK4~BzApAWL3srPPFFrpVyUBnrKqJQ2zB1tFGJtvxVH7cBgborSdvR5mmv~oQmV1jzKoHRjJgn2gx8KIgcEiYZWLn3eWTiwI9W4dGQ8tuerqhio27A__&Key-Pair-Id=K3EI6M078Z3AC3"
            },
            {
              "value": "image_2",
              "imageLink": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/165/image/image.jpg?Expires=1760459696&Signature=STgmwmhhqEOjFTcJNUdbRjiHRxvhWIditYEaHtz-FCfCzCptz4JzOe28YXBmW97cXrLyt4qYnIOL8ioxonMw0CuS5-h30BdYp289vRJNzctOwdhbHRhRV6LtFMwOUtBKt4zzkCWHMciJAYa0p91DWgge8Q68Hl3DKEvXcto5bZD6LjDsR67K6x1S7RSLUEC9BBHvNZ59DphJumNoMbTkgqdSsHu89QUr~lPmM-gn7D-SVr32pPRqS2BkoSAuE4zPB1P4mcF1JCvEf5LTeg24V6bP5uQEKfgGQ0N2EpufV~0ZdhhDrDiHEYeazPytVzwas7G0CPkU5UDI5HyI4MpBZQ__&Key-Pair-Id=K3EI6M078Z3AC3"
            },
            {
              "value": "image_3",
              "imageLink": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/285/image/image.jpg?Expires=1760459697&Signature=I8qJJObWs5-lZBCenM9Dsm6Qz8qymSVeih0Yp9Gz6KXPRqUHIWG4gjNf~DOy3vVQtWRKzBdR1AuUlDiPd-s0mDclXGxox0PNYpUdkaK~Wf77PEVuM6mt5ak99rIzXUoCb4W874~asGxS6oKQgZtAm6IfT3gJ2BDoZmk-dgCEbW3xufkny1Vg5OPs3mY6RWajvxaVXzGW0Qcvd7Xs1CL0i5uLp7uLcsXqo67~9fCQdIHePhMPJ9xxhZbQOLy89GmbSiZrHYkGmKRhj6d2GXKfMQvIUm8Il0N157DJc6ILQKupGvFLK1auGZY8Sc43ecXe0uq4YydAj3uyX8w~Iqu5xg__&Key-Pair-Id=K3EI6M078Z3AC3"
            }
          ]
        }
      ]
    }
  ],
  "theme": {
    "primaryColor": "#ff5722",
    "primaryLight": "#ff8a65",
    "primaryDark": "#d84315",
    "secondaryColor": "#ffc107",
    "accentColor": "#ff9800",
    "successColor": "#4caf50",
    "backgroundColor": "#fff8f0",
    "cardBackground": "#ffffff",
    "headerBackground": "#ffeaa7",
    "textColor": "#3e2723",
    "secondaryText": "#6d4c41",
    "disabledText": "#bcaaa4",
    "borderColor": "#d7ccc8",
    "focusBorder": "#ff5722"
  },
  "preloadedImages": [
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/0/image/image.jpg?Expires=1760506700&Signature=B2a3CWQanO39h4cg5s7dEOiMRCDh6Utvfq0UtZzEwxFRCIdZ8bBjhpLw4B~uSW0dQrtOYu1b41c-yFtmxrJ-PcSoCB8Q1-3B7i6suoqr9UWGVE-8INzfblN0OxLjVfxKd~WIxXFWtEj62TD1oz9wupnrD7ywNBCgonb5WuPGoCJdkRqgLOb-l6k6nLz9Tc9OJKlLxmTkYAOUTH7yvYJVK97tvCtrwQzY9Deao5N8FWVOj8P~7~QGgivZiaUTobp8TLnE~5-vnZ4TYCx07vqe-B4g2354Slt8kQKR9mJDl0Y6tStEFETeq6N2aki~VOQ~nfupkKk97T0FQe6RG2MoGw__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_0_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 0,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/0/image/image.jpg?Expires=1760506700&Signature=B2a3CWQanO39h4cg5s7dEOiMRCDh6Utvfq0UtZzEwxFRCIdZ8bBjhpLw4B~uSW0dQrtOYu1b41c-yFtmxrJ-PcSoCB8Q1-3B7i6suoqr9UWGVE-8INzfblN0OxLjVfxKd~WIxXFWtEj62TD1oz9wupnrD7ywNBCgonb5WuPGoCJdkRqgLOb-l6k6nLz9Tc9OJKlLxmTkYAOUTH7yvYJVK97tvCtrwQzY9Deao5N8FWVOj8P~7~QGgivZiaUTobp8TLnE~5-vnZ4TYCx07vqe-B4g2354Slt8kQKR9mJDl0Y6tStEFETeq6N2aki~VOQ~nfupkKk97T0FQe6RG2MoGw__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/1/image/image.jpg?Expires=1760506700&Signature=gHGASNQnNA-6dL91~h-peMHWTabiQbCcD8wSv6ihFOXcQdInB8~-QL2XlPighVo~3a4-VssdyFqKy-CHY5loZKa-pOrZGMrtXB8s~m61bQZ9Smt7KYGsbbfU3aX2J30u-WVLsfFrIoZkWflry3c5tDm6AnaVKd5ZqMy~-fr2w7LjNde8pgldrBBT-y4AC~-O2qH~HIKdIfe6KpCFRlrgXC-ZKIE1jOXnOT2FKL96cMPs4f4PRXqDELP~gE8C7Mxu1u-I0O99pAtNnuxXtPMsdZdC062bFxAW~IA1HG-MJgT8Nsa6AUrn2TBUyFZQXGworl76nCk5rtrqC2bkEvQ1Mw__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_1_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 1,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/1/image/image.jpg?Expires=1760506700&Signature=gHGASNQnNA-6dL91~h-peMHWTabiQbCcD8wSv6ihFOXcQdInB8~-QL2XlPighVo~3a4-VssdyFqKy-CHY5loZKa-pOrZGMrtXB8s~m61bQZ9Smt7KYGsbbfU3aX2J30u-WVLsfFrIoZkWflry3c5tDm6AnaVKd5ZqMy~-fr2w7LjNde8pgldrBBT-y4AC~-O2qH~HIKdIfe6KpCFRlrgXC-ZKIE1jOXnOT2FKL96cMPs4f4PRXqDELP~gE8C7Mxu1u-I0O99pAtNnuxXtPMsdZdC062bFxAW~IA1HG-MJgT8Nsa6AUrn2TBUyFZQXGworl76nCk5rtrqC2bkEvQ1Mw__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/2/image/image.jpg?Expires=1760506700&Signature=udz31GsFiG1oVAcpOk7CQWi14ShBgWTnL~D4yJLeJBPm9pZ1QBGZ2lpUi4LYMClksEkMsjItaFQevqnq5RTXbdMQlmKG0HGVQJMk43dw39gW5E5R7wj14GqfIqpVb-VA8A0xqqMnWGMVqVle-KgG2vBmFOWy1ppqn28C4YRw5ON4fY26JiF4ELQg3qXJ9b0b7qFHuQ5fd-NCFf8RF5s1m9liLP~I6VQYUS9VZBv-es4PUZCml5aqTdnqed7~vzB1PmFTqN-uhsS7eNtktyAcCpOYMNbzcmQoWoGWB-ZbOQzdzMOeK83gzhxsbWF3jEL-4sXoSDzxJCDmkSwwqJXB2g__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_2_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 2,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/2/image/image.jpg?Expires=1760506700&Signature=udz31GsFiG1oVAcpOk7CQWi14ShBgWTnL~D4yJLeJBPm9pZ1QBGZ2lpUi4LYMClksEkMsjItaFQevqnq5RTXbdMQlmKG0HGVQJMk43dw39gW5E5R7wj14GqfIqpVb-VA8A0xqqMnWGMVqVle-KgG2vBmFOWy1ppqn28C4YRw5ON4fY26JiF4ELQg3qXJ9b0b7qFHuQ5fd-NCFf8RF5s1m9liLP~I6VQYUS9VZBv-es4PUZCml5aqTdnqed7~vzB1PmFTqN-uhsS7eNtktyAcCpOYMNbzcmQoWoGWB-ZbOQzdzMOeK83gzhxsbWF3jEL-4sXoSDzxJCDmkSwwqJXB2g__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/3/image/image.jpg?Expires=1760506700&Signature=zarioyjwS5aOUiJchoL8v-I1Q8rE9EMQZfDZUukk03lB-qOxRniefNGiPetTRHt2BrR2e4vrgFmX5wfq6SBeQbRpkyRt94~UiW0XWa4Hkai7eFUeTAEhNaoJD7ZpnY~dSo1PTwo2SMhzcOGhAWjCaVjTx-0NgTn5s8Mbg2mhFdXxbQ1fauvGw2iXGMXjtnCnb6W1ZpBZD1fpqQVXC3~DIzkJMwuiMmz5PrIIqs~Hc0yLM1Djq4oOYCbxFCUX1qerj6d8RXhev2fbRjJ4nS9VM6xbpUp2lMfZ3XmuWqI2X9uYBXtDKc1EhIe1DEHKmqi9rX9dmG00zdHHy0LrT8hcGQ__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_3_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 3,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/3/image/image.jpg?Expires=1760506700&Signature=zarioyjwS5aOUiJchoL8v-I1Q8rE9EMQZfDZUukk03lB-qOxRniefNGiPetTRHt2BrR2e4vrgFmX5wfq6SBeQbRpkyRt94~UiW0XWa4Hkai7eFUeTAEhNaoJD7ZpnY~dSo1PTwo2SMhzcOGhAWjCaVjTx-0NgTn5s8Mbg2mhFdXxbQ1fauvGw2iXGMXjtnCnb6W1ZpBZD1fpqQVXC3~DIzkJMwuiMmz5PrIIqs~Hc0yLM1Djq4oOYCbxFCUX1qerj6d8RXhev2fbRjJ4nS9VM6xbpUp2lMfZ3XmuWqI2X9uYBXtDKc1EhIe1DEHKmqi9rX9dmG00zdHHy0LrT8hcGQ__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/4/image/image.jpg?Expires=1760506700&Signature=CeWMKdjyF0JPYI14WqSEUy2SV995ljBrYLEwKIz-77Te75zegaflnxu7ZtN-VCVThdf2OM8HWs-IJXh7XdhPM9ydssxBG6oU2m9ci-f3dQJLjQoQ9ikErYoxaQacmEIMJrcPwJ0AGzeQ55hLunFYxufNDbtHsIa81AaH87qNbqx22KPRZQqqITW-R2s9jeSlqJkasndlLUvODMHdzRfQoWhEj8agmv380SHrCKY7V~dvLTwTRfk7dg6rOPuoMpd9W6~4b3qp7SeCQJB98yLE~Hvo~jybi-JqNP6CpskUD~ZwOr1ODeFT16rGYlsrHW2WPtUsQDBwSja7mf2ufLAV5A__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_4_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 4,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/4/image/image.jpg?Expires=1760506700&Signature=CeWMKdjyF0JPYI14WqSEUy2SV995ljBrYLEwKIz-77Te75zegaflnxu7ZtN-VCVThdf2OM8HWs-IJXh7XdhPM9ydssxBG6oU2m9ci-f3dQJLjQoQ9ikErYoxaQacmEIMJrcPwJ0AGzeQ55hLunFYxufNDbtHsIa81AaH87qNbqx22KPRZQqqITW-R2s9jeSlqJkasndlLUvODMHdzRfQoWhEj8agmv380SHrCKY7V~dvLTwTRfk7dg6rOPuoMpd9W6~4b3qp7SeCQJB98yLE~Hvo~jybi-JqNP6CpskUD~ZwOr1ODeFT16rGYlsrHW2WPtUsQDBwSja7mf2ufLAV5A__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/5/image/image.jpg?Expires=1760506700&Signature=Xh1IjDpAWOIPQAme9kMvhMNquQW0jpBVVWE1EPf5rg44d9sx-CEPGrT0c1OlnplbbWiLXanJqbveaq9~AmSIdKs2dEDJn~wKPKBxQ-AefHMLesPzp6Ogn5Hxm3QtgAtpWF06AXm-Y4zrx36Q~c9AXHCmu0gNuQ~K0mmH58gopko9pWSOr8aK9NLZVY9oEr-sY1zHKq5RZ9r-EhtfhQVBxo7ROPmQ~PhG1M2nI3z-0fdQGQ7p2MjokoH4-Yy6Ngu9JbpLB9cphCk-ziLVLESMksQNvm9llN8DoPwrCMKtbbCpcolSTcSv3KMh7t9lGmyRhxJnN1KvemBGQaexY1xZCw__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_5_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 5,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/5/image/image.jpg?Expires=1760506700&Signature=Xh1IjDpAWOIPQAme9kMvhMNquQW0jpBVVWE1EPf5rg44d9sx-CEPGrT0c1OlnplbbWiLXanJqbveaq9~AmSIdKs2dEDJn~wKPKBxQ-AefHMLesPzp6Ogn5Hxm3QtgAtpWF06AXm-Y4zrx36Q~c9AXHCmu0gNuQ~K0mmH58gopko9pWSOr8aK9NLZVY9oEr-sY1zHKq5RZ9r-EhtfhQVBxo7ROPmQ~PhG1M2nI3z-0fdQGQ7p2MjokoH4-Yy6Ngu9JbpLB9cphCk-ziLVLESMksQNvm9llN8DoPwrCMKtbbCpcolSTcSv3KMh7t9lGmyRhxJnN1KvemBGQaexY1xZCw__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/6/image/image.jpg?Expires=1760506700&Signature=ILRjtdJ8TQ~ruQm4gcKgMN3dg7Kr0kllSWQpqxFAPyX5n9PbtfGNPzZTGpGrwuTCXZc2T1BpK0z~8fQi6BjusbnrUYgf3PbPzPEHejQ-JbsTNgCeD4FAoV9dNqcHOqgdfJ-zAYbmgeW1y58UZpZzcjeQhRMdvJrr1tWMbM2PLE7L6fylPDx3mTM1OhWYSQowK1KIvbq-tHVLVrbUvEJ9fjHJJf6N~8haDAXjRHNea-e0UjaVRBaRiFKrC~DZ1sU0ZXHAuIWL7R5mRzwOuVDEyG6nuraBoI~JaoZyH9-cj67wpzB3TcUcv~iTdRLEw4XOhYwq-bZf96~qEtWJOpFHbQ__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_6_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 6,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/6/image/image.jpg?Expires=1760506700&Signature=ILRjtdJ8TQ~ruQm4gcKgMN3dg7Kr0kllSWQpqxFAPyX5n9PbtfGNPzZTGpGrwuTCXZc2T1BpK0z~8fQi6BjusbnrUYgf3PbPzPEHejQ-JbsTNgCeD4FAoV9dNqcHOqgdfJ-zAYbmgeW1y58UZpZzcjeQhRMdvJrr1tWMbM2PLE7L6fylPDx3mTM1OhWYSQowK1KIvbq-tHVLVrbUvEJ9fjHJJf6N~8haDAXjRHNea-e0UjaVRBaRiFKrC~DZ1sU0ZXHAuIWL7R5mRzwOuVDEyG6nuraBoI~JaoZyH9-cj67wpzB3TcUcv~iTdRLEw4XOhYwq-bZf96~qEtWJOpFHbQ__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/7/image/image.jpg?Expires=1760506700&Signature=U7urSnomPYFQ7fw4i35hPytcYpDKu1JgaRwB6ibUXkkawuxCMsenGXHqhMUjhJKhJdQPa4Kx4ZIr8MUU97h2BIPGO10-Z2noLwbf7xlJr3qrz4hHvyBZ9d2zDs~iA~ZxzywSPGu92BLHhuc4nLzkqZZOIapzdbTngj9I4kXkGYlUy5GVlaiciUGWOg36EYOnjkih8024GQ92fuEIZM-iH0kaZZ3L-GuwBSNdq8WqIae-21nZ09ZthD~8n3~BvrhbxbZJTwG2JQ1ky140AO1Y3T53CYDQOnNWn~wl7W1QUHfrmvXOtXx8TTJ3sQWAur62MsN6F9MKTTrDoeMnvDMSWg__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_7_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 7,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/7/image/image.jpg?Expires=1760506700&Signature=U7urSnomPYFQ7fw4i35hPytcYpDKu1JgaRwB6ibUXkkawuxCMsenGXHqhMUjhJKhJdQPa4Kx4ZIr8MUU97h2BIPGO10-Z2noLwbf7xlJr3qrz4hHvyBZ9d2zDs~iA~ZxzywSPGu92BLHhuc4nLzkqZZOIapzdbTngj9I4kXkGYlUy5GVlaiciUGWOg36EYOnjkih8024GQ92fuEIZM-iH0kaZZ3L-GuwBSNdq8WqIae-21nZ09ZthD~8n3~BvrhbxbZJTwG2JQ1ky140AO1Y3T53CYDQOnNWn~wl7W1QUHfrmvXOtXx8TTJ3sQWAur62MsN6F9MKTTrDoeMnvDMSWg__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/8/image/image.jpg?Expires=1760506700&Signature=BU0oJBD7WhEjsKJGF9c8F-fRpvaitRB9qECoLywoT-S1T8i1y0BXACa9HKeKq01iuI9oRtCTRMQj0C3VyJ3L0PDeFlxogzXeIYI~RcUSBEYXHu6tpWBDLewb~ZiO4WPI-abREKrrkiNHYS0qwRwGaG6D37hp8iJxGE~lK0wNTsz8Z3G~Kz8vhCKDlyIBYPE0ldiykoXbshu55PocPEB3GgKuwlfkUkJd49CEI6EZwmCH~o2p9ueaFlWzYso6q-WCQ-zoOurHhAnAWqvvNOal6-14yyHfr-DPhPsNDkhtBQnJUufd27XwaCANHYk0yvpYqBoT94t~5fDhtG-QKWHYnw__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_8_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 8,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/8/image/image.jpg?Expires=1760506700&Signature=BU0oJBD7WhEjsKJGF9c8F-fRpvaitRB9qECoLywoT-S1T8i1y0BXACa9HKeKq01iuI9oRtCTRMQj0C3VyJ3L0PDeFlxogzXeIYI~RcUSBEYXHu6tpWBDLewb~ZiO4WPI-abREKrrkiNHYS0qwRwGaG6D37hp8iJxGE~lK0wNTsz8Z3G~Kz8vhCKDlyIBYPE0ldiykoXbshu55PocPEB3GgKuwlfkUkJd49CEI6EZwmCH~o2p9ueaFlWzYso6q-WCQ-zoOurHhAnAWqvvNOal6-14yyHfr-DPhPsNDkhtBQnJUufd27XwaCANHYk0yvpYqBoT94t~5fDhtG-QKWHYnw__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/9/image/image.jpg?Expires=1760506700&Signature=Dh~ZzvcbqH7P44TWh2LxaQsyxC7l7OCiKG2Dcg0J7Jh0pcWp3cJlfNc0dimxPWc2XPyMIFD3bMx-78l~HETxu3oP7cx~wlbjd8ZoVCnmrSEH2rStWPqvueivmLqoei5jHDwlNjb2JvUZfpkoaCcRWzsVc~fDeP~63~ZuD-XAiYU9ayFszwkMCFeJqYJWlGWfeKbgOXHh~PzOpSMhhAnAKL1I~J5UR3F~2iNKYPpJXmtEAVHQK74X6XnGL96~~6UpWbgV7sLWBVGnu4kC7w~zkybo0r-Y66ZnGRdjwArBWSVt1HGcUy1retHmvAPedgXVbgbsL-XRU8IwWwt1B-BK9A__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_9_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 9,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/9/image/image.jpg?Expires=1760506700&Signature=Dh~ZzvcbqH7P44TWh2LxaQsyxC7l7OCiKG2Dcg0J7Jh0pcWp3cJlfNc0dimxPWc2XPyMIFD3bMx-78l~HETxu3oP7cx~wlbjd8ZoVCnmrSEH2rStWPqvueivmLqoei5jHDwlNjb2JvUZfpkoaCcRWzsVc~fDeP~63~ZuD-XAiYU9ayFszwkMCFeJqYJWlGWfeKbgOXHh~PzOpSMhhAnAKL1I~J5UR3F~2iNKYPpJXmtEAVHQK74X6XnGL96~~6UpWbgV7sLWBVGnu4kC7w~zkybo0r-Y66ZnGRdjwArBWSVt1HGcUy1retHmvAPedgXVbgbsL-XRU8IwWwt1B-BK9A__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/10/image/image.jpg?Expires=1760506700&Signature=t9ea~SlOrTHvvY0dK~uiTP7w7lW1Y39of8SElHM~JxKigTXdmNUDgamT6-k0LHuNB9G87lET6MdxH0vCa74DY8DeJUlO9kLM7LsXSFstJy2zOMKR-OZvCx1b5WiAw3~QZ~2jlxA8U1WPwn7hgD6v868SHfCkmmCBuvJfBi7SpnUfg7iiGfjLeZ6gvBxHYdGQ5TSl5y~a0lvmMt1NRprmUPjJ6LgmZN96abPJe5hxNVI4u8qx0bHmGIq-wNwZilcOoNnk8GjpXAeyk17BgYoYIR3wYsEfqSMSotg6~Z7XT-w4Q0OnqkpqBBhI8iLZr4LqPIUZeJrLRoMwv8yamk1yng__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_10_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 10,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/10/image/image.jpg?Expires=1760506700&Signature=t9ea~SlOrTHvvY0dK~uiTP7w7lW1Y39of8SElHM~JxKigTXdmNUDgamT6-k0LHuNB9G87lET6MdxH0vCa74DY8DeJUlO9kLM7LsXSFstJy2zOMKR-OZvCx1b5WiAw3~QZ~2jlxA8U1WPwn7hgD6v868SHfCkmmCBuvJfBi7SpnUfg7iiGfjLeZ6gvBxHYdGQ5TSl5y~a0lvmMt1NRprmUPjJ6LgmZN96abPJe5hxNVI4u8qx0bHmGIq-wNwZilcOoNnk8GjpXAeyk17BgYoYIR3wYsEfqSMSotg6~Z7XT-w4Q0OnqkpqBBhI8iLZr4LqPIUZeJrLRoMwv8yamk1yng__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/11/image/image.jpg?Expires=1760506700&Signature=PEJtDrNj1kdFyzcCWcQQYvxpL5-8hFVDbYMAKzYcjT53eF4H8i4EsOZBpRg-3xOzXRhUWv5Kuk21IW5DgJaptGJmGj~JUWOBlcWWezGMJdE7jilwei5T4F-M87NSIqkE4PbD6MK3p7zrlR3sYD310rL-qz~PcxNQGjNWPQlBCwKFQJf3fuNeVwcmvpZC4eiReEMt4JQi2SAbBjV1AcZEbVFdIhEMUe8FnxbrDQCRhVrz851EDZiTNg1kC2WcH69Bv2Pr0ljeQRTedMyiV1SObhunDdYIhj4h6X9BSbnTudstAq3-1LsF4iQ4TNuIeFHzbWBoH7PleF85~74t36SRfQ__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_11_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 11,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/11/image/image.jpg?Expires=1760506700&Signature=PEJtDrNj1kdFyzcCWcQQYvxpL5-8hFVDbYMAKzYcjT53eF4H8i4EsOZBpRg-3xOzXRhUWv5Kuk21IW5DgJaptGJmGj~JUWOBlcWWezGMJdE7jilwei5T4F-M87NSIqkE4PbD6MK3p7zrlR3sYD310rL-qz~PcxNQGjNWPQlBCwKFQJf3fuNeVwcmvpZC4eiReEMt4JQi2SAbBjV1AcZEbVFdIhEMUe8FnxbrDQCRhVrz851EDZiTNg1kC2WcH69Bv2Pr0ljeQRTedMyiV1SObhunDdYIhj4h6X9BSbnTudstAq3-1LsF4iQ4TNuIeFHzbWBoH7PleF85~74t36SRfQ__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/12/image/image.jpg?Expires=1760506700&Signature=vH9w3F9fGFX6bZYIAt4501ok8FskhDWMcfdWNDf3CNn-4zyGBqlPHQJ3zfB2quQucP18C2mpdWDAGa1WG08Ng45-DYKkNveAhlufx8XOLEy8W06tSYFc227KLIiBBSNKmWEEnOWttAuFx-buiDdCzKZ674~eqjx6Si9pgvzQrSEITCltYNMvpAnQrud0YR7BgrIrOsKzN-wE34~MuP~8zsIjbOAICJNIP7dbheB~3gwe-0ZPiAqMGer1h0qGZf4FU1S-7~3~~PMVIK59EBJfiuIXum-VYV0QEyN1tRTMLJLkYxMjKAmnOXhBCils-bH3Nr4dBSbpL5uqLxwRBGKX7g__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_12_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 12,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/12/image/image.jpg?Expires=1760506700&Signature=vH9w3F9fGFX6bZYIAt4501ok8FskhDWMcfdWNDf3CNn-4zyGBqlPHQJ3zfB2quQucP18C2mpdWDAGa1WG08Ng45-DYKkNveAhlufx8XOLEy8W06tSYFc227KLIiBBSNKmWEEnOWttAuFx-buiDdCzKZ674~eqjx6Si9pgvzQrSEITCltYNMvpAnQrud0YR7BgrIrOsKzN-wE34~MuP~8zsIjbOAICJNIP7dbheB~3gwe-0ZPiAqMGer1h0qGZf4FU1S-7~3~~PMVIK59EBJfiuIXum-VYV0QEyN1tRTMLJLkYxMjKAmnOXhBCils-bH3Nr4dBSbpL5uqLxwRBGKX7g__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/13/image/image.jpg?Expires=1760506700&Signature=hXtQxM~yfbTlNHnwsxCNbjqXukYssf4PgYIDw73FRYVh9qpISNQ2Fg1kUEMnWekEeF5Xe5dTRqcp7ZKsPIS0tkCf8c4V7PdhoJpcButZfJq9JMAY~jtirlIU~F1nuZoiDw87CSvPW4m02srJL2UiSdyqlAhRFJMmTxeNjMJc2OCFf5ePmvas84VjlwqNEMfLf4bZxuJ3PhxTlMFf3uSDaLOKo6my0dZoTakQjW0n09dvbR-zfXVU-hs-lObbYUPdYe-cE~E8kYDVLXuhFH0uXdXlsjpJs0X2aZoyJBsIMHixgah9aiWRLeTDpVGR-jRYz0IQq0T7sBe6qY3uGusoMw__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_13_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 13,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/13/image/image.jpg?Expires=1760506700&Signature=hXtQxM~yfbTlNHnwsxCNbjqXukYssf4PgYIDw73FRYVh9qpISNQ2Fg1kUEMnWekEeF5Xe5dTRqcp7ZKsPIS0tkCf8c4V7PdhoJpcButZfJq9JMAY~jtirlIU~F1nuZoiDw87CSvPW4m02srJL2UiSdyqlAhRFJMmTxeNjMJc2OCFf5ePmvas84VjlwqNEMfLf4bZxuJ3PhxTlMFf3uSDaLOKo6my0dZoTakQjW0n09dvbR-zfXVU-hs-lObbYUPdYe-cE~E8kYDVLXuhFH0uXdXlsjpJs0X2aZoyJBsIMHixgah9aiWRLeTDpVGR-jRYz0IQq0T7sBe6qY3uGusoMw__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/14/image/image.jpg?Expires=1760506700&Signature=iy2e0zBtX5pWa9tncN~K2xK3tVH8UqIJBC19lWFboUcuweKGJlIuHCdnRCtJ0JMyUki2kYqRmSLMMGKl5FxlOiKJPcCIrvSLD3jqGpmaceqQ3cqYDOkmhpSqIkzZvQCaEVtOjlASMZjqiSQJWgY0Rt-Iekfvb~8HbW7FlcmXzYWu21y6p9K2mII5KelsLre6kz-anXjiBU~PTJNxmX3PHJp63Pu~A68ctQ~7nb7jIAOQ0mBR1EM2N8YthT4LBHak25u7h~UUc9TzobPjWptEiBdxn8K5Id8X7KtiZrcDqkHgwCoPvwerOLtjG1ZQxt4Ks8q-TbW3QaXyDfNiGqTFPw__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_14_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 14,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/14/image/image.jpg?Expires=1760506700&Signature=iy2e0zBtX5pWa9tncN~K2xK3tVH8UqIJBC19lWFboUcuweKGJlIuHCdnRCtJ0JMyUki2kYqRmSLMMGKl5FxlOiKJPcCIrvSLD3jqGpmaceqQ3cqYDOkmhpSqIkzZvQCaEVtOjlASMZjqiSQJWgY0Rt-Iekfvb~8HbW7FlcmXzYWu21y6p9K2mII5KelsLre6kz-anXjiBU~PTJNxmX3PHJp63Pu~A68ctQ~7nb7jIAOQ0mBR1EM2N8YthT4LBHak25u7h~UUc9TzobPjWptEiBdxn8K5Id8X7KtiZrcDqkHgwCoPvwerOLtjG1ZQxt4Ks8q-TbW3QaXyDfNiGqTFPw__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/15/image/image.jpg?Expires=1760506700&Signature=UsuzMk09hOATJ99g4JTJ2AMPUg7kYJgXyWIpQxQnbsFliOKVEE3OE4-xDE6qzuf77Lbed1cZ2RmWn3Xvp4NPNosF22D~L6q78gbH~IE09qEeEgGn6RFKwxrGfLXSXH0DyAMiBvfr-ZHvT1oZvS6MEfISh~Ni3kAL~C5yPPIXq8ZCM-~5I-LhA0vMJf8Qsjc7CspCRrpAXj9NvaiVxluNhsCnV9WhRTjorHSEMsPF1tku~dZY7fB~gaJULQrmtNRSnsSfwYCSRbJVUBfZ~Cwak8vIyZ9ZEKw6jh3lQZ2cWSEs7q4x9LkRJj7WzuEsi4JJVS9oMlrrsGXERf6UqeTYCg__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_15_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 15,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/15/image/image.jpg?Expires=1760506700&Signature=UsuzMk09hOATJ99g4JTJ2AMPUg7kYJgXyWIpQxQnbsFliOKVEE3OE4-xDE6qzuf77Lbed1cZ2RmWn3Xvp4NPNosF22D~L6q78gbH~IE09qEeEgGn6RFKwxrGfLXSXH0DyAMiBvfr-ZHvT1oZvS6MEfISh~Ni3kAL~C5yPPIXq8ZCM-~5I-LhA0vMJf8Qsjc7CspCRrpAXj9NvaiVxluNhsCnV9WhRTjorHSEMsPF1tku~dZY7fB~gaJULQrmtNRSnsSfwYCSRbJVUBfZ~Cwak8vIyZ9ZEKw6jh3lQZ2cWSEs7q4x9LkRJj7WzuEsi4JJVS9oMlrrsGXERf6UqeTYCg__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/16/image/image.jpg?Expires=1760506700&Signature=cl1gjmzcEghc1pjyvs9nFFHD009o4CrAq4xsq4RTKfWJlga8RP~BUaLTkTTkKOQkz8S9CVseI~NemhyXzZsl3X-yWIUPnAoJofEaAtIp7e~VF13LOg-hPIvgwsQmlBvgGQaZQba6qTDNqiLiXQ13XPry~4Y5g2eJ7qNeviyw6Uj6Xz3Ji9VNpt50-dJZEkEl8B69BQuIzVZP0VEXihMcEdwkxQEKYARMX2CSSBvLWvZzsa253olgG2k7-EbpDQDEvKFWXAV0DkAQRpU9Y~1u5Fw9lnrQOoNpPUYuBTwWQS2H4C2fyCFg~IBf1k5BNHZM7vrF7k8pDmvl~I89CdNejw__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_16_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 16,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/16/image/image.jpg?Expires=1760506700&Signature=cl1gjmzcEghc1pjyvs9nFFHD009o4CrAq4xsq4RTKfWJlga8RP~BUaLTkTTkKOQkz8S9CVseI~NemhyXzZsl3X-yWIUPnAoJofEaAtIp7e~VF13LOg-hPIvgwsQmlBvgGQaZQba6qTDNqiLiXQ13XPry~4Y5g2eJ7qNeviyw6Uj6Xz3Ji9VNpt50-dJZEkEl8B69BQuIzVZP0VEXihMcEdwkxQEKYARMX2CSSBvLWvZzsa253olgG2k7-EbpDQDEvKFWXAV0DkAQRpU9Y~1u5Fw9lnrQOoNpPUYuBTwWQS2H4C2fyCFg~IBf1k5BNHZM7vrF7k8pDmvl~I89CdNejw__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/17/image/image.jpg?Expires=1760506700&Signature=tSpd2rjFFVQ67z5au8KGFAbYcI3tEL1UCPVfXmpA37ffd1cP2fkjebBc4t6-pJAi8N1cWz0YHfkJ3nv3jkMc~5R3WWOnyEXkBgN~pt4OIZDFRjIQvOr83Mnr1EzdnusbgQqnDRVs4F2KKx-B1EA4s~JE-55cENgHyn3axnpGI6u6-ZRUL0kKxPwFf-p6um499pOZK5n58iTnxS32NouxfZb4mhSrgqfhnWUvlJMN29i29jCfmzWjwzP~33-tDpG6WAkwo9Layo90Q7jqPtSIrj~mKPQAU5Yy41hsJsP1xIc62ACNJnZaeqfVQAIYW5LXwTojVOL8R18dU8l48Cc5hQ__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_17_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 17,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/17/image/image.jpg?Expires=1760506700&Signature=tSpd2rjFFVQ67z5au8KGFAbYcI3tEL1UCPVfXmpA37ffd1cP2fkjebBc4t6-pJAi8N1cWz0YHfkJ3nv3jkMc~5R3WWOnyEXkBgN~pt4OIZDFRjIQvOr83Mnr1EzdnusbgQqnDRVs4F2KKx-B1EA4s~JE-55cENgHyn3axnpGI6u6-ZRUL0kKxPwFf-p6um499pOZK5n58iTnxS32NouxfZb4mhSrgqfhnWUvlJMN29i29jCfmzWjwzP~33-tDpG6WAkwo9Layo90Q7jqPtSIrj~mKPQAU5Yy41hsJsP1xIc62ACNJnZaeqfVQAIYW5LXwTojVOL8R18dU8l48Cc5hQ__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/18/image/image.jpg?Expires=1760506700&Signature=CTDlojgCLNpD4W8uoYxAnjM4vCNnSoLLI5Z~2bAvL67kgtdR-1J2gdB2~iUFt4Ve7CxRoulrr7IJLgkA46wiso3Dowwh0NhjvK~m2JYIQNNK1LEZXaE5rVfq-L7aJQ~nNt6rBeSCP6AFjrnu1ul792ykojLxwOqKBsu2Dby-r3Rns5qSiGXaVNGkKeY9CXH~0OxD7ynaq~e9n3NEz3yqloAEAz31tlE4Zc1XiaQQPwZ~1upKy67EkM0hm5xEONiggCpHB0kify0SoKd2-guVyIHp4q3lsQ1uh-SwAxaVg6AOf2GhJsm6TuvEGVoCCvoqQof20nRwNKytlfSQXKKQYA__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_18_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 18,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/18/image/image.jpg?Expires=1760506700&Signature=CTDlojgCLNpD4W8uoYxAnjM4vCNnSoLLI5Z~2bAvL67kgtdR-1J2gdB2~iUFt4Ve7CxRoulrr7IJLgkA46wiso3Dowwh0NhjvK~m2JYIQNNK1LEZXaE5rVfq-L7aJQ~nNt6rBeSCP6AFjrnu1ul792ykojLxwOqKBsu2Dby-r3Rns5qSiGXaVNGkKeY9CXH~0OxD7ynaq~e9n3NEz3yqloAEAz31tlE4Zc1XiaQQPwZ~1upKy67EkM0hm5xEONiggCpHB0kify0SoKd2-guVyIHp4q3lsQ1uh-SwAxaVg6AOf2GhJsm6TuvEGVoCCvoqQof20nRwNKytlfSQXKKQYA__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/19/image/image.jpg?Expires=1760506700&Signature=kS3FZsiN8uXeLsUUpJhPjU6SspS-W77q2M4msMFC9hHqDLp-BEYiFZ9fDDBPu1OpjPX1Z8WB7oKSltGRO2KHK5fj9E1MRcy4Y3fuvHODB-pRH~i8jDsuEqgEzHNH3pIs4WBjRsyDjeZGM9jwmUTdqqcxXv06HuOGECyQ6vDE4m1npPn1-xMgeYZOzaLTr6UJre-mdvziO42gDuO8teV9ytB1ptomAC8A15A0vqOhcRH1m6Z0W9uHHOPSze716PmNVKZvSFInAVSewLFbjlMigqXWwv71ZkSjD27K-BPzQIcoZXgrapPSJ0KMSrNfu0YmcR7Vf7BRqt9EvRg5yYmhFA__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_19_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 19,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/19/image/image.jpg?Expires=1760506700&Signature=kS3FZsiN8uXeLsUUpJhPjU6SspS-W77q2M4msMFC9hHqDLp-BEYiFZ9fDDBPu1OpjPX1Z8WB7oKSltGRO2KHK5fj9E1MRcy4Y3fuvHODB-pRH~i8jDsuEqgEzHNH3pIs4WBjRsyDjeZGM9jwmUTdqqcxXv06HuOGECyQ6vDE4m1npPn1-xMgeYZOzaLTr6UJre-mdvziO42gDuO8teV9ytB1ptomAC8A15A0vqOhcRH1m6Z0W9uHHOPSze716PmNVKZvSFInAVSewLFbjlMigqXWwv71ZkSjD27K-BPzQIcoZXgrapPSJ0KMSrNfu0YmcR7Vf7BRqt9EvRg5yYmhFA__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/20/image/image.jpg?Expires=1760506700&Signature=vLW4-76pfbgcW6aIliFdOziJABQVVaTC7T6D8SgHSfVIRL8jaNjeXvvFoXdANMFUM7twKJDBzL9xzwlThk5AWajQ4V2T1MXxDDqoD2r2AZruNhe268Rqz77GaTP15qgCYcewzKYKahMFAj3ErPaYDMt~u73QwvEUoRvZYh9hxQD-oFvivQoFyCGmGaMAvlunbJq0nD-I~HP4fKvY1Ji6j~0vBEoM5WGpEutUClPx0J761LLIr1VKDjfF4d-EyuM8iYX-xg4e1FIsWA3paPNGKFobif-moZVDBnTMSRJrRkRLcKBGNPLOcK7ZRpJKmwkht0tMPQ4Lzd0gME5-jmeOqA__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_20_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 20,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/20/image/image.jpg?Expires=1760506700&Signature=vLW4-76pfbgcW6aIliFdOziJABQVVaTC7T6D8SgHSfVIRL8jaNjeXvvFoXdANMFUM7twKJDBzL9xzwlThk5AWajQ4V2T1MXxDDqoD2r2AZruNhe268Rqz77GaTP15qgCYcewzKYKahMFAj3ErPaYDMt~u73QwvEUoRvZYh9hxQD-oFvivQoFyCGmGaMAvlunbJq0nD-I~HP4fKvY1Ji6j~0vBEoM5WGpEutUClPx0J761LLIr1VKDjfF4d-EyuM8iYX-xg4e1FIsWA3paPNGKFobif-moZVDBnTMSRJrRkRLcKBGNPLOcK7ZRpJKmwkht0tMPQ4Lzd0gME5-jmeOqA__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/21/image/image.jpg?Expires=1760506700&Signature=IUoj3r7-rUhjYBo-7g3J6~4rY8dGWwla651sHEZUxs~4823zRNHfc6pQRSeU33dc8V8zX~jcB79bh6DjbhCzEhQhM~qHgjH6rO6TV~P6ppnbdCSEv4gA1sJtioRr2fIUdZP5kd7U1BSTh-bsJMiB33HtfdB4NRmrljLXudokb8-3WJOu~dxXOgQC8HfTDUyXqJP6Km7VLk7WiT4MKuHNFy6n-uQimNr16Ce2~LbM-5wuoUrw69tBNRhtwTx6AXaACzxvI~aDNXtEyXMBqF3g6rTrYRpDx61n3ZMMxLg8pROGznNsVOz8wabeK7ANxPgcnldnjFG3r0JoeXxtchbyqw__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_21_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 21,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/21/image/image.jpg?Expires=1760506700&Signature=IUoj3r7-rUhjYBo-7g3J6~4rY8dGWwla651sHEZUxs~4823zRNHfc6pQRSeU33dc8V8zX~jcB79bh6DjbhCzEhQhM~qHgjH6rO6TV~P6ppnbdCSEv4gA1sJtioRr2fIUdZP5kd7U1BSTh-bsJMiB33HtfdB4NRmrljLXudokb8-3WJOu~dxXOgQC8HfTDUyXqJP6Km7VLk7WiT4MKuHNFy6n-uQimNr16Ce2~LbM-5wuoUrw69tBNRhtwTx6AXaACzxvI~aDNXtEyXMBqF3g6rTrYRpDx61n3ZMMxLg8pROGznNsVOz8wabeK7ANxPgcnldnjFG3r0JoeXxtchbyqw__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/22/image/image.jpg?Expires=1760506700&Signature=dOFgQKoMNxl8Zx7Bb4Szewea8k1UXp8oyBCuzaSPCCL8F9V~sEu7~tdVnaTEPYEqgVbRbNSPEElt3ZtlqYzF2-Lled32ZmG3mLNZuVZJXf~d0Z7Fe1z6XifqMIOgYxDPekVDR1F2E3eXvYnyoo9J2G30jDtmQb0OwhqVK9BqWOvsT33qcIyC3pD7ST2XMQrO121K9ffTGnoyLX8rYz7FJkOYcrq8~oG6SwBnUuIV5PZI5NveMtF0Dx8L2fvO82f5VkLaSYJOGUEUWivLdSet~sjdFKjPYuyVHV7PyFNjXeiEUjl7YcnnifXbxG6WhRm5K1AVc1VTQNFpLAJGPCGhlw__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_22_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 22,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/22/image/image.jpg?Expires=1760506700&Signature=dOFgQKoMNxl8Zx7Bb4Szewea8k1UXp8oyBCuzaSPCCL8F9V~sEu7~tdVnaTEPYEqgVbRbNSPEElt3ZtlqYzF2-Lled32ZmG3mLNZuVZJXf~d0Z7Fe1z6XifqMIOgYxDPekVDR1F2E3eXvYnyoo9J2G30jDtmQb0OwhqVK9BqWOvsT33qcIyC3pD7ST2XMQrO121K9ffTGnoyLX8rYz7FJkOYcrq8~oG6SwBnUuIV5PZI5NveMtF0Dx8L2fvO82f5VkLaSYJOGUEUWivLdSet~sjdFKjPYuyVHV7PyFNjXeiEUjl7YcnnifXbxG6WhRm5K1AVc1VTQNFpLAJGPCGhlw__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/23/image/image.jpg?Expires=1760506700&Signature=hcUEZ6TlHNJ2~oIaZAmouqcHlU-1XbBfL45QYfkeoOBQ9Z0Bh-jbc8JyaIjpTuLx6y472zPVJqA-nzBVYwLcsqHW9LnMo-4~fhL3mqCfjJPlIFpNpZAr4ljCsfKZHsfTOgwZQxhSy7gXfrrrNML~EO0j~eZVpXODIs0k9L6n26UHexu80-c-Fv4VyrCj2LmDk8uEiNf~BSI2Q~a1HXV3-qPaW8rclBv5skSEV89kFQZf0ntX7~yhvD3jW-et2ZAGPD9Yd-ZjH69QLl1IpHoVT0yJT39rBHpozoMtABlRKIPYJ6ZKkAzZNBn9WHHZoIm69CxkXM~sOZ-sKpy62A4SSA__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_23_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 23,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/23/image/image.jpg?Expires=1760506700&Signature=hcUEZ6TlHNJ2~oIaZAmouqcHlU-1XbBfL45QYfkeoOBQ9Z0Bh-jbc8JyaIjpTuLx6y472zPVJqA-nzBVYwLcsqHW9LnMo-4~fhL3mqCfjJPlIFpNpZAr4ljCsfKZHsfTOgwZQxhSy7gXfrrrNML~EO0j~eZVpXODIs0k9L6n26UHexu80-c-Fv4VyrCj2LmDk8uEiNf~BSI2Q~a1HXV3-qPaW8rclBv5skSEV89kFQZf0ntX7~yhvD3jW-et2ZAGPD9Yd-ZjH69QLl1IpHoVT0yJT39rBHpozoMtABlRKIPYJ6ZKkAzZNBn9WHHZoIm69CxkXM~sOZ-sKpy62A4SSA__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/24/image/image.jpg?Expires=1760506700&Signature=J8CEsT83bUKFnwX-vhQ8cBdUijcbufIrTSkdyxCoeBIw5QL9A1zrqvOKJLeT7z-aZCY2oLUeLesE2wgHUVJo8PMK3MsH-Njt8L4Tq2hVdQiqkFc6-O6uWeLxlpQ6lGfLVv2Yh-WRT3MKAZCDypaMLxY4dINdPE7wQrMFB20J8gQIZpxqV1fKEJJetxzEKcW~ZNENfK3X~aTMyoSHnuXijCQ55tZ~oXeHDM2EC2SJBxieD4GYCVFBY0XNpxtjixbrcEqlEU0btmc2DL~uFyQf1Od9MLneyqUBjGV3GW3ElhDbuYdeyUO04uEiBeFjM06NSwr9he2L3E04cuSxIAZhQg__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_24_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 24,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/24/image/image.jpg?Expires=1760506700&Signature=J8CEsT83bUKFnwX-vhQ8cBdUijcbufIrTSkdyxCoeBIw5QL9A1zrqvOKJLeT7z-aZCY2oLUeLesE2wgHUVJo8PMK3MsH-Njt8L4Tq2hVdQiqkFc6-O6uWeLxlpQ6lGfLVv2Yh-WRT3MKAZCDypaMLxY4dINdPE7wQrMFB20J8gQIZpxqV1fKEJJetxzEKcW~ZNENfK3X~aTMyoSHnuXijCQ55tZ~oXeHDM2EC2SJBxieD4GYCVFBY0XNpxtjixbrcEqlEU0btmc2DL~uFyQf1Od9MLneyqUBjGV3GW3ElhDbuYdeyUO04uEiBeFjM06NSwr9he2L3E04cuSxIAZhQg__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/25/image/image.jpg?Expires=1760506700&Signature=Q28oa6Umxh8t9zRxdvetA1-Hcvd1Refs2c6lcc1vbgWUvtWb2srqbCXFzvgBNzufWHshSZXUy6z5UCa1H1RgZNMl7cVRwtf8oxi-nGE~XGuaoMz~5Qyz8MeOtO3iprkajvrk70hEO6UrjYsywEK-rtCHZf2FdnG1JuSecitCsyoU1QBKL3pXFiWqeoIJ3D~0515Vpj1eJ75St7WoCFtvSg~Hcs8~KVDLqKSvnocwoJzGXKtgusNwM~1L3gK6CXxaMkBTkp5uAwgeG-T00DqWQuNNrY3z3gEJXLD88ZT-CteapjKlfCnOMktpBqtGk9SqnC5AQ00xKCAItcVmlnPMsQ__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_25_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 25,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/25/image/image.jpg?Expires=1760506700&Signature=Q28oa6Umxh8t9zRxdvetA1-Hcvd1Refs2c6lcc1vbgWUvtWb2srqbCXFzvgBNzufWHshSZXUy6z5UCa1H1RgZNMl7cVRwtf8oxi-nGE~XGuaoMz~5Qyz8MeOtO3iprkajvrk70hEO6UrjYsywEK-rtCHZf2FdnG1JuSecitCsyoU1QBKL3pXFiWqeoIJ3D~0515Vpj1eJ75St7WoCFtvSg~Hcs8~KVDLqKSvnocwoJzGXKtgusNwM~1L3gK6CXxaMkBTkp5uAwgeG-T00DqWQuNNrY3z3gEJXLD88ZT-CteapjKlfCnOMktpBqtGk9SqnC5AQ00xKCAItcVmlnPMsQ__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/26/image/image.jpg?Expires=1760506700&Signature=IgBiDC-MYCcO-t6ftpCILv~fdT6wBUupidx-RvdnVyNVOWOlJRV9gwWmi4Vk9xdjuQfWRRZw6GGwg1HCG0uZkF3BSchkpj57B20yHeNRbGef6weQuerwqRKMUR2UftkIdvDA44HqqcEM0HOLFebY-4fJMN9il5zGCE1u7afO-Na9Zm3MLYmiYo7vkkkEP95Who6PWLoKf9PjbPN0FEL7zYVyp1s5vlfLMRCi3gJN-1TqB5kaQMZ8GF634uGnFUqM0mUlruiMdDNLEc4-meyfGbvwVzRrBN9j5rfYkcz5DoFUfbCckmgL-rfYoFP1QaHGraguI6eemQxygstiYbp-aQ__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_26_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 26,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/26/image/image.jpg?Expires=1760506700&Signature=IgBiDC-MYCcO-t6ftpCILv~fdT6wBUupidx-RvdnVyNVOWOlJRV9gwWmi4Vk9xdjuQfWRRZw6GGwg1HCG0uZkF3BSchkpj57B20yHeNRbGef6weQuerwqRKMUR2UftkIdvDA44HqqcEM0HOLFebY-4fJMN9il5zGCE1u7afO-Na9Zm3MLYmiYo7vkkkEP95Who6PWLoKf9PjbPN0FEL7zYVyp1s5vlfLMRCi3gJN-1TqB5kaQMZ8GF634uGnFUqM0mUlruiMdDNLEc4-meyfGbvwVzRrBN9j5rfYkcz5DoFUfbCckmgL-rfYoFP1QaHGraguI6eemQxygstiYbp-aQ__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/27/image/image.jpg?Expires=1760506700&Signature=XZUtvjikVmWjV5~ka~sWP7PITYaMXxqhP5M5-PstxY0klEYCzy9Nz5fUN1QPJ5eBojdpppQ8zxXlGf3sE9sNrYPgFLaHxtYOO1zrTlWOcSK3iPYJFm991QGeza3o82TN83OOLqsbc--oA30amM6I22-jJofkCYuzT6F9lG-TkYkDZExHVr2zss68fnvC1~uhG87Bfv4VsNwW~5~J9a-Yu-yJdjjZJQVUhFTAtQBL~FAHXsG1-k3VbJB6LyaXi5Sbj734fR5e0I88bgt7XMqA3o0XPz1EF0jOLNAMR1r4j5bnuSw091sqnvM8M3WoRpJXzV2HsWgpuDq213Tib4mUMw__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_27_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 27,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/27/image/image.jpg?Expires=1760506700&Signature=XZUtvjikVmWjV5~ka~sWP7PITYaMXxqhP5M5-PstxY0klEYCzy9Nz5fUN1QPJ5eBojdpppQ8zxXlGf3sE9sNrYPgFLaHxtYOO1zrTlWOcSK3iPYJFm991QGeza3o82TN83OOLqsbc--oA30amM6I22-jJofkCYuzT6F9lG-TkYkDZExHVr2zss68fnvC1~uhG87Bfv4VsNwW~5~J9a-Yu-yJdjjZJQVUhFTAtQBL~FAHXsG1-k3VbJB6LyaXi5Sbj734fR5e0I88bgt7XMqA3o0XPz1EF0jOLNAMR1r4j5bnuSw091sqnvM8M3WoRpJXzV2HsWgpuDq213Tib4mUMw__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/28/image/image.jpg?Expires=1760506700&Signature=rDTB9JGt14yOcy6~RA28xKfdB0jCN-lrdwvKyUl1nLmOv0THxO1smua~oD6SWWOLAbkiMypl8X66gWDshehPBdodHLAq~dfjfnUmdhQgzjILgUDjZCp2FtG4WoJ210GdM5mGgi5sQCgzUpRavbE1FbjrSK6G5KEK9JdHl21hqPqXjHEfKC2kTKecDILFPt3QVTNRsCwPAOdfm~u7GYKoMQgCSkpeXlrGVeE13JugLkbC5vcnFU-4m24l60DsEVaGYahuV5Z4B2DnqFkAM3ELmIm-pCA6IWiOgYk0wHDwsWuanHlQUAOKd9T3zqbTeHsByQGsLDpY7fwn-O1lmDHJdQ__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_28_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 28,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/28/image/image.jpg?Expires=1760506700&Signature=rDTB9JGt14yOcy6~RA28xKfdB0jCN-lrdwvKyUl1nLmOv0THxO1smua~oD6SWWOLAbkiMypl8X66gWDshehPBdodHLAq~dfjfnUmdhQgzjILgUDjZCp2FtG4WoJ210GdM5mGgi5sQCgzUpRavbE1FbjrSK6G5KEK9JdHl21hqPqXjHEfKC2kTKecDILFPt3QVTNRsCwPAOdfm~u7GYKoMQgCSkpeXlrGVeE13JugLkbC5vcnFU-4m24l60DsEVaGYahuV5Z4B2DnqFkAM3ELmIm-pCA6IWiOgYk0wHDwsWuanHlQUAOKd9T3zqbTeHsByQGsLDpY7fwn-O1lmDHJdQ__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/29/image/image.jpg?Expires=1760506700&Signature=x7xDdy1Rctk1XDLsnNRLqxTGRWxMQtCtEon~ja3PW13mbLKVKkWrw4blJky0X1FrJV6w97JkrWdpj-RvJo96myvJTkNufA0aRsspsF9edj-8AOIOPkrRD7iSB5ha-HmsaNrdX9T0nNzk93oBg72iQlkuMZaZzPYz6Gd18-AwC8~UdlTShzsyKaX02RpmIL8S4z0w1I4ovz~LGMXSBL8StznlRffaO2Rd4oIKvq~no9AeR9PdeIAYoPi6v7Kyr3YEyzH7XeDk-p6fRgRgG8EieO8n-oM6bMcTJ8f8nPBxgrSI3sYVHFRNFyins-GVIoEy8jRJvBWic9SXceliCOG57g__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_29_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 29,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/29/image/image.jpg?Expires=1760506700&Signature=x7xDdy1Rctk1XDLsnNRLqxTGRWxMQtCtEon~ja3PW13mbLKVKkWrw4blJky0X1FrJV6w97JkrWdpj-RvJo96myvJTkNufA0aRsspsF9edj-8AOIOPkrRD7iSB5ha-HmsaNrdX9T0nNzk93oBg72iQlkuMZaZzPYz6Gd18-AwC8~UdlTShzsyKaX02RpmIL8S4z0w1I4ovz~LGMXSBL8StznlRffaO2Rd4oIKvq~no9AeR9PdeIAYoPi6v7Kyr3YEyzH7XeDk-p6fRgRgG8EieO8n-oM6bMcTJ8f8nPBxgrSI3sYVHFRNFyins-GVIoEy8jRJvBWic9SXceliCOG57g__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/30/image/image.jpg?Expires=1760506700&Signature=oLa01VNbEvkxz9XGS1IaxmToz~jn~vIAdS4BMmGH9wiCeZ0ec6-MaQ88HBiccUwAhPuDF21O-gRNi9Qt5zLEjV-MRFv91b1gTP4~v0yn7ECYaUnj-ra3SQRvVRlafkZWxbYT8QJ~mZCIE5T6HO~qeYGOV2gHrK1Tn5A1sI1wjBusTwb3-xDcyAUPu-OFssQVH~rcTj~qkaSy21ptn9Sk4pGfnd0QXYEM3ATwBNJvH6p46ZvsEuuVLVmybDXHr5nx1mG8FgMC3x-rvDkt33PJ2SztOO-7un~GsZuMycS-2dxHMRxBVKvrgDiCQf9~iiry2hp9cnGPxnH0RgXYaMctTg__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_30_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 30,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/30/image/image.jpg?Expires=1760506700&Signature=oLa01VNbEvkxz9XGS1IaxmToz~jn~vIAdS4BMmGH9wiCeZ0ec6-MaQ88HBiccUwAhPuDF21O-gRNi9Qt5zLEjV-MRFv91b1gTP4~v0yn7ECYaUnj-ra3SQRvVRlafkZWxbYT8QJ~mZCIE5T6HO~qeYGOV2gHrK1Tn5A1sI1wjBusTwb3-xDcyAUPu-OFssQVH~rcTj~qkaSy21ptn9Sk4pGfnd0QXYEM3ATwBNJvH6p46ZvsEuuVLVmybDXHr5nx1mG8FgMC3x-rvDkt33PJ2SztOO-7un~GsZuMycS-2dxHMRxBVKvrgDiCQf9~iiry2hp9cnGPxnH0RgXYaMctTg__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/31/image/image.jpg?Expires=1760506700&Signature=JNj0EUlOeADHIQIGvpToHBkB0LCHB7OuL-waXXc0elBD0kZTcYCPY6byYLInCARUUv6Opx~ZA2LaM367K3Xivb2-LpZPnM-A1HBcSahCjW1XTmewji4iHiJYsc3SLEUmUnKIMDOCsn9WfQYs8n0Rb0ZuDNJtf0tPln2tqWmVTa5C0y~J1JgSghVJCCee4DxwD10Zdy0Tbe4-jrV51Jp6rCtYcBv~2tkYTCO5qXMVYKT-0BxlxArEiz8M-vkzfR0v1XXibXLDl5CVZaqnEiqq~zTV393-E0mlL~qvYpg1-qK08ffsw1m5WO~xclTCpErqNZ5NuvlZTU8OHuMZgj9Z1g__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_31_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 31,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/31/image/image.jpg?Expires=1760506700&Signature=JNj0EUlOeADHIQIGvpToHBkB0LCHB7OuL-waXXc0elBD0kZTcYCPY6byYLInCARUUv6Opx~ZA2LaM367K3Xivb2-LpZPnM-A1HBcSahCjW1XTmewji4iHiJYsc3SLEUmUnKIMDOCsn9WfQYs8n0Rb0ZuDNJtf0tPln2tqWmVTa5C0y~J1JgSghVJCCee4DxwD10Zdy0Tbe4-jrV51Jp6rCtYcBv~2tkYTCO5qXMVYKT-0BxlxArEiz8M-vkzfR0v1XXibXLDl5CVZaqnEiqq~zTV393-E0mlL~qvYpg1-qK08ffsw1m5WO~xclTCpErqNZ5NuvlZTU8OHuMZgj9Z1g__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/32/image/image.jpg?Expires=1760506700&Signature=JLDEUJggPgaR0xxBt~6w88w-BejsC6HwfSw6LAYDRv9zQDxMKLnerV5KNYNqGeN7JGsm~AsBhw9kzCw9XAJ3755HhjDpEvlSXrdtmMPfsp9Mg6muL4lCBreJ8XEJ88WCgWs36vf8Vuzfz-lipAfwBrUMhP5LXIO1ZqgJyRw3BqPcOSuDgTCKJjFI1inzRMtCXLoCz4oSDwFFd1w9dC8G3d7AY9N-zfNJKbIiYyBzA3noQwxvCStMCJx1gurCn0-43nad0NTpXAWOI1vHGb-pLJsrS~AMx--3wQdfTO13cCI3H6tIfYdbxweltPcHi4frg~-sTm1dR511g~eFylZRXg__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_32_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 32,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/32/image/image.jpg?Expires=1760506700&Signature=JLDEUJggPgaR0xxBt~6w88w-BejsC6HwfSw6LAYDRv9zQDxMKLnerV5KNYNqGeN7JGsm~AsBhw9kzCw9XAJ3755HhjDpEvlSXrdtmMPfsp9Mg6muL4lCBreJ8XEJ88WCgWs36vf8Vuzfz-lipAfwBrUMhP5LXIO1ZqgJyRw3BqPcOSuDgTCKJjFI1inzRMtCXLoCz4oSDwFFd1w9dC8G3d7AY9N-zfNJKbIiYyBzA3noQwxvCStMCJx1gurCn0-43nad0NTpXAWOI1vHGb-pLJsrS~AMx--3wQdfTO13cCI3H6tIfYdbxweltPcHi4frg~-sTm1dR511g~eFylZRXg__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/33/image/image.jpg?Expires=1760506700&Signature=CCtNmG26U0HO0HypXQswoUgXpufPj8xnZBGRckHaCkELXuGjLju7aVrR3Bc0gmGEnMH47WKZxf5dlmIf66ueQiDvC-BwDd73~FS198~wXXo7sYAOIY24Usdj8xn1wNj6-msC-hHiVqsbSbL7gGO6KVJXrrDvar8EFUpHJUauTFvtdWyYkbNknp3WLS6q661X~gjItJKJPyj~oCgyERlTtwD8izIhlrO~DAOuS9Lb~1Lttsa9xCpVJRXouHgfWEVFsKwYsWd1EOJX0k9xWAX~vPuJu2PbsYY0mD2~mUSnMWyVMRyyhDnllKZTg7dAKdywEfzH71EAJLQygbzOkFnO3Q__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_33_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 33,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/33/image/image.jpg?Expires=1760506700&Signature=CCtNmG26U0HO0HypXQswoUgXpufPj8xnZBGRckHaCkELXuGjLju7aVrR3Bc0gmGEnMH47WKZxf5dlmIf66ueQiDvC-BwDd73~FS198~wXXo7sYAOIY24Usdj8xn1wNj6-msC-hHiVqsbSbL7gGO6KVJXrrDvar8EFUpHJUauTFvtdWyYkbNknp3WLS6q661X~gjItJKJPyj~oCgyERlTtwD8izIhlrO~DAOuS9Lb~1Lttsa9xCpVJRXouHgfWEVFsKwYsWd1EOJX0k9xWAX~vPuJu2PbsYY0mD2~mUSnMWyVMRyyhDnllKZTg7dAKdywEfzH71EAJLQygbzOkFnO3Q__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/34/image/image.jpg?Expires=1760506700&Signature=ZmxncE-HZE8XWrM~2gCpUBcf3RJcqBSFrHb8oY1SU97VHkGSh6ShiVe553eYw1W7Er4dic5DGgCzp91Iz4iZalACAmXsjWq8cKFOSX76-ODj73T81dBnnrZnHo-8STAihDiszMeVWFycOWWLc8VFdCjv9QMq7AU1gy9Q8aqGbluDo-VqMBV0J6UuAhHYLjO3PKEMGPI7BsAtGj4icNRcMtco5oTIThhvpaX3FUnYx2vulTBsLxuEwIbffeUJDfSq-RM8-JWDaLu3HfxqJF~dokIlujsj1tK4IMCueumHK553sdIayaEIOWbDPeLZjZP568muFeNpnGcdB1vSf7i62Q__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_34_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 34,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/34/image/image.jpg?Expires=1760506700&Signature=ZmxncE-HZE8XWrM~2gCpUBcf3RJcqBSFrHb8oY1SU97VHkGSh6ShiVe553eYw1W7Er4dic5DGgCzp91Iz4iZalACAmXsjWq8cKFOSX76-ODj73T81dBnnrZnHo-8STAihDiszMeVWFycOWWLc8VFdCjv9QMq7AU1gy9Q8aqGbluDo-VqMBV0J6UuAhHYLjO3PKEMGPI7BsAtGj4icNRcMtco5oTIThhvpaX3FUnYx2vulTBsLxuEwIbffeUJDfSq-RM8-JWDaLu3HfxqJF~dokIlujsj1tK4IMCueumHK553sdIayaEIOWbDPeLZjZP568muFeNpnGcdB1vSf7i62Q__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/35/image/image.jpg?Expires=1760506700&Signature=q5qt5EUEo4ajdJhHvRMLQCNlJeLOn2AcXmBofrNQyBw9KmwL1jmymwR42ZG-Ryozqg2oGTRh6x56m85ryEt3CDzTOQzHpYPf3NDPFujq6MObiNSmOnbfirHQ6maggZs1ZqXi6aLk52Axxb7nBSgiyen8zE44ISEjsPr6HaW7ggfG~3o3pEQYZISX1KZZ4GifklHmrz2Nz3pUfqTi1O7ntdpnTFvz0ooKStlo8d5nhLW94lyghlkHmGWPILgJy3RsGgC4sNDSTpHoGJhhIYn3BqN4l5IY2OsgePj0Mei0vME0rySoltDfb9R8inG9-u24le3RoMyibaSdQDfMuqHrHw__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_35_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 35,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/35/image/image.jpg?Expires=1760506700&Signature=q5qt5EUEo4ajdJhHvRMLQCNlJeLOn2AcXmBofrNQyBw9KmwL1jmymwR42ZG-Ryozqg2oGTRh6x56m85ryEt3CDzTOQzHpYPf3NDPFujq6MObiNSmOnbfirHQ6maggZs1ZqXi6aLk52Axxb7nBSgiyen8zE44ISEjsPr6HaW7ggfG~3o3pEQYZISX1KZZ4GifklHmrz2Nz3pUfqTi1O7ntdpnTFvz0ooKStlo8d5nhLW94lyghlkHmGWPILgJy3RsGgC4sNDSTpHoGJhhIYn3BqN4l5IY2OsgePj0Mei0vME0rySoltDfb9R8inG9-u24le3RoMyibaSdQDfMuqHrHw__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/36/image/image.jpg?Expires=1760506700&Signature=W1rpkWA3RDiymo~Lmlfj5sMG70yv1R8zWPzttY5cLSY00mGCEVp5Z8v0uffxxUoAuP1~8wfHtx6-9oaM0BUsUWzNe32JmmXFpccz1CF6B3vvSNNcsXiZmnitW7vyWcPutkb-cw7GbEju0ER~Sw0vR7kluy8tqNusAJ8PpTkmyt-x7VXOJnd4jUIEWvNc9~IBt6ydxdOgHyjw-5ponYBGHWiOhSND1ifXYHzMX9l1qFOG0DoDiPXj--IY8oDvjcV-pqqMVIu1U8~WbJVsgJR32aY0BTUItL-2cgV~v~DUxLyIqOdNLGZmK033boDO2Qsx6VqdPz0~jmtmQd-HavJ7CA__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_36_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 36,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/36/image/image.jpg?Expires=1760506700&Signature=W1rpkWA3RDiymo~Lmlfj5sMG70yv1R8zWPzttY5cLSY00mGCEVp5Z8v0uffxxUoAuP1~8wfHtx6-9oaM0BUsUWzNe32JmmXFpccz1CF6B3vvSNNcsXiZmnitW7vyWcPutkb-cw7GbEju0ER~Sw0vR7kluy8tqNusAJ8PpTkmyt-x7VXOJnd4jUIEWvNc9~IBt6ydxdOgHyjw-5ponYBGHWiOhSND1ifXYHzMX9l1qFOG0DoDiPXj--IY8oDvjcV-pqqMVIu1U8~WbJVsgJR32aY0BTUItL-2cgV~v~DUxLyIqOdNLGZmK033boDO2Qsx6VqdPz0~jmtmQd-HavJ7CA__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/37/image/image.jpg?Expires=1760506700&Signature=a~wgfO6NdadbIQMhxwVpMfUlipDXwSnIvbJa55OE2lukbzaNFXHhfzDZymlO4jW8LKzahAlmjsnUY6y501emRDYue0FSxx~fJQak-OASV~I8fHJK9cvjbqRRp78vddl~7yJ5lwsyTRWXF6BDJOfOxJlO5Ie433fYwm6yHBPuFrVMoJNl5TreDftIQCH9DVTBqrBZVjmBWsCpyrH~3dcNP3uAh4pIkF6CpTJIidqd2I3Ve3djic-agnaNMXcAoyqnh26a5JMAgyvKZbY9F5-wxFTM3ATRq~1unh6zUIgJgaWxEiJzvY7S5JaQ3MsTb8UMeXjfwxLxstjmeFEAJoEgkA__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_37_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 37,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/37/image/image.jpg?Expires=1760506700&Signature=a~wgfO6NdadbIQMhxwVpMfUlipDXwSnIvbJa55OE2lukbzaNFXHhfzDZymlO4jW8LKzahAlmjsnUY6y501emRDYue0FSxx~fJQak-OASV~I8fHJK9cvjbqRRp78vddl~7yJ5lwsyTRWXF6BDJOfOxJlO5Ie433fYwm6yHBPuFrVMoJNl5TreDftIQCH9DVTBqrBZVjmBWsCpyrH~3dcNP3uAh4pIkF6CpTJIidqd2I3Ve3djic-agnaNMXcAoyqnh26a5JMAgyvKZbY9F5-wxFTM3ATRq~1unh6zUIgJgaWxEiJzvY7S5JaQ3MsTb8UMeXjfwxLxstjmeFEAJoEgkA__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/38/image/image.jpg?Expires=1760506700&Signature=vHwRirVIMmbqmYSdiObTariYhP2LsgfH1pG-FLEbFERneoK~C1r6q2Jx18tSjp5J-EGdIDWTXPQADuZ-15JMmmmj6CVj6ZCSyxOLUojRNvJTOZ36DABcx30ssU~yCY0ykq747B5Q-h6hgrt8u8bAJuNlxV3OKWbPxT2wm4iCZ7B5xJVNpGkaWfsVLOZcQYCphvdiX9jbJvsLUj8fzt-rTWUaCGpUEkCRmV242U2zDdRkKRGVi8IqfPm62JH43fhWtFobwVPXbxYZxQceXNZ3Y16Kp2HhPgnsjgfUTgV4rw8kp2CUynck5rEgZSV48edZ1tqFj9tQtsPTrRvRPrDZFA__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_38_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 38,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/38/image/image.jpg?Expires=1760506700&Signature=vHwRirVIMmbqmYSdiObTariYhP2LsgfH1pG-FLEbFERneoK~C1r6q2Jx18tSjp5J-EGdIDWTXPQADuZ-15JMmmmj6CVj6ZCSyxOLUojRNvJTOZ36DABcx30ssU~yCY0ykq747B5Q-h6hgrt8u8bAJuNlxV3OKWbPxT2wm4iCZ7B5xJVNpGkaWfsVLOZcQYCphvdiX9jbJvsLUj8fzt-rTWUaCGpUEkCRmV242U2zDdRkKRGVi8IqfPm62JH43fhWtFobwVPXbxYZxQceXNZ3Y16Kp2HhPgnsjgfUTgV4rw8kp2CUynck5rEgZSV48edZ1tqFj9tQtsPTrRvRPrDZFA__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/39/image/image.jpg?Expires=1760506700&Signature=mMZUhtK59zsRldoGtMC7iZBwF--epirBLfryF4LNBHrthCekmJ94FGBTcVsTInEFWcWQEVuloQx4akCN9Je9jB2l2apZIDY7SiNaHrxSTYRRBHG0hiBlm3T8fWEBUcCpz-jrT6LtxpI9OFABRPf0KCD5972InYqJLrJjBIogMWjGytSuPzEMFVteDcRFnSW1txPZW332YHZv0hu0iCap--LbGQ7cMg2-EWuRGDMYUNpQqSly0KZotAZgygZxBFKDRxfr1Vh~hnjue7Eq1jPCzwbS8XD8anJ8Udam2Fk5Bdpg4QDQ8bUHkhEFnG3EJtusLkaz2t86CaJJPtCnVynKKA__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_39_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 39,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/39/image/image.jpg?Expires=1760506700&Signature=mMZUhtK59zsRldoGtMC7iZBwF--epirBLfryF4LNBHrthCekmJ94FGBTcVsTInEFWcWQEVuloQx4akCN9Je9jB2l2apZIDY7SiNaHrxSTYRRBHG0hiBlm3T8fWEBUcCpz-jrT6LtxpI9OFABRPf0KCD5972InYqJLrJjBIogMWjGytSuPzEMFVteDcRFnSW1txPZW332YHZv0hu0iCap--LbGQ7cMg2-EWuRGDMYUNpQqSly0KZotAZgygZxBFKDRxfr1Vh~hnjue7Eq1jPCzwbS8XD8anJ8Udam2Fk5Bdpg4QDQ8bUHkhEFnG3EJtusLkaz2t86CaJJPtCnVynKKA__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/40/image/image.jpg?Expires=1760506700&Signature=AgwmTAZeuP8yCgPnvqY82ha~m6kyguwZG58NhE8ml~SB7Tk6CzH3-xF9jDSVzEz8IJC4TX8ThZ-s~aW-DWajsXy3vqTGdbbY3dlggDzH634~wdAn8safGsBWE1iY4nCnELDLRQCAmCw66-LQizUlQo8eISUI2oUGetIiMSFEEhoinXVQDwzuLClTIdoIvE4fPSc8XpRtxH1mEOPKDmQgbCCC83w8wF0IIAFtx-kT32~k1328PzSSYTqI2QwfyirbcuHds1zOvO2bWYzScFgH2NGl5isxQcy51KEDwi-ZP32VnjJO1sEPR5imuceCJszPplpGJrt9D8uTFpOdNwtu0g__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_40_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 40,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/40/image/image.jpg?Expires=1760506700&Signature=AgwmTAZeuP8yCgPnvqY82ha~m6kyguwZG58NhE8ml~SB7Tk6CzH3-xF9jDSVzEz8IJC4TX8ThZ-s~aW-DWajsXy3vqTGdbbY3dlggDzH634~wdAn8safGsBWE1iY4nCnELDLRQCAmCw66-LQizUlQo8eISUI2oUGetIiMSFEEhoinXVQDwzuLClTIdoIvE4fPSc8XpRtxH1mEOPKDmQgbCCC83w8wF0IIAFtx-kT32~k1328PzSSYTqI2QwfyirbcuHds1zOvO2bWYzScFgH2NGl5isxQcy51KEDwi-ZP32VnjJO1sEPR5imuceCJszPplpGJrt9D8uTFpOdNwtu0g__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/41/image/image.jpg?Expires=1760506700&Signature=Ex6BMRBLzgsPAgHtCYZWjFEwOa0-JmPDBvwv4zsHpEGnRemuACyu98GWDZXVz7Oy8RpxbvPwERt6x~25i0bxOKiQub2x1h8AT7~LFsLkVDXN3r6nGY5J1uuoe~Wbs6QKnnkcEskyL~WeyXGAr1eJphojf9Xl24a9jVbOZaQMEZ-qGJRdVIgYaQmcH6YGlG~XP9wyxgCS7acqtS3uEftvMiOzc2W9BQ2iuf~4k8WEMuB-H0s6H-H6E9S7qWJABJQlDltho3gytPlH-MCIOaOsLAEi4f~KBGhPCSWKwuOPjqOWb1QJ0-TPP8tG9xeX-w-Ecp-IklZw2uIQbMbg2OvqPg__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_41_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 41,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/41/image/image.jpg?Expires=1760506700&Signature=Ex6BMRBLzgsPAgHtCYZWjFEwOa0-JmPDBvwv4zsHpEGnRemuACyu98GWDZXVz7Oy8RpxbvPwERt6x~25i0bxOKiQub2x1h8AT7~LFsLkVDXN3r6nGY5J1uuoe~Wbs6QKnnkcEskyL~WeyXGAr1eJphojf9Xl24a9jVbOZaQMEZ-qGJRdVIgYaQmcH6YGlG~XP9wyxgCS7acqtS3uEftvMiOzc2W9BQ2iuf~4k8WEMuB-H0s6H-H6E9S7qWJABJQlDltho3gytPlH-MCIOaOsLAEi4f~KBGhPCSWKwuOPjqOWb1QJ0-TPP8tG9xeX-w-Ecp-IklZw2uIQbMbg2OvqPg__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/42/image/image.jpg?Expires=1760506700&Signature=U5xG4EQRBhjKL6Fa3SqBeDKIERiP~NzEiRWLY0nF5BLAf2Iy-qwHCDqSM5yOBUIX119yy8VpY8KREMKE1tGoSk33Wrxs1ZfBMpoAzu6lMP-utPFnPr809s~x9lOLBcWrZKcOLkehc-hidsf~dep1dxL4EtaUSR0~jmsywYp9D7t4lUwIAe80-9DAYgyVQdXemHnS2zX4l4nJny6RIuLgU2qw5cUyRUZ8cKV9BPahUlVkcRlMDpG5aerqdauZVoDojM5M~5UY~QKfxzgE7R1~ERlawnlM~Cq9wG1EFu6xA0EZEo~uAM0bEl9e36Zd5W-h5-JUVrGaj8hq~I21FGj5ZQ__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_42_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 42,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/42/image/image.jpg?Expires=1760506700&Signature=U5xG4EQRBhjKL6Fa3SqBeDKIERiP~NzEiRWLY0nF5BLAf2Iy-qwHCDqSM5yOBUIX119yy8VpY8KREMKE1tGoSk33Wrxs1ZfBMpoAzu6lMP-utPFnPr809s~x9lOLBcWrZKcOLkehc-hidsf~dep1dxL4EtaUSR0~jmsywYp9D7t4lUwIAe80-9DAYgyVQdXemHnS2zX4l4nJny6RIuLgU2qw5cUyRUZ8cKV9BPahUlVkcRlMDpG5aerqdauZVoDojM5M~5UY~QKfxzgE7R1~ERlawnlM~Cq9wG1EFu6xA0EZEo~uAM0bEl9e36Zd5W-h5-JUVrGaj8hq~I21FGj5ZQ__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/43/image/image.jpg?Expires=1760506700&Signature=pddotzrGpTpkxYZs26KAI4NdThzWl1YIJ7gKpXWqOthRoGFxgmi0ox0LFRAR7tc1IyHS~LdbXWQ8FdyA5GVEXxsL1t9F9gYy7mYUR1O74LoNIxeTHW0p4mdVCzw1zp5awM0ohN7457Vj02sFDNiUZU20zeBmGi5CRy~CFduDGHESLe0Cg8GYb2blOkn3G7h3f4ybW2ySdU0X3Q58Kwhc3ifIx9bUDO4tAjsAusnACxNsanlOeeHcrJso~aVc14NuiZ4aGmvjJOkOnlj-1eD2oQjJgV6RKnaZHYnAPbKLuHs6im2FyohXjtlFaJ2B6QW1yl5-jjf5EOsm09UoPJZNCQ__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_43_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 43,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/43/image/image.jpg?Expires=1760506700&Signature=pddotzrGpTpkxYZs26KAI4NdThzWl1YIJ7gKpXWqOthRoGFxgmi0ox0LFRAR7tc1IyHS~LdbXWQ8FdyA5GVEXxsL1t9F9gYy7mYUR1O74LoNIxeTHW0p4mdVCzw1zp5awM0ohN7457Vj02sFDNiUZU20zeBmGi5CRy~CFduDGHESLe0Cg8GYb2blOkn3G7h3f4ybW2ySdU0X3Q58Kwhc3ifIx9bUDO4tAjsAusnACxNsanlOeeHcrJso~aVc14NuiZ4aGmvjJOkOnlj-1eD2oQjJgV6RKnaZHYnAPbKLuHs6im2FyohXjtlFaJ2B6QW1yl5-jjf5EOsm09UoPJZNCQ__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/44/image/image.jpg?Expires=1760506700&Signature=B7u9guOL1CSkqXHyfaK9V6kfewSldEhPAsrW5n0KUw6u0j2CC6Egal13mFogmoKmHgWjRYOEBxltpehJHio1X5YVDSn7nDOmsAuzq0UlpXVICRvH4ghduMdrlfmOiRcohpypuiuO3vR7t-mO21GkNOtYWZdNRToHDCoNwLHnFfhflKURaB5RPn0sHZpZwfMNgDuB2DRQ4-4447QsGPN~CGV6G~6-XFjIsODE-CuRwoSEZuGijU4dATzKFjvlzHeT9cYxF0xko3lKsQSQZ5pBxc3jWy4J1u-s61ax9ftyaE04u-AKDxSyjHvJ4E1IEtev6IpkjsrFUAkrG9xcaZbLJQ__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_44_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 44,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/44/image/image.jpg?Expires=1760506700&Signature=B7u9guOL1CSkqXHyfaK9V6kfewSldEhPAsrW5n0KUw6u0j2CC6Egal13mFogmoKmHgWjRYOEBxltpehJHio1X5YVDSn7nDOmsAuzq0UlpXVICRvH4ghduMdrlfmOiRcohpypuiuO3vR7t-mO21GkNOtYWZdNRToHDCoNwLHnFfhflKURaB5RPn0sHZpZwfMNgDuB2DRQ4-4447QsGPN~CGV6G~6-XFjIsODE-CuRwoSEZuGijU4dATzKFjvlzHeT9cYxF0xko3lKsQSQZ5pBxc3jWy4J1u-s61ax9ftyaE04u-AKDxSyjHvJ4E1IEtev6IpkjsrFUAkrG9xcaZbLJQ__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/45/image/image.jpg?Expires=1760506700&Signature=GQNMMCG9Gk4pU03QJfCVq~Um-CQl6ByyNUe6akVkJC9i7Ycd2uTn1qtK9nGwLS3QqApEc-4Fknp-zYR9ZHw6ToIekWEvBJ2GpAxS0JFPq5BjFPElxitmnjDHiLT4hzRZffhzRsPH6xl14TLSUhIRhkOdchYo3tzGjY9n-p-~wNV-qB31zDjb6x2YWz359qnfXqtp3t1ZQvb9htacXYGLUVcJ870FLSCW-njMVfLzCo4gCw90GPfuoY9mYFpniYhStnVQGlcLS0A7BXNLPn1W2Tj25nazrEh-KoS5vmC4hgSM68aLlJM1S5wcVCh9OKLF9eR1HjKLnVQr-Y8zJ3OVlw__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_45_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 45,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/45/image/image.jpg?Expires=1760506700&Signature=GQNMMCG9Gk4pU03QJfCVq~Um-CQl6ByyNUe6akVkJC9i7Ycd2uTn1qtK9nGwLS3QqApEc-4Fknp-zYR9ZHw6ToIekWEvBJ2GpAxS0JFPq5BjFPElxitmnjDHiLT4hzRZffhzRsPH6xl14TLSUhIRhkOdchYo3tzGjY9n-p-~wNV-qB31zDjb6x2YWz359qnfXqtp3t1ZQvb9htacXYGLUVcJ870FLSCW-njMVfLzCo4gCw90GPfuoY9mYFpniYhStnVQGlcLS0A7BXNLPn1W2Tj25nazrEh-KoS5vmC4hgSM68aLlJM1S5wcVCh9OKLF9eR1HjKLnVQr-Y8zJ3OVlw__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/46/image/image.jpg?Expires=1760506700&Signature=Cwcp9jbr~7R0jrNNomEkMC-cpmYyDOrdnqSIgHB-VdSXQ2TxTcpNoinMxqga8Pc1hdYKpURbLsRbvdFtgJiAPpG95cerhmlNXGj2FBrH2RxtUJP1qXClKCBTUObz5sRtknZQ-WEu955TXDnUGDajEwjX~lRTRgWubWr-M-NU83YhdEtTyp2pE-hF0fu-1gx3WsqR6qddyzAYcGwAr9Uey4rItANf-Gi4ro1vlKsblp7Tou5nvsPBLsvo7OnY7p116yMe0nsDHlWWtZ2KxjedGWlDQLec0DZaDnLHzzDfv~DEVLO19PWqNYWQRv6EtEnWMlW6zgX8-gXMi8Z5CDIHHA__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_46_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 46,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/46/image/image.jpg?Expires=1760506700&Signature=Cwcp9jbr~7R0jrNNomEkMC-cpmYyDOrdnqSIgHB-VdSXQ2TxTcpNoinMxqga8Pc1hdYKpURbLsRbvdFtgJiAPpG95cerhmlNXGj2FBrH2RxtUJP1qXClKCBTUObz5sRtknZQ-WEu955TXDnUGDajEwjX~lRTRgWubWr-M-NU83YhdEtTyp2pE-hF0fu-1gx3WsqR6qddyzAYcGwAr9Uey4rItANf-Gi4ro1vlKsblp7Tou5nvsPBLsvo7OnY7p116yMe0nsDHlWWtZ2KxjedGWlDQLec0DZaDnLHzzDfv~DEVLO19PWqNYWQRv6EtEnWMlW6zgX8-gXMi8Z5CDIHHA__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/47/image/image.jpg?Expires=1760506700&Signature=PdA8KskxodlsX08cm2IAYQjKTpTrj~tOnbzVrfDRH9wJVC8eoWtenlTs19~rGezLYDZcl-UiXtjENT4ALxeZYKFwc4AEaL~RHebpENTjxHcVIF5jZnvJOkKDL4QNrnLszsIq71~kY43VTGRhyRWsMHKU6qMulrJFjIcZr2EJnU0Qo0QjmPEMy9dUJ~N8bEDqd~tx9PBPw6pObIQpCi~T2hoTeO6rjhM8JwrFKJoDUS2Eu3e5GpTCGuCyGdFBC6oiAzY75iZQweb3FCXbnBRELYMQPeyRARYnE-AMWx7KpDmit-LUObf4tXdNIqUfGXYJT2WgUARyDrvICH1DYqMW-Q__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_47_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 47,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/47/image/image.jpg?Expires=1760506700&Signature=PdA8KskxodlsX08cm2IAYQjKTpTrj~tOnbzVrfDRH9wJVC8eoWtenlTs19~rGezLYDZcl-UiXtjENT4ALxeZYKFwc4AEaL~RHebpENTjxHcVIF5jZnvJOkKDL4QNrnLszsIq71~kY43VTGRhyRWsMHKU6qMulrJFjIcZr2EJnU0Qo0QjmPEMy9dUJ~N8bEDqd~tx9PBPw6pObIQpCi~T2hoTeO6rjhM8JwrFKJoDUS2Eu3e5GpTCGuCyGdFBC6oiAzY75iZQweb3FCXbnBRELYMQPeyRARYnE-AMWx7KpDmit-LUObf4tXdNIqUfGXYJT2WgUARyDrvICH1DYqMW-Q__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/48/image/image.jpg?Expires=1760506700&Signature=znaShgU6F-6gDeBHWMVcb5XZMA-IRnVZLpGaATOPk3RDcW7zBpZvmzX8-fIh2czQgNs~Oe3LUi2kX67ZiYdvZg6DZFQniYYLo4ojc6EnUtaglQd6~KJE2i1Jp7P0U2ZXS3rZchWqNnxby7huhF03rMHwbAktk~hTJY4Ka9DvHYO-edStHHEyIbtal06fQYfRCpgnekOOndi~nOY1QLlNoYjGrHReISk9qWy7ibGlGUfdKAIhyeD9AsWtanOHzxZ198ExXO-NkY4jxyOtocv1-Sw0V3Ue2aUkB-OXevJa2qjT-6~qM6jrRiJVBWbDdnG8n3tw5ERzRdLvxT6qU1p43g__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_48_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 48,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/48/image/image.jpg?Expires=1760506700&Signature=znaShgU6F-6gDeBHWMVcb5XZMA-IRnVZLpGaATOPk3RDcW7zBpZvmzX8-fIh2czQgNs~Oe3LUi2kX67ZiYdvZg6DZFQniYYLo4ojc6EnUtaglQd6~KJE2i1Jp7P0U2ZXS3rZchWqNnxby7huhF03rMHwbAktk~hTJY4Ka9DvHYO-edStHHEyIbtal06fQYfRCpgnekOOndi~nOY1QLlNoYjGrHReISk9qWy7ibGlGUfdKAIhyeD9AsWtanOHzxZ198ExXO-NkY4jxyOtocv1-Sw0V3Ue2aUkB-OXevJa2qjT-6~qM6jrRiJVBWbDdnG8n3tw5ERzRdLvxT6qU1p43g__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/49/image/image.jpg?Expires=1760506700&Signature=bjeFJVP2whSh~qEQa~jwe4nQoW5mMHxjXRd-eJd1jMUM~jLNJ~nvKgBG2t609lpNQL~X52ID5XEMnpldryiznM-DpcrNho6C3eSC9C42hIsdum98jh9rnC7buVE6Un3~piQ42UAqcBrhWWXIKz~fUjL-xV3zw~ZFo1PaxHa1w7M6uI5DcuPB1wcrJdQf~5FJ8NxPZIT70pv7KeyM-6UJ5Fd7R1GQ-s~P5y9UGRwzWeWsciDgjZ7fWES9SfXJBP2glpdsaleXRSdlItr5-GyAIqfsCsReUQ2RJD1djqTlA9JDUi8b2b-0YIKffreOM9Xqk5zknm56A2UsdohBtPZYGw__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_49_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 49,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/49/image/image.jpg?Expires=1760506700&Signature=bjeFJVP2whSh~qEQa~jwe4nQoW5mMHxjXRd-eJd1jMUM~jLNJ~nvKgBG2t609lpNQL~X52ID5XEMnpldryiznM-DpcrNho6C3eSC9C42hIsdum98jh9rnC7buVE6Un3~piQ42UAqcBrhWWXIKz~fUjL-xV3zw~ZFo1PaxHa1w7M6uI5DcuPB1wcrJdQf~5FJ8NxPZIT70pv7KeyM-6UJ5Fd7R1GQ-s~P5y9UGRwzWeWsciDgjZ7fWES9SfXJBP2glpdsaleXRSdlItr5-GyAIqfsCsReUQ2RJD1djqTlA9JDUi8b2b-0YIKffreOM9Xqk5zknm56A2UsdohBtPZYGw__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/50/image/image.jpg?Expires=1760506700&Signature=JIQXrVHVDGeZxYAMUclXfJZG3UkIJP046U~cgDMi8BzjiMynniI5bRYQrxvsuGGUkNhlTW15MfshGF8Or~AQvvdrKmew~-tXnzenstN96pzksWvaFPjoc5HL9DZUmbQ0kXlpiAGPLEkniYQLlTH5fWkyUK60wYc~uLSsMz-9AT95FvD6RcF3uWbsmx-SYfN9wXEsnu3jiRPwb5FcXmwXFoDqWhP~rZuErSdf-L88qEcSkR5VRFdzvcrizbFY~6iXHUO63UVim3qTUMHkY82y6AUkBCSCWTRT~CtonptO8DLAXPoicrEcum1z65wQgLJEuiVCPhz8l0DdVB8WhDVMzg__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_50_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 50,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/50/image/image.jpg?Expires=1760506700&Signature=JIQXrVHVDGeZxYAMUclXfJZG3UkIJP046U~cgDMi8BzjiMynniI5bRYQrxvsuGGUkNhlTW15MfshGF8Or~AQvvdrKmew~-tXnzenstN96pzksWvaFPjoc5HL9DZUmbQ0kXlpiAGPLEkniYQLlTH5fWkyUK60wYc~uLSsMz-9AT95FvD6RcF3uWbsmx-SYfN9wXEsnu3jiRPwb5FcXmwXFoDqWhP~rZuErSdf-L88qEcSkR5VRFdzvcrizbFY~6iXHUO63UVim3qTUMHkY82y6AUkBCSCWTRT~CtonptO8DLAXPoicrEcum1z65wQgLJEuiVCPhz8l0DdVB8WhDVMzg__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/51/image/image.jpg?Expires=1760506700&Signature=jsNsaqcsAudV5Imes7O~Pxi950SDyuxUDzVZsRl8q-krJsdPWS4B33OebGd9ySIzEGkBmOY6GWOL~kQ08FWeuPSVrHdxWvygP2eQ4qiAf3zpiMg9z0XWoSkh-kYxbsS-4A0MWS8fFVTe05~ZOzsmrvn0YF7lhmMu99DhBbeJnZk9f74rRhga~LzO7b8B1jdsdDF3g6CeP5o-Yhq9XdWjXbVZV6EMkPTCQc5Xry3fCTOBM2XQcJp5rBKX774R8609JqQB1ZeVwvCPEbExrWIhEk9m3~t~0hyCcA~N2jieak~zKXSClC7nYABkfjsdPMq-EoXViXHsenLZAGcEpZ6BOw__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_51_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 51,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/51/image/image.jpg?Expires=1760506700&Signature=jsNsaqcsAudV5Imes7O~Pxi950SDyuxUDzVZsRl8q-krJsdPWS4B33OebGd9ySIzEGkBmOY6GWOL~kQ08FWeuPSVrHdxWvygP2eQ4qiAf3zpiMg9z0XWoSkh-kYxbsS-4A0MWS8fFVTe05~ZOzsmrvn0YF7lhmMu99DhBbeJnZk9f74rRhga~LzO7b8B1jdsdDF3g6CeP5o-Yhq9XdWjXbVZV6EMkPTCQc5Xry3fCTOBM2XQcJp5rBKX774R8609JqQB1ZeVwvCPEbExrWIhEk9m3~t~0hyCcA~N2jieak~zKXSClC7nYABkfjsdPMq-EoXViXHsenLZAGcEpZ6BOw__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/52/image/image.jpg?Expires=1760506700&Signature=H8xA68PZPR1jR6QlScaaQZ63an5W0o1qTW2Mn484cpL3bsaDPdz~SVqOP5InbmTyNjZ2dhZVL5kQLzbPzWiFhW44GqQ5wVNjPeThnOl~QgoOz6KG8kXWyzXRbBjYRkH6QKAXEMwVTNMleBB7ngMDjR38lYYTDadmkXZWkCM~3nXsaGupluTyqv0vV16NxT-KfSaGszcsHnSxMrudqZW-WxsMGIr~0tLb7iCJ98e73m9kesz4QRw-tAMR-G2nEDoz~0THAk7yYgOCteWWBx~BwhJYIlQeirWXbS-pxR~7bwElM3s7vGwZVVpk8Kh6tl4djcRgbhYHkQkN56MypvAcPQ__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_52_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 52,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/52/image/image.jpg?Expires=1760506700&Signature=H8xA68PZPR1jR6QlScaaQZ63an5W0o1qTW2Mn484cpL3bsaDPdz~SVqOP5InbmTyNjZ2dhZVL5kQLzbPzWiFhW44GqQ5wVNjPeThnOl~QgoOz6KG8kXWyzXRbBjYRkH6QKAXEMwVTNMleBB7ngMDjR38lYYTDadmkXZWkCM~3nXsaGupluTyqv0vV16NxT-KfSaGszcsHnSxMrudqZW-WxsMGIr~0tLb7iCJ98e73m9kesz4QRw-tAMR-G2nEDoz~0THAk7yYgOCteWWBx~BwhJYIlQeirWXbS-pxR~7bwElM3s7vGwZVVpk8Kh6tl4djcRgbhYHkQkN56MypvAcPQ__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/53/image/image.jpg?Expires=1760506700&Signature=dAid8M~HxqZN08Kvnsf0HMfJg8GkM1IeZ2TtXMbXWEboa1qeqecOgbCODfjb5Ax6IPMhakYyEITiZR5mzGgMFn2ew2~aX9Ku41jn9OU90A1ITzgmTwj5krLxN4RbKeNgCmAQ6v539rOd5qzjnabuU34M8Jz-zeP4v93TxS7hpR-0keCdm41D8L3sTvm6b1i3NyW-lFe~FBPZ-luYQvoEXR~AknHdBUyiQPaMEG30txZ1QOAYDntOijm-RD63vAYjozZEigzhrDs~i7GyoOh9NYyAqUDesIlcJvliyIQHyvP4fonnRpU0-pHyb-PbQ3B-9koT0GxmnHKBk~73HcmOHA__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_53_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 53,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/53/image/image.jpg?Expires=1760506700&Signature=dAid8M~HxqZN08Kvnsf0HMfJg8GkM1IeZ2TtXMbXWEboa1qeqecOgbCODfjb5Ax6IPMhakYyEITiZR5mzGgMFn2ew2~aX9Ku41jn9OU90A1ITzgmTwj5krLxN4RbKeNgCmAQ6v539rOd5qzjnabuU34M8Jz-zeP4v93TxS7hpR-0keCdm41D8L3sTvm6b1i3NyW-lFe~FBPZ-luYQvoEXR~AknHdBUyiQPaMEG30txZ1QOAYDntOijm-RD63vAYjozZEigzhrDs~i7GyoOh9NYyAqUDesIlcJvliyIQHyvP4fonnRpU0-pHyb-PbQ3B-9koT0GxmnHKBk~73HcmOHA__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/54/image/image.jpg?Expires=1760506700&Signature=IjhFN4OXJtQn8nP-DFZv4Q7zN3ipVxZhBlCxriOiGH973WboMmmNkF6XuQOjxv629DScMAW3uXecahT1rmcCOzjs~icLEZx6X06JJKen-hHaBARpBOm1cD05WrJLG-OL0lwGaIGWVcApB~4X4U2fGBcu4LOxgsfzjTox-JVmh4KPLg6Kt-KhcPbm3Lja~QEkg6fmkvcvBIlnXDsGUenKcS~I2mu7ib0y0AZOVjKx8ilPoLGmtS3vVbYUZJKY8MsuespZzAPU6Obq~Tnvo6UppCITzqHRb3-r2cDYiIvQkv6SYv3Ouh736G3yTl3dYqF-KQtDjnoS~BTFjmaAStMxnA__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_54_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 54,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/54/image/image.jpg?Expires=1760506700&Signature=IjhFN4OXJtQn8nP-DFZv4Q7zN3ipVxZhBlCxriOiGH973WboMmmNkF6XuQOjxv629DScMAW3uXecahT1rmcCOzjs~icLEZx6X06JJKen-hHaBARpBOm1cD05WrJLG-OL0lwGaIGWVcApB~4X4U2fGBcu4LOxgsfzjTox-JVmh4KPLg6Kt-KhcPbm3Lja~QEkg6fmkvcvBIlnXDsGUenKcS~I2mu7ib0y0AZOVjKx8ilPoLGmtS3vVbYUZJKY8MsuespZzAPU6Obq~Tnvo6UppCITzqHRb3-r2cDYiIvQkv6SYv3Ouh736G3yTl3dYqF-KQtDjnoS~BTFjmaAStMxnA__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/55/image/image.jpg?Expires=1760506700&Signature=SstUUofqD3ss0wGV3d1ztEt2w6VDFO9vPPeO7gpWk6VNV8BXLkaABmdlib0dK4Z5HpXNMVJeuRLzeveyhe4rGeZTtYK-1EaCYeotcSq2oBZ9PicolzqyRiZAXi1pnVLmpcNyKgLbm52Wf1P-IMyXQ4v9333zLZpbqBnSq92yC-3LzRAfladaZc02QLTcHeHtJDJUo4VGJYBQcXu3Kl7ORTgzXbu9Xco3RxY1VG0aF9LymJiZ5Q0Irhg1EQEAY8rILhqE~4yAY41A5Dtk4FG~b6hAIvnL76Xa-4HQu3xznxirgEtJN3sLCBaSDbMzOwb7BGW1DLHRTXe9WHxBK3XQ-A__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_55_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 55,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/55/image/image.jpg?Expires=1760506700&Signature=SstUUofqD3ss0wGV3d1ztEt2w6VDFO9vPPeO7gpWk6VNV8BXLkaABmdlib0dK4Z5HpXNMVJeuRLzeveyhe4rGeZTtYK-1EaCYeotcSq2oBZ9PicolzqyRiZAXi1pnVLmpcNyKgLbm52Wf1P-IMyXQ4v9333zLZpbqBnSq92yC-3LzRAfladaZc02QLTcHeHtJDJUo4VGJYBQcXu3Kl7ORTgzXbu9Xco3RxY1VG0aF9LymJiZ5Q0Irhg1EQEAY8rILhqE~4yAY41A5Dtk4FG~b6hAIvnL76Xa-4HQu3xznxirgEtJN3sLCBaSDbMzOwb7BGW1DLHRTXe9WHxBK3XQ-A__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/56/image/image.jpg?Expires=1760506700&Signature=WpcUEzisxJ-j-uOvZhTJCCiXZFY~mpP0w1V5jlJN4h47Tmayr7rmG2SuDSeO6VnWLJXj5G596nE1WMWSeqd8kKwbk5koCXzrKkiu2jwc7Cx5e7bGMDwO1DwifGVAOMDxUNV6FAVWqNxoxkU7j2pUcVO8OXY8LA8Jjrbhd1LGDQAAk0pMojhv0fAlZxtftEvTzLL0Bme~MCU0e-dDGGRvVL6r8vKMUy-RGLSRR5NfjnXwB9nIc5Jluhuu5ouf~kDhV70aR9PlunddVglQH1j44YmarmpvpmcinwqnBYSgHPyQkw~2fDBRQeAl1q2chZ32gdDy2vMu8quJJMUxJfggEQ__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_56_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 56,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/56/image/image.jpg?Expires=1760506700&Signature=WpcUEzisxJ-j-uOvZhTJCCiXZFY~mpP0w1V5jlJN4h47Tmayr7rmG2SuDSeO6VnWLJXj5G596nE1WMWSeqd8kKwbk5koCXzrKkiu2jwc7Cx5e7bGMDwO1DwifGVAOMDxUNV6FAVWqNxoxkU7j2pUcVO8OXY8LA8Jjrbhd1LGDQAAk0pMojhv0fAlZxtftEvTzLL0Bme~MCU0e-dDGGRvVL6r8vKMUy-RGLSRR5NfjnXwB9nIc5Jluhuu5ouf~kDhV70aR9PlunddVglQH1j44YmarmpvpmcinwqnBYSgHPyQkw~2fDBRQeAl1q2chZ32gdDy2vMu8quJJMUxJfggEQ__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/57/image/image.jpg?Expires=1760506700&Signature=QltYfVtMlSeIl0w5k2yiWktMgswyWK~eO3ydZA0VVvY~ZBsS5keNlEE6-XEPFtY2rhWbecvnA909GKAC9HNK17MKH9Z9-owyKKiqLoVvKO01asc9GJ023WDF3diRwrgfnnpKaiFU4s4RFxF5iaL-6II4oSH~lRrI0WxrMb-PhCqlH3jomINbDdtP~rpLR4wHemBuZDy-b93cU5CsdXPpk2zrOXrQ02E15vKBZ43inteMeVfG9KmULoX4vDvyzTpZoalCeib5WKTl3zv-FFroXNgFjCJyCEbLo34TmaWdnMWjW0HqAaDuez-BjVBrJvW~ZinMeh9-wmY2slYJxPlz6w__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_57_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 57,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/57/image/image.jpg?Expires=1760506700&Signature=QltYfVtMlSeIl0w5k2yiWktMgswyWK~eO3ydZA0VVvY~ZBsS5keNlEE6-XEPFtY2rhWbecvnA909GKAC9HNK17MKH9Z9-owyKKiqLoVvKO01asc9GJ023WDF3diRwrgfnnpKaiFU4s4RFxF5iaL-6II4oSH~lRrI0WxrMb-PhCqlH3jomINbDdtP~rpLR4wHemBuZDy-b93cU5CsdXPpk2zrOXrQ02E15vKBZ43inteMeVfG9KmULoX4vDvyzTpZoalCeib5WKTl3zv-FFroXNgFjCJyCEbLo34TmaWdnMWjW0HqAaDuez-BjVBrJvW~ZinMeh9-wmY2slYJxPlz6w__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/58/image/image.jpg?Expires=1760506700&Signature=NgLriv5WkoQ4OcQ6bi37ZLt3mZf8mxHq2YkxtjWtDe4h8LVrqJlbasVl-5iLK9xTZFDhTfpQLDGzVNIPqPkWRjbrfFOlp-O8GKSzalF~86h8nCdUbfwtoHUcmx4oiKfZLhdG64kGy7dxbRre6bpksXecng5UH0B1U2JPKcdMO-uHa9e5nR~XdETovNjkXvAULj~P6piSGmL8EiUuX0zurQS-cHOWINBCa7iOY-hP9RN~C9-J2kesqA1B-0~hVH5W3bTcCtjBlEsLQ5ybMJu-ZS7AUl7OvZaRC0n63LOKV0EGBt8Q9CxN-FcwHWY06cp2h258tdQLXt-egVGkAOJVfQ__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_58_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 58,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/58/image/image.jpg?Expires=1760506700&Signature=NgLriv5WkoQ4OcQ6bi37ZLt3mZf8mxHq2YkxtjWtDe4h8LVrqJlbasVl-5iLK9xTZFDhTfpQLDGzVNIPqPkWRjbrfFOlp-O8GKSzalF~86h8nCdUbfwtoHUcmx4oiKfZLhdG64kGy7dxbRre6bpksXecng5UH0B1U2JPKcdMO-uHa9e5nR~XdETovNjkXvAULj~P6piSGmL8EiUuX0zurQS-cHOWINBCa7iOY-hP9RN~C9-J2kesqA1B-0~hVH5W3bTcCtjBlEsLQ5ybMJu-ZS7AUl7OvZaRC0n63LOKV0EGBt8Q9CxN-FcwHWY06cp2h258tdQLXt-egVGkAOJVfQ__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/59/image/image.jpg?Expires=1760506700&Signature=v8vPRzZ5Sch~0wTaGrAxmHS5G074COVG60r3X~lZXPvgvqqwy5Er0jilOQXAUBex55b9BiueDjFuK6YpD5ciAG5F2sqS5efDOj0HnUkV8j5tzM-p5Zlf7TeQIe-18z9KxNlvn2I6A4ze-86kDB7GZHqUJZN2ZEEV3oqzChrBhYPRalf3U1FyypFVyzrZFmnuM1Rcrgt6Ue4d3mwccy8gyXRjkyfMT7ErGIQo5e~qhXYnRqtZdCX2jW304RnaJWS02qBAGtEqukFFXeyUDyc693v8f~QqBDcgV~TGV6U5oilrJRUUcW5T5VK1JVxKFOhya72qd915wWvo0G1SpzbrEw__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_59_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 59,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/59/image/image.jpg?Expires=1760506700&Signature=v8vPRzZ5Sch~0wTaGrAxmHS5G074COVG60r3X~lZXPvgvqqwy5Er0jilOQXAUBex55b9BiueDjFuK6YpD5ciAG5F2sqS5efDOj0HnUkV8j5tzM-p5Zlf7TeQIe-18z9KxNlvn2I6A4ze-86kDB7GZHqUJZN2ZEEV3oqzChrBhYPRalf3U1FyypFVyzrZFmnuM1Rcrgt6Ue4d3mwccy8gyXRjkyfMT7ErGIQo5e~qhXYnRqtZdCX2jW304RnaJWS02qBAGtEqukFFXeyUDyc693v8f~QqBDcgV~TGV6U5oilrJRUUcW5T5VK1JVxKFOhya72qd915wWvo0G1SpzbrEw__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/60/image/image.jpg?Expires=1760506700&Signature=nHQxgZNRpB2-yKNqxPYLhDrG999NKDaA2tZJuEe84hhplwjL4pAeNTVNDOmGQCqX~v4rvmTJ9KOWJHQgXraJYs3AvWqP5ScyvQzFFItG~vHrDYbGeB04uHbD2~q8thggoXPaHXdR~BRvw2WvAsGgMuZ88ncG4thZA2h50sH3b3meaRulappaR17QyA-o5ynL3FO0pRJc0mGPsWA~2QsDursW3-lKtzovjEqQVJEl8R5b3RvHmERAldmuMA3P27iNmAOkP3eEPIXC2gf~peOhtLAyZe~MNaEiOu32vVhO44FUrPGURcl2m5~lNYPJXajtV-Xu4SjMH5xWYQm23x9LSg__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_60_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 60,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/60/image/image.jpg?Expires=1760506700&Signature=nHQxgZNRpB2-yKNqxPYLhDrG999NKDaA2tZJuEe84hhplwjL4pAeNTVNDOmGQCqX~v4rvmTJ9KOWJHQgXraJYs3AvWqP5ScyvQzFFItG~vHrDYbGeB04uHbD2~q8thggoXPaHXdR~BRvw2WvAsGgMuZ88ncG4thZA2h50sH3b3meaRulappaR17QyA-o5ynL3FO0pRJc0mGPsWA~2QsDursW3-lKtzovjEqQVJEl8R5b3RvHmERAldmuMA3P27iNmAOkP3eEPIXC2gf~peOhtLAyZe~MNaEiOu32vVhO44FUrPGURcl2m5~lNYPJXajtV-Xu4SjMH5xWYQm23x9LSg__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/61/image/image.jpg?Expires=1760506700&Signature=jONJ-ZErPHWdCezegx66M-x53IUcywMjv5L1M9R5mxZGswRmqxXiuZhYHn7GMY4wu7-YCOSPlOSQ9kHZCyzfoBALao4BuVtdmN~kchUsWhAFFdh0XpL4pGL-z9ueJHAoWe4M7lGYbl6zfRN5S3QY0nqA8lFmIEHzujxSJFa8HtOn~A3CW65rxr1sFzdj4sOgntLVJPJa~fHYTE4PzcLrAwurloHEfLGrMp6Ksah2tesxtjpnQvFtIhjg-vZK6mzfYR0E7Kttv9fMX504LgmWEDHne6pYCvIc4WSv~kuaByNLt3QFkw7alkCwjj-dYaDSoecYFJg1z9wAZQllPhfwrg__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_61_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 61,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/61/image/image.jpg?Expires=1760506700&Signature=jONJ-ZErPHWdCezegx66M-x53IUcywMjv5L1M9R5mxZGswRmqxXiuZhYHn7GMY4wu7-YCOSPlOSQ9kHZCyzfoBALao4BuVtdmN~kchUsWhAFFdh0XpL4pGL-z9ueJHAoWe4M7lGYbl6zfRN5S3QY0nqA8lFmIEHzujxSJFa8HtOn~A3CW65rxr1sFzdj4sOgntLVJPJa~fHYTE4PzcLrAwurloHEfLGrMp6Ksah2tesxtjpnQvFtIhjg-vZK6mzfYR0E7Kttv9fMX504LgmWEDHne6pYCvIc4WSv~kuaByNLt3QFkw7alkCwjj-dYaDSoecYFJg1z9wAZQllPhfwrg__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/62/image/image.jpg?Expires=1760506700&Signature=X4uNYdqjUzxYJT~xES~9ZBUueGRdIOdo~GjBYLaurWPg~6~fMhSvZ0eRXmYVkIIJ0P3r9VUmkgbIPFslEDeSooBktKd3w-V4dk2Ql19nhNsh0c2-rXVWmPZ6upESAwzPjy1ejmSyp7xxRt9eF9y47SU2YgirbdRAHnOTFp6d0Q4hyP-OZipG1ZujrZJrshq1QTW-llqE6dwJUCtS7278KpmbQ2DXfmhhYCothLRcZ2AFbrv3I8lyHpOHgl887rvaIM0ociYryo1u6Hr1pKIjoDibZm1bOhE17YIXNREnrZ9I6YIhw~i6VOq2OhGM5bb04G8Em8i9ZaV2VRDjX4CKQA__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_62_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 62,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/62/image/image.jpg?Expires=1760506700&Signature=X4uNYdqjUzxYJT~xES~9ZBUueGRdIOdo~GjBYLaurWPg~6~fMhSvZ0eRXmYVkIIJ0P3r9VUmkgbIPFslEDeSooBktKd3w-V4dk2Ql19nhNsh0c2-rXVWmPZ6upESAwzPjy1ejmSyp7xxRt9eF9y47SU2YgirbdRAHnOTFp6d0Q4hyP-OZipG1ZujrZJrshq1QTW-llqE6dwJUCtS7278KpmbQ2DXfmhhYCothLRcZ2AFbrv3I8lyHpOHgl887rvaIM0ociYryo1u6Hr1pKIjoDibZm1bOhE17YIXNREnrZ9I6YIhw~i6VOq2OhGM5bb04G8Em8i9ZaV2VRDjX4CKQA__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/63/image/image.jpg?Expires=1760506700&Signature=V~zPCyr8uWTnyi12BgzOJN9WEhb92pxld-R5AG9hRrRQlURt3fo1Jl0rX9agpAwXidboAlMhZNYqmkcJa1dp9s3ELhIaClB2QGp8ZbyYzjgbwf1DEvsypnLvveFLhGz0wOzvHdtlFZUlDJtRJLMQW3HL47yEaHioKxiFpPMRZufXdvPTMpgOW-FQ~zIjOHAPkESkNkghV7YbAByfrNIJcj1Cbj7CUSm1W6PuctuH8if9QJGHeXVTEZC1x2DAYccpxR4c6U6hUEsTuHTeBj0yF2pJRloHCrDb3nmNZxHbNDPp7W3-siYYVCsKVqPdVX-fLI26UvO01LpgDGvfUlVfDw__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_63_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 63,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/63/image/image.jpg?Expires=1760506700&Signature=V~zPCyr8uWTnyi12BgzOJN9WEhb92pxld-R5AG9hRrRQlURt3fo1Jl0rX9agpAwXidboAlMhZNYqmkcJa1dp9s3ELhIaClB2QGp8ZbyYzjgbwf1DEvsypnLvveFLhGz0wOzvHdtlFZUlDJtRJLMQW3HL47yEaHioKxiFpPMRZufXdvPTMpgOW-FQ~zIjOHAPkESkNkghV7YbAByfrNIJcj1Cbj7CUSm1W6PuctuH8if9QJGHeXVTEZC1x2DAYccpxR4c6U6hUEsTuHTeBj0yF2pJRloHCrDb3nmNZxHbNDPp7W3-siYYVCsKVqPdVX-fLI26UvO01LpgDGvfUlVfDw__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/64/image/image.jpg?Expires=1760506700&Signature=f7-Zcdt8R2DukqasDRFMVz~eW6I7q~M8pHKEneRMOt1CHNWKPqtVgwhVM8qtGFOR4kptH0PTjjdHL02ZCb9gKLVa7GnjnekZyjYQYafa6tYO6nmaio2i0BZ1i2bzZDeadv6dMi~5hH0~AROhJRrv832V4F9kC5nQsct~SU4Hw0mCBnV2TUZgXLPFZCgkNX--FBXJcmff81tnc5bygB2nZhlqryaibJJB-6AIWCUaJ-TzKKTdc9TxZ1sTU1sajzmAF8-MWU6kHHHnYSlfutPhDXiuftRhIZujyMySF8bgg8yyg6Kr1Pb9kthu6MTYKURWdL39YV10eJC3gK2oswzE9Q__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_64_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 64,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/64/image/image.jpg?Expires=1760506700&Signature=f7-Zcdt8R2DukqasDRFMVz~eW6I7q~M8pHKEneRMOt1CHNWKPqtVgwhVM8qtGFOR4kptH0PTjjdHL02ZCb9gKLVa7GnjnekZyjYQYafa6tYO6nmaio2i0BZ1i2bzZDeadv6dMi~5hH0~AROhJRrv832V4F9kC5nQsct~SU4Hw0mCBnV2TUZgXLPFZCgkNX--FBXJcmff81tnc5bygB2nZhlqryaibJJB-6AIWCUaJ-TzKKTdc9TxZ1sTU1sajzmAF8-MWU6kHHHnYSlfutPhDXiuftRhIZujyMySF8bgg8yyg6Kr1Pb9kthu6MTYKURWdL39YV10eJC3gK2oswzE9Q__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/65/image/image.jpg?Expires=1760506700&Signature=aj-PGn8K14Aik5vJLViURnae77kvUk542OGuInqEnYV~yof-~ws1pTGu6b8mBq9w9sCaDlaQjq6rtk6QX40wLm1DjkzJ4BU2awdb02bs6mr2sms-3d9p3BMxBeYvWuPkUdaygkJWZPYqiNfp6nx1gINO8GWtLdnUXqvb93uKzCYQd3ubYEy~fAG8j20oR0qU7SKSKWXUV4CpHahjI0dSgajc2bjfjG~Rsnssew64pAlnEWFeso0gDgEjhGrUy-9Qqs0eN0PcXE86W2tnn-~BnaejsxbvKAFd9OYBjyhRHC1H2QQX24M-ABFUhu74V16WguMRdBieDoMetKnY8T40uQ__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_65_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 65,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/65/image/image.jpg?Expires=1760506700&Signature=aj-PGn8K14Aik5vJLViURnae77kvUk542OGuInqEnYV~yof-~ws1pTGu6b8mBq9w9sCaDlaQjq6rtk6QX40wLm1DjkzJ4BU2awdb02bs6mr2sms-3d9p3BMxBeYvWuPkUdaygkJWZPYqiNfp6nx1gINO8GWtLdnUXqvb93uKzCYQd3ubYEy~fAG8j20oR0qU7SKSKWXUV4CpHahjI0dSgajc2bjfjG~Rsnssew64pAlnEWFeso0gDgEjhGrUy-9Qqs0eN0PcXE86W2tnn-~BnaejsxbvKAFd9OYBjyhRHC1H2QQX24M-ABFUhu74V16WguMRdBieDoMetKnY8T40uQ__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/66/image/image.jpg?Expires=1760506700&Signature=iQr-LX1chhv0NK4fSLWsXNQ3reKbF2FPjwBtCmWM8ww~dasBF-qd7XgM70-~KAfG0M3Po1qa9jl82kfPFV7SVPZ5ZaszVor5H5GDFREPQhE0STzHKzQ8HoejXXOiwBs0ym7xuHDrYR9W9MrNseRmd0sUqHtve9emMoxMH0WyGE9M5on~x642vz~~GWtQs0kKWycqMYRFah8S0PTDfGNtn5icQdoQEVPs8r23OHbCYo545o1I~57mYgsqMYTv0rL82mn08bKa2xVBGAq6BR7GaAxkaktU6rz7hxW8fdpfS1Aeg6n9Pd636oEkaKkDXuhzr2xc2ABbitH5~KzaTiKKgA__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_66_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 66,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/66/image/image.jpg?Expires=1760506700&Signature=iQr-LX1chhv0NK4fSLWsXNQ3reKbF2FPjwBtCmWM8ww~dasBF-qd7XgM70-~KAfG0M3Po1qa9jl82kfPFV7SVPZ5ZaszVor5H5GDFREPQhE0STzHKzQ8HoejXXOiwBs0ym7xuHDrYR9W9MrNseRmd0sUqHtve9emMoxMH0WyGE9M5on~x642vz~~GWtQs0kKWycqMYRFah8S0PTDfGNtn5icQdoQEVPs8r23OHbCYo545o1I~57mYgsqMYTv0rL82mn08bKa2xVBGAq6BR7GaAxkaktU6rz7hxW8fdpfS1Aeg6n9Pd636oEkaKkDXuhzr2xc2ABbitH5~KzaTiKKgA__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/67/image/image.jpg?Expires=1760506700&Signature=JkCH8luQfPIQyFMPl6tLZnqCq-IPNALg7mGv7jb9SrvULFM2UPJXFgG8m6WYpbNpChfVYM071qs6z6lxoh~mLWS0zP2J-1o8S3mSAEcFM7bE-Wa-~SgjUhvzokLwY~OMCqSL7oD4zEox2XsN8bPd5SXXybo8Fc8RVTVeMzMnJ0DQM6n3sBb-o91JUuUDZ8naat6XRM5DtJAmv-o4-3gwV7xRolu6hataJlG47X-~7bciiIvb-GCvnsy8piDAxJ-iQx2YobeEn8blVasdyKr4cm-JCQJbuKYzi9sBEL6rNOlIyGNjRtnm7rVesRMrJNL8b5xFC4~ouYuVWfJ22XhDEw__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_67_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 67,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/67/image/image.jpg?Expires=1760506700&Signature=JkCH8luQfPIQyFMPl6tLZnqCq-IPNALg7mGv7jb9SrvULFM2UPJXFgG8m6WYpbNpChfVYM071qs6z6lxoh~mLWS0zP2J-1o8S3mSAEcFM7bE-Wa-~SgjUhvzokLwY~OMCqSL7oD4zEox2XsN8bPd5SXXybo8Fc8RVTVeMzMnJ0DQM6n3sBb-o91JUuUDZ8naat6XRM5DtJAmv-o4-3gwV7xRolu6hataJlG47X-~7bciiIvb-GCvnsy8piDAxJ-iQx2YobeEn8blVasdyKr4cm-JCQJbuKYzi9sBEL6rNOlIyGNjRtnm7rVesRMrJNL8b5xFC4~ouYuVWfJ22XhDEw__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/68/image/image.jpg?Expires=1760506700&Signature=jFSFDBkwGl1gbAp7tyAmGCUjQ59jpqQzjzv4CVqsefmsC7FRtVkMwx~VBQacIabWrCBLIHll99Vo2CC-d~KSq1LU7WaXZ-ALWty09C4LWI1gkdDXio5yBJrcwU6rGXiCS4Nw9zDM9XIDS7qdIaYfJ2G-ahAW9sILZeUEKKcNvH63EpLnbhQ6jUR5rik6LC7lY4jo9I6XCQ7OJUfnJOKMuCbxxQRjh-77R9mqc753c4VYqjkF-7lKsvyunuSFd57rQwcZ6MlPOSPko04j8OTFYvCVfQEeza24-k5SvgZNllpxRydW3RCuvwmXrdn5ItMxp0El9WOJe7DDK1g5gT2m8A__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_68_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 68,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/68/image/image.jpg?Expires=1760506700&Signature=jFSFDBkwGl1gbAp7tyAmGCUjQ59jpqQzjzv4CVqsefmsC7FRtVkMwx~VBQacIabWrCBLIHll99Vo2CC-d~KSq1LU7WaXZ-ALWty09C4LWI1gkdDXio5yBJrcwU6rGXiCS4Nw9zDM9XIDS7qdIaYfJ2G-ahAW9sILZeUEKKcNvH63EpLnbhQ6jUR5rik6LC7lY4jo9I6XCQ7OJUfnJOKMuCbxxQRjh-77R9mqc753c4VYqjkF-7lKsvyunuSFd57rQwcZ6MlPOSPko04j8OTFYvCVfQEeza24-k5SvgZNllpxRydW3RCuvwmXrdn5ItMxp0El9WOJe7DDK1g5gT2m8A__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/69/image/image.jpg?Expires=1760506700&Signature=zszb2YjfWc3IjJMKwhP3rDsNPlS3niCP-8uQa9fZrarAJlP7WXl63Xh~5f15ckCk6YImnV8tJTbVYAn0Q16NX2cJ-NsdIq8Upwv5kHFTfUtxCvN4ZssLeXnL~kyydHzddoWn8KNBp5QiQTuLqf5ypJ9HsIkIOZFVlUg4oogvHjZLK1cRxV75CkoyzVo9E8ELuOQydKIoHOMOguenG-NQHg2sJrzGsET54Zt~xQ6oNo8RscD1S2khUk~odwDhK61zK5UwtevakPFDvJHrGF~~F6D43Jg~z2K2UNN5T5DbYdu0nzo2gui627TslFDuEEikl6XVnKnIs~awUWmTGRZOIQ__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_69_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 69,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/69/image/image.jpg?Expires=1760506700&Signature=zszb2YjfWc3IjJMKwhP3rDsNPlS3niCP-8uQa9fZrarAJlP7WXl63Xh~5f15ckCk6YImnV8tJTbVYAn0Q16NX2cJ-NsdIq8Upwv5kHFTfUtxCvN4ZssLeXnL~kyydHzddoWn8KNBp5QiQTuLqf5ypJ9HsIkIOZFVlUg4oogvHjZLK1cRxV75CkoyzVo9E8ELuOQydKIoHOMOguenG-NQHg2sJrzGsET54Zt~xQ6oNo8RscD1S2khUk~odwDhK61zK5UwtevakPFDvJHrGF~~F6D43Jg~z2K2UNN5T5DbYdu0nzo2gui627TslFDuEEikl6XVnKnIs~awUWmTGRZOIQ__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/70/image/image.jpg?Expires=1760506700&Signature=ldzpKYsb5NwS6UgIw5TL1tX0Uo52FFwP2~omzd2tM2lJjCDKtd78p4YoUGXnG3qcKmrq36c-Oz1F~Qrb62WN4H4bB655uje-ef3925Wiq~FwCEfLgLduhn31MoJ5Nv3ouo1E2dXP6KviPGGbhfi8Ee0jIj1TYfDmFlvh1qYbE~uEBDSvToMXraIVC56zFd6b1cVeTKuoqge5oibZvhDOz44M~971ITyX1vw4MLbGH5pZ3RkLuIpIngBLduWKGYIH5aDvE8LndFaCsqaaTlVWcRSlIm7waOWdYbJ71KAKtYgzuFYvv1Mek8~KRl6r6sApRfcKFhx98BT785O035bbCg__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_70_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 70,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/70/image/image.jpg?Expires=1760506700&Signature=ldzpKYsb5NwS6UgIw5TL1tX0Uo52FFwP2~omzd2tM2lJjCDKtd78p4YoUGXnG3qcKmrq36c-Oz1F~Qrb62WN4H4bB655uje-ef3925Wiq~FwCEfLgLduhn31MoJ5Nv3ouo1E2dXP6KviPGGbhfi8Ee0jIj1TYfDmFlvh1qYbE~uEBDSvToMXraIVC56zFd6b1cVeTKuoqge5oibZvhDOz44M~971ITyX1vw4MLbGH5pZ3RkLuIpIngBLduWKGYIH5aDvE8LndFaCsqaaTlVWcRSlIm7waOWdYbJ71KAKtYgzuFYvv1Mek8~KRl6r6sApRfcKFhx98BT785O035bbCg__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/71/image/image.jpg?Expires=1760506700&Signature=TPNWXcNoQyHDvryRzW4aM-57xGYILcaYt0rlxtfECCwAzRdDH7evIsOy7GlAGk4vbtKaCTaP~dOCD07t42Iyr-gInYBWUtIhfCE1e1v2G2aYisZIZFTqzpdLB8HG~LsZZmKJg4XE2nl8Mvw-1uHI5JXvDySMCM4nvS94ZuX-7sCIMNNa3yA8i8AphLXZaEq0MkUGicPOV4lc4YpuWY7Yi06R1EFGpJ2Oe7hbKKuFN4ye4CrBMsqLiq0-s6WvyhQmSySuNk6aQ3HQGNsAib~bD~1R3lIcX52Zm2gaUBM4HML0slbq5m3zpyTURMQGZllpycqqOc7OMmPWv02Ac08dsA__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_71_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 71,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/71/image/image.jpg?Expires=1760506700&Signature=TPNWXcNoQyHDvryRzW4aM-57xGYILcaYt0rlxtfECCwAzRdDH7evIsOy7GlAGk4vbtKaCTaP~dOCD07t42Iyr-gInYBWUtIhfCE1e1v2G2aYisZIZFTqzpdLB8HG~LsZZmKJg4XE2nl8Mvw-1uHI5JXvDySMCM4nvS94ZuX-7sCIMNNa3yA8i8AphLXZaEq0MkUGicPOV4lc4YpuWY7Yi06R1EFGpJ2Oe7hbKKuFN4ye4CrBMsqLiq0-s6WvyhQmSySuNk6aQ3HQGNsAib~bD~1R3lIcX52Zm2gaUBM4HML0slbq5m3zpyTURMQGZllpycqqOc7OMmPWv02Ac08dsA__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/72/image/image.jpg?Expires=1760506700&Signature=FAPtq6~UI-hEAFCRyo8OmJM5B0kh00pjqFV4vntmcgxoUjVveTa1JtHpWqabr9jGTlK1YgEToDX~XC673FI-1Cu71FaxtU3ZntP251ltYYx9AaVzWxTJPNx3ztcMdogkIffttMgvWUEMfKBVAAU5MCyCcpOJ4xtL1mingavCIR8sCZTwd97nIxmTJ1rw-hQzeFG3NWuGeooPw8MM2-RL-aXTmgWlVohyGbqE0TjW5xNbCJjzbFQYr1kk42LIoLSVCmAiFPNGg~po67Dk5p1wrWK4V29a1UgmGoWEqD4f7i3WrI0IE8~N7BNV3irxmp8ahEsCdFdvfcaAVSKyUtosWQ__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_72_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 72,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/72/image/image.jpg?Expires=1760506700&Signature=FAPtq6~UI-hEAFCRyo8OmJM5B0kh00pjqFV4vntmcgxoUjVveTa1JtHpWqabr9jGTlK1YgEToDX~XC673FI-1Cu71FaxtU3ZntP251ltYYx9AaVzWxTJPNx3ztcMdogkIffttMgvWUEMfKBVAAU5MCyCcpOJ4xtL1mingavCIR8sCZTwd97nIxmTJ1rw-hQzeFG3NWuGeooPw8MM2-RL-aXTmgWlVohyGbqE0TjW5xNbCJjzbFQYr1kk42LIoLSVCmAiFPNGg~po67Dk5p1wrWK4V29a1UgmGoWEqD4f7i3WrI0IE8~N7BNV3irxmp8ahEsCdFdvfcaAVSKyUtosWQ__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/73/image/image.jpg?Expires=1760506700&Signature=jcJzZSHQZzW~AVrDOcxcbhACm8RSECq1PeLQt0ao2PNEQ92kte1LNklUhBfwqoXoIFiiQkvR4FXlSHJ4TSzjKl~GiRcX5AZaPSkyZzOevKLdWXbyB27R4~rS24kHsHbm3twQrEh3N8O08ogCXi09W-UiLQbgY7rQ3gayV2mawfMi9SeCoqktelrRUFBLLuW5yGsZYp7EkGsx3e60iG2xojMp6hJG81T~Hm2V5qB8JN0I5IfDkRHcvAn5E-GhwW2SIncbtRGVmR0RLv2-NrGSn~S-CtP~yhCE6goFjhUOdj3FkON-ryJaAhrA9rS7wPVPAM5tpgtQIAPPSGbvCXUz6g__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_73_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 73,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/73/image/image.jpg?Expires=1760506700&Signature=jcJzZSHQZzW~AVrDOcxcbhACm8RSECq1PeLQt0ao2PNEQ92kte1LNklUhBfwqoXoIFiiQkvR4FXlSHJ4TSzjKl~GiRcX5AZaPSkyZzOevKLdWXbyB27R4~rS24kHsHbm3twQrEh3N8O08ogCXi09W-UiLQbgY7rQ3gayV2mawfMi9SeCoqktelrRUFBLLuW5yGsZYp7EkGsx3e60iG2xojMp6hJG81T~Hm2V5qB8JN0I5IfDkRHcvAn5E-GhwW2SIncbtRGVmR0RLv2-NrGSn~S-CtP~yhCE6goFjhUOdj3FkON-ryJaAhrA9rS7wPVPAM5tpgtQIAPPSGbvCXUz6g__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/74/image/image.jpg?Expires=1760506700&Signature=g9BLnq0iSH7PGqzSLUIgL1aDSbIwCc18hYwSm6feooOdOEcIxNGgsccv2i9nh-iFUadMlUF2Iq34FAnuT~ZvNecUIBrTLwp2oeGoMhrFoQnNyKRKRbYb12tou10TKHDs6yngo2pKH4BpG9uJRrCzOAICmLh9EZlu2nBmMGcqsX4lmwXPdQzR2rMgjETl7ZE6YWgMAmO6ViUufRtDRq0PPQqByx9yGjIq1dfvHPhn-4j0F0GRlioUmf8-drqCJ3WtCi3ypmpitdtQut1jk6dN5V0LV6L11fmtNun-JS3Azxs85Vnjft0ZyCUJmBxEXPhrLgriDhmad3AK2S9YafEPEA__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_74_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 74,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/74/image/image.jpg?Expires=1760506700&Signature=g9BLnq0iSH7PGqzSLUIgL1aDSbIwCc18hYwSm6feooOdOEcIxNGgsccv2i9nh-iFUadMlUF2Iq34FAnuT~ZvNecUIBrTLwp2oeGoMhrFoQnNyKRKRbYb12tou10TKHDs6yngo2pKH4BpG9uJRrCzOAICmLh9EZlu2nBmMGcqsX4lmwXPdQzR2rMgjETl7ZE6YWgMAmO6ViUufRtDRq0PPQqByx9yGjIq1dfvHPhn-4j0F0GRlioUmf8-drqCJ3WtCi3ypmpitdtQut1jk6dN5V0LV6L11fmtNun-JS3Azxs85Vnjft0ZyCUJmBxEXPhrLgriDhmad3AK2S9YafEPEA__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/75/image/image.jpg?Expires=1760506700&Signature=iseIQnTBoLhoFU5rEGrpSOh0apsdm6iE2TAeKYQWk-nukFG1FeSTnv0Gd1Kyk18xjxMYLHDPyfwIweVAiCZKyd1yDli37lBEZe7fJsuOEFiGnmfocdr4kb1krw0xH8rvwbNd1yz9izUMcg6Fz-2f-J3M7aCoWU6zpzXrzkYw1ty9KT8SolU-xcanb-VldNG0oLn1XARzi39biWwoRGoec8zPrACws9Iqt2p4OHUg~nFSuEHkjBaqBeOclTEEV27rS5uYHATkqPh4R97Jxh2lWsVKahhCQhRkFlV~bE7z~jgB51OSblSVI7c28J2QPtq6qeUEqm0XxSFRotfhiqKRTQ__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_75_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 75,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/75/image/image.jpg?Expires=1760506700&Signature=iseIQnTBoLhoFU5rEGrpSOh0apsdm6iE2TAeKYQWk-nukFG1FeSTnv0Gd1Kyk18xjxMYLHDPyfwIweVAiCZKyd1yDli37lBEZe7fJsuOEFiGnmfocdr4kb1krw0xH8rvwbNd1yz9izUMcg6Fz-2f-J3M7aCoWU6zpzXrzkYw1ty9KT8SolU-xcanb-VldNG0oLn1XARzi39biWwoRGoec8zPrACws9Iqt2p4OHUg~nFSuEHkjBaqBeOclTEEV27rS5uYHATkqPh4R97Jxh2lWsVKahhCQhRkFlV~bE7z~jgB51OSblSVI7c28J2QPtq6qeUEqm0XxSFRotfhiqKRTQ__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/76/image/image.jpg?Expires=1760506700&Signature=Io1jRnrLm2TayPEBhPHDlyT7UvoOOxOD9Wx2auKLxo6Y-pEdZdyTInHddPeA60qETpmqQoA58v58BW9abteOUE1znwG5D7i6C2hzA-6TtWtqLxxGepsnNMtSQ5xE10CiuzRjzQnWH4duUvRVnB4B9PiCtgE0L~7dWGKzcFpmstIYuV19tyHq-h-5fNE2AUhLl9hq2DJWoSLpMPQPkW7vRmzkRwuQeh7kmpAnB89v3QZYUIXBp6sFstopIZs1yYNtfHw4XV9KrKDlksLYmg~suDi9lyPNip7khuyY~CVlqHwAEZnCT0AdSJ0POg~~Gtg50onV2cL~edr0m81znjZhtw__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_76_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 76,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/76/image/image.jpg?Expires=1760506700&Signature=Io1jRnrLm2TayPEBhPHDlyT7UvoOOxOD9Wx2auKLxo6Y-pEdZdyTInHddPeA60qETpmqQoA58v58BW9abteOUE1znwG5D7i6C2hzA-6TtWtqLxxGepsnNMtSQ5xE10CiuzRjzQnWH4duUvRVnB4B9PiCtgE0L~7dWGKzcFpmstIYuV19tyHq-h-5fNE2AUhLl9hq2DJWoSLpMPQPkW7vRmzkRwuQeh7kmpAnB89v3QZYUIXBp6sFstopIZs1yYNtfHw4XV9KrKDlksLYmg~suDi9lyPNip7khuyY~CVlqHwAEZnCT0AdSJ0POg~~Gtg50onV2cL~edr0m81znjZhtw__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/77/image/image.jpg?Expires=1760506700&Signature=bna9xtDGLBBo4Gy1VZRTwtDBX6gPsZnSuQ2CFIhPsMbqR4blZ2wFydmvFTx~vq~1MKbQB09y2oPObtuaLFaHqCt8XctEquFFsrPfQpfWG9xhUAtKRLKJYGbsy0YoAkcrEEdSatbt-1k5zVGbpfMHGzyu0JhHIv4VoBUgOZTM7gOpeTPP3qXR9d1X5vnpji66hpsGuLllb0xiRVd1AMFjvlrG4zKpQBxPWW20ZshMDw8KEL8xKR1KaGqVLsWvG8Rol~G9GwX5JxWmJ9-Ov6tSj5T53INJEDY3sgRjAV8hYHYynqMY~YX4ZJhMJ4LeOa3ccU5e4Zf5zsLJAFZpbtRRXg__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_77_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 77,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/77/image/image.jpg?Expires=1760506700&Signature=bna9xtDGLBBo4Gy1VZRTwtDBX6gPsZnSuQ2CFIhPsMbqR4blZ2wFydmvFTx~vq~1MKbQB09y2oPObtuaLFaHqCt8XctEquFFsrPfQpfWG9xhUAtKRLKJYGbsy0YoAkcrEEdSatbt-1k5zVGbpfMHGzyu0JhHIv4VoBUgOZTM7gOpeTPP3qXR9d1X5vnpji66hpsGuLllb0xiRVd1AMFjvlrG4zKpQBxPWW20ZshMDw8KEL8xKR1KaGqVLsWvG8Rol~G9GwX5JxWmJ9-Ov6tSj5T53INJEDY3sgRjAV8hYHYynqMY~YX4ZJhMJ4LeOa3ccU5e4Zf5zsLJAFZpbtRRXg__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/78/image/image.jpg?Expires=1760506700&Signature=IGT2xOCLkYqn4-8vk16spleDt1cVyquKd3ataXcBEV1CT-JxzMTkMYDVTrUgafViF4DKKOWUlAABEBaukoPlmTcONPS4tbVYkE1FGbyPo6-0RpsDg09WGhIFbdopyzzxpmPsbospv3zULsEBngE-uFRn0IdiuBE0bbNTCvAiWcNcRsVzPZNvpg9PJnHuQcGMt1~23uZfmickJaa8Q3QJsdVRcv8EqlggGfHr-~sc9ou8nxlnJ-Sd744DJ4bmJHSRodnM3j4nKLpn8VvAsueUob-FSiRL0Xpd07a-zcOhKoFTkDq4PHqZ4g5-ALsjZAqSKephOiKGd0NtkLGf9~bIhQ__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_78_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 78,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/78/image/image.jpg?Expires=1760506700&Signature=IGT2xOCLkYqn4-8vk16spleDt1cVyquKd3ataXcBEV1CT-JxzMTkMYDVTrUgafViF4DKKOWUlAABEBaukoPlmTcONPS4tbVYkE1FGbyPo6-0RpsDg09WGhIFbdopyzzxpmPsbospv3zULsEBngE-uFRn0IdiuBE0bbNTCvAiWcNcRsVzPZNvpg9PJnHuQcGMt1~23uZfmickJaa8Q3QJsdVRcv8EqlggGfHr-~sc9ou8nxlnJ-Sd744DJ4bmJHSRodnM3j4nKLpn8VvAsueUob-FSiRL0Xpd07a-zcOhKoFTkDq4PHqZ4g5-ALsjZAqSKephOiKGd0NtkLGf9~bIhQ__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/79/image/image.jpg?Expires=1760506700&Signature=DAPlemY5b8PnJTN2xAh34LAXbS96Ge6gM7uLrefxB1n1cDv50qyEy0~QiIte-y0kbrcpleRvrV9n-tlxT6MpHfUOqtoUvuTt-7l5uktETsYHVlGjicf50OgjzfCobpkDC3SKQtqx6GtPrZAkxYk9uaTAts~G78Kg9BjMx5H2a~Cd47tBlyb9WPml2s3wSEdEOQpDSgY~f5aW6o6BklgSUfWd3HqWXA~-sCfXY8u0JVaryKVythFX2nArDIXEn3vIxdxoJ7TgIksUPbjRux-zQh9bTkIg2XURCv32Fv-2bFZqO9Y2CoTIuTQprIPKvwTY4Ly1q62XfGWlI4syF6OeGg__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_79_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 79,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/79/image/image.jpg?Expires=1760506700&Signature=DAPlemY5b8PnJTN2xAh34LAXbS96Ge6gM7uLrefxB1n1cDv50qyEy0~QiIte-y0kbrcpleRvrV9n-tlxT6MpHfUOqtoUvuTt-7l5uktETsYHVlGjicf50OgjzfCobpkDC3SKQtqx6GtPrZAkxYk9uaTAts~G78Kg9BjMx5H2a~Cd47tBlyb9WPml2s3wSEdEOQpDSgY~f5aW6o6BklgSUfWd3HqWXA~-sCfXY8u0JVaryKVythFX2nArDIXEn3vIxdxoJ7TgIksUPbjRux-zQh9bTkIg2XURCv32Fv-2bFZqO9Y2CoTIuTQprIPKvwTY4Ly1q62XfGWlI4syF6OeGg__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/80/image/image.jpg?Expires=1760506700&Signature=OwAxoSYcK~njwNGFyvOB1zchzDW7RQtLZ95ELwoRCNSxwE0-XOQX6joBBPJIrbH4oCeC5yUX7phl2xwg6cJaqOvKyTuB6OAdCLc3SG1Y28~wGPIPvQtCouLJVwJNjBwrQNHS-5ZZ5XAD0B8XwXVdyrG2Bbz7U-~sAw~KkulMK0mIKMq3xEH~tsWxL0nfgHlhtpz6RXZySWM4alTaqVLHzsH9T3g2yg~zF9IAXuysmZocK5FYuRq1jP7JMsrVMKFE2v8vljXzYvNZ9fgLV1sjq5FyQjl9a-cijUho8vymQd-h1XA5eBp5OCPB3nwRuzI9WfjMhK4-B8HOXflvSclxwg__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_80_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 80,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/80/image/image.jpg?Expires=1760506700&Signature=OwAxoSYcK~njwNGFyvOB1zchzDW7RQtLZ95ELwoRCNSxwE0-XOQX6joBBPJIrbH4oCeC5yUX7phl2xwg6cJaqOvKyTuB6OAdCLc3SG1Y28~wGPIPvQtCouLJVwJNjBwrQNHS-5ZZ5XAD0B8XwXVdyrG2Bbz7U-~sAw~KkulMK0mIKMq3xEH~tsWxL0nfgHlhtpz6RXZySWM4alTaqVLHzsH9T3g2yg~zF9IAXuysmZocK5FYuRq1jP7JMsrVMKFE2v8vljXzYvNZ9fgLV1sjq5FyQjl9a-cijUho8vymQd-h1XA5eBp5OCPB3nwRuzI9WfjMhK4-B8HOXflvSclxwg__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/81/image/image.jpg?Expires=1760506700&Signature=b1Rh8KQPuQL4qZtQD4hwOWzb1tU5cVzjZwEB92SB40BCjsDCZWPvIdljrFhBOkvV9Ze6za-5-46KvapAyJVBmgJejK9TfCv21KcZBkANnWxN7j4fU3FdaslBIWw5SC~wRryZFVrLf0osZlGoHjYbjCRhbb4JE92My31iWky7TnlejfMRKiIrh8TohQ5n4AWCMkJBKhtHbPo21rZf6T9wCcpa0Ph36pxO8xO55GQQQAewL~7C6Iaf9bRAJSVxOPoivNBx4p1pmyN6zIg-QR58AduxFmF5HucWrZ1CpSiEU4PUsjUfWZMF-fETQz-0-CYi61Jd8jbVTssscfM0EY5Upg__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_81_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 81,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/81/image/image.jpg?Expires=1760506700&Signature=b1Rh8KQPuQL4qZtQD4hwOWzb1tU5cVzjZwEB92SB40BCjsDCZWPvIdljrFhBOkvV9Ze6za-5-46KvapAyJVBmgJejK9TfCv21KcZBkANnWxN7j4fU3FdaslBIWw5SC~wRryZFVrLf0osZlGoHjYbjCRhbb4JE92My31iWky7TnlejfMRKiIrh8TohQ5n4AWCMkJBKhtHbPo21rZf6T9wCcpa0Ph36pxO8xO55GQQQAewL~7C6Iaf9bRAJSVxOPoivNBx4p1pmyN6zIg-QR58AduxFmF5HucWrZ1CpSiEU4PUsjUfWZMF-fETQz-0-CYi61Jd8jbVTssscfM0EY5Upg__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/82/image/image.jpg?Expires=1760506700&Signature=Fdsc1zoJsP2a0QOjexLM5DblrvR4Gy9tJuSlH9smMM52XcjlaCRT2bExYt8ZC-JOgXkQge0X0eJe4cMjnwhoxsoQFjq8Bvm~Su80NhT2l~z3a3ebFhzZBj9Adc54gGusw7nOpE5KCImgqWbNqb82ArM7UoKimFIxXm~6DtIggnJtgIN9yvcbeffJarUHIT8rzTtYSX6shsv4RcWhqXzOso8hcOWTg7K22RmPRQBu~G1Q4uViReK8J5w0aNRSQgPUi8sOeRqh15TdwXhKtdqogIROXmetgqhTx5wzZN3CU3bLtr1Q9rJRSJ22pL7XqzqRRgzogmofW1i6ZVdQ8RHpXQ__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_82_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 82,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/82/image/image.jpg?Expires=1760506700&Signature=Fdsc1zoJsP2a0QOjexLM5DblrvR4Gy9tJuSlH9smMM52XcjlaCRT2bExYt8ZC-JOgXkQge0X0eJe4cMjnwhoxsoQFjq8Bvm~Su80NhT2l~z3a3ebFhzZBj9Adc54gGusw7nOpE5KCImgqWbNqb82ArM7UoKimFIxXm~6DtIggnJtgIN9yvcbeffJarUHIT8rzTtYSX6shsv4RcWhqXzOso8hcOWTg7K22RmPRQBu~G1Q4uViReK8J5w0aNRSQgPUi8sOeRqh15TdwXhKtdqogIROXmetgqhTx5wzZN3CU3bLtr1Q9rJRSJ22pL7XqzqRRgzogmofW1i6ZVdQ8RHpXQ__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/83/image/image.jpg?Expires=1760506700&Signature=aueCUskMli8F7DLYV-zmR4zqT8lfzb6-IvSdfA-XmihJQ2UzzKHT7I-3tP2RERlTAhQFiLVZ-cRi2mAzT7NO2nEFDkYjYo5sEPa4xO1OIRmIi0wbHI706RX1HfsojHy4RIEDIU~FmDnIUkP1OIty~G36UtZNSpM6N~WWCK074zZrB4rQdyNgdwnNRf0flk6NrN~CO4Y4sutjGrYBJtZ5q6xpYSP0WTOohKxOJthVRQrU-OdDMqS9jqlaGbKak81rZUsyn5TpoCWDeFRvjSW90EA2hc0byJBVxrReXSPZ54qWwJSUmLcptWeHj2jgN3Drw6QehSnBGTkjHNVm4ZYTfQ__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_83_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 83,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/83/image/image.jpg?Expires=1760506700&Signature=aueCUskMli8F7DLYV-zmR4zqT8lfzb6-IvSdfA-XmihJQ2UzzKHT7I-3tP2RERlTAhQFiLVZ-cRi2mAzT7NO2nEFDkYjYo5sEPa4xO1OIRmIi0wbHI706RX1HfsojHy4RIEDIU~FmDnIUkP1OIty~G36UtZNSpM6N~WWCK074zZrB4rQdyNgdwnNRf0flk6NrN~CO4Y4sutjGrYBJtZ5q6xpYSP0WTOohKxOJthVRQrU-OdDMqS9jqlaGbKak81rZUsyn5TpoCWDeFRvjSW90EA2hc0byJBVxrReXSPZ54qWwJSUmLcptWeHj2jgN3Drw6QehSnBGTkjHNVm4ZYTfQ__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/84/image/image.jpg?Expires=1760506700&Signature=CAXBRGkk6s2xgsGVM7B3~257x9tyuPRxUxcdA2PgQYIOYXJ9IyMNEYkPmob4IPIthtEiWEiLDR1k0mgIOM9Q2eLW6Gu~d38PKMZ9HOYDtl9TBtS3xKcz-k~0~GDNyiXI6zLtyZmJt9tPq0Io1c~DNRLL7pC4yTQ2HLbriZuxcC4ocmx4MY4~d~AlMmHsdDI88m5uINiTN3a0qrbM2AlWWmogHVR44XGrJK5VyUkq~mqi8Z46yE-tgAMCR0DcBeECIyZZTZPY1LKwL0aeOTiUzypwvQMHyLOsjXag0YrJVshe3qrjJKw2-XJKTghyptE-6MBx874UwwNRy6fXnSdUnw__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_84_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 84,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/84/image/image.jpg?Expires=1760506700&Signature=CAXBRGkk6s2xgsGVM7B3~257x9tyuPRxUxcdA2PgQYIOYXJ9IyMNEYkPmob4IPIthtEiWEiLDR1k0mgIOM9Q2eLW6Gu~d38PKMZ9HOYDtl9TBtS3xKcz-k~0~GDNyiXI6zLtyZmJt9tPq0Io1c~DNRLL7pC4yTQ2HLbriZuxcC4ocmx4MY4~d~AlMmHsdDI88m5uINiTN3a0qrbM2AlWWmogHVR44XGrJK5VyUkq~mqi8Z46yE-tgAMCR0DcBeECIyZZTZPY1LKwL0aeOTiUzypwvQMHyLOsjXag0YrJVshe3qrjJKw2-XJKTghyptE-6MBx874UwwNRy6fXnSdUnw__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/85/image/image.jpg?Expires=1760506700&Signature=MetVeCyNubSg5aQ80DEN-r8EeY-kkFMW4cx6Qw~gAK3ApyWJZhs04XYW4iNWm3OhKQQGaPDfY306~RAjnPwqmwrO5hIdDb7f3TxYq6TT02GYTvyfPJm7lsjcmAm14vzUkAVpW4hmvYSV8koDugwcFLHZ7cNYr86hNQU-FXOOMgey-mfFwYkg0qPn108gehTDUS2tFKbXZOhdfUIwklfCxGHegXW8IeDOXxkvc6gG3OdpHjKkpLbqEvdBcNzg9PLbGfawJOqVEFWq0WdlrV~pTbmyiodNdu8-67081UHBRbKmPOGUC4RYtwKAvWQW3cjQYYmhefVBUO1znylE278Nng__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_85_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 85,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/85/image/image.jpg?Expires=1760506700&Signature=MetVeCyNubSg5aQ80DEN-r8EeY-kkFMW4cx6Qw~gAK3ApyWJZhs04XYW4iNWm3OhKQQGaPDfY306~RAjnPwqmwrO5hIdDb7f3TxYq6TT02GYTvyfPJm7lsjcmAm14vzUkAVpW4hmvYSV8koDugwcFLHZ7cNYr86hNQU-FXOOMgey-mfFwYkg0qPn108gehTDUS2tFKbXZOhdfUIwklfCxGHegXW8IeDOXxkvc6gG3OdpHjKkpLbqEvdBcNzg9PLbGfawJOqVEFWq0WdlrV~pTbmyiodNdu8-67081UHBRbKmPOGUC4RYtwKAvWQW3cjQYYmhefVBUO1znylE278Nng__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/86/image/image.jpg?Expires=1760506700&Signature=nZg2QZ7KoPjzHZGbyqBI3ZQRIEjOnoFrEVgY4RfEKEZfEgXVhUeWpcxz06SK4BNsdsjm2IIQPMidiNySnfxLH-Ne0bac2oYLD2MIChT4-pVMjEOfSWLmvtjU5vhelhnP3oZwm8WpHuB9252JAzyBSCtf6z-Eho4baih1mNjDqiuAv--~n11sr9fZvwvSMHNfyZ4Z6WqpQfaq5pBvvhxKQgsa5I6GdoV5oUb3icNhezgqRwkrM90eJSqN7IN9R5gm~Pm0vLnnJ7MEoNuUYRA11N9t4rbQPaRN~Q9t-Iq4tye9YHJutZFF0Z0XvS5VwH17ThVhV-4s3b9LnnoR4SaJwA__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_86_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 86,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/86/image/image.jpg?Expires=1760506700&Signature=nZg2QZ7KoPjzHZGbyqBI3ZQRIEjOnoFrEVgY4RfEKEZfEgXVhUeWpcxz06SK4BNsdsjm2IIQPMidiNySnfxLH-Ne0bac2oYLD2MIChT4-pVMjEOfSWLmvtjU5vhelhnP3oZwm8WpHuB9252JAzyBSCtf6z-Eho4baih1mNjDqiuAv--~n11sr9fZvwvSMHNfyZ4Z6WqpQfaq5pBvvhxKQgsa5I6GdoV5oUb3icNhezgqRwkrM90eJSqN7IN9R5gm~Pm0vLnnJ7MEoNuUYRA11N9t4rbQPaRN~Q9t-Iq4tye9YHJutZFF0Z0XvS5VwH17ThVhV-4s3b9LnnoR4SaJwA__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/87/image/image.jpg?Expires=1760506700&Signature=OjqcHI-cM6epLbvpsonuybUi34C0GLviCatbohR8H4yRu1aQlXy-RfvoSyB4giGufW3uDMZa9u9CwWAbPu2jyfoox247QuUNnN3tmK5jCKOTopMwmlYj5ynt7UWNfQ2dghB4ExNncpyqXQ0DCGh9eFZs-EMEYQDnZsceN1YyNhXHesk8XOM-2UobfjiE6~BCSVejxy0ARyMekGFTZuI6A9uGUozP58KbRlERDD64PWKsvp3Xw8PuBDysSWe2~-rwOf3qH~Rwnh3PEmYRTj16ZFff0h7hPdcfvkPf1fDHH75wMBLnAXrA5TLD-HHQigG9alw9y6wL9kKNWFoY8x450g__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_87_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 87,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/87/image/image.jpg?Expires=1760506700&Signature=OjqcHI-cM6epLbvpsonuybUi34C0GLviCatbohR8H4yRu1aQlXy-RfvoSyB4giGufW3uDMZa9u9CwWAbPu2jyfoox247QuUNnN3tmK5jCKOTopMwmlYj5ynt7UWNfQ2dghB4ExNncpyqXQ0DCGh9eFZs-EMEYQDnZsceN1YyNhXHesk8XOM-2UobfjiE6~BCSVejxy0ARyMekGFTZuI6A9uGUozP58KbRlERDD64PWKsvp3Xw8PuBDysSWe2~-rwOf3qH~Rwnh3PEmYRTj16ZFff0h7hPdcfvkPf1fDHH75wMBLnAXrA5TLD-HHQigG9alw9y6wL9kKNWFoY8x450g__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/88/image/image.jpg?Expires=1760506700&Signature=jGKmFtDf-D-RejZksSjJDyUlU79cEvvDY0kwYZA8OM0bVnqLGDKHj1bQfw7inySZXY3Wct5BHta7K5Vwe6FxiYCTbvuijW6A9XBAt4sAEarmC1YoCjr-GL~5bxYI1oRAnpMSMxehEgUwSU1Vu7MDoTjr~Ox~mqsHhXgROd7JgM6edZeyV-mGmTpfT9W0fn27LieIEVfjLfSOjTZCLlLOwK~PS4rJSumb0zmWK9H86UPML2RFkgximszvc8Z0o9YHns~vgJjNKUmW3-iW1V6k-XxKd3o9VBjb3dXuRd0oGf67quyOvnprSFAgA9Kq3T6FYTL16HAHPetmEjvLuBrEQg__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_88_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 88,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/88/image/image.jpg?Expires=1760506700&Signature=jGKmFtDf-D-RejZksSjJDyUlU79cEvvDY0kwYZA8OM0bVnqLGDKHj1bQfw7inySZXY3Wct5BHta7K5Vwe6FxiYCTbvuijW6A9XBAt4sAEarmC1YoCjr-GL~5bxYI1oRAnpMSMxehEgUwSU1Vu7MDoTjr~Ox~mqsHhXgROd7JgM6edZeyV-mGmTpfT9W0fn27LieIEVfjLfSOjTZCLlLOwK~PS4rJSumb0zmWK9H86UPML2RFkgximszvc8Z0o9YHns~vgJjNKUmW3-iW1V6k-XxKd3o9VBjb3dXuRd0oGf67quyOvnprSFAgA9Kq3T6FYTL16HAHPetmEjvLuBrEQg__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/89/image/image.jpg?Expires=1760506700&Signature=Vj3c4Q2tEyUUL-Y7pIEH5-Oh~zirfC~86jefVgxr6JhF8p0o~vmj3VL1DeAq9Do4pnNGURJg-~Q9zmCD3u1BIghbYxZYQu2T0SgxX81vZohANXSA4jujB9TizzxHsw5EWlyjoi80shCh9g31QoA-8MDv4QR8Ol4ApP1yC9140LPmKkD~dYp4Zb4ntpdqHaywcJbYuT7Vv2X5OfcXb9MFTxuA~~ayzXUetTxqeSu~cGZIKg13KaEtqLR4wfW1UUnMVdux3X90R~L~QTwWYNsKkhVTAmHIp3y8rvA4p4~CjhZT2kmFeVsDgzNlSWFmQpcNTR-wosGmpy~dg7PkG8LENw__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_89_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 89,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/89/image/image.jpg?Expires=1760506700&Signature=Vj3c4Q2tEyUUL-Y7pIEH5-Oh~zirfC~86jefVgxr6JhF8p0o~vmj3VL1DeAq9Do4pnNGURJg-~Q9zmCD3u1BIghbYxZYQu2T0SgxX81vZohANXSA4jujB9TizzxHsw5EWlyjoi80shCh9g31QoA-8MDv4QR8Ol4ApP1yC9140LPmKkD~dYp4Zb4ntpdqHaywcJbYuT7Vv2X5OfcXb9MFTxuA~~ayzXUetTxqeSu~cGZIKg13KaEtqLR4wfW1UUnMVdux3X90R~L~QTwWYNsKkhVTAmHIp3y8rvA4p4~CjhZT2kmFeVsDgzNlSWFmQpcNTR-wosGmpy~dg7PkG8LENw__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/90/image/image.jpg?Expires=1760506700&Signature=qapaBCfK9XxBM0r~KaHbIW0SFJ5wn4XXNRt3x~h2xobHm24-WKBYQk4gkQJVj3IXj0B07XyZYMINd0YWV8KBxrx6~W5ocoJiwGHNPfCHGtNMIxiRT17Rnmzp85ks0gFhH7MHEXefqoiDMr77BSrlU5XxVTafRH7WK2NiyUkaHbGpvfp4tg9Q6Ivyi4VCwDYnWYLwpzjdNuYP9kbWqT~EEGFooRkNkYYLeATLfPwS5udpZfp56dSDDrXj2VNM~hL4mEt0PFLRdAzM85PWpPsnKhVI2q0gJx99S1J3SW7QtZwY5m3htjqhu0lKVboHq6WcdE5sT-RVs5zypkjNjFv0bA__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_90_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 90,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/90/image/image.jpg?Expires=1760506700&Signature=qapaBCfK9XxBM0r~KaHbIW0SFJ5wn4XXNRt3x~h2xobHm24-WKBYQk4gkQJVj3IXj0B07XyZYMINd0YWV8KBxrx6~W5ocoJiwGHNPfCHGtNMIxiRT17Rnmzp85ks0gFhH7MHEXefqoiDMr77BSrlU5XxVTafRH7WK2NiyUkaHbGpvfp4tg9Q6Ivyi4VCwDYnWYLwpzjdNuYP9kbWqT~EEGFooRkNkYYLeATLfPwS5udpZfp56dSDDrXj2VNM~hL4mEt0PFLRdAzM85PWpPsnKhVI2q0gJx99S1J3SW7QtZwY5m3htjqhu0lKVboHq6WcdE5sT-RVs5zypkjNjFv0bA__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/91/image/image.jpg?Expires=1760506700&Signature=mDeUAs92n4Qq6R0PeN9~XeeB7qtf~1-LLs2NWwAjXwHvMelOeRP9TcGhEdGJj3b8TiMWyZsYfVraRaELeTUfdAQ8jfwfsYbJF8gUQwrj6KGXf6bMtvdGQMe3W1-zRDMXXUZbnjSaiYWBy1SSfeXVjzeBs6jzYE1Ze1d0dhKvgJXIXMYLt6KnBUveHms4KB-qocTkqKrZJ5xkTtnf98ASVb6HTo5oq1WJoICtLBPdn4g9qzBXXUKWMfbg8wgNmo0Lg-rFQTnLkKeCmQXmYZXF~nmVcXDYVdyq5ipQnevsQojQ5zoPI6ziGDrrJBS4qinZC~~zQWP~1UHGoxr-8VYiVw__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_91_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 91,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/91/image/image.jpg?Expires=1760506700&Signature=mDeUAs92n4Qq6R0PeN9~XeeB7qtf~1-LLs2NWwAjXwHvMelOeRP9TcGhEdGJj3b8TiMWyZsYfVraRaELeTUfdAQ8jfwfsYbJF8gUQwrj6KGXf6bMtvdGQMe3W1-zRDMXXUZbnjSaiYWBy1SSfeXVjzeBs6jzYE1Ze1d0dhKvgJXIXMYLt6KnBUveHms4KB-qocTkqKrZJ5xkTtnf98ASVb6HTo5oq1WJoICtLBPdn4g9qzBXXUKWMfbg8wgNmo0Lg-rFQTnLkKeCmQXmYZXF~nmVcXDYVdyq5ipQnevsQojQ5zoPI6ziGDrrJBS4qinZC~~zQWP~1UHGoxr-8VYiVw__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/92/image/image.jpg?Expires=1760506700&Signature=bF1kwBgsVDmOW7DV1YBKijYHfZAUcmDaVehoX82i9uC4wJvJxydtfKX3jiLVdXjX24J7eW4tuqlcnsvpVFldpQJaINGfzHndm~-NkK2LxoHIyTiJrdB3whCEZ01Bcb35PVFeCpJVqG57qFHqepADC~oIRcd4sXU~TuFDJXpWLWjqozQZPwyFg-KmlxQ6-RW7ulD-8PgfMrx0wm2tOWMmZAzWjJDmo7j07de3b-cLJvDe2wh3XmoqGiK0BtIaH2h6wEgRKF668GtJkK5cTQ31ZpITTNGFxoSKePVZJ1ppj6jKn7FBmOI5mc9Y5D6tAvu0NrHfHy~dmtTksc76NyJ4KA__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_92_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 92,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/92/image/image.jpg?Expires=1760506700&Signature=bF1kwBgsVDmOW7DV1YBKijYHfZAUcmDaVehoX82i9uC4wJvJxydtfKX3jiLVdXjX24J7eW4tuqlcnsvpVFldpQJaINGfzHndm~-NkK2LxoHIyTiJrdB3whCEZ01Bcb35PVFeCpJVqG57qFHqepADC~oIRcd4sXU~TuFDJXpWLWjqozQZPwyFg-KmlxQ6-RW7ulD-8PgfMrx0wm2tOWMmZAzWjJDmo7j07de3b-cLJvDe2wh3XmoqGiK0BtIaH2h6wEgRKF668GtJkK5cTQ31ZpITTNGFxoSKePVZJ1ppj6jKn7FBmOI5mc9Y5D6tAvu0NrHfHy~dmtTksc76NyJ4KA__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/93/image/image.jpg?Expires=1760506700&Signature=IV~FNsgZumLik0v6gjq37KOLA20jeJR34sNZD3dFz8SFYFv66qfe6EuCLHgDnJxFzMd7Kdz3DZyvW0wNciB0kDbzH5QcIKw6nka3eeo8a7geFEVtsJtzj~2EiPW3yJjCX~aE6S9gKYCpYjwVEBYLd1Qca5L5nCQUhrvTpvASJI5i4UC0kalfFIpBHZrI3PF-1Ns0DWs4Mogydgts9ErtsM6dvZcA7ttmVybLEjGkOSbTwYfz~EvA01JaEoxoCoPlHeXLoN1xindGrf6efEhoJ4cFrHgl6Fd8LS2HQWTDJFzXI-ax1O7FQiBpK0ZaX15XVo~o0uzItVsDLwmDlTDKcg__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_93_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 93,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/93/image/image.jpg?Expires=1760506700&Signature=IV~FNsgZumLik0v6gjq37KOLA20jeJR34sNZD3dFz8SFYFv66qfe6EuCLHgDnJxFzMd7Kdz3DZyvW0wNciB0kDbzH5QcIKw6nka3eeo8a7geFEVtsJtzj~2EiPW3yJjCX~aE6S9gKYCpYjwVEBYLd1Qca5L5nCQUhrvTpvASJI5i4UC0kalfFIpBHZrI3PF-1Ns0DWs4Mogydgts9ErtsM6dvZcA7ttmVybLEjGkOSbTwYfz~EvA01JaEoxoCoPlHeXLoN1xindGrf6efEhoJ4cFrHgl6Fd8LS2HQWTDJFzXI-ax1O7FQiBpK0ZaX15XVo~o0uzItVsDLwmDlTDKcg__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/94/image/image.jpg?Expires=1760506700&Signature=tWovLQeLg58JGBs5yBSFrb6-hSRrt02Wa6HfMgF-ZJQ3cWW-VeXtWt1bEhLtqlzxEkjLqvhrfjCAqTJjEl1ov9mUievWK6JPnVd~4wrzvUppLM-6eyZWZL2Z-JjdZnZTuIKP~iWxZLX1XiGBzbg7E~1o0CPfEl7YQa6OLZbuPYRuCzmVHq6nVusIorH9ded5sUjOHeNHgLh8V61pb8H2pmGhyAnivuNAllfybTVRIhHUj-LJlW4Q9w2B3jrGBunAEq~t~qimDrxqdvqd2xqQ0TZNoe1U7TvgQe-503NCjq2q99men7905fZx0TNHZZLfcLI~aaMTR5PCxY5oDSluTA__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_94_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 94,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/94/image/image.jpg?Expires=1760506700&Signature=tWovLQeLg58JGBs5yBSFrb6-hSRrt02Wa6HfMgF-ZJQ3cWW-VeXtWt1bEhLtqlzxEkjLqvhrfjCAqTJjEl1ov9mUievWK6JPnVd~4wrzvUppLM-6eyZWZL2Z-JjdZnZTuIKP~iWxZLX1XiGBzbg7E~1o0CPfEl7YQa6OLZbuPYRuCzmVHq6nVusIorH9ded5sUjOHeNHgLh8V61pb8H2pmGhyAnivuNAllfybTVRIhHUj-LJlW4Q9w2B3jrGBunAEq~t~qimDrxqdvqd2xqQ0TZNoe1U7TvgQe-503NCjq2q99men7905fZx0TNHZZLfcLI~aaMTR5PCxY5oDSluTA__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/95/image/image.jpg?Expires=1760506700&Signature=EI8X-33f5JyQdSlWOLksGI5Py6V7AaCcBp~xMHRFk9CTv-iwCKzyox5Og4QHi6u44XOb5ARFh7kuxtvAibOg9NIhvcez5AuokyXPU6Oi-oJiEqsL6oJp5sUJCtyTZul208TkTQNDT9iFp7RNbZ1G-ImpCrFEzJPOiZAf3s7oUkGwbW3Hs6LG0oQQGf9TPvqwjogQq~~41Xmor-UXlZ95X4hRu~ggn4-DW5~UUvg~bD4Xy3wcHd-nir01JND2tNmjrvjg9crhhi0~Q6HOSNlUivY931TjP1oSrU8ohYCAWkDiIRGdeTHJRk6bf9Y77lwJVxfjDB0bFj37057My9saYQ__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_95_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 95,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/95/image/image.jpg?Expires=1760506700&Signature=EI8X-33f5JyQdSlWOLksGI5Py6V7AaCcBp~xMHRFk9CTv-iwCKzyox5Og4QHi6u44XOb5ARFh7kuxtvAibOg9NIhvcez5AuokyXPU6Oi-oJiEqsL6oJp5sUJCtyTZul208TkTQNDT9iFp7RNbZ1G-ImpCrFEzJPOiZAf3s7oUkGwbW3Hs6LG0oQQGf9TPvqwjogQq~~41Xmor-UXlZ95X4hRu~ggn4-DW5~UUvg~bD4Xy3wcHd-nir01JND2tNmjrvjg9crhhi0~Q6HOSNlUivY931TjP1oSrU8ohYCAWkDiIRGdeTHJRk6bf9Y77lwJVxfjDB0bFj37057My9saYQ__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/96/image/image.jpg?Expires=1760506700&Signature=X6tUo~5MYDYrles2NW1EhjBSZrPJq2PQbOQR5nYY~aARWQrAitFzVErRMYsT406Tw2JMBC5fmlWOamjsjGiZlf30ghm6vexK1i6nH0b0KyoyoTHORjrNDyvpKdkjOxHnrJweu-kahuYJZ7HeXlYYaH7M3x8ySfNIQo0gu1B9Z6UTd3~FCqE3-P89jUrcmJW-w36bTYKZncoog0yEosFoyPrVRTRSGBvAPbSI08zsktk0k7W1cRkxs-vJpk6CEl1KagDoqBfSVifQyCv~6EH6dXH4H-YpTd0JVS~0W0f0brQe8P-dqaBb4tAlJpPyc6dD0munSbJ~Brn0FtK~v1Mplw__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_96_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 96,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/96/image/image.jpg?Expires=1760506700&Signature=X6tUo~5MYDYrles2NW1EhjBSZrPJq2PQbOQR5nYY~aARWQrAitFzVErRMYsT406Tw2JMBC5fmlWOamjsjGiZlf30ghm6vexK1i6nH0b0KyoyoTHORjrNDyvpKdkjOxHnrJweu-kahuYJZ7HeXlYYaH7M3x8ySfNIQo0gu1B9Z6UTd3~FCqE3-P89jUrcmJW-w36bTYKZncoog0yEosFoyPrVRTRSGBvAPbSI08zsktk0k7W1cRkxs-vJpk6CEl1KagDoqBfSVifQyCv~6EH6dXH4H-YpTd0JVS~0W0f0brQe8P-dqaBb4tAlJpPyc6dD0munSbJ~Brn0FtK~v1Mplw__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/97/image/image.jpg?Expires=1760506700&Signature=nw6S8iZ7I6kDjDaYQs4yIxp6LDJbdk5uXyRuEdn4kNYBFC0AJuA0f95j8G4jB0xmw4zy-38c1kXLspbdzrZtRr1C46WYAaykY4KZPvgOJJc-gR56QgPEKWAaWy~3~MzO~0S2Ch67L0-UWYPnn0nkz30SOuzbF88bsrE1x4OvaLhE7XVyBTwF2x8rnrrK0GMdUgF-D59oA5LKvNUqPwgaUGfJiE6Jd6V04Xpqd22ICqvVIfI4GJ7JybVE4fxOXZTPZhCml6cWmgogMbXc9MKXIjgodX5f4J43c8LwE4Oh7lPuOqMja01Cpe8UJyFlS-1ma70J5MRdheg7DVP006-3Lg__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_97_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 97,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/97/image/image.jpg?Expires=1760506700&Signature=nw6S8iZ7I6kDjDaYQs4yIxp6LDJbdk5uXyRuEdn4kNYBFC0AJuA0f95j8G4jB0xmw4zy-38c1kXLspbdzrZtRr1C46WYAaykY4KZPvgOJJc-gR56QgPEKWAaWy~3~MzO~0S2Ch67L0-UWYPnn0nkz30SOuzbF88bsrE1x4OvaLhE7XVyBTwF2x8rnrrK0GMdUgF-D59oA5LKvNUqPwgaUGfJiE6Jd6V04Xpqd22ICqvVIfI4GJ7JybVE4fxOXZTPZhCml6cWmgogMbXc9MKXIjgodX5f4J43c8LwE4Oh7lPuOqMja01Cpe8UJyFlS-1ma70J5MRdheg7DVP006-3Lg__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/98/image/image.jpg?Expires=1760506700&Signature=Cbv1noMs8B2YX3oHHRMM-INUeNn~x7h7ZY-C4xUnWmOUnPzH~dMif3977Nt58-Xyh8uIPrlBsE6lUVzYPzLmMD6HeMyruBGrs5kKtrcbmn0TON-r~lLeC8fBgS1Kk1pz0UbuxUMFFA00GmfqcN~snxqxeIIb6A4bvTeU9I14NMMkg49FADHFuiKx-euQBdx~3UYjWWYpxEF-jsu4RCKvgeVuHGjDYG4c9NwI7idgp36qsekHlTM-tkiaay87wdNbgL4Hr7YvwOQdovvaqPCF9xUkh9j-m0Tysd8yk-EyrLvPni0oH~hopqUmRET4Pr9yvUUH~P7aBdPHN85mFDJ4MQ__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_98_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 98,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/98/image/image.jpg?Expires=1760506700&Signature=Cbv1noMs8B2YX3oHHRMM-INUeNn~x7h7ZY-C4xUnWmOUnPzH~dMif3977Nt58-Xyh8uIPrlBsE6lUVzYPzLmMD6HeMyruBGrs5kKtrcbmn0TON-r~lLeC8fBgS1Kk1pz0UbuxUMFFA00GmfqcN~snxqxeIIb6A4bvTeU9I14NMMkg49FADHFuiKx-euQBdx~3UYjWWYpxEF-jsu4RCKvgeVuHGjDYG4c9NwI7idgp36qsekHlTM-tkiaay87wdNbgL4Hr7YvwOQdovvaqPCF9xUkh9j-m0Tysd8yk-EyrLvPni0oH~hopqUmRET4Pr9yvUUH~P7aBdPHN85mFDJ4MQ__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/99/image/image.jpg?Expires=1760506700&Signature=HN~pbO2HDLHqMvp4W4Ob6zMxPq~pHhO4BHj-CMHc4fV51suqScKVu37unaItX6ppf7yoFJz2hU4LxjocJ7MF~st9Pix4QRC4YSbNsDiNhDlH6AYjts1l5Ps6hHfVKBN-CP49G7r3ZBmAc1wjo1ta4anMlxFs7bCtqo7ekT82aIrA3-tj6mvVdIKXtiE2n~hi54MujtSda0djDGfL3oKUjb99wS3yOdvMHqRUKgpIKRYiy9z8ZHzj4vd8QsuAwNtzSfHXpew6BZYFmZPCEJE4i8RPc64GBpqaaL2I~5jr1eyhlrF~ibZZNh5kzGv3hJ1M1L0mntYvYj~awHMbstQGkw__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_99_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 99,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/99/image/image.jpg?Expires=1760506700&Signature=HN~pbO2HDLHqMvp4W4Ob6zMxPq~pHhO4BHj-CMHc4fV51suqScKVu37unaItX6ppf7yoFJz2hU4LxjocJ7MF~st9Pix4QRC4YSbNsDiNhDlH6AYjts1l5Ps6hHfVKBN-CP49G7r3ZBmAc1wjo1ta4anMlxFs7bCtqo7ekT82aIrA3-tj6mvVdIKXtiE2n~hi54MujtSda0djDGfL3oKUjb99wS3yOdvMHqRUKgpIKRYiy9z8ZHzj4vd8QsuAwNtzSfHXpew6BZYFmZPCEJE4i8RPc64GBpqaaL2I~5jr1eyhlrF~ibZZNh5kzGv3hJ1M1L0mntYvYj~awHMbstQGkw__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/100/image/image.jpg?Expires=1760506701&Signature=FB2hCROQuq7m4Z30qRtKT7Vi4mDfyawvKIKdfIbAIMNxgLjnoNJI9aHzv8zo1omw5tKCGRu8ezvwuFuB6OSr~~YKQXcaZOZO7CL1225pQgnx0~iO~3u1tM4P6nhNY~Dai80Q1QflRI4JhkPkkx7PzbnV~f5IHLIXiOjVOpe4jpooh-iOkUPJh24BFAFCgJz7Z6kixyRDn0VeEfjbGOiTeV~otX~3fUu4S-zqQ3qa2ubLx6UyPIHvOn88QuGQlUbf-KAUbKCtWDxRzFrO5XSvOgKrGKCTl2vfV1V9XolL40-bXLMOpudYV036F2NM0oU-nFSr1XDh1qwuPktNKl000Q__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_0_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 0,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/100/image/image.jpg?Expires=1760506701&Signature=FB2hCROQuq7m4Z30qRtKT7Vi4mDfyawvKIKdfIbAIMNxgLjnoNJI9aHzv8zo1omw5tKCGRu8ezvwuFuB6OSr~~YKQXcaZOZO7CL1225pQgnx0~iO~3u1tM4P6nhNY~Dai80Q1QflRI4JhkPkkx7PzbnV~f5IHLIXiOjVOpe4jpooh-iOkUPJh24BFAFCgJz7Z6kixyRDn0VeEfjbGOiTeV~otX~3fUu4S-zqQ3qa2ubLx6UyPIHvOn88QuGQlUbf-KAUbKCtWDxRzFrO5XSvOgKrGKCTl2vfV1V9XolL40-bXLMOpudYV036F2NM0oU-nFSr1XDh1qwuPktNKl000Q__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/101/image/image.jpg?Expires=1760506701&Signature=Lfy4MicmQ5Aibwhwwf9u9D4TbIpuzChbuBkFjxHYlpimzk45jFcbbsfZJOPzq5c9h6a4ePPk8zjbh7j8MXmF6Wq~9Iuamtf7shqCRwkVacfPVhH~25pDgtSqMHhdoeZiO8BQj345qUYFhMjsnt9pdzCECc6lz9DIe9jYH1XhHrhJLjkh01daW7dDxdzjklgO0m96vpmcX5Q8ZrNRoYVpjzaAcHy1taYXyc1tFnU0mehKa1JoxQxPxGEltUkD-pZwneG6cAoSFgGYJbVrdi4lRK2~AIeTPXJWz6cI3DhjjOeAdEJvdg1BqwvHQRnUbp~VGOCcw3vKnmHJLeowBChSjw__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_1_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 1,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/101/image/image.jpg?Expires=1760506701&Signature=Lfy4MicmQ5Aibwhwwf9u9D4TbIpuzChbuBkFjxHYlpimzk45jFcbbsfZJOPzq5c9h6a4ePPk8zjbh7j8MXmF6Wq~9Iuamtf7shqCRwkVacfPVhH~25pDgtSqMHhdoeZiO8BQj345qUYFhMjsnt9pdzCECc6lz9DIe9jYH1XhHrhJLjkh01daW7dDxdzjklgO0m96vpmcX5Q8ZrNRoYVpjzaAcHy1taYXyc1tFnU0mehKa1JoxQxPxGEltUkD-pZwneG6cAoSFgGYJbVrdi4lRK2~AIeTPXJWz6cI3DhjjOeAdEJvdg1BqwvHQRnUbp~VGOCcw3vKnmHJLeowBChSjw__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/102/image/image.jpg?Expires=1760506701&Signature=pUMmIGTceATtw-ASJ2TOUytTEMWavEqrwJHsbsiopS5MtGLyWnTDECM1rDpB-auI0r62oq6GvVIBm71Fu9Bb-lbwZNDaRcCj7aefH0eYQAbFJIleJffj18f3Nci~Nxahti-Vz6seiyMOrivwZXDF~aH~upxsZZqRKOv53ZCcpDfkcc038cVf30C6jqe4cXt3oz~FJep4pK7Vu4EQIwmslYjbP7fqQPmlK6i1EM4aiDPTJvp8Vq9PAH9ROqNtCpcCwYVEGky9VV9ixNcoTqCs6JbkbrLtZeXjOYk8fxcS7LjWs2NHIG4qXAgoa60UaW8V4DcxiekXz3O~CHNN-ih4fw__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_2_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 2,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/102/image/image.jpg?Expires=1760506701&Signature=pUMmIGTceATtw-ASJ2TOUytTEMWavEqrwJHsbsiopS5MtGLyWnTDECM1rDpB-auI0r62oq6GvVIBm71Fu9Bb-lbwZNDaRcCj7aefH0eYQAbFJIleJffj18f3Nci~Nxahti-Vz6seiyMOrivwZXDF~aH~upxsZZqRKOv53ZCcpDfkcc038cVf30C6jqe4cXt3oz~FJep4pK7Vu4EQIwmslYjbP7fqQPmlK6i1EM4aiDPTJvp8Vq9PAH9ROqNtCpcCwYVEGky9VV9ixNcoTqCs6JbkbrLtZeXjOYk8fxcS7LjWs2NHIG4qXAgoa60UaW8V4DcxiekXz3O~CHNN-ih4fw__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/103/image/image.jpg?Expires=1760506701&Signature=j0nx~QIY6lwmnA0P-s3McBpCkImaqEgqgLLPcMjV4UJyf~5P3oncGEdiQWMuP2LYvTthVqHKWackKmzzBHndmnqwEc32Pz0JCz8SIvGz9UO6g~VvTSq19J6jbp7e5~XLuJYd9BOsYEltUDiHXyUt6~T~Gizbc4574Ol0pqxiw~WAxaOdq8ECnasfFY5EvPpr3~sVJgoETM-DaGTSNaHC0ytxXTxyXrKAReVZhDJKif0LTLCSAAnunQB8t6A46MWVM7fPBWR6fLOnTUHC7GVxI~6UMda1aX-sk0ssDDwa7zU57OLznFCQ1d44SMrdj5pN0fgKKt7-oE4qxZZ3YDu3OQ__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_3_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 3,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/103/image/image.jpg?Expires=1760506701&Signature=j0nx~QIY6lwmnA0P-s3McBpCkImaqEgqgLLPcMjV4UJyf~5P3oncGEdiQWMuP2LYvTthVqHKWackKmzzBHndmnqwEc32Pz0JCz8SIvGz9UO6g~VvTSq19J6jbp7e5~XLuJYd9BOsYEltUDiHXyUt6~T~Gizbc4574Ol0pqxiw~WAxaOdq8ECnasfFY5EvPpr3~sVJgoETM-DaGTSNaHC0ytxXTxyXrKAReVZhDJKif0LTLCSAAnunQB8t6A46MWVM7fPBWR6fLOnTUHC7GVxI~6UMda1aX-sk0ssDDwa7zU57OLznFCQ1d44SMrdj5pN0fgKKt7-oE4qxZZ3YDu3OQ__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/104/image/image.jpg?Expires=1760506701&Signature=NGKyQzgqV50w3Qx-gYEttIlR7RdAA8C6p1HvGBOGe0QY8uZeUBl4nWc4NdXppY7mKoYCBYaMzKJ7sha7GQZjlblJIMVncIvGZH1--oScbpqzPUDFUJNpV3EBv1yIVjkSpvfqsSLcbNZEfyM81EeixngkKDXESCLSQUXGggh~OtV0zUwDNcZ-HsUIh5AJMLTfVTWWU69eb2~qClEDxKdnyD6S7Mcqc7CF09ri1BKX3G6CV~RNDttxmdRb6t~SO3djZDVaIeItELXCFng6Fk2ROdgOUuqYPNYXRl09DV7KRo2T7Nrz9sLURa-XN47bFf2bCdkNHWfWjmc5RLqCrhEedQ__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_4_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 4,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/104/image/image.jpg?Expires=1760506701&Signature=NGKyQzgqV50w3Qx-gYEttIlR7RdAA8C6p1HvGBOGe0QY8uZeUBl4nWc4NdXppY7mKoYCBYaMzKJ7sha7GQZjlblJIMVncIvGZH1--oScbpqzPUDFUJNpV3EBv1yIVjkSpvfqsSLcbNZEfyM81EeixngkKDXESCLSQUXGggh~OtV0zUwDNcZ-HsUIh5AJMLTfVTWWU69eb2~qClEDxKdnyD6S7Mcqc7CF09ri1BKX3G6CV~RNDttxmdRb6t~SO3djZDVaIeItELXCFng6Fk2ROdgOUuqYPNYXRl09DV7KRo2T7Nrz9sLURa-XN47bFf2bCdkNHWfWjmc5RLqCrhEedQ__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/105/image/image.jpg?Expires=1760506701&Signature=Zxc15GmSxJsqRBM2erPJscqdoMs2Uu8OFiBEIrBGunotrML2Vs0cYdjHDBOdtXnOJqFO3BYt~YcDWC4yPcxhhF76Vu8fZc~GhnU2w3Uv5zO8SMYF5qROTPxlcwUv-e5N5pKw-TK9qt3dog~q3sKCdlVDkO68cDeAIOV5XuiHRRqmPiemkTFIRO0qcy-dJ0njJQimhMK8uqKyyvcFLOfstvcRHxTaJaXmXe4~1GAFFiXI8sMggEmVXnkJcd~Cxs8b1f8wJs~LKWk0cWbs8yCMaXF51avg9kYh1cteTZFpxf9zMglimorjIafUbVTMqICobX7R~gnwLjqVyY7iumrFyg__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_5_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 5,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/105/image/image.jpg?Expires=1760506701&Signature=Zxc15GmSxJsqRBM2erPJscqdoMs2Uu8OFiBEIrBGunotrML2Vs0cYdjHDBOdtXnOJqFO3BYt~YcDWC4yPcxhhF76Vu8fZc~GhnU2w3Uv5zO8SMYF5qROTPxlcwUv-e5N5pKw-TK9qt3dog~q3sKCdlVDkO68cDeAIOV5XuiHRRqmPiemkTFIRO0qcy-dJ0njJQimhMK8uqKyyvcFLOfstvcRHxTaJaXmXe4~1GAFFiXI8sMggEmVXnkJcd~Cxs8b1f8wJs~LKWk0cWbs8yCMaXF51avg9kYh1cteTZFpxf9zMglimorjIafUbVTMqICobX7R~gnwLjqVyY7iumrFyg__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/106/image/image.jpg?Expires=1760506701&Signature=lb8L2oLUowcsX8IHrIbW7OvTfp1rDNwDukrCk0B9i9MmQC1SwYSv4SpGK3io9p-NmvetWr36ZE70vFn7Yzgpl3xRtEhOkjRLUzFoz10qXLNn0guc6hH6nTHHvZxbrJbS4CVW3SFI0jpSsD5GSTxu4PR~SUsUabFV5PL7lkJctToHPGKf9veDTfzijc-Qfch4bhaEiK7fWbn3oQhbY7R0VBKtkjicO-yEYfGn~S0JelGbzEZvW44eJteaYRnUVaY5yFngMcERJB3cc1PsWo25wHqqrr4b-9JCJ-sMSU-lE8dIxL~Wjqu0~3G7647uBP7FDJxjnOCrFNv3jNXFnSHYDQ__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_6_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 6,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/106/image/image.jpg?Expires=1760506701&Signature=lb8L2oLUowcsX8IHrIbW7OvTfp1rDNwDukrCk0B9i9MmQC1SwYSv4SpGK3io9p-NmvetWr36ZE70vFn7Yzgpl3xRtEhOkjRLUzFoz10qXLNn0guc6hH6nTHHvZxbrJbS4CVW3SFI0jpSsD5GSTxu4PR~SUsUabFV5PL7lkJctToHPGKf9veDTfzijc-Qfch4bhaEiK7fWbn3oQhbY7R0VBKtkjicO-yEYfGn~S0JelGbzEZvW44eJteaYRnUVaY5yFngMcERJB3cc1PsWo25wHqqrr4b-9JCJ-sMSU-lE8dIxL~Wjqu0~3G7647uBP7FDJxjnOCrFNv3jNXFnSHYDQ__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/107/image/image.jpg?Expires=1760506701&Signature=GFirqIOxD3XXzLzKLwQXkRg7aeVxIg6PHCBsPDcypaSaelRrkYlWNIc~h~apAVlus1c9Imm3dXZx8RmkY6FgNRTPbUY0JYw6t877lvbqq5K9oT0p2gBiEH5RO6tYyYsQzAJKsL5NNB5dj0IvhO9rSGsddodqKmdtAmXMuWQNce508IgCsRBxBWX0tI1c6D~biepr0yDeZNDSVlQbm869FlzkREl0NVOO7npK9zH3zVUnczbB5NTzJsCTlrA8qoKoIASA-ra7oDFjdzaKTo5UcnNsxGOpD0x15md2guimBgm8NzdPmdk3yhdpGesLyUmoZhIcPHBIuA3znOGPA3T~KQ__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_7_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 7,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/107/image/image.jpg?Expires=1760506701&Signature=GFirqIOxD3XXzLzKLwQXkRg7aeVxIg6PHCBsPDcypaSaelRrkYlWNIc~h~apAVlus1c9Imm3dXZx8RmkY6FgNRTPbUY0JYw6t877lvbqq5K9oT0p2gBiEH5RO6tYyYsQzAJKsL5NNB5dj0IvhO9rSGsddodqKmdtAmXMuWQNce508IgCsRBxBWX0tI1c6D~biepr0yDeZNDSVlQbm869FlzkREl0NVOO7npK9zH3zVUnczbB5NTzJsCTlrA8qoKoIASA-ra7oDFjdzaKTo5UcnNsxGOpD0x15md2guimBgm8NzdPmdk3yhdpGesLyUmoZhIcPHBIuA3znOGPA3T~KQ__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/108/image/image.jpg?Expires=1760506701&Signature=RGPvN4XvC6k~ZUvlVrGwuiq~jNuymUm2A6ES4r2lVHTfC~gI7JASMMmYzmMpHIR8rOz9LuIT7yiRsJKovXMI1Avqknm2BYx9Gm9WJjweJSj-Jk6UnrjAn0e7S1D60FvDMdkEo4mwXAv1C9Vb3ebdTVJsuU0F61izrm0X0A6LqvtN3HlDpUi7Wg9BC~mKOF5p~OkPvFOJQZ3B4h7zHX-usJVUi9GHaLrDuHom3FWBZZc4jPd7i0OcdElLfSp7XdYOMAmiTX0XuNQgntl6Te1512Xk1adsRX~Gl8GuCrNoVbNY8Wa9gnzOYlN7c0102QtnwJ~wLTOQ1ewCxEesvMyfWg__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_8_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 8,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/108/image/image.jpg?Expires=1760506701&Signature=RGPvN4XvC6k~ZUvlVrGwuiq~jNuymUm2A6ES4r2lVHTfC~gI7JASMMmYzmMpHIR8rOz9LuIT7yiRsJKovXMI1Avqknm2BYx9Gm9WJjweJSj-Jk6UnrjAn0e7S1D60FvDMdkEo4mwXAv1C9Vb3ebdTVJsuU0F61izrm0X0A6LqvtN3HlDpUi7Wg9BC~mKOF5p~OkPvFOJQZ3B4h7zHX-usJVUi9GHaLrDuHom3FWBZZc4jPd7i0OcdElLfSp7XdYOMAmiTX0XuNQgntl6Te1512Xk1adsRX~Gl8GuCrNoVbNY8Wa9gnzOYlN7c0102QtnwJ~wLTOQ1ewCxEesvMyfWg__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/109/image/image.jpg?Expires=1760506701&Signature=HzJnHU~mCcWkChX0ZBc~azxT8whtKJiLXrDPifoBsKeSWO3szm4DzfwoM0Cex28VpzgYrNIYD8nbRCC5q5uosu6FnE9h56l17-gl42MoQc0BTvEdXGwoliT~jc0MAZ1grSDp2JsDxBt3vw965v2Osxad~4g6NYwAwYdwx-6dWDCd0nkNOVIhocrAljL9uLgiOASJ8D9eU5GmDgMP3oWYoHP5V6H-qyC6dKB9vYkeUKg2D0Q3-1-UwWg28du-tBj8YOtYLdd3TwaSMjumNUbDDF7DLxVWmCR5EQZpeIl2g9qlKa4JFg-L9SZVLKW6HU0opbzv1KMre-y8MyO0vJZ-FQ__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_9_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 9,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/109/image/image.jpg?Expires=1760506701&Signature=HzJnHU~mCcWkChX0ZBc~azxT8whtKJiLXrDPifoBsKeSWO3szm4DzfwoM0Cex28VpzgYrNIYD8nbRCC5q5uosu6FnE9h56l17-gl42MoQc0BTvEdXGwoliT~jc0MAZ1grSDp2JsDxBt3vw965v2Osxad~4g6NYwAwYdwx-6dWDCd0nkNOVIhocrAljL9uLgiOASJ8D9eU5GmDgMP3oWYoHP5V6H-qyC6dKB9vYkeUKg2D0Q3-1-UwWg28du-tBj8YOtYLdd3TwaSMjumNUbDDF7DLxVWmCR5EQZpeIl2g9qlKa4JFg-L9SZVLKW6HU0opbzv1KMre-y8MyO0vJZ-FQ__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/110/image/image.jpg?Expires=1760506701&Signature=usXZRCkW1UG9LTja4wi6SXSk4HotLT9OYPBkV3~BZRRC2jqJ0kUWK4VAtgZLlM5j9qnsBGPSeRVKaRBhiTZH-SsDUkzPbHpyHy66neNBS5aV0hQ6M05mSGIewyeNNPIiGmL6ebkKmWHpBLN7B5GRwwnAzmdW3XlsZ5Ox46W6tNyWaY3BBTh-QB4lWg~TJW5MWOKgm3iyWCxN3VHFUAH3mC8bmHIxga1xR2jYPMyk1rHVVTKWTZsQVVtqtDNWJykzuPbQK1QLvyQHAPPbJ-qsfKOkJ34Q4~KLrMNj4wP6X6~cDJUq1NSViajgJV6y4eOPz1K4IKUzQwMjdALdOVx~eA__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_10_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 10,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/110/image/image.jpg?Expires=1760506701&Signature=usXZRCkW1UG9LTja4wi6SXSk4HotLT9OYPBkV3~BZRRC2jqJ0kUWK4VAtgZLlM5j9qnsBGPSeRVKaRBhiTZH-SsDUkzPbHpyHy66neNBS5aV0hQ6M05mSGIewyeNNPIiGmL6ebkKmWHpBLN7B5GRwwnAzmdW3XlsZ5Ox46W6tNyWaY3BBTh-QB4lWg~TJW5MWOKgm3iyWCxN3VHFUAH3mC8bmHIxga1xR2jYPMyk1rHVVTKWTZsQVVtqtDNWJykzuPbQK1QLvyQHAPPbJ-qsfKOkJ34Q4~KLrMNj4wP6X6~cDJUq1NSViajgJV6y4eOPz1K4IKUzQwMjdALdOVx~eA__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/111/image/image.jpg?Expires=1760506701&Signature=G6D3eCnoVDLkbqcTOgWrcwX3uo2aDxXN60~5g5iaQp~3MXelbJhX3q1LYQ7DD1dw0DNCCJo6ggjk6xdpuJLrAdhuYLd4akKx6pxLfW8yWrg~CagzppYphRLS6jL48kpBkZv1JHVQWN-F-oZxUmXhv1iRI4N~ueHCRvrpgfYMxAfdN6CZpxqzlO7Ol6porPBfSZCUI-U3JAzjdHX57g3h0H11DqwMGJ69AiDviXAN48VBXoH3r8KF9Kd4H8iJEt-ETit5QqNoL9fv-xfwnqh08jGzwZlp6AiL6SK9piDfop43AizeWa2JqUhMFd2QN~pI2VnRolwy1E6C4e9y3-wnFg__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_11_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 11,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/111/image/image.jpg?Expires=1760506701&Signature=G6D3eCnoVDLkbqcTOgWrcwX3uo2aDxXN60~5g5iaQp~3MXelbJhX3q1LYQ7DD1dw0DNCCJo6ggjk6xdpuJLrAdhuYLd4akKx6pxLfW8yWrg~CagzppYphRLS6jL48kpBkZv1JHVQWN-F-oZxUmXhv1iRI4N~ueHCRvrpgfYMxAfdN6CZpxqzlO7Ol6porPBfSZCUI-U3JAzjdHX57g3h0H11DqwMGJ69AiDviXAN48VBXoH3r8KF9Kd4H8iJEt-ETit5QqNoL9fv-xfwnqh08jGzwZlp6AiL6SK9piDfop43AizeWa2JqUhMFd2QN~pI2VnRolwy1E6C4e9y3-wnFg__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/112/image/image.jpg?Expires=1760506701&Signature=PKtIhCVfx89~PX1G42aoU5alQp74PAEIwZfvncfUgoIv1HPL1s1itsIcqx0Kv0tucpm49W9n1ImCigqBRjtgDpvdv9PzbdEmSYOsuEGOr4Yir3~-xkNEtE7~zqmQqXAABGCPC6og5QcL9WGva957tUiVFR3dpxGcdt07AccagqXdUCc6VIwFVlNLwORiULlzbp5xGCTBQpBM4rgA4tO3~3J3WRARzf6WWP4r6q~Fq5jV8E0tDsLK3XJPzrSesX9xwUUdmMqPnr9O8wju9CIPZB~s1MGmxp6g7Qdd8t11F6x3hXs2yasI3EOUsPaCo-O3~SyrsCEcHNdWy8ZwBQPkcA__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_12_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 12,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/112/image/image.jpg?Expires=1760506701&Signature=PKtIhCVfx89~PX1G42aoU5alQp74PAEIwZfvncfUgoIv1HPL1s1itsIcqx0Kv0tucpm49W9n1ImCigqBRjtgDpvdv9PzbdEmSYOsuEGOr4Yir3~-xkNEtE7~zqmQqXAABGCPC6og5QcL9WGva957tUiVFR3dpxGcdt07AccagqXdUCc6VIwFVlNLwORiULlzbp5xGCTBQpBM4rgA4tO3~3J3WRARzf6WWP4r6q~Fq5jV8E0tDsLK3XJPzrSesX9xwUUdmMqPnr9O8wju9CIPZB~s1MGmxp6g7Qdd8t11F6x3hXs2yasI3EOUsPaCo-O3~SyrsCEcHNdWy8ZwBQPkcA__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/113/image/image.jpg?Expires=1760506701&Signature=l9c~PrFV96sqljSHZz7bGeR1Aica15c8iaT2VJyoCavAbAWjFan~lAhW2Dqc0Y9lh1XyX25Vr0-ngCRYC0gY~k961hhwtd~9C0MAKKu-0l~y0-~FiIMPZv5MkO8fPM59srwtQa8QOzIbq6JpKN8vcGgiHijv5lpBTRtfpc27Wt80di77qLdabP0Du~6XTSD45UhRPLf4gVJOJOitn3L0o0Cang390MfF6O0Z-XN5h~1jlztQlTK-ly1cwIA3ddBre8CJy5JIPbSm58Tdw1a6oSwcg6RfV1mP8JnOAxZcqwt5HhLPQLm-X3~ww1LSsIr1cutBN4nDkcYJo2IiYZRy4A__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_13_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 13,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/113/image/image.jpg?Expires=1760506701&Signature=l9c~PrFV96sqljSHZz7bGeR1Aica15c8iaT2VJyoCavAbAWjFan~lAhW2Dqc0Y9lh1XyX25Vr0-ngCRYC0gY~k961hhwtd~9C0MAKKu-0l~y0-~FiIMPZv5MkO8fPM59srwtQa8QOzIbq6JpKN8vcGgiHijv5lpBTRtfpc27Wt80di77qLdabP0Du~6XTSD45UhRPLf4gVJOJOitn3L0o0Cang390MfF6O0Z-XN5h~1jlztQlTK-ly1cwIA3ddBre8CJy5JIPbSm58Tdw1a6oSwcg6RfV1mP8JnOAxZcqwt5HhLPQLm-X3~ww1LSsIr1cutBN4nDkcYJo2IiYZRy4A__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/114/image/image.jpg?Expires=1760506701&Signature=Z~v8xLgCThvB6Dv0XJ9LOQSIYRFEVc8Y6Vw2Ep-UzguokACvGVw2xgScIb7KojmK1jt2C9RcvnbPLsWRSEmBA9woTkrPDbmyeYTFPYFy-4pb1OVGDBDBmtdjVTferiR3dvDR0MrgfguOBcvyOLd1EQd0q~Qp07RWxA7ze4VNrYbinQ2Al4KuZu-ct-tbh2LDlFcMHAbzH2LOaeI4WUhI2Pp6~g0H36ECvlgCvQsOtRWxBEAqtv7YExLYgUKKjIDLEnlMNto7w0JK73grk5SgloUPXn0Sau9X5Y52yH-qfS9imZW00bFOljSQh~1WsPSabR6IyXroiVWZNGpFRbastg__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_14_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 14,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/114/image/image.jpg?Expires=1760506701&Signature=Z~v8xLgCThvB6Dv0XJ9LOQSIYRFEVc8Y6Vw2Ep-UzguokACvGVw2xgScIb7KojmK1jt2C9RcvnbPLsWRSEmBA9woTkrPDbmyeYTFPYFy-4pb1OVGDBDBmtdjVTferiR3dvDR0MrgfguOBcvyOLd1EQd0q~Qp07RWxA7ze4VNrYbinQ2Al4KuZu-ct-tbh2LDlFcMHAbzH2LOaeI4WUhI2Pp6~g0H36ECvlgCvQsOtRWxBEAqtv7YExLYgUKKjIDLEnlMNto7w0JK73grk5SgloUPXn0Sau9X5Y52yH-qfS9imZW00bFOljSQh~1WsPSabR6IyXroiVWZNGpFRbastg__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/115/image/image.jpg?Expires=1760506701&Signature=VTeKL5fWW7vhv48eO3ZJGavMDbgFFRh53SMGWiAqnBYfPzrZsMRqi3uWP0CWnQ0kLzq1DNHKJzRHyd3qyDGB9GX2fXw9iE47fLzoYSgmvnM7BGGwrLSXUPqsS9YqXVOaGxMLpLicJ2iX8LKKKtAZhfTzO3qfG8Wv9ZGbXBNEc8PYaF7E3lomICFQA1OZ693kFmS7cs6gpiulW67nrT8momjXZ7wbpD6SQUbP7mdyXhiTBw692R5bHVZTmUM49CnEKM1HOUaccn4PBWWxc3nkS7YF1cbixl1bq2GzogmR1JBbwMxoaidWlpoQsAeiDcgBD-jNPUf-YsyOT42VdzTzTA__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_15_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 15,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/115/image/image.jpg?Expires=1760506701&Signature=VTeKL5fWW7vhv48eO3ZJGavMDbgFFRh53SMGWiAqnBYfPzrZsMRqi3uWP0CWnQ0kLzq1DNHKJzRHyd3qyDGB9GX2fXw9iE47fLzoYSgmvnM7BGGwrLSXUPqsS9YqXVOaGxMLpLicJ2iX8LKKKtAZhfTzO3qfG8Wv9ZGbXBNEc8PYaF7E3lomICFQA1OZ693kFmS7cs6gpiulW67nrT8momjXZ7wbpD6SQUbP7mdyXhiTBw692R5bHVZTmUM49CnEKM1HOUaccn4PBWWxc3nkS7YF1cbixl1bq2GzogmR1JBbwMxoaidWlpoQsAeiDcgBD-jNPUf-YsyOT42VdzTzTA__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/116/image/image.jpg?Expires=1760506701&Signature=Z2wdjUIkM~gTKQ44StgfyQE68hBsZSSkBW9fxpg3jo7nWBjjtbkTWklEmeSV66gvsN8oY2~W-HIMeVe91IfR4Ra6~hVnz4zcWEcS96DZ2PHioDeGENdwhMOQk-cKOlfumlHk5iwpi~GH04PMqLDskRcr2FUQz4Dsf0VBXgrMAvXA1~j5R2DoCUq-YsyW-fd05nzuDQahYiHNmgePtowdvZ-TfCjIdpFXQZE3LrybRmVTZ6vp45mTcKDxpNpphGVTlb7s~E0ufCHumb2rMARHYDVJQ6Xyez~FDoNXXIAQDq2uq9PyKzCBf7DiWU3TJRXAJZwsgiuHBKOs-S50xF5o6A__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_16_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 16,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/116/image/image.jpg?Expires=1760506701&Signature=Z2wdjUIkM~gTKQ44StgfyQE68hBsZSSkBW9fxpg3jo7nWBjjtbkTWklEmeSV66gvsN8oY2~W-HIMeVe91IfR4Ra6~hVnz4zcWEcS96DZ2PHioDeGENdwhMOQk-cKOlfumlHk5iwpi~GH04PMqLDskRcr2FUQz4Dsf0VBXgrMAvXA1~j5R2DoCUq-YsyW-fd05nzuDQahYiHNmgePtowdvZ-TfCjIdpFXQZE3LrybRmVTZ6vp45mTcKDxpNpphGVTlb7s~E0ufCHumb2rMARHYDVJQ6Xyez~FDoNXXIAQDq2uq9PyKzCBf7DiWU3TJRXAJZwsgiuHBKOs-S50xF5o6A__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/117/image/image.jpg?Expires=1760506701&Signature=JpUo8IVxQOXIneib-e-oY~sEerzd~FUQK1L-6p7rwFNSQXQcJp6Ltfpk23MjoLtTP6nJkXZAu8Su1M5rxoGPNG00HxQLOcaVXy8QGnk~FuqXlW9rC-kNURa506mV~G26wxm98SUVcw7H062bR7~5wv3mhwdXsEvabFMeiErdGMGQcT1ATJ5dy5WpdjsEAW4T3GwBbxUAQrDJlSFhdvdfPeKf2krvZEtttaGvPm~LskdGoXOU9WA72xvazU9y~R5sGL9fXkO6Lk~GUfzfrP~ozR2IlkzBmxP9NcNLPhwE-nRysLH5dZoNA92ebYq8cPIVlHH8T6WONqddwKg89RZRyw__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_17_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 17,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/117/image/image.jpg?Expires=1760506701&Signature=JpUo8IVxQOXIneib-e-oY~sEerzd~FUQK1L-6p7rwFNSQXQcJp6Ltfpk23MjoLtTP6nJkXZAu8Su1M5rxoGPNG00HxQLOcaVXy8QGnk~FuqXlW9rC-kNURa506mV~G26wxm98SUVcw7H062bR7~5wv3mhwdXsEvabFMeiErdGMGQcT1ATJ5dy5WpdjsEAW4T3GwBbxUAQrDJlSFhdvdfPeKf2krvZEtttaGvPm~LskdGoXOU9WA72xvazU9y~R5sGL9fXkO6Lk~GUfzfrP~ozR2IlkzBmxP9NcNLPhwE-nRysLH5dZoNA92ebYq8cPIVlHH8T6WONqddwKg89RZRyw__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/118/image/image.jpg?Expires=1760506701&Signature=Q~WUFmFLrIt~XFCKqsmXuazYlmvzQYzKQsCC6~agWzffJdkObdm1s4aC8W0YnxCNdkwLEUNTQ3sO7GO0ZZv6QEevihA~7qZ7YgRaXjvMmmpoCLYxNxCfCoTP4e8E~NyYz8XdY0ZgOhibA-Ie7AJOOmqkr7TPAlLHIC-mV-5ux0DvfloKKhyEo-Gvt9vIXSW7dxD4bl58aDQx9nT35-wjl0sRm0T6Il4VNNOlveoDve9x4FO9gycHrHqPvAM-UQpwHI85DePnnAJ4MtCfu5E5YL~O8pdnIHGRQ1XjfaiRewoLynEwby8YHt4JsEX6nYuow0PInyQ9aISnOBIHFv2-5w__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_18_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 18,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/118/image/image.jpg?Expires=1760506701&Signature=Q~WUFmFLrIt~XFCKqsmXuazYlmvzQYzKQsCC6~agWzffJdkObdm1s4aC8W0YnxCNdkwLEUNTQ3sO7GO0ZZv6QEevihA~7qZ7YgRaXjvMmmpoCLYxNxCfCoTP4e8E~NyYz8XdY0ZgOhibA-Ie7AJOOmqkr7TPAlLHIC-mV-5ux0DvfloKKhyEo-Gvt9vIXSW7dxD4bl58aDQx9nT35-wjl0sRm0T6Il4VNNOlveoDve9x4FO9gycHrHqPvAM-UQpwHI85DePnnAJ4MtCfu5E5YL~O8pdnIHGRQ1XjfaiRewoLynEwby8YHt4JsEX6nYuow0PInyQ9aISnOBIHFv2-5w__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/119/image/image.jpg?Expires=1760506701&Signature=DYddt2MIWyLxURK~Y050Mq2IrfJwh~pl7xPC18TSRolfCzF4HZEMydcQViWfVmE7iHYrGpW5n~rwB4bJKiPYfKrNRhodOoUhlu5LO1qHKPrJ8yYvvjhpkXbptC04w2DwDuACcPZhn6~2sRR5yRG13RmjrxfM0zIOp98KT1ydeGxndeiID3t67zk2SoFzGs6EtU7Kehe6cacp-uZwIbg0b6-xhtpkgD-MPnmP0BosCKlCQi6VTHO0hyIaVG4YbxQpkQve8m6nZe505h6Qzu9yqpXbd~VcS3Tney60teMSdfyqNrJ3-EHZsnDoM9lfv3MwR6cQs1I7KFWDECC04JXp2w__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_19_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 19,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/119/image/image.jpg?Expires=1760506701&Signature=DYddt2MIWyLxURK~Y050Mq2IrfJwh~pl7xPC18TSRolfCzF4HZEMydcQViWfVmE7iHYrGpW5n~rwB4bJKiPYfKrNRhodOoUhlu5LO1qHKPrJ8yYvvjhpkXbptC04w2DwDuACcPZhn6~2sRR5yRG13RmjrxfM0zIOp98KT1ydeGxndeiID3t67zk2SoFzGs6EtU7Kehe6cacp-uZwIbg0b6-xhtpkgD-MPnmP0BosCKlCQi6VTHO0hyIaVG4YbxQpkQve8m6nZe505h6Qzu9yqpXbd~VcS3Tney60teMSdfyqNrJ3-EHZsnDoM9lfv3MwR6cQs1I7KFWDECC04JXp2w__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/120/image/image.jpg?Expires=1760506701&Signature=c93ML5-dwTAw2xlt7023STXwPtnwTeefQXJCJkO2zWX0LiyxBRahSXkymQEjzgjj7sG0FyhDIkY-YiHsFWa7KtcEax68-XZ~FyyVOQfzX~s7xPexfi1vOkeL~ZmydtrHqCD7EN3yl6DDW6n54nWL~KRUDBzji5qc86fIsvrXGvI9jjbfE69mQRRYY2rWoOJsvZLGmyJS7qVpa4Ety5vHyKTis5jkIPrsRStIhcqCWibQ1MR1RZU~3UjKVkoN3XQ7Nk7B-VkFHTXgfBiNQEdozuAQpGOvC6sYPFVzFt83XAu6w3ZPFCcq06d-iFXKUAfMpiam9oi-YgU63-0jAh5-LQ__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_20_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 20,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/120/image/image.jpg?Expires=1760506701&Signature=c93ML5-dwTAw2xlt7023STXwPtnwTeefQXJCJkO2zWX0LiyxBRahSXkymQEjzgjj7sG0FyhDIkY-YiHsFWa7KtcEax68-XZ~FyyVOQfzX~s7xPexfi1vOkeL~ZmydtrHqCD7EN3yl6DDW6n54nWL~KRUDBzji5qc86fIsvrXGvI9jjbfE69mQRRYY2rWoOJsvZLGmyJS7qVpa4Ety5vHyKTis5jkIPrsRStIhcqCWibQ1MR1RZU~3UjKVkoN3XQ7Nk7B-VkFHTXgfBiNQEdozuAQpGOvC6sYPFVzFt83XAu6w3ZPFCcq06d-iFXKUAfMpiam9oi-YgU63-0jAh5-LQ__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/121/image/image.jpg?Expires=1760506701&Signature=aOpaaPovVUrKbO9KJ8OE7Cpp7Zu6gtTgA4pQ0miysQ7iNGwMJAD9yINR3N7ETn1TrJApbA7bvzWorWcGNG0lsBTEGqBv5g1BFOrxy8bls-IqjHld-SUgzyfqPgvnJqf7~qAyry-q7rWyFznJXtIU6IzdOwVkzgloiAewxG8KXri~dDcLDHodX5xRTw~7lCj3aJrjAoDVQyYAMm~pLMjIf-vUwIUlWSIhXg8vWEIZ65qkyx8dm~upg1O423jOOGr4N1ybLOgBWHv7PYFBUwyYDTg58r2O5i22T~yALMBFP8JE68lfeb7uMHwlChFSga~DLA4K3PNST2GlhT7swwIQRA__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_21_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 21,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/121/image/image.jpg?Expires=1760506701&Signature=aOpaaPovVUrKbO9KJ8OE7Cpp7Zu6gtTgA4pQ0miysQ7iNGwMJAD9yINR3N7ETn1TrJApbA7bvzWorWcGNG0lsBTEGqBv5g1BFOrxy8bls-IqjHld-SUgzyfqPgvnJqf7~qAyry-q7rWyFznJXtIU6IzdOwVkzgloiAewxG8KXri~dDcLDHodX5xRTw~7lCj3aJrjAoDVQyYAMm~pLMjIf-vUwIUlWSIhXg8vWEIZ65qkyx8dm~upg1O423jOOGr4N1ybLOgBWHv7PYFBUwyYDTg58r2O5i22T~yALMBFP8JE68lfeb7uMHwlChFSga~DLA4K3PNST2GlhT7swwIQRA__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/122/image/image.jpg?Expires=1760506701&Signature=CzlmJMV~0owsnsecMMuesunqPJRZpK~FcxdnpdzrdmDgPc1tdgfNKFlNTwzcWb2JByFaY9QGy89EOoR4R2BFXWS2IcXuKZUA0Dn4pSKryyzIGdbgQd3u-u7nNdPrdVvgEwtoqog4MyvMzymKUdqqJCZoy22gHN5qhZRRfiZF41P5Huq5ZhXXHIMMpzoRxgbSAs-8UBr8xc0KgedwJD2W4gQUXDpqECr4yzFuMVgtsHUKgD0aQnFpQS00EQaMcs3gOyVFuzmYvUUIHL0TQmOXNUAx~DaiyyMC9P6~UXBVwibY--vBQMI8lkH4Wjz1SfILuW5Jzo3j2RmZ4~cSY1kv-w__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_22_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 22,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/122/image/image.jpg?Expires=1760506701&Signature=CzlmJMV~0owsnsecMMuesunqPJRZpK~FcxdnpdzrdmDgPc1tdgfNKFlNTwzcWb2JByFaY9QGy89EOoR4R2BFXWS2IcXuKZUA0Dn4pSKryyzIGdbgQd3u-u7nNdPrdVvgEwtoqog4MyvMzymKUdqqJCZoy22gHN5qhZRRfiZF41P5Huq5ZhXXHIMMpzoRxgbSAs-8UBr8xc0KgedwJD2W4gQUXDpqECr4yzFuMVgtsHUKgD0aQnFpQS00EQaMcs3gOyVFuzmYvUUIHL0TQmOXNUAx~DaiyyMC9P6~UXBVwibY--vBQMI8lkH4Wjz1SfILuW5Jzo3j2RmZ4~cSY1kv-w__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/123/image/image.jpg?Expires=1760506701&Signature=ZRmZIknQTTBxCHMaNlK168~o-HejZwPZLUeIfq0nnKeEK81LNtl0tMPaYC-t75T8EUnnQkwbRJwZ-HKkI3s0kGrNQsn5GVZmvkDI-pTrolRPynwtKizUHlN5JRTxhm-O0apIYeMvK~aoVeJk0fsYwXlxD-CWCDlWTuSklJ51vUIPmcWegl9dzwFxU-1nFIPYqtcH2wfBFHKqX7O-RyzpEGUPfkDnA~O7enPRG~kz7WLdLZRwJcDp9Yt4OVbaf5K~cmjirAabnNsQcmdsxsDLzoPhJSyM~0HIcUOdvxgnOX7g7qp5RRt6KsD6uuQ2l8ri3xyA~NNR~jQfelxTNbctYQ__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_23_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 23,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/123/image/image.jpg?Expires=1760506701&Signature=ZRmZIknQTTBxCHMaNlK168~o-HejZwPZLUeIfq0nnKeEK81LNtl0tMPaYC-t75T8EUnnQkwbRJwZ-HKkI3s0kGrNQsn5GVZmvkDI-pTrolRPynwtKizUHlN5JRTxhm-O0apIYeMvK~aoVeJk0fsYwXlxD-CWCDlWTuSklJ51vUIPmcWegl9dzwFxU-1nFIPYqtcH2wfBFHKqX7O-RyzpEGUPfkDnA~O7enPRG~kz7WLdLZRwJcDp9Yt4OVbaf5K~cmjirAabnNsQcmdsxsDLzoPhJSyM~0HIcUOdvxgnOX7g7qp5RRt6KsD6uuQ2l8ri3xyA~NNR~jQfelxTNbctYQ__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/124/image/image.jpg?Expires=1760506701&Signature=pk6u5Qy0ap~f1lYG3kxMXRhEYtW1xB4MITR3Q4CuR4Iws3uz9mUcSHaRndALKE91qE9GU9dBtVmvHJnHx1d4l9dvGywWgV5IQ4fWEA5yN33RIqBgxQD50wFTrvkxeM9lWziAE8eg0SHARzf9ajs63h14YUNj6gdEwRsrxNWbQ4OqjJbT5dmneeYMs8XjzXCM79AajOr34PODEasVJflWQxY87YaypRD~16nrC8THcvlIBcjDP6K7p1dsPBoAbeDj2ekWFgERlSLZYQn06GM5iXJeYJ44HsIOq30Sy~wiiSqPvyMzFoqhaCwZycBZ1gcoks0g27oA7jszZBwJbwXn6A__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_24_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 24,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/124/image/image.jpg?Expires=1760506701&Signature=pk6u5Qy0ap~f1lYG3kxMXRhEYtW1xB4MITR3Q4CuR4Iws3uz9mUcSHaRndALKE91qE9GU9dBtVmvHJnHx1d4l9dvGywWgV5IQ4fWEA5yN33RIqBgxQD50wFTrvkxeM9lWziAE8eg0SHARzf9ajs63h14YUNj6gdEwRsrxNWbQ4OqjJbT5dmneeYMs8XjzXCM79AajOr34PODEasVJflWQxY87YaypRD~16nrC8THcvlIBcjDP6K7p1dsPBoAbeDj2ekWFgERlSLZYQn06GM5iXJeYJ44HsIOq30Sy~wiiSqPvyMzFoqhaCwZycBZ1gcoks0g27oA7jszZBwJbwXn6A__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/125/image/image.jpg?Expires=1760506701&Signature=EunuyzcgJZcDS7wr5rjYK4dlb3JQjahPAIhO1Tq4Z7S3PqDhNcl3GSMMU3vFYHcpI~zu~7qSTpBQqRag3CbidoiIvKK0uEFjBNJQCBh7RbGdCdHLJqX-34x9N269O-nFokk6VL7PVj6RxgucSkvt6gWDTG68-njnGWXqH-N2v0JoHsaHTgD5T7hMMZDK7MqY0kIZRM~l8Umpp9BW94gzzbL6GeiGtwUWHGQNLZILMeFg97SwtjABD6ntDfFB-yoPkPiI57HpmJ0bOT8wHObjZ4DFqq2WVaOOPSgiT6O0t26~Wh7OMaEtaV1atZbZBZn~juHgMxk5~xQY4RlDHp~TIQ__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_25_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 25,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/125/image/image.jpg?Expires=1760506701&Signature=EunuyzcgJZcDS7wr5rjYK4dlb3JQjahPAIhO1Tq4Z7S3PqDhNcl3GSMMU3vFYHcpI~zu~7qSTpBQqRag3CbidoiIvKK0uEFjBNJQCBh7RbGdCdHLJqX-34x9N269O-nFokk6VL7PVj6RxgucSkvt6gWDTG68-njnGWXqH-N2v0JoHsaHTgD5T7hMMZDK7MqY0kIZRM~l8Umpp9BW94gzzbL6GeiGtwUWHGQNLZILMeFg97SwtjABD6ntDfFB-yoPkPiI57HpmJ0bOT8wHObjZ4DFqq2WVaOOPSgiT6O0t26~Wh7OMaEtaV1atZbZBZn~juHgMxk5~xQY4RlDHp~TIQ__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/126/image/image.jpg?Expires=1760506701&Signature=N3-OIf26rUG1X4bDSL-Z0LPxgBgJ54WVagF~04DyR9iMErYpBwsabf4eo1JpbNhUZMvvglt5F6LJEj3we5x2De4GS3HhjeVHtQtQ~geXuDVXR9l3l7voFePeKa7tEtNCG47K9g6sZC7eCNMs7sge4f1boCVV6QLm6a57Zam8nPRMhTAvDZ9YWQJ2deR84XhnMAvMCe72wxPek1AcVCvyu41fXnWULrVaXvO3FI1BJq9soP6xg8nRyGP9ZGU6fdN7lwnkYRusFuNQZs1hQ78uOzMxsprC7ISnPDdel9EzK9~Ydnck6j6Ld0HImYcxd4lH3IoITQqitvvk4fbXpz8O9Q__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_26_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 26,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/126/image/image.jpg?Expires=1760506701&Signature=N3-OIf26rUG1X4bDSL-Z0LPxgBgJ54WVagF~04DyR9iMErYpBwsabf4eo1JpbNhUZMvvglt5F6LJEj3we5x2De4GS3HhjeVHtQtQ~geXuDVXR9l3l7voFePeKa7tEtNCG47K9g6sZC7eCNMs7sge4f1boCVV6QLm6a57Zam8nPRMhTAvDZ9YWQJ2deR84XhnMAvMCe72wxPek1AcVCvyu41fXnWULrVaXvO3FI1BJq9soP6xg8nRyGP9ZGU6fdN7lwnkYRusFuNQZs1hQ78uOzMxsprC7ISnPDdel9EzK9~Ydnck6j6Ld0HImYcxd4lH3IoITQqitvvk4fbXpz8O9Q__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/127/image/image.jpg?Expires=1760506701&Signature=zkNJ9Ymu5ViXCr5g9VKF~sjeAg3lWDjP~PyNeSCVM-0NC-0PMHilqm2orREXwUKTqduSb68UIcJR0KRgdbWDSbKSiU8zFFZIhQYW5cfRokHNC5v3Ht8OH2O1vpJ~zF-D4WloJgOqosrEtYMtUMWMI2bejEhhULJBZ6mnqySjceQdQp2Sq-Hyur9hrItKFEbNerVFpKoJ0zpudGaaS~-5KU1Hsn2TGqxhUnPDUgIj94Y8LOnetypHFVsX4EGzIuOftLjGQaG9DRIkjCPC70CiWEYMmULSJdkkj0xmR9d7jhl~71rllyh2sdW7K4RoV3uXJbNdiDoMDjI1urKslWVBQw__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_27_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 27,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/127/image/image.jpg?Expires=1760506701&Signature=zkNJ9Ymu5ViXCr5g9VKF~sjeAg3lWDjP~PyNeSCVM-0NC-0PMHilqm2orREXwUKTqduSb68UIcJR0KRgdbWDSbKSiU8zFFZIhQYW5cfRokHNC5v3Ht8OH2O1vpJ~zF-D4WloJgOqosrEtYMtUMWMI2bejEhhULJBZ6mnqySjceQdQp2Sq-Hyur9hrItKFEbNerVFpKoJ0zpudGaaS~-5KU1Hsn2TGqxhUnPDUgIj94Y8LOnetypHFVsX4EGzIuOftLjGQaG9DRIkjCPC70CiWEYMmULSJdkkj0xmR9d7jhl~71rllyh2sdW7K4RoV3uXJbNdiDoMDjI1urKslWVBQw__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/128/image/image.jpg?Expires=1760506701&Signature=f1yD9aMLCYoEoMY3zNjFQ0oRqVbcCplF5EGfihKOh8fmjgh1YSbqQfRmqJJy2Zj~woxizcnHg5LCr9mEnotlHxMBCDJyiARrQm-rQ-cE8bSoSWncURklRYQShhN38Uu-EFe55BCLnRjMteXt806Z2VeSpkFkGrep6zcKWehhXUPtLbEwnVuNB8M8oZm90xRyMT1KC8Gq4dcJzQRbcTB7wet3RK23tD7M06TNmzVZ6ao~~iUVo-QdJhMbsJbDuN3pOXmYf3orOiWhXt~SDcHDXZ2HtzS6IkZTxRjTxha4e~S30J36G8zi1x6cFYAPOkf7j3EdiQWlATOi3VIAxwcb7A__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_28_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 28,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/128/image/image.jpg?Expires=1760506701&Signature=f1yD9aMLCYoEoMY3zNjFQ0oRqVbcCplF5EGfihKOh8fmjgh1YSbqQfRmqJJy2Zj~woxizcnHg5LCr9mEnotlHxMBCDJyiARrQm-rQ-cE8bSoSWncURklRYQShhN38Uu-EFe55BCLnRjMteXt806Z2VeSpkFkGrep6zcKWehhXUPtLbEwnVuNB8M8oZm90xRyMT1KC8Gq4dcJzQRbcTB7wet3RK23tD7M06TNmzVZ6ao~~iUVo-QdJhMbsJbDuN3pOXmYf3orOiWhXt~SDcHDXZ2HtzS6IkZTxRjTxha4e~S30J36G8zi1x6cFYAPOkf7j3EdiQWlATOi3VIAxwcb7A__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/129/image/image.jpg?Expires=1760506701&Signature=PEdysVSE6tPx4FEEZRggGoqbuu5TdrvmD5bklveHEGBLtBMOI0Umvi~3vrCOTBrqfKc7Z8hnCXVGU1tB0YWkG5kOY0EbOhejZvh7tNpVN~91w5LRUTGsnhIup~tbpkUOVr9T6LawHF7~ZAKrogXa6A83jjXKfAOvJoNl8e0xRzGUuJvxU6z8CBk40NvFPkExUjFpBU15h6-60-rKIdGSf-lv~GfzLF75ll~JTp08ec-pYC4FYm2imsLMgUSmqm4XOyiN8yjA91YiPKTrInr2RtvqsfDNJMKuzn0dzxWUXweXuJ--mAhm5Ct1kPuQpPVbx5QdeRcsH4eXQzH9ymPLig__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_29_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 29,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/129/image/image.jpg?Expires=1760506701&Signature=PEdysVSE6tPx4FEEZRggGoqbuu5TdrvmD5bklveHEGBLtBMOI0Umvi~3vrCOTBrqfKc7Z8hnCXVGU1tB0YWkG5kOY0EbOhejZvh7tNpVN~91w5LRUTGsnhIup~tbpkUOVr9T6LawHF7~ZAKrogXa6A83jjXKfAOvJoNl8e0xRzGUuJvxU6z8CBk40NvFPkExUjFpBU15h6-60-rKIdGSf-lv~GfzLF75ll~JTp08ec-pYC4FYm2imsLMgUSmqm4XOyiN8yjA91YiPKTrInr2RtvqsfDNJMKuzn0dzxWUXweXuJ--mAhm5Ct1kPuQpPVbx5QdeRcsH4eXQzH9ymPLig__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/130/image/image.jpg?Expires=1760506701&Signature=WcYt6B2A1MadBsXzYm4nrPSCBTP3iwmpgIdY5-g9EqKRx5-kk2-ham1xplu-OBco3sjW-axfAKwC6Tzqx-XhsDjR0W5XXVTG96qn1ZWiJh4qdmvuWYG9MiUFiJO0cKs1fKPkFm915Sz5nyrUnDV46lvhWsfVaJKSKgIChX20Csq5Z~SV7WQPsEPr2nJ2J6qKfTB~xrOwG3m9cbadsI9iv4HlCbVSa-Zn0dUwc3Y~DVh3oHKEtt2IrkxWB0Vs8fhBex6yG4OLQ9YtrGumJUiGrptyIx-IX133vi8v-tpEjoyJAdpZ7NIl4BCRQRXrHurbC~wZWS-YQzPI2Dr5biimrA__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_30_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 30,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/130/image/image.jpg?Expires=1760506701&Signature=WcYt6B2A1MadBsXzYm4nrPSCBTP3iwmpgIdY5-g9EqKRx5-kk2-ham1xplu-OBco3sjW-axfAKwC6Tzqx-XhsDjR0W5XXVTG96qn1ZWiJh4qdmvuWYG9MiUFiJO0cKs1fKPkFm915Sz5nyrUnDV46lvhWsfVaJKSKgIChX20Csq5Z~SV7WQPsEPr2nJ2J6qKfTB~xrOwG3m9cbadsI9iv4HlCbVSa-Zn0dUwc3Y~DVh3oHKEtt2IrkxWB0Vs8fhBex6yG4OLQ9YtrGumJUiGrptyIx-IX133vi8v-tpEjoyJAdpZ7NIl4BCRQRXrHurbC~wZWS-YQzPI2Dr5biimrA__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/131/image/image.jpg?Expires=1760506701&Signature=q2FUDFEPET7XxK~S6wC4QYLsLjtKpRkeByG4zdC1bae7V~sMhB~iizB564R-NCBAOLxhqxFkWchQZiDyJla8TyXKnNrEfFR0K1dhpBB41Nzl7Qde1MR157tad3wVATnpn3aQkiH9g9plCFQ06lpBa0mL1d0F8tIqbBa4qFhuxjgunVTRc3V~Ed6KOCGX6HfEjh6JB27rYnsfcrTFfkegpjPxKrvvfDxm8ZImUem0XJxQ2xE7h14EcMoCek3fb~QOd0LRPwZWTG9F9pawFtiKZ1Oda0gTowLIkGKw44YurxujtHfTPxV6CpJhVrH22v1kmib0jN41FWBDtf2RHJOSfw__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_31_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 31,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/131/image/image.jpg?Expires=1760506701&Signature=q2FUDFEPET7XxK~S6wC4QYLsLjtKpRkeByG4zdC1bae7V~sMhB~iizB564R-NCBAOLxhqxFkWchQZiDyJla8TyXKnNrEfFR0K1dhpBB41Nzl7Qde1MR157tad3wVATnpn3aQkiH9g9plCFQ06lpBa0mL1d0F8tIqbBa4qFhuxjgunVTRc3V~Ed6KOCGX6HfEjh6JB27rYnsfcrTFfkegpjPxKrvvfDxm8ZImUem0XJxQ2xE7h14EcMoCek3fb~QOd0LRPwZWTG9F9pawFtiKZ1Oda0gTowLIkGKw44YurxujtHfTPxV6CpJhVrH22v1kmib0jN41FWBDtf2RHJOSfw__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/132/image/image.jpg?Expires=1760506701&Signature=ixtuuEjjCtO4N~3U2Ld6-rhm3gaNXrDB3eT5rjmYhiYaFCPwuZBx70DtTYSJNZIDqh2YgypRRSjy~puI12peXyGk2B8AGpWIfKUfkEH4pN6URitduuJrUJ1Eh2XVHrbPcaUP1jP95kbFYSyHGZJ1YtQn3-yzH44R9m0MQ58jkWx87qz4ydUB0pjRkU3f4yg~X9pVYA0gXqRRXVKXEqRd-oudtyOs4E3XKbDOnMBKVQF1qtNB5xknrc7Xzvi~0RZXfKXgjDuf5oytQQmRtlzrNMTq13KAGe59ggOVrQIT4lVpj-eA8rsA4SfhFNg2kZYP~UpwCfaSgllMhBufUmj9iA__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_32_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 32,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/132/image/image.jpg?Expires=1760506701&Signature=ixtuuEjjCtO4N~3U2Ld6-rhm3gaNXrDB3eT5rjmYhiYaFCPwuZBx70DtTYSJNZIDqh2YgypRRSjy~puI12peXyGk2B8AGpWIfKUfkEH4pN6URitduuJrUJ1Eh2XVHrbPcaUP1jP95kbFYSyHGZJ1YtQn3-yzH44R9m0MQ58jkWx87qz4ydUB0pjRkU3f4yg~X9pVYA0gXqRRXVKXEqRd-oudtyOs4E3XKbDOnMBKVQF1qtNB5xknrc7Xzvi~0RZXfKXgjDuf5oytQQmRtlzrNMTq13KAGe59ggOVrQIT4lVpj-eA8rsA4SfhFNg2kZYP~UpwCfaSgllMhBufUmj9iA__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/133/image/image.jpg?Expires=1760506701&Signature=pX7q0GFgVeBeWNabuzmYsFREcYbas2Sz8QSfHkEl5L~qRMGXkaPqRktsB0ZrJD4Y5qdEGMmLLC5Qz9Szvq2RFf74u3eqzClm8kU3JS2ioOsMKQa6AbVuvqbItuVQJjLuJwXEuLl1X7DvDPqEzIMDrfnMdTtk-Nbk56OIecLu3OXd3xhNd41sKEgC~c5Gx1WtZ-H0ecEsoFivbFLCjqONCYaEbrIuwO06lTX3xGskqyQc3tv9comZ~ECJEpQXJqC4FTdDOhVx1-pLfp7KpfduICGn1ncz7wZiAKMd0woG9qZDITp5890D1AeXbQuxihIC~pj1zVirElKg733ofXd6CQ__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_33_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 33,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/133/image/image.jpg?Expires=1760506701&Signature=pX7q0GFgVeBeWNabuzmYsFREcYbas2Sz8QSfHkEl5L~qRMGXkaPqRktsB0ZrJD4Y5qdEGMmLLC5Qz9Szvq2RFf74u3eqzClm8kU3JS2ioOsMKQa6AbVuvqbItuVQJjLuJwXEuLl1X7DvDPqEzIMDrfnMdTtk-Nbk56OIecLu3OXd3xhNd41sKEgC~c5Gx1WtZ-H0ecEsoFivbFLCjqONCYaEbrIuwO06lTX3xGskqyQc3tv9comZ~ECJEpQXJqC4FTdDOhVx1-pLfp7KpfduICGn1ncz7wZiAKMd0woG9qZDITp5890D1AeXbQuxihIC~pj1zVirElKg733ofXd6CQ__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/134/image/image.jpg?Expires=1760506701&Signature=PXTtZtEaGETn6PCGEMdTuq8~diECc6nvpLAVKG~AZJy7H2OiWdOrmjo2xP1gWAul~2ExB0b5WD-voXnfZeH-xu49N-V195BCGeq8jCpAOxaQ6v-h8EcqZN5-HIagRotTZ5Vbr0qoZF03g3~b1BpSEkdmi8bp1YN-QBugQV3VHBwiUX2TVScRg-DqF7nQeVt1Tow7Kcxpzvbxihce~hOiz0SQPGoCsMI1bP1qOGmqaSrlv~Sp9mAPiZUhUp0leyVlSD1kzAZ7Vnw46JxAxz-cUIZ01yqEYjcK50ZWTzqKLRiWUeG4XS6zr2JskWILAOH15xkv6gor8lkLaxTXCy17Yg__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_34_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 34,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/134/image/image.jpg?Expires=1760506701&Signature=PXTtZtEaGETn6PCGEMdTuq8~diECc6nvpLAVKG~AZJy7H2OiWdOrmjo2xP1gWAul~2ExB0b5WD-voXnfZeH-xu49N-V195BCGeq8jCpAOxaQ6v-h8EcqZN5-HIagRotTZ5Vbr0qoZF03g3~b1BpSEkdmi8bp1YN-QBugQV3VHBwiUX2TVScRg-DqF7nQeVt1Tow7Kcxpzvbxihce~hOiz0SQPGoCsMI1bP1qOGmqaSrlv~Sp9mAPiZUhUp0leyVlSD1kzAZ7Vnw46JxAxz-cUIZ01yqEYjcK50ZWTzqKLRiWUeG4XS6zr2JskWILAOH15xkv6gor8lkLaxTXCy17Yg__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/135/image/image.jpg?Expires=1760506701&Signature=ZQx6mEmBB38BlobVjQyAcN3q-6WjT0lVSXLThlUBRE-xZw4ys6kz4nXtpTlbsZCLv8pqTVD3OJojd3mU5QMEbZPl1ZbP2WMXk4JdEYOCHP-jLnToKldiqEwF~LI3RepdLM5YCwyhS5DPxCXnrqDy89Me-5nrYexN0pAyTUQlMzosHWnwtXFUBGhUFGjOTsfSLDEnRBDtKKqy3aSEUg4BgtwNUZkoTz1vPiRItvKhYm4tnwVO2CmosAYXqhhSsuUTLnSZVxyUYrf3Y3jBss8cBa~eqfya8wVplxNU-gDQWtF60bwjDIaa2S4Z401G6pNmjGASPC4~uz1sCuQHfjkHHw__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_35_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 35,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/135/image/image.jpg?Expires=1760506701&Signature=ZQx6mEmBB38BlobVjQyAcN3q-6WjT0lVSXLThlUBRE-xZw4ys6kz4nXtpTlbsZCLv8pqTVD3OJojd3mU5QMEbZPl1ZbP2WMXk4JdEYOCHP-jLnToKldiqEwF~LI3RepdLM5YCwyhS5DPxCXnrqDy89Me-5nrYexN0pAyTUQlMzosHWnwtXFUBGhUFGjOTsfSLDEnRBDtKKqy3aSEUg4BgtwNUZkoTz1vPiRItvKhYm4tnwVO2CmosAYXqhhSsuUTLnSZVxyUYrf3Y3jBss8cBa~eqfya8wVplxNU-gDQWtF60bwjDIaa2S4Z401G6pNmjGASPC4~uz1sCuQHfjkHHw__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/136/image/image.jpg?Expires=1760506701&Signature=y8LK6HaAnRSx5M7pve6MijowMTFZSBJaBTWsHXGVEkBBtaQvhGbxLRBdEUNP0TuQ-tTSo8LvmHts0If6VgExXylf8K4fvwQum5k2xXJ1ZNc0O0c1OQe2gKUvm3AnCyLCmF-xOEFAK60-oehzBrroKKkkD4vxS95MD~evNeBaQ3JxGv4GdO3HT-C~NSsutH5VaCe2PqzB1KRQbHLE5A3mGKjeT~I8-OJGctW0yi7B4NCxAsbh0dSuEV~-twMCnP2eKbNa~MJZy5g7U9N0SJhrHoOUgS4kX7aWdDrnoR7d54PT6Sjn6BA9ypkn99o5itST9myhxE~l3sg47AbFyxBHeA__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_36_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 36,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/136/image/image.jpg?Expires=1760506701&Signature=y8LK6HaAnRSx5M7pve6MijowMTFZSBJaBTWsHXGVEkBBtaQvhGbxLRBdEUNP0TuQ-tTSo8LvmHts0If6VgExXylf8K4fvwQum5k2xXJ1ZNc0O0c1OQe2gKUvm3AnCyLCmF-xOEFAK60-oehzBrroKKkkD4vxS95MD~evNeBaQ3JxGv4GdO3HT-C~NSsutH5VaCe2PqzB1KRQbHLE5A3mGKjeT~I8-OJGctW0yi7B4NCxAsbh0dSuEV~-twMCnP2eKbNa~MJZy5g7U9N0SJhrHoOUgS4kX7aWdDrnoR7d54PT6Sjn6BA9ypkn99o5itST9myhxE~l3sg47AbFyxBHeA__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/137/image/image.jpg?Expires=1760506701&Signature=el4Nw50y6mSnHLfZtvRNnYt~~eAvSlx5HPOJjA7OBKMEjn3-dGGDqtROCZcDcYgANngVv3r9rK1QgqlM8krx1YUXSUKKzs6jOvbgMzZ3kBy2prq0Q0px~3eM3lMHiI0SOu6Djq9DbhekaWHyfQPnrKa3N~C-wPWpJH1lNWKbw-wtEiomIRWLeQNLPSQzt~ZOXNDr0kOEm-tutPGIOjCR9Nk9Fxkk6CeSmR43vqcQOli9izDCOM9wtSEi7D2D1lYCiiczv-HH-8OIf~tmZIPnCaIPnWqA63L9lIkY3L8pbA4KtWVsZelkmoKRYdSiqgfQjnHQwVdLjlAQDXnuvDrPXQ__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_37_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 37,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/137/image/image.jpg?Expires=1760506701&Signature=el4Nw50y6mSnHLfZtvRNnYt~~eAvSlx5HPOJjA7OBKMEjn3-dGGDqtROCZcDcYgANngVv3r9rK1QgqlM8krx1YUXSUKKzs6jOvbgMzZ3kBy2prq0Q0px~3eM3lMHiI0SOu6Djq9DbhekaWHyfQPnrKa3N~C-wPWpJH1lNWKbw-wtEiomIRWLeQNLPSQzt~ZOXNDr0kOEm-tutPGIOjCR9Nk9Fxkk6CeSmR43vqcQOli9izDCOM9wtSEi7D2D1lYCiiczv-HH-8OIf~tmZIPnCaIPnWqA63L9lIkY3L8pbA4KtWVsZelkmoKRYdSiqgfQjnHQwVdLjlAQDXnuvDrPXQ__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/138/image/image.jpg?Expires=1760506701&Signature=EZWCaZNx-rIy2alU7HWSGZFnyGx5tbGKsCiMt675WJFRr0Nh1bKiL1yYnGDiyeXv2oGs1exKeuZvJuqIys0FvJWjIgOMQbZfD~e9ZtuIrc3qkXhzoIF5zCnl1ui1Slbmg2dDdco65tkBNnkgp-BnGo6hys-JChfkcmOyEsG1jC0ecSdgg6aFRkwedeAYdo5r3GAJ4NSf9pOaa1NmL86eQrvhUzi2NR8g82adot0px9COSSgMQ4onRQ4Z757KPWQ7fr7sGLC5yYRC3O1gV5ljvLZIyqsQy3QyZqtuP-T5Z0-ZhNcJbXcLLaY-FJw0kzBMNOg5EZz~Cy97NvASDskMlg__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_38_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 38,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/138/image/image.jpg?Expires=1760506701&Signature=EZWCaZNx-rIy2alU7HWSGZFnyGx5tbGKsCiMt675WJFRr0Nh1bKiL1yYnGDiyeXv2oGs1exKeuZvJuqIys0FvJWjIgOMQbZfD~e9ZtuIrc3qkXhzoIF5zCnl1ui1Slbmg2dDdco65tkBNnkgp-BnGo6hys-JChfkcmOyEsG1jC0ecSdgg6aFRkwedeAYdo5r3GAJ4NSf9pOaa1NmL86eQrvhUzi2NR8g82adot0px9COSSgMQ4onRQ4Z757KPWQ7fr7sGLC5yYRC3O1gV5ljvLZIyqsQy3QyZqtuP-T5Z0-ZhNcJbXcLLaY-FJw0kzBMNOg5EZz~Cy97NvASDskMlg__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/139/image/image.jpg?Expires=1760506701&Signature=ygZKxg9OtD1TeYtr0P48W4yGmxKZmRZS5l6ELhjR8KQbRJ64Us7wU4zRYKE0UzLC6cQVZub4wfCzdui9jaAfw-bI3bMkMQ-3oRipfQrU5O98uhaj3kH2hva5qHxbF1X68xMp0LIN7koZYGx1M6YfxmNnmGVgoeV-hgU9JURmEGv8JGYBX5Dw6HRYSd5lnKlR7jo5J4PjlFv-6NUis7dGzwdpKMVCkLjcsqq8zAvfIjKjgwPOfE9CuzX6Layyv40gc1D7jDBr7CQQy8xgmr8Zia-O~K8Lcr7ugqRTzS7IwwBWL6HcsLqVlEq86x3mH1h5OncUw0y9Aci19U4v3aI-Ww__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_39_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 39,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/139/image/image.jpg?Expires=1760506701&Signature=ygZKxg9OtD1TeYtr0P48W4yGmxKZmRZS5l6ELhjR8KQbRJ64Us7wU4zRYKE0UzLC6cQVZub4wfCzdui9jaAfw-bI3bMkMQ-3oRipfQrU5O98uhaj3kH2hva5qHxbF1X68xMp0LIN7koZYGx1M6YfxmNnmGVgoeV-hgU9JURmEGv8JGYBX5Dw6HRYSd5lnKlR7jo5J4PjlFv-6NUis7dGzwdpKMVCkLjcsqq8zAvfIjKjgwPOfE9CuzX6Layyv40gc1D7jDBr7CQQy8xgmr8Zia-O~K8Lcr7ugqRTzS7IwwBWL6HcsLqVlEq86x3mH1h5OncUw0y9Aci19U4v3aI-Ww__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/140/image/image.jpg?Expires=1760506701&Signature=gQnDQAhN2UPj8IJM5pD88LhJXbINj4JSTYIi81M41SsC-1JCjqUH47hcqcsAcHhPNGSzf4MA4LO219rn1gfWFhlBv~JrhOb4aHobytd-L0pZrFqOBn9qZZBC-UlpBLEKGawOQmLPGBprZ3neRd6BFp9CYa1bmqvE~NWCOq2xNVAfGCWBdTv1n3CdLxn5L~fOobur16k8bK80hrZfXQqSDbWF2Uz8LcJK4xboZCLdrBazJmVx7vGwPit~3-2goHfPM3ENZydy6-Ctz9fY11bUl3ryr3f2iuZklHpOYowf44yyACWjLGWilXl4pzWkdfxnqLvv5Y6i7vJNxtNFzVsyzw__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_40_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 40,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/140/image/image.jpg?Expires=1760506701&Signature=gQnDQAhN2UPj8IJM5pD88LhJXbINj4JSTYIi81M41SsC-1JCjqUH47hcqcsAcHhPNGSzf4MA4LO219rn1gfWFhlBv~JrhOb4aHobytd-L0pZrFqOBn9qZZBC-UlpBLEKGawOQmLPGBprZ3neRd6BFp9CYa1bmqvE~NWCOq2xNVAfGCWBdTv1n3CdLxn5L~fOobur16k8bK80hrZfXQqSDbWF2Uz8LcJK4xboZCLdrBazJmVx7vGwPit~3-2goHfPM3ENZydy6-Ctz9fY11bUl3ryr3f2iuZklHpOYowf44yyACWjLGWilXl4pzWkdfxnqLvv5Y6i7vJNxtNFzVsyzw__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/141/image/image.jpg?Expires=1760506701&Signature=HUrQ4-xOHsK89F1ADQRj1XjgWLL-qDtWjebBESTba4JnVjUIuzNrqn1RIUOQe~c1jemtbsiI19~LfN3kUVtJ~gXYdXWLIODSFC~LczU-8obGdtnx1V0cQI6HdMaSQxPB5fDfHvxjDNapSUhhy3qfRiMnI94-N2dWlOsMkZwyxaBc6XDlSifIvpaj4tc2c5qV9bp8RH-5NCAMX2hfVaiTda1Cgm6aCjdT-zj5956Lfg8PIYnH1bZ3E6GPIbG0Hk6967-ALh7ws0HtpuwRggHpor2fL-nuF~HzfGkTPaWT4SnryPUR9xovowMazkZn40qRt82oaIMUsrARDM2FVkRZLQ__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_41_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 41,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/141/image/image.jpg?Expires=1760506701&Signature=HUrQ4-xOHsK89F1ADQRj1XjgWLL-qDtWjebBESTba4JnVjUIuzNrqn1RIUOQe~c1jemtbsiI19~LfN3kUVtJ~gXYdXWLIODSFC~LczU-8obGdtnx1V0cQI6HdMaSQxPB5fDfHvxjDNapSUhhy3qfRiMnI94-N2dWlOsMkZwyxaBc6XDlSifIvpaj4tc2c5qV9bp8RH-5NCAMX2hfVaiTda1Cgm6aCjdT-zj5956Lfg8PIYnH1bZ3E6GPIbG0Hk6967-ALh7ws0HtpuwRggHpor2fL-nuF~HzfGkTPaWT4SnryPUR9xovowMazkZn40qRt82oaIMUsrARDM2FVkRZLQ__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/142/image/image.jpg?Expires=1760506701&Signature=WeDLyjKngvNzi7dWNRq8~8swmpHyTWlnu4bZTvSs3klfO62sLxn1mHRzpsP7~jLMSr1n-g0iXZk13pvAOOWBNsjK0Zs2fzfr-8V94SDHbPQNrne3sdbH~Q4qBWfvK8zVHlJjWnaEfIyyWs7Jt1CM7-mgJcDhXdm2lnRRMCxtv4mAP-6t1PKhscdvFCN38WqvTXlgt1ynGFJGJMFe2ejYyZlnYjBgGF5cA8fsYgjD3g3JEKE7FQL4bH00EXFxpie7lG5ENaqXW722d2ZZ7EfGJVHaGb9fW-qVQG6SsJgqUfU~JxVh2i97ZI7ZMnA565ebhMYSe985XckfMAP~23V52Q__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_42_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 42,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/142/image/image.jpg?Expires=1760506701&Signature=WeDLyjKngvNzi7dWNRq8~8swmpHyTWlnu4bZTvSs3klfO62sLxn1mHRzpsP7~jLMSr1n-g0iXZk13pvAOOWBNsjK0Zs2fzfr-8V94SDHbPQNrne3sdbH~Q4qBWfvK8zVHlJjWnaEfIyyWs7Jt1CM7-mgJcDhXdm2lnRRMCxtv4mAP-6t1PKhscdvFCN38WqvTXlgt1ynGFJGJMFe2ejYyZlnYjBgGF5cA8fsYgjD3g3JEKE7FQL4bH00EXFxpie7lG5ENaqXW722d2ZZ7EfGJVHaGb9fW-qVQG6SsJgqUfU~JxVh2i97ZI7ZMnA565ebhMYSe985XckfMAP~23V52Q__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/143/image/image.jpg?Expires=1760506701&Signature=sisWJ8UN3E3Ql84zZ5V1tHVKyBzip4Y66F-DJ6-JMsNAWVsbd3uCiYxG3fwzXnW-Bj8FST5TAs08pHyw3YWip3vNTtXOtHayHI6mkfT7dX3TWvIecMWzBmPtpNVH3Eb7~vdrxwvjIOn9Lf45gj9dzzwy6mq0G8Dt8LTUHOAjJGA3bA-6E2D37bb6F107OpqsQCKRDzcoIJyFQq-acogmItb334f2Fqwbd6FIFI~l07RjGsrAkbNqYgSbReCYaDODqQd93VI6omCH-i21kdx70kPBrTn-i6DjVskFduQZ1ykYHYbNAffH6xqqfk8JAEwlEeLFYxArnUQ2aYtK-Vg5QA__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_43_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 43,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/143/image/image.jpg?Expires=1760506701&Signature=sisWJ8UN3E3Ql84zZ5V1tHVKyBzip4Y66F-DJ6-JMsNAWVsbd3uCiYxG3fwzXnW-Bj8FST5TAs08pHyw3YWip3vNTtXOtHayHI6mkfT7dX3TWvIecMWzBmPtpNVH3Eb7~vdrxwvjIOn9Lf45gj9dzzwy6mq0G8Dt8LTUHOAjJGA3bA-6E2D37bb6F107OpqsQCKRDzcoIJyFQq-acogmItb334f2Fqwbd6FIFI~l07RjGsrAkbNqYgSbReCYaDODqQd93VI6omCH-i21kdx70kPBrTn-i6DjVskFduQZ1ykYHYbNAffH6xqqfk8JAEwlEeLFYxArnUQ2aYtK-Vg5QA__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/144/image/image.jpg?Expires=1760506701&Signature=l3H3dPgCzkRlNDFzeDsCrfZx~iqdbEpJv0z22FmPGTpzaAoGy~ZL31LQnNilxR1WjQG0dBdRBsY8ggaRpQMx1Mkbq5~0JE3m86uiLhwY96R9zQ3c-OxxcHQoCLNZ~lRXrecOHoW9O3VfcGvY3OmnteoauZtiEb01zoLWzREn2QetKjNB8zfwCxHmcI6OvSH1ALJZyzxYm-PauIYHlVmIvnMQ0jwyuG2R3d57rPmC02o3cMaDx~HOSK5z9HCkrAiAdBO1vyFTkv~UKWJAZ5Z6RaKzIYV0gNJwRka2TwJ8UuI0-TtcWu2f-w6yHGuiwEoZX8TOkh4km~apVgXdfAZsUg__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_44_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 44,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/144/image/image.jpg?Expires=1760506701&Signature=l3H3dPgCzkRlNDFzeDsCrfZx~iqdbEpJv0z22FmPGTpzaAoGy~ZL31LQnNilxR1WjQG0dBdRBsY8ggaRpQMx1Mkbq5~0JE3m86uiLhwY96R9zQ3c-OxxcHQoCLNZ~lRXrecOHoW9O3VfcGvY3OmnteoauZtiEb01zoLWzREn2QetKjNB8zfwCxHmcI6OvSH1ALJZyzxYm-PauIYHlVmIvnMQ0jwyuG2R3d57rPmC02o3cMaDx~HOSK5z9HCkrAiAdBO1vyFTkv~UKWJAZ5Z6RaKzIYV0gNJwRka2TwJ8UuI0-TtcWu2f-w6yHGuiwEoZX8TOkh4km~apVgXdfAZsUg__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/145/image/image.jpg?Expires=1760506701&Signature=KkHlfyM5WooXpyBoSFbCPH1JpcKgqwCnbEi1SVP0kNBcetac8N0tIuRuCYxZxhxHfC2pVAeuBxKCZ7uLCHjlwfMvwOhgKIxwYk6VjPQTJ4SCDflFjfLUOy6nCkFl9U1XAvYHulo~IQRKDT--6PR~FNzFyKEEYnuuKyJKtKa8lMD7TQb1o5bhRLYxAZtDqUUpMKXyJB4azvMfW2ujvy8cJxB-XXYgxEElDxVmoVtJLyvYB7ahYflDSgjPPLYhTpSeEu6fFQlewdLT5OKMVfH8eTypPyKP9XyEG8LRxWTHxwiQ53gqjHZCNKEjU8YgmcTuXehhARi0gAxU0qudF707BA__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_45_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 45,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/145/image/image.jpg?Expires=1760506701&Signature=KkHlfyM5WooXpyBoSFbCPH1JpcKgqwCnbEi1SVP0kNBcetac8N0tIuRuCYxZxhxHfC2pVAeuBxKCZ7uLCHjlwfMvwOhgKIxwYk6VjPQTJ4SCDflFjfLUOy6nCkFl9U1XAvYHulo~IQRKDT--6PR~FNzFyKEEYnuuKyJKtKa8lMD7TQb1o5bhRLYxAZtDqUUpMKXyJB4azvMfW2ujvy8cJxB-XXYgxEElDxVmoVtJLyvYB7ahYflDSgjPPLYhTpSeEu6fFQlewdLT5OKMVfH8eTypPyKP9XyEG8LRxWTHxwiQ53gqjHZCNKEjU8YgmcTuXehhARi0gAxU0qudF707BA__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/146/image/image.jpg?Expires=1760506701&Signature=S16zzWkEA4klCpOumnz-2mRkdoNxiSUL1DQNhlaN9uFXBHmwTHaD1hvSHHpudrRpQXgZxk0Buz7c5hyODiIbCAwZ-9q~10edgK-pGGrrLEC4RkKRiaGgaP~7GxQAjZFxIUbV5uhU6gzeoyIn2hsQs~mAwwIz-C-csWbuUx9PkvCbkkdV08dvMfyUaykoo~1bWm7E7gfk2izr2o-MhbMx3XZc7r3EpUbFbKHI0~bZf4unMeREsD4QuSbyCjTttv3BggJHpQXOJK7Ow1WUge1VGLvsUfrWiSSnzJFnnw5Tl3RgogeT98K7D4s8UN2Xr114xD6v78Ka734hfMopycvpDA__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_46_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 46,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/146/image/image.jpg?Expires=1760506701&Signature=S16zzWkEA4klCpOumnz-2mRkdoNxiSUL1DQNhlaN9uFXBHmwTHaD1hvSHHpudrRpQXgZxk0Buz7c5hyODiIbCAwZ-9q~10edgK-pGGrrLEC4RkKRiaGgaP~7GxQAjZFxIUbV5uhU6gzeoyIn2hsQs~mAwwIz-C-csWbuUx9PkvCbkkdV08dvMfyUaykoo~1bWm7E7gfk2izr2o-MhbMx3XZc7r3EpUbFbKHI0~bZf4unMeREsD4QuSbyCjTttv3BggJHpQXOJK7Ow1WUge1VGLvsUfrWiSSnzJFnnw5Tl3RgogeT98K7D4s8UN2Xr114xD6v78Ka734hfMopycvpDA__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/147/image/image.jpg?Expires=1760506701&Signature=O8McqYO-wfVIjZdhi-xQRH8G-Ual5phfN5jU1y~BeqO9loP3rhtZZnMRZ-wCar2iIK0ar0pUcTSqq4V30d~1DVNra89GNpP569zZUy7w8s4sDw2i86-m2OWXnR6PAcR-shezQ1HqUXshHs3UP6jPOtLHo5TnuWdadDqbE04NLoS0JN4~41UmyShgZygeK8uGs10JKejQq8UxFKsZV6EvsQrnbLxsu1elp~9WV4NvHllLTYMlnogvJb8PDOYINasV-itQakyuq~6M9r0seMhsSlx1sBnaXExYlooaIVUDBFj2rSgGHhA1viXCTuocl84MqzPr6Jvj3PXb~lqwtal0Xg__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_47_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 47,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/147/image/image.jpg?Expires=1760506701&Signature=O8McqYO-wfVIjZdhi-xQRH8G-Ual5phfN5jU1y~BeqO9loP3rhtZZnMRZ-wCar2iIK0ar0pUcTSqq4V30d~1DVNra89GNpP569zZUy7w8s4sDw2i86-m2OWXnR6PAcR-shezQ1HqUXshHs3UP6jPOtLHo5TnuWdadDqbE04NLoS0JN4~41UmyShgZygeK8uGs10JKejQq8UxFKsZV6EvsQrnbLxsu1elp~9WV4NvHllLTYMlnogvJb8PDOYINasV-itQakyuq~6M9r0seMhsSlx1sBnaXExYlooaIVUDBFj2rSgGHhA1viXCTuocl84MqzPr6Jvj3PXb~lqwtal0Xg__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/148/image/image.jpg?Expires=1760506701&Signature=OOzXKbrbayBBC8EAKaH3cH8Zj4mGDNRrx-n88VP1yxOeqTSg99fcTuZb~KCjoraI1-xoWsDx1prRA7mqO3NcUl-MmHDi~PtFf08lcJwYH7Yi52Zud7kbrLOBvkk5WCeP99EyT3N1bhAVSHoebTqsP~fMNRwpH9urtghingyhuw4UGc~4C1o20Qagkax8z2MOI2LQtI5ulwkUJ2EEcvuPdh6JPyEVKMgkoYLCw5Dsx-gi888~89f7eUbnLLuPI-7v-OgDoJ9wsRwT8SlaB2yu8kiXar0T~ssnYBCp2SGIHtdZNB1~~2gel7cS6reIsG7AksFomDS9opV8JZ01N8gZ7Q__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_48_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 48,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/148/image/image.jpg?Expires=1760506701&Signature=OOzXKbrbayBBC8EAKaH3cH8Zj4mGDNRrx-n88VP1yxOeqTSg99fcTuZb~KCjoraI1-xoWsDx1prRA7mqO3NcUl-MmHDi~PtFf08lcJwYH7Yi52Zud7kbrLOBvkk5WCeP99EyT3N1bhAVSHoebTqsP~fMNRwpH9urtghingyhuw4UGc~4C1o20Qagkax8z2MOI2LQtI5ulwkUJ2EEcvuPdh6JPyEVKMgkoYLCw5Dsx-gi888~89f7eUbnLLuPI-7v-OgDoJ9wsRwT8SlaB2yu8kiXar0T~ssnYBCp2SGIHtdZNB1~~2gel7cS6reIsG7AksFomDS9opV8JZ01N8gZ7Q__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/149/image/image.jpg?Expires=1760506701&Signature=hk-9ECY2u4PuJgcH1mEGCyb15em47LOAYYzHj1V0wIdHhsVznPgmbK1b3SaOgItaqJfCP2Nambl51RviwzFVEKi4Ku8EVAn89is1yrhgZQbL3PCofuZWwsOFsnjICkqAaZ29imcmFhEJEQZUw0Vnol0JOEeWbXL~nx1pyNvhrZ0zyDg7wQh3K5GSb4Dfkga3hpOkyzhR0M2AarxJV4B6GCYi9oOFPFwJt2tpfca66E03yGs7DS3nY8ZkTxq4nmWVfu2zIGRSehmJ-XR-gA63ZfA~zoNRkcNPMn6zEFTlVu56ZD85133lH6MwaoDVvJ3ztmP8Frt9R960McC2OCws3A__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_49_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 49,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/149/image/image.jpg?Expires=1760506701&Signature=hk-9ECY2u4PuJgcH1mEGCyb15em47LOAYYzHj1V0wIdHhsVznPgmbK1b3SaOgItaqJfCP2Nambl51RviwzFVEKi4Ku8EVAn89is1yrhgZQbL3PCofuZWwsOFsnjICkqAaZ29imcmFhEJEQZUw0Vnol0JOEeWbXL~nx1pyNvhrZ0zyDg7wQh3K5GSb4Dfkga3hpOkyzhR0M2AarxJV4B6GCYi9oOFPFwJt2tpfca66E03yGs7DS3nY8ZkTxq4nmWVfu2zIGRSehmJ-XR-gA63ZfA~zoNRkcNPMn6zEFTlVu56ZD85133lH6MwaoDVvJ3ztmP8Frt9R960McC2OCws3A__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/150/image/image.jpg?Expires=1760506701&Signature=sMnm8gaFe79RgN7l1LtPSOQseUss5KM0rK0L~eo0bcpCq-aiUulNPyArJOMHSVgKlsqcvK-XxjqZ9jk5~lDaIpHHO1yfDWMjzULVoMsE4Wc3v~iJ8MyctWdlGNCwNQopfb8kPE-Y2pICgycdI2aJMrUAabHLfE0weNiAxB~juXCZaLMtNa7mCQD218QXp01dewA3dG45VHWOQpMV0pcU0-VSOnYFD4Q5FvzrS9OBYmrfeC~BOfACfzpxdxTBBD6it0BZu8OyvWT7UP3acc~RKp477pFY7xgvbIVVo5DunMvzyXwCW1endQVhDJc0nV21H6QatYNtCYy4QIsvhi3wNw__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_50_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 50,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/150/image/image.jpg?Expires=1760506701&Signature=sMnm8gaFe79RgN7l1LtPSOQseUss5KM0rK0L~eo0bcpCq-aiUulNPyArJOMHSVgKlsqcvK-XxjqZ9jk5~lDaIpHHO1yfDWMjzULVoMsE4Wc3v~iJ8MyctWdlGNCwNQopfb8kPE-Y2pICgycdI2aJMrUAabHLfE0weNiAxB~juXCZaLMtNa7mCQD218QXp01dewA3dG45VHWOQpMV0pcU0-VSOnYFD4Q5FvzrS9OBYmrfeC~BOfACfzpxdxTBBD6it0BZu8OyvWT7UP3acc~RKp477pFY7xgvbIVVo5DunMvzyXwCW1endQVhDJc0nV21H6QatYNtCYy4QIsvhi3wNw__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/151/image/image.jpg?Expires=1760506701&Signature=PhNgRQcCCr82Sl8r~GNZ8AGBBG5wK~BaAzSf3sTF7MwZ5wDdyXg75lqAHAzNc9vmuCl2vQF4iH1YedBMEyqKbn7i-zgkMHx1zUy9~PfH8ZD40Qam73G7Y8lWaWSY92bXNxg7O9mo1CKvnOOatIR-TVwHdvwqZjAbU5R~3ld62uO77GXWsGwkpgUe8ICHHad8LP0U0lU9BTZIsNxNrgHIt5fO03yEzY2UzUYNwFjp4S6n15uwK6TzKGwbDKJ42Iw80mNKe0NMqH1JlNR1GIUMTVfWFtC~XQvR4rK6IDHAVWrxwKZ386--6BqRLY-UizXiA3TYWxAQ1qop1vIFo2BYxA__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_51_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 51,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/151/image/image.jpg?Expires=1760506701&Signature=PhNgRQcCCr82Sl8r~GNZ8AGBBG5wK~BaAzSf3sTF7MwZ5wDdyXg75lqAHAzNc9vmuCl2vQF4iH1YedBMEyqKbn7i-zgkMHx1zUy9~PfH8ZD40Qam73G7Y8lWaWSY92bXNxg7O9mo1CKvnOOatIR-TVwHdvwqZjAbU5R~3ld62uO77GXWsGwkpgUe8ICHHad8LP0U0lU9BTZIsNxNrgHIt5fO03yEzY2UzUYNwFjp4S6n15uwK6TzKGwbDKJ42Iw80mNKe0NMqH1JlNR1GIUMTVfWFtC~XQvR4rK6IDHAVWrxwKZ386--6BqRLY-UizXiA3TYWxAQ1qop1vIFo2BYxA__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/152/image/image.jpg?Expires=1760506701&Signature=IBIoO0J4dywcHafj~QEzMs8Bftm8PCz4cyrXU197mYNRXhRs0iq91rubtwxP88Bc72MBhODerNShIhB4Hi9Us3H1sKBkbjgF1~EG8QORyArJUdu5kx4LzmCZukJgoK1LMFsWGsyDrq2qIY9J6FMBYkzv0OzsOHx34ZAEox4ptree403zQDluIzoMEMt0WlAxHZLAptZeOO43u80gmYSP78pULEsHSIpLMJGEr9yhi1~yjVHQL9E1nhdsPY96XHqXEQmWWGXl~gjP9A3Xerhbo04iKymu1VUlUYHc6RyooIDFUPAdgF2saq3cmkb2np8VLGIxlK-uhktjhhPCFMkb7g__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_52_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 52,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/152/image/image.jpg?Expires=1760506701&Signature=IBIoO0J4dywcHafj~QEzMs8Bftm8PCz4cyrXU197mYNRXhRs0iq91rubtwxP88Bc72MBhODerNShIhB4Hi9Us3H1sKBkbjgF1~EG8QORyArJUdu5kx4LzmCZukJgoK1LMFsWGsyDrq2qIY9J6FMBYkzv0OzsOHx34ZAEox4ptree403zQDluIzoMEMt0WlAxHZLAptZeOO43u80gmYSP78pULEsHSIpLMJGEr9yhi1~yjVHQL9E1nhdsPY96XHqXEQmWWGXl~gjP9A3Xerhbo04iKymu1VUlUYHc6RyooIDFUPAdgF2saq3cmkb2np8VLGIxlK-uhktjhhPCFMkb7g__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/153/image/image.jpg?Expires=1760506701&Signature=JJjXGsg2zW32SG2kJkROh9vclN3WT7wUHEc5uMb9YwXEhRK7dyQOrBPZPgK4E8AZehvQEbcYq58p8b3bA~A1fIbWTLj26bgHZeRtx9mE4vnT1kOtIDw~iu7fL5-OjaP3rRXyuudCsydN7fPksPQwW2wSJot3Nv0lDF53SXa~1tiOpE3yzjB2gBlpQNv7F0ah7FoPqL9ThbdtzPSMkIRuD2rR-co1rqAk2auOmJq3ZDIKXP0AM8QY-M4mOliv~SUIYynMYQmgTuUHHpxQfmWCWVU98G9LGkc~0gWa-DIUUfEg87vpK7APv05HkIx7o8r6l51Wu0dHtXrBbHqJkaQNfQ__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_53_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 53,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/153/image/image.jpg?Expires=1760506701&Signature=JJjXGsg2zW32SG2kJkROh9vclN3WT7wUHEc5uMb9YwXEhRK7dyQOrBPZPgK4E8AZehvQEbcYq58p8b3bA~A1fIbWTLj26bgHZeRtx9mE4vnT1kOtIDw~iu7fL5-OjaP3rRXyuudCsydN7fPksPQwW2wSJot3Nv0lDF53SXa~1tiOpE3yzjB2gBlpQNv7F0ah7FoPqL9ThbdtzPSMkIRuD2rR-co1rqAk2auOmJq3ZDIKXP0AM8QY-M4mOliv~SUIYynMYQmgTuUHHpxQfmWCWVU98G9LGkc~0gWa-DIUUfEg87vpK7APv05HkIx7o8r6l51Wu0dHtXrBbHqJkaQNfQ__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/154/image/image.jpg?Expires=1760506701&Signature=HC27IgJk2OqGdQUndsC-BATfjfMKBSShdcuk5MAxMdI-FzkyohDH0SjaCxEvEy7Lin2JECEL484zI2SXZjHnAVYpsJEaG8fG0Sscd~Ee9~js8h9YkGGHZC-yxSZ7SgnlC9VJiiEwp~3CqAak2Y5ISYUkUkWU3g8S8tSWtMC2b~nRgztN5qM8D-gr5hxoMeoEH-iP7s6p0HvKyAlB6oER5ueUbuyJaTdOPPceUr8n0donMJE6LD83TBCut3SprSap-u-8OKX58Ff2BcpqSd4oZ-Wo5bNhnEIHRA66sGQeT1zcZIcYF6QJE3qq8HXUe7tgU2lAIVRM8bpsRlgql7E2Og__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_54_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 54,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/154/image/image.jpg?Expires=1760506701&Signature=HC27IgJk2OqGdQUndsC-BATfjfMKBSShdcuk5MAxMdI-FzkyohDH0SjaCxEvEy7Lin2JECEL484zI2SXZjHnAVYpsJEaG8fG0Sscd~Ee9~js8h9YkGGHZC-yxSZ7SgnlC9VJiiEwp~3CqAak2Y5ISYUkUkWU3g8S8tSWtMC2b~nRgztN5qM8D-gr5hxoMeoEH-iP7s6p0HvKyAlB6oER5ueUbuyJaTdOPPceUr8n0donMJE6LD83TBCut3SprSap-u-8OKX58Ff2BcpqSd4oZ-Wo5bNhnEIHRA66sGQeT1zcZIcYF6QJE3qq8HXUe7tgU2lAIVRM8bpsRlgql7E2Og__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/155/image/image.jpg?Expires=1760506701&Signature=M~ck9iCVPw66h-DhCb6xGBhKzjOZIFLQTh8yTjg9KH9xMW1QetVkczW9cqYPih6TxjCQG0sx6CPo8c1vGGbfwiCYoB3wxSsOta9uMkXuUchz2mZ0bYAgudkJMQh~A4GtxuzVdHUK~TlNB5OyAUg3rBkAXcpQvsbLb-GQ23PCC~F0zw8Sne8Yv5l-o15PXMn59xM1Nk53pL6aQsqxfDomkbeoNA6iGxXoO4S1lLr0sPzTm53EchjIKxqsMHQVKJrBuDS6udUvfDGMFVyKUBC1OHqfYRXvIt1cvGljdAZtdurc9xOX7nw~A9l3ALGESGvZdK7tjR~5Xfv7sV4vm3pn4w__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_55_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 55,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/155/image/image.jpg?Expires=1760506701&Signature=M~ck9iCVPw66h-DhCb6xGBhKzjOZIFLQTh8yTjg9KH9xMW1QetVkczW9cqYPih6TxjCQG0sx6CPo8c1vGGbfwiCYoB3wxSsOta9uMkXuUchz2mZ0bYAgudkJMQh~A4GtxuzVdHUK~TlNB5OyAUg3rBkAXcpQvsbLb-GQ23PCC~F0zw8Sne8Yv5l-o15PXMn59xM1Nk53pL6aQsqxfDomkbeoNA6iGxXoO4S1lLr0sPzTm53EchjIKxqsMHQVKJrBuDS6udUvfDGMFVyKUBC1OHqfYRXvIt1cvGljdAZtdurc9xOX7nw~A9l3ALGESGvZdK7tjR~5Xfv7sV4vm3pn4w__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/156/image/image.jpg?Expires=1760506701&Signature=fHiJDP9Pa~B68cIEfaCvW5paO7XVp7-VKxHaKMaCVg-AumOWLcxfdL521aBXFF8tkdAzd8ntzQ5gBftG4mAfNOv10n4w3-~IGD54gFZQTe1-APCWf9tvQG9to2MS8wXooo0DvHCWpcgY6bEyEeQ9RIzWDxSZFhGWZQKneA903g~XaVqrcKlUNk8MY1lqX0PMzEbMobXvxxVSIIeMS-LZsZC6TIhlGYShE9q0mYiSzx-nTWuF1B~Mn~NBc9o4u4ahpkgjKMdy7enNPPK2GPVHT-ehqDJaB4zFsabKbm9eezcD683v6QWDMVFcBwaj7znz~C~oS6VVh~Gp~pi3RVpgIw__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_56_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 56,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/156/image/image.jpg?Expires=1760506701&Signature=fHiJDP9Pa~B68cIEfaCvW5paO7XVp7-VKxHaKMaCVg-AumOWLcxfdL521aBXFF8tkdAzd8ntzQ5gBftG4mAfNOv10n4w3-~IGD54gFZQTe1-APCWf9tvQG9to2MS8wXooo0DvHCWpcgY6bEyEeQ9RIzWDxSZFhGWZQKneA903g~XaVqrcKlUNk8MY1lqX0PMzEbMobXvxxVSIIeMS-LZsZC6TIhlGYShE9q0mYiSzx-nTWuF1B~Mn~NBc9o4u4ahpkgjKMdy7enNPPK2GPVHT-ehqDJaB4zFsabKbm9eezcD683v6QWDMVFcBwaj7znz~C~oS6VVh~Gp~pi3RVpgIw__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/157/image/image.jpg?Expires=1760506701&Signature=nWSUHsID8L2T1A4HJITJGWuSo-~rEalSoYgjlmtfz7wXY1XX1~wG1qZ6n06J1cDd0Ni3VCzABL39evRDEZ9Ane2xCyocFjrPJoTWHnJ8kXUssRK8W~BrUjHDDQm8s~rm9DnKVbAzxeRf0ThNWdSh5bCo6t7FuczC6AtRDPCtWZx3o289qk-GbI-0xvyJjNoeep~6itQ0VF2bTpCEUoKmZSFz3hCKzl0cUIoXm0rKVt5WPNwCSrbwZ4pEasT-APKoQnaokrd2vlXar-TKC-qg0VBUeDEYytOrc4L36x0G2f2yJ6ysgcw8GGW6sKnvnjFSjQJezkVbtf0lzta~~nJjOg__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_57_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 57,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/157/image/image.jpg?Expires=1760506701&Signature=nWSUHsID8L2T1A4HJITJGWuSo-~rEalSoYgjlmtfz7wXY1XX1~wG1qZ6n06J1cDd0Ni3VCzABL39evRDEZ9Ane2xCyocFjrPJoTWHnJ8kXUssRK8W~BrUjHDDQm8s~rm9DnKVbAzxeRf0ThNWdSh5bCo6t7FuczC6AtRDPCtWZx3o289qk-GbI-0xvyJjNoeep~6itQ0VF2bTpCEUoKmZSFz3hCKzl0cUIoXm0rKVt5WPNwCSrbwZ4pEasT-APKoQnaokrd2vlXar-TKC-qg0VBUeDEYytOrc4L36x0G2f2yJ6ysgcw8GGW6sKnvnjFSjQJezkVbtf0lzta~~nJjOg__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/158/image/image.jpg?Expires=1760506701&Signature=NuD3b4Veuq~FIUzC4Zvze7K0t5W1wP2GJnLGlNvWMxGxjPM1WAAbV-IhhOT7tAeENVCVhmKPDuuTwnob7kv64zUR18vDCnz4CWS8ePQ5RQNUeNyqS27Hv-rXRfzLae3WCbTihpobZ75U72PYHw~f0uZ7lDFH~DKslyLCnUT5WI3P0UlVw~fCYJERsYUrLU-0dSISS3oH05F76snt7FaDev-jlAKqQ0ETBIhAcCPURqZftWe~l4YM8BC6lX6YQ82LurmC1KIjvIckNLOHk48SA8S9WXzEQfXhclwB6xmdK5u0clKWTcEwd3YbZR8qzdH~ZAzxuIsksfjtQz-oYn~h8g__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_58_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 58,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/158/image/image.jpg?Expires=1760506701&Signature=NuD3b4Veuq~FIUzC4Zvze7K0t5W1wP2GJnLGlNvWMxGxjPM1WAAbV-IhhOT7tAeENVCVhmKPDuuTwnob7kv64zUR18vDCnz4CWS8ePQ5RQNUeNyqS27Hv-rXRfzLae3WCbTihpobZ75U72PYHw~f0uZ7lDFH~DKslyLCnUT5WI3P0UlVw~fCYJERsYUrLU-0dSISS3oH05F76snt7FaDev-jlAKqQ0ETBIhAcCPURqZftWe~l4YM8BC6lX6YQ82LurmC1KIjvIckNLOHk48SA8S9WXzEQfXhclwB6xmdK5u0clKWTcEwd3YbZR8qzdH~ZAzxuIsksfjtQz-oYn~h8g__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/159/image/image.jpg?Expires=1760506701&Signature=Vs79DxCiUWV4wulrSD-u4JVkSi~cueiFR1ylcSl1ZGDf3HIynnLU5kUBhWUtBhiA~ubPxAfKpC8C6nxI1-Lko4UGUNte82feefu3lW6GqM-4kFTbEYS4Nb-glOnjn59dBuY8ZtG0XP4Mm77OMy2wFoNXR7muTBRfVZPpvqJngtFXO7vVSP0qMy5zkPQdMbHxsbibo5DdfnFG9NswQAKEDNhBvyRiqOGfLUYIMURmUnzBDtR9b0CTJjk9ZjDAOm~RCEArthDm9KllYYBN0uURHYIo30~~NZEZMh6Myy0Vl~GaKKl4xrgUt4MNeGSUUjjjU1radFVN~VBlvGpVg1akvA__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_59_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 59,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/159/image/image.jpg?Expires=1760506701&Signature=Vs79DxCiUWV4wulrSD-u4JVkSi~cueiFR1ylcSl1ZGDf3HIynnLU5kUBhWUtBhiA~ubPxAfKpC8C6nxI1-Lko4UGUNte82feefu3lW6GqM-4kFTbEYS4Nb-glOnjn59dBuY8ZtG0XP4Mm77OMy2wFoNXR7muTBRfVZPpvqJngtFXO7vVSP0qMy5zkPQdMbHxsbibo5DdfnFG9NswQAKEDNhBvyRiqOGfLUYIMURmUnzBDtR9b0CTJjk9ZjDAOm~RCEArthDm9KllYYBN0uURHYIo30~~NZEZMh6Myy0Vl~GaKKl4xrgUt4MNeGSUUjjjU1radFVN~VBlvGpVg1akvA__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/160/image/image.jpg?Expires=1760506701&Signature=DiQmePt1PiZlgtXfJVtAJ4zqGfwjqNN-5BX55j3xFNHU279HjZGhE0iMEdUkIRTfomurpoIWt4mBxtyBXdmOtBqJh5XFXxLlkYKEAycFKuwqaKXsgznzQIQMx7USDLAJLlog0E1Z0E5yd8j0Gbg4egZrTvGz69f8rPcUjUhKzTKs8NPivY6kUT89X50QZ2BSkXfNAD4jxXB4FWJEzfQTep7LCj~SqZzwT91eUjZhFr4MjLfh35coQgCSnoZ6LxRphZuIU9E0RejGnNVra5ii7tu1eUqeham4nT3oEofd~nocm6FWhIbbhNq77xj4Ufz0jq-qRtbPPMes383UjGpaMg__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_60_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 60,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/160/image/image.jpg?Expires=1760506701&Signature=DiQmePt1PiZlgtXfJVtAJ4zqGfwjqNN-5BX55j3xFNHU279HjZGhE0iMEdUkIRTfomurpoIWt4mBxtyBXdmOtBqJh5XFXxLlkYKEAycFKuwqaKXsgznzQIQMx7USDLAJLlog0E1Z0E5yd8j0Gbg4egZrTvGz69f8rPcUjUhKzTKs8NPivY6kUT89X50QZ2BSkXfNAD4jxXB4FWJEzfQTep7LCj~SqZzwT91eUjZhFr4MjLfh35coQgCSnoZ6LxRphZuIU9E0RejGnNVra5ii7tu1eUqeham4nT3oEofd~nocm6FWhIbbhNq77xj4Ufz0jq-qRtbPPMes383UjGpaMg__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/161/image/image.jpg?Expires=1760506701&Signature=ePfqJ~q6MqkfSshYVnv7mmdbFhPypRam52HTdr6adTE6XyhSig9xXbR4AL8hRwtNHxwL9CgxtCWWkbLEr-EgGHoDhpf-SMFD8Qif55lIcway3LikR8HmsisuWzpmCxGAsMVc9UFIgahM5tQa9ZSo7K2Iqi5DkwhTj5Ih5DXiXNln4vyrlxQgUpCRkP8mp0Bvrr1TESkcELAzeHjWJWEOBvTZYHNCid-XgbYs2hLLG3Ajn78pTIRi1OI3hOyMBGGL4nMQlWTHcwBgxQlGu-ApnIgwQo7703T~lSPEx1~BjPhVckDADEyfOhWf~I73G9dkpSjn0RKDoDi7DzG4jk3QdA__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_61_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 61,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/161/image/image.jpg?Expires=1760506701&Signature=ePfqJ~q6MqkfSshYVnv7mmdbFhPypRam52HTdr6adTE6XyhSig9xXbR4AL8hRwtNHxwL9CgxtCWWkbLEr-EgGHoDhpf-SMFD8Qif55lIcway3LikR8HmsisuWzpmCxGAsMVc9UFIgahM5tQa9ZSo7K2Iqi5DkwhTj5Ih5DXiXNln4vyrlxQgUpCRkP8mp0Bvrr1TESkcELAzeHjWJWEOBvTZYHNCid-XgbYs2hLLG3Ajn78pTIRi1OI3hOyMBGGL4nMQlWTHcwBgxQlGu-ApnIgwQo7703T~lSPEx1~BjPhVckDADEyfOhWf~I73G9dkpSjn0RKDoDi7DzG4jk3QdA__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/162/image/image.jpg?Expires=1760506701&Signature=l5OuQLDt1uBG5LtQMflYQqkgiZCq2FWSCcLJrHuGTacoRgj2SqRc7n1pVvvJVBy59MMEa3pZ1cE1NhTxSNJAP0E9~KFn4H1oy7-Mf2-vGcL4FFMwqfGb8UB426mNsLoK09i9uwL~WyDUB0maFHpU6MzP2akS2m47qfKNImTnoSV3cXjKlaee7ZD4m-XlHHjCyqbFbeuN-cXImH2vSUrq9w-MX4R~UtI7UoRAuJEt53iSCRSKWVGn75z54PG1NQSZWOu1VIUfImw2PLuWVLZPeNzIzOfKnKnTHFUuqIM~oMtSAmmwgFrNpd53Le0m0RDTyQCoJr9dljgO4QnA1HRNZw__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_62_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 62,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/162/image/image.jpg?Expires=1760506701&Signature=l5OuQLDt1uBG5LtQMflYQqkgiZCq2FWSCcLJrHuGTacoRgj2SqRc7n1pVvvJVBy59MMEa3pZ1cE1NhTxSNJAP0E9~KFn4H1oy7-Mf2-vGcL4FFMwqfGb8UB426mNsLoK09i9uwL~WyDUB0maFHpU6MzP2akS2m47qfKNImTnoSV3cXjKlaee7ZD4m-XlHHjCyqbFbeuN-cXImH2vSUrq9w-MX4R~UtI7UoRAuJEt53iSCRSKWVGn75z54PG1NQSZWOu1VIUfImw2PLuWVLZPeNzIzOfKnKnTHFUuqIM~oMtSAmmwgFrNpd53Le0m0RDTyQCoJr9dljgO4QnA1HRNZw__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/163/image/image.jpg?Expires=1760506701&Signature=cPju-hZua2caf6AlBfWENWjdHG3H0MFOTM4RIuSPQ4IfuRh~DZ66fLp-qKAG4moD~T~JxfoPKxa5mjLXabRz~2xxC46LGAnUH4XO5GhyLhgGJir-H4TekMnWOXJeTCLflMQV9jCJDEalex~58JP0mFbCJEGXRXe6GAcU~nEjmU8WSsaG0~RnGSYDQRsSt96o7EKrWAdkPej4F3Z6q4aO81HjcCeIrkZU5fU4F~wHo3o9MoE9HcvN8WTaNszFkzu0szJdvY084lHUWX1a2UKniFNI6yNKFVeK4Qot-YLplQ8nH3Lvi7S0mILCKhfHgLDNfp3wPmZBvtYr8S3F4jVZVA__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_63_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 63,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/163/image/image.jpg?Expires=1760506701&Signature=cPju-hZua2caf6AlBfWENWjdHG3H0MFOTM4RIuSPQ4IfuRh~DZ66fLp-qKAG4moD~T~JxfoPKxa5mjLXabRz~2xxC46LGAnUH4XO5GhyLhgGJir-H4TekMnWOXJeTCLflMQV9jCJDEalex~58JP0mFbCJEGXRXe6GAcU~nEjmU8WSsaG0~RnGSYDQRsSt96o7EKrWAdkPej4F3Z6q4aO81HjcCeIrkZU5fU4F~wHo3o9MoE9HcvN8WTaNszFkzu0szJdvY084lHUWX1a2UKniFNI6yNKFVeK4Qot-YLplQ8nH3Lvi7S0mILCKhfHgLDNfp3wPmZBvtYr8S3F4jVZVA__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/164/image/image.jpg?Expires=1760506701&Signature=kjhCgC~jyYyElnOxRq9wYXRCRvGiWj1ja90u4zIlett4LRBcTQoOzf86kfI6HVdQ3bQUJgz2b4fc~g5alx3O21M~Ico-wo0OJGgXqXeJ7rwNfRF0ODP-N~e0QKyhI0cF33vIuJKg6sHoO8lg7B9aDdoCxtuQcoanpsRn6xX0HjMiTvXbDJR5e~JDZnLMUwXWl8EJe5K8JEyBs03UoO60Jq7fRi6I7H0cau3cEiebEGwYzm6v-4vy-VEiLcOFj6nQj2w5faUIbJ~UMJYt5zr6b6~GSVf9omXVxOtAL2saGpCjWa~3HoUQ1ny~hTSaBVTEYFvUoEk5tiuGbm0ruajgHQ__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_64_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 64,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/164/image/image.jpg?Expires=1760506701&Signature=kjhCgC~jyYyElnOxRq9wYXRCRvGiWj1ja90u4zIlett4LRBcTQoOzf86kfI6HVdQ3bQUJgz2b4fc~g5alx3O21M~Ico-wo0OJGgXqXeJ7rwNfRF0ODP-N~e0QKyhI0cF33vIuJKg6sHoO8lg7B9aDdoCxtuQcoanpsRn6xX0HjMiTvXbDJR5e~JDZnLMUwXWl8EJe5K8JEyBs03UoO60Jq7fRi6I7H0cau3cEiebEGwYzm6v-4vy-VEiLcOFj6nQj2w5faUIbJ~UMJYt5zr6b6~GSVf9omXVxOtAL2saGpCjWa~3HoUQ1ny~hTSaBVTEYFvUoEk5tiuGbm0ruajgHQ__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/165/image/image.jpg?Expires=1760506701&Signature=D0wulFXuiZhRshjdB54OoaO-5KpcxW-bid6NfzNS3z4Nh7acw9fUdqZUnMpZmeDgvEGZSjZMAS0gG1KE1JbvYcGf1JOmRuSTycE~V9IcSuedRRYSf2soLVOWq~NPaH~QRWtC~jprdQY-12X4H4OhQC2jRa2VHP0aFuNVn9dM-Jm2GRY3I3wdmgO3xpKBunKiTY1tHHhELPTKigIxer3oiA3SgV4U0iVtw1MjCjfwL-WefyZSzl5D-UlAYbZQtzkexDWnuCU3s5U4WO0gyEz-sycgYiIr~VQTzE~UPQT9erAuS8cXc5TFVa94fzvv3OGv85rKKD2fqAagkKDsE9SGhA__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_65_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 65,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/165/image/image.jpg?Expires=1760506701&Signature=D0wulFXuiZhRshjdB54OoaO-5KpcxW-bid6NfzNS3z4Nh7acw9fUdqZUnMpZmeDgvEGZSjZMAS0gG1KE1JbvYcGf1JOmRuSTycE~V9IcSuedRRYSf2soLVOWq~NPaH~QRWtC~jprdQY-12X4H4OhQC2jRa2VHP0aFuNVn9dM-Jm2GRY3I3wdmgO3xpKBunKiTY1tHHhELPTKigIxer3oiA3SgV4U0iVtw1MjCjfwL-WefyZSzl5D-UlAYbZQtzkexDWnuCU3s5U4WO0gyEz-sycgYiIr~VQTzE~UPQT9erAuS8cXc5TFVa94fzvv3OGv85rKKD2fqAagkKDsE9SGhA__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/166/image/image.jpg?Expires=1760506701&Signature=rUoCCNLkBweugrVgNUKmmM0NyH92LQGeaKbKQOP2BwdzkXiCeEGQPoJJFOJyj84O77P-feV~KVe4ZeAIToX5IK~CSqAgSliKVplo~9M8cfl8jj0OPoZlcr4ilaEcf68bCppwA4woIm3svODHbWHDy9QDVfYGsVYtLCU35qOXZhGRmm7kvCBPFROWH-6ah5lUE2r35X78D6N8EY5SFXgUYlXkFiR0Ac~5lwghbXpumWUHIjOwivLfdkJdjAdlhFhBGI0YU0bZbuoEXUKq3u2yXRPg4n0eegiSt9cpqweEvVY4tArpVZAXNRaZrzYB8i5OPgsJqg2NmD---I71M6JnBQ__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_66_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 66,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/166/image/image.jpg?Expires=1760506701&Signature=rUoCCNLkBweugrVgNUKmmM0NyH92LQGeaKbKQOP2BwdzkXiCeEGQPoJJFOJyj84O77P-feV~KVe4ZeAIToX5IK~CSqAgSliKVplo~9M8cfl8jj0OPoZlcr4ilaEcf68bCppwA4woIm3svODHbWHDy9QDVfYGsVYtLCU35qOXZhGRmm7kvCBPFROWH-6ah5lUE2r35X78D6N8EY5SFXgUYlXkFiR0Ac~5lwghbXpumWUHIjOwivLfdkJdjAdlhFhBGI0YU0bZbuoEXUKq3u2yXRPg4n0eegiSt9cpqweEvVY4tArpVZAXNRaZrzYB8i5OPgsJqg2NmD---I71M6JnBQ__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/167/image/image.jpg?Expires=1760506701&Signature=OqOFsOGEuebG~yriIlOwzSV-BFzOZ~ntuMWlNT3rdY2QlD3P3CWEaradPa18in7NiJpVswrY5Vu9sFgm1hDCI6xeN3nmFl2Qwnr-w9raR5Qtqo5fj2dELV7BgQ0qrmLaLTP8fhQADskLYAQJXOv2zx01oSj2tSEroht5refbHhJ7Cxss6ZxLm~EduEAPOMTTcxO2~AZMiMv~2xAbTpap8x5bY4NGuVAjUgvyC9T--iiplzBtnzdIGN~Cp9cGJrNTwLkcG0Ctq2uW6dHtEgNU~KzmIKaNperQvmAl0YjTHJroXgl-asVqWuH9hJb1OExV0NXDSx79E3tTu2TMcH-euw__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_67_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 67,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/167/image/image.jpg?Expires=1760506701&Signature=OqOFsOGEuebG~yriIlOwzSV-BFzOZ~ntuMWlNT3rdY2QlD3P3CWEaradPa18in7NiJpVswrY5Vu9sFgm1hDCI6xeN3nmFl2Qwnr-w9raR5Qtqo5fj2dELV7BgQ0qrmLaLTP8fhQADskLYAQJXOv2zx01oSj2tSEroht5refbHhJ7Cxss6ZxLm~EduEAPOMTTcxO2~AZMiMv~2xAbTpap8x5bY4NGuVAjUgvyC9T--iiplzBtnzdIGN~Cp9cGJrNTwLkcG0Ctq2uW6dHtEgNU~KzmIKaNperQvmAl0YjTHJroXgl-asVqWuH9hJb1OExV0NXDSx79E3tTu2TMcH-euw__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/168/image/image.jpg?Expires=1760506701&Signature=xmli7-Rxr86noFLsDfg~kaYeQkX-bmTmnqSmOeAn8nqLDipR858aQ9oE0D3nDv6iuSJS7wayDg8rmw0NDEATVuEptQV1Z-T0jx46~P8KS7s4uPJ1PbgG~9dSvuwM5PG9fREFGpw~cnGUiyr0Af7CRe5~n6ubc~cD-OwSSQHiXoyCCV8KpTK6nhX9NNVUtKu7D6oM1UyypHLzm~2UXBZ6BNqNn2EvC6sq0kFKo0NPVHNLVnUOG7kmtJXdtE~6c4BS12eLC~-sXiwXSj8aN8N~5ke77UaRpx~LN3SPo7u~MAp-bjWxL20h56p4J6PqmPLp4-E82PdYvi2S~2xCbFHp4w__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_68_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 68,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/168/image/image.jpg?Expires=1760506701&Signature=xmli7-Rxr86noFLsDfg~kaYeQkX-bmTmnqSmOeAn8nqLDipR858aQ9oE0D3nDv6iuSJS7wayDg8rmw0NDEATVuEptQV1Z-T0jx46~P8KS7s4uPJ1PbgG~9dSvuwM5PG9fREFGpw~cnGUiyr0Af7CRe5~n6ubc~cD-OwSSQHiXoyCCV8KpTK6nhX9NNVUtKu7D6oM1UyypHLzm~2UXBZ6BNqNn2EvC6sq0kFKo0NPVHNLVnUOG7kmtJXdtE~6c4BS12eLC~-sXiwXSj8aN8N~5ke77UaRpx~LN3SPo7u~MAp-bjWxL20h56p4J6PqmPLp4-E82PdYvi2S~2xCbFHp4w__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/169/image/image.jpg?Expires=1760506701&Signature=fQQgI256Bgf8Ou2BLbCWijZlcAU~iXFSQOB9O9VlZEk8FTbk80LjYtJrwShu~S8EkIEdZvJkEpW6aJRB0kUOj64T7wAOZMhRrB2At9188hWcpmZt8MPN3rb9nNl~ecdqCfDzPXqWrf83wxqezZ-4T07UPiWETjba3L0CxMLd8ptPy3LSckLDZ4IiGrtH2ipEFR0ozQJAKv6bB~dPpJuZ1e8jTyUitTbMkJ2q8Vm6tsv8dQzF0deo2V46WKdrV726KpcTkWAp46KzE5fBjtGN83KsdwRZw~gKwkwXlyMQfOGkDXkO5UejBqTOvPQuFGqcfTpVFKJXvVH4t7yRidCsIg__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_69_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 69,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/169/image/image.jpg?Expires=1760506701&Signature=fQQgI256Bgf8Ou2BLbCWijZlcAU~iXFSQOB9O9VlZEk8FTbk80LjYtJrwShu~S8EkIEdZvJkEpW6aJRB0kUOj64T7wAOZMhRrB2At9188hWcpmZt8MPN3rb9nNl~ecdqCfDzPXqWrf83wxqezZ-4T07UPiWETjba3L0CxMLd8ptPy3LSckLDZ4IiGrtH2ipEFR0ozQJAKv6bB~dPpJuZ1e8jTyUitTbMkJ2q8Vm6tsv8dQzF0deo2V46WKdrV726KpcTkWAp46KzE5fBjtGN83KsdwRZw~gKwkwXlyMQfOGkDXkO5UejBqTOvPQuFGqcfTpVFKJXvVH4t7yRidCsIg__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/170/image/image.jpg?Expires=1760506701&Signature=jAd4beLbGzGXb3HhrTgmy03QFbE-~s37tCaCaZqFGuUEx29ecZEs14IaybmKjFMHXKtU~YD8lBnxBK2wBvRKG0ga1pnbW-JS49r1kELsk2sWzJ5t-dfsLCN9rtaSZsmsEruLH-t4B6~OrIeMkqzpr2p47rgdyZ82ZpOpuZGks-3q4b03fA-ty55KVHCB9JklUppDwQvywaH0~ITdkoZqLZNwv0IYDg746N78WYwa25lLhrjEUl2dUXC55da-xf-cfa4ErKqpzCNHQaqweQxA~UOrJcXPN2B9KzUPI2zPHe~T-xlnZXpnjwwdqTNPJ64b9bznlADJFukZSYQc2WDLzg__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_70_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 70,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/170/image/image.jpg?Expires=1760506701&Signature=jAd4beLbGzGXb3HhrTgmy03QFbE-~s37tCaCaZqFGuUEx29ecZEs14IaybmKjFMHXKtU~YD8lBnxBK2wBvRKG0ga1pnbW-JS49r1kELsk2sWzJ5t-dfsLCN9rtaSZsmsEruLH-t4B6~OrIeMkqzpr2p47rgdyZ82ZpOpuZGks-3q4b03fA-ty55KVHCB9JklUppDwQvywaH0~ITdkoZqLZNwv0IYDg746N78WYwa25lLhrjEUl2dUXC55da-xf-cfa4ErKqpzCNHQaqweQxA~UOrJcXPN2B9KzUPI2zPHe~T-xlnZXpnjwwdqTNPJ64b9bznlADJFukZSYQc2WDLzg__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/171/image/image.jpg?Expires=1760506701&Signature=TWt~T68PBIwbqud~H5fyOVqy40yDkE1IRqAxvpIzwRMG58MqgoCb6zDe9EcFcqbThLBOGX1SBSrl-Tb9O2iXkEq6efHNqy3G73FqEhTciV-rsyzlSCb02-PuVnfc00HnN4MRO~t-rou4nHxSvTGnE2qR1fMg1d9qQYsXIRZa0ti0H~hrWd1BvC-kUKCdHUB72tC6d8OPPupTiV4ZwIL5Uw1meXVSsQLoMougM0En0T9o1P8iSWM4p7ZqesPWWox9FHrcSrUiHLI4tkGbas~I8adQ0mrk9OgVGGM1e7iUMK8rmuxpqzvcPGESw-0HRA23L1~uPQkU3KnQhfXSTcsmAw__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_71_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 71,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/171/image/image.jpg?Expires=1760506701&Signature=TWt~T68PBIwbqud~H5fyOVqy40yDkE1IRqAxvpIzwRMG58MqgoCb6zDe9EcFcqbThLBOGX1SBSrl-Tb9O2iXkEq6efHNqy3G73FqEhTciV-rsyzlSCb02-PuVnfc00HnN4MRO~t-rou4nHxSvTGnE2qR1fMg1d9qQYsXIRZa0ti0H~hrWd1BvC-kUKCdHUB72tC6d8OPPupTiV4ZwIL5Uw1meXVSsQLoMougM0En0T9o1P8iSWM4p7ZqesPWWox9FHrcSrUiHLI4tkGbas~I8adQ0mrk9OgVGGM1e7iUMK8rmuxpqzvcPGESw-0HRA23L1~uPQkU3KnQhfXSTcsmAw__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/172/image/image.jpg?Expires=1760506702&Signature=bWYegdZJGU2DuCBnGJ~wrxmtRA6rT-goiDMFery6vBeawjOjGW7rXNWvNYYBjmKqSwmluUIA2ma0ZnS~sF5US5JyjQevI8bXf6PJrmaCaqL~18OxbX9Xe5RGBKpXvYkXSLJu0gkqSJPgZwtn9ki24UgCQTSmhUbRIcywMlDomM9iR2JuZ0RTFXn6m4ss82qJWI1YImfjySK4Nfz-NFoU4kbgSOF973OX77UH7tatbUp75eaBxXOGngiyfw8q~G2Wre6-Fyn3epq0hV0A1TQHcqz294e~ndyG9DxeM1XZfDjHnYEuegTS2GTdH2RM8MLv2~ZWOi7A8AXV0eqxHrmnLg__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_72_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 72,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/172/image/image.jpg?Expires=1760506702&Signature=bWYegdZJGU2DuCBnGJ~wrxmtRA6rT-goiDMFery6vBeawjOjGW7rXNWvNYYBjmKqSwmluUIA2ma0ZnS~sF5US5JyjQevI8bXf6PJrmaCaqL~18OxbX9Xe5RGBKpXvYkXSLJu0gkqSJPgZwtn9ki24UgCQTSmhUbRIcywMlDomM9iR2JuZ0RTFXn6m4ss82qJWI1YImfjySK4Nfz-NFoU4kbgSOF973OX77UH7tatbUp75eaBxXOGngiyfw8q~G2Wre6-Fyn3epq0hV0A1TQHcqz294e~ndyG9DxeM1XZfDjHnYEuegTS2GTdH2RM8MLv2~ZWOi7A8AXV0eqxHrmnLg__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/173/image/image.jpg?Expires=1760506702&Signature=JtGLukE-9E9HZ5JEjZp7~4V31dP3Zla6QF~7o7bs4soVlwWTWVFFiwAHlV0vgxKJk3dl7HqMyTci3WN7eJZRhN8g3K7IS~-X5oyWpXBskkATo35lIQCNXIAisjdRApWfefBNR1SNM13t7GSRnTqhdVUlbbyBYrg-wjFj~g2zjXYDnVEvNf9Ht~WDOA4cosQzSWyVILlguq4PI5aZpyGJEa~iRGYCn5He4GSeXuut1fVFDHPgz3jV4I4w4XNayPlyQyEn~S-mqEW2l8kN~gZupXTEaQ8HE6puME--GJKLwo83lv~KYt8X51VyC7PJE-x~yGO7D3KUfCA3v2oF4dhAUQ__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_73_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 73,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/173/image/image.jpg?Expires=1760506702&Signature=JtGLukE-9E9HZ5JEjZp7~4V31dP3Zla6QF~7o7bs4soVlwWTWVFFiwAHlV0vgxKJk3dl7HqMyTci3WN7eJZRhN8g3K7IS~-X5oyWpXBskkATo35lIQCNXIAisjdRApWfefBNR1SNM13t7GSRnTqhdVUlbbyBYrg-wjFj~g2zjXYDnVEvNf9Ht~WDOA4cosQzSWyVILlguq4PI5aZpyGJEa~iRGYCn5He4GSeXuut1fVFDHPgz3jV4I4w4XNayPlyQyEn~S-mqEW2l8kN~gZupXTEaQ8HE6puME--GJKLwo83lv~KYt8X51VyC7PJE-x~yGO7D3KUfCA3v2oF4dhAUQ__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/174/image/image.jpg?Expires=1760506702&Signature=uF6ej8XGCZ7rJ1Y2Yw656g1jHNiOlQse-ZJSht6lqGP~jK3qR2O3J43WA0vdMvis27-GZwmFjKVYbJIPU0I~0tRheL0TIyqtvalKt38zMKJ7MMQGhAo1d36K4PLmWFTsn9yfBvpNCARNJzVEsd7mQGt8auyw1fMfjD7WTK9vYRY3VBXGAZjeFrIqpkrkq0PI~7TjlY2yc3hi9Te1b993yVuQUUT~Bb9bPgEOdUc5D3WCBczmHW8eHgv2NXDtgE8n54560qulS6N6enedwbWnb5-YZRTL1eP2nwQHwQ2gwjpD9LBO7HjGmQdefKb7dVgDGK2CgFVhehR-JmhVs7UOjw__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_74_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 74,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/174/image/image.jpg?Expires=1760506702&Signature=uF6ej8XGCZ7rJ1Y2Yw656g1jHNiOlQse-ZJSht6lqGP~jK3qR2O3J43WA0vdMvis27-GZwmFjKVYbJIPU0I~0tRheL0TIyqtvalKt38zMKJ7MMQGhAo1d36K4PLmWFTsn9yfBvpNCARNJzVEsd7mQGt8auyw1fMfjD7WTK9vYRY3VBXGAZjeFrIqpkrkq0PI~7TjlY2yc3hi9Te1b993yVuQUUT~Bb9bPgEOdUc5D3WCBczmHW8eHgv2NXDtgE8n54560qulS6N6enedwbWnb5-YZRTL1eP2nwQHwQ2gwjpD9LBO7HjGmQdefKb7dVgDGK2CgFVhehR-JmhVs7UOjw__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/175/image/image.jpg?Expires=1760506702&Signature=Yj6nTwwh-yEi9Hhh2tpBZKTd94cEPgVV9hHe3i9msB8ZYZ6fscEriyqDc9Be-cO0Ys3GrOAjbO8gGYiIa7EDy7ittYgJ1AxpIAwTiUJyjX6VIq173aHkewvsCF6CM9t4iVFBv0ciQzgOVJbj41oWAs-~xa1-6-4si~Pd09Fdga3OQ0umQDWrAaQbJ9HbQfe6THW5OuIuTLU1H9milGzHWq-AtSmXnQ2yC1fwuGEDF5VeSqk0xVzUt6E49DurANL0pHuTxBsNRKou4PN2pBlvcxsm3unYNjyDSTPD1JNXMNZwihNEj~TZYiyX4Pug2qpOENMBCpUtjH7-pXOJN6mbUw__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_75_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 75,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/175/image/image.jpg?Expires=1760506702&Signature=Yj6nTwwh-yEi9Hhh2tpBZKTd94cEPgVV9hHe3i9msB8ZYZ6fscEriyqDc9Be-cO0Ys3GrOAjbO8gGYiIa7EDy7ittYgJ1AxpIAwTiUJyjX6VIq173aHkewvsCF6CM9t4iVFBv0ciQzgOVJbj41oWAs-~xa1-6-4si~Pd09Fdga3OQ0umQDWrAaQbJ9HbQfe6THW5OuIuTLU1H9milGzHWq-AtSmXnQ2yC1fwuGEDF5VeSqk0xVzUt6E49DurANL0pHuTxBsNRKou4PN2pBlvcxsm3unYNjyDSTPD1JNXMNZwihNEj~TZYiyX4Pug2qpOENMBCpUtjH7-pXOJN6mbUw__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/176/image/image.jpg?Expires=1760506702&Signature=sAqTH2ZSw9VXnG~DmLI~lsjbq3M77N-A4UiY1W4hzTbcefCN9BG44jbG7WFTFNukhAIZpLs1KjFo4lRIpuGMFG~qxcykfll1aOsPmh0wz2FRzPPbEnlAkPimvmt4iW4LPJzQ4RD1Kfnwsk8ANuumgWD8y6nNXigx1Dwf5u542MT8Bz~eTvMfzkwy1ZZlOkvtPCWWBbGCnY7n1xwlWb6fvuu0mdlh6y0stzC1UlNt137hmY8bI6guYFu0UHvbx9wB3k1mBned-6epGS4en-KCAw~pBmh2~Z5lt4cS-n7bDxzP00yTl-2Y2ipEh2Nlh1AG0Fw3~SbEZ2K6qtqP0JQ5gQ__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_76_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 76,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/176/image/image.jpg?Expires=1760506702&Signature=sAqTH2ZSw9VXnG~DmLI~lsjbq3M77N-A4UiY1W4hzTbcefCN9BG44jbG7WFTFNukhAIZpLs1KjFo4lRIpuGMFG~qxcykfll1aOsPmh0wz2FRzPPbEnlAkPimvmt4iW4LPJzQ4RD1Kfnwsk8ANuumgWD8y6nNXigx1Dwf5u542MT8Bz~eTvMfzkwy1ZZlOkvtPCWWBbGCnY7n1xwlWb6fvuu0mdlh6y0stzC1UlNt137hmY8bI6guYFu0UHvbx9wB3k1mBned-6epGS4en-KCAw~pBmh2~Z5lt4cS-n7bDxzP00yTl-2Y2ipEh2Nlh1AG0Fw3~SbEZ2K6qtqP0JQ5gQ__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/177/image/image.jpg?Expires=1760506702&Signature=fzBUufhmefdltwnw5-NpaCYtf4eU08ILYqAAI3DuG3luKzwBBRRw5WjjiVfYXhcsvf1-mkKyAGmcgtrz1yQ3PcLaTNa0LZzyut0QgOsK4eymSKHBOOkGaGD16EhogEJ0l7IFBObTxnZL~cR9sHANZp7T-dn~OGALLByfSm--8gJQFBuHScsMtyGX34ICIxWAKd41jvtw9nVgo0ZShqJMISjqrBcmv0vqX8wKfzdFNHtxDZS-tUFLbEngRHwm9OH3sP-w6c3ryJcfCWFEdKgdtO6hNBuy6xTvrJECAkwIVFLaGS8wYPVniQ3vOJiVtTUZtBykjCHTA--aThY-UoRNTA__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_77_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 77,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/177/image/image.jpg?Expires=1760506702&Signature=fzBUufhmefdltwnw5-NpaCYtf4eU08ILYqAAI3DuG3luKzwBBRRw5WjjiVfYXhcsvf1-mkKyAGmcgtrz1yQ3PcLaTNa0LZzyut0QgOsK4eymSKHBOOkGaGD16EhogEJ0l7IFBObTxnZL~cR9sHANZp7T-dn~OGALLByfSm--8gJQFBuHScsMtyGX34ICIxWAKd41jvtw9nVgo0ZShqJMISjqrBcmv0vqX8wKfzdFNHtxDZS-tUFLbEngRHwm9OH3sP-w6c3ryJcfCWFEdKgdtO6hNBuy6xTvrJECAkwIVFLaGS8wYPVniQ3vOJiVtTUZtBykjCHTA--aThY-UoRNTA__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/178/image/image.jpg?Expires=1760506702&Signature=neoSJOHN4Mdfww8iEekIzp9IMomHKxws4XQXoZMD-w8xMFDSPlPqLpo5RB3mb9plfN~RFXXia1Fm1gN6VFDYuBVzioUjHdI~zdrKHrWn786eImUtbYzeWQyQTt8D7kyu4eZFIw9jfMzHjs13miB7yZhdg~QPz8jY7dexqtPR1WCMVFbumWH6LZwd9-JihiYH3Xf13sy9V8s8QrSGCwS~x6X8vD6vCwwNPw93Go8iK4~tgx3GZhexTcN0J50PncL1ee3ZMnLL5FIJs-Y2go0geDfuBoyqOKfwoxPIASXXGFLtCdpBMv--iRX6XGYpY9~Mt9CDTstR2Oxpg2EDRi~o8g__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_78_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 78,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/178/image/image.jpg?Expires=1760506702&Signature=neoSJOHN4Mdfww8iEekIzp9IMomHKxws4XQXoZMD-w8xMFDSPlPqLpo5RB3mb9plfN~RFXXia1Fm1gN6VFDYuBVzioUjHdI~zdrKHrWn786eImUtbYzeWQyQTt8D7kyu4eZFIw9jfMzHjs13miB7yZhdg~QPz8jY7dexqtPR1WCMVFbumWH6LZwd9-JihiYH3Xf13sy9V8s8QrSGCwS~x6X8vD6vCwwNPw93Go8iK4~tgx3GZhexTcN0J50PncL1ee3ZMnLL5FIJs-Y2go0geDfuBoyqOKfwoxPIASXXGFLtCdpBMv--iRX6XGYpY9~Mt9CDTstR2Oxpg2EDRi~o8g__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/179/image/image.jpg?Expires=1760506702&Signature=Zwn51J4Ih-ud8xBaG45fN8JENjkeLwRU6FcqYj5sBTlOSek0xcScTc04QhD3im4sBXt~td~u1fxZeBxVNB6OYW~trcznmW2Encs00J3oiMr6OdElIZ~m~BDOqlnN8JvpS1mfUh9kJMAYE1Wo7igMcf2yWKzIKFz3znoaHm48CmcNdo3fzM25JXwmcVGQN2trLTBOw6Vwtk6xP9~R5z0ZEBEq0GITyt-zthUKsI6c5z~N9S0b3gw0co17IdiOTvyGFW0Q~OlQYCdEp1M0J-FVAaG96QN-B~WmWDdDZoY0RJ3WOo6RzgX7pnfpl3EKzvdEKUbD~VGY6OeihVbsDHod2Q__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_79_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 79,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/179/image/image.jpg?Expires=1760506702&Signature=Zwn51J4Ih-ud8xBaG45fN8JENjkeLwRU6FcqYj5sBTlOSek0xcScTc04QhD3im4sBXt~td~u1fxZeBxVNB6OYW~trcznmW2Encs00J3oiMr6OdElIZ~m~BDOqlnN8JvpS1mfUh9kJMAYE1Wo7igMcf2yWKzIKFz3znoaHm48CmcNdo3fzM25JXwmcVGQN2trLTBOw6Vwtk6xP9~R5z0ZEBEq0GITyt-zthUKsI6c5z~N9S0b3gw0co17IdiOTvyGFW0Q~OlQYCdEp1M0J-FVAaG96QN-B~WmWDdDZoY0RJ3WOo6RzgX7pnfpl3EKzvdEKUbD~VGY6OeihVbsDHod2Q__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/180/image/image.jpg?Expires=1760506702&Signature=xfAhURMR5L7p45v05tte-ZKTREc0ELBQltWf9qBzUkQkwxHjagQDswh29dFjUw2ktY-qLXsXhSY6RXQlvvVNgBI10JPtXRPg3bVErwFxR27wN9NmUy9xksHAytrnckbG~bWempIT06aliKhwkWyOsAudZityN-BdLS8MZp5-j90ufpthJr-O~GVSxkHxGo9hrfdtkTQ05MBW9RFm9KaZq5lZRqu0L7TqYpID9Cre9Jj5rvTkWo6ZsBcaK-qDkSPZvVKcS0vCW7ZVMyNMg-dqoCoyR7u6SS5VeX0mooe1TkQE-PmKDCi0vtURilq5dlTHzdmLLU5SbL9w6I26I-KEUg__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_80_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 80,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/180/image/image.jpg?Expires=1760506702&Signature=xfAhURMR5L7p45v05tte-ZKTREc0ELBQltWf9qBzUkQkwxHjagQDswh29dFjUw2ktY-qLXsXhSY6RXQlvvVNgBI10JPtXRPg3bVErwFxR27wN9NmUy9xksHAytrnckbG~bWempIT06aliKhwkWyOsAudZityN-BdLS8MZp5-j90ufpthJr-O~GVSxkHxGo9hrfdtkTQ05MBW9RFm9KaZq5lZRqu0L7TqYpID9Cre9Jj5rvTkWo6ZsBcaK-qDkSPZvVKcS0vCW7ZVMyNMg-dqoCoyR7u6SS5VeX0mooe1TkQE-PmKDCi0vtURilq5dlTHzdmLLU5SbL9w6I26I-KEUg__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/181/image/image.jpg?Expires=1760506702&Signature=qbYi2UPTJVrKqWzbOOlMw5JJqCqxq701tsOWTjgpOeqj21E4qRikQox6~lJVXpdkRbwHOSb87fSMC0NhHMfSZtXFqVH4EgTOKz8fi5g49E2yuP7t8NTEOhlvptaCOEtB48~xKmwh53aGU2yjOT~8yYpz3vL13CxfC1dl50BKsYqGUnBd79pc7FeZBJeLgsPVuLg~safI-8K8zknAzE1pTEk2QYWFzlySucGBhMoNGxozEZl0KRd90f-OuL405Au8NvBl7b4Xnt8B9Rg2sdBK6BWlzCi3sgsj-ekdx14UICzGLDaQdCqh38l-qX8DekKvo8w3U-4L5Leazu-8gQBoog__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_81_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 81,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/181/image/image.jpg?Expires=1760506702&Signature=qbYi2UPTJVrKqWzbOOlMw5JJqCqxq701tsOWTjgpOeqj21E4qRikQox6~lJVXpdkRbwHOSb87fSMC0NhHMfSZtXFqVH4EgTOKz8fi5g49E2yuP7t8NTEOhlvptaCOEtB48~xKmwh53aGU2yjOT~8yYpz3vL13CxfC1dl50BKsYqGUnBd79pc7FeZBJeLgsPVuLg~safI-8K8zknAzE1pTEk2QYWFzlySucGBhMoNGxozEZl0KRd90f-OuL405Au8NvBl7b4Xnt8B9Rg2sdBK6BWlzCi3sgsj-ekdx14UICzGLDaQdCqh38l-qX8DekKvo8w3U-4L5Leazu-8gQBoog__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/182/image/image.jpg?Expires=1760506702&Signature=jrDH6VnBMWrEs2sJZLJhOiG0a4V~YQuIk3Ab9Lo1J8HD9fZ8rcxBMKw7l-oaI4yOJj1l-5VYG89NQ72xfLPCINrxY6RknmyGpJs9Ss6pUnpkOH9iQznpondOi2udjSIhnjPAu3hdSbzC8IX3AMKsNFPu31UYtYb2KMIhBD7uW-amFvjkvr2YkAcwpDCVeLBnGPtkcan2fFT8C7xoNG93uB6wmIxMtAaz1kXQO-a0F6jJVmgmgSkemOoOMTLnyL7e~R36H8pBcIfAiQkgDH2piQXswbqpq00jlR0r0cMTlx1mhl0cTkkwv6DZgEE1hXP-l7V8yEIfXwXNVH6fM2LKgQ__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_82_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 82,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/182/image/image.jpg?Expires=1760506702&Signature=jrDH6VnBMWrEs2sJZLJhOiG0a4V~YQuIk3Ab9Lo1J8HD9fZ8rcxBMKw7l-oaI4yOJj1l-5VYG89NQ72xfLPCINrxY6RknmyGpJs9Ss6pUnpkOH9iQznpondOi2udjSIhnjPAu3hdSbzC8IX3AMKsNFPu31UYtYb2KMIhBD7uW-amFvjkvr2YkAcwpDCVeLBnGPtkcan2fFT8C7xoNG93uB6wmIxMtAaz1kXQO-a0F6jJVmgmgSkemOoOMTLnyL7e~R36H8pBcIfAiQkgDH2piQXswbqpq00jlR0r0cMTlx1mhl0cTkkwv6DZgEE1hXP-l7V8yEIfXwXNVH6fM2LKgQ__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/183/image/image.jpg?Expires=1760506702&Signature=k-XCkLvsREbwLn9RCNeVrApi-UWY63Ljo1fxepqNluo-4HBCdtuDQXQOO~ftVwnCOO62hCNsjC0X7-EeCiLdpfEVGjji21guvr~kDfyQhmYeperXOxpon6lrmb8sEtv3xWkqd8uE1GUat-fRI8PSh~ytYSel-VTk5AAfNRhri9xaW~CGf~Bj2L8ya1vzdVyTr0tdnl8-U46YnSkuRGZWPG2c-evKnObadLnC1IgNr0p4pnone9ERz9PfS7HA6dHSym3VRlaV2OB~pSJ4c~i4zeCkIJXEYupgKDTfq1Tqqs5oQEUWp7WEFA6blR2ONV6nt42ETA459hiMnZ~TOThQSw__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_83_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 83,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/183/image/image.jpg?Expires=1760506702&Signature=k-XCkLvsREbwLn9RCNeVrApi-UWY63Ljo1fxepqNluo-4HBCdtuDQXQOO~ftVwnCOO62hCNsjC0X7-EeCiLdpfEVGjji21guvr~kDfyQhmYeperXOxpon6lrmb8sEtv3xWkqd8uE1GUat-fRI8PSh~ytYSel-VTk5AAfNRhri9xaW~CGf~Bj2L8ya1vzdVyTr0tdnl8-U46YnSkuRGZWPG2c-evKnObadLnC1IgNr0p4pnone9ERz9PfS7HA6dHSym3VRlaV2OB~pSJ4c~i4zeCkIJXEYupgKDTfq1Tqqs5oQEUWp7WEFA6blR2ONV6nt42ETA459hiMnZ~TOThQSw__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/184/image/image.jpg?Expires=1760506702&Signature=peF-JTlFDc7Orc-kv~uUGVfSgZ5ZoDilJco9obfmix8~7FQ~xom5N6yHHNCxDadNkKAG-riq9Jca0~K7GEkJm~IPc~XDwC5g2t7Ns1Ye04rA49eGX-xXp9SlX8mtdRGQsZdB9g5V73NsSkbIbbVVtmi6hmsFu9hum2FNXcKz7LJTDMOBUN2N0rRq9kJr0lXWP9n-hmDj06ZetnmcHZBoNuWD6zUVfMkR7L3d6huZ6ckudD9TIW5dnOorgbtqL7W7kKa8wAxbAUhnQBvnz5M6ym0qcHtYWJJzLGy6n2lbaSArcqvzdM23JzA4Hl2ioORrxeyj2Cf-lunkjaDp9EgbTg__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_84_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 84,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/184/image/image.jpg?Expires=1760506702&Signature=peF-JTlFDc7Orc-kv~uUGVfSgZ5ZoDilJco9obfmix8~7FQ~xom5N6yHHNCxDadNkKAG-riq9Jca0~K7GEkJm~IPc~XDwC5g2t7Ns1Ye04rA49eGX-xXp9SlX8mtdRGQsZdB9g5V73NsSkbIbbVVtmi6hmsFu9hum2FNXcKz7LJTDMOBUN2N0rRq9kJr0lXWP9n-hmDj06ZetnmcHZBoNuWD6zUVfMkR7L3d6huZ6ckudD9TIW5dnOorgbtqL7W7kKa8wAxbAUhnQBvnz5M6ym0qcHtYWJJzLGy6n2lbaSArcqvzdM23JzA4Hl2ioORrxeyj2Cf-lunkjaDp9EgbTg__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/185/image/image.jpg?Expires=1760506702&Signature=R5GSISRfwx5ROz2u147FIjndV6iMpi6taAs2~3BuisjniRXWVVwGQSMkrdy5ScI46dif1Kl979JpjUJKIBaj7t~w9ogJk27yl92rgUr-nKxzpVUkwtQmQiG5G7UAsAq6xiENkWtysJTzjltqTuJe92IpeuBSWF6qd0o4ToRjQpUbG20XvGOULwCM8q2jdNglYpzyAY0fLwqDT1sKe3aJQmrKXADyHDO0hQAI3CtA4FJxALsFzb9LdpWTur9mzU9l2dRUCXbPgiE5A~cDJA0VVS2QCTKRKcdpWK9HzTSd5RtEvH41MSTeWjCI6j3jZiR8CddbpomvutUlxP4Eb2WrsQ__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_85_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 85,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/185/image/image.jpg?Expires=1760506702&Signature=R5GSISRfwx5ROz2u147FIjndV6iMpi6taAs2~3BuisjniRXWVVwGQSMkrdy5ScI46dif1Kl979JpjUJKIBaj7t~w9ogJk27yl92rgUr-nKxzpVUkwtQmQiG5G7UAsAq6xiENkWtysJTzjltqTuJe92IpeuBSWF6qd0o4ToRjQpUbG20XvGOULwCM8q2jdNglYpzyAY0fLwqDT1sKe3aJQmrKXADyHDO0hQAI3CtA4FJxALsFzb9LdpWTur9mzU9l2dRUCXbPgiE5A~cDJA0VVS2QCTKRKcdpWK9HzTSd5RtEvH41MSTeWjCI6j3jZiR8CddbpomvutUlxP4Eb2WrsQ__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/186/image/image.jpg?Expires=1760506702&Signature=BbcH8YHmv7lT-RyUmApOyhmHWtjdMoxlpFOAHs5OerBj-qpTdbI3RUhIUsez4nt~T~Ev0KE5-vI3Ww8nxwftY7~GKDTPZhJmYlX00RfRlhTEjM07jH004gmwbBXN0noB8TH-vU-NHI9UPkY4ScHQt~5pRVXtl7b32aRHIhjOmOfe46z26Xy7iVh0qgj8Ub7fkV7cLZkqgE9AC9lnbo-nl1BZgFbPwADO9S9TSP1QMZw~mtpVx0QsoO9e4XML9SZhNIkWv9TuTlUiWQu6HCywSNhWoG~~chWeR5CubY5u8VE70pAx3i-1~UTRHo2~kyl3vGLhJRvWshabtzuP2kUkRA__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_86_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 86,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/186/image/image.jpg?Expires=1760506702&Signature=BbcH8YHmv7lT-RyUmApOyhmHWtjdMoxlpFOAHs5OerBj-qpTdbI3RUhIUsez4nt~T~Ev0KE5-vI3Ww8nxwftY7~GKDTPZhJmYlX00RfRlhTEjM07jH004gmwbBXN0noB8TH-vU-NHI9UPkY4ScHQt~5pRVXtl7b32aRHIhjOmOfe46z26Xy7iVh0qgj8Ub7fkV7cLZkqgE9AC9lnbo-nl1BZgFbPwADO9S9TSP1QMZw~mtpVx0QsoO9e4XML9SZhNIkWv9TuTlUiWQu6HCywSNhWoG~~chWeR5CubY5u8VE70pAx3i-1~UTRHo2~kyl3vGLhJRvWshabtzuP2kUkRA__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/187/image/image.jpg?Expires=1760506702&Signature=MIFaw4D2LAAUCJiZaoYtYpzrWLnBxJuGmuDlpSbf9y6ic2QsWjDf5jsrbB-90ETx05Uq16Ln-VBRQRBz23JNeQl0RpeHTWSTZR1gDdWwbHYj94qBU1R65T~ghar7WKZCODZ5BrB7jBF-f0RV6lsHIb562Y54yCu9Ds6YNGRV2LVmsKiqXUhGPF6JGKwIjFzh4XzGc3seNSY8Xwk~bKA2AXJa2o9ntALfLqdnKkqedl36uPtVgn3G4TL7I7JM5Jn9hxO5FCK38TRoRZNOfOn9kJmQX5DnsqCldtS1iLsuArO0HVTXnarhqtxhyHM~t-FNlTxf-Ie9D69DSNrTZuzw7w__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_87_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 87,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/187/image/image.jpg?Expires=1760506702&Signature=MIFaw4D2LAAUCJiZaoYtYpzrWLnBxJuGmuDlpSbf9y6ic2QsWjDf5jsrbB-90ETx05Uq16Ln-VBRQRBz23JNeQl0RpeHTWSTZR1gDdWwbHYj94qBU1R65T~ghar7WKZCODZ5BrB7jBF-f0RV6lsHIb562Y54yCu9Ds6YNGRV2LVmsKiqXUhGPF6JGKwIjFzh4XzGc3seNSY8Xwk~bKA2AXJa2o9ntALfLqdnKkqedl36uPtVgn3G4TL7I7JM5Jn9hxO5FCK38TRoRZNOfOn9kJmQX5DnsqCldtS1iLsuArO0HVTXnarhqtxhyHM~t-FNlTxf-Ie9D69DSNrTZuzw7w__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/188/image/image.jpg?Expires=1760506702&Signature=i7vcmYFIM8XIBSgJ7YgowNKvnqF0W8E9J~aGHFuQiaBxAFXxWfiXg84Mu8A-TlQR0GoT9KtZ96-iTFAOBMW22eY0e2rBuaNiM6ZdrObUXh5Mo4UKJCxB9etMJfRx6Ji~JpQ~V70Lj08~xma7NHdBUs-B73wqclK7cnKqaYAXQkHuSwpISpmSqfWoxTyZG3gFyW9Q8xh4JlpzX4Xa8nggxoN4y87C0rsRpqrefYM-j3u4le5cja4k4r1NYtWaIaQj-1xEZwt6gKfe6m133aO-Nk52mVu8wAslZ2rYfVZJ0XaFxBemXYkjNLqE2Zcp80rHB6h3uARJgzDiDcefeYOu8Q__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_88_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 88,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/188/image/image.jpg?Expires=1760506702&Signature=i7vcmYFIM8XIBSgJ7YgowNKvnqF0W8E9J~aGHFuQiaBxAFXxWfiXg84Mu8A-TlQR0GoT9KtZ96-iTFAOBMW22eY0e2rBuaNiM6ZdrObUXh5Mo4UKJCxB9etMJfRx6Ji~JpQ~V70Lj08~xma7NHdBUs-B73wqclK7cnKqaYAXQkHuSwpISpmSqfWoxTyZG3gFyW9Q8xh4JlpzX4Xa8nggxoN4y87C0rsRpqrefYM-j3u4le5cja4k4r1NYtWaIaQj-1xEZwt6gKfe6m133aO-Nk52mVu8wAslZ2rYfVZJ0XaFxBemXYkjNLqE2Zcp80rHB6h3uARJgzDiDcefeYOu8Q__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/189/image/image.jpg?Expires=1760506702&Signature=gHAdaoNkFxMtLpZaU8~Ug--TkHnHxUFyJVzTxdmRw8HDgkPK0~cvqM6gtHLDef3UmOPx3hAQC5RIFI3hMTRKXuX7eTXGYIP~TlbG8KJTQsD~j5PepS3f5Yu9lZr0vVFpsth-AzG--sGonqPa1~MUECtun3M5doPDsjeGw4N~yr4ndIhTPV3F7WoQBXSGPuITbJ6HQEGMz5f0pBqWuI~29EEmvfqGQvBNlcg55xaQOGsxy9NW0~m1iIumM1UbDVr~-T9kjzecM7qUo-1qwvapGkBxCHrDfc~HvO2kjpfNgfm-PGKlxBXojxiXtwWBGPJdiVgnrvyTfkVtjbyb2UmcvQ__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_89_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 89,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/189/image/image.jpg?Expires=1760506702&Signature=gHAdaoNkFxMtLpZaU8~Ug--TkHnHxUFyJVzTxdmRw8HDgkPK0~cvqM6gtHLDef3UmOPx3hAQC5RIFI3hMTRKXuX7eTXGYIP~TlbG8KJTQsD~j5PepS3f5Yu9lZr0vVFpsth-AzG--sGonqPa1~MUECtun3M5doPDsjeGw4N~yr4ndIhTPV3F7WoQBXSGPuITbJ6HQEGMz5f0pBqWuI~29EEmvfqGQvBNlcg55xaQOGsxy9NW0~m1iIumM1UbDVr~-T9kjzecM7qUo-1qwvapGkBxCHrDfc~HvO2kjpfNgfm-PGKlxBXojxiXtwWBGPJdiVgnrvyTfkVtjbyb2UmcvQ__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/190/image/image.jpg?Expires=1760506702&Signature=sae-2fDHkEhCwuwzF3p~cbTLKNCbQlqu0p5qEZgPz~-sfLDS162MT64kAF0IkXvmD2~Fo6F3lbhuTvSZ2CoV0M7U5ztSP6i3i2axe~trNfcRx-EHnFR2j9Of-YVbezT1UMgRU7pDEEEudnbIAfoWJIheyXA~l7kQYMDELcB9X3FX4rfmvn1PjrTIWIUhO8AlzjYrrnTm1w7m0DlauhBbBZwxDq4tAWC1nCyBaNpSbV323blM84H-6u5mc68wyE5pLu09WXeQzsz8VRQiCJcYglCs4vYTwL1jVVzySqhdec7horIl2nBEvzh1owTuslD3HCBZHzETIHGMwkLO~I0~tA__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_90_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 90,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/190/image/image.jpg?Expires=1760506702&Signature=sae-2fDHkEhCwuwzF3p~cbTLKNCbQlqu0p5qEZgPz~-sfLDS162MT64kAF0IkXvmD2~Fo6F3lbhuTvSZ2CoV0M7U5ztSP6i3i2axe~trNfcRx-EHnFR2j9Of-YVbezT1UMgRU7pDEEEudnbIAfoWJIheyXA~l7kQYMDELcB9X3FX4rfmvn1PjrTIWIUhO8AlzjYrrnTm1w7m0DlauhBbBZwxDq4tAWC1nCyBaNpSbV323blM84H-6u5mc68wyE5pLu09WXeQzsz8VRQiCJcYglCs4vYTwL1jVVzySqhdec7horIl2nBEvzh1owTuslD3HCBZHzETIHGMwkLO~I0~tA__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/191/image/image.jpg?Expires=1760506702&Signature=BbxDbnld1bpjz1YdulBQJm8T2sUb5LS~77QvpLnS7oZlYPmK3UJOOC2DJ-ownxX1Q3x3hCaJ~pbd~1gmE5sSF77dTGUa2YzGq9rYXEocJaL-OsDLLpYBaH0aSTXHKvXj7kVl5RV3LZYk5wjnPbJdUhi1VEtgqkr2jFhV0UbAJ1Eyxg3p7BcprPUycoSJG7id0QMcerIiiXM~iiZ5XyqjS8ZEknWmhlctuSrDynhju24U1n0D1mjNuutARXl7jqjhihjy8mP6NbRog~9s9R9qDd6gsL~mg7U2RURZmfkDgrXZyXNa86oLgDSeiR7Rz-GZ10KJ9AIi04zFXQhye544eA__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_91_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 91,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/191/image/image.jpg?Expires=1760506702&Signature=BbxDbnld1bpjz1YdulBQJm8T2sUb5LS~77QvpLnS7oZlYPmK3UJOOC2DJ-ownxX1Q3x3hCaJ~pbd~1gmE5sSF77dTGUa2YzGq9rYXEocJaL-OsDLLpYBaH0aSTXHKvXj7kVl5RV3LZYk5wjnPbJdUhi1VEtgqkr2jFhV0UbAJ1Eyxg3p7BcprPUycoSJG7id0QMcerIiiXM~iiZ5XyqjS8ZEknWmhlctuSrDynhju24U1n0D1mjNuutARXl7jqjhihjy8mP6NbRog~9s9R9qDd6gsL~mg7U2RURZmfkDgrXZyXNa86oLgDSeiR7Rz-GZ10KJ9AIi04zFXQhye544eA__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/192/image/image.jpg?Expires=1760506702&Signature=Dqyjy7RVEmNyW-djFGeZd-08KG7J1LsQvWgLb8wvQmttj0Rv7M1xoqqdAbCAeseA5hYcaotybR6L9Rzsk-LMtg0hsbCXmeuyJKb7etkMDLw5jvy2kiumeXcQF31BGQuK3DuzBGZLuAFlMGkJ1OdcaZNIljWOSjkSh3xEaHNEF-3U-Z0GrXQBWLvzAaP4RGZPvNU6xpYAkcPr~YKGD8O-SlOOBcuxOQGHoBWfL5Ifcp95t8uzPe5u196cSeB4zIweehYgLKfbOaFEb8MxMLc9LJsTun81K~ZdOMI7GjxFcAWXbd-8faSAoMKjohYrz4kAMG272QMGVOaAHSeyp8bTWQ__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_92_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 92,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/192/image/image.jpg?Expires=1760506702&Signature=Dqyjy7RVEmNyW-djFGeZd-08KG7J1LsQvWgLb8wvQmttj0Rv7M1xoqqdAbCAeseA5hYcaotybR6L9Rzsk-LMtg0hsbCXmeuyJKb7etkMDLw5jvy2kiumeXcQF31BGQuK3DuzBGZLuAFlMGkJ1OdcaZNIljWOSjkSh3xEaHNEF-3U-Z0GrXQBWLvzAaP4RGZPvNU6xpYAkcPr~YKGD8O-SlOOBcuxOQGHoBWfL5Ifcp95t8uzPe5u196cSeB4zIweehYgLKfbOaFEb8MxMLc9LJsTun81K~ZdOMI7GjxFcAWXbd-8faSAoMKjohYrz4kAMG272QMGVOaAHSeyp8bTWQ__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/193/image/image.jpg?Expires=1760506702&Signature=Lx6hLS23fWmmpVBWNsKvqPJB~jfY0hzcsSJAlN-vUrzbBlFJjdE4AuyIk9MYt~KqsKAzbgXwYOR5Pje6hv-7gmWo5hYIpGMDH4Oz7bwnChHTyen1sUzoV8UEpxaLW-eVLSIpggGTNtGkMnWHfpCyzD0-9NwWiW2ub0JxtiSaMY5hi5MCdcN5-ra5Ms35zWWc4od~KccF9d6r7AH77hEJpgc5hPxoDdfeKH5MKsY0AoPa5A~6u~bHczLP4Ky29JI~PaXMcLv-mTQCubwwSCNbMVMBy00BmzRaW0u3cZWPzGII46DRIf-UqkPwuN4mtrYA4reMR00n9ICfw~1DwJZ-OA__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_93_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 93,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/193/image/image.jpg?Expires=1760506702&Signature=Lx6hLS23fWmmpVBWNsKvqPJB~jfY0hzcsSJAlN-vUrzbBlFJjdE4AuyIk9MYt~KqsKAzbgXwYOR5Pje6hv-7gmWo5hYIpGMDH4Oz7bwnChHTyen1sUzoV8UEpxaLW-eVLSIpggGTNtGkMnWHfpCyzD0-9NwWiW2ub0JxtiSaMY5hi5MCdcN5-ra5Ms35zWWc4od~KccF9d6r7AH77hEJpgc5hPxoDdfeKH5MKsY0AoPa5A~6u~bHczLP4Ky29JI~PaXMcLv-mTQCubwwSCNbMVMBy00BmzRaW0u3cZWPzGII46DRIf-UqkPwuN4mtrYA4reMR00n9ICfw~1DwJZ-OA__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/194/image/image.jpg?Expires=1760506702&Signature=ayFuImTI2HaEHXBKNvJIsfbsay8YeOB9pjxhSn6QMQMm~c8JkjD-gFdle8aSG8xQsOu6rWr-w17mcg6WwLVaR0SkdlEQLtlslUlfqeZsyMgJapZO~udqnxQn9d41Ykqny1ZV5zlDXdWoGO7jTSSWfH7yRffhLak5lOvKGezaCfPPZGEQ5N3El-C1kMVuTdHM193gP7ClUHfFwCTdx2vGYVpR9ThAUU7dsBsVrCjsw0wD-XV~k9SNj1yxKevMMOTrPRrDyeuNbm1PSgUPZGylXNZoLyxdk3uxihF9gDrN2fwrmuLDggHAgzc0cyL6P1Xyd7XbefuNXDWVjevop~LfEw__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_94_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 94,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/194/image/image.jpg?Expires=1760506702&Signature=ayFuImTI2HaEHXBKNvJIsfbsay8YeOB9pjxhSn6QMQMm~c8JkjD-gFdle8aSG8xQsOu6rWr-w17mcg6WwLVaR0SkdlEQLtlslUlfqeZsyMgJapZO~udqnxQn9d41Ykqny1ZV5zlDXdWoGO7jTSSWfH7yRffhLak5lOvKGezaCfPPZGEQ5N3El-C1kMVuTdHM193gP7ClUHfFwCTdx2vGYVpR9ThAUU7dsBsVrCjsw0wD-XV~k9SNj1yxKevMMOTrPRrDyeuNbm1PSgUPZGylXNZoLyxdk3uxihF9gDrN2fwrmuLDggHAgzc0cyL6P1Xyd7XbefuNXDWVjevop~LfEw__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/195/image/image.jpg?Expires=1760506702&Signature=BTEbKgXafnxKNcEiVCjCS55X3piTV4ARBVNVyhWUFG2nqSkNJ~uhXcUvDwKwyxdT0aV60-17QOYczDYWQrALCaADEvFR8LR91XA~nxHnFG9TSr2ni9JHJ18KCBJlUthfBlpOID~psgntqONyEPYLQKbhuN1NY-Z-CxbmJg4fQ8osSISsoJYpU~7x94wXmLhL9Vbvym8YSJnL8Rxzb8MMWJi44SyyBy~87meZd2Chh3MUBGfzDZoMZs6U8bXNE~Dyypr1uwI-XGKbwkjhDxHeNDvoK22wRa9Imepm20rwUU9K0B3zYDDkYAZcoIsqx5JFVqw4eytxJJPb1PkJw4M2Kg__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_95_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 95,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/195/image/image.jpg?Expires=1760506702&Signature=BTEbKgXafnxKNcEiVCjCS55X3piTV4ARBVNVyhWUFG2nqSkNJ~uhXcUvDwKwyxdT0aV60-17QOYczDYWQrALCaADEvFR8LR91XA~nxHnFG9TSr2ni9JHJ18KCBJlUthfBlpOID~psgntqONyEPYLQKbhuN1NY-Z-CxbmJg4fQ8osSISsoJYpU~7x94wXmLhL9Vbvym8YSJnL8Rxzb8MMWJi44SyyBy~87meZd2Chh3MUBGfzDZoMZs6U8bXNE~Dyypr1uwI-XGKbwkjhDxHeNDvoK22wRa9Imepm20rwUU9K0B3zYDDkYAZcoIsqx5JFVqw4eytxJJPb1PkJw4M2Kg__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/196/image/image.jpg?Expires=1760506702&Signature=m9dYFRNfyL~kYrn7~Ywcw0yScrWrDcZX6hq2ujp56MaZINF6OQeHtB9xJPOppnBY4YLw7BfKccDgRYDKDkYqbs1FtWPLWlrxQOU7JxlJHld6nfft6idaLRPTDFI5EEXvRo~jO0dO2bGpeHrSXb59Mt0~1uz--Vvx5YvWObLSCgtiMj3vQlUMfj7XEBErrwUlhk4O-82FhO4jZS58eJZSCDbvZCl1s1DOxPRc3O-ilm8CSIpAXkqMgZE6A7DU-~htDaXSWlcKJcccQx5p-xWJMXI2X~pUOGuXF6uSxkLfTf0nqlyqMA5z1P0FKChF8rroWsJCE7cTxk7VL1aePnE7KA__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_96_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 96,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/196/image/image.jpg?Expires=1760506702&Signature=m9dYFRNfyL~kYrn7~Ywcw0yScrWrDcZX6hq2ujp56MaZINF6OQeHtB9xJPOppnBY4YLw7BfKccDgRYDKDkYqbs1FtWPLWlrxQOU7JxlJHld6nfft6idaLRPTDFI5EEXvRo~jO0dO2bGpeHrSXb59Mt0~1uz--Vvx5YvWObLSCgtiMj3vQlUMfj7XEBErrwUlhk4O-82FhO4jZS58eJZSCDbvZCl1s1DOxPRc3O-ilm8CSIpAXkqMgZE6A7DU-~htDaXSWlcKJcccQx5p-xWJMXI2X~pUOGuXF6uSxkLfTf0nqlyqMA5z1P0FKChF8rroWsJCE7cTxk7VL1aePnE7KA__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/197/image/image.jpg?Expires=1760506702&Signature=Z9kIgip0RkRSIrdVGd6Eo1WveCmIH3wUwwon-TiKX0F4Qsiuuvpd2KV5ceK9w6ZdKmi44bCmj5IcaMbTqSME-YqnoVPXtgIViLD6NELlapts2B6b2oRZTmvC~sFfvJ6K3u7uxCimtT6Pk2GMiLtp7FNIvKuzYT5L6lCamhCfs0iwARSjLZchwsQlaSvLFRxRpo9RsPkl5uKe4JnHPxqiTnQBEjKnFpNn0DyAiOUkj-WSWu7IJoiHIsuZT8Y2FhYe-i1byytwfNvc7qN6-CSEa05MzuPVEKEN4XqSYQ~wUMnF9rDRoCxj4Y4tbYan-kTDxCP9-nRho6Z0Z8xpd-61eQ__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_97_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 97,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/197/image/image.jpg?Expires=1760506702&Signature=Z9kIgip0RkRSIrdVGd6Eo1WveCmIH3wUwwon-TiKX0F4Qsiuuvpd2KV5ceK9w6ZdKmi44bCmj5IcaMbTqSME-YqnoVPXtgIViLD6NELlapts2B6b2oRZTmvC~sFfvJ6K3u7uxCimtT6Pk2GMiLtp7FNIvKuzYT5L6lCamhCfs0iwARSjLZchwsQlaSvLFRxRpo9RsPkl5uKe4JnHPxqiTnQBEjKnFpNn0DyAiOUkj-WSWu7IJoiHIsuZT8Y2FhYe-i1byytwfNvc7qN6-CSEa05MzuPVEKEN4XqSYQ~wUMnF9rDRoCxj4Y4tbYan-kTDxCP9-nRho6Z0Z8xpd-61eQ__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/198/image/image.jpg?Expires=1760506702&Signature=klejzP7qfs38sJYWzrQeWYlY-WnTuPy65Hx4-oVXr3lCoMhwDgebxZntnJjOFupMRhZXHGxB0WZLvBk0D5YPBnd8EBHzkj8pSJUpm0m-1nsu2piT6x-8Eb3aC6pBWrww03sfs8bFbMMGISAOIzeIHMHm2zr~1ZFcsp3ftU73b-n-CrBJqVu8jI44usmMs-t3pCLFbLctp0vZJ6V8dVw~BJbkdsHFCYa0dZYuqx9wDN1~CATalR1W1JMKC5HjVzbV~Hm~bLTyyb12uehmwENTs-uDjTJeYxeBEUe09OEIa8lq9FIm~g0xtniMOcGo97Pvpt0H6~tDH2TCIcLxWT-tWA__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_98_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 98,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/198/image/image.jpg?Expires=1760506702&Signature=klejzP7qfs38sJYWzrQeWYlY-WnTuPy65Hx4-oVXr3lCoMhwDgebxZntnJjOFupMRhZXHGxB0WZLvBk0D5YPBnd8EBHzkj8pSJUpm0m-1nsu2piT6x-8Eb3aC6pBWrww03sfs8bFbMMGISAOIzeIHMHm2zr~1ZFcsp3ftU73b-n-CrBJqVu8jI44usmMs-t3pCLFbLctp0vZJ6V8dVw~BJbkdsHFCYa0dZYuqx9wDN1~CATalR1W1JMKC5HjVzbV~Hm~bLTyyb12uehmwENTs-uDjTJeYxeBEUe09OEIa8lq9FIm~g0xtniMOcGo97Pvpt0H6~tDH2TCIcLxWT-tWA__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/199/image/image.jpg?Expires=1760506702&Signature=VLqU4-jZtkrwBo0VjaRMc2fFCPt5mSfLqMzKauI9O~SSaHsEiyYyFPskGmQm4ZFYlaOkddq1IGA4oTKodzJQkxlAXD9FvJ5AIkQRXu3zzAtP1EssLJFWGMpa-EtoJMif6mJJDLABKwrBO4lrtGEZgMjjGZxlm9MjQFNsJIS4xknqOJnNx0lAQG5ofqIiGDm7FGqmt6U1Sg37pcuiHT8fjU35C6Q66CrfgAiSQVLGmLriJpaQ1vvcisyXAkBPN3g3IiehvXyYKTpWxYgowRQyz9abvimtnxZFFgcaAnlgCoVZT5o0zcPKLxDwRdlaKaYkB1qmHt2s9blN~FepmnA-hQ__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_99_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 99,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/199/image/image.jpg?Expires=1760506702&Signature=VLqU4-jZtkrwBo0VjaRMc2fFCPt5mSfLqMzKauI9O~SSaHsEiyYyFPskGmQm4ZFYlaOkddq1IGA4oTKodzJQkxlAXD9FvJ5AIkQRXu3zzAtP1EssLJFWGMpa-EtoJMif6mJJDLABKwrBO4lrtGEZgMjjGZxlm9MjQFNsJIS4xknqOJnNx0lAQG5ofqIiGDm7FGqmt6U1Sg37pcuiHT8fjU35C6Q66CrfgAiSQVLGmLriJpaQ1vvcisyXAkBPN3g3IiehvXyYKTpWxYgowRQyz9abvimtnxZFFgcaAnlgCoVZT5o0zcPKLxDwRdlaKaYkB1qmHt2s9blN~FepmnA-hQ__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/200/image/image.jpg?Expires=1760506703&Signature=h0DdgAb6RHD1d~ZpCrxh3yVuAy7vm09M2OT9Q0G~pbyKzZtnWm6VHt~luLu5jhFMnzpCUW2~ILbKNzEwD81f2F1ICqwZtbNCDUm9yNbAL5GqQAwu4dlFCOiDM-fQfYLx5Z3oZILJcdUSKMQ~gWCKxqmf-7umKgixuLsuWAwdAra4kHrNfZki1kYScauWtodM6vPBZzBHS6bBGJ9afFROtr9cdap2EuQ5JeBf6x6zGrh9vDZsUG9mtldefvVDA~xqkDCHCOozD7vNDq2s6dMX9GxpryKdS6JnGUNNgFQ7zyWImrySeyJnv17h3n1B7bnLAHhPIuR8-lGCWGUqiKQLkg__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_0_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 0,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/200/image/image.jpg?Expires=1760506703&Signature=h0DdgAb6RHD1d~ZpCrxh3yVuAy7vm09M2OT9Q0G~pbyKzZtnWm6VHt~luLu5jhFMnzpCUW2~ILbKNzEwD81f2F1ICqwZtbNCDUm9yNbAL5GqQAwu4dlFCOiDM-fQfYLx5Z3oZILJcdUSKMQ~gWCKxqmf-7umKgixuLsuWAwdAra4kHrNfZki1kYScauWtodM6vPBZzBHS6bBGJ9afFROtr9cdap2EuQ5JeBf6x6zGrh9vDZsUG9mtldefvVDA~xqkDCHCOozD7vNDq2s6dMX9GxpryKdS6JnGUNNgFQ7zyWImrySeyJnv17h3n1B7bnLAHhPIuR8-lGCWGUqiKQLkg__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/201/image/image.jpg?Expires=1760506703&Signature=dWz0j4R1S91lFP4id6OLXHkoIwWDSX6FuT3KyjLT8pa8QBZQa-SH0Tgl7TraeHp1lKyu2tHa640Pdmg7g79GUrL0UDpcypYXDvicOYKcM~~fuSdVbueMxOcqAa8AC5ZWBkkQPN1x5hd72BRWm0~cpiJ~vxQw6n7nBXpAJz17JVi~xXTGphcEYKzUPWgU1tsdOYtAVtlO3452lhjGxI5VdtcqWeFMMHIzoMJzir9Ub~326d5gM4BeBY71HLYbRGrG3hmEAuJJX7AiDOfuaFgD-4My4OiikOA0ESiir46AHU3iN5cBvnamsgkeEcmfhemn2woKCeCgD-mzppufu3sUvw__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_1_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 1,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/201/image/image.jpg?Expires=1760506703&Signature=dWz0j4R1S91lFP4id6OLXHkoIwWDSX6FuT3KyjLT8pa8QBZQa-SH0Tgl7TraeHp1lKyu2tHa640Pdmg7g79GUrL0UDpcypYXDvicOYKcM~~fuSdVbueMxOcqAa8AC5ZWBkkQPN1x5hd72BRWm0~cpiJ~vxQw6n7nBXpAJz17JVi~xXTGphcEYKzUPWgU1tsdOYtAVtlO3452lhjGxI5VdtcqWeFMMHIzoMJzir9Ub~326d5gM4BeBY71HLYbRGrG3hmEAuJJX7AiDOfuaFgD-4My4OiikOA0ESiir46AHU3iN5cBvnamsgkeEcmfhemn2woKCeCgD-mzppufu3sUvw__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/202/image/image.jpg?Expires=1760506703&Signature=mbxbLJ0tMNiNx9GmAk7CEEu2cWujdZeAcFX2eA42h0krDbL4Gy3ZFEKvWV-KdDjGMCHjP1xGPIXd5sm6Fk9KIgicAkJwQmpuuNU4n0JMAkqAlj9p4de6xJd2l2qObQGu5KkmlObXdxBhyAKwQlVLZTo2enu01h1dNhp55hc-ih~A8EzxmvAeuOf~fFZ2bcK4OB8tmlrQcSUMBEahmoBHqBKPc-dR81bZfM1sYnOnhnoDPZNUH7NvUjys8XwxSqRGbM9St~u9ttGOx4uad94zXKNg4PsV2jWzULbNxw4wiPgz0RA3I9-rMsxOyzm~7P8SRpUcxdY3AkQ~2AihSLCxWQ__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_2_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 2,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/202/image/image.jpg?Expires=1760506703&Signature=mbxbLJ0tMNiNx9GmAk7CEEu2cWujdZeAcFX2eA42h0krDbL4Gy3ZFEKvWV-KdDjGMCHjP1xGPIXd5sm6Fk9KIgicAkJwQmpuuNU4n0JMAkqAlj9p4de6xJd2l2qObQGu5KkmlObXdxBhyAKwQlVLZTo2enu01h1dNhp55hc-ih~A8EzxmvAeuOf~fFZ2bcK4OB8tmlrQcSUMBEahmoBHqBKPc-dR81bZfM1sYnOnhnoDPZNUH7NvUjys8XwxSqRGbM9St~u9ttGOx4uad94zXKNg4PsV2jWzULbNxw4wiPgz0RA3I9-rMsxOyzm~7P8SRpUcxdY3AkQ~2AihSLCxWQ__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/203/image/image.jpg?Expires=1760506703&Signature=h~jdXtBoEVPQOEcCBkPq-zjVHAzZHHWJMJ80Rmb3UaZcj7Zp-nfIDrBoVngTeWVe8cDLSrfh7n5DYIbY-DETENG1O8vAqoALEf4x3Fzh50gkGRgGzX0S28g0DwPbD2otrXRTFD6FFtv8FyV0O5kKkcl-fKlLXBqdDla628xE36wShnCf-TMn6m7MqFgiyWzqoH0fmMnCA~QZEUueh7m8PQZNNZbPnpYCquhyz9Eg3tStUGwWl2v7d9v4zqWU3NktF6R43ldR19xmf9joAxM4Muplppw3hCM-5UZCNNOpd4WRtxvNcs88aO0uH1OlIoftkGqMXLI3LleCmhZVAi7gOw__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_3_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 3,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/203/image/image.jpg?Expires=1760506703&Signature=h~jdXtBoEVPQOEcCBkPq-zjVHAzZHHWJMJ80Rmb3UaZcj7Zp-nfIDrBoVngTeWVe8cDLSrfh7n5DYIbY-DETENG1O8vAqoALEf4x3Fzh50gkGRgGzX0S28g0DwPbD2otrXRTFD6FFtv8FyV0O5kKkcl-fKlLXBqdDla628xE36wShnCf-TMn6m7MqFgiyWzqoH0fmMnCA~QZEUueh7m8PQZNNZbPnpYCquhyz9Eg3tStUGwWl2v7d9v4zqWU3NktF6R43ldR19xmf9joAxM4Muplppw3hCM-5UZCNNOpd4WRtxvNcs88aO0uH1OlIoftkGqMXLI3LleCmhZVAi7gOw__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/204/image/image.jpg?Expires=1760506703&Signature=asIandyM4lorv0yHP6UlLboP9717rhhs0Kjmw~PpK4C8TJRxDtdIwMa2XQMptETjUIph6Nia7W986PtwG~dZAwfQNdYhdPKlGYAXrK2ygZZ6AsQNBS~sew5SY0-7Lu4-8vOMGdBhz4sKdLPGO3Vm1jWs-FM49-uXlx4NPkRZo-uU4YiCY1n9mhzEKQZXxdq7BTS4QkbviwIpugmAtK~RBwfQ1F6z6NljUW2RIbMdAw3bPdNCPqVzXImPYygg5oWINO-WYXqQuqyD19dLv821eyTz2Zr30gtnjg90tu4brfNr~Ojk4hGBtf8THX0e7r3bf~w8vJ2QsexEzmTkpaC89Q__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_4_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 4,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/204/image/image.jpg?Expires=1760506703&Signature=asIandyM4lorv0yHP6UlLboP9717rhhs0Kjmw~PpK4C8TJRxDtdIwMa2XQMptETjUIph6Nia7W986PtwG~dZAwfQNdYhdPKlGYAXrK2ygZZ6AsQNBS~sew5SY0-7Lu4-8vOMGdBhz4sKdLPGO3Vm1jWs-FM49-uXlx4NPkRZo-uU4YiCY1n9mhzEKQZXxdq7BTS4QkbviwIpugmAtK~RBwfQ1F6z6NljUW2RIbMdAw3bPdNCPqVzXImPYygg5oWINO-WYXqQuqyD19dLv821eyTz2Zr30gtnjg90tu4brfNr~Ojk4hGBtf8THX0e7r3bf~w8vJ2QsexEzmTkpaC89Q__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/205/image/image.jpg?Expires=1760506703&Signature=hiayBCDfpKzyODzdT6C3aXbbenHhTqVbf0BWczg0BRtcsjIrFd-BTOqisHzh3Ef2lzH6CHEXbNXQv5o7hhwOkQnwppMSHfNvQfB6TDhVFipXUWnyqXokQiRFvf3Gmvz0J-IaFuULAxEUBJg6HWowHIEqDAqq02eKhgvAT93rD~n8tRsYwsuUTKNdfyXi19RGjGJs2Nn-r9XO79gTfYtxJJL2G4m3Twih36sGan5ooWI6Q1k660UNpovpo3DkMd6YYwgYvThjMNHyVakwHQSXEte~5weJWooPYJauXG2fwZBKPdhs6yVGvBvzzSVdV~nPf87xJRjyj0uJolilzfEkJQ__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_5_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 5,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/205/image/image.jpg?Expires=1760506703&Signature=hiayBCDfpKzyODzdT6C3aXbbenHhTqVbf0BWczg0BRtcsjIrFd-BTOqisHzh3Ef2lzH6CHEXbNXQv5o7hhwOkQnwppMSHfNvQfB6TDhVFipXUWnyqXokQiRFvf3Gmvz0J-IaFuULAxEUBJg6HWowHIEqDAqq02eKhgvAT93rD~n8tRsYwsuUTKNdfyXi19RGjGJs2Nn-r9XO79gTfYtxJJL2G4m3Twih36sGan5ooWI6Q1k660UNpovpo3DkMd6YYwgYvThjMNHyVakwHQSXEte~5weJWooPYJauXG2fwZBKPdhs6yVGvBvzzSVdV~nPf87xJRjyj0uJolilzfEkJQ__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/206/image/image.jpg?Expires=1760506703&Signature=zRnd35XhCTi9yvaj-kZdQMNeOYybYrmQ2O4WO4SV2qhbms1Z-~skXoDZBEKZtxkbtZZeMcGzqqmQn3Ex8Rd-MNPWgcu02Nrj6l4-Jo6WE24kviX1Ac58MqXjVKtfyA0JXTiY-sn65Y37VmTXuk2yUc-rK5s4VPfGlF~mF0lSasXkYBhQ-O9HOtKR7ypxyB-IsbCxYxWXcIaCaE7sATkwqpNq6Zq02uBXTXPG2sEY4sI25erSYFFjLFVnKQi6~4VWXmhw9Cb366WkzOEpFqaXs50v9avMYmS1xv3u8gJHD5xU-uJ3WXzmT93JH-2bhcvv66bAqss1WG7oR2nEEhjY-w__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_6_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 6,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/206/image/image.jpg?Expires=1760506703&Signature=zRnd35XhCTi9yvaj-kZdQMNeOYybYrmQ2O4WO4SV2qhbms1Z-~skXoDZBEKZtxkbtZZeMcGzqqmQn3Ex8Rd-MNPWgcu02Nrj6l4-Jo6WE24kviX1Ac58MqXjVKtfyA0JXTiY-sn65Y37VmTXuk2yUc-rK5s4VPfGlF~mF0lSasXkYBhQ-O9HOtKR7ypxyB-IsbCxYxWXcIaCaE7sATkwqpNq6Zq02uBXTXPG2sEY4sI25erSYFFjLFVnKQi6~4VWXmhw9Cb366WkzOEpFqaXs50v9avMYmS1xv3u8gJHD5xU-uJ3WXzmT93JH-2bhcvv66bAqss1WG7oR2nEEhjY-w__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/207/image/image.jpg?Expires=1760506703&Signature=u1lYzAaDUgNorNGHA8ib-vxCY~bIYRNvW8dioS0i~SoekCyRW02ypq0g9PoMcdEeT~c2lT5gMJdixpobQDjswkJgCfi-vW84GraQeU8P2T-Plw3ZqXhJREffKBrtXB08zCWgEM8Kk7S2RUaYV7jk68UyIkmAuMwFproY0D9cOHYUi3M85HOjAVOTJyRNCxyIfNqbPmfTDeVC9eHOKEcLtjegR9oKfE6sdBkA8E52oOL9QWMbO9sskwQsJ~mW~ToezHWzJp61JIpx2v1JJO8qvzZbBkXTVv7efa4r77SXgOhJ8vWBKbOmw2QooC2zKqiUUNyvj4iQKMu9HwP-7oDbtw__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_7_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 7,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/207/image/image.jpg?Expires=1760506703&Signature=u1lYzAaDUgNorNGHA8ib-vxCY~bIYRNvW8dioS0i~SoekCyRW02ypq0g9PoMcdEeT~c2lT5gMJdixpobQDjswkJgCfi-vW84GraQeU8P2T-Plw3ZqXhJREffKBrtXB08zCWgEM8Kk7S2RUaYV7jk68UyIkmAuMwFproY0D9cOHYUi3M85HOjAVOTJyRNCxyIfNqbPmfTDeVC9eHOKEcLtjegR9oKfE6sdBkA8E52oOL9QWMbO9sskwQsJ~mW~ToezHWzJp61JIpx2v1JJO8qvzZbBkXTVv7efa4r77SXgOhJ8vWBKbOmw2QooC2zKqiUUNyvj4iQKMu9HwP-7oDbtw__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/208/image/image.jpg?Expires=1760506703&Signature=ZbDaDcbxeSMADxopyrB9vmmmJ5nUHn54H6dPg27tZrg5Vq9KMEknH9YMCNNlUtf4yr-ynDvDnBGyMgbA9TWi07kB9BZuRGiO~yCudcrMayfsD0Ioq2BEDLqaaAkdBOqlckqSPkt0uxiDcOgXekTDpshWHNY1zOtr9S~LmDph~GmsmeYkJB1CXI23w2NtTvqRrZSV2zRfmkxyI-IxZYlxj7BTrHNnC32HlGAEUA8GMmkHmo~UkGi0K9R~MNgCPuaXnf~ZvENDikAZVL3NYMjC~ARtjLFy4Kb4ZKTqHM96jJ9fAJKdqcp~kqh2fyHED2GXPW5mk3zxqYii1lAhpYsLjQ__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_8_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 8,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/208/image/image.jpg?Expires=1760506703&Signature=ZbDaDcbxeSMADxopyrB9vmmmJ5nUHn54H6dPg27tZrg5Vq9KMEknH9YMCNNlUtf4yr-ynDvDnBGyMgbA9TWi07kB9BZuRGiO~yCudcrMayfsD0Ioq2BEDLqaaAkdBOqlckqSPkt0uxiDcOgXekTDpshWHNY1zOtr9S~LmDph~GmsmeYkJB1CXI23w2NtTvqRrZSV2zRfmkxyI-IxZYlxj7BTrHNnC32HlGAEUA8GMmkHmo~UkGi0K9R~MNgCPuaXnf~ZvENDikAZVL3NYMjC~ARtjLFy4Kb4ZKTqHM96jJ9fAJKdqcp~kqh2fyHED2GXPW5mk3zxqYii1lAhpYsLjQ__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/209/image/image.jpg?Expires=1760506703&Signature=qF8G8pNunRU6--NpTnQRv~qsfX2YnAD5UxFPa1q21TL3pj8M5z6sPk3-4XnVAvKcBLkbyxXfJgaOPdEmNw-0Z2kGVWSYuCTN2l0AS-kO7gYaLBlCR6Q~zTEB-NU9snncy~9JyL4Ata6wNYNmzyJrIFbI9ChbeE4BcjoV2Zu5k0L6-uO9f2PNWt8d5xUx5wryyV92QR9zwVbpkTzg~iMChPe6YwUzSolRJGfMFlrP6WATmD2FB2yZikdZ-jzyMWyZKcNVLc-qYBz6DN6oPfoXehHqj6JtUSn-KN8El6Pr~rIcDDWQT08qf0aeph48zVXHyp~ZwVwRc5CMWayhJkmUFA__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_9_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 9,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/209/image/image.jpg?Expires=1760506703&Signature=qF8G8pNunRU6--NpTnQRv~qsfX2YnAD5UxFPa1q21TL3pj8M5z6sPk3-4XnVAvKcBLkbyxXfJgaOPdEmNw-0Z2kGVWSYuCTN2l0AS-kO7gYaLBlCR6Q~zTEB-NU9snncy~9JyL4Ata6wNYNmzyJrIFbI9ChbeE4BcjoV2Zu5k0L6-uO9f2PNWt8d5xUx5wryyV92QR9zwVbpkTzg~iMChPe6YwUzSolRJGfMFlrP6WATmD2FB2yZikdZ-jzyMWyZKcNVLc-qYBz6DN6oPfoXehHqj6JtUSn-KN8El6Pr~rIcDDWQT08qf0aeph48zVXHyp~ZwVwRc5CMWayhJkmUFA__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/210/image/image.jpg?Expires=1760506703&Signature=Bf-HRJDDAMODlbkkxSckkpT19UbXEEkg2yG-T6bkO2Acq47BDnBohf11i8l3m~9hVs2Pk0GC7HsceW5mTM3DL~e8zoqPVrLqmalUtr9kaCycBY3ovBcw7-x4Pf1k85t9yd8TNBioev6wm20sa7a5c3JprNw0RD8gEkrJQMROeLzBhsrA0lqJiuSjXYrY04ReyN~2SS2qqMpccSPxIx4RATj8-fSKusCEcIDFv9KmddH2YkOguwaXgtAsxRyo0q6WYW3XMnXMkEi7J0ru5as3aIHBJtfgN6D-mp1mwK2xMdyFlTND0s6u5HIlPTGlSvTO~2~8Nt3CfhuacNSnYHRDIA__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_10_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 10,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/210/image/image.jpg?Expires=1760506703&Signature=Bf-HRJDDAMODlbkkxSckkpT19UbXEEkg2yG-T6bkO2Acq47BDnBohf11i8l3m~9hVs2Pk0GC7HsceW5mTM3DL~e8zoqPVrLqmalUtr9kaCycBY3ovBcw7-x4Pf1k85t9yd8TNBioev6wm20sa7a5c3JprNw0RD8gEkrJQMROeLzBhsrA0lqJiuSjXYrY04ReyN~2SS2qqMpccSPxIx4RATj8-fSKusCEcIDFv9KmddH2YkOguwaXgtAsxRyo0q6WYW3XMnXMkEi7J0ru5as3aIHBJtfgN6D-mp1mwK2xMdyFlTND0s6u5HIlPTGlSvTO~2~8Nt3CfhuacNSnYHRDIA__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/211/image/image.jpg?Expires=1760506703&Signature=w4OiuF9ahWiixXS1YWnL51N7Ili~Rp3KlmMO~1qSWnRWcHqLFtWExenPFyG~zUwrjcFH0Gl4bgiojbmaGFWJznPYad9TFcFH17dhAJvc~YOUT-5dOrO3oMVzHkPKyS1O7myKx3DunH6xs62jxYzphVPxuQUhYBwwwf8lh-tIhFfJYtPj5VZdbASsrqYEOFw44Cc7Ros4proCBs11CFDmcXqDOYrEJm19Y19Us9cgwpTCfzwgCtIHBWfE-~CmGU-9TJHvs8173AAsZOuQJNcB2oWfBVYjt~NlnB6DC0wBmtP2n0w-yuT-akTH5rULi-nGgy-3mbmjZxNDQtlpu1k3Yw__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_11_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 11,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/211/image/image.jpg?Expires=1760506703&Signature=w4OiuF9ahWiixXS1YWnL51N7Ili~Rp3KlmMO~1qSWnRWcHqLFtWExenPFyG~zUwrjcFH0Gl4bgiojbmaGFWJznPYad9TFcFH17dhAJvc~YOUT-5dOrO3oMVzHkPKyS1O7myKx3DunH6xs62jxYzphVPxuQUhYBwwwf8lh-tIhFfJYtPj5VZdbASsrqYEOFw44Cc7Ros4proCBs11CFDmcXqDOYrEJm19Y19Us9cgwpTCfzwgCtIHBWfE-~CmGU-9TJHvs8173AAsZOuQJNcB2oWfBVYjt~NlnB6DC0wBmtP2n0w-yuT-akTH5rULi-nGgy-3mbmjZxNDQtlpu1k3Yw__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/212/image/image.jpg?Expires=1760506703&Signature=J7EbcN3QULSmjHsQRK~ni8qm7u1DXxjhEhIewDVBgPVDcjcuIwXYthSLsti5K8wOQhmDNEBU2zvDCSaKiiPTrA3zpMwgCFWvVlT9j0~p4Z5WqyfSqZ-ggj6f0lTRZH0R4PJbKkDeA1uo2V-fI5ljxHEgj~buAemL4GPEDCIHd9ck21mcMduj9zf3aCQOpPuw2Ecn2wG6pfH1BoF4iLq5M98b212eHsv952GLVn4Ly3QHtZhYrMdRXZYb0RO04xOOo1XHUJDxfxg4OsOm7Ps9Uz1YSc4ouokIB2HAnG8vK5gcYL0mGcqpVh0uNRRLxN5r~d9SNZxIw9tdAeen1pA-JQ__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_12_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 12,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/212/image/image.jpg?Expires=1760506703&Signature=J7EbcN3QULSmjHsQRK~ni8qm7u1DXxjhEhIewDVBgPVDcjcuIwXYthSLsti5K8wOQhmDNEBU2zvDCSaKiiPTrA3zpMwgCFWvVlT9j0~p4Z5WqyfSqZ-ggj6f0lTRZH0R4PJbKkDeA1uo2V-fI5ljxHEgj~buAemL4GPEDCIHd9ck21mcMduj9zf3aCQOpPuw2Ecn2wG6pfH1BoF4iLq5M98b212eHsv952GLVn4Ly3QHtZhYrMdRXZYb0RO04xOOo1XHUJDxfxg4OsOm7Ps9Uz1YSc4ouokIB2HAnG8vK5gcYL0mGcqpVh0uNRRLxN5r~d9SNZxIw9tdAeen1pA-JQ__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/213/image/image.jpg?Expires=1760506703&Signature=rfb~8AWn5TyrWMkYy40NxiHRxjJ8jGA61j2nsHg1S4esu-MRjf7yOCprQuE6vTYpMKS06j9jog1r~ZUhML82~KtNKnNjM1FnXB-lxHsmaS8Xt8MO2MjeXGhskXtHx5yfJCOK2auxfWEf-boihz9PmWkC8Vdpb3eIL8chVIcCBMVQpLHdWnMa0uwM4DERZgduQO00VTUEJvqtbfazhATliEfE5qMnJiccI0lvhy-eeS8~4SXbG8pyJlU-5wC9sYnFFcmHNEPduwEiwQpQcZ-SlrXYHMJw4l7H~PkCMk2UsVseMS4Vz6bqX9uH81Z1nwtD5H2JM9oaZkro~XuIX1WGnw__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_13_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 13,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/213/image/image.jpg?Expires=1760506703&Signature=rfb~8AWn5TyrWMkYy40NxiHRxjJ8jGA61j2nsHg1S4esu-MRjf7yOCprQuE6vTYpMKS06j9jog1r~ZUhML82~KtNKnNjM1FnXB-lxHsmaS8Xt8MO2MjeXGhskXtHx5yfJCOK2auxfWEf-boihz9PmWkC8Vdpb3eIL8chVIcCBMVQpLHdWnMa0uwM4DERZgduQO00VTUEJvqtbfazhATliEfE5qMnJiccI0lvhy-eeS8~4SXbG8pyJlU-5wC9sYnFFcmHNEPduwEiwQpQcZ-SlrXYHMJw4l7H~PkCMk2UsVseMS4Vz6bqX9uH81Z1nwtD5H2JM9oaZkro~XuIX1WGnw__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/214/image/image.jpg?Expires=1760506703&Signature=F3pRrn1urrDB4Ci758W2ERlzmSPMozHDHftLQJmFRtmL4uEJYis0u8l9BhXZNnNCDhMI3oUSy5tJFLitZpTsr1ODcRQr~BxsrHo9VLx8sm9L6PxpA4C4TigQeb1XwVifjcaatprAkV70xw984xECUSHt0WEUjNG~IPxXmbQZtWBGbzWdGV94LH7dl2DlE56UjvbKh5u1HbYo7iPDBpX5V6tEfCPUnhzMZp7zm6r5Nj3vVNWPo94ywozjhtid2CKyuLg4F2VuUSZ1hDFwCU-SC9eghMidD1~8Loq5B0NhLSjngF-lTUr11xDWMOrmHtNrk57wXlXPEwydNA8h5VjTUw__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_14_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 14,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/214/image/image.jpg?Expires=1760506703&Signature=F3pRrn1urrDB4Ci758W2ERlzmSPMozHDHftLQJmFRtmL4uEJYis0u8l9BhXZNnNCDhMI3oUSy5tJFLitZpTsr1ODcRQr~BxsrHo9VLx8sm9L6PxpA4C4TigQeb1XwVifjcaatprAkV70xw984xECUSHt0WEUjNG~IPxXmbQZtWBGbzWdGV94LH7dl2DlE56UjvbKh5u1HbYo7iPDBpX5V6tEfCPUnhzMZp7zm6r5Nj3vVNWPo94ywozjhtid2CKyuLg4F2VuUSZ1hDFwCU-SC9eghMidD1~8Loq5B0NhLSjngF-lTUr11xDWMOrmHtNrk57wXlXPEwydNA8h5VjTUw__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/215/image/image.jpg?Expires=1760506703&Signature=niWzQ~kfXmxXHIwbjdvPJzSgO7ke3f2coatcIlnwRHIMhLCNa-~XW2rDS1Gt3DBFHFCdLnQWcENfk4C2S1EQ7-ueSz-n5pxLjZls2XzzwpBz51Z4tEIDRSGzHzkD8UOVeJKs8At1GT40vfmfPwEwL4c8ArRzW1Q5QjhRI~xiUMuFBTxIrb6Bq2Tp4lIwQhCwMXSUnWDA0Nn~aL3Hv3JPk43c2O9L4kjPnp2~wAyQElIzg0N0ruDqShUiN3IUi-GxnZA0ohs8~eXVCATtBlRnAoaMWB-A~p-3JjEtKnIcifwzRFnaUA6ApOJscMC0fjr3Kx87yQOQ2y2mTL1rh3YtJA__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_15_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 15,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/215/image/image.jpg?Expires=1760506703&Signature=niWzQ~kfXmxXHIwbjdvPJzSgO7ke3f2coatcIlnwRHIMhLCNa-~XW2rDS1Gt3DBFHFCdLnQWcENfk4C2S1EQ7-ueSz-n5pxLjZls2XzzwpBz51Z4tEIDRSGzHzkD8UOVeJKs8At1GT40vfmfPwEwL4c8ArRzW1Q5QjhRI~xiUMuFBTxIrb6Bq2Tp4lIwQhCwMXSUnWDA0Nn~aL3Hv3JPk43c2O9L4kjPnp2~wAyQElIzg0N0ruDqShUiN3IUi-GxnZA0ohs8~eXVCATtBlRnAoaMWB-A~p-3JjEtKnIcifwzRFnaUA6ApOJscMC0fjr3Kx87yQOQ2y2mTL1rh3YtJA__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/216/image/image.jpg?Expires=1760506703&Signature=A-F4-btkBOrzqh2Ce2LBCEC4hAntRXdurfWJoxvsMgyEZ8a5wEaloudq1qOk5fjIZLUgBjIiryFCizonqzubxdnNl7SKBisN1IBHkmpLnUAYX3Hx~2KvxvkOMURbTqQVE1uypK09ZG7KaXA1CjnlKKVjwzhQ4HLcXK3y5Bi7UFPD4Hrme6ZyN8dels-oCzanbVC4ZGbfc-XhwOwhz3TDa7D7iM-VRtgBqSO4NFdjO41vgzcSG2hXJmRQVpbpvqtnT5~PnTP~O21viao2jiiF2jKn5CPDa2JHr-~mtpPgNTj2eKZwqn7XI9K4zN9a4G9ljrImvtq7--Ftk0jdRGlT7g__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_16_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 16,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/216/image/image.jpg?Expires=1760506703&Signature=A-F4-btkBOrzqh2Ce2LBCEC4hAntRXdurfWJoxvsMgyEZ8a5wEaloudq1qOk5fjIZLUgBjIiryFCizonqzubxdnNl7SKBisN1IBHkmpLnUAYX3Hx~2KvxvkOMURbTqQVE1uypK09ZG7KaXA1CjnlKKVjwzhQ4HLcXK3y5Bi7UFPD4Hrme6ZyN8dels-oCzanbVC4ZGbfc-XhwOwhz3TDa7D7iM-VRtgBqSO4NFdjO41vgzcSG2hXJmRQVpbpvqtnT5~PnTP~O21viao2jiiF2jKn5CPDa2JHr-~mtpPgNTj2eKZwqn7XI9K4zN9a4G9ljrImvtq7--Ftk0jdRGlT7g__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/217/image/image.jpg?Expires=1760506703&Signature=VN~g8PChJnyEJnljQrx31FlLM-Bevs04wZH-KdoxbqIn0V1A1~z~YROXmT0VXVl0KMGGFG1MHtGOkSm8ZYtK2ozSdII9nd79BRSQxTowjXCo9q8WwQkVhVCLR3R~rjTptB5c-aSS4HGz~DxFUpGvb~G56KmpNQEhfByNg2VE-DQJ9BPlsaiEKBtEy3Y9zZP5o9oLJJ4nRCeFbCGrMj4~dI8cUo~DKeromdGs5jR011HYj53paR02~fgV7s6AnHamICXhJeERU53SzKGTSWnDAG8iZ4PR7xtoQj0x8Bfj2DyBR4yyi5-g07ozJVatZIJJLxNhTxSjQWkbC7YZ4xb0AA__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_17_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 17,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/217/image/image.jpg?Expires=1760506703&Signature=VN~g8PChJnyEJnljQrx31FlLM-Bevs04wZH-KdoxbqIn0V1A1~z~YROXmT0VXVl0KMGGFG1MHtGOkSm8ZYtK2ozSdII9nd79BRSQxTowjXCo9q8WwQkVhVCLR3R~rjTptB5c-aSS4HGz~DxFUpGvb~G56KmpNQEhfByNg2VE-DQJ9BPlsaiEKBtEy3Y9zZP5o9oLJJ4nRCeFbCGrMj4~dI8cUo~DKeromdGs5jR011HYj53paR02~fgV7s6AnHamICXhJeERU53SzKGTSWnDAG8iZ4PR7xtoQj0x8Bfj2DyBR4yyi5-g07ozJVatZIJJLxNhTxSjQWkbC7YZ4xb0AA__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/218/image/image.jpg?Expires=1760506703&Signature=uBvm9Zv5vbfaENfjWNA9aMGtTQVYRG9WvxSrLSxTivCzPvEYHA6jNWtMT~21k3YNXBw7ZCm1LTftT7F1sFjgaad1EuTgCUVWUWxw~1USiIIa4Xq3FEbb747MkxHvvIUckCnpDj3cU7pUkNeIQMCa2RyI3GOYITf6-NBs-TMvK0AurOhiUHhaLWOblhudDWXeDOS~6KXO4nIXKsvVixKz45Brz1f9WKGGe7uilo2XRp~P8qoAzDmmYhxFn-~Ky2aW69L6sdWorsYKdUarjl3jca-NB9Lx~uRwSk1SWd7mCibbIuxrPd1NT7y3yqcjfqNEyLoSvj5Y7z3rUHOP8RlvXA__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_18_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 18,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/218/image/image.jpg?Expires=1760506703&Signature=uBvm9Zv5vbfaENfjWNA9aMGtTQVYRG9WvxSrLSxTivCzPvEYHA6jNWtMT~21k3YNXBw7ZCm1LTftT7F1sFjgaad1EuTgCUVWUWxw~1USiIIa4Xq3FEbb747MkxHvvIUckCnpDj3cU7pUkNeIQMCa2RyI3GOYITf6-NBs-TMvK0AurOhiUHhaLWOblhudDWXeDOS~6KXO4nIXKsvVixKz45Brz1f9WKGGe7uilo2XRp~P8qoAzDmmYhxFn-~Ky2aW69L6sdWorsYKdUarjl3jca-NB9Lx~uRwSk1SWd7mCibbIuxrPd1NT7y3yqcjfqNEyLoSvj5Y7z3rUHOP8RlvXA__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/219/image/image.jpg?Expires=1760506703&Signature=PIjuVnMDQbtyI~1H9PUIl9tKldyYqCyraWOeRJ0q-~LPyPdezxKuvp6rDvxPXTjBoOs0UEVEtFXZVcDAfELmOaUjVUXY27~-SAswNs5VjeoF9o~-BJGJbtn6cXO-xYlW-RadIIqaFapyl1jeKHgDaCwTmqhmpjR0NUXmfVa5Yvss3pTD8VgMMHwjwchkwq8LF4moiCvKkBJgzz~lY8FHiqBc2E1BLGm~4Wpbn6mo~kBnvto4jBMxuFNbw7CT-8EyEUH6F~XQsTVv7Ixuw2tSmc3X86Aq2R~6JeBiHeeoHJTfNzbTb7MKu4DX8B1l7BPS1dr7E2LtX81kCX~9NmozGQ__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_19_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 19,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/219/image/image.jpg?Expires=1760506703&Signature=PIjuVnMDQbtyI~1H9PUIl9tKldyYqCyraWOeRJ0q-~LPyPdezxKuvp6rDvxPXTjBoOs0UEVEtFXZVcDAfELmOaUjVUXY27~-SAswNs5VjeoF9o~-BJGJbtn6cXO-xYlW-RadIIqaFapyl1jeKHgDaCwTmqhmpjR0NUXmfVa5Yvss3pTD8VgMMHwjwchkwq8LF4moiCvKkBJgzz~lY8FHiqBc2E1BLGm~4Wpbn6mo~kBnvto4jBMxuFNbw7CT-8EyEUH6F~XQsTVv7Ixuw2tSmc3X86Aq2R~6JeBiHeeoHJTfNzbTb7MKu4DX8B1l7BPS1dr7E2LtX81kCX~9NmozGQ__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/220/image/image.jpg?Expires=1760506703&Signature=WWB1jY-fVk5AebOBnO5ZLPe7B5BfzFRHlWdnKeXSGLmZByKxnkZQVkn7n1YhkMvPCCEFtre1EPahy7DK50YvifI2ZYMErBsg-J8gi3ZsOXWOEqrgRiAUKxCn696eYbApekFeKR2Ay7P9WL3q~Wz4w-pbgzRi-r3UcU0yVW43ngXxltxWYp-5XCM7nXhgU2ALljuFgNHrKyUoC13fy-Iq-oYl5QoQ3SrVaKHR2-2uht0lWyg59iw6AI-T9dKcrgknzCY5P915g9DKAGlAWxMU6xJAHFmjbn3-LvR63mprtGkzNJLtgBi-SE6I0f7F2QJ62ntEa5jMlJbV1uHN0RCiHg__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_20_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 20,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/220/image/image.jpg?Expires=1760506703&Signature=WWB1jY-fVk5AebOBnO5ZLPe7B5BfzFRHlWdnKeXSGLmZByKxnkZQVkn7n1YhkMvPCCEFtre1EPahy7DK50YvifI2ZYMErBsg-J8gi3ZsOXWOEqrgRiAUKxCn696eYbApekFeKR2Ay7P9WL3q~Wz4w-pbgzRi-r3UcU0yVW43ngXxltxWYp-5XCM7nXhgU2ALljuFgNHrKyUoC13fy-Iq-oYl5QoQ3SrVaKHR2-2uht0lWyg59iw6AI-T9dKcrgknzCY5P915g9DKAGlAWxMU6xJAHFmjbn3-LvR63mprtGkzNJLtgBi-SE6I0f7F2QJ62ntEa5jMlJbV1uHN0RCiHg__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/221/image/image.jpg?Expires=1760506703&Signature=y8LK3aHqfcePkSFILfUv~JTH49ldYyC4O-UzmpMkvg~izggFF~5Mb7-unuancXGuvGRB0lTa7AEuPzZXOrHC2HNB9-wZljqN3uGf0ev4Qynh2JrCElW-GqiAiQyknfZ8maOBnG1V5tI7GhnslT30ZKKLXO~d8kpgLHGUcXbSPK7-mrw87GVQ4oHfga-ps9Z-YIPOtK4jfDGl4hYjrdrXAKvjq8ZWU5VvclZUj~8Jd58ppDz8bvULffTvLYIXtLXWHYtqoEGT~GudxMTsyUKXfXT0z6EUZ4uEfby1G0qwXqAFST9tDrSwU0h-2nsdd0J7JfcBtZ9AgEgCa~MLPSilcw__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_21_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 21,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/221/image/image.jpg?Expires=1760506703&Signature=y8LK3aHqfcePkSFILfUv~JTH49ldYyC4O-UzmpMkvg~izggFF~5Mb7-unuancXGuvGRB0lTa7AEuPzZXOrHC2HNB9-wZljqN3uGf0ev4Qynh2JrCElW-GqiAiQyknfZ8maOBnG1V5tI7GhnslT30ZKKLXO~d8kpgLHGUcXbSPK7-mrw87GVQ4oHfga-ps9Z-YIPOtK4jfDGl4hYjrdrXAKvjq8ZWU5VvclZUj~8Jd58ppDz8bvULffTvLYIXtLXWHYtqoEGT~GudxMTsyUKXfXT0z6EUZ4uEfby1G0qwXqAFST9tDrSwU0h-2nsdd0J7JfcBtZ9AgEgCa~MLPSilcw__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/222/image/image.jpg?Expires=1760506703&Signature=HKetIim8GFGlMF6U-lxR5ntOGUuRrpDoMSth24uypx~eT5x9KhuW4sCD0UUwjUnYth6zdcHDSSGfju-tOnFcU0yqa10b3d7~EyXVyTF-PrKaRW7oYgFGMK9e4pjmMa0~pdumlOQF5Qslsb2lhk--1UPO7DKJ0gbDtpKNPdIyR0BuBfP22rJbxKhzNdLWMNUUGJjWG7J63NzJSfMpOuZtoSteVjD8qtlA57AvIzGlvwtZCeDdReXgeEh8JIUNG8szayhGQJ~iRI~kmxsHQrfCNO5~E~xq5uuRIGO0K3Rs8Lq~Px6zCq6KLE3mlAqPTKu5F4J3YJCW0pfX8XY55APwWA__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_22_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 22,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/222/image/image.jpg?Expires=1760506703&Signature=HKetIim8GFGlMF6U-lxR5ntOGUuRrpDoMSth24uypx~eT5x9KhuW4sCD0UUwjUnYth6zdcHDSSGfju-tOnFcU0yqa10b3d7~EyXVyTF-PrKaRW7oYgFGMK9e4pjmMa0~pdumlOQF5Qslsb2lhk--1UPO7DKJ0gbDtpKNPdIyR0BuBfP22rJbxKhzNdLWMNUUGJjWG7J63NzJSfMpOuZtoSteVjD8qtlA57AvIzGlvwtZCeDdReXgeEh8JIUNG8szayhGQJ~iRI~kmxsHQrfCNO5~E~xq5uuRIGO0K3Rs8Lq~Px6zCq6KLE3mlAqPTKu5F4J3YJCW0pfX8XY55APwWA__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/223/image/image.jpg?Expires=1760506703&Signature=AuSXZztYaT4Z5e6HrLtfb3fAOwAeehK20q0JzichNZ0L1mAULSaOflUC8jlsb9JeFuk9Mo6IO5sULOkWkyNZ0YlrbKkd-8a4nsq~qCNz0QKxjJwW08W7tDSsmfY5BS1kTag3J8v8QhjX6R1EtYfHvABQt76w39EtfeB-bsoCKMxvRsA5jrOQYpF5NNQ-jwm9HXth1vFdCiQYuk3wz0qmsVcQfMj0-ZxWY1NpqqzWxIfkD9Oc~773ezGLFOHLIwGwpz2HwQJgWius51PS18TnFMqR-8qrvNeUnpCKvQu5jdICT8XpLzecKLKLzZn8YQeKJz~JtVqVRceiFESH~6z16A__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_23_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 23,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/223/image/image.jpg?Expires=1760506703&Signature=AuSXZztYaT4Z5e6HrLtfb3fAOwAeehK20q0JzichNZ0L1mAULSaOflUC8jlsb9JeFuk9Mo6IO5sULOkWkyNZ0YlrbKkd-8a4nsq~qCNz0QKxjJwW08W7tDSsmfY5BS1kTag3J8v8QhjX6R1EtYfHvABQt76w39EtfeB-bsoCKMxvRsA5jrOQYpF5NNQ-jwm9HXth1vFdCiQYuk3wz0qmsVcQfMj0-ZxWY1NpqqzWxIfkD9Oc~773ezGLFOHLIwGwpz2HwQJgWius51PS18TnFMqR-8qrvNeUnpCKvQu5jdICT8XpLzecKLKLzZn8YQeKJz~JtVqVRceiFESH~6z16A__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/224/image/image.jpg?Expires=1760506703&Signature=MvsW6BQjREkVjmIq-yKq5BGI2nScFTavdOU2pRgnZmOx5eF-5twGkxKLW5VXnxVlynx6J~9BaK8LWjWGr-QunIRHRBrSOXc9RdI8YAOxM9ZH9mh38tSzDfWQ1mtpuycD0pyvGg-f8jRMHT0BrpLZPQYtdVqg73hhCyePNVWnhWi9Qp-zkutX3zTPgSnu0dQ~nWzudlhdIITjXshJ0OnJRrJAr5DGjqUpRV0pgSS4xzlfI4zUOzvPpdUjw-kMs-XQ9tUKhaHgr23VMJue0llo5WvxyRSY8c5Cq3aE6gPXXvVeDh6CwwvSXGAQD-APAinahIdneP45yvWSvbAa9fLJ8w__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_24_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 24,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/224/image/image.jpg?Expires=1760506703&Signature=MvsW6BQjREkVjmIq-yKq5BGI2nScFTavdOU2pRgnZmOx5eF-5twGkxKLW5VXnxVlynx6J~9BaK8LWjWGr-QunIRHRBrSOXc9RdI8YAOxM9ZH9mh38tSzDfWQ1mtpuycD0pyvGg-f8jRMHT0BrpLZPQYtdVqg73hhCyePNVWnhWi9Qp-zkutX3zTPgSnu0dQ~nWzudlhdIITjXshJ0OnJRrJAr5DGjqUpRV0pgSS4xzlfI4zUOzvPpdUjw-kMs-XQ9tUKhaHgr23VMJue0llo5WvxyRSY8c5Cq3aE6gPXXvVeDh6CwwvSXGAQD-APAinahIdneP45yvWSvbAa9fLJ8w__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/225/image/image.jpg?Expires=1760506703&Signature=PC4XCJZLVAtaQv~cTsLxoH6-vJitKn2CYwjw~E3zAEgqGhU4LIdh7slDhXtganEPxNmqXEbQ-tLRht42HkrxUTCX6Km6PTp9TAqqwhqjpRDNZoDuBHaFoBEoVJNu~w0rNITiwFq90ajKRIISe~STm0Ki5AmvRoJJ0xpRkwZqSwYItfq7lBOUdYHBN4F7jVMyIaf3nECV-I4CzuJYQwhcQu867guJ5NPI1k~WHn9SNh4IC9GyMop30P8OcHLd72p90pUXll8YpBJPAPrVyEFKsxh83wx4a3iM-wrCt2tLBqr7MQ6~k6CymfVGYo5IfLQlxFQ8uTbvdROzSZO2MkzZ1Q__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_25_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 25,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/225/image/image.jpg?Expires=1760506703&Signature=PC4XCJZLVAtaQv~cTsLxoH6-vJitKn2CYwjw~E3zAEgqGhU4LIdh7slDhXtganEPxNmqXEbQ-tLRht42HkrxUTCX6Km6PTp9TAqqwhqjpRDNZoDuBHaFoBEoVJNu~w0rNITiwFq90ajKRIISe~STm0Ki5AmvRoJJ0xpRkwZqSwYItfq7lBOUdYHBN4F7jVMyIaf3nECV-I4CzuJYQwhcQu867guJ5NPI1k~WHn9SNh4IC9GyMop30P8OcHLd72p90pUXll8YpBJPAPrVyEFKsxh83wx4a3iM-wrCt2tLBqr7MQ6~k6CymfVGYo5IfLQlxFQ8uTbvdROzSZO2MkzZ1Q__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/226/image/image.jpg?Expires=1760506703&Signature=Zgm2aAyJcCok0mUZTnbEHeB2TqRT1F2EG42uT1gCZhW76-OL-ihtMATl6mYsxIqIrADeZahnamIgDhW-rgB~W80l3VsnJvACORvHTv3a055ajiA1tykHC4p8rxN7tTITqN4js-Pb7SU~hWo4VHjZjS1LNFk-zOIF6DBbd~IEhSD5Qegi3uJZZ-18RS-9oM-8RoksYvS4xz7lPwBIxYKUvvR-sLIF9b158kDkLUq88uMt6lwn1YQ4tPhlWhE76CeN8U7DLjsxeW9FszoHVW9RQ7hbKEyC0EQKsI9546qDVoKhwEOf2vUmivKLQpI7qg~1jrf5xNPw285BH~LWyV1-NQ__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_26_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 26,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/226/image/image.jpg?Expires=1760506703&Signature=Zgm2aAyJcCok0mUZTnbEHeB2TqRT1F2EG42uT1gCZhW76-OL-ihtMATl6mYsxIqIrADeZahnamIgDhW-rgB~W80l3VsnJvACORvHTv3a055ajiA1tykHC4p8rxN7tTITqN4js-Pb7SU~hWo4VHjZjS1LNFk-zOIF6DBbd~IEhSD5Qegi3uJZZ-18RS-9oM-8RoksYvS4xz7lPwBIxYKUvvR-sLIF9b158kDkLUq88uMt6lwn1YQ4tPhlWhE76CeN8U7DLjsxeW9FszoHVW9RQ7hbKEyC0EQKsI9546qDVoKhwEOf2vUmivKLQpI7qg~1jrf5xNPw285BH~LWyV1-NQ__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/227/image/image.jpg?Expires=1760506703&Signature=LnDJbIgnf92tn4zuVWcQCzX34ljraHXUIVcFEA-vOhU-wUVV4uf~YDN5tt6tCb8Sp11-keqrUNGtng3DwizecXL7umWYqu7fJLhaV1R5rQZSt2nWOAjVXXDAhIMDXGs6Lj4xxQ6o~MBiX0fcSDU9uQOHmBGe5TnDk4L3ZTjtdfNbeZWX9Xts8~gRmTGXoMRGqg7X7BzThDAmr7j6NjORwU-8P3u1q8NSxZ-FSfHfSCAiJAaVA7zLh4b~SfLeW-ckqHQJWdD4qXNnPvRbJY-bz~8lDHw7MWXDGauulXEhnkFqttRYnG~My4yY~MxurN1FFYJ5MZWWo17L~XvUnfcWaQ__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_27_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 27,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/227/image/image.jpg?Expires=1760506703&Signature=LnDJbIgnf92tn4zuVWcQCzX34ljraHXUIVcFEA-vOhU-wUVV4uf~YDN5tt6tCb8Sp11-keqrUNGtng3DwizecXL7umWYqu7fJLhaV1R5rQZSt2nWOAjVXXDAhIMDXGs6Lj4xxQ6o~MBiX0fcSDU9uQOHmBGe5TnDk4L3ZTjtdfNbeZWX9Xts8~gRmTGXoMRGqg7X7BzThDAmr7j6NjORwU-8P3u1q8NSxZ-FSfHfSCAiJAaVA7zLh4b~SfLeW-ckqHQJWdD4qXNnPvRbJY-bz~8lDHw7MWXDGauulXEhnkFqttRYnG~My4yY~MxurN1FFYJ5MZWWo17L~XvUnfcWaQ__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/228/image/image.jpg?Expires=1760506703&Signature=zkOpJieCezJRyVYdW3qnpoQWqWruzaXltqXp-RFKsxyb-2-XFkcu9IfLoYRCRr5-h1yBkqWeyjGlfTFhqpIbelRjkZyh4o8k7Jp8w0ydYlDxoesm8TI-mfcPehcnMFowunU5p4rgix44ssLp0bN-xTAjVdxTjuwA8XpgzXb4EnbmefPr~qLHWYOcKuwHwSgPMAL7UZX7vFJScPNDvz3Hq514L8nJuYG~6DMUnS5nUdQ7INBQHOFdJeRtA63vZaxmJuPFo4hJmoBR4nBc6oKLT3KL2rJ5Sa3IUFCHeY5zK8per4UKClcKrajUr2LxKprcukWBO775ZYmolXD0W875zw__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_28_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 28,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/228/image/image.jpg?Expires=1760506703&Signature=zkOpJieCezJRyVYdW3qnpoQWqWruzaXltqXp-RFKsxyb-2-XFkcu9IfLoYRCRr5-h1yBkqWeyjGlfTFhqpIbelRjkZyh4o8k7Jp8w0ydYlDxoesm8TI-mfcPehcnMFowunU5p4rgix44ssLp0bN-xTAjVdxTjuwA8XpgzXb4EnbmefPr~qLHWYOcKuwHwSgPMAL7UZX7vFJScPNDvz3Hq514L8nJuYG~6DMUnS5nUdQ7INBQHOFdJeRtA63vZaxmJuPFo4hJmoBR4nBc6oKLT3KL2rJ5Sa3IUFCHeY5zK8per4UKClcKrajUr2LxKprcukWBO775ZYmolXD0W875zw__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/229/image/image.jpg?Expires=1760506703&Signature=Q4gMfc11fj8N5DBXmrYyCe5MW07k9fp1gD052tg7e~JUYxAl4JZ6x4LRbK4wqzZNslF9Z57x~QLoKSQlph2a~pUID~e~MrCWLklk7eRfXFR0ZyFBKGtxdycuk7gYoLh7QwPx0KHOjKjrrHj~8jXTkrKoBiPvgji3baAaaXZwPtVxEPlgMSum0I17jlptfimyHl3-eso80iRaeC~iUAndhtsMyFCmi-njH-qo3ADHmjslN8R7Kaaa~EnCYAQsdq5fazkcjBvg8pvZvChfihFS33~jTtUHITf0rAb1x7hHJ~aBpLSIHQQptb8Yh~UEeLtVv6yg1tTNgWaRiQf0uey52g__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_29_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 29,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/229/image/image.jpg?Expires=1760506703&Signature=Q4gMfc11fj8N5DBXmrYyCe5MW07k9fp1gD052tg7e~JUYxAl4JZ6x4LRbK4wqzZNslF9Z57x~QLoKSQlph2a~pUID~e~MrCWLklk7eRfXFR0ZyFBKGtxdycuk7gYoLh7QwPx0KHOjKjrrHj~8jXTkrKoBiPvgji3baAaaXZwPtVxEPlgMSum0I17jlptfimyHl3-eso80iRaeC~iUAndhtsMyFCmi-njH-qo3ADHmjslN8R7Kaaa~EnCYAQsdq5fazkcjBvg8pvZvChfihFS33~jTtUHITf0rAb1x7hHJ~aBpLSIHQQptb8Yh~UEeLtVv6yg1tTNgWaRiQf0uey52g__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/230/image/image.jpg?Expires=1760506703&Signature=bB6kleKACVASn4EXpclZt-INVIMufJTg7e658CFa32UThAjkLwpZIC09~BN48kjMRPfvGz-bosQCtPoyjcSITrG~d-dkZXsNI09kBeUxMN9T-3nrdc52uRPlHl0mWcmyXqBb5oz-Yx5o4y2Al9bG2DURjFCSCCXUahvzA~ENlVjZ6Tv6ROijtwHtwwt~~KxgRCcZ9WVlTjxrwgDVUNt6lSrzXdv9F90uk43Qa2ozS13glBkT0BVZ121TbHYc~Aq76~mOdV3T9FyjQQCineywn54OxNWGFQEZe64LmHGNL5JWqQzY-eUkY1yELCbs8tzEboLjZOgoXBvl4mubu-QTDQ__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_30_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 30,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/230/image/image.jpg?Expires=1760506703&Signature=bB6kleKACVASn4EXpclZt-INVIMufJTg7e658CFa32UThAjkLwpZIC09~BN48kjMRPfvGz-bosQCtPoyjcSITrG~d-dkZXsNI09kBeUxMN9T-3nrdc52uRPlHl0mWcmyXqBb5oz-Yx5o4y2Al9bG2DURjFCSCCXUahvzA~ENlVjZ6Tv6ROijtwHtwwt~~KxgRCcZ9WVlTjxrwgDVUNt6lSrzXdv9F90uk43Qa2ozS13glBkT0BVZ121TbHYc~Aq76~mOdV3T9FyjQQCineywn54OxNWGFQEZe64LmHGNL5JWqQzY-eUkY1yELCbs8tzEboLjZOgoXBvl4mubu-QTDQ__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/231/image/image.jpg?Expires=1760506703&Signature=tJIXUUkhd5UO3zixSL19oNfxFlUddMec5InjeFsgmtC0sEOmqtkaKMoP0K-j8Et8g805cwazfcaL5~KBDsDNWUQAQzCx3eB4v2ZSpkb2A~7MgWQ7JFD6IbUya3mb2vXIWIs-g0V1TMpvGeEmIAEeIc5hH~feoXvblee4AGiEzlPcpjoDFPtb7dd9xAnK-v8Tv4dRlSt71qYkh~kq85jRo-ISkTlU1zlHB5V2-J-Gd0vBAWUbAeGz-FPyqocWMBezb-6QZcD6oDHL8nJRICGuhr5bI4e8aFwPvhtdsdZKZUDPSgjfJSpbqd7wCUN34mRtoYM-Bq998iScZeOYp00qMw__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_31_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 31,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/231/image/image.jpg?Expires=1760506703&Signature=tJIXUUkhd5UO3zixSL19oNfxFlUddMec5InjeFsgmtC0sEOmqtkaKMoP0K-j8Et8g805cwazfcaL5~KBDsDNWUQAQzCx3eB4v2ZSpkb2A~7MgWQ7JFD6IbUya3mb2vXIWIs-g0V1TMpvGeEmIAEeIc5hH~feoXvblee4AGiEzlPcpjoDFPtb7dd9xAnK-v8Tv4dRlSt71qYkh~kq85jRo-ISkTlU1zlHB5V2-J-Gd0vBAWUbAeGz-FPyqocWMBezb-6QZcD6oDHL8nJRICGuhr5bI4e8aFwPvhtdsdZKZUDPSgjfJSpbqd7wCUN34mRtoYM-Bq998iScZeOYp00qMw__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/232/image/image.jpg?Expires=1760506703&Signature=gEN~zorOJ3A4uErhNuKFIxTuEuyt88lL02v12mhHLkwYSRHwcApB7IywVYkfUBdvhVcjcsSs9wj~EQZSgInXhWZk84cns25r9mwJDwtGtc4xm6kGuIT96EpqG9Sf~7SH~Jr3gOCJweEHQVpe-I48xPTDP8AGKT1I93szR67MGMaErzbL5YCrRuR52ISyzpoU1RqytQnL8Oet~oqQOCBUaNTahRhnjV3ODxrd82qkKoyC34f7PHaw2q8ZaS6nPyiM2HCYdo7LVf94hQ7LdO6gBUTzJhYK47WruStflwW5oLkVUA9Ihvuy~D8VK5xcoDPZYgVae9-1xWCV6p~gUzMxZQ__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_32_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 32,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/232/image/image.jpg?Expires=1760506703&Signature=gEN~zorOJ3A4uErhNuKFIxTuEuyt88lL02v12mhHLkwYSRHwcApB7IywVYkfUBdvhVcjcsSs9wj~EQZSgInXhWZk84cns25r9mwJDwtGtc4xm6kGuIT96EpqG9Sf~7SH~Jr3gOCJweEHQVpe-I48xPTDP8AGKT1I93szR67MGMaErzbL5YCrRuR52ISyzpoU1RqytQnL8Oet~oqQOCBUaNTahRhnjV3ODxrd82qkKoyC34f7PHaw2q8ZaS6nPyiM2HCYdo7LVf94hQ7LdO6gBUTzJhYK47WruStflwW5oLkVUA9Ihvuy~D8VK5xcoDPZYgVae9-1xWCV6p~gUzMxZQ__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/233/image/image.jpg?Expires=1760506703&Signature=aMY8QhUNhnd1YQAvJ-9jwATg~sjds5QYJ4oqC13B0qaa7XJqf~a5qK70Wo2tvbXDDXqwsvLqmFBY3BDRo1Acza5F6bPUzCTPD4UxBMwKxiyz3rnnqLVHvkhDikPbcJNMoDrwrdfypZcTJ6ELVgCV1dHbi3ncBlUoi9GV3qsA2I1zNi8y~9kCMnkJtmdL28~Og3g05yismijPiHF7bD2nKPp9PcIQ03EfsHZT7N3BpUKOmbv9VXIcGGTzWLcESkiai~ifGMtUj6mI11jVUAiRl3AcPS48fAX9wKHW5EbU4lQG3QDgDgjOnlU0V7R7~KXXWQZ0s51t-UtApCB5QzEu3w__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_33_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 33,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/233/image/image.jpg?Expires=1760506703&Signature=aMY8QhUNhnd1YQAvJ-9jwATg~sjds5QYJ4oqC13B0qaa7XJqf~a5qK70Wo2tvbXDDXqwsvLqmFBY3BDRo1Acza5F6bPUzCTPD4UxBMwKxiyz3rnnqLVHvkhDikPbcJNMoDrwrdfypZcTJ6ELVgCV1dHbi3ncBlUoi9GV3qsA2I1zNi8y~9kCMnkJtmdL28~Og3g05yismijPiHF7bD2nKPp9PcIQ03EfsHZT7N3BpUKOmbv9VXIcGGTzWLcESkiai~ifGMtUj6mI11jVUAiRl3AcPS48fAX9wKHW5EbU4lQG3QDgDgjOnlU0V7R7~KXXWQZ0s51t-UtApCB5QzEu3w__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/234/image/image.jpg?Expires=1760506703&Signature=Joec0YvnqlwZySK-QqKyL~K6GXQZ4A-8MJua1rqSDXeZq4yfmQJEt8qQzgUPy2vYc0VEINbQB3J-zmr5GhtlxmAa0vWkDw6adcnnccs~DAdZhL~X-4qRjYqWkPdE28UYLJ~Xk3CJKbxGHcfk8RzQkFiZVKRcPRfJ9fzY~-mabIjNd-rjGo5Lsh8IOOBHqFaq5l3GyfE6hjeLFFJZfCmnMSnsUhbv-l5qKefZ5Okf9cotSVhXFocLUlj5z8OozFJoUpAJG09DdkTayhwlmjGQY7wRCApr~NbQceZpn7Q87bi4-Iv7IKH9zGWSiTpv4J09Reha~3dqa4oUsYmFjLia6w__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_34_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 34,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/234/image/image.jpg?Expires=1760506703&Signature=Joec0YvnqlwZySK-QqKyL~K6GXQZ4A-8MJua1rqSDXeZq4yfmQJEt8qQzgUPy2vYc0VEINbQB3J-zmr5GhtlxmAa0vWkDw6adcnnccs~DAdZhL~X-4qRjYqWkPdE28UYLJ~Xk3CJKbxGHcfk8RzQkFiZVKRcPRfJ9fzY~-mabIjNd-rjGo5Lsh8IOOBHqFaq5l3GyfE6hjeLFFJZfCmnMSnsUhbv-l5qKefZ5Okf9cotSVhXFocLUlj5z8OozFJoUpAJG09DdkTayhwlmjGQY7wRCApr~NbQceZpn7Q87bi4-Iv7IKH9zGWSiTpv4J09Reha~3dqa4oUsYmFjLia6w__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/235/image/image.jpg?Expires=1760506703&Signature=GTztT7GRGp9qpOfa6RyMkP~5aMt02alz2xUzrDRkFazIxkt9Qj7QGoG59V1o-kGsd6zKNL2tYYLsL8Ph2i6RpNCusuaZDUixaR49n7WvMnic054Pc4ZEGzbrAWiJYxwtrcm7xIi3Pi9oqhpw2LypRt~Pi9oKLTZpmF3~6iKHys~YwCdf1KS5QshhqUShlAcB4cdVfpHofN8Gr7PxT45NcnPXtI3Q~8P~FiieHFifMAIzCSnNm4l2PhdnjOZzj~VpPQRBsqduqP~Lq6U5cQtB~6zeGOz9xJIqwyW55Fhs7Zj6zhhPknrFUzdRmMzMNb8hnUmeeYbgX545-3wsTgKTng__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_35_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 35,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/235/image/image.jpg?Expires=1760506703&Signature=GTztT7GRGp9qpOfa6RyMkP~5aMt02alz2xUzrDRkFazIxkt9Qj7QGoG59V1o-kGsd6zKNL2tYYLsL8Ph2i6RpNCusuaZDUixaR49n7WvMnic054Pc4ZEGzbrAWiJYxwtrcm7xIi3Pi9oqhpw2LypRt~Pi9oKLTZpmF3~6iKHys~YwCdf1KS5QshhqUShlAcB4cdVfpHofN8Gr7PxT45NcnPXtI3Q~8P~FiieHFifMAIzCSnNm4l2PhdnjOZzj~VpPQRBsqduqP~Lq6U5cQtB~6zeGOz9xJIqwyW55Fhs7Zj6zhhPknrFUzdRmMzMNb8hnUmeeYbgX545-3wsTgKTng__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/236/image/image.jpg?Expires=1760506703&Signature=I8~G~KEy30CigWNGeIvAMwWjcuEi4lhojCxPKeOjC-cK7JLWINf0Fyv-t9iU1-1-YxpQ4IEgqRb1FHZbQIjs3NUV3m81AEMViDgd-hlU3CKsyrnR-55DDLG1HSDvoG0DWH~fZvXqBtafBczlFMmqjf6djzhuzD~EhRIUGwf3mhbspyQ-Zyhu43L04EGMj2CgWBXHhPb~w-9OD0tnlXSzXCfrKmZXXHQkn~xa-CcZNyigBupT2bsXO9wW4srVaNxnAMHOPMWmoI~KZLMbpoPZVjH~Tuh7yvGfFpH5pz4N59VEhJvwbKZUeIehXWGALkUId84KolBtZy6~fVghjEP5dg__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_36_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 36,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/236/image/image.jpg?Expires=1760506703&Signature=I8~G~KEy30CigWNGeIvAMwWjcuEi4lhojCxPKeOjC-cK7JLWINf0Fyv-t9iU1-1-YxpQ4IEgqRb1FHZbQIjs3NUV3m81AEMViDgd-hlU3CKsyrnR-55DDLG1HSDvoG0DWH~fZvXqBtafBczlFMmqjf6djzhuzD~EhRIUGwf3mhbspyQ-Zyhu43L04EGMj2CgWBXHhPb~w-9OD0tnlXSzXCfrKmZXXHQkn~xa-CcZNyigBupT2bsXO9wW4srVaNxnAMHOPMWmoI~KZLMbpoPZVjH~Tuh7yvGfFpH5pz4N59VEhJvwbKZUeIehXWGALkUId84KolBtZy6~fVghjEP5dg__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/237/image/image.jpg?Expires=1760506703&Signature=xx8niJCPhGNyYRoM2UJc9yudVMMO33sTlu6j-FCEekxS1oEC2t1uD48T0Pkip3uLUTTTF3mpUw9MlCMu6wmFnYEGnVZUY6WPsI0~7WWaI1liuaS0hcllcAlIY4zo2NY11ohGqsustrFj5ZV28BV6e10AZPK692seL9LJ8V5NLsgnb43sFgwgb07LLGwBLZu9xzW3Hc1jlbInS7d~CtXsiTDfImObqBBAqi~X9UPrZAH2QDhig2~TTqUdDtCmupeVQFlsfxFZphJ2QCV5NnZAfUkODfGIc4AvcYZGCBlG6YSVYKblEYR3FT9ZECws6CCYOKmWVlpw~zQyev2Vb5si-w__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_37_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 37,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/237/image/image.jpg?Expires=1760506703&Signature=xx8niJCPhGNyYRoM2UJc9yudVMMO33sTlu6j-FCEekxS1oEC2t1uD48T0Pkip3uLUTTTF3mpUw9MlCMu6wmFnYEGnVZUY6WPsI0~7WWaI1liuaS0hcllcAlIY4zo2NY11ohGqsustrFj5ZV28BV6e10AZPK692seL9LJ8V5NLsgnb43sFgwgb07LLGwBLZu9xzW3Hc1jlbInS7d~CtXsiTDfImObqBBAqi~X9UPrZAH2QDhig2~TTqUdDtCmupeVQFlsfxFZphJ2QCV5NnZAfUkODfGIc4AvcYZGCBlG6YSVYKblEYR3FT9ZECws6CCYOKmWVlpw~zQyev2Vb5si-w__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/238/image/image.jpg?Expires=1760506703&Signature=HmOXFr-Czb7B7EUjtOXPnAMi-NC-ZVqcovc8IsA0ZqDtBeEE2Vsq483liNvj0ZkGYpMgaIMnQpEgTm22gqQIhmmIQVutBOhR3U3ckmHAn~KmfCTBvL6D8qo0a1iOmeCwnZ20JSvcHEPBZiWChroaS-8g84Z8yKQmuo2tVV--rfULCUJJMbMPVPY0ixwCbD5iGY0~ijjFVbT6dAkKp73w5xdif0uoNoGbTB2uY56ruDcNQfptcrSHsMNaYrNNvP6cOeyN63Nm5moElT1mHC9-poU9WcCl3Q3IIzXR1UFNU0P5xOQGXktCiGwd~sV2X-M-7lIddn~8~iVoHGDslYwaWA__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_38_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 38,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/238/image/image.jpg?Expires=1760506703&Signature=HmOXFr-Czb7B7EUjtOXPnAMi-NC-ZVqcovc8IsA0ZqDtBeEE2Vsq483liNvj0ZkGYpMgaIMnQpEgTm22gqQIhmmIQVutBOhR3U3ckmHAn~KmfCTBvL6D8qo0a1iOmeCwnZ20JSvcHEPBZiWChroaS-8g84Z8yKQmuo2tVV--rfULCUJJMbMPVPY0ixwCbD5iGY0~ijjFVbT6dAkKp73w5xdif0uoNoGbTB2uY56ruDcNQfptcrSHsMNaYrNNvP6cOeyN63Nm5moElT1mHC9-poU9WcCl3Q3IIzXR1UFNU0P5xOQGXktCiGwd~sV2X-M-7lIddn~8~iVoHGDslYwaWA__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/239/image/image.jpg?Expires=1760506703&Signature=j38FbOp3zyFkuWFDMGWNm3USHs~qsam76ZM7h1tBHH4rhgQob6uNSVgubdkizW5d5NEsXOiz0kHNbPL1ucxd3XleU8edDVu3sM1Khih~fKNKjWxdvgkdQj1gXIT5kLW5txTLWPqw~YzMIxtahs77fmzrsWj6ZAFAuzsXq89QLCO9Jluq0byqoMQBG6HEaA-gnkpYmjnb8PxIkvKrcU81IgT6U03L7CY2RTvCsHGcQfUA-OsunkzzvXnWr2HecFRalKTqybEd94jTt-jOP5XppSCu27L6HhHOUgIST1wERUccuzzmPG9SITib4K4CDv-a5WbwWWG-vai6jEP~kt-stw__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_39_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 39,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/239/image/image.jpg?Expires=1760506703&Signature=j38FbOp3zyFkuWFDMGWNm3USHs~qsam76ZM7h1tBHH4rhgQob6uNSVgubdkizW5d5NEsXOiz0kHNbPL1ucxd3XleU8edDVu3sM1Khih~fKNKjWxdvgkdQj1gXIT5kLW5txTLWPqw~YzMIxtahs77fmzrsWj6ZAFAuzsXq89QLCO9Jluq0byqoMQBG6HEaA-gnkpYmjnb8PxIkvKrcU81IgT6U03L7CY2RTvCsHGcQfUA-OsunkzzvXnWr2HecFRalKTqybEd94jTt-jOP5XppSCu27L6HhHOUgIST1wERUccuzzmPG9SITib4K4CDv-a5WbwWWG-vai6jEP~kt-stw__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/240/image/image.jpg?Expires=1760506703&Signature=gOfZTJXjtcT6s7ToRQunaVGuw9NYCR0VKfQIzmgBubqXw~QxJ7yG9qZZx5pWrOzBbelm8HrDXRrFwjei1p5UMq4V5FlVAletDB7gM9LPdh0QoiM87Kr785VrOme96AccbbyAeR0CgHD9FTX2dQiy~~SNMP2E7RB1xEXjljs0tJ9R7-bMWfIJsQEUql8NqfY4Nj3ilR5QU3kNTPJVxvLu4zAGQ4ezVKees6b6TZZKeAkRfVgmA4fo91nQGQq4yElzDr4qIhbJe5BFvT1jyDAquyuxQrc1Yd0vq363UuQY2t8dTwQCJ7gGYE2CKNY06OwS6Gs3J9UUfSG8TPdgQwIkwg__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_40_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 40,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/240/image/image.jpg?Expires=1760506703&Signature=gOfZTJXjtcT6s7ToRQunaVGuw9NYCR0VKfQIzmgBubqXw~QxJ7yG9qZZx5pWrOzBbelm8HrDXRrFwjei1p5UMq4V5FlVAletDB7gM9LPdh0QoiM87Kr785VrOme96AccbbyAeR0CgHD9FTX2dQiy~~SNMP2E7RB1xEXjljs0tJ9R7-bMWfIJsQEUql8NqfY4Nj3ilR5QU3kNTPJVxvLu4zAGQ4ezVKees6b6TZZKeAkRfVgmA4fo91nQGQq4yElzDr4qIhbJe5BFvT1jyDAquyuxQrc1Yd0vq363UuQY2t8dTwQCJ7gGYE2CKNY06OwS6Gs3J9UUfSG8TPdgQwIkwg__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/241/image/image.jpg?Expires=1760506703&Signature=reweCNL2RO47n5DIu2oYNRGFhQeYynm80MsN83Mb5CDXFkrmoOcP4zBZg78V8pq3NUBs5kB7n00Am~tqSsEjeXo4XIkn1h1rEsrs7DUDk3uRo2FARVI5e6Dn9BNKaV6MnbUqE6vcZ1Awtf~I5HBAypUJ5Vs~hS3KprTdrD8Awql7MwON6pzV7pbRDsgCosrabeG5hcL7GBdfJNAdPLfII4WA~cpzCIN3Dh2nCUt1DV4Cug4pOR93OXszzhVqHnXF7SdEXQ1DbfHvDPEnyYPSQFOuigGOw7iithFNtK8Xz2Cjvb3eSE60UWObxpjdolHuD5HI2eXlKPp3iijvC4EmBg__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_41_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 41,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/241/image/image.jpg?Expires=1760506703&Signature=reweCNL2RO47n5DIu2oYNRGFhQeYynm80MsN83Mb5CDXFkrmoOcP4zBZg78V8pq3NUBs5kB7n00Am~tqSsEjeXo4XIkn1h1rEsrs7DUDk3uRo2FARVI5e6Dn9BNKaV6MnbUqE6vcZ1Awtf~I5HBAypUJ5Vs~hS3KprTdrD8Awql7MwON6pzV7pbRDsgCosrabeG5hcL7GBdfJNAdPLfII4WA~cpzCIN3Dh2nCUt1DV4Cug4pOR93OXszzhVqHnXF7SdEXQ1DbfHvDPEnyYPSQFOuigGOw7iithFNtK8Xz2Cjvb3eSE60UWObxpjdolHuD5HI2eXlKPp3iijvC4EmBg__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/242/image/image.jpg?Expires=1760506703&Signature=QHS9JtAuXgV4iPGIVxrVrJAuJ9VmtSy-2xQ-uiEQ192phVof99pPMeXI4C-nDxpb09XkrpXQ96uMp0Y2qXd1aHI2443ePiUlUzR87BGtwrhVENG~vHboeoUjrVTC1LnDwqR2gHnF7Km2oONhIS1TJOmyRWbdWw3tHkQGhaQctXZN72U6Ykoy9Y2o5fU6TqTgmMCD8fVSzcKGjausrRifjnauunlP9UKLS0mHr~fBomffcH7OR1h0bMFbHq4~J~Dp~G3kwBH5~PjThUc0ppjs3TQBIZHMh0kJdQRdSgBtxQtDtSJXmXJ9ZU6N2~j3~amaZEQLqou15FD3EH~QtKYHZQ__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_42_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 42,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/242/image/image.jpg?Expires=1760506703&Signature=QHS9JtAuXgV4iPGIVxrVrJAuJ9VmtSy-2xQ-uiEQ192phVof99pPMeXI4C-nDxpb09XkrpXQ96uMp0Y2qXd1aHI2443ePiUlUzR87BGtwrhVENG~vHboeoUjrVTC1LnDwqR2gHnF7Km2oONhIS1TJOmyRWbdWw3tHkQGhaQctXZN72U6Ykoy9Y2o5fU6TqTgmMCD8fVSzcKGjausrRifjnauunlP9UKLS0mHr~fBomffcH7OR1h0bMFbHq4~J~Dp~G3kwBH5~PjThUc0ppjs3TQBIZHMh0kJdQRdSgBtxQtDtSJXmXJ9ZU6N2~j3~amaZEQLqou15FD3EH~QtKYHZQ__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/243/image/image.jpg?Expires=1760506703&Signature=mQTCgug-e69lw1bTiOkpNAiz5-EHfHEPB5x76qTxHLSzfuQw6vXd9frfRe8JBASnR0B4IIuXftSkbeXBvXUoTziqjBHD0WZU0vUOmQsXqRREVwdRHMorm~mjqzj4N-AK~32NP6imJ12~-d0487gtDUkO4QsbXiVa8MWB8GFQQ0NeywNe~s9CJ7GMJkdjiiIpDkPREtbzvb7I0NTtmW-AymEKyc7uYYiNKfCvAtDwXMEcrCwAsdYgLmDzWco7cLkHh1tvs7PkNlidMvn0CdR~WtMkp4V99dz0QvYqhG0Akiqcp9dvWOlqL0eH-Lb7KD-NSoT-Aco8w9XPqhC0I60wlg__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_43_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 43,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/243/image/image.jpg?Expires=1760506703&Signature=mQTCgug-e69lw1bTiOkpNAiz5-EHfHEPB5x76qTxHLSzfuQw6vXd9frfRe8JBASnR0B4IIuXftSkbeXBvXUoTziqjBHD0WZU0vUOmQsXqRREVwdRHMorm~mjqzj4N-AK~32NP6imJ12~-d0487gtDUkO4QsbXiVa8MWB8GFQQ0NeywNe~s9CJ7GMJkdjiiIpDkPREtbzvb7I0NTtmW-AymEKyc7uYYiNKfCvAtDwXMEcrCwAsdYgLmDzWco7cLkHh1tvs7PkNlidMvn0CdR~WtMkp4V99dz0QvYqhG0Akiqcp9dvWOlqL0eH-Lb7KD-NSoT-Aco8w9XPqhC0I60wlg__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/244/image/image.jpg?Expires=1760506703&Signature=iF592nYliOBqgKAHw6ih8gnDm8b4ruYCn6DJz0ygfxI-MtA1PEvcbzkf1Js2ZtdWejrYK28Xtxzzy8JErRbe7jocyDXA5Pw2OOtRb39cqHTDwH53DzlEXuIakGRcUGXSrA6INDGtCXPnas9Ap84vNtRKibXaV3inxFn21cwq-tDYw~wshMh5XIwa2p-E0GTeuanL6eOyqYJsnNglwnXNEbxdEGUyxh5aGAn38XuFvWFr183Rouvj33C-O~SxCVjzGCdRbf7SwhpqJShXgbhLZmcNBGt6qU2Al4W0YuNHTAcSB5KI8ge6Kgp0D688MwjZU--p7qymwPpIzYftmgUO3g__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_44_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 44,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/244/image/image.jpg?Expires=1760506703&Signature=iF592nYliOBqgKAHw6ih8gnDm8b4ruYCn6DJz0ygfxI-MtA1PEvcbzkf1Js2ZtdWejrYK28Xtxzzy8JErRbe7jocyDXA5Pw2OOtRb39cqHTDwH53DzlEXuIakGRcUGXSrA6INDGtCXPnas9Ap84vNtRKibXaV3inxFn21cwq-tDYw~wshMh5XIwa2p-E0GTeuanL6eOyqYJsnNglwnXNEbxdEGUyxh5aGAn38XuFvWFr183Rouvj33C-O~SxCVjzGCdRbf7SwhpqJShXgbhLZmcNBGt6qU2Al4W0YuNHTAcSB5KI8ge6Kgp0D688MwjZU--p7qymwPpIzYftmgUO3g__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/245/image/image.jpg?Expires=1760506703&Signature=AB~RtBBMTzvVzkKUtHc4WQsgqlGXn9MNY3ZwUyBIV5LQbTd2IwTBwT8eutCGWkNM2Yz4YEuj0oz9ik8ozmYkQxVNR-oAP7tPnLy4cBZBCcpa-IwZORaQWwfo-yCMQrklgzn1053~GUGck2ih5U012pCsFvmTpk8WagI44R3zmd~J9css8xaBkyfGmLGrugpdpqmPe1GgCAjpolfwuxiDD1WHWC8VljoCJFl3rgxTQCGxuWJ2SVnbv4uSGg6ZW3ROg3U7e36SxaDEyEpbjcH36NZ0jsTuwjPcn3HCas6PHb8lVi8adNNfhge~q6zVDtF1yGvwTasnTNDl97v4KoarOw__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_45_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 45,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/245/image/image.jpg?Expires=1760506703&Signature=AB~RtBBMTzvVzkKUtHc4WQsgqlGXn9MNY3ZwUyBIV5LQbTd2IwTBwT8eutCGWkNM2Yz4YEuj0oz9ik8ozmYkQxVNR-oAP7tPnLy4cBZBCcpa-IwZORaQWwfo-yCMQrklgzn1053~GUGck2ih5U012pCsFvmTpk8WagI44R3zmd~J9css8xaBkyfGmLGrugpdpqmPe1GgCAjpolfwuxiDD1WHWC8VljoCJFl3rgxTQCGxuWJ2SVnbv4uSGg6ZW3ROg3U7e36SxaDEyEpbjcH36NZ0jsTuwjPcn3HCas6PHb8lVi8adNNfhge~q6zVDtF1yGvwTasnTNDl97v4KoarOw__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/246/image/image.jpg?Expires=1760506703&Signature=0avZWnsZUf1uaYeTauhYRnZ94qq9OZ8IzMC83kB-USccaU0HEIkXfHOuNBadKEVCh9tbgtuBccb7HyA2Ejahg-27oEYKRBbz60b4m0Bagz2NwB~odGCozYTfOSUSiTKMUa-gv2k59AV~Q0L2ejWUe2CcV7ETuyPt9HC9I2JNDPsCwggh1Od2GMB6sY8zS5rf9KywB1KJ8gr3ym8Z7vMX06B-Ln6DGn7whpUsEh1VtMLuDmpHVNEcFeDJykD6Yi7-pVmNX3daJH6pR6mW37EaNlNbEgqHMEDAmvVcuXAFN~UsUr-5kmWYgt~xuC7BUmQ~EkjxSLtQ5li7WbErTIUxyA__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_46_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 46,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/246/image/image.jpg?Expires=1760506703&Signature=0avZWnsZUf1uaYeTauhYRnZ94qq9OZ8IzMC83kB-USccaU0HEIkXfHOuNBadKEVCh9tbgtuBccb7HyA2Ejahg-27oEYKRBbz60b4m0Bagz2NwB~odGCozYTfOSUSiTKMUa-gv2k59AV~Q0L2ejWUe2CcV7ETuyPt9HC9I2JNDPsCwggh1Od2GMB6sY8zS5rf9KywB1KJ8gr3ym8Z7vMX06B-Ln6DGn7whpUsEh1VtMLuDmpHVNEcFeDJykD6Yi7-pVmNX3daJH6pR6mW37EaNlNbEgqHMEDAmvVcuXAFN~UsUr-5kmWYgt~xuC7BUmQ~EkjxSLtQ5li7WbErTIUxyA__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/247/image/image.jpg?Expires=1760506703&Signature=svx7cfXyuPUwp6O9HyN~dza-M4NDPhCSAAmV-ZRi5cA~SonuuH4aufRzMHKfL6TH2BYzOpSn6InTJMxSllONNKNkdUSZs7SxdLgALihtmEZMn6~oY6FT0N1VWsgjAtxwuxZ21ASN5dw0MR4C0zrnDZOahR~ZCVx52G3WLkKEy7WZVOAe4HoHVFB1gnmeWrkYcw3WtiPvXS9VU09qOvwXEsPmljQ~-nbNiXx4dUPPPwqJLXBPRsxnSMgVXquISlwBIlpXwzaD7RqYS3Mkp3aAyvm4fkO~rqjJ8jp35OQNMMpxtHEkniHHApPFP8TGSv9ocrSxdm6VawnBPayFcOA8Jg__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_47_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 47,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/247/image/image.jpg?Expires=1760506703&Signature=svx7cfXyuPUwp6O9HyN~dza-M4NDPhCSAAmV-ZRi5cA~SonuuH4aufRzMHKfL6TH2BYzOpSn6InTJMxSllONNKNkdUSZs7SxdLgALihtmEZMn6~oY6FT0N1VWsgjAtxwuxZ21ASN5dw0MR4C0zrnDZOahR~ZCVx52G3WLkKEy7WZVOAe4HoHVFB1gnmeWrkYcw3WtiPvXS9VU09qOvwXEsPmljQ~-nbNiXx4dUPPPwqJLXBPRsxnSMgVXquISlwBIlpXwzaD7RqYS3Mkp3aAyvm4fkO~rqjJ8jp35OQNMMpxtHEkniHHApPFP8TGSv9ocrSxdm6VawnBPayFcOA8Jg__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/248/image/image.jpg?Expires=1760506703&Signature=qhnac9D0uN9lzLd2Xa9KRWmECihuevplEoGVu6tC8FN4lOT-06YgqgXhD7B9YslmhSULEulLjAdlt95BA3wHx8qagactY0BmLWDmr7xW2is0roo59bTgAAupySKx9tOhvLYjQtvkcQ5r-8FI72wdAqH-FUvj4smtqhpBqLdwE6OFqLyJoG7U0TV7T9owIcSYJaIR05ZfM1CKuFpI~mUJdFoiuSaK32Qc~VSO-oeRoSwjdJAaQlsKY9ip8g4Y1pVaqx8j0UqK74KTUkgdoaF5YUA8C~f-ethZvmyEJ~VYJ-8rE64qY45X321seOxz6ZxgZyUqQQyg6mtyxAYup8lkGg__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_48_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 48,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/248/image/image.jpg?Expires=1760506703&Signature=qhnac9D0uN9lzLd2Xa9KRWmECihuevplEoGVu6tC8FN4lOT-06YgqgXhD7B9YslmhSULEulLjAdlt95BA3wHx8qagactY0BmLWDmr7xW2is0roo59bTgAAupySKx9tOhvLYjQtvkcQ5r-8FI72wdAqH-FUvj4smtqhpBqLdwE6OFqLyJoG7U0TV7T9owIcSYJaIR05ZfM1CKuFpI~mUJdFoiuSaK32Qc~VSO-oeRoSwjdJAaQlsKY9ip8g4Y1pVaqx8j0UqK74KTUkgdoaF5YUA8C~f-ethZvmyEJ~VYJ-8rE64qY45X321seOxz6ZxgZyUqQQyg6mtyxAYup8lkGg__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/249/image/image.jpg?Expires=1760506703&Signature=QiCK-UbvbJOfsjgfDLCwP0bC9XYVjqedm1y9QjryTJa1X6rIgQKnsErxMZFJ1eAVEC59pT9VWfu-OX2gQ6M4wZUxeuNx9jT33Xo5nFR~GhoQtnsW4TJCQnnwzQyuiv0UAkygH2f4U9HZrO82OXwvORpNotiV7GGKPzUr2oBHhmi8CCI8eWgU61GLQ95mb7qDhdR2nx1HZd7e~pkiLe3eIEk3XdyI6pjWro923crP-7CaB-qjS~E3npCdapkIEfbZT-v~sPuotnwAAawLod1rrdJimmS3DGVDCQP821tvrjVafCef9~ZxrPIvFtALu1-IwwJdw0pCjvHxYILe5btTbQ__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_49_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 49,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/249/image/image.jpg?Expires=1760506703&Signature=QiCK-UbvbJOfsjgfDLCwP0bC9XYVjqedm1y9QjryTJa1X6rIgQKnsErxMZFJ1eAVEC59pT9VWfu-OX2gQ6M4wZUxeuNx9jT33Xo5nFR~GhoQtnsW4TJCQnnwzQyuiv0UAkygH2f4U9HZrO82OXwvORpNotiV7GGKPzUr2oBHhmi8CCI8eWgU61GLQ95mb7qDhdR2nx1HZd7e~pkiLe3eIEk3XdyI6pjWro923crP-7CaB-qjS~E3npCdapkIEfbZT-v~sPuotnwAAawLod1rrdJimmS3DGVDCQP821tvrjVafCef9~ZxrPIvFtALu1-IwwJdw0pCjvHxYILe5btTbQ__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/250/image/image.jpg?Expires=1760506703&Signature=VpGq1QxFpP5wjT8cX4DZGmY3u4-uGLh97lSaU-jM5s2ahbyC9J9aN~oz9nlmZoyju3yMl2G7DIjha3qQ3zEEqjTxBZw9~t1FuJMEPoolT155PjnNzKjO~uElTU07EvGT~HTkuQELltx84Zi2eXQhvZoEOsKvFOhH8NF2JocjGDnzieQoBudQNaOED3vbqfsLrGs2Xk0nlDdTSQEbhWTbTjxHyHokGAloYncPsEWSOcsCYPS52LuXh5jACpiAA2xeYb6Zc5mhVKvzzEmppblB5JozJ2aJUNLIOBDw2k6UsO0b50Ks8MQnZd0A5FdMmVX5~9iMERX7RG~nG-P8ppyZQQ__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_50_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 50,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/250/image/image.jpg?Expires=1760506703&Signature=VpGq1QxFpP5wjT8cX4DZGmY3u4-uGLh97lSaU-jM5s2ahbyC9J9aN~oz9nlmZoyju3yMl2G7DIjha3qQ3zEEqjTxBZw9~t1FuJMEPoolT155PjnNzKjO~uElTU07EvGT~HTkuQELltx84Zi2eXQhvZoEOsKvFOhH8NF2JocjGDnzieQoBudQNaOED3vbqfsLrGs2Xk0nlDdTSQEbhWTbTjxHyHokGAloYncPsEWSOcsCYPS52LuXh5jACpiAA2xeYb6Zc5mhVKvzzEmppblB5JozJ2aJUNLIOBDw2k6UsO0b50Ks8MQnZd0A5FdMmVX5~9iMERX7RG~nG-P8ppyZQQ__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/251/image/image.jpg?Expires=1760506703&Signature=EIISeZbzMVUJ2YVXJq73t04ExT5R~LSyI2q-a44-DbfCmvKvfiDUikBlILGYItgMNsBCpOrTk17shO0dn414zKPtTBw4mMKsWHejJNgsMO8BgXTVVQxsg6LNpcnicFNHCtXOL6P4ajY8e701G~DkNHNmBE2LKHZ5QERC5M88ugKolAAQn33vilMtTCkBvKAuj3jm5ivuYXCQblNp0-oyMFk-tCSTUw8P21gD8BL9kiYpyB-NWd6DtP-YdncVoYb3F~43FgUMiuEBOnn2P0-RS3Qujg7CyIdEeqqMk6aNiEG~IwSxkwHQPlK2gd9Q1fzjI~DglBNQu1cswjzlhm7rtw__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_51_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 51,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/251/image/image.jpg?Expires=1760506703&Signature=EIISeZbzMVUJ2YVXJq73t04ExT5R~LSyI2q-a44-DbfCmvKvfiDUikBlILGYItgMNsBCpOrTk17shO0dn414zKPtTBw4mMKsWHejJNgsMO8BgXTVVQxsg6LNpcnicFNHCtXOL6P4ajY8e701G~DkNHNmBE2LKHZ5QERC5M88ugKolAAQn33vilMtTCkBvKAuj3jm5ivuYXCQblNp0-oyMFk-tCSTUw8P21gD8BL9kiYpyB-NWd6DtP-YdncVoYb3F~43FgUMiuEBOnn2P0-RS3Qujg7CyIdEeqqMk6aNiEG~IwSxkwHQPlK2gd9Q1fzjI~DglBNQu1cswjzlhm7rtw__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/252/image/image.jpg?Expires=1760506703&Signature=mWJd2udY6uwz1eQhXxmIAvWmmOkpg3-ivucnKC0qTZ6HmpXm2eltovKue2Ql8PGP1XzzXozjclkCNz2pZiG3q4inVCl39~~jwA329TFB9fqDCu35fZWHXChRclMzgpQPAah5BtmaSft5FN66TCPgkDXUvYhKSWJgmt9D8-NepfxqV7h~B1xqIF8OZhHWnORYluCi1S3XwhzSdQaPUktfmgMflU4ZLFm9YI2x3wCd-5DPTBEpIHLtcORFF5ixKj406bnlAbAjPn1R0II2n6484FDfIL18CSrPHeC~ciAnWe4RrPA7X4~1kVSd9v3JbeuNgMSCOQbD-HloRVmGs~EFfA__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_52_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 52,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/252/image/image.jpg?Expires=1760506703&Signature=mWJd2udY6uwz1eQhXxmIAvWmmOkpg3-ivucnKC0qTZ6HmpXm2eltovKue2Ql8PGP1XzzXozjclkCNz2pZiG3q4inVCl39~~jwA329TFB9fqDCu35fZWHXChRclMzgpQPAah5BtmaSft5FN66TCPgkDXUvYhKSWJgmt9D8-NepfxqV7h~B1xqIF8OZhHWnORYluCi1S3XwhzSdQaPUktfmgMflU4ZLFm9YI2x3wCd-5DPTBEpIHLtcORFF5ixKj406bnlAbAjPn1R0II2n6484FDfIL18CSrPHeC~ciAnWe4RrPA7X4~1kVSd9v3JbeuNgMSCOQbD-HloRVmGs~EFfA__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/253/image/image.jpg?Expires=1760506703&Signature=xkq503TwugUOtEdJoAZvtjwaFWzrYGMDbW3IpZiEHaABt~GR1WFbeyHkJ51CU8DFhSnl559M1KAZhwTz7Rm0UNMMTHClFIYoPcXUpGuOj~HkUnS1tArmZjEm9eldH-dFQkPBfVcCZHAXUxpXdNNfBpyt2yr-LEDE-AjQWivz0spnoq7R1IGYY2qWzZhu7rRG8XbMNcZgR0y3yCbxfX1wkpuwuvlADvLwFO5ho-LPymOOq-mmiBfgZ-LLB0H2NM7j0bGhu7zI2C3hV8T06sYvEqL0qPfVus7622c4IZl5rtQhSw~moI5D0lRYIcCYpw1UIBjQ8vSmBW4EEEVn5KNUtw__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_53_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 53,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/253/image/image.jpg?Expires=1760506703&Signature=xkq503TwugUOtEdJoAZvtjwaFWzrYGMDbW3IpZiEHaABt~GR1WFbeyHkJ51CU8DFhSnl559M1KAZhwTz7Rm0UNMMTHClFIYoPcXUpGuOj~HkUnS1tArmZjEm9eldH-dFQkPBfVcCZHAXUxpXdNNfBpyt2yr-LEDE-AjQWivz0spnoq7R1IGYY2qWzZhu7rRG8XbMNcZgR0y3yCbxfX1wkpuwuvlADvLwFO5ho-LPymOOq-mmiBfgZ-LLB0H2NM7j0bGhu7zI2C3hV8T06sYvEqL0qPfVus7622c4IZl5rtQhSw~moI5D0lRYIcCYpw1UIBjQ8vSmBW4EEEVn5KNUtw__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/254/image/image.jpg?Expires=1760506703&Signature=GwHX8tqCOw6vnklkpncy8lwV09FicXF3zg0FBPigP6aKgpLA49J1DxunVcwk62HzvlSA42MK4QBnAgmk0-e4tivHbFB3P7OtLTVRmhuOVgZwFzPy5h1t7NukqjN6eZCxmw2JNQP3u4jmOtanZhtif87BU6gIRZ27JchjQaOxd3tr-YM2JeF0ZsZBU029x2-GevWOSs06V4G84gaco7luF-DpZEz2U02Ue9AX~PM64LK0TGjLKF8QkszQuAajT3Q~IjDXsPF2J83rEtSxR2YAWw2gTiYuqtBcXj3mU7VmF5zhnzZZRtCVKvkEmbKg1Hs1L6szvYXrSViYvzvGXbPBFw__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_54_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 54,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/254/image/image.jpg?Expires=1760506703&Signature=GwHX8tqCOw6vnklkpncy8lwV09FicXF3zg0FBPigP6aKgpLA49J1DxunVcwk62HzvlSA42MK4QBnAgmk0-e4tivHbFB3P7OtLTVRmhuOVgZwFzPy5h1t7NukqjN6eZCxmw2JNQP3u4jmOtanZhtif87BU6gIRZ27JchjQaOxd3tr-YM2JeF0ZsZBU029x2-GevWOSs06V4G84gaco7luF-DpZEz2U02Ue9AX~PM64LK0TGjLKF8QkszQuAajT3Q~IjDXsPF2J83rEtSxR2YAWw2gTiYuqtBcXj3mU7VmF5zhnzZZRtCVKvkEmbKg1Hs1L6szvYXrSViYvzvGXbPBFw__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/255/image/image.jpg?Expires=1760506703&Signature=I6INDrhZm0~W4vYlISkh3a4q66qBZcv4XLFCI6GSh3zRAH0~0Uwtol6SKOSdlV-jaZmaIiEJFruIM7VLrHF4ebGXbZ6KPCJsghqzZiXYxVNWpjVcB57VtiOPsp4xhJvFYuILj03V9YbBmH8TMPeflPUdpdR7lbp235oRc1fZv~mFgz-gVQLSN7ZEiPsdRbgAvgfjXB8UbpAJQgfNs38CllvuUgthGVzym5ej-BBOC6E-dDbDKKRXFRPE~7886c40GMi4GDyUm2dKoDA40-xzPeffXXWKUYCc98TkuzVZbD7Z3ok-si-zNPWrNAAhSwW9XeaK2Jl0pOIvvLUrSCnmWA__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_55_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 55,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/255/image/image.jpg?Expires=1760506703&Signature=I6INDrhZm0~W4vYlISkh3a4q66qBZcv4XLFCI6GSh3zRAH0~0Uwtol6SKOSdlV-jaZmaIiEJFruIM7VLrHF4ebGXbZ6KPCJsghqzZiXYxVNWpjVcB57VtiOPsp4xhJvFYuILj03V9YbBmH8TMPeflPUdpdR7lbp235oRc1fZv~mFgz-gVQLSN7ZEiPsdRbgAvgfjXB8UbpAJQgfNs38CllvuUgthGVzym5ej-BBOC6E-dDbDKKRXFRPE~7886c40GMi4GDyUm2dKoDA40-xzPeffXXWKUYCc98TkuzVZbD7Z3ok-si-zNPWrNAAhSwW9XeaK2Jl0pOIvvLUrSCnmWA__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/256/image/image.jpg?Expires=1760506703&Signature=vF3uDRViw-f77iv5wFP5-WpktdBsVnHvYhvriZAo7ncQ0RrVJwdpVjFZGXhgA2U87Z6TkMmmci1rXuw1gXdKoITAzNeP1ffQJfH4Ejy~fi9ro0dkqaZCvfNzPMqMwfowOiA65gMEDmHCR3dyAAyCVBZ3YmPe6SFDu-NXdU3XnHGvTXgvv-6xt7~m2p6LoLjBT9lCamqK~8ybIZcKAZzpOeSkK7eG3cQs749BjWouyBUK0AzvAArqZxDiYweXSL0C58wSXnrw~FxOh2hS6mosJqHcBKIoYxZGwyaxXN7q37Fz7-7mI186y8ZJtfDwnpOd8MSNWHceaeuuqoxbKUCtyQ__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_56_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 56,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/256/image/image.jpg?Expires=1760506703&Signature=vF3uDRViw-f77iv5wFP5-WpktdBsVnHvYhvriZAo7ncQ0RrVJwdpVjFZGXhgA2U87Z6TkMmmci1rXuw1gXdKoITAzNeP1ffQJfH4Ejy~fi9ro0dkqaZCvfNzPMqMwfowOiA65gMEDmHCR3dyAAyCVBZ3YmPe6SFDu-NXdU3XnHGvTXgvv-6xt7~m2p6LoLjBT9lCamqK~8ybIZcKAZzpOeSkK7eG3cQs749BjWouyBUK0AzvAArqZxDiYweXSL0C58wSXnrw~FxOh2hS6mosJqHcBKIoYxZGwyaxXN7q37Fz7-7mI186y8ZJtfDwnpOd8MSNWHceaeuuqoxbKUCtyQ__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/257/image/image.jpg?Expires=1760506703&Signature=IjAi-KWBYO5-j4bs~6k1sDfxOjxQo9E5kDCK-yIgvisFKNFBduX15n3IDj1RUu7-KGBaCdivBK8zQy4bkmQblVplkZlXdR85C2ZZHhpWPLx9py~~lwgRAeionKd-48ertY8vyxUMx8UVn1NEKWpYoSk3oC-KKhKxjQHqFuHDy6J5UJQLWOflDHZgmtyo3ptP7UUmTpc0SpAVpnJ4Lp0h~fwxogtKfEaYry6bRGV5HKrR-gUNu2Mh6jQruvYTnYAVv9wQ6s98iUODwy12IYyjD4qua5M3j0z4f0NXpC70oE1z2Wji-qkpX2BvRVHqruiUXk1I89PyCtscwlHB6Vs06Q__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_57_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 57,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/257/image/image.jpg?Expires=1760506703&Signature=IjAi-KWBYO5-j4bs~6k1sDfxOjxQo9E5kDCK-yIgvisFKNFBduX15n3IDj1RUu7-KGBaCdivBK8zQy4bkmQblVplkZlXdR85C2ZZHhpWPLx9py~~lwgRAeionKd-48ertY8vyxUMx8UVn1NEKWpYoSk3oC-KKhKxjQHqFuHDy6J5UJQLWOflDHZgmtyo3ptP7UUmTpc0SpAVpnJ4Lp0h~fwxogtKfEaYry6bRGV5HKrR-gUNu2Mh6jQruvYTnYAVv9wQ6s98iUODwy12IYyjD4qua5M3j0z4f0NXpC70oE1z2Wji-qkpX2BvRVHqruiUXk1I89PyCtscwlHB6Vs06Q__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/258/image/image.jpg?Expires=1760506703&Signature=NVFIIkvNcTcsdrQ~6h2wsjWu5bED8qcFDqR9j4oK8nAm2V9KpWKaTMjOeAq4AeetMFZ~fFUYtrsAkbUWp9NI4NOVy1n6255HKsbPtxagafjcvbV3UTF1ZLNEtNbLk6QJAgMrW3aiTw1P3YMxfOe2MgLW4qmZtl8c66UGYAc5WdGktzGqxJ6F9KvCNfkhXVkTMp~p3jYLNomj8xPrWD8bZDjIESoTNPe-8vfqk4HKIImLseunKIH79vBV5XmtsSAW9DGBjY2AHkYumBZmE2YPU6xQhqU3BEFhKWq0t0n~PleogulmM7ETstPqnTzljNVg1FEqzARGhEVlDJLFSWouyw__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_58_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 58,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/258/image/image.jpg?Expires=1760506703&Signature=NVFIIkvNcTcsdrQ~6h2wsjWu5bED8qcFDqR9j4oK8nAm2V9KpWKaTMjOeAq4AeetMFZ~fFUYtrsAkbUWp9NI4NOVy1n6255HKsbPtxagafjcvbV3UTF1ZLNEtNbLk6QJAgMrW3aiTw1P3YMxfOe2MgLW4qmZtl8c66UGYAc5WdGktzGqxJ6F9KvCNfkhXVkTMp~p3jYLNomj8xPrWD8bZDjIESoTNPe-8vfqk4HKIImLseunKIH79vBV5XmtsSAW9DGBjY2AHkYumBZmE2YPU6xQhqU3BEFhKWq0t0n~PleogulmM7ETstPqnTzljNVg1FEqzARGhEVlDJLFSWouyw__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/259/image/image.jpg?Expires=1760506703&Signature=EjOz2ZtsTuZ-lUbClYO54F~jVgkJANpr2hzoCWOFn5L19gXuNd-~FAChT5ulgvjR6KInokiX1vVM8~pIVtj8QYSOozxXNvlg-QuMV1kl9v-xWYNOmeDSDhhbCwdHkR0-~dYFcd~EniVl~yfQIr0cODLoSDak19Ot0z5Sg~s1OJQbQFgonys2yc0J6thVnbr7upCzrcq3LrfJck~DmptOmk0-XgsiykZjQUZlhhvucpaDuSoGYiKx7jg7x5RUiJfmyWst2N9Mvp5I8LZYzPbmq7Bz4AxLX5GIsOB9sgjEmqlNOb30JUCORpjdRzGyhLFgtuJqGnqLCxPRnu8V3ERuqg__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_59_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 59,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/259/image/image.jpg?Expires=1760506703&Signature=EjOz2ZtsTuZ-lUbClYO54F~jVgkJANpr2hzoCWOFn5L19gXuNd-~FAChT5ulgvjR6KInokiX1vVM8~pIVtj8QYSOozxXNvlg-QuMV1kl9v-xWYNOmeDSDhhbCwdHkR0-~dYFcd~EniVl~yfQIr0cODLoSDak19Ot0z5Sg~s1OJQbQFgonys2yc0J6thVnbr7upCzrcq3LrfJck~DmptOmk0-XgsiykZjQUZlhhvucpaDuSoGYiKx7jg7x5RUiJfmyWst2N9Mvp5I8LZYzPbmq7Bz4AxLX5GIsOB9sgjEmqlNOb30JUCORpjdRzGyhLFgtuJqGnqLCxPRnu8V3ERuqg__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/260/image/image.jpg?Expires=1760506703&Signature=YzWI4ityFJ2UaH8ITa5vAs~6qiz8XFBXXGv~~ee3v5XY8uEAj3ETRZ6bxcfzCjwVBRwpaIrZG1waOlYufbW6WZm0RYNt~8q6X4AJ3BCSvP-uqs~kw5vDOkIy6~UH5LMhHEDGv0HDea93xVxjqFlgdreN6-~B9X4UIuIFIR9YYIntFVAmjd60RqrWXdEaxOttDuFQ1AzYRcslCSdlUpq2Q~3iPX3TysDX7xNqO8ft8Z8PdJWAwPuzvtRNvz8lDzE5k0EWVgoavhR2FrOPXxxG05fXLozjBIvUKi7YQ2kX6eVnNFa93jzoiE2AVZGta6DR3UsjYyoBcAtJr1hEA9-BIQ__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_60_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 60,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/260/image/image.jpg?Expires=1760506703&Signature=YzWI4ityFJ2UaH8ITa5vAs~6qiz8XFBXXGv~~ee3v5XY8uEAj3ETRZ6bxcfzCjwVBRwpaIrZG1waOlYufbW6WZm0RYNt~8q6X4AJ3BCSvP-uqs~kw5vDOkIy6~UH5LMhHEDGv0HDea93xVxjqFlgdreN6-~B9X4UIuIFIR9YYIntFVAmjd60RqrWXdEaxOttDuFQ1AzYRcslCSdlUpq2Q~3iPX3TysDX7xNqO8ft8Z8PdJWAwPuzvtRNvz8lDzE5k0EWVgoavhR2FrOPXxxG05fXLozjBIvUKi7YQ2kX6eVnNFa93jzoiE2AVZGta6DR3UsjYyoBcAtJr1hEA9-BIQ__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/261/image/image.jpg?Expires=1760506703&Signature=UA2xOBQVl1V9VeQkvv0rB3ZHXvJSqiKm7GoEdaFLcphjP9hYp-hB6bhtW2OrJoeGl27RWBv-SPnepGIWl1A3O2XVn9Oy0BtlYSecJrzNmhDAxCUnKjYnnTeh7~RV5ylHqj5HNhlQtDEYzsB2mW0efPCThXoFnySxSVwG8jdzISfoBufTv6bVsqJ5kevnnH-LERggbGkSadC2kxN-9acCLvsT9oUxjooW-A3GigK3efaI3yDCoqe59mGncKPmW4vM~6EUaekjgAkfS~Ro6xrst-X1dbOB-VEbS1M~5GISVcHxenpjo~A3PetOD~jiB62fGM-u0Fn9o7pQVTO8V4jxOg__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_61_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 61,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/261/image/image.jpg?Expires=1760506703&Signature=UA2xOBQVl1V9VeQkvv0rB3ZHXvJSqiKm7GoEdaFLcphjP9hYp-hB6bhtW2OrJoeGl27RWBv-SPnepGIWl1A3O2XVn9Oy0BtlYSecJrzNmhDAxCUnKjYnnTeh7~RV5ylHqj5HNhlQtDEYzsB2mW0efPCThXoFnySxSVwG8jdzISfoBufTv6bVsqJ5kevnnH-LERggbGkSadC2kxN-9acCLvsT9oUxjooW-A3GigK3efaI3yDCoqe59mGncKPmW4vM~6EUaekjgAkfS~Ro6xrst-X1dbOB-VEbS1M~5GISVcHxenpjo~A3PetOD~jiB62fGM-u0Fn9o7pQVTO8V4jxOg__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/262/image/image.jpg?Expires=1760506703&Signature=s9x26e2DxY-HpwZqUFbEyGTBDUaFdqfSZhCbbVjJDWR6VKIDQSdMIqmdCz~1MiWntFtGgh1uJooDUKCTt5NR0IBOYH9H-3m3ZQbROWEnHTYvBACY5ke-0yFTzJy79ImbzSxQSqx1YvEeuYDOaOONAUSIzjY56NT8qMMOWhMpRo0kEu-Bulh67mWir1RUxP6g1gDSiVdGlolxmg4GrOVe~CcFNcQkd5tnbzh3mXxfddCgyPQXkMenLZ3vJPnaRHW0D2hNC~WEuQP3WGWpgbYwEWgfMDjFP9Gh2Vl6pEK7muiAVcW13Mr2CPCZ2iN8wdlrkKbVpZ97aGpEwTINyUD~oA__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_62_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 62,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/262/image/image.jpg?Expires=1760506703&Signature=s9x26e2DxY-HpwZqUFbEyGTBDUaFdqfSZhCbbVjJDWR6VKIDQSdMIqmdCz~1MiWntFtGgh1uJooDUKCTt5NR0IBOYH9H-3m3ZQbROWEnHTYvBACY5ke-0yFTzJy79ImbzSxQSqx1YvEeuYDOaOONAUSIzjY56NT8qMMOWhMpRo0kEu-Bulh67mWir1RUxP6g1gDSiVdGlolxmg4GrOVe~CcFNcQkd5tnbzh3mXxfddCgyPQXkMenLZ3vJPnaRHW0D2hNC~WEuQP3WGWpgbYwEWgfMDjFP9Gh2Vl6pEK7muiAVcW13Mr2CPCZ2iN8wdlrkKbVpZ97aGpEwTINyUD~oA__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/263/image/image.jpg?Expires=1760506703&Signature=kgwUql9JajUSBuc5aF9Jsamj5-csg3M56Xg7uIUqMmm1wKzsYu7oofmALNgbvPD6taD1aF4IyUvnbFm5D0V66b9Rqo9SCjkjEDnvT2Ml1UiLX10IXg5PV0~F09wEcfHYAQCg8-Go25Fowd56B-2njSHscA~~AvKhShxk3C7GsGg2ScFBAnnoXEy~DVXlYjufc4YHUM8S5ZapDfgJQfd1ZxFBED92UJ29ll5daNaGuTnJuUH98wIqWzNSviy2-V7Zjhhdrp4JWj63PUOfCcARpHM9UFNdlRse0w~owJmlZnugykA0NHSVSjE4zK2hDZe1htkmVzfqKzCc~QC~UGhF5A__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_63_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 63,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/263/image/image.jpg?Expires=1760506703&Signature=kgwUql9JajUSBuc5aF9Jsamj5-csg3M56Xg7uIUqMmm1wKzsYu7oofmALNgbvPD6taD1aF4IyUvnbFm5D0V66b9Rqo9SCjkjEDnvT2Ml1UiLX10IXg5PV0~F09wEcfHYAQCg8-Go25Fowd56B-2njSHscA~~AvKhShxk3C7GsGg2ScFBAnnoXEy~DVXlYjufc4YHUM8S5ZapDfgJQfd1ZxFBED92UJ29ll5daNaGuTnJuUH98wIqWzNSviy2-V7Zjhhdrp4JWj63PUOfCcARpHM9UFNdlRse0w~owJmlZnugykA0NHSVSjE4zK2hDZe1htkmVzfqKzCc~QC~UGhF5A__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/264/image/image.jpg?Expires=1760506703&Signature=b7yBGoOkjaaYUaROmi3jX5j3DRfP1PphvSgdIa51Wfp9uVG5j-Y20DYkGtxdyg9SjNbdu0Ch03ixNthBkhOf0LU2eI30lZ6gCDLxbCPtHJq6BFk-7w2U3Dfpo6lEOlHUWyPk3JZC5HFoc7Zhr31ANOS9Hl3k1a1KP9ZJWWOI9DTFTX1YU23gyOFE7C2p3MSWCs4UH1eoMd6I-YfY232hVzy8TktcXDauxxZlwkNl-LQq9rwby-dsoqoh~cywbq8PPd3S1OHBEuLvifbBDpwyfsToKmb3kA3iDhdJqhZRq3h-3q6PMAT6BbpGe-CE6o0drnju8OUWmPkJc72HZeVX2g__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_64_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 64,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/264/image/image.jpg?Expires=1760506703&Signature=b7yBGoOkjaaYUaROmi3jX5j3DRfP1PphvSgdIa51Wfp9uVG5j-Y20DYkGtxdyg9SjNbdu0Ch03ixNthBkhOf0LU2eI30lZ6gCDLxbCPtHJq6BFk-7w2U3Dfpo6lEOlHUWyPk3JZC5HFoc7Zhr31ANOS9Hl3k1a1KP9ZJWWOI9DTFTX1YU23gyOFE7C2p3MSWCs4UH1eoMd6I-YfY232hVzy8TktcXDauxxZlwkNl-LQq9rwby-dsoqoh~cywbq8PPd3S1OHBEuLvifbBDpwyfsToKmb3kA3iDhdJqhZRq3h-3q6PMAT6BbpGe-CE6o0drnju8OUWmPkJc72HZeVX2g__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/265/image/image.jpg?Expires=1760506703&Signature=J1TOsUu1LwRCIp6or0Awuy6YZTkz2HPW2z9uEtNwc4HpAgkHYJHjx-S2KA5OhsGf-dJvI401bg93rYeg0O5tHzpjySnxigndcpd-hxYXRKRhjZ4Cf85iYFnVGR~k0xN6IuYYvuTTJbElKB8UqzoDjANuKONq~lpaiBtFGlSCAaLGVkMabCx58yu0V~p0hZzOE5b0u9v1-XxDoMvKDSMUihrjk7BUNAduas1bZkZkGQNI2SZedDnBioK2TF24Zl5AI9SZNFQZK7j2QLHXFOkO3TlPPQjpDa7e4uVURJUEXP2E6XSDft4jnKSvAPP4E5dtP909wNr8Ccc3eQxc7cSXPw__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_65_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 65,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/265/image/image.jpg?Expires=1760506703&Signature=J1TOsUu1LwRCIp6or0Awuy6YZTkz2HPW2z9uEtNwc4HpAgkHYJHjx-S2KA5OhsGf-dJvI401bg93rYeg0O5tHzpjySnxigndcpd-hxYXRKRhjZ4Cf85iYFnVGR~k0xN6IuYYvuTTJbElKB8UqzoDjANuKONq~lpaiBtFGlSCAaLGVkMabCx58yu0V~p0hZzOE5b0u9v1-XxDoMvKDSMUihrjk7BUNAduas1bZkZkGQNI2SZedDnBioK2TF24Zl5AI9SZNFQZK7j2QLHXFOkO3TlPPQjpDa7e4uVURJUEXP2E6XSDft4jnKSvAPP4E5dtP909wNr8Ccc3eQxc7cSXPw__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/266/image/image.jpg?Expires=1760506703&Signature=i1UYSKahlMR7so7uUtL7eHNNYZ9S9l~MxO-bk0WpB-rnO-f55FJFhX~9Oi-KzOBzOdiiQdZkzzJvcUtnWlTqJpALi-RiY0Biq0BMvnmXvYv9k8vXfP-5MHpr0DC3krxTSywdktp8-Ia6CCZbxMJbqXh6PT0k-509CZFeGSyxIvXWOIpvCw9f8zPNeZezhbmtLk-DwAzkr5tcFNqAnoP9nRTZldc3osi6qOW2T23QFOEAJJ49Rg0knVfRxj-SLrCLClXbh2fW0jzgRJZKwAvxuzbml0C1BFvphjH3KRAFdZxMtPAqCdlK46e9fIVJj46WsxHuHQ7AC5gjSVTmGsYnPQ__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_66_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 66,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/266/image/image.jpg?Expires=1760506703&Signature=i1UYSKahlMR7so7uUtL7eHNNYZ9S9l~MxO-bk0WpB-rnO-f55FJFhX~9Oi-KzOBzOdiiQdZkzzJvcUtnWlTqJpALi-RiY0Biq0BMvnmXvYv9k8vXfP-5MHpr0DC3krxTSywdktp8-Ia6CCZbxMJbqXh6PT0k-509CZFeGSyxIvXWOIpvCw9f8zPNeZezhbmtLk-DwAzkr5tcFNqAnoP9nRTZldc3osi6qOW2T23QFOEAJJ49Rg0knVfRxj-SLrCLClXbh2fW0jzgRJZKwAvxuzbml0C1BFvphjH3KRAFdZxMtPAqCdlK46e9fIVJj46WsxHuHQ7AC5gjSVTmGsYnPQ__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/267/image/image.jpg?Expires=1760506703&Signature=k4bHlMQDd8Ul1NzAlGLxx0QK0bCVCyd9LaDIbtg1tj0trd4omllgzRyO~uz~jYESmyg63fIi3wd4clz8VIrg7h7zdxn2RNccr~Ra94n6ABrIhe0zuaxo3PRg7IoMh86JNY5Cs66fI~tDZ4z7aqfCe-nCQu~6jRYiHmoG3WLehZo~QgXjLSPKTGU2YGZbKBdAafLPe~ud76xL7rSETD25u2Q42jLZMdZcXprv1MHgO72gVwhK2NH7Si-tawRfsKtd3iNMDswqhRKiVnhRwvSePc9pFxF4qjcLn6a8EnN3NQGG~eY5FOSexW5yphoCH8bCqrcaEa6~PiQ3U9V70WuXew__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_67_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 67,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/267/image/image.jpg?Expires=1760506703&Signature=k4bHlMQDd8Ul1NzAlGLxx0QK0bCVCyd9LaDIbtg1tj0trd4omllgzRyO~uz~jYESmyg63fIi3wd4clz8VIrg7h7zdxn2RNccr~Ra94n6ABrIhe0zuaxo3PRg7IoMh86JNY5Cs66fI~tDZ4z7aqfCe-nCQu~6jRYiHmoG3WLehZo~QgXjLSPKTGU2YGZbKBdAafLPe~ud76xL7rSETD25u2Q42jLZMdZcXprv1MHgO72gVwhK2NH7Si-tawRfsKtd3iNMDswqhRKiVnhRwvSePc9pFxF4qjcLn6a8EnN3NQGG~eY5FOSexW5yphoCH8bCqrcaEa6~PiQ3U9V70WuXew__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/268/image/image.jpg?Expires=1760506703&Signature=c4B1j0c96bXPE8pDohaijUhRn0NkkNpPP~8CNkmoYlXWobzibHPEZqvZkzF1k0sDacXWutO84jIXS8XJMbFwZL~4Bc13Tcbu89v6TVGWxi-SqNa4nKMvAYiRIas9785tDfyQdM2KIz~GVRQQ8xIZoWLk0DruaPH~EqvqLVMm8UrNMko40gq2sL4H6hdYZJ9ZboQit3ZnaCrsz24OKtu3J4MTW3x5duCXdcOuhq2MHfr7UY3LtJhxSo0vLA7wwV9SlaGqsOvSYdxUb1kB4v20R-mIu7gcTvpNMLbiwBMPc5vJaTBOMQgowuVjxs6ZkrBeMt62xzeBm0uz9CjS858PLg__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_68_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 68,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/268/image/image.jpg?Expires=1760506703&Signature=c4B1j0c96bXPE8pDohaijUhRn0NkkNpPP~8CNkmoYlXWobzibHPEZqvZkzF1k0sDacXWutO84jIXS8XJMbFwZL~4Bc13Tcbu89v6TVGWxi-SqNa4nKMvAYiRIas9785tDfyQdM2KIz~GVRQQ8xIZoWLk0DruaPH~EqvqLVMm8UrNMko40gq2sL4H6hdYZJ9ZboQit3ZnaCrsz24OKtu3J4MTW3x5duCXdcOuhq2MHfr7UY3LtJhxSo0vLA7wwV9SlaGqsOvSYdxUb1kB4v20R-mIu7gcTvpNMLbiwBMPc5vJaTBOMQgowuVjxs6ZkrBeMt62xzeBm0uz9CjS858PLg__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/269/image/image.jpg?Expires=1760506703&Signature=Q~3YW1vNTVLIft6IwxltNWt7HRy7RZgwXX4AEWr3uqk0fqrrXNAg~4uIcqPVWPzSczb38RHUTvqm9t8KFA8OBeH0Rq~0SXXPGr6X8Sg5JnocoX9AKo069qX-CQ6HOhe4B635n0-hVF9KbKlSTDrfpmOetR8EPFHdz1k1qJ2dJ8gBwi9beRaFfDZxlv6ZibLIah2lparKFZBuJbi6SQk-18CZGzmgbXGM2Da880L8v44u-p7pKjJlUZHpOmyiUa~uKWhuxCfY3opwnjsl0VOiSUjHVHsLpWlsgcWLZ9ojuQ~DXq1Nr18dRtQWd9fyjqWTYDQ0~19QCV6P8YnYtuY1Iw__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_69_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 69,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/269/image/image.jpg?Expires=1760506703&Signature=Q~3YW1vNTVLIft6IwxltNWt7HRy7RZgwXX4AEWr3uqk0fqrrXNAg~4uIcqPVWPzSczb38RHUTvqm9t8KFA8OBeH0Rq~0SXXPGr6X8Sg5JnocoX9AKo069qX-CQ6HOhe4B635n0-hVF9KbKlSTDrfpmOetR8EPFHdz1k1qJ2dJ8gBwi9beRaFfDZxlv6ZibLIah2lparKFZBuJbi6SQk-18CZGzmgbXGM2Da880L8v44u-p7pKjJlUZHpOmyiUa~uKWhuxCfY3opwnjsl0VOiSUjHVHsLpWlsgcWLZ9ojuQ~DXq1Nr18dRtQWd9fyjqWTYDQ0~19QCV6P8YnYtuY1Iw__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/270/image/image.jpg?Expires=1760506703&Signature=pSR98JezSGWz4PU2bOth3Dtg5y5sGBch0S4YtenRTMT181Zbjy~EB9TLQ4Lo5N7JIUaMB5oteSqej0SsHX2UESxxBL34JPj9R~MqB~hDEoHqVCkBcyILEo3cBKajxYimERf5m~UmTbzNxoZWDT-bKSHkzChSokY4PDWoPxe8M3dKkits70d3SLERfme-uno56vM19OgnLD1k5VJrCs0p6CQP3CYmh~hOBTdP6M8sgMv-uoXfpSb4jorruWWpUbUd3e7ZLxYuuM2UcUb0k56W3hNj5EWDEg~itchB3AVTWqvsAPrtXNUGNXaeFdw-3sO~4d-f2BKg9a79B~TOp3keIw__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_70_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 70,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/270/image/image.jpg?Expires=1760506703&Signature=pSR98JezSGWz4PU2bOth3Dtg5y5sGBch0S4YtenRTMT181Zbjy~EB9TLQ4Lo5N7JIUaMB5oteSqej0SsHX2UESxxBL34JPj9R~MqB~hDEoHqVCkBcyILEo3cBKajxYimERf5m~UmTbzNxoZWDT-bKSHkzChSokY4PDWoPxe8M3dKkits70d3SLERfme-uno56vM19OgnLD1k5VJrCs0p6CQP3CYmh~hOBTdP6M8sgMv-uoXfpSb4jorruWWpUbUd3e7ZLxYuuM2UcUb0k56W3hNj5EWDEg~itchB3AVTWqvsAPrtXNUGNXaeFdw-3sO~4d-f2BKg9a79B~TOp3keIw__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/271/image/image.jpg?Expires=1760506703&Signature=HDKCq9E0X4uHUbEzSMOiDj-a1-swAaHea93JrD3hXeAww0HTpO5dz-UMS6vDpHqETsEC1XFVVb14AEYi3ivm8Z~ShhH-k4EE5SpZUaFJtbrBBj98sCUs-q3Re1WWLvFuxRA47oQSaVlMuOK~~nv6IV74wxcGNdRe1YF1RJ6UcWNXOYrb8A7RgyUSXthTBSWQ1MjxIonxtoU172JvB3iaGCOQ30IDOmApm0yvCuBGZJjUDjxJTq9il7KueKxTGyDWIINMXv6lJ2YrG4JIAIgJPgekoJyVnIcpnYJmbp-6nW5JOcyu6i8b1mjdfL-FEvfOX2v1zm94qRQtaAXI2n8pUA__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_71_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 71,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/271/image/image.jpg?Expires=1760506703&Signature=HDKCq9E0X4uHUbEzSMOiDj-a1-swAaHea93JrD3hXeAww0HTpO5dz-UMS6vDpHqETsEC1XFVVb14AEYi3ivm8Z~ShhH-k4EE5SpZUaFJtbrBBj98sCUs-q3Re1WWLvFuxRA47oQSaVlMuOK~~nv6IV74wxcGNdRe1YF1RJ6UcWNXOYrb8A7RgyUSXthTBSWQ1MjxIonxtoU172JvB3iaGCOQ30IDOmApm0yvCuBGZJjUDjxJTq9il7KueKxTGyDWIINMXv6lJ2YrG4JIAIgJPgekoJyVnIcpnYJmbp-6nW5JOcyu6i8b1mjdfL-FEvfOX2v1zm94qRQtaAXI2n8pUA__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/272/image/image.jpg?Expires=1760506703&Signature=Yy7am3deCufrtqMyLjHq5hSzNUoH5rcrXPswbrHVOC6PPDTR8lB3BU7IuaxQoD6CLXriIrAi-wMr4CUwmTgFWWvm5~sJ7w9ddh5H-Yti1box18HNdE8RzrDAJKw1TJCo~iCyY3uHuOH3~aoTEXdxgb2IPExvaltJQeyNMSnN-6FbV8TMssa9a4STkOxFXn8mQ2c84S8z9GqonyoX7yhOzG4ErRayhlP1Vv60S5o-8LZguy0nxKC4FWfmRWTtL1o3~CF7USD2gr9tWcQxWaxmlOf-YLoaIAga4fBoc~fpHCQP9xD6VXxCtUjSUeOoyBaMsvXG6lUvSgnJZFJGm7DE6g__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_72_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 72,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/272/image/image.jpg?Expires=1760506703&Signature=Yy7am3deCufrtqMyLjHq5hSzNUoH5rcrXPswbrHVOC6PPDTR8lB3BU7IuaxQoD6CLXriIrAi-wMr4CUwmTgFWWvm5~sJ7w9ddh5H-Yti1box18HNdE8RzrDAJKw1TJCo~iCyY3uHuOH3~aoTEXdxgb2IPExvaltJQeyNMSnN-6FbV8TMssa9a4STkOxFXn8mQ2c84S8z9GqonyoX7yhOzG4ErRayhlP1Vv60S5o-8LZguy0nxKC4FWfmRWTtL1o3~CF7USD2gr9tWcQxWaxmlOf-YLoaIAga4fBoc~fpHCQP9xD6VXxCtUjSUeOoyBaMsvXG6lUvSgnJZFJGm7DE6g__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/273/image/image.jpg?Expires=1760506703&Signature=AqFYDMTncNMg9Sf03nR9LPA2bhlVWUbJ10AohXD7zumhQXB9WU~I9IGwMkzkZqXIANWMiNUM7eY-OzYcHCr0jpgAxIUxkpMqnK0pqgFlKoyEUpMWU5ywLYZ83a5~KtX7h5QVSWXIq2Ct-dT8J33vrLi1KXvxqDdlZ6puW13t8PzyUZAKLBIpIFAmof0jJn7-66ewSjKjxDXHjHNiU1UTNGtvjSUmY7v7gu5opMz-W7dM0~Ew1II5-KfFbjxfazsr92CRyIQ-MUHSd~4KC9h7WGaKZ8eywt~cUCRdtB18MUCc36JUAzTLPzc~rLEKJkDNph~dLVF0TbQZGYATK73vKg__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_73_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 73,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/273/image/image.jpg?Expires=1760506703&Signature=AqFYDMTncNMg9Sf03nR9LPA2bhlVWUbJ10AohXD7zumhQXB9WU~I9IGwMkzkZqXIANWMiNUM7eY-OzYcHCr0jpgAxIUxkpMqnK0pqgFlKoyEUpMWU5ywLYZ83a5~KtX7h5QVSWXIq2Ct-dT8J33vrLi1KXvxqDdlZ6puW13t8PzyUZAKLBIpIFAmof0jJn7-66ewSjKjxDXHjHNiU1UTNGtvjSUmY7v7gu5opMz-W7dM0~Ew1II5-KfFbjxfazsr92CRyIQ-MUHSd~4KC9h7WGaKZ8eywt~cUCRdtB18MUCc36JUAzTLPzc~rLEKJkDNph~dLVF0TbQZGYATK73vKg__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/274/image/image.jpg?Expires=1760506703&Signature=DEfGp-njpWpGNxkc6quIOKlJe8mt8U2Vel8PWNj4rjk7sXH7-0juq2L4fZWD8iJac5ZolepkvkDyPUjYsWFM3f04BEepsEvYLp0goOc4DobyTxSiYDLQ8dgWhnlWzmkMbQWcknb-iNNOUVEo5pqxt9beYmQVV8Z9d8d8LQYIHSpmxBl0nzjU5Y2LMENIm4AO78dOzisbOjUUANKuvZG3O3uZ7oS-vDue7R3U53IdCIEq3l5n5JrCJ3swie~mOl2tz7x88NSGWrvtkcc4xANXJLtb6PNdfpl6JDm4tnGEFowP54gPU9so2byp14ES7hFjiPq-mDDv3d7o8j5v3U1C0w__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_74_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 74,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/274/image/image.jpg?Expires=1760506703&Signature=DEfGp-njpWpGNxkc6quIOKlJe8mt8U2Vel8PWNj4rjk7sXH7-0juq2L4fZWD8iJac5ZolepkvkDyPUjYsWFM3f04BEepsEvYLp0goOc4DobyTxSiYDLQ8dgWhnlWzmkMbQWcknb-iNNOUVEo5pqxt9beYmQVV8Z9d8d8LQYIHSpmxBl0nzjU5Y2LMENIm4AO78dOzisbOjUUANKuvZG3O3uZ7oS-vDue7R3U53IdCIEq3l5n5JrCJ3swie~mOl2tz7x88NSGWrvtkcc4xANXJLtb6PNdfpl6JDm4tnGEFowP54gPU9so2byp14ES7hFjiPq-mDDv3d7o8j5v3U1C0w__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/275/image/image.jpg?Expires=1760506703&Signature=vRrDLpM3UCYOdZrNYR1f6~QF7Y3aMe2-dKU22fO5XPTG44YvWyxHNvMGLuLY77xkBTBObtd42MDHmOIA3XQvrHA7~gkwz7cYXQhhzlJtE4uxJTkC26TGewk1ex3M5JP2gCtESbjzV4r~-tFyVJyalyYJYYPh9cv56flKW6uZiO1uTYoh7KHWNURPjupHitxOb6lRkqr~5YNC3Wu8d-KEUnOhwHNI6TLAS14V1G-kKIAMjryXq6VuaNnR5wytJqQKjlei~RgmT-noltqM8tRtxt06a2KykRL2~~M9--qW1qDjNr99XSXb-kKrGreyZimnFeKqEcqrLgjwBkrGAeXs-g__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_75_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 75,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/275/image/image.jpg?Expires=1760506703&Signature=vRrDLpM3UCYOdZrNYR1f6~QF7Y3aMe2-dKU22fO5XPTG44YvWyxHNvMGLuLY77xkBTBObtd42MDHmOIA3XQvrHA7~gkwz7cYXQhhzlJtE4uxJTkC26TGewk1ex3M5JP2gCtESbjzV4r~-tFyVJyalyYJYYPh9cv56flKW6uZiO1uTYoh7KHWNURPjupHitxOb6lRkqr~5YNC3Wu8d-KEUnOhwHNI6TLAS14V1G-kKIAMjryXq6VuaNnR5wytJqQKjlei~RgmT-noltqM8tRtxt06a2KykRL2~~M9--qW1qDjNr99XSXb-kKrGreyZimnFeKqEcqrLgjwBkrGAeXs-g__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/276/image/image.jpg?Expires=1760506703&Signature=ioDVYs2gM~UvWbYCS-Uy0DaCY84I3LWIF3qD~aOGf4RmgUxbpFBwmfnx832MFa2kBtFmrJ35UfJYqyafAaJx1I6BFtbsvSf3m1o2EF1TlCkWvZZnPhUSBqTkS36VHZf~iBXp9l-UiWU5VqBPQ9i0yCNjq2Ckz9L1Z7f0ut0VXN8QyM6aFn7Xzv3WYq1X6yGBHGQtMhnFPi9iSvw73g7i8zhIqFN7aKGUBPIzyZSeRAjGzg6er1SpGU8aC-th2dM6PR5nt0kZfq~IE6YoPd0datpuV1k1oBECM9TbS1m2ajV2WdnHs4ahBWAdwoyW6Wn6u4sOeisuu4IBLtkUgtBCcQ__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_76_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 76,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/276/image/image.jpg?Expires=1760506703&Signature=ioDVYs2gM~UvWbYCS-Uy0DaCY84I3LWIF3qD~aOGf4RmgUxbpFBwmfnx832MFa2kBtFmrJ35UfJYqyafAaJx1I6BFtbsvSf3m1o2EF1TlCkWvZZnPhUSBqTkS36VHZf~iBXp9l-UiWU5VqBPQ9i0yCNjq2Ckz9L1Z7f0ut0VXN8QyM6aFn7Xzv3WYq1X6yGBHGQtMhnFPi9iSvw73g7i8zhIqFN7aKGUBPIzyZSeRAjGzg6er1SpGU8aC-th2dM6PR5nt0kZfq~IE6YoPd0datpuV1k1oBECM9TbS1m2ajV2WdnHs4ahBWAdwoyW6Wn6u4sOeisuu4IBLtkUgtBCcQ__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/277/image/image.jpg?Expires=1760506703&Signature=D7dKzWxL4KAwE1Xgh8xAAMD1bshIGCKtI1XkSmf5xEqZdHUpkg5nWEQ5oviKFmJb3Rawag3JakkeGjxmc7a4NTYcHIo9-XDEUshFri39juxTMNduYhM5bTC3RQSgL2nNoQydLgZL9WsJFUaOvOvnD8G-w1zNPFBDYHyDL6qKrxJ4HMSbvxvbj1de07KQbYY9LztogU0wPlt4dmBtjVwKzWvY0W8OIUg89grnG8OBHV5bCcMbH~tsYpQCaJ6eaNUuyW1Qgsy9AG~F9zMbrXDozr09~BWK1-laRlpnm9fmCx9JdIUNwW2ceiBGK6ki8GgwnLnLEh4fXBFY7Wjd9aliJg__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_77_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 77,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/277/image/image.jpg?Expires=1760506703&Signature=D7dKzWxL4KAwE1Xgh8xAAMD1bshIGCKtI1XkSmf5xEqZdHUpkg5nWEQ5oviKFmJb3Rawag3JakkeGjxmc7a4NTYcHIo9-XDEUshFri39juxTMNduYhM5bTC3RQSgL2nNoQydLgZL9WsJFUaOvOvnD8G-w1zNPFBDYHyDL6qKrxJ4HMSbvxvbj1de07KQbYY9LztogU0wPlt4dmBtjVwKzWvY0W8OIUg89grnG8OBHV5bCcMbH~tsYpQCaJ6eaNUuyW1Qgsy9AG~F9zMbrXDozr09~BWK1-laRlpnm9fmCx9JdIUNwW2ceiBGK6ki8GgwnLnLEh4fXBFY7Wjd9aliJg__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/278/image/image.jpg?Expires=1760506703&Signature=KfMNPxJsvNPQ4zw5VXiu8YMLYjh9jfxZGKykHi~ncnVKhD4-nQ7bYN4Q4IPC5ZZ1rdauQz8dettqeeDfRR5heiilGrK4uEQ8ZkKGcIu8Y7BaMQblMOAwTJAukkepy6fgq~B-v1H5tdtll8UY6dpZT7Gd4nUj3BEJt2A9fGBRTjciwwL3P13s91alEhZjo0ajtmTzKlHzSFh6-UPrmPm1m8B7PreUSZ3KLKjKMtJlJJvbRD1H2RK0kpRlYQ0QMm-4dZChDvMs2XzU7CLh35VZHiJtVSBNpPYlyKVoqkSQphTXEWdncLVEhvsGyUHeWkk2JY6gDJnSMqdYfQmmLHDmWQ__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_78_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 78,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/278/image/image.jpg?Expires=1760506703&Signature=KfMNPxJsvNPQ4zw5VXiu8YMLYjh9jfxZGKykHi~ncnVKhD4-nQ7bYN4Q4IPC5ZZ1rdauQz8dettqeeDfRR5heiilGrK4uEQ8ZkKGcIu8Y7BaMQblMOAwTJAukkepy6fgq~B-v1H5tdtll8UY6dpZT7Gd4nUj3BEJt2A9fGBRTjciwwL3P13s91alEhZjo0ajtmTzKlHzSFh6-UPrmPm1m8B7PreUSZ3KLKjKMtJlJJvbRD1H2RK0kpRlYQ0QMm-4dZChDvMs2XzU7CLh35VZHiJtVSBNpPYlyKVoqkSQphTXEWdncLVEhvsGyUHeWkk2JY6gDJnSMqdYfQmmLHDmWQ__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/279/image/image.jpg?Expires=1760506703&Signature=HhdebHmdT1GnK7C2JwXXbCV774kr0xrf6oyTzJararXtb3eNfMat6vlJDshO8Awh7FaT0oYwi4ZT4Eu~h0WtDKQQKSQq2IDP36RBEUZkfUp4jrcEiNanitIUBQ-7hBZUjJX6o1lDDPSwQ9ouDWakSzm6wJYgegJVeoUN-uz-i6gSITTA1J5o~cmSm5cYpp9XVxa22zXSr2qhDZ7MILS1HW8zRVhTY5Vi2jh~hIYWaELyfjlb6umnMk0s14TpdwcZsToKxvdUPCigo39QiX86rivPRof9YFSXl3ZDgtu3FgKjsBIE5biFvAKrYDxh3YIF07PSem8a6MEQVmQNqJyvuQ__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_79_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 79,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/279/image/image.jpg?Expires=1760506703&Signature=HhdebHmdT1GnK7C2JwXXbCV774kr0xrf6oyTzJararXtb3eNfMat6vlJDshO8Awh7FaT0oYwi4ZT4Eu~h0WtDKQQKSQq2IDP36RBEUZkfUp4jrcEiNanitIUBQ-7hBZUjJX6o1lDDPSwQ9ouDWakSzm6wJYgegJVeoUN-uz-i6gSITTA1J5o~cmSm5cYpp9XVxa22zXSr2qhDZ7MILS1HW8zRVhTY5Vi2jh~hIYWaELyfjlb6umnMk0s14TpdwcZsToKxvdUPCigo39QiX86rivPRof9YFSXl3ZDgtu3FgKjsBIE5biFvAKrYDxh3YIF07PSem8a6MEQVmQNqJyvuQ__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/280/image/image.jpg?Expires=1760506703&Signature=sSAB5MfE92gY35g5eFe1IcabN~4wQotcgAYYBAOAU-1gPjB3QsfcPlH5XhLusovzM~rxDetGVM~5m-HmETqXTw8fjyi76fimu~DGBIIPT-deuE9PCYu8PaH7aAMDiYLq-Gc-V8lTO9XLXx4PhMV8QI5x5yEZXHHF2jE8lFxBkh8tLCRY7sG4lyxO4akGExpKmAelNqgUaV2Gcp4EfIsa-TeOkJbJl1rtC2uTpZnJFHhcjsoDWY2kwDeNHSvHl8Yi222jBE6tp~X~ZUMlntmIAxkomisvbwAf4YDboluMYN2sVObG6-CHTJv-~mZ2ls7A2GKcVWqJPzsoNc~jq95Sgw__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_80_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 80,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/280/image/image.jpg?Expires=1760506703&Signature=sSAB5MfE92gY35g5eFe1IcabN~4wQotcgAYYBAOAU-1gPjB3QsfcPlH5XhLusovzM~rxDetGVM~5m-HmETqXTw8fjyi76fimu~DGBIIPT-deuE9PCYu8PaH7aAMDiYLq-Gc-V8lTO9XLXx4PhMV8QI5x5yEZXHHF2jE8lFxBkh8tLCRY7sG4lyxO4akGExpKmAelNqgUaV2Gcp4EfIsa-TeOkJbJl1rtC2uTpZnJFHhcjsoDWY2kwDeNHSvHl8Yi222jBE6tp~X~ZUMlntmIAxkomisvbwAf4YDboluMYN2sVObG6-CHTJv-~mZ2ls7A2GKcVWqJPzsoNc~jq95Sgw__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/281/image/image.jpg?Expires=1760506703&Signature=yafj8VoJ2tbqUkc4mTH28Mkv3Fck5ydYRkn-mHpLtDpFdiiiP8eW8kcm7stnxW1cD4DYnkyXZQn3xzNZCoS3zqAfitnfVyGqEZw3V5mQYKcUhTJ1y8ccLlWGtM9b5GiAEmxEwyB4BbV1EYwVOSdi2XeEtnG7SbiilWla22kfghCFjKCfPVUEnEsvOTyCvcnuSON6L5J280yxhiCSEHiZxBoTPyTCdPxrF4iuzIAE39IVmVcsUCY2NSb1abEc~AcxKeFdaRuV5enqzr-i9DkKuCssnkY4J3XQdJ6-guoVSjrMQGYgronnaW8h75ybkGzUMqURTnxQJqX5f9z2r0zx0A__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_81_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 81,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/281/image/image.jpg?Expires=1760506703&Signature=yafj8VoJ2tbqUkc4mTH28Mkv3Fck5ydYRkn-mHpLtDpFdiiiP8eW8kcm7stnxW1cD4DYnkyXZQn3xzNZCoS3zqAfitnfVyGqEZw3V5mQYKcUhTJ1y8ccLlWGtM9b5GiAEmxEwyB4BbV1EYwVOSdi2XeEtnG7SbiilWla22kfghCFjKCfPVUEnEsvOTyCvcnuSON6L5J280yxhiCSEHiZxBoTPyTCdPxrF4iuzIAE39IVmVcsUCY2NSb1abEc~AcxKeFdaRuV5enqzr-i9DkKuCssnkY4J3XQdJ6-guoVSjrMQGYgronnaW8h75ybkGzUMqURTnxQJqX5f9z2r0zx0A__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/282/image/image.jpg?Expires=1760506703&Signature=Qd~PvAIrnFSrV~7R4nkJz~KVObUNt08bkzKAijOSPofY1VXGYlAQ0UybjTV2CI6bmeXdaPZBdiGSI1YrjttOGVe2gGzpECN7zowJyPz7Ejl3X7UK67kHeITNpiF0fA6i2nCUisqp0Gde8MK34v9-uOSX4BhXUdacCuOjl4Pzr75iU5Pic3mAIRWXk90147m-A-Pbgk3FkZV-jiruR2327gCcVV0cV481c1IXEMpjKj6f5nX9lGP3jlGx5qn5-ZgnkPPaQyxFVp~YsV1~7dgYBoTlMqL8lXug-fnNcF9tl2OnV2sEm9-BtMrig-8nM3fK-Dyhynd-EXPftzoQKzJLRg__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_82_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 82,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/282/image/image.jpg?Expires=1760506703&Signature=Qd~PvAIrnFSrV~7R4nkJz~KVObUNt08bkzKAijOSPofY1VXGYlAQ0UybjTV2CI6bmeXdaPZBdiGSI1YrjttOGVe2gGzpECN7zowJyPz7Ejl3X7UK67kHeITNpiF0fA6i2nCUisqp0Gde8MK34v9-uOSX4BhXUdacCuOjl4Pzr75iU5Pic3mAIRWXk90147m-A-Pbgk3FkZV-jiruR2327gCcVV0cV481c1IXEMpjKj6f5nX9lGP3jlGx5qn5-ZgnkPPaQyxFVp~YsV1~7dgYBoTlMqL8lXug-fnNcF9tl2OnV2sEm9-BtMrig-8nM3fK-Dyhynd-EXPftzoQKzJLRg__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/283/image/image.jpg?Expires=1760506703&Signature=nGitj2-3sU51IOiH6YC-sH78vAq5bqmB9hY110eNYnqp~kvwXe1FohuEB2QJHxLaqHfAc8APxhb2ieWWkqs4Ol90ox-qi-d~cEviMI7Db0C8D02GktCr1CDAwo0jYrscBTL3MbvaOwvxqN-ZJLUJkN2Gw0HfCIuBZiewPwbO1dAL9FmrEP4Tq4zxn5X3jHOaeO5RTRLkDNomKNYoAu0helSpEtOy3BAOBodVyDclftzJzvOg5QA4tgf4zschUKJgEQiFlbus~A18o15anBY~xhw-KcyEsDs8OyxUKvUcpVVZHdbV4b9SODltjbYtBbd4ew~d7K9mgNSQJjfg9CQ89w__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_83_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 83,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/283/image/image.jpg?Expires=1760506703&Signature=nGitj2-3sU51IOiH6YC-sH78vAq5bqmB9hY110eNYnqp~kvwXe1FohuEB2QJHxLaqHfAc8APxhb2ieWWkqs4Ol90ox-qi-d~cEviMI7Db0C8D02GktCr1CDAwo0jYrscBTL3MbvaOwvxqN-ZJLUJkN2Gw0HfCIuBZiewPwbO1dAL9FmrEP4Tq4zxn5X3jHOaeO5RTRLkDNomKNYoAu0helSpEtOy3BAOBodVyDclftzJzvOg5QA4tgf4zschUKJgEQiFlbus~A18o15anBY~xhw-KcyEsDs8OyxUKvUcpVVZHdbV4b9SODltjbYtBbd4ew~d7K9mgNSQJjfg9CQ89w__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/284/image/image.jpg?Expires=1760506703&Signature=Iwj98mMfBfpVqbg0ZTq-U8934zUMC3X9HlR9l0DsrPJLyA3JYALRX36frXYLSJUgEmOKPONG-Kk94pViOt5kpHv7fljEiXbsYcl9xWCxotpKD3WjrvpY3CzBDWDeYIQJwejRlali-qOXeYPjJn7ZM0j5faeiGLmHuJq8qEKb94OvoaBtAjKiAaZtUtpEhUfeWbhdPHpaVJ0cCKp789uGPXEgW0Qx4OsmAHZbTLxHZwM6dvE9bh1sozWsasg5Ex3L7cOKP-Z1LT1~NVEYtNNSjsRcEqnNpTvR8Ozr~kLH9i2rL75jw6b7QwiMRKOFlC3fCPxm1laF~Q5CHUHISOV~xQ__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_84_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 84,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/284/image/image.jpg?Expires=1760506703&Signature=Iwj98mMfBfpVqbg0ZTq-U8934zUMC3X9HlR9l0DsrPJLyA3JYALRX36frXYLSJUgEmOKPONG-Kk94pViOt5kpHv7fljEiXbsYcl9xWCxotpKD3WjrvpY3CzBDWDeYIQJwejRlali-qOXeYPjJn7ZM0j5faeiGLmHuJq8qEKb94OvoaBtAjKiAaZtUtpEhUfeWbhdPHpaVJ0cCKp789uGPXEgW0Qx4OsmAHZbTLxHZwM6dvE9bh1sozWsasg5Ex3L7cOKP-Z1LT1~NVEYtNNSjsRcEqnNpTvR8Ozr~kLH9i2rL75jw6b7QwiMRKOFlC3fCPxm1laF~Q5CHUHISOV~xQ__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/285/image/image.jpg?Expires=1760506703&Signature=CYD3dacnbx5gBIIV2U2NzrAZll02IdoweiwrKgEZxH50rRox5N7rFeBODrO6S4MLk6qCj-2pexoScEGhtBR3xtUYLf9CZzIuKTnnBY~DsMs6MSBRdDf-MH~sFF4cLcNVTf6CVmqROOpDUFlbEXzcoNWh-YAEHLpIWw3pIMq7iyk5wAsnTp4D1pOIu9QArhK~eojcaGM7rhF-VqnNMBiwYFqsxwCE~vlvmVbQPOLx87I0x2ano~GafHrEhBZ4R5nNAIK4SVs1GsV0rCvqsXWq4zWbXvbuV1xlGf3on7M-0KKIXUjscHjsOq-sJMdk5BflSxl7z7G~CwnbA5J3L~93dA__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_85_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 85,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/285/image/image.jpg?Expires=1760506703&Signature=CYD3dacnbx5gBIIV2U2NzrAZll02IdoweiwrKgEZxH50rRox5N7rFeBODrO6S4MLk6qCj-2pexoScEGhtBR3xtUYLf9CZzIuKTnnBY~DsMs6MSBRdDf-MH~sFF4cLcNVTf6CVmqROOpDUFlbEXzcoNWh-YAEHLpIWw3pIMq7iyk5wAsnTp4D1pOIu9QArhK~eojcaGM7rhF-VqnNMBiwYFqsxwCE~vlvmVbQPOLx87I0x2ano~GafHrEhBZ4R5nNAIK4SVs1GsV0rCvqsXWq4zWbXvbuV1xlGf3on7M-0KKIXUjscHjsOq-sJMdk5BflSxl7z7G~CwnbA5J3L~93dA__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/286/image/image.jpg?Expires=1760506703&Signature=Qd3uElaFLh~wNsUW9j4RODtz-I8qO2Y4LXpfTpR-K5kF8ETZSr7r944Fz8DyuNcagJkE0YnyfT2VKhlKS4HodL7dk31mm70uHk5KJTyyQcIkHWdO69RaMU8KE6agfWR4gp1ITrvN5L39k1PV8kfu~S1d8xPsH1~AIuPYMyLSxQVPau3U9mHnlB~EwLWKJlgknPXwn-yKk2CYeGmkkStppAKcaTp8A1Fn~ZOgJnuKkoqadUOTkJ4ZxQaMvxJdFDcvMA0pHLaMAeESp3pbkaafGZgGz7PGBjJqsJ-g4lUIdwzbtLEChyaw18XSJbS9SgVZKuvSWevjVTqclNKfPWDEGA__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_86_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 86,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/286/image/image.jpg?Expires=1760506703&Signature=Qd3uElaFLh~wNsUW9j4RODtz-I8qO2Y4LXpfTpR-K5kF8ETZSr7r944Fz8DyuNcagJkE0YnyfT2VKhlKS4HodL7dk31mm70uHk5KJTyyQcIkHWdO69RaMU8KE6agfWR4gp1ITrvN5L39k1PV8kfu~S1d8xPsH1~AIuPYMyLSxQVPau3U9mHnlB~EwLWKJlgknPXwn-yKk2CYeGmkkStppAKcaTp8A1Fn~ZOgJnuKkoqadUOTkJ4ZxQaMvxJdFDcvMA0pHLaMAeESp3pbkaafGZgGz7PGBjJqsJ-g4lUIdwzbtLEChyaw18XSJbS9SgVZKuvSWevjVTqclNKfPWDEGA__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/287/image/image.jpg?Expires=1760506703&Signature=Cn~Cp5i9M7k5CM1K87O6sywaaJbGpr74LHAXTJ8Y9ODCHMopt-5Pd8uOmdNkoEYTYp8uC5wFbz0P4Cq0pe7SkYPACZeRXfFpMabTn9kI941Jk7YLGx636IgWykg4KvkQhE9hgH3gGtfEAq4lqI0lHoTXSUPNWJzZTHZTOCtaLWBXLdcTggwpxAZX1f7o85EJYzUHt9YMg5M9yG3oSokDpisKzfwt7eWxoq9H0fLXmxB-Ok0k7OmjhPdiHwWg9G4KGcNA2UzfMy3APX4-9~0rpxucleEva9OblepywT9Bj3Pnxiv7oA5XXLHRlIBThnzQRg7jsPxdup09OUd~oVaaGQ__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_87_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 87,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/287/image/image.jpg?Expires=1760506703&Signature=Cn~Cp5i9M7k5CM1K87O6sywaaJbGpr74LHAXTJ8Y9ODCHMopt-5Pd8uOmdNkoEYTYp8uC5wFbz0P4Cq0pe7SkYPACZeRXfFpMabTn9kI941Jk7YLGx636IgWykg4KvkQhE9hgH3gGtfEAq4lqI0lHoTXSUPNWJzZTHZTOCtaLWBXLdcTggwpxAZX1f7o85EJYzUHt9YMg5M9yG3oSokDpisKzfwt7eWxoq9H0fLXmxB-Ok0k7OmjhPdiHwWg9G4KGcNA2UzfMy3APX4-9~0rpxucleEva9OblepywT9Bj3Pnxiv7oA5XXLHRlIBThnzQRg7jsPxdup09OUd~oVaaGQ__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/288/image/image.jpg?Expires=1760506703&Signature=PpreJt-TI-yfDAhVhQV7fVeVve70e6xk~K2rpR0YkN1vbeCGzLHMsxsP0MtGh4R1miIhReY8rK4aY2cKOOWkf6iSeDnUykoHtepqGPmlaGCYFH3ZZr07anaiulyOee6rU9u88M03Ht-qCigbBHzLxxf-mHsBFRp-OU5ApW9zXoDSwicc~OIML2FY08IV9yYjHTPIAYbY1Qtd2Qry~AO5IOQ8ZgIuWaNcwFX2RzD96MNTMyuPEly8hPPcN5Sn2GQ~M11Jn1mspy2xSDljnRsKsfPJZp6B42spVCx5NLXiCK5gyb2h6w0omWYKBNI16wNoIokymSTWi7NPzFUfyxLHLQ__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_88_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 88,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/288/image/image.jpg?Expires=1760506703&Signature=PpreJt-TI-yfDAhVhQV7fVeVve70e6xk~K2rpR0YkN1vbeCGzLHMsxsP0MtGh4R1miIhReY8rK4aY2cKOOWkf6iSeDnUykoHtepqGPmlaGCYFH3ZZr07anaiulyOee6rU9u88M03Ht-qCigbBHzLxxf-mHsBFRp-OU5ApW9zXoDSwicc~OIML2FY08IV9yYjHTPIAYbY1Qtd2Qry~AO5IOQ8ZgIuWaNcwFX2RzD96MNTMyuPEly8hPPcN5Sn2GQ~M11Jn1mspy2xSDljnRsKsfPJZp6B42spVCx5NLXiCK5gyb2h6w0omWYKBNI16wNoIokymSTWi7NPzFUfyxLHLQ__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/289/image/image.jpg?Expires=1760506703&Signature=Q8gvm5DslI0BCGxztMtE9Tru7STnIctHnIL-9TN9-GoOJ7Z9cN-KM4RmUkVgASqil8VCa8V9cKbwJw2kmkP6Yf-aypI2YXfowD352yQgY~zNIOFBL76goJNQehT8Rs5bpEn8d3KDTFuJI5HMHSVaGnJNVn9~MGIqQ5pLkLNmzsstGW7XgHAzn6eh--eOLgmpIqmTWTDUHvsQhS5HfxEegZNQeG~bmTzhhJc8yneJp2jqdfjj7H~c63aVvU9Tn2ZbMHn-3UR4O6hHgTM66rDBFzj5fbvaOfYfHTRlFMk6XocbDqGlAYlcg9-9LobpPG99MyAX1pryNWj1MZt4tvpmOA__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_89_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 89,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/289/image/image.jpg?Expires=1760506703&Signature=Q8gvm5DslI0BCGxztMtE9Tru7STnIctHnIL-9TN9-GoOJ7Z9cN-KM4RmUkVgASqil8VCa8V9cKbwJw2kmkP6Yf-aypI2YXfowD352yQgY~zNIOFBL76goJNQehT8Rs5bpEn8d3KDTFuJI5HMHSVaGnJNVn9~MGIqQ5pLkLNmzsstGW7XgHAzn6eh--eOLgmpIqmTWTDUHvsQhS5HfxEegZNQeG~bmTzhhJc8yneJp2jqdfjj7H~c63aVvU9Tn2ZbMHn-3UR4O6hHgTM66rDBFzj5fbvaOfYfHTRlFMk6XocbDqGlAYlcg9-9LobpPG99MyAX1pryNWj1MZt4tvpmOA__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/290/image/image.jpg?Expires=1760506703&Signature=naiOplzIv~Forwx5DiCjkB-oI~tSl7yhnCzy8fzO9oqINTauMsZ6nW4Y2jLvAbEoS5c2hMMXFSQR8XLjEGLP~7i~5yxfsNBE1BCncT2wkrZKVd1C-fZL6wcYSDP~DJdZKcdc-lb-Mx~uCDhma6dRvNI2CbLk0fMEry0-LxujpJXbTz2XpVUHJTSuEsLsX5BmZPCgPSH-tUo99p7BMO8Fny50U29SjUv8hlAdaoXhiY9jRrkEER5JUBu0TeH96cjsgMwEqIbtAjJzdOR2iwxFSNqrr8YKuPeyGxWRaNZAUOimYT3-PfYV~T-1dNyWHXzl76EGQNnzs4Kez4y5UtGqoQ__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_90_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 90,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/290/image/image.jpg?Expires=1760506703&Signature=naiOplzIv~Forwx5DiCjkB-oI~tSl7yhnCzy8fzO9oqINTauMsZ6nW4Y2jLvAbEoS5c2hMMXFSQR8XLjEGLP~7i~5yxfsNBE1BCncT2wkrZKVd1C-fZL6wcYSDP~DJdZKcdc-lb-Mx~uCDhma6dRvNI2CbLk0fMEry0-LxujpJXbTz2XpVUHJTSuEsLsX5BmZPCgPSH-tUo99p7BMO8Fny50U29SjUv8hlAdaoXhiY9jRrkEER5JUBu0TeH96cjsgMwEqIbtAjJzdOR2iwxFSNqrr8YKuPeyGxWRaNZAUOimYT3-PfYV~T-1dNyWHXzl76EGQNnzs4Kez4y5UtGqoQ__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/291/image/image.jpg?Expires=1760506703&Signature=VpaGy2aApI60~MLQ1naJB4A45nwqXxdpTihAuptIty4wQ8IH-D6EfruK2VqMsjQDNLupnSq1nexgC05Z6-R6QqotXv~2~0MrBev6fqiFtZYS9EXcwaHAtNXhwsBZeOay7an3IjnxMRsGuAd6XN7pbu1J5GJupjCIdUqfV1e8n-yOlbsVZoELZExIoaYL7JOdRE92dq7nQGpfXIp7sl2nDKzawcuPCLHJB23dENcIJB897tV8XlqcijVr0h~-GBQ4KDH6SWk35vs-Y4V~OsQoVKiizsWNPIsZq0QFG3arUUVkt8VOfYsnFTajIxCtkp2pWQmtKyddcG34HWapjv5Exw__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_91_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 91,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/291/image/image.jpg?Expires=1760506703&Signature=VpaGy2aApI60~MLQ1naJB4A45nwqXxdpTihAuptIty4wQ8IH-D6EfruK2VqMsjQDNLupnSq1nexgC05Z6-R6QqotXv~2~0MrBev6fqiFtZYS9EXcwaHAtNXhwsBZeOay7an3IjnxMRsGuAd6XN7pbu1J5GJupjCIdUqfV1e8n-yOlbsVZoELZExIoaYL7JOdRE92dq7nQGpfXIp7sl2nDKzawcuPCLHJB23dENcIJB897tV8XlqcijVr0h~-GBQ4KDH6SWk35vs-Y4V~OsQoVKiizsWNPIsZq0QFG3arUUVkt8VOfYsnFTajIxCtkp2pWQmtKyddcG34HWapjv5Exw__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/292/image/image.jpg?Expires=1760506703&Signature=bun88uErLeh9PcgotgPKCnKa15btn2U-fMTRaLtHDrAYj6fJ3DLmPW6gng1b7I9jLGQg1a0pYaS5N3mvsTjTk8HoPOrm-rvEQ~jRjIST~0e-apqlDc4mIPCcz0Z7uhwpVYv6zYry4A~Nkb7exAXauEPkL3Dg9l12goOpiAxOwwAu6PAhdhVMQvyPzbSASxK9Z0cSVhalJxSgnGw0B~ehDXZ5YkbdgwjpywltYoCwY4zw36zU~hY5jMZPvRQyofE0zZ55qQpy5tZe~Jf1SMroY3bjFFF9Ou-TNB5F-i~qnw-fj3xDBm0xJPJPIy2OtD6wZHPpQ-XNjMb1yvQG4BQt9A__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_92_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 92,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/292/image/image.jpg?Expires=1760506703&Signature=bun88uErLeh9PcgotgPKCnKa15btn2U-fMTRaLtHDrAYj6fJ3DLmPW6gng1b7I9jLGQg1a0pYaS5N3mvsTjTk8HoPOrm-rvEQ~jRjIST~0e-apqlDc4mIPCcz0Z7uhwpVYv6zYry4A~Nkb7exAXauEPkL3Dg9l12goOpiAxOwwAu6PAhdhVMQvyPzbSASxK9Z0cSVhalJxSgnGw0B~ehDXZ5YkbdgwjpywltYoCwY4zw36zU~hY5jMZPvRQyofE0zZ55qQpy5tZe~Jf1SMroY3bjFFF9Ou-TNB5F-i~qnw-fj3xDBm0xJPJPIy2OtD6wZHPpQ-XNjMb1yvQG4BQt9A__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/293/image/image.jpg?Expires=1760506703&Signature=gvIZibzNRVX9gTAzeNZtBXjne6Z9efsCkzo794iiva~i~NaWatTuNQ8aIn7UkjsL8eVMGUdgNZqSUdKQwPKUq8IzSvM2AwUEcb16ju1mAKc7m8jGEXBElll9KAYl9oFl7EijQvDsXj06ijGWLQCeRJLiPmQqnq3sdEAqg2jaqC9DyGzfxmTWLYmuSa4pWiGDm2spsJelw83KrXrJZAbvLh53lkbYGBsxBnSTB5f2OGbcXIuS5J0bWKqYcJaRxLyUNZD8isf-B7lsyPIerdIPBPS7HSxx4Dm3tnBLeRkoL~0bd1GlAuCegHCtDeKB8PMPCwc5eIDg4YvdN79R0EzVdA__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_93_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 93,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/293/image/image.jpg?Expires=1760506703&Signature=gvIZibzNRVX9gTAzeNZtBXjne6Z9efsCkzo794iiva~i~NaWatTuNQ8aIn7UkjsL8eVMGUdgNZqSUdKQwPKUq8IzSvM2AwUEcb16ju1mAKc7m8jGEXBElll9KAYl9oFl7EijQvDsXj06ijGWLQCeRJLiPmQqnq3sdEAqg2jaqC9DyGzfxmTWLYmuSa4pWiGDm2spsJelw83KrXrJZAbvLh53lkbYGBsxBnSTB5f2OGbcXIuS5J0bWKqYcJaRxLyUNZD8isf-B7lsyPIerdIPBPS7HSxx4Dm3tnBLeRkoL~0bd1GlAuCegHCtDeKB8PMPCwc5eIDg4YvdN79R0EzVdA__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/294/image/image.jpg?Expires=1760506703&Signature=f6UIdbT6dwri~LsF1e0sFeVs~SNMimEx-Uvil1zNcsAP-ryBNkVv91OHKOYQYTZIKktkO2uCUdm~~QaseWz-fDqZoyctZT0AYeLTBSsPnqC7S-ZqxLrjX2sCj6hGkWb79qZxZByAKRKs6AtecG2n7mK9uQcTrrXtDCDhz4om71KjnH7T-mja2F31G0ePYMvqk4vSMX1L08oWPrn0nSVouXcoA~e8iyGoX~TfW5TOFnvi8ovP4gALCDVp4klmo6Tq-lzXqleU-5SgSexJWNk4GHOs3IiRBXUDqm6ZUjFUOWh64jJAjMSPfI3XkzgO4~QJXU9JZmv7svbp8uV7NLBARg__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_94_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 94,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/294/image/image.jpg?Expires=1760506703&Signature=f6UIdbT6dwri~LsF1e0sFeVs~SNMimEx-Uvil1zNcsAP-ryBNkVv91OHKOYQYTZIKktkO2uCUdm~~QaseWz-fDqZoyctZT0AYeLTBSsPnqC7S-ZqxLrjX2sCj6hGkWb79qZxZByAKRKs6AtecG2n7mK9uQcTrrXtDCDhz4om71KjnH7T-mja2F31G0ePYMvqk4vSMX1L08oWPrn0nSVouXcoA~e8iyGoX~TfW5TOFnvi8ovP4gALCDVp4klmo6Tq-lzXqleU-5SgSexJWNk4GHOs3IiRBXUDqm6ZUjFUOWh64jJAjMSPfI3XkzgO4~QJXU9JZmv7svbp8uV7NLBARg__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/295/image/image.jpg?Expires=1760506703&Signature=aF~lrrS70y95VoikZPcgi3wmj0T-vu0grk2evUez9EwghEUS4aXnD8BI-Le5kBr-tO2JLF5kpTfGA6DMJRTzDqky2l8imTI8BAlOusEs092zWFbVgoOhKu5Id6IP1ZZDe5hBsdbCpYK6hgFJSkqLqYKle7hojCJhIwKBkpNULp4FvdiycXUZEjnrl~cd88UE8OC5GnDJShNet4u8bM-mL-E0Tsa8oHhK2qC7iVQz4JZ3vlCRNMAuxAqfUPLeZCSPl1q2t~YsDMAQuPeaPcwjRHDrTpV9xH-45UKrXWpmbSJoZJQLYliGE~AGUMd6tphb-ouTmv00Di5JZbsqoRIleA__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_95_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 95,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/295/image/image.jpg?Expires=1760506703&Signature=aF~lrrS70y95VoikZPcgi3wmj0T-vu0grk2evUez9EwghEUS4aXnD8BI-Le5kBr-tO2JLF5kpTfGA6DMJRTzDqky2l8imTI8BAlOusEs092zWFbVgoOhKu5Id6IP1ZZDe5hBsdbCpYK6hgFJSkqLqYKle7hojCJhIwKBkpNULp4FvdiycXUZEjnrl~cd88UE8OC5GnDJShNet4u8bM-mL-E0Tsa8oHhK2qC7iVQz4JZ3vlCRNMAuxAqfUPLeZCSPl1q2t~YsDMAQuPeaPcwjRHDrTpV9xH-45UKrXWpmbSJoZJQLYliGE~AGUMd6tphb-ouTmv00Di5JZbsqoRIleA__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/296/image/image.jpg?Expires=1760506703&Signature=eNBnYdj~r5axBTgR~UQBvwC432GUI~m3AoPYHfKd7Znvo3UWPnjvze1F1juWOiPhmp3jQZ3hF--5pd78HO1QMSEformnLYp9brtlR4Enqt-YGZ9emT4a24MNk-pvnzxGgF4Vs8~EVSJZq-DYDxMLF819WPvwtVuW6OocJGtfwkjSjeeilU4-ke-LBEYsqhsCkk~S2UtKkvMK6mUYPkXItbHTnCF1fACZeL3tGZi0HftP0c2F-MeWrLdgLfQD338v5PdHGochnovnAUoXlPnBdXZY6N8RWbngNBcLoSIoFSML60Ypun4wMM4opub8pWxQR~UxHYboZY84Pd4Pd0xd3g__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_96_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 96,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/296/image/image.jpg?Expires=1760506703&Signature=eNBnYdj~r5axBTgR~UQBvwC432GUI~m3AoPYHfKd7Znvo3UWPnjvze1F1juWOiPhmp3jQZ3hF--5pd78HO1QMSEformnLYp9brtlR4Enqt-YGZ9emT4a24MNk-pvnzxGgF4Vs8~EVSJZq-DYDxMLF819WPvwtVuW6OocJGtfwkjSjeeilU4-ke-LBEYsqhsCkk~S2UtKkvMK6mUYPkXItbHTnCF1fACZeL3tGZi0HftP0c2F-MeWrLdgLfQD338v5PdHGochnovnAUoXlPnBdXZY6N8RWbngNBcLoSIoFSML60Ypun4wMM4opub8pWxQR~UxHYboZY84Pd4Pd0xd3g__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/297/image/image.jpg?Expires=1760506703&Signature=EqeEZCcN9zeFAgPz1IJQy9dOFVQ3h~MEv5Ol0SXOQwIe9xvbPf0wC31vrdRBw2VBEKKDLuWdGywQnB43fWAg7mMIBp-h0bJTRCZin4kSPq7wngzZbmmOeKLzX8im1hpOPbA9m6j369JKVR4sCEHFHYZtjyM6jF0BayulQyHcsBa0EaYu2FAUJlCksUM5yGXy1ijE8OkHU2FkJRavdXjFDomxW1DtP8v0YNzhbTsHi7S9e6xIDP2ZWV8hgaE9XjS1cOGU3wj-fklYO~M8~1KdQMtGUi-z4X~E3Ir9ir5PBM9eIa3P3Yum7nDPZXg1UnI79E6Qx1jpkdKnIsraE6225A__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_97_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 97,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/297/image/image.jpg?Expires=1760506703&Signature=EqeEZCcN9zeFAgPz1IJQy9dOFVQ3h~MEv5Ol0SXOQwIe9xvbPf0wC31vrdRBw2VBEKKDLuWdGywQnB43fWAg7mMIBp-h0bJTRCZin4kSPq7wngzZbmmOeKLzX8im1hpOPbA9m6j369JKVR4sCEHFHYZtjyM6jF0BayulQyHcsBa0EaYu2FAUJlCksUM5yGXy1ijE8OkHU2FkJRavdXjFDomxW1DtP8v0YNzhbTsHi7S9e6xIDP2ZWV8hgaE9XjS1cOGU3wj-fklYO~M8~1KdQMtGUi-z4X~E3Ir9ir5PBM9eIa3P3Yum7nDPZXg1UnI79E6Qx1jpkdKnIsraE6225A__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/298/image/image.jpg?Expires=1760506703&Signature=lmnDzjYqR-E-BCBylpPzrkv9k2ROHRGbAETewefhF93op7mS1fuxrgzxR5HUEzJ2fP5nmBxUNYUNg5pGyIBPfqIz0alR4F4E~yN6a3zS-nQa319QGdHrg23g0nR0FESELQm2H4nhFjcC5IPIN~Gi9QS9Z3JQTDiL9CrSt5IzIniQhCLqX-KIvfZ1vm8j81BE-FEmh3s-yi4U0XdT1h991TtoMNdz1VTNXc1FNjXeM1qoD9jdTLoNrYDnVKw~o9jz8P1BkyIOjEIuzPKiS~WJrXtwMCFBVe4jkP7WS5pScnXlOFwzOQ1OEXxvYEIzDVzZ0rWTya94HjeDMyQfWhWEVg__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_98_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 98,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/298/image/image.jpg?Expires=1760506703&Signature=lmnDzjYqR-E-BCBylpPzrkv9k2ROHRGbAETewefhF93op7mS1fuxrgzxR5HUEzJ2fP5nmBxUNYUNg5pGyIBPfqIz0alR4F4E~yN6a3zS-nQa319QGdHrg23g0nR0FESELQm2H4nhFjcC5IPIN~Gi9QS9Z3JQTDiL9CrSt5IzIniQhCLqX-KIvfZ1vm8j81BE-FEmh3s-yi4U0XdT1h991TtoMNdz1VTNXc1FNjXeM1qoD9jdTLoNrYDnVKw~o9jz8P1BkyIOjEIuzPKiS~WJrXtwMCFBVe4jkP7WS5pScnXlOFwzOQ1OEXxvYEIzDVzZ0rWTya94HjeDMyQfWhWEVg__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/299/image/image.jpg?Expires=1760506703&Signature=iQ6goJ3ihHVl0vw8FHUox5nq2lZZbcSR9ho~r5SxBZbUEkBbnqwUryULhrWH2--r8BO2cjiowyN1DdkPXKOHWmrTxgGKFUQOl6Ug8HjyIjI2D0MTumc7J2x6JIhNxwNIeVtN4CMbCLmIViRuGI5vZ-ln3Idl5-LAcrTWmTv1voPRCHILewzgR7erUHu0SZfy4wN8zPSWmWyqvGqeQsXyr7IZKX-rZd-08~RULIUxF3qjCrSGEOtmHVqWNbvgnQl9kWSezi1gWBJdwqb-5kx0-c0T1xE~5q67sx85yq3BY~2sAiTq1XdeSa6yEJib37tNg4xYfU-y8l4n0YG96Lr3Xg__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_99_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 99,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/299/image/image.jpg?Expires=1760506703&Signature=iQ6goJ3ihHVl0vw8FHUox5nq2lZZbcSR9ho~r5SxBZbUEkBbnqwUryULhrWH2--r8BO2cjiowyN1DdkPXKOHWmrTxgGKFUQOl6Ug8HjyIjI2D0MTumc7J2x6JIhNxwNIeVtN4CMbCLmIViRuGI5vZ-ln3Idl5-LAcrTWmTv1voPRCHILewzgR7erUHu0SZfy4wN8zPSWmWyqvGqeQsXyr7IZKX-rZd-08~RULIUxF3qjCrSGEOtmHVqWNbvgnQl9kWSezi1gWBJdwqb-5kx0-c0T1xE~5q67sx85yq3BY~2sAiTq1XdeSa6yEJib37tNg4xYfU-y8l4n0YG96Lr3Xg__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/300/image/image.jpg?Expires=1760506704&Signature=aQiTcghIyf06uKFwxHNNpd0xIz9s7~SUB6vfqahtT6MK~zpn6qD9~bKIlRHBkEMBj1asASq4BA6yV8nkQtfNYqaHkijVMJVxJtCH1W5eY8~eK8f4dy8jeEUpiuqBHvr~6b8ycKYZ46oiAN~TO6qiNUNmCUZ3TyX8FBPThu3IA3BhU5EKktyGN0335~PdoA3g1dI6EmCa5SEonXabgf4TGriqfHYGxyrW-TeqlZwl-P5HDgGH61MnUxQ-BhX1gh6XpVXDvTgMtbPbuq2fAmMP7jDzAZQJPm8r4WhgrICSZtveh8wUYJiHiwGil1QSGH-ySTLg9oIKQrT3RPA5XwkbCA__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_0_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 0,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/300/image/image.jpg?Expires=1760506704&Signature=aQiTcghIyf06uKFwxHNNpd0xIz9s7~SUB6vfqahtT6MK~zpn6qD9~bKIlRHBkEMBj1asASq4BA6yV8nkQtfNYqaHkijVMJVxJtCH1W5eY8~eK8f4dy8jeEUpiuqBHvr~6b8ycKYZ46oiAN~TO6qiNUNmCUZ3TyX8FBPThu3IA3BhU5EKktyGN0335~PdoA3g1dI6EmCa5SEonXabgf4TGriqfHYGxyrW-TeqlZwl-P5HDgGH61MnUxQ-BhX1gh6XpVXDvTgMtbPbuq2fAmMP7jDzAZQJPm8r4WhgrICSZtveh8wUYJiHiwGil1QSGH-ySTLg9oIKQrT3RPA5XwkbCA__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/301/image/image.jpg?Expires=1760506704&Signature=oSWFNpmoq1s3NfFzN0oYXlmegT~v2gd01ZiPbOZVwluQ9hiaIGHmWm~sDHJr4ik7KyJ3G1V~JC02Fs9xF7~MLUxt1KjE9FzXwI2qT9rQoCiieVjF7n-jvc59LonVE-537MvD2NrWymIIlgIR1dS89JstXCls7WxyzijFKiXuD9whR8CG96lxFALh7JuU5oDj7LH9bJuAImQJ7Eqs6jJmCdsZkAEHRyO8Y~QjYx9lX-cwGHG6aGmm0ZKlZ1QfDJJUBGVk34dtvTcwly85p0i1c6VSH2xsSFc24gzWLL-0jo0nw~GilYv5KUU6ulPsCh90B9Ks5EEmvIqJXbEz3K9ZOA__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_1_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 1,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/301/image/image.jpg?Expires=1760506704&Signature=oSWFNpmoq1s3NfFzN0oYXlmegT~v2gd01ZiPbOZVwluQ9hiaIGHmWm~sDHJr4ik7KyJ3G1V~JC02Fs9xF7~MLUxt1KjE9FzXwI2qT9rQoCiieVjF7n-jvc59LonVE-537MvD2NrWymIIlgIR1dS89JstXCls7WxyzijFKiXuD9whR8CG96lxFALh7JuU5oDj7LH9bJuAImQJ7Eqs6jJmCdsZkAEHRyO8Y~QjYx9lX-cwGHG6aGmm0ZKlZ1QfDJJUBGVk34dtvTcwly85p0i1c6VSH2xsSFc24gzWLL-0jo0nw~GilYv5KUU6ulPsCh90B9Ks5EEmvIqJXbEz3K9ZOA__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/302/image/image.jpg?Expires=1760506704&Signature=Rd~bMSg2ox6x7JlXnb3l7ON5u41j3ig50HYBCuucgyOr2ruFLy7EcuzX1y54l29UrhTRBGfNrf0VEn7veLD~HNZk3TePUj7depU0iaPqOSkf3XkXvZ6b0AZrrAjkmDWfBUstxueyhDSzhYxiBi~9CmHNZQO-bQQ1L9V9cjp5YL~R2RCyKa6xYO-rJjKy~KAsNW3gSgKXs2AT-BXOP41-NZlQIPOVXraIkck~gXChsomTQV6JjovOetipu4x9hwCGSUyJ-LDRMBuBERBRQXL30KwjUM6sdeooTAHnyFLELlvNClbE1gF5D7zcQJNd7ipP0LBFM~JDKTsubLEyfu7mag__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_2_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 2,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/302/image/image.jpg?Expires=1760506704&Signature=Rd~bMSg2ox6x7JlXnb3l7ON5u41j3ig50HYBCuucgyOr2ruFLy7EcuzX1y54l29UrhTRBGfNrf0VEn7veLD~HNZk3TePUj7depU0iaPqOSkf3XkXvZ6b0AZrrAjkmDWfBUstxueyhDSzhYxiBi~9CmHNZQO-bQQ1L9V9cjp5YL~R2RCyKa6xYO-rJjKy~KAsNW3gSgKXs2AT-BXOP41-NZlQIPOVXraIkck~gXChsomTQV6JjovOetipu4x9hwCGSUyJ-LDRMBuBERBRQXL30KwjUM6sdeooTAHnyFLELlvNClbE1gF5D7zcQJNd7ipP0LBFM~JDKTsubLEyfu7mag__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/303/image/image.jpg?Expires=1760506704&Signature=HQSujtcvkdrqMVgOOJlAQTPzEm~JXR8XrpGBcFNq5d7PMKnsjbdJHF-3UT7LdS7B-BR6J~XZHOJSlBXgM~zk~cF-NMgaGoGRvdMt9s1HpGXEvBiCe3GiI7Ud9WGNi-ze3EBH9YYsBnAuNAWcUd6fjwU8QIRPi3aJKYN166DKvxlol8kts0hXO7hdQwML~1j-wD4qxGOMaeFKOJ4ud6NqFuagDxLPpA4iY2Or~HvtdYq4PwBG6oL5m7Dk9EKIvetjemFjMQplPiWAWEzKbccGApI69FImxtHg6wSqVEL58BSEKLWYYgBQaRzRbOFus90QvI-9dujjk6gvEfmAe5pCbQ__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_3_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 3,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/303/image/image.jpg?Expires=1760506704&Signature=HQSujtcvkdrqMVgOOJlAQTPzEm~JXR8XrpGBcFNq5d7PMKnsjbdJHF-3UT7LdS7B-BR6J~XZHOJSlBXgM~zk~cF-NMgaGoGRvdMt9s1HpGXEvBiCe3GiI7Ud9WGNi-ze3EBH9YYsBnAuNAWcUd6fjwU8QIRPi3aJKYN166DKvxlol8kts0hXO7hdQwML~1j-wD4qxGOMaeFKOJ4ud6NqFuagDxLPpA4iY2Or~HvtdYq4PwBG6oL5m7Dk9EKIvetjemFjMQplPiWAWEzKbccGApI69FImxtHg6wSqVEL58BSEKLWYYgBQaRzRbOFus90QvI-9dujjk6gvEfmAe5pCbQ__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/304/image/image.jpg?Expires=1760506704&Signature=A9MM9iuQTWXyUaHCrqdPYA3oPROU0bCvMXyGzubCPlhWuHe7VdzaRshzxNd24RghcHZWdu9zQySpdYjKBlKqEx6jSjzaFgsn7Iwvfya6ffNkRF4lrIiHn0fXWqaP~d9h1BXQwFPnv5CB2LRPBwfFQcNJE5v85YVgADcJByW6t9dilvRRjEAy~FDp~Y-DuAWXv4SvY8ZWcJD92I3YFNpEfIBcQ5cMXXLtyFpqs2vDMqaB9DYsRaG-Qaak~tnpkt3irD~AcIn91XPxEo11vaEbRdF4OR0RwfJf8A3Jl-E~Wy50ykn9WhzSpEw~0WIcne5hAhEC6ryM2Yxjqphs6l2VQg__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_4_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 4,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/304/image/image.jpg?Expires=1760506704&Signature=A9MM9iuQTWXyUaHCrqdPYA3oPROU0bCvMXyGzubCPlhWuHe7VdzaRshzxNd24RghcHZWdu9zQySpdYjKBlKqEx6jSjzaFgsn7Iwvfya6ffNkRF4lrIiHn0fXWqaP~d9h1BXQwFPnv5CB2LRPBwfFQcNJE5v85YVgADcJByW6t9dilvRRjEAy~FDp~Y-DuAWXv4SvY8ZWcJD92I3YFNpEfIBcQ5cMXXLtyFpqs2vDMqaB9DYsRaG-Qaak~tnpkt3irD~AcIn91XPxEo11vaEbRdF4OR0RwfJf8A3Jl-E~Wy50ykn9WhzSpEw~0WIcne5hAhEC6ryM2Yxjqphs6l2VQg__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/305/image/image.jpg?Expires=1760506704&Signature=hWl2iIVqxNfr4gDjmb7dH8RpA7t55HEfL~LvodgirfwEs7rhiNAmiU70HSWJPYuEHLEGdpQay~7I9dzg3GOGyXcpWiFXqsTkxGMmnP-ReJOqCPr5Qn3Nzj02w4dMr-l-OnInOrLpXyhXmj9sE1Fcm2YQwtCTuhKgURj5cJm1adCISp2HbyU6SNuOy2O0v~ObCHlc~10pEVCQj9-fJt35y4QEOipptHirlar2PjWhC-40webm-lMOeLPog-z850B2XH4Q-wzou1rqhdTFwsnVkr0Ia9PIa8tpY77KRiT6Ih0s53evrlSxjaoZybLK4FVE4l~8WJozHszYZl1O9uZfhQ__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_5_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 5,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/305/image/image.jpg?Expires=1760506704&Signature=hWl2iIVqxNfr4gDjmb7dH8RpA7t55HEfL~LvodgirfwEs7rhiNAmiU70HSWJPYuEHLEGdpQay~7I9dzg3GOGyXcpWiFXqsTkxGMmnP-ReJOqCPr5Qn3Nzj02w4dMr-l-OnInOrLpXyhXmj9sE1Fcm2YQwtCTuhKgURj5cJm1adCISp2HbyU6SNuOy2O0v~ObCHlc~10pEVCQj9-fJt35y4QEOipptHirlar2PjWhC-40webm-lMOeLPog-z850B2XH4Q-wzou1rqhdTFwsnVkr0Ia9PIa8tpY77KRiT6Ih0s53evrlSxjaoZybLK4FVE4l~8WJozHszYZl1O9uZfhQ__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/306/image/image.jpg?Expires=1760506704&Signature=JPZkHTPGEzz4GVgNhoFGvkkygktT~5NhsKjJPG~C2spe1dIKmuXtlrcalbgdoY1ZYG4i8Iqr~e9SiC48wV1iKoPXL2jBBtSxOsVDn5iLQXrtscv61XR~rN3Jz4lrpBQ94IKW3kUZnBM8q4ZtenVSRSuyzqdlBk9EykiDY739Uu2EoGTt6MW3Ve-ROGt573FdeAzNGfk9frWbRQmRJPWXJcsGbtMtE5sMKDe-0uY10UpmGwjlpLWdsYqMq6nOSePhsAEvMsIA9Ih6NYFhBMaZJhAs9R22evEyyV2C-9jAeDLvKUeaFGM-MbbxbzcTl6R4JgyquR6LxDxUQn0ILDGBew__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_6_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 6,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/306/image/image.jpg?Expires=1760506704&Signature=JPZkHTPGEzz4GVgNhoFGvkkygktT~5NhsKjJPG~C2spe1dIKmuXtlrcalbgdoY1ZYG4i8Iqr~e9SiC48wV1iKoPXL2jBBtSxOsVDn5iLQXrtscv61XR~rN3Jz4lrpBQ94IKW3kUZnBM8q4ZtenVSRSuyzqdlBk9EykiDY739Uu2EoGTt6MW3Ve-ROGt573FdeAzNGfk9frWbRQmRJPWXJcsGbtMtE5sMKDe-0uY10UpmGwjlpLWdsYqMq6nOSePhsAEvMsIA9Ih6NYFhBMaZJhAs9R22evEyyV2C-9jAeDLvKUeaFGM-MbbxbzcTl6R4JgyquR6LxDxUQn0ILDGBew__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/307/image/image.jpg?Expires=1760506704&Signature=AnAdeUDi9ZVjKm3pv1duAJWSa795b0GEqo-eBtqpupmc-RQ1coa~J6WjrAgM3HUoHtiSWWEaNlsxh9zea4cQcNqM~l7~kfvgbjBcVTasiIyFfnM-dfFFsKG3d93NmxOl164~~PxOcoGzCWw3BGLKU9zJh0uZ3nO6fdPuZua~1OS-xUTaJZptYmtP76UT9lI02qy6Ydx8bd7MSUNAhdNX0~LXke93oGX-zFbV-aXM6upIRgYKKHls4bpBG-tQy82UiYGoRTbdHvq~IVknZGRC8YBILLDqdwwYGHRp0RcJbZqQiz30um9fdutkbVJ-oHfPMfCxfLadGew--1k6Ll1RJg__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_7_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 7,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/307/image/image.jpg?Expires=1760506704&Signature=AnAdeUDi9ZVjKm3pv1duAJWSa795b0GEqo-eBtqpupmc-RQ1coa~J6WjrAgM3HUoHtiSWWEaNlsxh9zea4cQcNqM~l7~kfvgbjBcVTasiIyFfnM-dfFFsKG3d93NmxOl164~~PxOcoGzCWw3BGLKU9zJh0uZ3nO6fdPuZua~1OS-xUTaJZptYmtP76UT9lI02qy6Ydx8bd7MSUNAhdNX0~LXke93oGX-zFbV-aXM6upIRgYKKHls4bpBG-tQy82UiYGoRTbdHvq~IVknZGRC8YBILLDqdwwYGHRp0RcJbZqQiz30um9fdutkbVJ-oHfPMfCxfLadGew--1k6Ll1RJg__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/308/image/image.jpg?Expires=1760506704&Signature=B80OmoTuTYyKpC2yuwON3tnguFQ4bpCFtmi5XhtucDtB6NiVlLfOVM7TjlLt7h9KkE4KsIzvMAjMFmQ7~uNvXxcmXuTdizyDNAmJCpNbLALBmL7xxMFcH1DH8G0rLFQQsm73k7mDZDVrnZXqsU352xVdn-DpPRaHHlOaMkAazp4Tbn762D~VbD~dPkyoeRicPBW-UpTItx51abARkHm1ZWDuHqHZtoc2nwIVzK1lk1Pa5wcJ2NSAxLndYNgenVeLt~nFG3jbJL3Dr1~jl9-frXKmr20aVodoqxIwbotbx-psSu67tJrFRwDiM3HFQFdd5l~r2kGUo5d67-S5RDD6fQ__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_8_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 8,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/308/image/image.jpg?Expires=1760506704&Signature=B80OmoTuTYyKpC2yuwON3tnguFQ4bpCFtmi5XhtucDtB6NiVlLfOVM7TjlLt7h9KkE4KsIzvMAjMFmQ7~uNvXxcmXuTdizyDNAmJCpNbLALBmL7xxMFcH1DH8G0rLFQQsm73k7mDZDVrnZXqsU352xVdn-DpPRaHHlOaMkAazp4Tbn762D~VbD~dPkyoeRicPBW-UpTItx51abARkHm1ZWDuHqHZtoc2nwIVzK1lk1Pa5wcJ2NSAxLndYNgenVeLt~nFG3jbJL3Dr1~jl9-frXKmr20aVodoqxIwbotbx-psSu67tJrFRwDiM3HFQFdd5l~r2kGUo5d67-S5RDD6fQ__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/309/image/image.jpg?Expires=1760506704&Signature=A7ot4eYoNdGBh~z6~EFaQAGxbsopsOQcsetKMCMHhGtp0FehLHMSU09X3yT7KsObSVL1jvjz275Ui-mJML5IxHzUf8ZZ1MLJSxSLSrgYLIag6cIpf5EVXH1GqP-jokGPj28dt72xx922bww-xxBqpEU7St7ctqLrIYf9KTdWkjWMYjCcm1myfPh1xwMmovAXO75SAzSw3rbcnGNGq6kfOhmLyoIoPUnjCq02Hxqn8xnrgibcFaBYGe3TPDoLMsMRxg8hn7pttsNLPUeJjXB-I14F6CN3fHP5JwKrMoIClxrJI9t5wtgbhsdYiCgNbDOnOHOtrLoMmnFvjv-rMJXJiw__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_9_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 9,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/309/image/image.jpg?Expires=1760506704&Signature=A7ot4eYoNdGBh~z6~EFaQAGxbsopsOQcsetKMCMHhGtp0FehLHMSU09X3yT7KsObSVL1jvjz275Ui-mJML5IxHzUf8ZZ1MLJSxSLSrgYLIag6cIpf5EVXH1GqP-jokGPj28dt72xx922bww-xxBqpEU7St7ctqLrIYf9KTdWkjWMYjCcm1myfPh1xwMmovAXO75SAzSw3rbcnGNGq6kfOhmLyoIoPUnjCq02Hxqn8xnrgibcFaBYGe3TPDoLMsMRxg8hn7pttsNLPUeJjXB-I14F6CN3fHP5JwKrMoIClxrJI9t5wtgbhsdYiCgNbDOnOHOtrLoMmnFvjv-rMJXJiw__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/310/image/image.jpg?Expires=1760506704&Signature=QGjb0GGNf2LrmJMEEwKypPQiuJKT4HBkML4of56DoOWvS5YOR5EAjvSqx0vgFeFmtaXyQDceS2TvPLi5atEgygMT2FYfNsZ6XkB~UB9mlW0VL7MDnXTTFac-AJA1JCK0PmDemOWI7vrtenBIM6thLbiuZbmTDff8Xwbyx~eqVrkqIGJ2XPDLlBkkfbcVRpTKgrARXPl1WEvYEB53aMUtSks9Cz3CtyFVILPbk9~NR4SEOFYFK-dPfkK-x6zCStcWLIC3UXsiz4DsTBEy5sQrHdbtez~s1AkyJhCWOkgBgK9hMfFrPbNR5YSGA8SwWCj7OW7QqSlCUTxq0KXSn7KgXQ__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_10_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 10,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/310/image/image.jpg?Expires=1760506704&Signature=QGjb0GGNf2LrmJMEEwKypPQiuJKT4HBkML4of56DoOWvS5YOR5EAjvSqx0vgFeFmtaXyQDceS2TvPLi5atEgygMT2FYfNsZ6XkB~UB9mlW0VL7MDnXTTFac-AJA1JCK0PmDemOWI7vrtenBIM6thLbiuZbmTDff8Xwbyx~eqVrkqIGJ2XPDLlBkkfbcVRpTKgrARXPl1WEvYEB53aMUtSks9Cz3CtyFVILPbk9~NR4SEOFYFK-dPfkK-x6zCStcWLIC3UXsiz4DsTBEy5sQrHdbtez~s1AkyJhCWOkgBgK9hMfFrPbNR5YSGA8SwWCj7OW7QqSlCUTxq0KXSn7KgXQ__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/311/image/image.jpg?Expires=1760506704&Signature=AK2ehpO~jLzU-zC1A93EKynp8JgZBMnWU~~Yg9zXygrKlByDTL5EUvn0YcU49cmuYwGpoQIq5~XtOwkONgbwnAygcTG674x933oX-IFOW3IbDdl~QaFPy5JjymirinFRnQuE0EXVkw4njUpIoCo3jj9yoTfvE92RNvPzDQvFmR65iChcZ8FTWYPbDIHMYnVWXeM0w4spmSUwOMtK5hzLJGLUx033PxBvPgeQ-7xF3Hbho0qb17RKvyjy3dCqWSQC3UGiUKpSTIHf2fqa2sTMTbWwGvr7UWlm8BYkGU2URJJv2Y8gVphkfok1ZHsvWDz2goAurIzSRR9epUgNAaQTmA__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_11_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 11,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/311/image/image.jpg?Expires=1760506704&Signature=AK2ehpO~jLzU-zC1A93EKynp8JgZBMnWU~~Yg9zXygrKlByDTL5EUvn0YcU49cmuYwGpoQIq5~XtOwkONgbwnAygcTG674x933oX-IFOW3IbDdl~QaFPy5JjymirinFRnQuE0EXVkw4njUpIoCo3jj9yoTfvE92RNvPzDQvFmR65iChcZ8FTWYPbDIHMYnVWXeM0w4spmSUwOMtK5hzLJGLUx033PxBvPgeQ-7xF3Hbho0qb17RKvyjy3dCqWSQC3UGiUKpSTIHf2fqa2sTMTbWwGvr7UWlm8BYkGU2URJJv2Y8gVphkfok1ZHsvWDz2goAurIzSRR9epUgNAaQTmA__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/312/image/image.jpg?Expires=1760506704&Signature=JBLixXJ-YKOV6uikejwZTnfGDLH7b0UUyOWvHi~~6Xa6oEADwYwhmTuEKqQR~C3r34-OITY683OdyVITfvAxZfGk25LoPuu6RhfNlS1vR1BQyZGfuyoDJPFcmmfBiscer~XLsywY6YVSPWGMj03PijG~JYh~DjHS3U-S1duQCLh2t2jqmF2bmh6b7-Gw51CcQbOKnDE6DjhdTtMFnhGxZSz5MFJLjPdjjJbbMxZQIw5VKNoSIysK-q1t8t4tFOALu5ru3UDppehhufsQEhJttWAH0V44H6lIAjT-uZwMJupejjaJFE2z6bY7XbNYDGPQoI51EWCqdo7DZ2I12pqiwQ__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_12_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 12,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/312/image/image.jpg?Expires=1760506704&Signature=JBLixXJ-YKOV6uikejwZTnfGDLH7b0UUyOWvHi~~6Xa6oEADwYwhmTuEKqQR~C3r34-OITY683OdyVITfvAxZfGk25LoPuu6RhfNlS1vR1BQyZGfuyoDJPFcmmfBiscer~XLsywY6YVSPWGMj03PijG~JYh~DjHS3U-S1duQCLh2t2jqmF2bmh6b7-Gw51CcQbOKnDE6DjhdTtMFnhGxZSz5MFJLjPdjjJbbMxZQIw5VKNoSIysK-q1t8t4tFOALu5ru3UDppehhufsQEhJttWAH0V44H6lIAjT-uZwMJupejjaJFE2z6bY7XbNYDGPQoI51EWCqdo7DZ2I12pqiwQ__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/313/image/image.jpg?Expires=1760506704&Signature=DpVyzn2x5Hz7Ogd4pSeZg~Ers56CjzKZfE~EhIxdIW4wQ4z0LQbYJW3kojqjJP1NGawk7TmrTVU4azX-jP1Eyn3CwjYjGDBUli~5hJO20FPKJPFR-rCMCfKAcfo-g-9hHWq~RqXcYWqomiuXM33D2a3UAXKh-leTeaGesTk0tsZ3Z9kr~u2Meg1441OrF4zYdoyKBwZIsMU0VScOtUnnTn-67wVVv0YMO0bVCuyDc-hriN1bQfAcLW5F1P7--1OxTsfjmYAqVzOcUYJ-Cfj3IPM1bB9UeGIBtIELk3HAdklVuSWmd4jryltsnXnJgnxgEFLAqIiKnpSVnZhRq2hp5w__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_13_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 13,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/313/image/image.jpg?Expires=1760506704&Signature=DpVyzn2x5Hz7Ogd4pSeZg~Ers56CjzKZfE~EhIxdIW4wQ4z0LQbYJW3kojqjJP1NGawk7TmrTVU4azX-jP1Eyn3CwjYjGDBUli~5hJO20FPKJPFR-rCMCfKAcfo-g-9hHWq~RqXcYWqomiuXM33D2a3UAXKh-leTeaGesTk0tsZ3Z9kr~u2Meg1441OrF4zYdoyKBwZIsMU0VScOtUnnTn-67wVVv0YMO0bVCuyDc-hriN1bQfAcLW5F1P7--1OxTsfjmYAqVzOcUYJ-Cfj3IPM1bB9UeGIBtIELk3HAdklVuSWmd4jryltsnXnJgnxgEFLAqIiKnpSVnZhRq2hp5w__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/314/image/image.jpg?Expires=1760506704&Signature=eICfq9bo1WHRngHyH36KMFYXeBoIB~wRTqI0S46Fm6do3HdXcVxuHfReoFQbNJXXE078RZX0iKU1UUotkOzAN-e4OmcI97H1b3BqsmgE00WRk5BorjS~kirriZRk1VGYAXn-pADMt7XY9BQoqkOsARQsGFgpwyv7XpzCr9HfOz2y3Q2UjyNErD6Au2OTbOCPO6RHP-O-bP7D9PrwBhxAzGzKDyJFsjgXDQozQN-2qTXaRsTuNvrqFqbP81SUYV~55axtczAu2masSgwX9GaoVyk8sueoXF12TJpIB8Vx3Pv7tF8fOrWwunYkJBXh43SS9phkyWFHu6OZHStoEoG0MQ__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_14_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 14,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/314/image/image.jpg?Expires=1760506704&Signature=eICfq9bo1WHRngHyH36KMFYXeBoIB~wRTqI0S46Fm6do3HdXcVxuHfReoFQbNJXXE078RZX0iKU1UUotkOzAN-e4OmcI97H1b3BqsmgE00WRk5BorjS~kirriZRk1VGYAXn-pADMt7XY9BQoqkOsARQsGFgpwyv7XpzCr9HfOz2y3Q2UjyNErD6Au2OTbOCPO6RHP-O-bP7D9PrwBhxAzGzKDyJFsjgXDQozQN-2qTXaRsTuNvrqFqbP81SUYV~55axtczAu2masSgwX9GaoVyk8sueoXF12TJpIB8Vx3Pv7tF8fOrWwunYkJBXh43SS9phkyWFHu6OZHStoEoG0MQ__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/315/image/image.jpg?Expires=1760506704&Signature=IdVF73O13EptzY9TBbB-1K4CZpcLMMxtp4eZmpri82BOYdPODtSxUA9oRHxoofK0kll8A9Nl7MV-Rjol6Mu1GQS87rxM6vL2cca1yxkeC6MEDEZSqMt1j2Q5nINxz8hjeOwlVCrItjnx0aZKEqq73INpPn-wdYF-6mxyTwhayAuehIRYFdQRL1SPLJpC9nDWG3WYk1~gkoQLj3BuClkt48LSMQlcmEYYACQil0WKWQ3SaiPd2O5L~2p-iCMDwKL2SzLooDqiB9g-DhYDgzfwL6wenbYyUTqHFriwGTJd2KPs4PW5pFdLHlOIf0A8Y8JhLroCjehPL7zwRjbnvujdFg__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_15_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 15,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/315/image/image.jpg?Expires=1760506704&Signature=IdVF73O13EptzY9TBbB-1K4CZpcLMMxtp4eZmpri82BOYdPODtSxUA9oRHxoofK0kll8A9Nl7MV-Rjol6Mu1GQS87rxM6vL2cca1yxkeC6MEDEZSqMt1j2Q5nINxz8hjeOwlVCrItjnx0aZKEqq73INpPn-wdYF-6mxyTwhayAuehIRYFdQRL1SPLJpC9nDWG3WYk1~gkoQLj3BuClkt48LSMQlcmEYYACQil0WKWQ3SaiPd2O5L~2p-iCMDwKL2SzLooDqiB9g-DhYDgzfwL6wenbYyUTqHFriwGTJd2KPs4PW5pFdLHlOIf0A8Y8JhLroCjehPL7zwRjbnvujdFg__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/316/image/image.jpg?Expires=1760506704&Signature=tSqSFCWSeT9oXu~qx~8~d2XRtJG7hfA1xugiulJ4uEQhbTbmI8fFEOb34qvmp9PXhD1ctLDMWTvntv1UrtywjluZOoSo0fraSv12Lw~Jcm3OqRYOjkerGG2EVsBuI8dkZkpz3XWG9uAdHDSenyUC346ExO9BZjpq0~v64yyMud3Mb4T9r1DBjzirtw1nKnV3il6R00ONp3STIUIpZt4~lFJiP~a6EQeTFFjuAEzDPhU6nXFJ4O1FUiG99udsuU17twv8cO11abOFT1ayIohdw9fVbGzPE2x7GNf3ibW2L5Ffhi5ex5e4BW25yhEbUWLl9CrGaAxUmx41qKxhWSUUug__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_16_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 16,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/316/image/image.jpg?Expires=1760506704&Signature=tSqSFCWSeT9oXu~qx~8~d2XRtJG7hfA1xugiulJ4uEQhbTbmI8fFEOb34qvmp9PXhD1ctLDMWTvntv1UrtywjluZOoSo0fraSv12Lw~Jcm3OqRYOjkerGG2EVsBuI8dkZkpz3XWG9uAdHDSenyUC346ExO9BZjpq0~v64yyMud3Mb4T9r1DBjzirtw1nKnV3il6R00ONp3STIUIpZt4~lFJiP~a6EQeTFFjuAEzDPhU6nXFJ4O1FUiG99udsuU17twv8cO11abOFT1ayIohdw9fVbGzPE2x7GNf3ibW2L5Ffhi5ex5e4BW25yhEbUWLl9CrGaAxUmx41qKxhWSUUug__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/317/image/image.jpg?Expires=1760506704&Signature=gGauSTRUMPkeGsHVsiSx3ZLJmXUuyhlLvu1zTzoAqPwVo8PpSF8e8cXhIKjOBpM-jd9EqNpFsK52oMV1HkHmZhG3SxesrUnbb~TcCQX-XB7fXoVc5lk4PyTPAX~cG5GBTZIkA04b0lxLvB3wRosdWWV6WygIkmIADRoyBUcbTclI6NmDnLFQpg6P4aTPEQg9dsIkmUUWacoLCYQI6R1HfWWyAQjwxQ2IwOGiZuPeHVIol-6wajfJ6cq28ocEeb-xqPp4zDumFpa-CPxhalUaxGzAyy4rtRM5L5Uvt6q7v9HYACBIwBIM9AamjaddgDtL-AezaFc9mkLlnWGLNXVq8A__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_17_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 17,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/317/image/image.jpg?Expires=1760506704&Signature=gGauSTRUMPkeGsHVsiSx3ZLJmXUuyhlLvu1zTzoAqPwVo8PpSF8e8cXhIKjOBpM-jd9EqNpFsK52oMV1HkHmZhG3SxesrUnbb~TcCQX-XB7fXoVc5lk4PyTPAX~cG5GBTZIkA04b0lxLvB3wRosdWWV6WygIkmIADRoyBUcbTclI6NmDnLFQpg6P4aTPEQg9dsIkmUUWacoLCYQI6R1HfWWyAQjwxQ2IwOGiZuPeHVIol-6wajfJ6cq28ocEeb-xqPp4zDumFpa-CPxhalUaxGzAyy4rtRM5L5Uvt6q7v9HYACBIwBIM9AamjaddgDtL-AezaFc9mkLlnWGLNXVq8A__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/318/image/image.jpg?Expires=1760506704&Signature=TNvnS1fMj3x1lW9Zsagq68Mmbsa89SX09F9zOT8k74ZERcOWIfMxr6IvdglbtXACJrKfCCwCOKZ3kJ6dP~hu5gHKtO1czSvY3G7uh0dGUfOlBabaZIEkqkvoceZkKrk8R-St1aMNSI7X36~p9kOY4ZeGlgzdvr-q~9n8WHiNc3TsUs3tfcGfY85tjA5-DJHNfsIZxn7WFT0lRrp-hkNkHOhR0LlHGN5DQqH4FOlnTgqWJGBclZsjYMsSs~0NJSRLFnqmxJwoQKSXJBvc10766IdCPN7wXeD4abiQoqorLO2RFvKfQm0jRqbRtzQhTTaEbi2FfdDU-0Qi9oBOKCOTaw__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_18_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 18,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/318/image/image.jpg?Expires=1760506704&Signature=TNvnS1fMj3x1lW9Zsagq68Mmbsa89SX09F9zOT8k74ZERcOWIfMxr6IvdglbtXACJrKfCCwCOKZ3kJ6dP~hu5gHKtO1czSvY3G7uh0dGUfOlBabaZIEkqkvoceZkKrk8R-St1aMNSI7X36~p9kOY4ZeGlgzdvr-q~9n8WHiNc3TsUs3tfcGfY85tjA5-DJHNfsIZxn7WFT0lRrp-hkNkHOhR0LlHGN5DQqH4FOlnTgqWJGBclZsjYMsSs~0NJSRLFnqmxJwoQKSXJBvc10766IdCPN7wXeD4abiQoqorLO2RFvKfQm0jRqbRtzQhTTaEbi2FfdDU-0Qi9oBOKCOTaw__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/319/image/image.jpg?Expires=1760506704&Signature=ZgmHPRkN00qQcr-dtpdX0206Mf9sLzBnu9reqFxMK-wOSqAiRnHh4ZiVHPG9g2fFyAEQhWltquQbWHQ-ftjAdxfmzSvZHsXt3mLdenckUGH~qNjh-MCp9obqsBg5e8RekBQCs36Q3crpEjDdgGrRN~PYczB7zQoasWuueC-l5zwiZMhsUAz67lIsq5xpp3p5Mz8V8-pko5EfVCFT-~L8Gkqx3pzaPqC6Lmumej9HdVJt9pO6~lxC~PLXxtLCsrxG-w6s6FC7aBMjOhWh1DDfM52OdoxkquB60ypEYfUrRhD08VKvqVX4m7sikA4qzH4hGhepML78D4IpDLOtcoW6ew__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_19_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 19,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/319/image/image.jpg?Expires=1760506704&Signature=ZgmHPRkN00qQcr-dtpdX0206Mf9sLzBnu9reqFxMK-wOSqAiRnHh4ZiVHPG9g2fFyAEQhWltquQbWHQ-ftjAdxfmzSvZHsXt3mLdenckUGH~qNjh-MCp9obqsBg5e8RekBQCs36Q3crpEjDdgGrRN~PYczB7zQoasWuueC-l5zwiZMhsUAz67lIsq5xpp3p5Mz8V8-pko5EfVCFT-~L8Gkqx3pzaPqC6Lmumej9HdVJt9pO6~lxC~PLXxtLCsrxG-w6s6FC7aBMjOhWh1DDfM52OdoxkquB60ypEYfUrRhD08VKvqVX4m7sikA4qzH4hGhepML78D4IpDLOtcoW6ew__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/320/image/image.jpg?Expires=1760506704&Signature=EW2OHllAAlKeUwfTd5-PU1l2PfdK0Gkn-UR9pI~kLOnnC1xnJGH7buJLq-TAdBBPkbkyBOrMSXVN9xKRJH9OavMs-HruP3gN2LE0VK7RQBJI-hNYVoJjclhtTbhN5a21LV5W3QO1eX2qU8BknAfCt5gtq3YNF2tG~fu8Uc1XBWQYvxxZBfOIJc9i~~SGZEWiWQz2NtZdnOizIs9r9qVmIXP~27uSQyoDhVqGule8y7BZQEfKQBwbs81T6yGm8Igrod3jcbykTwuZcVS9730xz4UMW1HF9AYXCx9qxTZB4Mx156ZuFWkSukvAHZQEMo3WjnpmEzBSH~-0pOCLM0yZ5w__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_20_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 20,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/320/image/image.jpg?Expires=1760506704&Signature=EW2OHllAAlKeUwfTd5-PU1l2PfdK0Gkn-UR9pI~kLOnnC1xnJGH7buJLq-TAdBBPkbkyBOrMSXVN9xKRJH9OavMs-HruP3gN2LE0VK7RQBJI-hNYVoJjclhtTbhN5a21LV5W3QO1eX2qU8BknAfCt5gtq3YNF2tG~fu8Uc1XBWQYvxxZBfOIJc9i~~SGZEWiWQz2NtZdnOizIs9r9qVmIXP~27uSQyoDhVqGule8y7BZQEfKQBwbs81T6yGm8Igrod3jcbykTwuZcVS9730xz4UMW1HF9AYXCx9qxTZB4Mx156ZuFWkSukvAHZQEMo3WjnpmEzBSH~-0pOCLM0yZ5w__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/321/image/image.jpg?Expires=1760506704&Signature=qpS12HUxLf2qe3A8gwmgzlICczC6dRkEv9Fu41DrkqZ4aNMJ7jHbZC2IJn5loUc0ZQyIUQG~60d-WSvX1lJORZRXx-sUVHZJvbqFxfN2TBYCMpiXDcIaymypiEOlFXc6C6XNZF62IWLlPAX2Lpxv7dbCtCp0QExF60F4YP-Ces8FC12SIoxBzAKGAuk0CqTZiw94uUBRQhrtrPzeWkIeUCeN9xzmTlJzHClhU-ojdiaWW6-YYZi~ZZP09~M7CPpwtkqtKTJep3ARMNjU-EYUmct9VYA1~nXifwkRWNngykro2KMzp5O7rEPrNA99Y86c31d2gkQ4-W~FCWpD9p8Jlw__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_21_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 21,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/321/image/image.jpg?Expires=1760506704&Signature=qpS12HUxLf2qe3A8gwmgzlICczC6dRkEv9Fu41DrkqZ4aNMJ7jHbZC2IJn5loUc0ZQyIUQG~60d-WSvX1lJORZRXx-sUVHZJvbqFxfN2TBYCMpiXDcIaymypiEOlFXc6C6XNZF62IWLlPAX2Lpxv7dbCtCp0QExF60F4YP-Ces8FC12SIoxBzAKGAuk0CqTZiw94uUBRQhrtrPzeWkIeUCeN9xzmTlJzHClhU-ojdiaWW6-YYZi~ZZP09~M7CPpwtkqtKTJep3ARMNjU-EYUmct9VYA1~nXifwkRWNngykro2KMzp5O7rEPrNA99Y86c31d2gkQ4-W~FCWpD9p8Jlw__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/322/image/image.jpg?Expires=1760506704&Signature=gZ3gM5oDiR0c3sLH8DCMcnvA3GdPvI2rlfTUAMEztnhlfBBPiaqDt888Rf0n1n6F5puzrdVRk7LkInxfB43AGvt1mCLN2ev0xf28Y9woaF3j2fiBrAH0ek4zkxbqnUPlwob9qDn3eiKOwB-1-tN5pQXAwN7Cv4IjCSTPHoeDrcl9hfGFnyzKUJAooZcIWGfXbbg0-VYRteTWuKlricxFdDowVltUYvx2g18lIlEIVnx6PyCdyQHoXs4sMV9tjBIlgyzUlo3mFFdKbr7Mfhq262tkRbpxe7C7Oo3Zcb3y-Md3mElKSNE9~R77fUXXuxeh81mdVBi8PXETIK9U9tzVkA__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_22_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 22,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/322/image/image.jpg?Expires=1760506704&Signature=gZ3gM5oDiR0c3sLH8DCMcnvA3GdPvI2rlfTUAMEztnhlfBBPiaqDt888Rf0n1n6F5puzrdVRk7LkInxfB43AGvt1mCLN2ev0xf28Y9woaF3j2fiBrAH0ek4zkxbqnUPlwob9qDn3eiKOwB-1-tN5pQXAwN7Cv4IjCSTPHoeDrcl9hfGFnyzKUJAooZcIWGfXbbg0-VYRteTWuKlricxFdDowVltUYvx2g18lIlEIVnx6PyCdyQHoXs4sMV9tjBIlgyzUlo3mFFdKbr7Mfhq262tkRbpxe7C7Oo3Zcb3y-Md3mElKSNE9~R77fUXXuxeh81mdVBi8PXETIK9U9tzVkA__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/323/image/image.jpg?Expires=1760506704&Signature=iNbub5LWkGHfLIhcZhlMX03iBaiH3QEmIO2-VvEwc3vN45GMFqdl8anHjV2BlCsIKyCTQFBz0uLQh38wf3lGEUDoc7lfM37eMnp72XcqnIvUWq8YAZWHNDeaIRZPR8T9NVUpv1zZ4qYY-QWx2iPNlyv0FBxxBdAwQYRO3KZB5lWiI-mF9KmKjI9R7WXc5sUNOiRfQqwKG7VTEn0kLChHgcYDltIQLX635kS~e0Fv98mHk4QMQQb-n2X9bDUNZtrGJYj-SWZmfIwt8Ltk2zv0htjwBXfoSOeX6ybuMULQh6HBNdqVpaQMV6j3~61~SORGbgnvzPp060RDZSqoWnGG2g__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_23_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 23,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/323/image/image.jpg?Expires=1760506704&Signature=iNbub5LWkGHfLIhcZhlMX03iBaiH3QEmIO2-VvEwc3vN45GMFqdl8anHjV2BlCsIKyCTQFBz0uLQh38wf3lGEUDoc7lfM37eMnp72XcqnIvUWq8YAZWHNDeaIRZPR8T9NVUpv1zZ4qYY-QWx2iPNlyv0FBxxBdAwQYRO3KZB5lWiI-mF9KmKjI9R7WXc5sUNOiRfQqwKG7VTEn0kLChHgcYDltIQLX635kS~e0Fv98mHk4QMQQb-n2X9bDUNZtrGJYj-SWZmfIwt8Ltk2zv0htjwBXfoSOeX6ybuMULQh6HBNdqVpaQMV6j3~61~SORGbgnvzPp060RDZSqoWnGG2g__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/324/image/image.jpg?Expires=1760506704&Signature=FJEZNQkc-rOcjMgBxOta1-XSi7jw7zVLMouHD7B4-ZIp2iGHrYiP2KtsrcbybJ3TrSc58hjyVRIMvHYNd~tgvFy1KblDENI0Sxd86P4teU-zqEdzeuDkx1CqhYDeKx-biQw7u7XkdlEimlBr5D5WkkZvQtSSbM6SgimDdYB1EhIeXtEalC-djrhvIhVlSu4RbqTyOYaPxve01qRj5m3VTIixJkuIObZ5aR2OcuNdypbvdGPYR3BQZFVLRG7lX~EIuTXSGBojprePGHuGQyE2DNTBDQHGRlGfd9EOeEOdFLbCQgUQ~heHr1KZgW~iVKEaMn5EyXtqhTXeKRPeHUvvjw__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_24_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 24,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/324/image/image.jpg?Expires=1760506704&Signature=FJEZNQkc-rOcjMgBxOta1-XSi7jw7zVLMouHD7B4-ZIp2iGHrYiP2KtsrcbybJ3TrSc58hjyVRIMvHYNd~tgvFy1KblDENI0Sxd86P4teU-zqEdzeuDkx1CqhYDeKx-biQw7u7XkdlEimlBr5D5WkkZvQtSSbM6SgimDdYB1EhIeXtEalC-djrhvIhVlSu4RbqTyOYaPxve01qRj5m3VTIixJkuIObZ5aR2OcuNdypbvdGPYR3BQZFVLRG7lX~EIuTXSGBojprePGHuGQyE2DNTBDQHGRlGfd9EOeEOdFLbCQgUQ~heHr1KZgW~iVKEaMn5EyXtqhTXeKRPeHUvvjw__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/325/image/image.jpg?Expires=1760506704&Signature=mEDh511aDY5bLZvsaerZIMY8wv6jh~iWY9n~lqQYY8~I5uNTw9WYgSBtNm07dMfvmXoBnyx92zAQ7wi4hFLqE4G5r9uBHK6U0ZbugsL2USWEfKVZLm34I6QXME45C7MYhJzrua0e0jgPa7ZbykG8DvI9bGaMLVI9tn8kK-WhYJ0ffe9g71HNvonf-826roSD4VnSRxmkHj24JvufeqtmOgbGfkQpje4y4J~c2KOWjEo-cbvT75SKuOfa82GwuUeRJgVQB5jugMgOfuEJjYjk6HQkzRLmzsEx~aUrzrhSUCigCDLe37sWmzQf5S~H-1EYwvJ6k~r7hAcb9kuE92zMGQ__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_25_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 25,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/325/image/image.jpg?Expires=1760506704&Signature=mEDh511aDY5bLZvsaerZIMY8wv6jh~iWY9n~lqQYY8~I5uNTw9WYgSBtNm07dMfvmXoBnyx92zAQ7wi4hFLqE4G5r9uBHK6U0ZbugsL2USWEfKVZLm34I6QXME45C7MYhJzrua0e0jgPa7ZbykG8DvI9bGaMLVI9tn8kK-WhYJ0ffe9g71HNvonf-826roSD4VnSRxmkHj24JvufeqtmOgbGfkQpje4y4J~c2KOWjEo-cbvT75SKuOfa82GwuUeRJgVQB5jugMgOfuEJjYjk6HQkzRLmzsEx~aUrzrhSUCigCDLe37sWmzQf5S~H-1EYwvJ6k~r7hAcb9kuE92zMGQ__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/326/image/image.jpg?Expires=1760506704&Signature=PjbRk-S57iDyDjcmegKgklYyGP4KXud3xEPm1xvTNy33YB7aJAIlsKELmmqIOAfgqJbNI0y-dy~8Auh5B1JhaAqh6KrE8~RfK8pQ3EHJunQCXH8Nes469kdopNQ09b7Z0ILChHafMrW5Wiis~AWW-yZwDbvY~AtBZhbNYV6hWGPY8XwRcasrXVR-QOMbrt72WgYxFZ-Ru8BO3i8074~DI2bvAAk5KN14KnQVfPHlUFzLChI3MNFIjFFpQihhhfz8Fk9YQDUDwXrAmnH4GAdsVLm5Wx~ZVMSg8p5a9HVOoW3KP8HQoFFQ~98yAv5jQ2i0-XWvpb6IO8-rU8KAW74U6w__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_26_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 26,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/326/image/image.jpg?Expires=1760506704&Signature=PjbRk-S57iDyDjcmegKgklYyGP4KXud3xEPm1xvTNy33YB7aJAIlsKELmmqIOAfgqJbNI0y-dy~8Auh5B1JhaAqh6KrE8~RfK8pQ3EHJunQCXH8Nes469kdopNQ09b7Z0ILChHafMrW5Wiis~AWW-yZwDbvY~AtBZhbNYV6hWGPY8XwRcasrXVR-QOMbrt72WgYxFZ-Ru8BO3i8074~DI2bvAAk5KN14KnQVfPHlUFzLChI3MNFIjFFpQihhhfz8Fk9YQDUDwXrAmnH4GAdsVLm5Wx~ZVMSg8p5a9HVOoW3KP8HQoFFQ~98yAv5jQ2i0-XWvpb6IO8-rU8KAW74U6w__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/327/image/image.jpg?Expires=1760506704&Signature=HlZ4NGNQgzKZjWKjLGLqhXSKx8FaX7n1T7klApbdaV1LgIZxJ578nd7SJGDULrN44JNtD2TQYVDndVow6d~P0rJBZkMJfYnj~mFBtibx~e-XovebbGdLdYcpA-6QAuaMi5wx3fdLKt69yCSjYN7pA-5N6M6KzFBwiTc9QPLuZSB~n4GKhhzdJOAfijPs6zgMJPP1t08~iEyRgi-IKh0lkZ2GxSBVuOoFyPUO~SV-XfP44aNp02tl~2RPzQc0cGL8PgfhHUvVGnHg08lS6d3jMaOd~qJzrrwg~ust0GTB7vwym7kBjcxFarsYGZmQ0~vU3MU8DO5lMRMXXhgT~6GHeQ__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_27_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 27,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/327/image/image.jpg?Expires=1760506704&Signature=HlZ4NGNQgzKZjWKjLGLqhXSKx8FaX7n1T7klApbdaV1LgIZxJ578nd7SJGDULrN44JNtD2TQYVDndVow6d~P0rJBZkMJfYnj~mFBtibx~e-XovebbGdLdYcpA-6QAuaMi5wx3fdLKt69yCSjYN7pA-5N6M6KzFBwiTc9QPLuZSB~n4GKhhzdJOAfijPs6zgMJPP1t08~iEyRgi-IKh0lkZ2GxSBVuOoFyPUO~SV-XfP44aNp02tl~2RPzQc0cGL8PgfhHUvVGnHg08lS6d3jMaOd~qJzrrwg~ust0GTB7vwym7kBjcxFarsYGZmQ0~vU3MU8DO5lMRMXXhgT~6GHeQ__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/328/image/image.jpg?Expires=1760506704&Signature=Robr-v7osLW1S~czf8ZXbl8arHAuYzETWngfmWVvOLQJNiNuSvPVc2FmzzF5TGz45urQ7y8Lk6pIcu26QGApkQokRIOx4yzTiBlhKENW9fyseici2cqCMm1SJQ6Oobw4R2gu--PTxzSJ4xNQS-MRlIdZvQSCdu3Vl9mrTrQlJ8yxLZ5sDKfxzkjhBcLl7GdojFHoKVp3zvpLSrP-SA45iiMiUz-bCv3tZtXoTGr~MqOJM70B8FjvjDLp2MSF8axHMOSPtEDEwucLAdHSnAnoRvtu1mO~cSmkebdd6H1jRJR44JYqMNoAA78aOSRA8IhrNkTr3Ap-SPE5KtMAlRBUSg__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_28_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 28,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/328/image/image.jpg?Expires=1760506704&Signature=Robr-v7osLW1S~czf8ZXbl8arHAuYzETWngfmWVvOLQJNiNuSvPVc2FmzzF5TGz45urQ7y8Lk6pIcu26QGApkQokRIOx4yzTiBlhKENW9fyseici2cqCMm1SJQ6Oobw4R2gu--PTxzSJ4xNQS-MRlIdZvQSCdu3Vl9mrTrQlJ8yxLZ5sDKfxzkjhBcLl7GdojFHoKVp3zvpLSrP-SA45iiMiUz-bCv3tZtXoTGr~MqOJM70B8FjvjDLp2MSF8axHMOSPtEDEwucLAdHSnAnoRvtu1mO~cSmkebdd6H1jRJR44JYqMNoAA78aOSRA8IhrNkTr3Ap-SPE5KtMAlRBUSg__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/329/image/image.jpg?Expires=1760506704&Signature=iiIEGmoICflnf4OVFu7H1ym8aQ4o9amdQYW6GVL0F3srVItXrZwMMVaTPLSCbaN-XPafps55uWzRsJPwRCiatCHOawDiBCGa~2r7SjONd7HRXkHnS~lvJ9ms0~ikQtg8Y1TzyM-jJFMnYcDDeeWO68wRpDf8a60W-EQVSHBJ9G8~S7QHXgO3wjZAT16H9siw3k1QzRL9kIA7~pJ61Ol8s4dXGuXouQ98OYNsHFfVIRrtdPmwSRf92pjG9Yx2aZeJBFmzUqqNJqwltYOiFSjqfxZljkbP85XGoaISmmkWYGujpjV8h8tByZNqtUaSeR9oo4MPTh6eQ2vEqGMXBpNmoA__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_29_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 29,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/329/image/image.jpg?Expires=1760506704&Signature=iiIEGmoICflnf4OVFu7H1ym8aQ4o9amdQYW6GVL0F3srVItXrZwMMVaTPLSCbaN-XPafps55uWzRsJPwRCiatCHOawDiBCGa~2r7SjONd7HRXkHnS~lvJ9ms0~ikQtg8Y1TzyM-jJFMnYcDDeeWO68wRpDf8a60W-EQVSHBJ9G8~S7QHXgO3wjZAT16H9siw3k1QzRL9kIA7~pJ61Ol8s4dXGuXouQ98OYNsHFfVIRrtdPmwSRf92pjG9Yx2aZeJBFmzUqqNJqwltYOiFSjqfxZljkbP85XGoaISmmkWYGujpjV8h8tByZNqtUaSeR9oo4MPTh6eQ2vEqGMXBpNmoA__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/330/image/image.jpg?Expires=1760506704&Signature=MTTveeyg39CtukJ8gG5helYRKms6fzl9xifAVk7mYmZ~NwZAQmCpscGBTDo0A~4kR56~h7fexg5BC8ntm5ujS3KSl9GpzLKqW5rtLMaLZTpxMybdYaXzDTeX9r5oOkvrKtEhjtt42JnieGv1odM58w4kMQ1LejNcG19M3AMhnsBWd2fYCpNzdVE5uLHxgWfm~Pj3srmvnv1LaRSiFYiWFuuJMXx1z6ehqv4mcd9eHxzaRWQum0ufy10o5IaB0AXu0qAWtEPZSymATnPUDc-TGBsjxgbV4LEsW002NWvl~ASUZhPDjTmxKBtXqimIAAyZK3JtecycjypDnDPU2vUZUA__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_30_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 30,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/330/image/image.jpg?Expires=1760506704&Signature=MTTveeyg39CtukJ8gG5helYRKms6fzl9xifAVk7mYmZ~NwZAQmCpscGBTDo0A~4kR56~h7fexg5BC8ntm5ujS3KSl9GpzLKqW5rtLMaLZTpxMybdYaXzDTeX9r5oOkvrKtEhjtt42JnieGv1odM58w4kMQ1LejNcG19M3AMhnsBWd2fYCpNzdVE5uLHxgWfm~Pj3srmvnv1LaRSiFYiWFuuJMXx1z6ehqv4mcd9eHxzaRWQum0ufy10o5IaB0AXu0qAWtEPZSymATnPUDc-TGBsjxgbV4LEsW002NWvl~ASUZhPDjTmxKBtXqimIAAyZK3JtecycjypDnDPU2vUZUA__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/331/image/image.jpg?Expires=1760506704&Signature=IwpNrxONbuI6xGpE7YF7WAF9wZVysH8qySQ-x~Jb-Mg8bv-sYc4G2RedBNoLhl1awYxSIL~~RyN9YSTQCXZ3y3eVj8akYrPpyyqPsEdhVsi-kyFq3ZgLPrTDLF6Qp9U4TRRiL5Y3SLqL7URf3zfKNA0tiqujYL3xA3EgN6pzWXI5oCmmwLCJ3KFvmecmSlMndFRovuGFtjJDOYi01HxR7AV128v~9SMtOngO3oDGxrt1gAKlz9HWoMUrlVfYgd3ZhcskpJpbvEgYfhy~FbVB3ScNNP~3ltpBejLESggtKsQX50lWzCDMoE59Cz42LEmUwXVlk2vCD5DsMXnnf7GPMw__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_31_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 31,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/331/image/image.jpg?Expires=1760506704&Signature=IwpNrxONbuI6xGpE7YF7WAF9wZVysH8qySQ-x~Jb-Mg8bv-sYc4G2RedBNoLhl1awYxSIL~~RyN9YSTQCXZ3y3eVj8akYrPpyyqPsEdhVsi-kyFq3ZgLPrTDLF6Qp9U4TRRiL5Y3SLqL7URf3zfKNA0tiqujYL3xA3EgN6pzWXI5oCmmwLCJ3KFvmecmSlMndFRovuGFtjJDOYi01HxR7AV128v~9SMtOngO3oDGxrt1gAKlz9HWoMUrlVfYgd3ZhcskpJpbvEgYfhy~FbVB3ScNNP~3ltpBejLESggtKsQX50lWzCDMoE59Cz42LEmUwXVlk2vCD5DsMXnnf7GPMw__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/332/image/image.jpg?Expires=1760506704&Signature=p0km1AG3159ttcuRpPip29edTAJIByOikIy4B6wSyv3mk0dWYD6UBP1EQcN-jMnVdJt4mzoCu5ONSHX73qzpwBDcxfMHZ5M4c9GcMQte4SbS7xQe9JXSKA~dLMkchRH~jW49ub1JJo5Xea5Cq0Fd527awodsO~qU1x9ZMVI8YCNVQzorTjByv4nT1i5vWh-9v8kih3OpCVIsLopj9tBexw5uGi36JZNd7TR~SUZdOaFn5wuofR58Gzzl9LW5a4SkpecKvI6VJinewzqYD7jj4M94amKrUActjJut97-iq~H~pUI9uCKjzEwQLFOL~tGoMSHtpECg7CUavTPYF1QnQQ__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_32_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 32,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/332/image/image.jpg?Expires=1760506704&Signature=p0km1AG3159ttcuRpPip29edTAJIByOikIy4B6wSyv3mk0dWYD6UBP1EQcN-jMnVdJt4mzoCu5ONSHX73qzpwBDcxfMHZ5M4c9GcMQte4SbS7xQe9JXSKA~dLMkchRH~jW49ub1JJo5Xea5Cq0Fd527awodsO~qU1x9ZMVI8YCNVQzorTjByv4nT1i5vWh-9v8kih3OpCVIsLopj9tBexw5uGi36JZNd7TR~SUZdOaFn5wuofR58Gzzl9LW5a4SkpecKvI6VJinewzqYD7jj4M94amKrUActjJut97-iq~H~pUI9uCKjzEwQLFOL~tGoMSHtpECg7CUavTPYF1QnQQ__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/333/image/image.jpg?Expires=1760506704&Signature=XwIfzRVpnZykRh1juWHu6PmwSsysDOAqd8C71dZfSo0eUEJ0YIpmDA796lL6Axlab~vEwLaQaqPXHNTeDJpj7~ZWJUM16ispFPn2abNFzlW-mjGYQt9C5cOQGUS9KglO9C3fXyRAATetfYwRH1VCy9rKT~2MdYq~iC1Upm62HRVoMRuLnAS7IQaVKNjPXH0Mf~EYs1NECaZ-txNtrH19Bc8W7hpU0-gYLU2fjipeZIc5gwNOvKraVAualuCZssf~ZCVWlR8yARzNZ0nD08HUFvICjpMJU8rBkF0trk~t5Yi11KxmeGAmG3Xi3Uwo~HWh1hNVkqJ8J1J01Y91xO8TTQ__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_33_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 33,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/333/image/image.jpg?Expires=1760506704&Signature=XwIfzRVpnZykRh1juWHu6PmwSsysDOAqd8C71dZfSo0eUEJ0YIpmDA796lL6Axlab~vEwLaQaqPXHNTeDJpj7~ZWJUM16ispFPn2abNFzlW-mjGYQt9C5cOQGUS9KglO9C3fXyRAATetfYwRH1VCy9rKT~2MdYq~iC1Upm62HRVoMRuLnAS7IQaVKNjPXH0Mf~EYs1NECaZ-txNtrH19Bc8W7hpU0-gYLU2fjipeZIc5gwNOvKraVAualuCZssf~ZCVWlR8yARzNZ0nD08HUFvICjpMJU8rBkF0trk~t5Yi11KxmeGAmG3Xi3Uwo~HWh1hNVkqJ8J1J01Y91xO8TTQ__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/334/image/image.jpg?Expires=1760506704&Signature=m-Jq3LLFOs6rMtlyZ~-O5P2dBMRRRcf~~X~Zdc~irSDG8HT5GxhL2L6EfdPQy~sjZFcnMrCFiy39iEC08SV2yjuAGSJCCXDjAQMLKurem7rBf8MY-hhi3Pt4oDQNfD3BaLduY9qLklnkWh8tx71iQM2PWLtIVoQE5vSsSpNupx9Z5ADmK8jVhkwrq2GnEDIanpId4ee2YKmStgZYEXfH~GtguGFC1BwH8k68hbcPhVUB-KPvvkT-iyNJ2f3KBSSJpHpE3re5TyrdJ9T163fkjDUgbUdxtBqggP1G-pzBVGRPVewCIVn4vpv9D7HirX2turdo~tPbehrrSivRiGBZ5A__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_34_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 34,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/334/image/image.jpg?Expires=1760506704&Signature=m-Jq3LLFOs6rMtlyZ~-O5P2dBMRRRcf~~X~Zdc~irSDG8HT5GxhL2L6EfdPQy~sjZFcnMrCFiy39iEC08SV2yjuAGSJCCXDjAQMLKurem7rBf8MY-hhi3Pt4oDQNfD3BaLduY9qLklnkWh8tx71iQM2PWLtIVoQE5vSsSpNupx9Z5ADmK8jVhkwrq2GnEDIanpId4ee2YKmStgZYEXfH~GtguGFC1BwH8k68hbcPhVUB-KPvvkT-iyNJ2f3KBSSJpHpE3re5TyrdJ9T163fkjDUgbUdxtBqggP1G-pzBVGRPVewCIVn4vpv9D7HirX2turdo~tPbehrrSivRiGBZ5A__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/335/image/image.jpg?Expires=1760506704&Signature=SArb-gg3NUvRWEwzSB1RBz4AVODQbYnQ~9zMAG1p8myS~6B6cDpohlYihzQ002XgYK61gO-dSR0ToUQXtt-qZ7djm8CjNmyM0Juw1~NNgacAQMz9aSt4N9uz2zNl~~8nv64yX~qtEPmvN6YMvuuWkSA8y79bRfB~ihm3SY2J4iINHHdG7sl5ocF~IMLSYIMgwjnBnmCfEh9qpK4t2wY~JIYWec6TMU1ihYMJoThzvdxo0nlJsMh9~CsPUADcoJJbOpxEGms~k7vbRyV~mCC-CX9aYzCAw9wZF0Xy96v07zmlQcU6XSipW3-PTvNP9FfuUI3KsNOhQNN1fBAAv~zxvw__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_35_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 35,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/335/image/image.jpg?Expires=1760506704&Signature=SArb-gg3NUvRWEwzSB1RBz4AVODQbYnQ~9zMAG1p8myS~6B6cDpohlYihzQ002XgYK61gO-dSR0ToUQXtt-qZ7djm8CjNmyM0Juw1~NNgacAQMz9aSt4N9uz2zNl~~8nv64yX~qtEPmvN6YMvuuWkSA8y79bRfB~ihm3SY2J4iINHHdG7sl5ocF~IMLSYIMgwjnBnmCfEh9qpK4t2wY~JIYWec6TMU1ihYMJoThzvdxo0nlJsMh9~CsPUADcoJJbOpxEGms~k7vbRyV~mCC-CX9aYzCAw9wZF0Xy96v07zmlQcU6XSipW3-PTvNP9FfuUI3KsNOhQNN1fBAAv~zxvw__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/336/image/image.jpg?Expires=1760506704&Signature=ksAlMs6w8jL2j4wBovlmbXupJWJCsUqRsitOabRdQ509dH69~QLu~fWHVnEU0MhTJVZPoZmMHO~YBk-U3spekOd6tn1tlc7r9dwpcuvTbh1dyLtMZavnzBB6WfBq4j-MYEe7LWnPlHsm-Sd1xu2rO1ielWtH8OqmfafvrRchCWRApplpX4dXEUyzru0B5bjANBuLcbRwk2C6vRafQgkU0cnydT~cvb0~lhz8nqaNswR0gJQdDUFS7SvfrCmvrEvWl9UnAG1tIivLqwv9wRJ0IR7UOdMC~ffPjX1wCrq2qCkuyJjDh-N-H8pEThgS55fSqUggQy3JCW8-CbqY7I2zkg__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_36_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 36,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/336/image/image.jpg?Expires=1760506704&Signature=ksAlMs6w8jL2j4wBovlmbXupJWJCsUqRsitOabRdQ509dH69~QLu~fWHVnEU0MhTJVZPoZmMHO~YBk-U3spekOd6tn1tlc7r9dwpcuvTbh1dyLtMZavnzBB6WfBq4j-MYEe7LWnPlHsm-Sd1xu2rO1ielWtH8OqmfafvrRchCWRApplpX4dXEUyzru0B5bjANBuLcbRwk2C6vRafQgkU0cnydT~cvb0~lhz8nqaNswR0gJQdDUFS7SvfrCmvrEvWl9UnAG1tIivLqwv9wRJ0IR7UOdMC~ffPjX1wCrq2qCkuyJjDh-N-H8pEThgS55fSqUggQy3JCW8-CbqY7I2zkg__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/337/image/image.jpg?Expires=1760506704&Signature=FOnUiJHU84jDWRjxsQXmFh66KsUNQuCBTTZIeOiMMUqJ4xXYf8FRU1cVLojUelyppB~qxMFmXWI06lfMM0dxKsku73WQTF5HrLnuu378qCIf-Xo4qaU95DD9-tOVgIxQ66fczaASRfD5kJFRRpbLr3qlCW6t~CQccIhf9gKA2vmC2xKF4~qkWSBB3TqrsaoEDjv4m3o1rXVDduDy1uNt2AMgpzdnydFxZls~vNk-UK6xvxZQdmgaj~o4UJsqDg9sQvWnenNh6SpCXwwCbgGsbC-jcxaftjUMVw0TFDp42SQdRPEaETrZeecG1jlUPOpOaMRkXFZUonxkOOCf-5eGrg__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_37_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 37,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/337/image/image.jpg?Expires=1760506704&Signature=FOnUiJHU84jDWRjxsQXmFh66KsUNQuCBTTZIeOiMMUqJ4xXYf8FRU1cVLojUelyppB~qxMFmXWI06lfMM0dxKsku73WQTF5HrLnuu378qCIf-Xo4qaU95DD9-tOVgIxQ66fczaASRfD5kJFRRpbLr3qlCW6t~CQccIhf9gKA2vmC2xKF4~qkWSBB3TqrsaoEDjv4m3o1rXVDduDy1uNt2AMgpzdnydFxZls~vNk-UK6xvxZQdmgaj~o4UJsqDg9sQvWnenNh6SpCXwwCbgGsbC-jcxaftjUMVw0TFDp42SQdRPEaETrZeecG1jlUPOpOaMRkXFZUonxkOOCf-5eGrg__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/338/image/image.jpg?Expires=1760506704&Signature=Y6a2sAEI3gLzYsIjZutprypbfGI7iPX1LC~ZOugqe23wptj84aw7uUObuEPHkrzpZXuK6uY3bINlyySie7tEffozFuJIGAa87WSSMLO0ohuZe-70IdWqfzVhpF-GCB8tGq90BQOv~DbLZkVbqrApXDGgBSTpsLhN3RwEpDHAgWpj0Kcu8fOcGgz0hw5XXdz1P37K5sH2ww~IXwQWlZowF3SvD19PoYTy2UZQyXfL0dPVvU3hN5~-G0CJkMCYTlj~Fkl6~MQQ-ecIaeSS7mVP4~y0SZWu3EpAGqUgvNVKDp8AqHbjz9SAlwuCgTSZKcEanDcxkwATSweZcjzoVDOVkA__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_38_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 38,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/338/image/image.jpg?Expires=1760506704&Signature=Y6a2sAEI3gLzYsIjZutprypbfGI7iPX1LC~ZOugqe23wptj84aw7uUObuEPHkrzpZXuK6uY3bINlyySie7tEffozFuJIGAa87WSSMLO0ohuZe-70IdWqfzVhpF-GCB8tGq90BQOv~DbLZkVbqrApXDGgBSTpsLhN3RwEpDHAgWpj0Kcu8fOcGgz0hw5XXdz1P37K5sH2ww~IXwQWlZowF3SvD19PoYTy2UZQyXfL0dPVvU3hN5~-G0CJkMCYTlj~Fkl6~MQQ-ecIaeSS7mVP4~y0SZWu3EpAGqUgvNVKDp8AqHbjz9SAlwuCgTSZKcEanDcxkwATSweZcjzoVDOVkA__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/339/image/image.jpg?Expires=1760506704&Signature=EwqSzYLDqXew2818p9KHX-21WZia7Zoka5q5rXz1dywTVjlGta7Udcd~Hq9-EiXJKCX03U62zwhJEtexB1DRICL7cg2a8eYgbpq6QjOZNUcSqY2Wf2MzGfAkCt-PhzzePnoqczhN5S8cKGxNi2vUcXbvX3YulahSymkgu5bxrXpjuA6emv5k5o8TvYm1p--Zk1r~f1FJy05BjwxeG-F3OpkiWBiM9RUeb7893LcNWy9js6Xzk-0lNQJDr5nqYoN0uU21GC2ItidAg0iXRW5uD1oaIw4omq0wzcN4FsfvZ24O~gbXNsOzxObk5Sn4HT-CS5ubhgKF8N1GzWC0SByouw__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_39_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 39,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/339/image/image.jpg?Expires=1760506704&Signature=EwqSzYLDqXew2818p9KHX-21WZia7Zoka5q5rXz1dywTVjlGta7Udcd~Hq9-EiXJKCX03U62zwhJEtexB1DRICL7cg2a8eYgbpq6QjOZNUcSqY2Wf2MzGfAkCt-PhzzePnoqczhN5S8cKGxNi2vUcXbvX3YulahSymkgu5bxrXpjuA6emv5k5o8TvYm1p--Zk1r~f1FJy05BjwxeG-F3OpkiWBiM9RUeb7893LcNWy9js6Xzk-0lNQJDr5nqYoN0uU21GC2ItidAg0iXRW5uD1oaIw4omq0wzcN4FsfvZ24O~gbXNsOzxObk5Sn4HT-CS5ubhgKF8N1GzWC0SByouw__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/340/image/image.jpg?Expires=1760506704&Signature=W1eeHfNEPoh3bqORpdgl9uoJYiPuepzknLC~eVIeIw6M4-btHL3FJDAgVpV3FW9L8TslfJ48xB9I93GZHQnT0k3EwT2JBZiehcFsojgIHbf3uCm8az9C7hM7CTOStCNQqz5yU4YsjG18gmVKk6dGMIWajZIJ5rkMCZyiDlHsYxHvDRysz0U0TXtekRYIVWOosKnkFCekHWk6gJhjV8pIXxpIYqjeUrR-D6mIZY9dkjNorVUdtMNs3INfxVYFEQTVrgo8fmcTMymwU89FwaivJrPPHYdE9~C6aGbNMvmPL4M90AyXNPzNz2J6hFQTePoSdqKkIDHOwTjsARDr8yxnhg__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_40_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 40,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/340/image/image.jpg?Expires=1760506704&Signature=W1eeHfNEPoh3bqORpdgl9uoJYiPuepzknLC~eVIeIw6M4-btHL3FJDAgVpV3FW9L8TslfJ48xB9I93GZHQnT0k3EwT2JBZiehcFsojgIHbf3uCm8az9C7hM7CTOStCNQqz5yU4YsjG18gmVKk6dGMIWajZIJ5rkMCZyiDlHsYxHvDRysz0U0TXtekRYIVWOosKnkFCekHWk6gJhjV8pIXxpIYqjeUrR-D6mIZY9dkjNorVUdtMNs3INfxVYFEQTVrgo8fmcTMymwU89FwaivJrPPHYdE9~C6aGbNMvmPL4M90AyXNPzNz2J6hFQTePoSdqKkIDHOwTjsARDr8yxnhg__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/341/image/image.jpg?Expires=1760506704&Signature=NumM-ALLtP85h~N~X1TI4Gt7MTTKMwKxzTLQczbsf4JM4DVNjmsx6AuDB8SMWgwya7zvU~bijQgegR3IxWCRyIjuemEa8~7KZLqy-l4qk3Uu45Cg1yICHkb8PvH8dpA8GDEf~ujO0ZD3QRHjgAuJxkKHIPRNya~p5XrVfc66UO5zbmgiII~w0cnkojqoWGqZf7eRzF~b7ExwfcNGJ625A0fSQV0bnF~4rgNJsIkE5Tuo7RQOwpErBabpZ0b4Fo3k-iHz8066N5WdhQ9rEO8BoqieZlakkNYvWWLH7VJiamdPLqcVKJgfGSZZg3CpLMyeWeTBxIqwDQtn-mL7vrXCDQ__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_41_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 41,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/341/image/image.jpg?Expires=1760506704&Signature=NumM-ALLtP85h~N~X1TI4Gt7MTTKMwKxzTLQczbsf4JM4DVNjmsx6AuDB8SMWgwya7zvU~bijQgegR3IxWCRyIjuemEa8~7KZLqy-l4qk3Uu45Cg1yICHkb8PvH8dpA8GDEf~ujO0ZD3QRHjgAuJxkKHIPRNya~p5XrVfc66UO5zbmgiII~w0cnkojqoWGqZf7eRzF~b7ExwfcNGJ625A0fSQV0bnF~4rgNJsIkE5Tuo7RQOwpErBabpZ0b4Fo3k-iHz8066N5WdhQ9rEO8BoqieZlakkNYvWWLH7VJiamdPLqcVKJgfGSZZg3CpLMyeWeTBxIqwDQtn-mL7vrXCDQ__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/342/image/image.jpg?Expires=1760506704&Signature=v-yAElFWjg-7fxjM8SQ9-5CVu8xXXgoXrOGHhacygbhxgEjsjFJy~AbOfYfitKju38YHw2rQvLlb5sTjw5tb7Q7BTW4tz1NJMvJbCtLqOsk2XSUMcvAFDfVtTc0F8S96iib0kGTEasfsbc3cLVnAAg0ZWfzZXsVX7nnfRBL9DCFeqAcLXhom0OxszpUO~tfmHXrokXVcPcM8SyiJizpny1cp11pmha5ZEOiDxd0xEwlmczKhzcPOh99WutbDO0vB3OOvG1E6OZzoQP9qHOnLPd1-wxTf3~s2ujdl0IS~N97jdSuW8P-VBFfN9EwPcHq7VomH-oXqvdUW0Jjk1wcl9g__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_42_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 42,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/342/image/image.jpg?Expires=1760506704&Signature=v-yAElFWjg-7fxjM8SQ9-5CVu8xXXgoXrOGHhacygbhxgEjsjFJy~AbOfYfitKju38YHw2rQvLlb5sTjw5tb7Q7BTW4tz1NJMvJbCtLqOsk2XSUMcvAFDfVtTc0F8S96iib0kGTEasfsbc3cLVnAAg0ZWfzZXsVX7nnfRBL9DCFeqAcLXhom0OxszpUO~tfmHXrokXVcPcM8SyiJizpny1cp11pmha5ZEOiDxd0xEwlmczKhzcPOh99WutbDO0vB3OOvG1E6OZzoQP9qHOnLPd1-wxTf3~s2ujdl0IS~N97jdSuW8P-VBFfN9EwPcHq7VomH-oXqvdUW0Jjk1wcl9g__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/343/image/image.jpg?Expires=1760506704&Signature=UND8FbTBxxWEG-rHS3J0~mlMPxPNdC0cSHWPvFeJ-zzK5rQXxtWFG3rB6afjyv4FtEmZnBu3xho9F0sSJCMwY4nHi3c72p9OyfjGqSy7~lsdRjODhT4fmjW9Cwpp~SBfBQdV2CZOLYl9aykN09y~SiA9b7KjqQWaXBE5wgMesmTu61owdH6GYIuc2eQlTgn1WjT4PT2e1EWqpNK9zQrNrjcjQqryzR2HU6HgehfEPXCF2iK8I8WjtHTHFE9KNW4kgCIZymeuN0L-GCfvZ2cleekhTN3KXwUKWp12Q38ZI2GCFWA1f5OFnFm6OSMSEe3XT6brR6oVoaTGtiHAzwicNw__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_43_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 43,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/343/image/image.jpg?Expires=1760506704&Signature=UND8FbTBxxWEG-rHS3J0~mlMPxPNdC0cSHWPvFeJ-zzK5rQXxtWFG3rB6afjyv4FtEmZnBu3xho9F0sSJCMwY4nHi3c72p9OyfjGqSy7~lsdRjODhT4fmjW9Cwpp~SBfBQdV2CZOLYl9aykN09y~SiA9b7KjqQWaXBE5wgMesmTu61owdH6GYIuc2eQlTgn1WjT4PT2e1EWqpNK9zQrNrjcjQqryzR2HU6HgehfEPXCF2iK8I8WjtHTHFE9KNW4kgCIZymeuN0L-GCfvZ2cleekhTN3KXwUKWp12Q38ZI2GCFWA1f5OFnFm6OSMSEe3XT6brR6oVoaTGtiHAzwicNw__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/344/image/image.jpg?Expires=1760506704&Signature=kI-YuWIZMy9B8aGAJ5sGAKthbQFvazR1CXc4dAvuSv6KkK-NkhoVuVjao3XgUNwOF59DUCmpJT2mODA~oJhEx0acVnmBwFa1NE4~Xr-csBJ6-tG~09cjvrVNNXYH4P0V-jVFPbdySOZNd5stOqA9qBvWy-97j4nV4UTUetQ5CtDa5JjAp1h1K-lh~9otJYXQXK16aH-zFiZo39NA4XNzJWow~CuyFY2O-H4RtJeUfnKFu-hoCuZ0ylhl3l7r5kLpyw~wUhk8LJIiBVO6ZMU2YBxtp5XVr2RJRzRlP~PEUgP5t7bC2sLVgdE77C7UBzCTzCxzCtONl1Zu2FApY9Stfw__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_44_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 44,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/344/image/image.jpg?Expires=1760506704&Signature=kI-YuWIZMy9B8aGAJ5sGAKthbQFvazR1CXc4dAvuSv6KkK-NkhoVuVjao3XgUNwOF59DUCmpJT2mODA~oJhEx0acVnmBwFa1NE4~Xr-csBJ6-tG~09cjvrVNNXYH4P0V-jVFPbdySOZNd5stOqA9qBvWy-97j4nV4UTUetQ5CtDa5JjAp1h1K-lh~9otJYXQXK16aH-zFiZo39NA4XNzJWow~CuyFY2O-H4RtJeUfnKFu-hoCuZ0ylhl3l7r5kLpyw~wUhk8LJIiBVO6ZMU2YBxtp5XVr2RJRzRlP~PEUgP5t7bC2sLVgdE77C7UBzCTzCxzCtONl1Zu2FApY9Stfw__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/345/image/image.jpg?Expires=1760506704&Signature=VkUYSZuXwo3llIySXEcTBmt30PC6z6o2RTsX2ZGH9ft62HFLVVPqgkXldl8Qd4JVpDRbwI6n13W7NTdh5~TSd~3YG58ck20nb09NZv8hNUsSNrjW12duamQ8t-xLz7fozPen7qjg6OxIi3R7EgvgPmmPjUiwd6VxlWhJtIPiAFZYyXTt~Z~qIUtuEoASP4uROeqJ3IMyVAy7TLm~Z7DkZM~~DpVa7yfX6tjGdm4dcRkVPYuE5b~ezE9AUNzp1PxKT6OWxDerqmlAwipebi3KPLydcOkT8zgLGLmENDryNNRpJTQyFx9~d4SJc5vGVLM~yG7Zu2yzRVdG7GoZQg49SQ__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_45_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 45,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/345/image/image.jpg?Expires=1760506704&Signature=VkUYSZuXwo3llIySXEcTBmt30PC6z6o2RTsX2ZGH9ft62HFLVVPqgkXldl8Qd4JVpDRbwI6n13W7NTdh5~TSd~3YG58ck20nb09NZv8hNUsSNrjW12duamQ8t-xLz7fozPen7qjg6OxIi3R7EgvgPmmPjUiwd6VxlWhJtIPiAFZYyXTt~Z~qIUtuEoASP4uROeqJ3IMyVAy7TLm~Z7DkZM~~DpVa7yfX6tjGdm4dcRkVPYuE5b~ezE9AUNzp1PxKT6OWxDerqmlAwipebi3KPLydcOkT8zgLGLmENDryNNRpJTQyFx9~d4SJc5vGVLM~yG7Zu2yzRVdG7GoZQg49SQ__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/346/image/image.jpg?Expires=1760506704&Signature=AC6bU3pTGxouokYqb-C-RlFXB7GIkre-mKYlyoTDWIwrqwZGBGTr~yD1I-O2C30gnxsB7WIoYIVQdmFSoJ2OUzcCVJHkbyUCG~YTWPhbnhouxW1OowncVCRyZ~pI1Z5a2GRMFMSsvFlXxQfGOAS~BrvPFEJ5OFbVFhbqv6TEBTwBmeh2YuGacpDlHw7L0M6BOPXUPHe2Vz~z1~ChxeYX8MV9cQyanbz5KGWon9x~XOIukrQXcSOni782qun0LMFL3FX4TJX7kqnGGY9HtQYqnmBPB4zg~YWxINmyQfm1rYBp1jdlMFh1Yn4G1~j--B9NDT6ULb60txHSCURtA56duw__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_46_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 46,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/346/image/image.jpg?Expires=1760506704&Signature=AC6bU3pTGxouokYqb-C-RlFXB7GIkre-mKYlyoTDWIwrqwZGBGTr~yD1I-O2C30gnxsB7WIoYIVQdmFSoJ2OUzcCVJHkbyUCG~YTWPhbnhouxW1OowncVCRyZ~pI1Z5a2GRMFMSsvFlXxQfGOAS~BrvPFEJ5OFbVFhbqv6TEBTwBmeh2YuGacpDlHw7L0M6BOPXUPHe2Vz~z1~ChxeYX8MV9cQyanbz5KGWon9x~XOIukrQXcSOni782qun0LMFL3FX4TJX7kqnGGY9HtQYqnmBPB4zg~YWxINmyQfm1rYBp1jdlMFh1Yn4G1~j--B9NDT6ULb60txHSCURtA56duw__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/347/image/image.jpg?Expires=1760506704&Signature=o1S31o8PLYCcZVRqrLS1vecoXp9TJKio6CBNJqsoNSTS0kGb0lku0ohDgGsyuBBBHB5MPPmCoPbRiDfO9hoNAjntZYmvsKNU~eJwSte5Ca5QET0HDcW-hesEpo1fJZZwgPi-XLev7mp3pSBYmIYK8K~KvNMlgEkZl9P~ekJchim1qrXZYBMFx26uG9BQ5ePYZN-ywh8TAiUEuPgcXIizVNochtAk710uUN7J7xscldtcWxtUi-AZj7a4Jo4zoRcTKbNLzf8YiS4syeXvTAn-fmqxMTeviYeUnhHNL9-mTw0Yx~LUIx4LSit5k0Cc3nNlrm6g3buWaPPzEP9s1blFuw__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_47_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 47,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/347/image/image.jpg?Expires=1760506704&Signature=o1S31o8PLYCcZVRqrLS1vecoXp9TJKio6CBNJqsoNSTS0kGb0lku0ohDgGsyuBBBHB5MPPmCoPbRiDfO9hoNAjntZYmvsKNU~eJwSte5Ca5QET0HDcW-hesEpo1fJZZwgPi-XLev7mp3pSBYmIYK8K~KvNMlgEkZl9P~ekJchim1qrXZYBMFx26uG9BQ5ePYZN-ywh8TAiUEuPgcXIizVNochtAk710uUN7J7xscldtcWxtUi-AZj7a4Jo4zoRcTKbNLzf8YiS4syeXvTAn-fmqxMTeviYeUnhHNL9-mTw0Yx~LUIx4LSit5k0Cc3nNlrm6g3buWaPPzEP9s1blFuw__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/348/image/image.jpg?Expires=1760506704&Signature=RNPNuM4WT~jExrq7~A5L9tmevKH1nq7Yikil9Au0pfTsO6Ie6OeXTcz-8Wqu5WPDcEunz3U~Q7Z5dScY~B~E9MHhM9Z97nZufvAWw~spV0J7GoNvAMNenYcdUq9p77xKdwNgsDCm-pD2Z-hs7uYLxUfq4f4PfTygyI6NxPNUw-zGLFHiWEzV2MMBDwGPugbedhFK0lDQBPlrYgDeJPMjoMrc5kGUk-zz6t7nqiHpaF4uxg1-9jrBCZFNeH3NDEfLjmLw2TPh2ZEJ7xBDUSOh9azqRks5ce2gV-bLLQtWSOqxDK6s-5TJAIM5JFhNByc2e0w7CIrSZlQOs~Quo6r4bQ__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_48_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 48,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/348/image/image.jpg?Expires=1760506704&Signature=RNPNuM4WT~jExrq7~A5L9tmevKH1nq7Yikil9Au0pfTsO6Ie6OeXTcz-8Wqu5WPDcEunz3U~Q7Z5dScY~B~E9MHhM9Z97nZufvAWw~spV0J7GoNvAMNenYcdUq9p77xKdwNgsDCm-pD2Z-hs7uYLxUfq4f4PfTygyI6NxPNUw-zGLFHiWEzV2MMBDwGPugbedhFK0lDQBPlrYgDeJPMjoMrc5kGUk-zz6t7nqiHpaF4uxg1-9jrBCZFNeH3NDEfLjmLw2TPh2ZEJ7xBDUSOh9azqRks5ce2gV-bLLQtWSOqxDK6s-5TJAIM5JFhNByc2e0w7CIrSZlQOs~Quo6r4bQ__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/349/image/image.jpg?Expires=1760506704&Signature=IfABitlzqvriFCzR0mnnQSvMs5TcubCPTyaKtkTHKx6MvrgGV-YGjsUmcZnHo-I~9v7pOguEqXy7YDVP3FA9rBI2GPNcr-01Uyftgv8Rxj6ym6ZQPtCuHiWSQrFf7duaAdNHSIsW7EHjScdoWFHkYIGdfVB8r6y1V44-MwIpTKNbRv8vGTD-rqmgS0l0yPiv0y7j2kzAeqtlFH-OScYvsDma0zSB7W1zpNk~ztSG~rw1g4CiBvZewfdA1aOuL-J3ZnT0bxcHcrpVRpSKSAnbuppKPhhhX4Mbk9mFTPIB4WREqY9S7fnjdSTE12NwQRxYiy2peHvLFRgxnGxOdzj70Q__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_49_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 49,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/349/image/image.jpg?Expires=1760506704&Signature=IfABitlzqvriFCzR0mnnQSvMs5TcubCPTyaKtkTHKx6MvrgGV-YGjsUmcZnHo-I~9v7pOguEqXy7YDVP3FA9rBI2GPNcr-01Uyftgv8Rxj6ym6ZQPtCuHiWSQrFf7duaAdNHSIsW7EHjScdoWFHkYIGdfVB8r6y1V44-MwIpTKNbRv8vGTD-rqmgS0l0yPiv0y7j2kzAeqtlFH-OScYvsDma0zSB7W1zpNk~ztSG~rw1g4CiBvZewfdA1aOuL-J3ZnT0bxcHcrpVRpSKSAnbuppKPhhhX4Mbk9mFTPIB4WREqY9S7fnjdSTE12NwQRxYiy2peHvLFRgxnGxOdzj70Q__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/350/image/image.jpg?Expires=1760506704&Signature=qROizoXWjI1FnHJGiYmUGbcIYqaBD7W9iiJBHYaL8xMjnnnm~Bil0PO9rJPtaJrznRlO-IbUzhp3wMebR0J9LZsq3j3Uq1iU5-450AFu0lUFbOdVin69ozpHjw5HAu~TmfsGRyx2QrvQ2Oa~VVrG6Ia7hFswwaZTsZk8qJxQE~HX~OG6~UfKNTV0VJAyUZagPXYJ4a4TdLkSWDSx8b2Uhm7aCSnJJEpwkVk-iXL0av3F0z7GylDA69ozq3V0t9qLl0JkBHT7KU57Cuvg~gG6Y1O~oxPkNQlw2NYt7K9mlSngnO4EugE2uOxLb-aYXPsWCjfNEgMAohhO92I~7H4YDg__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_50_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 50,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/350/image/image.jpg?Expires=1760506704&Signature=qROizoXWjI1FnHJGiYmUGbcIYqaBD7W9iiJBHYaL8xMjnnnm~Bil0PO9rJPtaJrznRlO-IbUzhp3wMebR0J9LZsq3j3Uq1iU5-450AFu0lUFbOdVin69ozpHjw5HAu~TmfsGRyx2QrvQ2Oa~VVrG6Ia7hFswwaZTsZk8qJxQE~HX~OG6~UfKNTV0VJAyUZagPXYJ4a4TdLkSWDSx8b2Uhm7aCSnJJEpwkVk-iXL0av3F0z7GylDA69ozq3V0t9qLl0JkBHT7KU57Cuvg~gG6Y1O~oxPkNQlw2NYt7K9mlSngnO4EugE2uOxLb-aYXPsWCjfNEgMAohhO92I~7H4YDg__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/351/image/image.jpg?Expires=1760506704&Signature=SAJzr61JVMaIYmdkhm8ccnUnuQ8C1jMsKy0YC1xYVE3LTeR5~e-9Z-bo4ElTYEFEsPwwao5xN7XJM5108DBanlyxkDSjKuU9QM~ej0Uv1dkuvZ7h~taLhTF7cXdySt7xMdvwbonyRvEAGCdl0U91pFeGOe~9Qj4qfHZl7zLWzKNHM~2ZetAtNWVBX5PAkElv-Er0kiLoMjNJAXBnA0i-mdU18c2cIocnbg9IM3WeFcpwNaVdR8iPcaPbe0Q8gPJIkvIWIPl~N1lDghiXuy7tDMScn3eE743RHma9EHyr9Lsh493rlnlASEMKKdoUN8l4wq7YW2WyVEW0Ulpkufbejg__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_51_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 51,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/351/image/image.jpg?Expires=1760506704&Signature=SAJzr61JVMaIYmdkhm8ccnUnuQ8C1jMsKy0YC1xYVE3LTeR5~e-9Z-bo4ElTYEFEsPwwao5xN7XJM5108DBanlyxkDSjKuU9QM~ej0Uv1dkuvZ7h~taLhTF7cXdySt7xMdvwbonyRvEAGCdl0U91pFeGOe~9Qj4qfHZl7zLWzKNHM~2ZetAtNWVBX5PAkElv-Er0kiLoMjNJAXBnA0i-mdU18c2cIocnbg9IM3WeFcpwNaVdR8iPcaPbe0Q8gPJIkvIWIPl~N1lDghiXuy7tDMScn3eE743RHma9EHyr9Lsh493rlnlASEMKKdoUN8l4wq7YW2WyVEW0Ulpkufbejg__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/352/image/image.jpg?Expires=1760506704&Signature=a~ilITk-zMgotEwzRsd~5p61tiNuHdw0gN1pIEbqqhWjQyLR3YM9aTQLMBURcI1wQFD6SNRkhsCS8hYjdW4ECpZDF9M1ItYy~R4LJlvXOJTUelpzRA7r~wcwt-L1P5n-yn7lSGXugBzmtqIDjvk82iYTIZ2BNZh9ktaQfcTfzG3iKMfneT8bwOlIzXR8a7spMVnbZqls4xt3T0jEMeuoZbWb0Zs5T9PFF5KKPlyPRno17VkvyWlM3Nf5bIyGibhZcmsjHm4-WGHd8cvHcj~rjJa8M7l2LFyIZJPcwRLrrysAJ5eJT1sWrWZMHxJZZBeK7Pmkm2DHuFCEiuaUBZxC1A__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_52_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 52,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/352/image/image.jpg?Expires=1760506704&Signature=a~ilITk-zMgotEwzRsd~5p61tiNuHdw0gN1pIEbqqhWjQyLR3YM9aTQLMBURcI1wQFD6SNRkhsCS8hYjdW4ECpZDF9M1ItYy~R4LJlvXOJTUelpzRA7r~wcwt-L1P5n-yn7lSGXugBzmtqIDjvk82iYTIZ2BNZh9ktaQfcTfzG3iKMfneT8bwOlIzXR8a7spMVnbZqls4xt3T0jEMeuoZbWb0Zs5T9PFF5KKPlyPRno17VkvyWlM3Nf5bIyGibhZcmsjHm4-WGHd8cvHcj~rjJa8M7l2LFyIZJPcwRLrrysAJ5eJT1sWrWZMHxJZZBeK7Pmkm2DHuFCEiuaUBZxC1A__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/353/image/image.jpg?Expires=1760506704&Signature=OEub~Va5l8k7cYCpsTn2MgBrbb4KxphBlR3~2eEq6o6jMocWSqm0gcMNQOPTAQrkmXTrpkQ6bvNKNaDtTiZImcZCeOnzlUqMZgJneQBd--wue5cKuZpPeZllofKTsIF7~8yjGjrEIVEoSpdxyvCv4~CdwLtRnSBM7smnkoWg0z4XqLP4nhjjmkrq-fpv3VG57pf30ddxPdJxolTemBEBiKUyOrtCDHn4d3cm9gfhcTulzhSAyp06CrUgcMc3cx-VuUFm0dcWybwHrm1LzFl09csa3QkjfWboa1iO5oUK8HNBxUmfty2MnEdsvMK01wRUpNRgdIeYDWfOTG3fd0dpIQ__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_53_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 53,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/353/image/image.jpg?Expires=1760506704&Signature=OEub~Va5l8k7cYCpsTn2MgBrbb4KxphBlR3~2eEq6o6jMocWSqm0gcMNQOPTAQrkmXTrpkQ6bvNKNaDtTiZImcZCeOnzlUqMZgJneQBd--wue5cKuZpPeZllofKTsIF7~8yjGjrEIVEoSpdxyvCv4~CdwLtRnSBM7smnkoWg0z4XqLP4nhjjmkrq-fpv3VG57pf30ddxPdJxolTemBEBiKUyOrtCDHn4d3cm9gfhcTulzhSAyp06CrUgcMc3cx-VuUFm0dcWybwHrm1LzFl09csa3QkjfWboa1iO5oUK8HNBxUmfty2MnEdsvMK01wRUpNRgdIeYDWfOTG3fd0dpIQ__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/354/image/image.jpg?Expires=1760506704&Signature=W8RSSWRld8mfTe6BTP0ytwRzpIqLntsq3soRnEu2J9DGEEfC8UkSVKSKjrQf8BS4zyVzNIjZTCxE1L01exj5HzsEwBVMrQy5hv4PwCYccR4zik8pq14tDyFCZlC8M4wHIJ845kXdwXhGzDXHDXjmVBaIzcGQ1N50mD4kXVxEgA1zJSUCmOqX632eooe8yklcSKSW-OtsDcJPz1m6mq4SXQ~koYzjUtPVp2ljdZdZD-VTiSWPT7w~gs84WE0ii1Qqb2VqPQ1KipoctOCRlVsvBJKQHvDix4BA87ZhKEN2TjSlp88HB~RuUaRfw4ad0DKjzumTPwq2O3ad43fb8rnHPg__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_54_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 54,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/354/image/image.jpg?Expires=1760506704&Signature=W8RSSWRld8mfTe6BTP0ytwRzpIqLntsq3soRnEu2J9DGEEfC8UkSVKSKjrQf8BS4zyVzNIjZTCxE1L01exj5HzsEwBVMrQy5hv4PwCYccR4zik8pq14tDyFCZlC8M4wHIJ845kXdwXhGzDXHDXjmVBaIzcGQ1N50mD4kXVxEgA1zJSUCmOqX632eooe8yklcSKSW-OtsDcJPz1m6mq4SXQ~koYzjUtPVp2ljdZdZD-VTiSWPT7w~gs84WE0ii1Qqb2VqPQ1KipoctOCRlVsvBJKQHvDix4BA87ZhKEN2TjSlp88HB~RuUaRfw4ad0DKjzumTPwq2O3ad43fb8rnHPg__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/355/image/image.jpg?Expires=1760506704&Signature=CKnDtbFm~QVH~Px66QuYdACjti3yGLf0Bf54BfuzYQl0iY2M96WP8UkDlAIC1YUgb5NKcJZVVrZYu9RSxcyS2dTcJIuVZbLinza0gI7YRGnoclqmAlwbnGIi-Gv6mcDbKVgEFEpHMcERax6Cc~BJOdOvk-AurLrZcp8Yb1tUkl8-BJGdygwWZPJFxZW848tUKYFQzJgbCRWe4pHpl44iBdMLmTNeZb3KmGGTbHklzXgG5mI6KxpB3Oo-eVdaI~m1j42YhMQZtfY5wzyAOl1OqnWH7HF-EyermhVQzwQqn~1CS2ATQLk9nuvKoPYd6G84Z8YAPSPA3XZjT-P4cnU9bw__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_55_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 55,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/355/image/image.jpg?Expires=1760506704&Signature=CKnDtbFm~QVH~Px66QuYdACjti3yGLf0Bf54BfuzYQl0iY2M96WP8UkDlAIC1YUgb5NKcJZVVrZYu9RSxcyS2dTcJIuVZbLinza0gI7YRGnoclqmAlwbnGIi-Gv6mcDbKVgEFEpHMcERax6Cc~BJOdOvk-AurLrZcp8Yb1tUkl8-BJGdygwWZPJFxZW848tUKYFQzJgbCRWe4pHpl44iBdMLmTNeZb3KmGGTbHklzXgG5mI6KxpB3Oo-eVdaI~m1j42YhMQZtfY5wzyAOl1OqnWH7HF-EyermhVQzwQqn~1CS2ATQLk9nuvKoPYd6G84Z8YAPSPA3XZjT-P4cnU9bw__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/356/image/image.jpg?Expires=1760506704&Signature=pV4bbsM4T1jtBXPAlLtM0h5rBduaCjokB47Rps7Pc4kDtDVpqo2OteqPzQYvtNTYr5aTbcUzI2DwKhnT1WqUcAs8U~nuLRAjVaUlKD5xFPmHvZKFiNKxdCpSlYenJJ-6Ag~GQn3GeBGmCpj19vhOjxf2hBUrztQDllBWjH9FI~xsLU~d3epWXR0cmSvT-ui2n~LjTAHnBkuDMl~-cYDA0yVIBsnGeXRsfgbd3RGfHLSh3Yadgv1NihBpR-SNk0ld0HIvpl03QL4KGhFK5p~H2K4Z~OejOI1CxifBQE1~Vt0iHDRHQ2bzslkgYuZw1TKgBOTZ858LEdNzOtSasXj3jQ__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_56_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 56,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/356/image/image.jpg?Expires=1760506704&Signature=pV4bbsM4T1jtBXPAlLtM0h5rBduaCjokB47Rps7Pc4kDtDVpqo2OteqPzQYvtNTYr5aTbcUzI2DwKhnT1WqUcAs8U~nuLRAjVaUlKD5xFPmHvZKFiNKxdCpSlYenJJ-6Ag~GQn3GeBGmCpj19vhOjxf2hBUrztQDllBWjH9FI~xsLU~d3epWXR0cmSvT-ui2n~LjTAHnBkuDMl~-cYDA0yVIBsnGeXRsfgbd3RGfHLSh3Yadgv1NihBpR-SNk0ld0HIvpl03QL4KGhFK5p~H2K4Z~OejOI1CxifBQE1~Vt0iHDRHQ2bzslkgYuZw1TKgBOTZ858LEdNzOtSasXj3jQ__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/357/image/image.jpg?Expires=1760506704&Signature=o3cnhBvY2txHgfZRcIG9xsEFVhEWD6TdexoJIkAks4JD0MJ2zeKmQlKiVEe9MYkzfVZ-bEpFPzdbupO5~49Rfi9Vx8c7GpI7crdDq6GuasA3uhBHx56GMAK2ErthKWkIp3MPNvSsRVNAt5OZscxJ9dGHutTjEKK5eFL8AuijC4hTsDC9wrCT8SgtBayzdpLWiMiNYYzS3RQZLL77-nO9gOI~TOHo3qWSIEqh8C43ZKbEVKFNW-uo2Gw6SBqFTq0mBY0XkEhnQdOq2NWQlZ2pKmRYz8fdhpBUVhkTe7WYMFHw-YDiHjVHYX4Gz7XgvDEr9~JoPOhVjOG7UnsRtilxqQ__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_57_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 57,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/357/image/image.jpg?Expires=1760506704&Signature=o3cnhBvY2txHgfZRcIG9xsEFVhEWD6TdexoJIkAks4JD0MJ2zeKmQlKiVEe9MYkzfVZ-bEpFPzdbupO5~49Rfi9Vx8c7GpI7crdDq6GuasA3uhBHx56GMAK2ErthKWkIp3MPNvSsRVNAt5OZscxJ9dGHutTjEKK5eFL8AuijC4hTsDC9wrCT8SgtBayzdpLWiMiNYYzS3RQZLL77-nO9gOI~TOHo3qWSIEqh8C43ZKbEVKFNW-uo2Gw6SBqFTq0mBY0XkEhnQdOq2NWQlZ2pKmRYz8fdhpBUVhkTe7WYMFHw-YDiHjVHYX4Gz7XgvDEr9~JoPOhVjOG7UnsRtilxqQ__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/358/image/image.jpg?Expires=1760506704&Signature=V8qkNuYOQdn3CTytP~bZBdCwhOD~xAgQqmEZvDuKWBJj-fxujWMp9TRd06n50dr3sg97VVKNX68xKcqIQs9HELGHEkZ9abS~P0PBLkzP6dDdbxDmGq2LKYb7MwW2ZcBdwIpiNkOf79KuTUwmqpPLqFzHnOl7YlXCWfedm7drorVmqHbipm98ixnM9P5E-6MNHaKnyhGl6KjmYw6WEAPtYnUiFT3LVR4mm3kNTYmaIjCNmhw5roztFLmhbBJTu1uDKxgG0QUWKr-y1xL5nycVI-LKFtPpzIJxdY3j~Yu3mMjxXnolozRzZOvHf3XbM8IpRso2gNyuZRxGR-HOoY9cnw__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_58_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 58,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/358/image/image.jpg?Expires=1760506704&Signature=V8qkNuYOQdn3CTytP~bZBdCwhOD~xAgQqmEZvDuKWBJj-fxujWMp9TRd06n50dr3sg97VVKNX68xKcqIQs9HELGHEkZ9abS~P0PBLkzP6dDdbxDmGq2LKYb7MwW2ZcBdwIpiNkOf79KuTUwmqpPLqFzHnOl7YlXCWfedm7drorVmqHbipm98ixnM9P5E-6MNHaKnyhGl6KjmYw6WEAPtYnUiFT3LVR4mm3kNTYmaIjCNmhw5roztFLmhbBJTu1uDKxgG0QUWKr-y1xL5nycVI-LKFtPpzIJxdY3j~Yu3mMjxXnolozRzZOvHf3XbM8IpRso2gNyuZRxGR-HOoY9cnw__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/359/image/image.jpg?Expires=1760506704&Signature=PdrfGo8V6QAtlyjgSxDgAOXK-jgBogJPow88VmHPHrV8qk2y6rWRD7uUJcCZ44iohKdIy7YIE-aUBKtvPa-L9wyfhFHpsr02vgJJIrV4RjVisPA1MWKTTB~y~ORmVC28tFmM8~e5djgOnmKkCijPnOc9kKXuaUK5r2lCfhwNXkneusEiHfks1GANyi2B1TBR0mG3x7k6HFT1-dGQKaxpFklrLINY-47dCfMElIvGVzSqyYgiNhEJDtyt25c7E12znIFB1IEUwK-ndkpn7MnilMKdIvRjbQMiBMLsueNbDl5qy-2GljZijXnrxrnDkK2j8RW0dQE44hLWP6LPEHpzDA__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_59_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 59,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/359/image/image.jpg?Expires=1760506704&Signature=PdrfGo8V6QAtlyjgSxDgAOXK-jgBogJPow88VmHPHrV8qk2y6rWRD7uUJcCZ44iohKdIy7YIE-aUBKtvPa-L9wyfhFHpsr02vgJJIrV4RjVisPA1MWKTTB~y~ORmVC28tFmM8~e5djgOnmKkCijPnOc9kKXuaUK5r2lCfhwNXkneusEiHfks1GANyi2B1TBR0mG3x7k6HFT1-dGQKaxpFklrLINY-47dCfMElIvGVzSqyYgiNhEJDtyt25c7E12znIFB1IEUwK-ndkpn7MnilMKdIvRjbQMiBMLsueNbDl5qy-2GljZijXnrxrnDkK2j8RW0dQE44hLWP6LPEHpzDA__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/360/image/image.jpg?Expires=1760506704&Signature=VD1qTMajYuIfC5WWBUQ7X8yH0t2yRGa2CeDd1myGRVmKX7uaCqV9oqEMG84LzpBffxJ~aIuXXVrAMtv8bEhI0mW9B4q61qoZNX2104cMkx6UFa5ihVioWv7u~29MJfCdgnWlIT4E1g3uODnh02iY81uN4Nq1-4DDm9owjuh3epY27entoHBBLlEKQe4D1Na~KNWGdua9vK~nY52LsIxxYmEflNj-GbGWHkNEor6BbcPhMruAJqWlemuKmL51QrpvDIzRtNZ0UKZfjqkPCJ9xRmcl5R1Riuu0wEsLuW6WV7XkFF3IhkfMIoAkDJjmq4dtOCGbsq-9FsZH2gNbUZwoQA__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_60_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 60,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/360/image/image.jpg?Expires=1760506704&Signature=VD1qTMajYuIfC5WWBUQ7X8yH0t2yRGa2CeDd1myGRVmKX7uaCqV9oqEMG84LzpBffxJ~aIuXXVrAMtv8bEhI0mW9B4q61qoZNX2104cMkx6UFa5ihVioWv7u~29MJfCdgnWlIT4E1g3uODnh02iY81uN4Nq1-4DDm9owjuh3epY27entoHBBLlEKQe4D1Na~KNWGdua9vK~nY52LsIxxYmEflNj-GbGWHkNEor6BbcPhMruAJqWlemuKmL51QrpvDIzRtNZ0UKZfjqkPCJ9xRmcl5R1Riuu0wEsLuW6WV7XkFF3IhkfMIoAkDJjmq4dtOCGbsq-9FsZH2gNbUZwoQA__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/361/image/image.jpg?Expires=1760506704&Signature=h4oWp9vWseNeY7Vg26x8QRDfSRXMCWM9A3UdjjNu-amlI-wGRJdJSt2yFtKWzgwaypW0XURtdgzDbJ0K8jv1SHsnrMTus91bzBkVb83a~CFxo4Sn2osk--B64TIc-PI247IKdIs0YRAB2IIWm6wFN66JhlW1v79g~-jvhlS1hPGc8ICJ97kAFghs7FnG0w1FCenHrSGVx4PqzwCFrHK2eDQD21WQrdZr2rMYwFai7b1dXfBhxFH7OEDDaqvtBWZGoQ4fp188UckkhaK97mAdZJ~sCFRhHqtBcJW8CWitgPb2GaPnu5HESQModOgrfSs~iNv-snTso~RF3V0SDkBt8A__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_61_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 61,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/361/image/image.jpg?Expires=1760506704&Signature=h4oWp9vWseNeY7Vg26x8QRDfSRXMCWM9A3UdjjNu-amlI-wGRJdJSt2yFtKWzgwaypW0XURtdgzDbJ0K8jv1SHsnrMTus91bzBkVb83a~CFxo4Sn2osk--B64TIc-PI247IKdIs0YRAB2IIWm6wFN66JhlW1v79g~-jvhlS1hPGc8ICJ97kAFghs7FnG0w1FCenHrSGVx4PqzwCFrHK2eDQD21WQrdZr2rMYwFai7b1dXfBhxFH7OEDDaqvtBWZGoQ4fp188UckkhaK97mAdZJ~sCFRhHqtBcJW8CWitgPb2GaPnu5HESQModOgrfSs~iNv-snTso~RF3V0SDkBt8A__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/362/image/image.jpg?Expires=1760506704&Signature=zQSOIDlidVxaDIfcBNYiT8P~cqeDgLYV5kZnRkq49jLgh4t0779YpcatgRuDCY4Kdm7OMoZ~CyDIcS6pJmQ4ul-G~D0wmof~SA4vWrp1rG4V0W6RClWr~Xsr2tRSmwnvQLeaGP3F0DhcsgqFP2O6m8zp7UeCtaJSKLWDdoFK-P7eoZ8pKrhrGinErRhPsoeDgfasyUGgUul73gamZ0tMYtv-1oMMyofrbNcEwIhqtHgEPsy4g17gcTNXCn7lIZoxYw9iWQnXYtbg0dZx1nvvcdYODs57urGqV5SF9APpYTUC~JMvMiYP~u7wOq82KUft8NFeYL9jxosk~CLNK2aw6Q__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_62_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 62,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/362/image/image.jpg?Expires=1760506704&Signature=zQSOIDlidVxaDIfcBNYiT8P~cqeDgLYV5kZnRkq49jLgh4t0779YpcatgRuDCY4Kdm7OMoZ~CyDIcS6pJmQ4ul-G~D0wmof~SA4vWrp1rG4V0W6RClWr~Xsr2tRSmwnvQLeaGP3F0DhcsgqFP2O6m8zp7UeCtaJSKLWDdoFK-P7eoZ8pKrhrGinErRhPsoeDgfasyUGgUul73gamZ0tMYtv-1oMMyofrbNcEwIhqtHgEPsy4g17gcTNXCn7lIZoxYw9iWQnXYtbg0dZx1nvvcdYODs57urGqV5SF9APpYTUC~JMvMiYP~u7wOq82KUft8NFeYL9jxosk~CLNK2aw6Q__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/363/image/image.jpg?Expires=1760506704&Signature=XIR5Hq497mluX8EEYVYF6Ps1gB-mOXYds1tRLSB1tuLOq53cF3GCedsXrAc7QkreqMA6Q0s4QFL-H8NbajpipsmEd3beZE0jU-CBRegg79abuxI1CPNxycmu0IHQhSHyhOIGUK4HU22nSBdRdSiSdkXzgc8tVi0~BaWjMkYYhfbUN1cpKT-Mx8fd6Wvj26c6xTuDLOjzWsbkXV2NcPqn9PSHG306tTwkKgMQsSXIQ0xV6jeBNtOdndNqg84FqNDhOzNWPF8J9kh4GlnMjgqLezf0qHSAJWke2Qys2k6FlmAt4QVhmuFTUovSeJM3-fQwwBOuCGcT1qzVDa8xtwxrNA__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_63_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 63,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/363/image/image.jpg?Expires=1760506704&Signature=XIR5Hq497mluX8EEYVYF6Ps1gB-mOXYds1tRLSB1tuLOq53cF3GCedsXrAc7QkreqMA6Q0s4QFL-H8NbajpipsmEd3beZE0jU-CBRegg79abuxI1CPNxycmu0IHQhSHyhOIGUK4HU22nSBdRdSiSdkXzgc8tVi0~BaWjMkYYhfbUN1cpKT-Mx8fd6Wvj26c6xTuDLOjzWsbkXV2NcPqn9PSHG306tTwkKgMQsSXIQ0xV6jeBNtOdndNqg84FqNDhOzNWPF8J9kh4GlnMjgqLezf0qHSAJWke2Qys2k6FlmAt4QVhmuFTUovSeJM3-fQwwBOuCGcT1qzVDa8xtwxrNA__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/364/image/image.jpg?Expires=1760506704&Signature=aCBIEA9LFcYN40tgasinEQ1-FCcy7kxV0vPjtjTNOZG8kEexiVQJnD~Fe01~mS~9s9D4yXNFSB6-6wfaiZQX6GhwKIeHNGNe7XogrmyJLb4EJYfOzirPFrmyZmSBbkqTE0QQxBA0A1iS~r8vMgCBUzikPt9iPip4lhusW5S0KNxd2jKgYYwaEH1uDHnbGNqY7wnk89ms3hE8bJEIOX9uQ2EKVeewWgBU3BrB1k37~D~yQojsnjRLMlrRXTLVJlIs3MbEYiPy2MXG1y-GAzsJAoLwgjnn4wiTiWxJhefwrZU4-fWkQdO6JJ9h6WJWtLaOa6I-jSZ72viTXNNBbM1wFQ__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_64_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 64,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/364/image/image.jpg?Expires=1760506704&Signature=aCBIEA9LFcYN40tgasinEQ1-FCcy7kxV0vPjtjTNOZG8kEexiVQJnD~Fe01~mS~9s9D4yXNFSB6-6wfaiZQX6GhwKIeHNGNe7XogrmyJLb4EJYfOzirPFrmyZmSBbkqTE0QQxBA0A1iS~r8vMgCBUzikPt9iPip4lhusW5S0KNxd2jKgYYwaEH1uDHnbGNqY7wnk89ms3hE8bJEIOX9uQ2EKVeewWgBU3BrB1k37~D~yQojsnjRLMlrRXTLVJlIs3MbEYiPy2MXG1y-GAzsJAoLwgjnn4wiTiWxJhefwrZU4-fWkQdO6JJ9h6WJWtLaOa6I-jSZ72viTXNNBbM1wFQ__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/365/image/image.jpg?Expires=1760506704&Signature=FHJay7YKYLpbxsHJLmPsrfUCVgXuBkdo-3IMA8YLkQRwkTUWaIAPVVbQaQDO2DwA5MAotOltvW676k3qGddkoMm-~yzbY2-W~cOZkRbwQYNdrefv4Z55D953IQhEV-QVfWVM32RQIXWTd-KSgD~TgWF0JafeunG6SIZ0h~KJPpPrNVKWs9FYrSpUnQkYzBkeHx5YRtA5vS4jFOQp2EGdW9aCV~P8gagnkcDOFkJFl2Zb2M-WcQeLb9dlgpIkSei02V-dotYugd26FqQjA3Mun~G2i4N3P3IPY-9VnQqIuXJNRjgzQcLLVY9nKG-s1ozttoNz5iIs2haiaLGzsf2S0Q__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_65_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 65,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/365/image/image.jpg?Expires=1760506704&Signature=FHJay7YKYLpbxsHJLmPsrfUCVgXuBkdo-3IMA8YLkQRwkTUWaIAPVVbQaQDO2DwA5MAotOltvW676k3qGddkoMm-~yzbY2-W~cOZkRbwQYNdrefv4Z55D953IQhEV-QVfWVM32RQIXWTd-KSgD~TgWF0JafeunG6SIZ0h~KJPpPrNVKWs9FYrSpUnQkYzBkeHx5YRtA5vS4jFOQp2EGdW9aCV~P8gagnkcDOFkJFl2Zb2M-WcQeLb9dlgpIkSei02V-dotYugd26FqQjA3Mun~G2i4N3P3IPY-9VnQqIuXJNRjgzQcLLVY9nKG-s1ozttoNz5iIs2haiaLGzsf2S0Q__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/366/image/image.jpg?Expires=1760506704&Signature=iQt-LhHHEsWbz~yt37p8V54Sd9eVlBQkaWcC8VJI9UKGEbBgcBQFh2W5so8IXFr5l6j0t3MjTofUKY1UXBUD0T2qjV3nKlwQWj425MJMlfd6GybszY5y6Yy9XpMNrhSIpXVN8TYf4hFd7x2pJV7CB8c-qghIIe4cbyPLcsiF8W~JBkKz1gkEmvYd-t-07o~KVd6yI5xHeKPY93l4OQ3Sk4wZgTO6pks~DGSY7YRBXZA0UJivyqltLBrWM1~kiYYBZ8xtJxOCNyK7RLklhabbd9GBOslpm4A~nZhPlnNmcZSbk3ZWiJ36Mr~FGVMuXd-C0NOuwVMAP7uJVG6sDi7qyQ__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_66_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 66,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/366/image/image.jpg?Expires=1760506704&Signature=iQt-LhHHEsWbz~yt37p8V54Sd9eVlBQkaWcC8VJI9UKGEbBgcBQFh2W5so8IXFr5l6j0t3MjTofUKY1UXBUD0T2qjV3nKlwQWj425MJMlfd6GybszY5y6Yy9XpMNrhSIpXVN8TYf4hFd7x2pJV7CB8c-qghIIe4cbyPLcsiF8W~JBkKz1gkEmvYd-t-07o~KVd6yI5xHeKPY93l4OQ3Sk4wZgTO6pks~DGSY7YRBXZA0UJivyqltLBrWM1~kiYYBZ8xtJxOCNyK7RLklhabbd9GBOslpm4A~nZhPlnNmcZSbk3ZWiJ36Mr~FGVMuXd-C0NOuwVMAP7uJVG6sDi7qyQ__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/367/image/image.jpg?Expires=1760506704&Signature=DM~i8MdbQ~8bBuFRlMKTLWkCWju5GbMx9-lz6ZNRkBmxsynTPmJA0n-iPF2M1l9euFo62XhXY6G9whr~hx-Lci00xSJw23R9eExUpx9I-jBMSwf4a5jgVCeEpPQH168LajVWIxqPJzBrswEhGjw48G5IXEsSBmZjYmzeLEhdk2rFsSLpPH3P0xuW0TC67ZGB0qcLgP~1xx3iyxWs5xIs4Lr3Z~lJKoLFessQ50srqQ2CZ6YjjN8MCiqWQfK2GdlEdonHSRiYFVzZSYq5RYGj4TIkEZaApR13VzYRT5mZjpJ0IZUDkplnhA-SJYw1UVBImXIy1eglAtq6Cy8NZaPQrw__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_67_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 67,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/367/image/image.jpg?Expires=1760506704&Signature=DM~i8MdbQ~8bBuFRlMKTLWkCWju5GbMx9-lz6ZNRkBmxsynTPmJA0n-iPF2M1l9euFo62XhXY6G9whr~hx-Lci00xSJw23R9eExUpx9I-jBMSwf4a5jgVCeEpPQH168LajVWIxqPJzBrswEhGjw48G5IXEsSBmZjYmzeLEhdk2rFsSLpPH3P0xuW0TC67ZGB0qcLgP~1xx3iyxWs5xIs4Lr3Z~lJKoLFessQ50srqQ2CZ6YjjN8MCiqWQfK2GdlEdonHSRiYFVzZSYq5RYGj4TIkEZaApR13VzYRT5mZjpJ0IZUDkplnhA-SJYw1UVBImXIy1eglAtq6Cy8NZaPQrw__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/368/image/image.jpg?Expires=1760506704&Signature=BUD~Z6oLtMWfwvXn6JadWMv-IXsGPNdoqfByMdyvHpb19XBR7O0Gi3xDvQiGseWfpMbM8-85~1VVxHzlMDAt4YlIeJxU~JJNTA6xX-GBsPXbzg7CizYMr6fgJSWw0CsJ3i8l4kFSeztiH~UuN9Hb37zEF~8Vzk~9hs42yn3lUs~5iXqRoSGBYyoJ8-H4BB4bbkhp~-ucJaOeCp68uGiBIBD1U0R0EcrNUWAbfJJpaPUtxEy6~IacjbLRaC5ZykCPFFoenCzdHebm~lNh9TWYSFv~L52qKcJUCpD1iIhFQS7b44G36d69D~T7RyPO54CB48UnXpzjiJPJKPebFaguaQ__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_68_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 68,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/368/image/image.jpg?Expires=1760506704&Signature=BUD~Z6oLtMWfwvXn6JadWMv-IXsGPNdoqfByMdyvHpb19XBR7O0Gi3xDvQiGseWfpMbM8-85~1VVxHzlMDAt4YlIeJxU~JJNTA6xX-GBsPXbzg7CizYMr6fgJSWw0CsJ3i8l4kFSeztiH~UuN9Hb37zEF~8Vzk~9hs42yn3lUs~5iXqRoSGBYyoJ8-H4BB4bbkhp~-ucJaOeCp68uGiBIBD1U0R0EcrNUWAbfJJpaPUtxEy6~IacjbLRaC5ZykCPFFoenCzdHebm~lNh9TWYSFv~L52qKcJUCpD1iIhFQS7b44G36d69D~T7RyPO54CB48UnXpzjiJPJKPebFaguaQ__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/369/image/image.jpg?Expires=1760506704&Signature=YVY6jzYaXzXU4-U9lC9xkUcabQB5DWzU3fLIGlx~rNuBlwPmJCW0riZcz1rLMnw7B47kIO4qq~7vYG959iBBKFBMxs0-leNghroDmNbCxWuCAfazb4r~FVnUqrdd4Dwd2klDsiFTwXIdAGoFdR8BYoMUgPhE9ufsFMJg4dwx~7vXxJfJShCmrRSs3Ckh3RrAakz4UNW2wkndYPhM8ySl9ASVbD3sNTdoUtKNb5oB9QFSvAwowz-DmtlkSZ5XFPH3Tb4l~Xe8B53za5waW8TPAQqcjGv0jdF0JgWYQt9k07xRIuoe8fRa2bclKnGX-h~hoPuQNmSzk1gj2VQ9Ap6jYg__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_69_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 69,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/369/image/image.jpg?Expires=1760506704&Signature=YVY6jzYaXzXU4-U9lC9xkUcabQB5DWzU3fLIGlx~rNuBlwPmJCW0riZcz1rLMnw7B47kIO4qq~7vYG959iBBKFBMxs0-leNghroDmNbCxWuCAfazb4r~FVnUqrdd4Dwd2klDsiFTwXIdAGoFdR8BYoMUgPhE9ufsFMJg4dwx~7vXxJfJShCmrRSs3Ckh3RrAakz4UNW2wkndYPhM8ySl9ASVbD3sNTdoUtKNb5oB9QFSvAwowz-DmtlkSZ5XFPH3Tb4l~Xe8B53za5waW8TPAQqcjGv0jdF0JgWYQt9k07xRIuoe8fRa2bclKnGX-h~hoPuQNmSzk1gj2VQ9Ap6jYg__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/370/image/image.jpg?Expires=1760506704&Signature=lBrU3eL2quSAZfRZ4BF9yP8AD~32pbzaf6zNaW--uHy~Ia3f0XADbmDFwAfUA8ofz130iMVXaWSmMduuqNNETxA8D5gURilT8AK5GgHbJY7hjJGuntCMaYtvrb39fyFFl97lOWTeMVdwVGhlYiUPIVGqRMD7dppd2niecyPdEnnil-Azx6aunsTn8Zx11jQ5dtr2UIO2-O4lYR-V6Uktj6Ae7owIVx97J9z6FEJcJTwesYjssWyqlFkaIYmeaxbC9Eyhskh267FQ6tU0hJLWH8KtzfGzJUUgKvp8mAvVh-tvhffBD5gvtpyxOCECAqtspkB0iYG9R40TM9PrigMfmA__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_70_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 70,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/370/image/image.jpg?Expires=1760506704&Signature=lBrU3eL2quSAZfRZ4BF9yP8AD~32pbzaf6zNaW--uHy~Ia3f0XADbmDFwAfUA8ofz130iMVXaWSmMduuqNNETxA8D5gURilT8AK5GgHbJY7hjJGuntCMaYtvrb39fyFFl97lOWTeMVdwVGhlYiUPIVGqRMD7dppd2niecyPdEnnil-Azx6aunsTn8Zx11jQ5dtr2UIO2-O4lYR-V6Uktj6Ae7owIVx97J9z6FEJcJTwesYjssWyqlFkaIYmeaxbC9Eyhskh267FQ6tU0hJLWH8KtzfGzJUUgKvp8mAvVh-tvhffBD5gvtpyxOCECAqtspkB0iYG9R40TM9PrigMfmA__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/371/image/image.jpg?Expires=1760506704&Signature=AT9BrhjklHvY4n1BMs-yrtUNUrL6F~a2O8nXG1g40BsHU2mKkYWNwhG1A8eBvrOyzahJfQpoihPlzHdk~jSwRLeSw~fUwKDcRZA58kreWzRz3foofDwMy1HncusP7lNqJT-v66H5RiR7lCmZEcAnogHDKbTwj2OBRjXagmpAZsHnkXi3309d7Oq0pn5~qc1SOwNPw-Se6BgVXo5YoljR~p3RmxD0EegvE5i2SRHWPudK2xsFS6jgnPWrjBwOyaNK6fo67XkZZRPdC~mKi3sMEflkZjNkYnvqb4dLbrD8DyqXLbKSv~UWdOjt6bHJVGM5fD-UGTB6b3SPo7aTDKmXxg__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_71_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 71,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/371/image/image.jpg?Expires=1760506704&Signature=AT9BrhjklHvY4n1BMs-yrtUNUrL6F~a2O8nXG1g40BsHU2mKkYWNwhG1A8eBvrOyzahJfQpoihPlzHdk~jSwRLeSw~fUwKDcRZA58kreWzRz3foofDwMy1HncusP7lNqJT-v66H5RiR7lCmZEcAnogHDKbTwj2OBRjXagmpAZsHnkXi3309d7Oq0pn5~qc1SOwNPw-Se6BgVXo5YoljR~p3RmxD0EegvE5i2SRHWPudK2xsFS6jgnPWrjBwOyaNK6fo67XkZZRPdC~mKi3sMEflkZjNkYnvqb4dLbrD8DyqXLbKSv~UWdOjt6bHJVGM5fD-UGTB6b3SPo7aTDKmXxg__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/372/image/image.jpg?Expires=1760506704&Signature=VFqIKCrVPWxHh1U6ySnNxT8kS-4epg~q16nX9tn-PwPSpxglRuzNdOg4MpruWlAaYGm2~Pq2degIq~NigIS~BrONVrNJ2O4CH8dGKkBqcCps8UEv3kPuT-bckhF~T0H5wn4eQYVH2xO3O29Wd~hHfqqfjmFyYOpBixVFYmtKwqFDiv4qdyB69kCw8cV4lrLVkvEjiL76b1P7EJXZrxPUi43dvAEwpNYzyoONWgn89hMnUX8KiGBYacqQb1tiy42iGWF4Wzi7nY9UN82CXGBqZWvkTon95MwDszb1hVu8VkonKkDYYe0O1mkrUVYb08gxvmcfgOesz61EJKiV8qnsbg__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_72_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 72,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/372/image/image.jpg?Expires=1760506704&Signature=VFqIKCrVPWxHh1U6ySnNxT8kS-4epg~q16nX9tn-PwPSpxglRuzNdOg4MpruWlAaYGm2~Pq2degIq~NigIS~BrONVrNJ2O4CH8dGKkBqcCps8UEv3kPuT-bckhF~T0H5wn4eQYVH2xO3O29Wd~hHfqqfjmFyYOpBixVFYmtKwqFDiv4qdyB69kCw8cV4lrLVkvEjiL76b1P7EJXZrxPUi43dvAEwpNYzyoONWgn89hMnUX8KiGBYacqQb1tiy42iGWF4Wzi7nY9UN82CXGBqZWvkTon95MwDszb1hVu8VkonKkDYYe0O1mkrUVYb08gxvmcfgOesz61EJKiV8qnsbg__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/373/image/image.jpg?Expires=1760506704&Signature=AjmklXc3K1QfHuRAYFFesAcotwc591rS41FlIeoJNUdxgHAyI1K8B56V7DevLrLgeDr5JxtaWQXWzMyW5oFtHSb14QG0p0FhQGlUn2d6sPozQXgjJRsVSvAHg3hNQ6Opco7gjrVSIBrGClrTiZ6xaPlMtK6nAuj6AZd3CPmejfhYzqTkSDX1sfeCgVG~LkZVgtUzQSzSV2nKMMRAoWylBFjQjsfLJv1JG3SX8d7yrffPsZ0T5HnU7BMg0P6tOiUHFF3Ys3AkHweym2z3~IV3nvqYkz98bDrzoCL9DAAsFHXlDD80zSPGpXsALomT6WUSOrcSshSuK9HoCwP8S1lGDA__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_73_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 73,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/373/image/image.jpg?Expires=1760506704&Signature=AjmklXc3K1QfHuRAYFFesAcotwc591rS41FlIeoJNUdxgHAyI1K8B56V7DevLrLgeDr5JxtaWQXWzMyW5oFtHSb14QG0p0FhQGlUn2d6sPozQXgjJRsVSvAHg3hNQ6Opco7gjrVSIBrGClrTiZ6xaPlMtK6nAuj6AZd3CPmejfhYzqTkSDX1sfeCgVG~LkZVgtUzQSzSV2nKMMRAoWylBFjQjsfLJv1JG3SX8d7yrffPsZ0T5HnU7BMg0P6tOiUHFF3Ys3AkHweym2z3~IV3nvqYkz98bDrzoCL9DAAsFHXlDD80zSPGpXsALomT6WUSOrcSshSuK9HoCwP8S1lGDA__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/374/image/image.jpg?Expires=1760506704&Signature=AuAfSS~~~d0Rea1MFlu05cUIz8tAxnYomxWwESgWSHnmyRrvF3S33oQWvOeCgd9Zn6Uo-YAqVNcqx36O-1dJzjbjo9gsY6eiMMeetb~tTg8Zlnt-advTEHw-971htWrZqIiNM1jxbIYWKYm2X44w7zsJUqVKLTpkzjDRedg14~COyNguZ2YVTp04jV4qVIyQ6O-eyH1tugrfMsHzNzWZK7yPheQeH9XlFRZCqdgWRbjM3PTCw~uGSjm2vut-5xuTvjOg~AqYBJ4tJHp8xnCZfO4dGkOlaJpNkZagyvQsA-XObOO5UDXCUcMbfVQMlP6Noc~0zfyHYzpnkAz8b2CSfw__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_74_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 74,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/374/image/image.jpg?Expires=1760506704&Signature=AuAfSS~~~d0Rea1MFlu05cUIz8tAxnYomxWwESgWSHnmyRrvF3S33oQWvOeCgd9Zn6Uo-YAqVNcqx36O-1dJzjbjo9gsY6eiMMeetb~tTg8Zlnt-advTEHw-971htWrZqIiNM1jxbIYWKYm2X44w7zsJUqVKLTpkzjDRedg14~COyNguZ2YVTp04jV4qVIyQ6O-eyH1tugrfMsHzNzWZK7yPheQeH9XlFRZCqdgWRbjM3PTCw~uGSjm2vut-5xuTvjOg~AqYBJ4tJHp8xnCZfO4dGkOlaJpNkZagyvQsA-XObOO5UDXCUcMbfVQMlP6Noc~0zfyHYzpnkAz8b2CSfw__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/375/image/image.jpg?Expires=1760506704&Signature=CwTFWd9mmY54XOkRbkZi6wZqZ29GhHW-M3ar~35MMxnQOZU1~E-3HKUQr5yLnGNWs7ZO9aiiNno6GLl7hgLov6DiLpZvV8yHWZ5qc8wLYmIylzS0-37I549VyQAbCxGlPDUdWS820UPPqo9hWZUKuOV5BN7trWTJVIh2wTUOAgKZi0rXTvP6j1nrGRWOHDXAQxm8cPKFV7WuxF-Nzqq2KyMneo7xiVZ38gD12yiyphR0vKvoUZaH0Jids6vHxhLQEYSffhPTFQG84LarpDooYZrQqPlBYyUvCrTHf9CZBceVDhGsmNP4xv17wOGvo0HOb-sjwE2JJCaK8E9c1ryzuw__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_75_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 75,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/375/image/image.jpg?Expires=1760506704&Signature=CwTFWd9mmY54XOkRbkZi6wZqZ29GhHW-M3ar~35MMxnQOZU1~E-3HKUQr5yLnGNWs7ZO9aiiNno6GLl7hgLov6DiLpZvV8yHWZ5qc8wLYmIylzS0-37I549VyQAbCxGlPDUdWS820UPPqo9hWZUKuOV5BN7trWTJVIh2wTUOAgKZi0rXTvP6j1nrGRWOHDXAQxm8cPKFV7WuxF-Nzqq2KyMneo7xiVZ38gD12yiyphR0vKvoUZaH0Jids6vHxhLQEYSffhPTFQG84LarpDooYZrQqPlBYyUvCrTHf9CZBceVDhGsmNP4xv17wOGvo0HOb-sjwE2JJCaK8E9c1ryzuw__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/376/image/image.jpg?Expires=1760506704&Signature=BLTAuI8bKkRq8urrwqmycwRLf5SWzJvTabdZIzRl8KtuQ8wpd-vQUOe-Vg6GTYlYvvjhfjojlm8LUhqFnWrqxYPw1NDQ9BF0ijoNYQmfKkmpcRvo3147APFdtovCJaVC~Zc5w0SHCk4XVLfpXmkC~zkTCHQW2qTrhqkCz24K22KQ97pN0qzr5hAixQxQD6ytoqNJhkA5Cn~1xIKZn1dYrBHNPPNrz5wdOmK08vur59uSC4nBX3C~07xhXwPrKckYuOlcGSCgAjrCsTuSmOAf00ZYAXqFhQTa2aQ1Z62I7vvdNHN63zkXGPSZiSioRV03dkIIEU6MVbOgnKV5awR4wA__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_76_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 76,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/376/image/image.jpg?Expires=1760506704&Signature=BLTAuI8bKkRq8urrwqmycwRLf5SWzJvTabdZIzRl8KtuQ8wpd-vQUOe-Vg6GTYlYvvjhfjojlm8LUhqFnWrqxYPw1NDQ9BF0ijoNYQmfKkmpcRvo3147APFdtovCJaVC~Zc5w0SHCk4XVLfpXmkC~zkTCHQW2qTrhqkCz24K22KQ97pN0qzr5hAixQxQD6ytoqNJhkA5Cn~1xIKZn1dYrBHNPPNrz5wdOmK08vur59uSC4nBX3C~07xhXwPrKckYuOlcGSCgAjrCsTuSmOAf00ZYAXqFhQTa2aQ1Z62I7vvdNHN63zkXGPSZiSioRV03dkIIEU6MVbOgnKV5awR4wA__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/377/image/image.jpg?Expires=1760506704&Signature=odb-23UZ4RnHxWEz7tog7df6DmgYitYPaWrEg9HlutLOJ5TMcqIf5UBxY-zycUq4G2XJq7lNMRzVBCwMZ0gJVqXPXVCuJKTcBbnEpkp1zsnY4~b7Bj9ZbPaVHwxRw~sqxaIow5EUmBFcc7GNNvOP22IaLT7G-1wdFj~wdd~pkRousqOk0TPcNLkqbrE-oLJqILW3PGANm8KttUUQPmwx9jjaeXIBuDLsJOBlrmr6TYpHJrT99ASb6j7vjdapcKqHb9zpjjR44u1KfIa2E05bXR6tBi5p6cSxqtokyDbBGUsF-XkKj0X3QUBeZkPuZf7CjY03ofO1tjjmR~~xuqu-8A__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_77_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 77,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/377/image/image.jpg?Expires=1760506704&Signature=odb-23UZ4RnHxWEz7tog7df6DmgYitYPaWrEg9HlutLOJ5TMcqIf5UBxY-zycUq4G2XJq7lNMRzVBCwMZ0gJVqXPXVCuJKTcBbnEpkp1zsnY4~b7Bj9ZbPaVHwxRw~sqxaIow5EUmBFcc7GNNvOP22IaLT7G-1wdFj~wdd~pkRousqOk0TPcNLkqbrE-oLJqILW3PGANm8KttUUQPmwx9jjaeXIBuDLsJOBlrmr6TYpHJrT99ASb6j7vjdapcKqHb9zpjjR44u1KfIa2E05bXR6tBi5p6cSxqtokyDbBGUsF-XkKj0X3QUBeZkPuZf7CjY03ofO1tjjmR~~xuqu-8A__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/378/image/image.jpg?Expires=1760506704&Signature=AxAmTWJOU~K9xQqx7ZET9ROf4w1fIMlEWVfcJ48KUlgZaqr0MWQ3S7IrEDzNFBLCeOyJkK6L8NES8xQkDHB7eUyT2JuEVILUtdBG6gYZ~obvvcObp0ll9RhAAeCPg6C4k6~wvhpBKUQzawzIM3Rso2g0MurYR8-BykI167Sj1gDN8~6hTqimlBNJD19KJoQiulvtqdys07oOrWJwNKv8dcWDoTTRoCH3m6if3z-UsGxCZftVz6c~-5yw0k5c1GnIRcTIVLtpYQCIenvuEmzNB6zHjK73SDyN3chB5pMAKMZ5PG6~XQWCjFnArBqGLLnJPOPnQRX0b5Cmd9Af-bSx3Q__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_78_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 78,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/378/image/image.jpg?Expires=1760506704&Signature=AxAmTWJOU~K9xQqx7ZET9ROf4w1fIMlEWVfcJ48KUlgZaqr0MWQ3S7IrEDzNFBLCeOyJkK6L8NES8xQkDHB7eUyT2JuEVILUtdBG6gYZ~obvvcObp0ll9RhAAeCPg6C4k6~wvhpBKUQzawzIM3Rso2g0MurYR8-BykI167Sj1gDN8~6hTqimlBNJD19KJoQiulvtqdys07oOrWJwNKv8dcWDoTTRoCH3m6if3z-UsGxCZftVz6c~-5yw0k5c1GnIRcTIVLtpYQCIenvuEmzNB6zHjK73SDyN3chB5pMAKMZ5PG6~XQWCjFnArBqGLLnJPOPnQRX0b5Cmd9Af-bSx3Q__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/379/image/image.jpg?Expires=1760506704&Signature=DUAk8-Y08UNjuZr09QOB3cv-FY7queCu3oT~YugzN9JmhumulrEMSFl2aOZqS9584G9DuwUmUIrHTGPBMvhm4Z~bvyVB-Ug8oFzdZJacIp93X~nL7O5bdMkq0EorrHzxZwXmE5cDqqrY5yuzQFtCBDJ0h~hkdlld2neJfgcXNskkDMbJnvZfrG9Xar2J9zK4dGuHoGlHtPSOhH4UKcbei8rjqDrYh8erFKgGkEkibqtL-SdOa3L-f9B1mGydrl2DmH4ua2d-xuSR83x1ipZnXGKBP2fQyior-GM4iGm3F9rHsgw1IWuwwEedmCO5eaVE9f36cJ5j6arTo~-O5A133w__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_79_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 79,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/379/image/image.jpg?Expires=1760506704&Signature=DUAk8-Y08UNjuZr09QOB3cv-FY7queCu3oT~YugzN9JmhumulrEMSFl2aOZqS9584G9DuwUmUIrHTGPBMvhm4Z~bvyVB-Ug8oFzdZJacIp93X~nL7O5bdMkq0EorrHzxZwXmE5cDqqrY5yuzQFtCBDJ0h~hkdlld2neJfgcXNskkDMbJnvZfrG9Xar2J9zK4dGuHoGlHtPSOhH4UKcbei8rjqDrYh8erFKgGkEkibqtL-SdOa3L-f9B1mGydrl2DmH4ua2d-xuSR83x1ipZnXGKBP2fQyior-GM4iGm3F9rHsgw1IWuwwEedmCO5eaVE9f36cJ5j6arTo~-O5A133w__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/380/image/image.jpg?Expires=1760506704&Signature=UdedZ3cW3ASvzC~UT3s7iqnphpVHfNtHcurKtkPi-3dqBvxwQRj61tGPTU7EUl1gj53fNmTjkflzLQyBrGBqt9o7KL~Ztw~EvBn3jHrDmgkHMzW7cmeLBfXgQrtNxtIMMOnGURpU9Z-HK2ExBMpfV6wp1TPqfKLRMNLARESd~YlzkWOrIwK2pWrX76gK~WIihgWMWYT~oyfUR1rYe1OFL5h3uSEszoeHwpFAMHlx4QvA44f4DS1Yau1MnC3oiW3C-5ZIj2DCLhhfRzAyMsYM9HZWA1hKUUaJ~AwGQncU8WrxsN4XeVqmNcDyzGrDJ4bazNNRk-p4xyiHfUNj3D0MrA__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_80_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 80,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/380/image/image.jpg?Expires=1760506704&Signature=UdedZ3cW3ASvzC~UT3s7iqnphpVHfNtHcurKtkPi-3dqBvxwQRj61tGPTU7EUl1gj53fNmTjkflzLQyBrGBqt9o7KL~Ztw~EvBn3jHrDmgkHMzW7cmeLBfXgQrtNxtIMMOnGURpU9Z-HK2ExBMpfV6wp1TPqfKLRMNLARESd~YlzkWOrIwK2pWrX76gK~WIihgWMWYT~oyfUR1rYe1OFL5h3uSEszoeHwpFAMHlx4QvA44f4DS1Yau1MnC3oiW3C-5ZIj2DCLhhfRzAyMsYM9HZWA1hKUUaJ~AwGQncU8WrxsN4XeVqmNcDyzGrDJ4bazNNRk-p4xyiHfUNj3D0MrA__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/381/image/image.jpg?Expires=1760506704&Signature=vIVvm~k8bSjI6AGeyhPKtvGdnCZsHr2EqbSLmugPKiDzm5hM653U706V57ujuaCWOuH5UtD-U2szaHX3SnFDM1pf7lfSHGORStYlF0PU4BSldRSkfxlw3gty8upmuToP5NRGjk5VNKEufTLPJpYQ8MhkLynyQ5j~whWLTk58Va6HUIgxeABRFzoOSI15eW5ri1e4YPPdD9BQRwJDEQqZAs9F7nW4HYnWiPkvvdrP8rhbCwXDtk4SkknxW7F5UeXFKA8LiKO9eXv6YLi4Wc-m9hl~gya0FMxBKhati1M3SDhbqhiYBCvw~JQtc1oIqhjIER6jqgJvOZUnrlMaPBgB1Q__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_81_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 81,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/381/image/image.jpg?Expires=1760506704&Signature=vIVvm~k8bSjI6AGeyhPKtvGdnCZsHr2EqbSLmugPKiDzm5hM653U706V57ujuaCWOuH5UtD-U2szaHX3SnFDM1pf7lfSHGORStYlF0PU4BSldRSkfxlw3gty8upmuToP5NRGjk5VNKEufTLPJpYQ8MhkLynyQ5j~whWLTk58Va6HUIgxeABRFzoOSI15eW5ri1e4YPPdD9BQRwJDEQqZAs9F7nW4HYnWiPkvvdrP8rhbCwXDtk4SkknxW7F5UeXFKA8LiKO9eXv6YLi4Wc-m9hl~gya0FMxBKhati1M3SDhbqhiYBCvw~JQtc1oIqhjIER6jqgJvOZUnrlMaPBgB1Q__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/382/image/image.jpg?Expires=1760506704&Signature=WCc2Lun4znlDbedey39ZtcrZAxYMtj9gxD3T8Oq0UzeshXdXa~4ljFmYjul3wb-QMX4QZbSpwlRbtC6u22xRDKuslm3rV~tbxbtrjpy1oymbjuOmUX3v3jXuiLfa5Tt-4KbOltJnnn7Buw-2ZvR3liGUP9nTTCKOoc-7QXtCY~n3P4x1k6kceMNLaQnj4AA6OkRcNMV4aJvijT80DMDWv7RnRc7xK2yo5c~0LSBhymooGrqUiWvPfAfXlj-Z4X-KL-cFZ8XeAiA2lVkgHFImAb3xMD~~i57-pu~VdVUC843045RSad-MxWenaCr3N97zM5oCo83BpFBzkNlAA3Mhfw__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_82_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 82,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/382/image/image.jpg?Expires=1760506704&Signature=WCc2Lun4znlDbedey39ZtcrZAxYMtj9gxD3T8Oq0UzeshXdXa~4ljFmYjul3wb-QMX4QZbSpwlRbtC6u22xRDKuslm3rV~tbxbtrjpy1oymbjuOmUX3v3jXuiLfa5Tt-4KbOltJnnn7Buw-2ZvR3liGUP9nTTCKOoc-7QXtCY~n3P4x1k6kceMNLaQnj4AA6OkRcNMV4aJvijT80DMDWv7RnRc7xK2yo5c~0LSBhymooGrqUiWvPfAfXlj-Z4X-KL-cFZ8XeAiA2lVkgHFImAb3xMD~~i57-pu~VdVUC843045RSad-MxWenaCr3N97zM5oCo83BpFBzkNlAA3Mhfw__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/383/image/image.jpg?Expires=1760506704&Signature=D057Nic8pRXSAgZaCrIk~3Saw3PYQrYwooxLjxWCAZEkyhcUnm3eP1vSMWYWpH4S8CSeQfEvvJeCpjbZX3lR13D6PavR8JQbtlzAJMYUksvp1MDDZiBF~P3PIJY5XC~4YLaU5kbbMWKANI3st3KlaUXO5VLwWruX~T2jMqs34MzGRfJ5rdbj4A2uGaB-XCJle8tlcijW7SQzDTCsv6imD~oFrL0nttdOt7UxKy7VA6DNtFG-RIaI0cHjXhdmQ-OqIooUSTRieTBCmxaFrLq~eAz1g7EN276qiWttHdnLCdx7QyCcb8tG0P6Xb7A3Mc~sGGyclOFPi9NFUyi7LSOsRA__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_83_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 83,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/383/image/image.jpg?Expires=1760506704&Signature=D057Nic8pRXSAgZaCrIk~3Saw3PYQrYwooxLjxWCAZEkyhcUnm3eP1vSMWYWpH4S8CSeQfEvvJeCpjbZX3lR13D6PavR8JQbtlzAJMYUksvp1MDDZiBF~P3PIJY5XC~4YLaU5kbbMWKANI3st3KlaUXO5VLwWruX~T2jMqs34MzGRfJ5rdbj4A2uGaB-XCJle8tlcijW7SQzDTCsv6imD~oFrL0nttdOt7UxKy7VA6DNtFG-RIaI0cHjXhdmQ-OqIooUSTRieTBCmxaFrLq~eAz1g7EN276qiWttHdnLCdx7QyCcb8tG0P6Xb7A3Mc~sGGyclOFPi9NFUyi7LSOsRA__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/384/image/image.jpg?Expires=1760506704&Signature=bh9b5e16tiEXGxsYmLQ9IfawpuqL-H8eCh86dK6V--wOx6GuT-~Q-RSYr7qcP4cXIrMW1DrjtxH-UaqsXD83hLplr9XiHN6fcOXz1FO0VQtufnbcqHEPtbt9t0fuTOr01XQ8l~TxHf-22HnEEErGRKU2fkS8EowLVOcbmkb32Hu~VqT~uZX0rx1V28g-vSozr3bwu1yUfbtoQlv2DD146OXULbVI57AxZhLJwjtQ7~ZT~F0GeWbVA99D6bGBbmoQ6sV~QY5K-H~vVSUWcA99Q48rEzNl247JLaxaRFdH36mQUiZEbYPRNElWw0hKmLZZ4JXy48boNYu7t5qAONDpdw__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_84_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 84,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/384/image/image.jpg?Expires=1760506704&Signature=bh9b5e16tiEXGxsYmLQ9IfawpuqL-H8eCh86dK6V--wOx6GuT-~Q-RSYr7qcP4cXIrMW1DrjtxH-UaqsXD83hLplr9XiHN6fcOXz1FO0VQtufnbcqHEPtbt9t0fuTOr01XQ8l~TxHf-22HnEEErGRKU2fkS8EowLVOcbmkb32Hu~VqT~uZX0rx1V28g-vSozr3bwu1yUfbtoQlv2DD146OXULbVI57AxZhLJwjtQ7~ZT~F0GeWbVA99D6bGBbmoQ6sV~QY5K-H~vVSUWcA99Q48rEzNl247JLaxaRFdH36mQUiZEbYPRNElWw0hKmLZZ4JXy48boNYu7t5qAONDpdw__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/385/image/image.jpg?Expires=1760506704&Signature=EAAvilvlkOAqPo2TE8BNkOeCgKw8pvhwT9NHk8bmJKLpHie8AHRr2ozMrn4t-tdW~lR7Q-7OsJi6v-5i-C1-rpgJh9ayX55~b3f1fET8lg9QhsuLeAOWNXkTrfcpyRT1Cn~mHqSnkXnu13QHDkagxrylOtxGd2T-H8TPJCXzQwAGBx-ygCgrpqjRkYhlXuCtdVr7BrP~9J3KAUxR6Q1mSuvvPS0C5hYm8C7Krc0nffERaQnwOkdnTWNVzElXA-OFXf-wTgElpoR7NnFBauMZhie81NRn4RIIDT8OV11PRaozk32CxAmji0lA8vKU2ARpWwso5h-HDdpWz6WboVptYA__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_85_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 85,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/385/image/image.jpg?Expires=1760506704&Signature=EAAvilvlkOAqPo2TE8BNkOeCgKw8pvhwT9NHk8bmJKLpHie8AHRr2ozMrn4t-tdW~lR7Q-7OsJi6v-5i-C1-rpgJh9ayX55~b3f1fET8lg9QhsuLeAOWNXkTrfcpyRT1Cn~mHqSnkXnu13QHDkagxrylOtxGd2T-H8TPJCXzQwAGBx-ygCgrpqjRkYhlXuCtdVr7BrP~9J3KAUxR6Q1mSuvvPS0C5hYm8C7Krc0nffERaQnwOkdnTWNVzElXA-OFXf-wTgElpoR7NnFBauMZhie81NRn4RIIDT8OV11PRaozk32CxAmji0lA8vKU2ARpWwso5h-HDdpWz6WboVptYA__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/386/image/image.jpg?Expires=1760506704&Signature=EICNKa-DXo1QoZpZxaqOQ25Fkehb9hk4fn17GxpiJrxRCKjpFkPe0XZ1CAGeVovq46fO9wi8l46vCjhLU1zuygJfUuZlNz4iMfSFegnNMU6aWddeLohraKxleNT6VFQt5vkMwDRM18ctDgeX4-V7E5nMCJRM33DrZBNWuNqMuxpkGeMXtiNs2zLLn0Lct9h-4-SrQBX9ywmh9j3zJA5s~emmK2vulnlyMWW0bWPkCBKTwi0w-U7NyNLyYogr4aAtF6Lpjv~r9bxAg4XFyu1RjltacXNH~fVs0n2H8PA5gwX6E9ym57i4UIMIYP5jtn169cPuw~FAfh-ouOuGAirfKQ__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_86_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 86,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/386/image/image.jpg?Expires=1760506704&Signature=EICNKa-DXo1QoZpZxaqOQ25Fkehb9hk4fn17GxpiJrxRCKjpFkPe0XZ1CAGeVovq46fO9wi8l46vCjhLU1zuygJfUuZlNz4iMfSFegnNMU6aWddeLohraKxleNT6VFQt5vkMwDRM18ctDgeX4-V7E5nMCJRM33DrZBNWuNqMuxpkGeMXtiNs2zLLn0Lct9h-4-SrQBX9ywmh9j3zJA5s~emmK2vulnlyMWW0bWPkCBKTwi0w-U7NyNLyYogr4aAtF6Lpjv~r9bxAg4XFyu1RjltacXNH~fVs0n2H8PA5gwX6E9ym57i4UIMIYP5jtn169cPuw~FAfh-ouOuGAirfKQ__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/387/image/image.jpg?Expires=1760506704&Signature=No-3lxRr26NALllO8uOisnOmwtNnQikL5rX9DjF8ouJQDlTPMcdIvbwEoiouBabx9ssMhU5os0jx2ae0I3zl362EcfoqR1cbKckiZzVZ0-AKnHAwLikETrYB~-7F853IoxeqoSMY7GNHHcYZd-XCfQyHhyAKyKaO9IJXomV95BDUGYcR-0ORuDms5o1CYZfP8WaZEYrO9Yiow9jgWNF94H9LxRSg7HEUfZbs2qYNNZUV7BX8wHtHamNoAN-SDZupQTc5WZ-9g3XqJSqIytN1h2-~qJnqYROqchuDLVTKYSJSGP--jUpk9jjcnF9L~-yCUb70CJaCS5CztwC4PkhLdw__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_87_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 87,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/387/image/image.jpg?Expires=1760506704&Signature=No-3lxRr26NALllO8uOisnOmwtNnQikL5rX9DjF8ouJQDlTPMcdIvbwEoiouBabx9ssMhU5os0jx2ae0I3zl362EcfoqR1cbKckiZzVZ0-AKnHAwLikETrYB~-7F853IoxeqoSMY7GNHHcYZd-XCfQyHhyAKyKaO9IJXomV95BDUGYcR-0ORuDms5o1CYZfP8WaZEYrO9Yiow9jgWNF94H9LxRSg7HEUfZbs2qYNNZUV7BX8wHtHamNoAN-SDZupQTc5WZ-9g3XqJSqIytN1h2-~qJnqYROqchuDLVTKYSJSGP--jUpk9jjcnF9L~-yCUb70CJaCS5CztwC4PkhLdw__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/388/image/image.jpg?Expires=1760506704&Signature=dHw4L9xwdgYHvCH1I4Z8iF4irmKl1F6syH2rHAujwD-3PJkSYdu8XxLMYPrMVfB6zoad392UfeD-Yx3ai5~1LCrofZ7cP~1iVx1ayL-6-fGxWxQJWf5WqImlHuvWj-XfrydjhRaOpWZwOE1EEGzWZ~IKwsgVIhSnQJb4pOU~jSq1BWTUprPX5Hb2Ne3M-4C0aNW6snwEf3Dn1phY4P5QHix8pJkah1HjgPyEVXijqHJhqoUpbXVoFHoRDDBn6PuknNWErfiXQPeEHDtakK7FNlMcDD0-JF-KAqkij7hI~3e5mJ3fNRvDYD9BK8dGbxXu7HF4CBQbx8hIh0vdoyCRpg__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_88_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 88,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/388/image/image.jpg?Expires=1760506704&Signature=dHw4L9xwdgYHvCH1I4Z8iF4irmKl1F6syH2rHAujwD-3PJkSYdu8XxLMYPrMVfB6zoad392UfeD-Yx3ai5~1LCrofZ7cP~1iVx1ayL-6-fGxWxQJWf5WqImlHuvWj-XfrydjhRaOpWZwOE1EEGzWZ~IKwsgVIhSnQJb4pOU~jSq1BWTUprPX5Hb2Ne3M-4C0aNW6snwEf3Dn1phY4P5QHix8pJkah1HjgPyEVXijqHJhqoUpbXVoFHoRDDBn6PuknNWErfiXQPeEHDtakK7FNlMcDD0-JF-KAqkij7hI~3e5mJ3fNRvDYD9BK8dGbxXu7HF4CBQbx8hIh0vdoyCRpg__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/389/image/image.jpg?Expires=1760506704&Signature=QkZwGdIEutdzl7sHZEoY34ta2GAREq~V-WzvsCpgU-NsArWeHHBbDtcs9YlpXtQuvwUcZ512croc0GmTC3pqU63jdCr-ZhZcLWUQ-HiqgsoCfmjzWGWPi5AEg33~RY4fYf9avNqgTGAscTh~4-QRjattOJXn-0s3wOwnlxM1vsRXc8ZKa0sat3C9z7HWvyLUhlMy8FfpG360cJCqs2eK5mH62uMPS92S165CKmEaescEjQBXfQHVNWWZUFtjrdnFnCqMyB9eexzE0L1J4aCoecvC90Q71W0cwA~elKGNkovp4Phwbojk3d49pFqTSmrGSNk5bo4id5drKwxiJGHw0w__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_89_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 89,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/389/image/image.jpg?Expires=1760506704&Signature=QkZwGdIEutdzl7sHZEoY34ta2GAREq~V-WzvsCpgU-NsArWeHHBbDtcs9YlpXtQuvwUcZ512croc0GmTC3pqU63jdCr-ZhZcLWUQ-HiqgsoCfmjzWGWPi5AEg33~RY4fYf9avNqgTGAscTh~4-QRjattOJXn-0s3wOwnlxM1vsRXc8ZKa0sat3C9z7HWvyLUhlMy8FfpG360cJCqs2eK5mH62uMPS92S165CKmEaescEjQBXfQHVNWWZUFtjrdnFnCqMyB9eexzE0L1J4aCoecvC90Q71W0cwA~elKGNkovp4Phwbojk3d49pFqTSmrGSNk5bo4id5drKwxiJGHw0w__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/390/image/image.jpg?Expires=1760506704&Signature=Ic0nQsEgQUGWWTW-HEkeX89w6pGL9-1aZ97WmZVgH3VKTLzSeeGmQ2PIzpyfh4N6B3ZXqj7xxBiU2BJTPLvUqf4pz9Tcu5mfaYbA2vG6d23sF1a2425JfGw2al1VrPuI24KSeAvqIJguRetuK5PhK3fDammCbpYa1m8cZP3UxHanUZuAyqTEENexY-w813Q4GiPnSTflSRlRlnGem0U8LhHkEf2L0RVqsWXgn1K3z3lcJxd1sDz8BhM0slXEzXij3Haka7~00TWDuphxkyt3zc56rPKMx-RkkiHSVdHLSLqZzmwzwZVCTOnlD6X9DObHL8uupE4CuWhwF-24VUcoyw__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_90_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 90,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/390/image/image.jpg?Expires=1760506704&Signature=Ic0nQsEgQUGWWTW-HEkeX89w6pGL9-1aZ97WmZVgH3VKTLzSeeGmQ2PIzpyfh4N6B3ZXqj7xxBiU2BJTPLvUqf4pz9Tcu5mfaYbA2vG6d23sF1a2425JfGw2al1VrPuI24KSeAvqIJguRetuK5PhK3fDammCbpYa1m8cZP3UxHanUZuAyqTEENexY-w813Q4GiPnSTflSRlRlnGem0U8LhHkEf2L0RVqsWXgn1K3z3lcJxd1sDz8BhM0slXEzXij3Haka7~00TWDuphxkyt3zc56rPKMx-RkkiHSVdHLSLqZzmwzwZVCTOnlD6X9DObHL8uupE4CuWhwF-24VUcoyw__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/391/image/image.jpg?Expires=1760506704&Signature=LFg1x0sWVwGhlt4ZTQhA9uk~MW7HDP-hhCBtxVz4FdH6Q8w~3yGcTWUoAbjEIVXdpEt~DxrDXisI9Ij4WFfZWq-m-tLAmV1XmEbupLyffwKWLRZb0JC3Fqoj~LdsWL-gjRwews4OXGkRTu83FGBM3C3b1tODBFV5PN~TPCnvQsauqi5gp9-iCxVPGyMS~VaLdKWInBq5K9-GxFwGwhfOq2EErwAOXM6kfjxTRGFBcMRn-8Vj0svfguivCcx0JHdYFKK4fuIUvBpbEpSZdIqf5OgB8xf2G2fAVSCmcrdS63CJw3aARDIN5NwRvCXb2G79VsHAj7ESvyNQYf5gHStkcg__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_91_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 91,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/391/image/image.jpg?Expires=1760506704&Signature=LFg1x0sWVwGhlt4ZTQhA9uk~MW7HDP-hhCBtxVz4FdH6Q8w~3yGcTWUoAbjEIVXdpEt~DxrDXisI9Ij4WFfZWq-m-tLAmV1XmEbupLyffwKWLRZb0JC3Fqoj~LdsWL-gjRwews4OXGkRTu83FGBM3C3b1tODBFV5PN~TPCnvQsauqi5gp9-iCxVPGyMS~VaLdKWInBq5K9-GxFwGwhfOq2EErwAOXM6kfjxTRGFBcMRn-8Vj0svfguivCcx0JHdYFKK4fuIUvBpbEpSZdIqf5OgB8xf2G2fAVSCmcrdS63CJw3aARDIN5NwRvCXb2G79VsHAj7ESvyNQYf5gHStkcg__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/392/image/image.jpg?Expires=1760506704&Signature=f402BvbkEBRMmsw9~GBQ2T97lbVvD0lr2450R6UElYVRlAeUyE058QnC4rbm-9sX8-zcZrbbI4S-PEwoLavbFSwLfPgCWLA7aQ8000X7n9hYEQpBHpk31BgBhlfIR3YkZnDF9KUwsz8uhiASetzAwUXxD~60Noi--DqZCsZuHvSIPcQeHqhKL9TKgCuTeb~MLsrk5ue41u2v5y~Ys9znT5ySDuI~BxYlD6GxppAtQ77v4rvvoQmGmxH43yq4PBgontb1fRq1R75SJrTz8nq5EEk-hnqRHNjn12uH0YOVYBEP0nnwomq8xkxphwJBuuMaAO9iuFxClHMiNaFDlvLjKw__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_92_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 92,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/392/image/image.jpg?Expires=1760506704&Signature=f402BvbkEBRMmsw9~GBQ2T97lbVvD0lr2450R6UElYVRlAeUyE058QnC4rbm-9sX8-zcZrbbI4S-PEwoLavbFSwLfPgCWLA7aQ8000X7n9hYEQpBHpk31BgBhlfIR3YkZnDF9KUwsz8uhiASetzAwUXxD~60Noi--DqZCsZuHvSIPcQeHqhKL9TKgCuTeb~MLsrk5ue41u2v5y~Ys9znT5ySDuI~BxYlD6GxppAtQ77v4rvvoQmGmxH43yq4PBgontb1fRq1R75SJrTz8nq5EEk-hnqRHNjn12uH0YOVYBEP0nnwomq8xkxphwJBuuMaAO9iuFxClHMiNaFDlvLjKw__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/393/image/image.jpg?Expires=1760506704&Signature=QGotPMmmHku7xv3eiREcMyxepVtS2K3tcmGbqSxyvszmz4leq9JrOGzMCRKWP0fL3erPbMX705Z0pKoif3Sju~SbRCox4XA~LdJXsW5ClVPnlPm7K7~Akeosej09xJr2VRp5Ayy0XUlpLEdKMpIi1rz1zyt9g9qTdiHyeSV6jxliakUQWGUmlkfVr4sjC25V9Fh4rXCQP81~t3aRehBU2kaQiAtdpAfKNITYqaNuWT-miZEjkRLgtgOhkMyGfl93JsboQsUi1rEgcxdI3Spj5YnCepuVd5WJvb8vJPBmreihuuKXPWUbFANhbg41ZAAq~xp6SKznpmG4TRejfT1WHA__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_93_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 93,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/393/image/image.jpg?Expires=1760506704&Signature=QGotPMmmHku7xv3eiREcMyxepVtS2K3tcmGbqSxyvszmz4leq9JrOGzMCRKWP0fL3erPbMX705Z0pKoif3Sju~SbRCox4XA~LdJXsW5ClVPnlPm7K7~Akeosej09xJr2VRp5Ayy0XUlpLEdKMpIi1rz1zyt9g9qTdiHyeSV6jxliakUQWGUmlkfVr4sjC25V9Fh4rXCQP81~t3aRehBU2kaQiAtdpAfKNITYqaNuWT-miZEjkRLgtgOhkMyGfl93JsboQsUi1rEgcxdI3Spj5YnCepuVd5WJvb8vJPBmreihuuKXPWUbFANhbg41ZAAq~xp6SKznpmG4TRejfT1WHA__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/394/image/image.jpg?Expires=1760506704&Signature=mqoaZXD6HqMfxvlramUDxIMh8fBA9gfnl2~Epsg3f36f4kp~sW1BRKCnNljkDbImb3GdJyRqg6pm-MuCDBeEnCoB1GXn-CvX2BVJBsV9KJcMIhsSYcDxozhR43PJx2GRvA9Cl01bMTArS2WBcgmdCKGNN1Qhp5gxWGW4gQ08N4VErQsN8wvsCrSKC9GSQNSdwi3OJJf3GLNwUebm6wqzUE40is5FiBzzxhSPpQ15IvTcrPb9LLz-Hh0~su3bLOxZq8M45FL0V3a1-rPtc2w~tAr-j4XlYILy8~7faKRDxENam1hvIw3EEvy77-3uOcIZa-J0fEv3wjZ4U1MHAvNNGg__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_94_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 94,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/394/image/image.jpg?Expires=1760506704&Signature=mqoaZXD6HqMfxvlramUDxIMh8fBA9gfnl2~Epsg3f36f4kp~sW1BRKCnNljkDbImb3GdJyRqg6pm-MuCDBeEnCoB1GXn-CvX2BVJBsV9KJcMIhsSYcDxozhR43PJx2GRvA9Cl01bMTArS2WBcgmdCKGNN1Qhp5gxWGW4gQ08N4VErQsN8wvsCrSKC9GSQNSdwi3OJJf3GLNwUebm6wqzUE40is5FiBzzxhSPpQ15IvTcrPb9LLz-Hh0~su3bLOxZq8M45FL0V3a1-rPtc2w~tAr-j4XlYILy8~7faKRDxENam1hvIw3EEvy77-3uOcIZa-J0fEv3wjZ4U1MHAvNNGg__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/395/image/image.jpg?Expires=1760506704&Signature=KDAf7Z2ml3s2myHkLIM6c0s2c4-NNNfbL2Nkt3diW1rbAzh09OC5L52vd5UvbJecURfVjY-bIpqPOp8ahn15ljNo5aJ1ef3-6z-rXY0~yCGfCcqUj4BnlFJaYrlMWH-Kqrl0emT7CkJ~uTcjjku0lRjA7sS4GyLPvvDA8w3yogxsA6KWRqpiQlMpE-sKYJWU2LGK5yTzCNMdb2jI4M5Mjb9HCb8MLb1WmcXS9cFqw66fH4DmqtroReMPaNtMcfT-1u--pOCVo~phAg-s4M-VdfI0mwXxqSE5CQYBze6KCK-cj7ZY0rlPPkna8e3Kvy0GOLI81xYYw9HlnFfJEy8pbQ__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_95_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 95,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/395/image/image.jpg?Expires=1760506704&Signature=KDAf7Z2ml3s2myHkLIM6c0s2c4-NNNfbL2Nkt3diW1rbAzh09OC5L52vd5UvbJecURfVjY-bIpqPOp8ahn15ljNo5aJ1ef3-6z-rXY0~yCGfCcqUj4BnlFJaYrlMWH-Kqrl0emT7CkJ~uTcjjku0lRjA7sS4GyLPvvDA8w3yogxsA6KWRqpiQlMpE-sKYJWU2LGK5yTzCNMdb2jI4M5Mjb9HCb8MLb1WmcXS9cFqw66fH4DmqtroReMPaNtMcfT-1u--pOCVo~phAg-s4M-VdfI0mwXxqSE5CQYBze6KCK-cj7ZY0rlPPkna8e3Kvy0GOLI81xYYw9HlnFfJEy8pbQ__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/396/image/image.jpg?Expires=1760506704&Signature=C4A-lywj7rUP8NQzln2giRerkMIYgeiRjJcNGBUmJEwNJwI5ulcCQPV1BVY3f8h7lbnUyOnOOWrRjmCty54wuwcXxXHIg8RTFTS80iWDhhDC7AXpQJPFCLOiKaqd6egjmuXBTRO~LbtPrVDxZHC7jbbCfxc8M43KF99oc0WsMTQzbBwAEr4LI4rhk9WQHlDVH0Qv-kigKuo0-I0~LlkpfQM5NBRM4rEV0B7ZwR7WrXGVAVZ9~uXZ2Ebtv8M4geDlki9TH~M9KXhsCTCmSBT7KUZu7kfB~HqnnKkMdhP-Y0F9tK-fksjA-ff5kfkLGmWMo6UMG2ralQkI5rKqhIrYQA__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_96_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 96,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/396/image/image.jpg?Expires=1760506704&Signature=C4A-lywj7rUP8NQzln2giRerkMIYgeiRjJcNGBUmJEwNJwI5ulcCQPV1BVY3f8h7lbnUyOnOOWrRjmCty54wuwcXxXHIg8RTFTS80iWDhhDC7AXpQJPFCLOiKaqd6egjmuXBTRO~LbtPrVDxZHC7jbbCfxc8M43KF99oc0WsMTQzbBwAEr4LI4rhk9WQHlDVH0Qv-kigKuo0-I0~LlkpfQM5NBRM4rEV0B7ZwR7WrXGVAVZ9~uXZ2Ebtv8M4geDlki9TH~M9KXhsCTCmSBT7KUZu7kfB~HqnnKkMdhP-Y0F9tK-fksjA-ff5kfkLGmWMo6UMG2ralQkI5rKqhIrYQA__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/397/image/image.jpg?Expires=1760506704&Signature=qiyjkJRqY48VMZLGRK2HllnT8cWZuYYoRBuSP79HmLV7jxbX3IAP61r~CBX1k02IlsPTqpKpJa-6XTQ-6~9-ntg9fkYFRLc~vicwDJ003qRyLfWQJ18JsRBovbdlMl8nn-97NSolZtuS0S7ozfL5xG9gEo1p8bmx0u-nRRIZpWRSraUGb5Z4wQgaE050Fj4nGaXHphVAlvYv~9mHKxWV8MxhbRr~dbxjNvdJPhlZuDgDorj-Oi0KRJjdIWZTMXNQEBMvIFVVUgYFIdwjgzwHOX~CnGG8hxt3ngmray5DMyZn8tiHBXsq83Gggu6GJfPIQn1mdPmKiZ4LaJzcUVhsRg__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_97_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 97,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/397/image/image.jpg?Expires=1760506704&Signature=qiyjkJRqY48VMZLGRK2HllnT8cWZuYYoRBuSP79HmLV7jxbX3IAP61r~CBX1k02IlsPTqpKpJa-6XTQ-6~9-ntg9fkYFRLc~vicwDJ003qRyLfWQJ18JsRBovbdlMl8nn-97NSolZtuS0S7ozfL5xG9gEo1p8bmx0u-nRRIZpWRSraUGb5Z4wQgaE050Fj4nGaXHphVAlvYv~9mHKxWV8MxhbRr~dbxjNvdJPhlZuDgDorj-Oi0KRJjdIWZTMXNQEBMvIFVVUgYFIdwjgzwHOX~CnGG8hxt3ngmray5DMyZn8tiHBXsq83Gggu6GJfPIQn1mdPmKiZ4LaJzcUVhsRg__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/398/image/image.jpg?Expires=1760506704&Signature=OeFB-ULUQZecHaRkFR26cxwXf5-oAgZKliVDh2xJj9P4s6Ll-7vEmcbKZaHwxSj39MngaczPBCTwL0WoleLt6qrIqIFcQ34HYqw8JGH1Y~IVeG7eACvmiVpd-idm121Szni13Ci8Tjy8bdnAYN98I3Cd0aXNmItVIupiW2qSxwcz25AkmzrjZkwsB79hr4ixj3vpeNga0jp9TsryYPKciBcF8vr8Dm6Jkw1toCf9sIfxoiaMvTwGMLjiJ~N1lmdtwPO3Fws3KBykvvPglZ-DqA36sQ9kJBHZ~kyGYJHQqUqUvR4wPDuNILHyvGhpLM4zpPF740~0RIillUKXa5Kh~g__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_98_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 98,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/398/image/image.jpg?Expires=1760506704&Signature=OeFB-ULUQZecHaRkFR26cxwXf5-oAgZKliVDh2xJj9P4s6Ll-7vEmcbKZaHwxSj39MngaczPBCTwL0WoleLt6qrIqIFcQ34HYqw8JGH1Y~IVeG7eACvmiVpd-idm121Szni13Ci8Tjy8bdnAYN98I3Cd0aXNmItVIupiW2qSxwcz25AkmzrjZkwsB79hr4ixj3vpeNga0jp9TsryYPKciBcF8vr8Dm6Jkw1toCf9sIfxoiaMvTwGMLjiJ~N1lmdtwPO3Fws3KBykvvPglZ-DqA36sQ9kJBHZ~kyGYJHQqUqUvR4wPDuNILHyvGhpLM4zpPF740~0RIillUKXa5Kh~g__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/399/image/image.jpg?Expires=1760506704&Signature=oJmsAFT1eSdpxGZtlFRjBll8tUoy0riFKxt4eIQMqX8uTDN-dxa3K8Dp-9cTpIml8JxvaVCj2CZQy36zUJHYmk8I2CbEE8yXCwAlaTlHI~-Ouj~mNd5djyXxhzsGslnENBwsdttOJKLqFpLYkoz391QDoexWND9~wxHDpcWNdMqRQcnbO9Rz5jXx2kEsIgoPpuoikmDxW-5qRvDykHlM8Ye95IvoF7FBfebKQgSrWlvDnqbDWVoGDW6JhsPGV6d~jyfcdMVIDIvw33CjXkel-h38ELwQIqQTviBqWZiLjaW1oLCL5YkiTpZHXoJpScTwCorsWZNZgEJYvPDmpFWPQg__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_99_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 99,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/399/image/image.jpg?Expires=1760506704&Signature=oJmsAFT1eSdpxGZtlFRjBll8tUoy0riFKxt4eIQMqX8uTDN-dxa3K8Dp-9cTpIml8JxvaVCj2CZQy36zUJHYmk8I2CbEE8yXCwAlaTlHI~-Ouj~mNd5djyXxhzsGslnENBwsdttOJKLqFpLYkoz391QDoexWND9~wxHDpcWNdMqRQcnbO9Rz5jXx2kEsIgoPpuoikmDxW-5qRvDykHlM8Ye95IvoF7FBfebKQgSrWlvDnqbDWVoGDW6JhsPGV6d~jyfcdMVIDIvw33CjXkel-h38ELwQIqQTviBqWZiLjaW1oLCL5YkiTpZHXoJpScTwCorsWZNZgEJYvPDmpFWPQg__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/400/image/image.jpg?Expires=1760506705&Signature=BDYA2VQbrV8dvhH3hQXQ3unqeGHPdh7aFTwsmlJCeNgKcndKnuBu0Ci96ZYg4fLLsVE9XFkXfYvfnLc0w0kRpLAWxZlgk3AzYdqGieiuaHsbEpFE~27J91d5XqGRtdg8LJE-XI~P3g565vmduhSftj6FETmjeNdgEpdhtCfO0cU2Z2oRm4VDJe~6AT7ki4Qdq-WyMnNjZYwhGf0EkhgHZSBGbPXcYsO3jt1VsyhVPJk5jFH4OtHqBNTqjXjttYMxF8ylqzivKVitqLL-sz1YZsgXb9MS1FuTnhf4eM8Zz8aKjNWf~BypG8HkFRLaLq3bdzGh3j7CqCx~EylHG8fhVw__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_0_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 0,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/400/image/image.jpg?Expires=1760506705&Signature=BDYA2VQbrV8dvhH3hQXQ3unqeGHPdh7aFTwsmlJCeNgKcndKnuBu0Ci96ZYg4fLLsVE9XFkXfYvfnLc0w0kRpLAWxZlgk3AzYdqGieiuaHsbEpFE~27J91d5XqGRtdg8LJE-XI~P3g565vmduhSftj6FETmjeNdgEpdhtCfO0cU2Z2oRm4VDJe~6AT7ki4Qdq-WyMnNjZYwhGf0EkhgHZSBGbPXcYsO3jt1VsyhVPJk5jFH4OtHqBNTqjXjttYMxF8ylqzivKVitqLL-sz1YZsgXb9MS1FuTnhf4eM8Zz8aKjNWf~BypG8HkFRLaLq3bdzGh3j7CqCx~EylHG8fhVw__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/401/image/image.jpg?Expires=1760506705&Signature=hBrpTqUk4D2mL2rOgg0FetB5DkC3YLuod-QjeiADM9lLvP7PFqVg5JQH91cGIQiBpaoCnWg3avstFRNt8u2rg0vDSAxCFkTyMp3h2jqbQlC5EqYRnvQlP7hXgNqJsRysBYiTj3jDy4ej-ikJB-ExH-XAdrcZ9zr-D5FSCgM5ccxFEVqBOv4MjHaHNRKUYiAaRLaOFQ~kma-Y5zEf3wyYg-7qBZbZrmT9cxHipft7Bvpo1EkJSMJP3vzpAqqW-iVgGv-GeyGLdCbjhS-98sxPmwck3QDw97o4Ic5gb4D8l6mqVoLdTobYazIoAXgFijBJKqiyvOqmdmvQXzd2jdDcHQ__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_1_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 1,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/401/image/image.jpg?Expires=1760506705&Signature=hBrpTqUk4D2mL2rOgg0FetB5DkC3YLuod-QjeiADM9lLvP7PFqVg5JQH91cGIQiBpaoCnWg3avstFRNt8u2rg0vDSAxCFkTyMp3h2jqbQlC5EqYRnvQlP7hXgNqJsRysBYiTj3jDy4ej-ikJB-ExH-XAdrcZ9zr-D5FSCgM5ccxFEVqBOv4MjHaHNRKUYiAaRLaOFQ~kma-Y5zEf3wyYg-7qBZbZrmT9cxHipft7Bvpo1EkJSMJP3vzpAqqW-iVgGv-GeyGLdCbjhS-98sxPmwck3QDw97o4Ic5gb4D8l6mqVoLdTobYazIoAXgFijBJKqiyvOqmdmvQXzd2jdDcHQ__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/402/image/image.jpg?Expires=1760506705&Signature=KUxrfN2FX~5olT9Ma9roB0L0DgaB4AKcY9ZVOj15B-acpJzivfu8qKUfbFU0V-K-DevGEEcIkw9n87YtzQh4Vd3REyPjK8BrUtDZii6RbDycIDWLqQRq95BEDmR1K1UmnwbjbMTdtapXvS9voctBGDJrB05BmVfGOa23Ge4QXcrRhGIHYk0XAgjmh8azI6sdsgOCqxXjr~BNvFwoQFiG5bxECMwhTpLCXGIoqeELWKtB60UvKbFEZP3nsHs1VFN-wN15zTiS7MZh2E24GxxezDsVHlulcbRk1uC6daQ6IvHJNlgKAIxb2tOXtan0GARLyIeWHaA-PFEkwbcAr2jOUw__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_2_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 2,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/402/image/image.jpg?Expires=1760506705&Signature=KUxrfN2FX~5olT9Ma9roB0L0DgaB4AKcY9ZVOj15B-acpJzivfu8qKUfbFU0V-K-DevGEEcIkw9n87YtzQh4Vd3REyPjK8BrUtDZii6RbDycIDWLqQRq95BEDmR1K1UmnwbjbMTdtapXvS9voctBGDJrB05BmVfGOa23Ge4QXcrRhGIHYk0XAgjmh8azI6sdsgOCqxXjr~BNvFwoQFiG5bxECMwhTpLCXGIoqeELWKtB60UvKbFEZP3nsHs1VFN-wN15zTiS7MZh2E24GxxezDsVHlulcbRk1uC6daQ6IvHJNlgKAIxb2tOXtan0GARLyIeWHaA-PFEkwbcAr2jOUw__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/403/image/image.jpg?Expires=1760506705&Signature=C4FBCji4DZ4QILLHccwJPvDpdlCJpPYFwjS~USttBqgedcuDWh4g~8EO88SDWFnMtGjgMv~j60f4ACbhfb6ZiuLZcR0gGjSKthOqIO7eN2PEFspliatsy72FP7R71PSRg64FbDSsAa3OoCeLuZGu62MW0vjhHx06wLt57iIAI5bFWdOpuY8dTB-aq8xkFPub~lHH2D5sUx4CQ7WPSHyMxsVC4J~PX22xp1qUgPqv18nFSo9JUGzfd4GWqjuP7dXRN8os18pwHxfYgDhSIuhqIBIgVZ1LNtLaLio6fAUP~YpNJTTBV6kADfaT1JUwAg4K8Zo367X6J82t4kBIe~NGyg__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_3_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 3,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/403/image/image.jpg?Expires=1760506705&Signature=C4FBCji4DZ4QILLHccwJPvDpdlCJpPYFwjS~USttBqgedcuDWh4g~8EO88SDWFnMtGjgMv~j60f4ACbhfb6ZiuLZcR0gGjSKthOqIO7eN2PEFspliatsy72FP7R71PSRg64FbDSsAa3OoCeLuZGu62MW0vjhHx06wLt57iIAI5bFWdOpuY8dTB-aq8xkFPub~lHH2D5sUx4CQ7WPSHyMxsVC4J~PX22xp1qUgPqv18nFSo9JUGzfd4GWqjuP7dXRN8os18pwHxfYgDhSIuhqIBIgVZ1LNtLaLio6fAUP~YpNJTTBV6kADfaT1JUwAg4K8Zo367X6J82t4kBIe~NGyg__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/404/image/image.jpg?Expires=1760506705&Signature=gZlIED4WcpeTkjZAjCAjU52htuwrEUJJAJW3jUE9QnwYJEvZggpe6K4zlTeALhp2bf9TJ-wDnK4ME2YmFRQI~Xb-vrBBSDIXrC77Lii5cajZl1cTZdvQ8Lh707hCNS4wcPCRgMhWnaiOlo1CmXfZqeTEPpWdEcSZpFaTDaT5udZrVoHWDXGFttwy7MwNVaP9UbShf1xdHtHPT2N97C9sgZXGKJEYdS6h2mE-eeLbsz1nwbk8hJnqX9QWbxGdQlLc5menLhCKhGJRTC0T0x9sOzPzL-L3zKtvK8aVQ8qbik2t2gwJSOV6Nu5YY8wiwSD6OCC32x4TIuIbhl25bdBqOg__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_4_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 4,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/404/image/image.jpg?Expires=1760506705&Signature=gZlIED4WcpeTkjZAjCAjU52htuwrEUJJAJW3jUE9QnwYJEvZggpe6K4zlTeALhp2bf9TJ-wDnK4ME2YmFRQI~Xb-vrBBSDIXrC77Lii5cajZl1cTZdvQ8Lh707hCNS4wcPCRgMhWnaiOlo1CmXfZqeTEPpWdEcSZpFaTDaT5udZrVoHWDXGFttwy7MwNVaP9UbShf1xdHtHPT2N97C9sgZXGKJEYdS6h2mE-eeLbsz1nwbk8hJnqX9QWbxGdQlLc5menLhCKhGJRTC0T0x9sOzPzL-L3zKtvK8aVQ8qbik2t2gwJSOV6Nu5YY8wiwSD6OCC32x4TIuIbhl25bdBqOg__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/405/image/image.jpg?Expires=1760506705&Signature=i0pp2j1FVuk8zmvhRDsHGQHb34LU4fTy2LeJ4hQX484Gx2rEcU5x4qG3PCPwquoFl9dhBAJLLgNYcrFV8v4ghjweaN-Nz9Ts0xIdeXo3ks8Q1uTUO6M6jrRhKumnS2D5buJpwh15ifD2ezzivFcxOMyojASPR-yXfjhRItCAPhCzyFhmh9RVVMRV-LjYsC4oTS-NxxT4UgbLre2OwpLjT0dhwps7xJXmAh9-3mnkDG30ow8IspU60o3eOaz9ivEfx99eR5CDFsFgrSFZiOqlz1dzi~bB9ZXzYpzolUYK5nkg~mQg6ln5OJW4UiAJS698xM26hXQku7alQyxizX54qw__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_5_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 5,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/405/image/image.jpg?Expires=1760506705&Signature=i0pp2j1FVuk8zmvhRDsHGQHb34LU4fTy2LeJ4hQX484Gx2rEcU5x4qG3PCPwquoFl9dhBAJLLgNYcrFV8v4ghjweaN-Nz9Ts0xIdeXo3ks8Q1uTUO6M6jrRhKumnS2D5buJpwh15ifD2ezzivFcxOMyojASPR-yXfjhRItCAPhCzyFhmh9RVVMRV-LjYsC4oTS-NxxT4UgbLre2OwpLjT0dhwps7xJXmAh9-3mnkDG30ow8IspU60o3eOaz9ivEfx99eR5CDFsFgrSFZiOqlz1dzi~bB9ZXzYpzolUYK5nkg~mQg6ln5OJW4UiAJS698xM26hXQku7alQyxizX54qw__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/406/image/image.jpg?Expires=1760506705&Signature=rXp8k7saEuKEuhuk7Pxg4zGvsvSWs4BjapRcD8oHJwC3UeY7I4RWQ6rCtiWyC2r94pZqNy-4qNmNhjd5NbxcAggDDZJMzux0slTUzIjvpzGZe5WkQdCLAnMnnRfDTHDpLUMHfPwVW4xPq5zyHXAGqBNKTu1fWMYhR3XYZJIYZ1xH5tGtO7sZjDKb4uMyerE-IgT5u2VkHOVZAl4TUOrUqwPPo6vhpKSOKRDrTY1f0nt2z~LBydeoUjqCbNPgK4rjhlQIrY9G36wbaEPKP4~w9SmE1Onl~B0sNgcqQN~MaVxnHhypEZYzk9fw1lN9grqtaWb8b-LRQf0wEEuHqVV4Sw__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_6_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 6,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/406/image/image.jpg?Expires=1760506705&Signature=rXp8k7saEuKEuhuk7Pxg4zGvsvSWs4BjapRcD8oHJwC3UeY7I4RWQ6rCtiWyC2r94pZqNy-4qNmNhjd5NbxcAggDDZJMzux0slTUzIjvpzGZe5WkQdCLAnMnnRfDTHDpLUMHfPwVW4xPq5zyHXAGqBNKTu1fWMYhR3XYZJIYZ1xH5tGtO7sZjDKb4uMyerE-IgT5u2VkHOVZAl4TUOrUqwPPo6vhpKSOKRDrTY1f0nt2z~LBydeoUjqCbNPgK4rjhlQIrY9G36wbaEPKP4~w9SmE1Onl~B0sNgcqQN~MaVxnHhypEZYzk9fw1lN9grqtaWb8b-LRQf0wEEuHqVV4Sw__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/407/image/image.jpg?Expires=1760506705&Signature=bcYmz9SV~E30nPtiwZG87k1AXRF0qU8mfwVnu20v5Ou2qTv6au1ZDQaztKy1Cc3uGEhGQgLCm7S1WJxF58K2vDQlpGHhorSPED3oT0feXi2qZaEPg8oMxVrSt-CaXyDygAQ8ZMc-iIypb9~ByO2yHFrlNeqj-YM4iGSjusGsNEvXfP9FlT5N~jwnaPsXvlCetRQ66WKpoybkRYz01wLlrx8IVGEGc1X7Y1~eRhQ475~sbYaNSHco-QJTbl~kemHbEEIhHUdR1tTpCk-a2IatNiTsUya05Hmpz6UbP-eOGZf2wORPGuMRJbtaTvWE1ZaahOG~UGo~U81gCfRO9nGVyQ__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_7_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 7,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/407/image/image.jpg?Expires=1760506705&Signature=bcYmz9SV~E30nPtiwZG87k1AXRF0qU8mfwVnu20v5Ou2qTv6au1ZDQaztKy1Cc3uGEhGQgLCm7S1WJxF58K2vDQlpGHhorSPED3oT0feXi2qZaEPg8oMxVrSt-CaXyDygAQ8ZMc-iIypb9~ByO2yHFrlNeqj-YM4iGSjusGsNEvXfP9FlT5N~jwnaPsXvlCetRQ66WKpoybkRYz01wLlrx8IVGEGc1X7Y1~eRhQ475~sbYaNSHco-QJTbl~kemHbEEIhHUdR1tTpCk-a2IatNiTsUya05Hmpz6UbP-eOGZf2wORPGuMRJbtaTvWE1ZaahOG~UGo~U81gCfRO9nGVyQ__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/408/image/image.jpg?Expires=1760506705&Signature=g9atuN~w~00olFjpKXDiOxnw8R-sfg-OJF-nu-N7JnV1sYmL9KsuA1ORWb9wc98JZygu6QpkEcjr9poAFtThgPPgEHEn4ZsTCVvihBNAsc6FrFMFd5BAD5jEvqAlBtRpX9WiSEqfNdHCl6sKzS0rkDkNt17pkKPRCV1o2MyR7o08K3ocTXRlXy-tec7JuFREfiwtsvHRT9Rc~KXY~7m1srse~mZHQYLDoVhVTXleJvzyI9EoMJGvGtQpsBuCKNi0GUaLxU72Jm5fhWSvXTYcZkSyluomSSbtSHlo9QDXSeN5R4DgNqAcUaQIpsep~nBZn133b1286kyBJG1eZVDBJA__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_8_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 8,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/408/image/image.jpg?Expires=1760506705&Signature=g9atuN~w~00olFjpKXDiOxnw8R-sfg-OJF-nu-N7JnV1sYmL9KsuA1ORWb9wc98JZygu6QpkEcjr9poAFtThgPPgEHEn4ZsTCVvihBNAsc6FrFMFd5BAD5jEvqAlBtRpX9WiSEqfNdHCl6sKzS0rkDkNt17pkKPRCV1o2MyR7o08K3ocTXRlXy-tec7JuFREfiwtsvHRT9Rc~KXY~7m1srse~mZHQYLDoVhVTXleJvzyI9EoMJGvGtQpsBuCKNi0GUaLxU72Jm5fhWSvXTYcZkSyluomSSbtSHlo9QDXSeN5R4DgNqAcUaQIpsep~nBZn133b1286kyBJG1eZVDBJA__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/409/image/image.jpg?Expires=1760506705&Signature=LLak4m-o4Ny2REkX24HAL8OCjIYCvkyfhPW1QgRgTLLJXUp2kCrkPks5QDRPrfM1UcF-OlEAnYu~0AhARPaOSFPL3iRfoVl2J9jUcpJTLW0ftdfjH85uyAr9EA~OnZQPfh7vzVDFybhW25s7APvw88v6s0mP-puAGgFW4UHWN3hAdUXo-5Vvvixraj4ZEM8olXFdk5i83XB2pIYSBLyTKNuWyr-tv1tstMU-cxyJO0CpPFMvpWWHywjDgBBFnVOP0hwKXFUbEMRr5nptRYLZhouJKDIr4OAbMxCI-Ko7aaHLMVCNrTW9bybvL9GnXU79hUHLjxeBEbxLdQayK1VKxA__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_9_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 9,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/409/image/image.jpg?Expires=1760506705&Signature=LLak4m-o4Ny2REkX24HAL8OCjIYCvkyfhPW1QgRgTLLJXUp2kCrkPks5QDRPrfM1UcF-OlEAnYu~0AhARPaOSFPL3iRfoVl2J9jUcpJTLW0ftdfjH85uyAr9EA~OnZQPfh7vzVDFybhW25s7APvw88v6s0mP-puAGgFW4UHWN3hAdUXo-5Vvvixraj4ZEM8olXFdk5i83XB2pIYSBLyTKNuWyr-tv1tstMU-cxyJO0CpPFMvpWWHywjDgBBFnVOP0hwKXFUbEMRr5nptRYLZhouJKDIr4OAbMxCI-Ko7aaHLMVCNrTW9bybvL9GnXU79hUHLjxeBEbxLdQayK1VKxA__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/410/image/image.jpg?Expires=1760506705&Signature=wBYMNC-f1hrhqkq~zvWVovv8NpVUwTWgGYZFH4ndQQpRd~l0nTk7iOrUPzVnDxEgmlgwu77dS4yhbEgtACVSgC6ZOlzyItl5MvOlrJJeHk9a4NK8EKrCjXAjdPu2mYGUsj~wUMQvsXdgbBgVyuWAt1ujxLZ8LiXc4ryf~kAMa8NenklhcbpOUpE0u4WxGkwlw~RNhSVxOPQuFjVDXAJM60VkfRWFYlGSphi8-pCbARD5iTBiLvEiv6Iv7Nk90IcZdJc1cmU3iLcXoi3NC7SZuURJTCFgkmmb4WyPXnQkMY1JX-Lrzds8OxGuX7v-9NE-KkrsuR~AXU6ILBl9peNBog__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_10_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 10,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/410/image/image.jpg?Expires=1760506705&Signature=wBYMNC-f1hrhqkq~zvWVovv8NpVUwTWgGYZFH4ndQQpRd~l0nTk7iOrUPzVnDxEgmlgwu77dS4yhbEgtACVSgC6ZOlzyItl5MvOlrJJeHk9a4NK8EKrCjXAjdPu2mYGUsj~wUMQvsXdgbBgVyuWAt1ujxLZ8LiXc4ryf~kAMa8NenklhcbpOUpE0u4WxGkwlw~RNhSVxOPQuFjVDXAJM60VkfRWFYlGSphi8-pCbARD5iTBiLvEiv6Iv7Nk90IcZdJc1cmU3iLcXoi3NC7SZuURJTCFgkmmb4WyPXnQkMY1JX-Lrzds8OxGuX7v-9NE-KkrsuR~AXU6ILBl9peNBog__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/411/image/image.jpg?Expires=1760506705&Signature=L3PsyHnHMHUKk0pwV1FYNpxxL~cYq~IReEI646romQEM4J908jfYCcHzyXiRHpraNcac22wkE00QCLhRMWm3TcVDbbyFqINmK4XxMM4wiFKtpSoc5ts7l8~on8sjegtH7R55EE6Z6ovA~dL0tBCAEKYSF-RqDOQpvVOfCzm-an-j1kiSKK2~vrD~l7g27SdnxN3lhowld229l-fX5zngr5Qdr4Hkw~aF8JQP1N3wz5kHK-wsdmuQBpVSn8nW4L7Rd6ebllBqHQOQGlAIV0bwT9H2FSHngD6gN8Tv39bCo-l3~W6sJ6mrZsV5Bj7JrreHw5CNxNaKEVVh2dYVyvDsFA__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_11_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 11,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/411/image/image.jpg?Expires=1760506705&Signature=L3PsyHnHMHUKk0pwV1FYNpxxL~cYq~IReEI646romQEM4J908jfYCcHzyXiRHpraNcac22wkE00QCLhRMWm3TcVDbbyFqINmK4XxMM4wiFKtpSoc5ts7l8~on8sjegtH7R55EE6Z6ovA~dL0tBCAEKYSF-RqDOQpvVOfCzm-an-j1kiSKK2~vrD~l7g27SdnxN3lhowld229l-fX5zngr5Qdr4Hkw~aF8JQP1N3wz5kHK-wsdmuQBpVSn8nW4L7Rd6ebllBqHQOQGlAIV0bwT9H2FSHngD6gN8Tv39bCo-l3~W6sJ6mrZsV5Bj7JrreHw5CNxNaKEVVh2dYVyvDsFA__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/412/image/image.jpg?Expires=1760506705&Signature=b0Y8cbOnbOTMWKLRVaXVJOiVhZQpS1QlBRgnZy9oRcsn84M1EtBYGalXaV4qv2-ZLL09bPqAE1puNylH9JT8mvmqN0OTv1LwhsyyvQ7iXgFD4weko5y6od8qOYYsA81Bz8PKQrzAK78fwBjM1iUmcgVVBDVVLBs4NKoxQluJVnrNs3Gi9WkzkNrtTOxDeBNjCY~A3qyG1e3qoi2QKVucfMwO527U1CrqkHNDBLkTRYSTN~q9RVYFmQqNKl-MaYn0l7z5p8nFsXYFEUDKYtXKCgKbZSRm-SI2gJVeEmBDimt-OXOSpVuK5XrMugiHiRClCpjtOlpMrE4wLCcbxfB4BA__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_12_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 12,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/412/image/image.jpg?Expires=1760506705&Signature=b0Y8cbOnbOTMWKLRVaXVJOiVhZQpS1QlBRgnZy9oRcsn84M1EtBYGalXaV4qv2-ZLL09bPqAE1puNylH9JT8mvmqN0OTv1LwhsyyvQ7iXgFD4weko5y6od8qOYYsA81Bz8PKQrzAK78fwBjM1iUmcgVVBDVVLBs4NKoxQluJVnrNs3Gi9WkzkNrtTOxDeBNjCY~A3qyG1e3qoi2QKVucfMwO527U1CrqkHNDBLkTRYSTN~q9RVYFmQqNKl-MaYn0l7z5p8nFsXYFEUDKYtXKCgKbZSRm-SI2gJVeEmBDimt-OXOSpVuK5XrMugiHiRClCpjtOlpMrE4wLCcbxfB4BA__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/413/image/image.jpg?Expires=1760506705&Signature=WDLLNnFDX2ILAUFlSSTSI4VdEHOp7Ua5Td3aoYOkukIgikpBHk6HKIqvZEwK~i3~uK9jDaVgxPGkNP0BqzAVyV68AcBwA3LFz-~igJFH9lBYA-W2TZ~XCq993Ym3l-lrYOt7HtaaKSJwzNmEPOESQLYUfY6wboDdiI4IanvrKaQ8QwLhbLQvbo2~~vtj0bxzwtCWSBXEpk9jzbnZst53KiubPsmK-zGFRi5vN06PJy8DZ5gVlLMm-4V-d8Rnr6RGi-DhxGcSz-0teBUIIGuXIB6-tC1HRxu5mp0P-0fPLtf2HaoA-mtEGWL5FylS4LXxKkl6Em8SLILuV22g-tVlqA__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_13_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 13,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/413/image/image.jpg?Expires=1760506705&Signature=WDLLNnFDX2ILAUFlSSTSI4VdEHOp7Ua5Td3aoYOkukIgikpBHk6HKIqvZEwK~i3~uK9jDaVgxPGkNP0BqzAVyV68AcBwA3LFz-~igJFH9lBYA-W2TZ~XCq993Ym3l-lrYOt7HtaaKSJwzNmEPOESQLYUfY6wboDdiI4IanvrKaQ8QwLhbLQvbo2~~vtj0bxzwtCWSBXEpk9jzbnZst53KiubPsmK-zGFRi5vN06PJy8DZ5gVlLMm-4V-d8Rnr6RGi-DhxGcSz-0teBUIIGuXIB6-tC1HRxu5mp0P-0fPLtf2HaoA-mtEGWL5FylS4LXxKkl6Em8SLILuV22g-tVlqA__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/414/image/image.jpg?Expires=1760506705&Signature=R8kVK6hzwP4JAK7v~wC824a6hs8bf8cG-MqwbXysYzVfW86J5jGIJyZ-PSxpSeVaLk5IPJDF0R1pbKu7TBSh~obasV6fhoJ1lwPqh1H8UL6UcJEWjCVf~FnPbxFJlrqg0FMNvevBhuvhhvHApAVLpN-GT93dUeWAG5hyW5qLT~ySLRRljuhX8m5xSqsJoC4t2-1gOSSLr5nifKzTL9L1WM9-y~vJISkKsXK9eX0OENxyRqNx-K0El2gXCLAyTbG2wcbH5C~QfDl4~GPl~s7qqQEMwni8uKb9WWq8xf4aRVCCQm5S1NbTLVtAJblPsYDUcR1dCGWuKPjwBxvouBkArw__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_14_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 14,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/414/image/image.jpg?Expires=1760506705&Signature=R8kVK6hzwP4JAK7v~wC824a6hs8bf8cG-MqwbXysYzVfW86J5jGIJyZ-PSxpSeVaLk5IPJDF0R1pbKu7TBSh~obasV6fhoJ1lwPqh1H8UL6UcJEWjCVf~FnPbxFJlrqg0FMNvevBhuvhhvHApAVLpN-GT93dUeWAG5hyW5qLT~ySLRRljuhX8m5xSqsJoC4t2-1gOSSLr5nifKzTL9L1WM9-y~vJISkKsXK9eX0OENxyRqNx-K0El2gXCLAyTbG2wcbH5C~QfDl4~GPl~s7qqQEMwni8uKb9WWq8xf4aRVCCQm5S1NbTLVtAJblPsYDUcR1dCGWuKPjwBxvouBkArw__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/415/image/image.jpg?Expires=1760506705&Signature=KfvjfV8bvNybsvfsCDyZNwOM2E1VtAys268JYF5FnMOGOCe1VIb8SVXSUdWkn7CT66PQQCIE5VdOVVuI5w8RRian8Aqk3fCP5N44~JL6UcdeFg6IN9Pp-4Gekez8aPI55fNZ~G8gNi1DJRyePspgVqtASgvtv86zegUtM~ptApD8sik5K1HxshTKLnsTSaRWJT-IgMK3C5k417FwDncOYtSbQlFsMjwad6nxhXwywelUi54VNSbP4K~7wW2XMVjByt7vz1IWHW0ux2OteZU9Pj-Fk9nd1cNgs~EE2uKTZygmT4M0Ptq1swNPADhbPINkaJf9lGKqVpMvXI0MPw-NMQ__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_15_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 15,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/415/image/image.jpg?Expires=1760506705&Signature=KfvjfV8bvNybsvfsCDyZNwOM2E1VtAys268JYF5FnMOGOCe1VIb8SVXSUdWkn7CT66PQQCIE5VdOVVuI5w8RRian8Aqk3fCP5N44~JL6UcdeFg6IN9Pp-4Gekez8aPI55fNZ~G8gNi1DJRyePspgVqtASgvtv86zegUtM~ptApD8sik5K1HxshTKLnsTSaRWJT-IgMK3C5k417FwDncOYtSbQlFsMjwad6nxhXwywelUi54VNSbP4K~7wW2XMVjByt7vz1IWHW0ux2OteZU9Pj-Fk9nd1cNgs~EE2uKTZygmT4M0Ptq1swNPADhbPINkaJf9lGKqVpMvXI0MPw-NMQ__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/416/image/image.jpg?Expires=1760506705&Signature=Mk-20l2nIytcIhcTl67ibSFvrYPWZJ~DcEi-jpe4yrla4GhGqSPRmBTY~UB3naGYvrp30EHHtxaTCQhw2xHX9ItFCIElTsT-MgzAgacAXX8MMVXtY0i6oWErwNbchl2I0HCt90qritNfxbALND72-XNJDQsa71JfyS8AEWHNDcn6IBKqXN9SwXmjl9UqcmlBsLvtukWYg3TpKS87zuDISU4bI8bJmlC-9sS-FDSz9-fWmkfTtx0jwWeN6AIMZOkhIC1EibPh806I-4ZAp5rcmPixjw18o3Z8ZU9lYxblOJOIplXTeDN5XsUwWkpkx8NgDuu40pZQ0hZV12a1rq2rwA__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_16_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 16,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/416/image/image.jpg?Expires=1760506705&Signature=Mk-20l2nIytcIhcTl67ibSFvrYPWZJ~DcEi-jpe4yrla4GhGqSPRmBTY~UB3naGYvrp30EHHtxaTCQhw2xHX9ItFCIElTsT-MgzAgacAXX8MMVXtY0i6oWErwNbchl2I0HCt90qritNfxbALND72-XNJDQsa71JfyS8AEWHNDcn6IBKqXN9SwXmjl9UqcmlBsLvtukWYg3TpKS87zuDISU4bI8bJmlC-9sS-FDSz9-fWmkfTtx0jwWeN6AIMZOkhIC1EibPh806I-4ZAp5rcmPixjw18o3Z8ZU9lYxblOJOIplXTeDN5XsUwWkpkx8NgDuu40pZQ0hZV12a1rq2rwA__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/417/image/image.jpg?Expires=1760506705&Signature=jiomg5aIe28qH13Ju4F4iEsI7R8zPAgrsECqZeCneUQrPRbk3xSR75sxm02lG1f7NoogC0WnI5zAi22rco8v4FdjuGXG-md3IfJtRIToPufh6L7JBUf9zBFR6rVhljmArKaOL0lJxGCaFMI4J5n2VfcVU3IIJc8ablbTIoRkO~SdCevl0XK~GygTBVH3cR5h8OY8we~dLYYEEODJ3bWVgBh0kRAV6gy620K7ljGqFwOLUnahL6uoRLx8wr0ug-5-vH~KgAt5fHVs11WuJIUD0zFxSrZQ4NYdPzvn3RsDmW7fvcjK8uCe9ULcTYE9rgYGlc~otSC0uqxoXp4196WnQA__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_17_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 17,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/417/image/image.jpg?Expires=1760506705&Signature=jiomg5aIe28qH13Ju4F4iEsI7R8zPAgrsECqZeCneUQrPRbk3xSR75sxm02lG1f7NoogC0WnI5zAi22rco8v4FdjuGXG-md3IfJtRIToPufh6L7JBUf9zBFR6rVhljmArKaOL0lJxGCaFMI4J5n2VfcVU3IIJc8ablbTIoRkO~SdCevl0XK~GygTBVH3cR5h8OY8we~dLYYEEODJ3bWVgBh0kRAV6gy620K7ljGqFwOLUnahL6uoRLx8wr0ug-5-vH~KgAt5fHVs11WuJIUD0zFxSrZQ4NYdPzvn3RsDmW7fvcjK8uCe9ULcTYE9rgYGlc~otSC0uqxoXp4196WnQA__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/418/image/image.jpg?Expires=1760506705&Signature=RVhYbWKme0CarNBMLbgKHPoJu0Ddwnxiqh93BXlPGgjsJZdiXOJNSCU9KYCj6yTJhnjnRAizLZYndLyYcmN2TC-3zLqghun7qSpyqwLVKZk4XZyDH6lcfa8PhrvXGgvJDyyd3Z-WMEIprAh5zl1ORnQC077l7otfNA6kYSB5WN4LHkDwMXXRAqEYrG~yi0uZ12e5e4BxvrUGuXRS9dKFCLWh9cKbePDSYw6ixul7F3S7LI9X30Ju0WLveLbV16HxIKu~4s1NsM5abHzuNz5xg8WyUUy39DDl2SiVG0OkCJ~95Zs11QzNlC2mokhMg9UlLur7lYN1mK4TVGwun2vAMg__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_18_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 18,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/418/image/image.jpg?Expires=1760506705&Signature=RVhYbWKme0CarNBMLbgKHPoJu0Ddwnxiqh93BXlPGgjsJZdiXOJNSCU9KYCj6yTJhnjnRAizLZYndLyYcmN2TC-3zLqghun7qSpyqwLVKZk4XZyDH6lcfa8PhrvXGgvJDyyd3Z-WMEIprAh5zl1ORnQC077l7otfNA6kYSB5WN4LHkDwMXXRAqEYrG~yi0uZ12e5e4BxvrUGuXRS9dKFCLWh9cKbePDSYw6ixul7F3S7LI9X30Ju0WLveLbV16HxIKu~4s1NsM5abHzuNz5xg8WyUUy39DDl2SiVG0OkCJ~95Zs11QzNlC2mokhMg9UlLur7lYN1mK4TVGwun2vAMg__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/419/image/image.jpg?Expires=1760506705&Signature=YStAdVQzG6Tz9xXBe0-6O8aninOGc9Z2nbW5YXhF15guqj9ehvK2Ev3CV13uHHwa4jJN6x0g3BKBX~Y3~TfkIvOlxKKW358A9SAOjWBD8OSvhJMnd8vqYjiLFh3lD9cY~77VItkKQwxKIlapklpDxJJVWgMIDJXfTrgtcq4LkDBN~5eg3qDA2VAAQ5mIdGYmH2j5etXyEKfh4vswxk-edJz0AojjxC-6sqORLZ64-OJk6gyF~BAlm24xz3P5ZDsr6UuN1dbIUA-WOvebG8czBt97bP-f81jXS~OEwd744V9XMAKF1JNOw8oYeReAy9vU2VZcQDbE0Kj4irNYotXLRg__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_19_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 19,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/419/image/image.jpg?Expires=1760506705&Signature=YStAdVQzG6Tz9xXBe0-6O8aninOGc9Z2nbW5YXhF15guqj9ehvK2Ev3CV13uHHwa4jJN6x0g3BKBX~Y3~TfkIvOlxKKW358A9SAOjWBD8OSvhJMnd8vqYjiLFh3lD9cY~77VItkKQwxKIlapklpDxJJVWgMIDJXfTrgtcq4LkDBN~5eg3qDA2VAAQ5mIdGYmH2j5etXyEKfh4vswxk-edJz0AojjxC-6sqORLZ64-OJk6gyF~BAlm24xz3P5ZDsr6UuN1dbIUA-WOvebG8czBt97bP-f81jXS~OEwd744V9XMAKF1JNOw8oYeReAy9vU2VZcQDbE0Kj4irNYotXLRg__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/420/image/image.jpg?Expires=1760506705&Signature=wz3xJOWMH-C85~Fu5a-TPZJWgSR3LYtt8Kb9G2B~6jyVMm3PgsE9RJ7K64aBCAMmWSsf~3v9oqFgbsPTfVqI~m5ksWF9JHm3~vDgKPE-UgIQwQaDfCkLNhUmsCpdiYSyoj74zJP-0~sUAvpDLXV4Z-oJahuuhbmYbUsNALG0MhirqlTsDn4nL6FUKZ5yi1nOnMG~dvyDS5BKpx4rhZfFWq2nCt5BEHLwOwvPnySDAPDvKhlLiLbSrLjc5GIUNgXFVsKqKuL~BIg5pi~9Rl6KZHfPZeyjTel7kkO~9k6Hj010fLosQGXWU01iP4djGo0Jmubkbz36JIkYc9vFLDw0CA__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_20_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 20,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/420/image/image.jpg?Expires=1760506705&Signature=wz3xJOWMH-C85~Fu5a-TPZJWgSR3LYtt8Kb9G2B~6jyVMm3PgsE9RJ7K64aBCAMmWSsf~3v9oqFgbsPTfVqI~m5ksWF9JHm3~vDgKPE-UgIQwQaDfCkLNhUmsCpdiYSyoj74zJP-0~sUAvpDLXV4Z-oJahuuhbmYbUsNALG0MhirqlTsDn4nL6FUKZ5yi1nOnMG~dvyDS5BKpx4rhZfFWq2nCt5BEHLwOwvPnySDAPDvKhlLiLbSrLjc5GIUNgXFVsKqKuL~BIg5pi~9Rl6KZHfPZeyjTel7kkO~9k6Hj010fLosQGXWU01iP4djGo0Jmubkbz36JIkYc9vFLDw0CA__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/421/image/image.jpg?Expires=1760506705&Signature=B33Y0oEpAWoYY2mdQfbVOa9hOUea5zEqvmoSN5CPnZalCFfufZsAel-gpXm5zQVR341L6qEhaU4nzQo0~D0klWBfijwEaOMcXk~WNbQ-r0Ylf8e8mvIw6oo5-fF~EkTnFqbhCulPdMpEb0oQFE~2A4YBLN36D7P8A4m-RrDKcru7WHTUVmXDcuE4X~kvoiu1~eHl~MyCz232T6i2R2GTVi4JRRC-yrGdpWsKQjr7ZCg39wdQg0xjO0TwTNcVmipfiIJAchuII688MgB3HoMnyG0bsQAcqyXwhoWdiIR05Fu6~jVeq2RrU4Ba6-caRZ0CtHm6TuvABDkSI5e9G2aBAQ__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_21_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 21,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/421/image/image.jpg?Expires=1760506705&Signature=B33Y0oEpAWoYY2mdQfbVOa9hOUea5zEqvmoSN5CPnZalCFfufZsAel-gpXm5zQVR341L6qEhaU4nzQo0~D0klWBfijwEaOMcXk~WNbQ-r0Ylf8e8mvIw6oo5-fF~EkTnFqbhCulPdMpEb0oQFE~2A4YBLN36D7P8A4m-RrDKcru7WHTUVmXDcuE4X~kvoiu1~eHl~MyCz232T6i2R2GTVi4JRRC-yrGdpWsKQjr7ZCg39wdQg0xjO0TwTNcVmipfiIJAchuII688MgB3HoMnyG0bsQAcqyXwhoWdiIR05Fu6~jVeq2RrU4Ba6-caRZ0CtHm6TuvABDkSI5e9G2aBAQ__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/422/image/image.jpg?Expires=1760506705&Signature=JRB97V5RTTilAQT-jaY9Nr~m7kirCU8YInE8Rc66a6L0Ykd93KASOKj9anpUu2lcpz8VdQxKLDuYekDTAAMGX0m4zTDEvj5elydP1e2Dv~pgE8K1SEBwN-nor14yYxZugRLOZuigz5eo~3Z1EkSxSU4~6-Io8p6rVdklFiB14uSsT2htvu87hIh2h~1pnxFpW04N3mbjivZHyPpc5YGOAVcrSv~HrX4ZS-wjUVdkRzS~thArtiWvKSWqv5e8iBWvKK0kpfviwyEtbgJv6xqKPJ3mV2yV0mtY9RTt5s64CqJpjrQwhW7QCOAUmNa5X6MgtY3PZO~Yj6oLzYzN2PN2Kw__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_22_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 22,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/422/image/image.jpg?Expires=1760506705&Signature=JRB97V5RTTilAQT-jaY9Nr~m7kirCU8YInE8Rc66a6L0Ykd93KASOKj9anpUu2lcpz8VdQxKLDuYekDTAAMGX0m4zTDEvj5elydP1e2Dv~pgE8K1SEBwN-nor14yYxZugRLOZuigz5eo~3Z1EkSxSU4~6-Io8p6rVdklFiB14uSsT2htvu87hIh2h~1pnxFpW04N3mbjivZHyPpc5YGOAVcrSv~HrX4ZS-wjUVdkRzS~thArtiWvKSWqv5e8iBWvKK0kpfviwyEtbgJv6xqKPJ3mV2yV0mtY9RTt5s64CqJpjrQwhW7QCOAUmNa5X6MgtY3PZO~Yj6oLzYzN2PN2Kw__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/423/image/image.jpg?Expires=1760506705&Signature=w0WtJllsbAouzU5Kk~Gx5tdkhrD5eKjNyo6iflBSQlUAQw1kQu9TuQEC47fejWoa0MDc34hJguE6RJVsDj9gkn1Uja8T-XPMQ5948bg~A4LhBGMV6vpsCpkgS7f5bK9wn0kXjVWtLKs~jW7ULwJ4V4GXYQVpAxYCYWGlVHuIrOpALmSMhq7hW0eYUWeKtD5G9cThF-~dWfvS6XlLYH7M7-NFpMQkp7QDBQZeFUJfmtJJknyqscva8dBxx5cvcv1Xums3uEbVngScrGRasXINjD1D2ctRDEafI60O-Zc8EeYNYiYjQdhKV6Ev0pFm4fhrIjdFBdSNf954Jnw8uFCTCQ__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_23_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 23,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/423/image/image.jpg?Expires=1760506705&Signature=w0WtJllsbAouzU5Kk~Gx5tdkhrD5eKjNyo6iflBSQlUAQw1kQu9TuQEC47fejWoa0MDc34hJguE6RJVsDj9gkn1Uja8T-XPMQ5948bg~A4LhBGMV6vpsCpkgS7f5bK9wn0kXjVWtLKs~jW7ULwJ4V4GXYQVpAxYCYWGlVHuIrOpALmSMhq7hW0eYUWeKtD5G9cThF-~dWfvS6XlLYH7M7-NFpMQkp7QDBQZeFUJfmtJJknyqscva8dBxx5cvcv1Xums3uEbVngScrGRasXINjD1D2ctRDEafI60O-Zc8EeYNYiYjQdhKV6Ev0pFm4fhrIjdFBdSNf954Jnw8uFCTCQ__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/424/image/image.jpg?Expires=1760506705&Signature=tmePz6n05xcDxvzBNmGtczONRahWpKx-9HmDNsJNMlT62FD2hBlwU1FQ0irFLPbfnJ~ztLZf2CFdGcMQA4k08TKmX~4-GPBkcl8lerCD8VNEwq3nGhwZQHF3zMLVYVbhcuUjQJZBqy2gq~kdkumIrTxe-6xSg2djRA~47rh0uz1DD3s64TNEHzgWBKiiPMcwm0n-HdySotPXv07REDutSBdYaTWiKCDEV0avxW0yf55wHO1GhXbw~W528cGA3z77uNgyjd67d6jOCtgcvLDoYJoQ5SNO9WaFdT4PCaPpTgtporPbjeLr9GqWiWd1UoPlp9-QOj4SOElamodeuCpCTw__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_24_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 24,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/424/image/image.jpg?Expires=1760506705&Signature=tmePz6n05xcDxvzBNmGtczONRahWpKx-9HmDNsJNMlT62FD2hBlwU1FQ0irFLPbfnJ~ztLZf2CFdGcMQA4k08TKmX~4-GPBkcl8lerCD8VNEwq3nGhwZQHF3zMLVYVbhcuUjQJZBqy2gq~kdkumIrTxe-6xSg2djRA~47rh0uz1DD3s64TNEHzgWBKiiPMcwm0n-HdySotPXv07REDutSBdYaTWiKCDEV0avxW0yf55wHO1GhXbw~W528cGA3z77uNgyjd67d6jOCtgcvLDoYJoQ5SNO9WaFdT4PCaPpTgtporPbjeLr9GqWiWd1UoPlp9-QOj4SOElamodeuCpCTw__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/425/image/image.jpg?Expires=1760506705&Signature=jEvibtCsFk6ImmXSdONBmgnaHKG1o59oZ5r-1RhdcloqpsDq2MEcBoeVMO45a-04c5II51agVOUzgvrNkp3IDyxm3BXXP-cwNBf4Z-MdcAZDaKC9cQ5GLEM30QFXOEU4kRiix0YmfvTPmi47G7MIK08Ud7oOkR6BMqB5JzfETsq9UiU6hTc594n1iD1TtUY1Stq~fj1aKnn3Brf1Q3pgzchTGxNl-kmYohoJyHdYC7tgdwVKFqy6iVWpW7Upj0~Z4ZUIeMiZX89MsTvccxq22mra8r5AzUwi2FOESZDRf8VDvxEftTf7fA0UT8P36gG1aobsVLZrKDe21xB4rpLV~g__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_25_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 25,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/425/image/image.jpg?Expires=1760506705&Signature=jEvibtCsFk6ImmXSdONBmgnaHKG1o59oZ5r-1RhdcloqpsDq2MEcBoeVMO45a-04c5II51agVOUzgvrNkp3IDyxm3BXXP-cwNBf4Z-MdcAZDaKC9cQ5GLEM30QFXOEU4kRiix0YmfvTPmi47G7MIK08Ud7oOkR6BMqB5JzfETsq9UiU6hTc594n1iD1TtUY1Stq~fj1aKnn3Brf1Q3pgzchTGxNl-kmYohoJyHdYC7tgdwVKFqy6iVWpW7Upj0~Z4ZUIeMiZX89MsTvccxq22mra8r5AzUwi2FOESZDRf8VDvxEftTf7fA0UT8P36gG1aobsVLZrKDe21xB4rpLV~g__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/426/image/image.jpg?Expires=1760506705&Signature=hhedr8JXeIckHrHeeVc0hy3Znol3Ids~gv2iFFA-KtyLK8mI~l~4MX03kV5SjzfDni6xpR8RQsjIaYGlXgTbQPlURi9paK91ii0ra5zrcTp~ec7-zuh8UITYwZuKetmtd-FfdLKESKZ8OCcHZQ0C0xzjI5FMnralen3BwEC~tkAX6MeBX-ljNd~jkPFgLaE0~zE0dPEkGUEiwb1E-2DL8~nNKe2UGYg3RYT2zKJoZCp1Q73XU-lkafmphTfzMPb1Bfkej3FZBYUXaSxPC3lIOK~p3nTUzql0ARe5NXztpcbjgw7HZytmkM8xjTqO01nOxo4tbgx~JwPl7JLpQvIiHQ__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_26_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 26,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/426/image/image.jpg?Expires=1760506705&Signature=hhedr8JXeIckHrHeeVc0hy3Znol3Ids~gv2iFFA-KtyLK8mI~l~4MX03kV5SjzfDni6xpR8RQsjIaYGlXgTbQPlURi9paK91ii0ra5zrcTp~ec7-zuh8UITYwZuKetmtd-FfdLKESKZ8OCcHZQ0C0xzjI5FMnralen3BwEC~tkAX6MeBX-ljNd~jkPFgLaE0~zE0dPEkGUEiwb1E-2DL8~nNKe2UGYg3RYT2zKJoZCp1Q73XU-lkafmphTfzMPb1Bfkej3FZBYUXaSxPC3lIOK~p3nTUzql0ARe5NXztpcbjgw7HZytmkM8xjTqO01nOxo4tbgx~JwPl7JLpQvIiHQ__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/427/image/image.jpg?Expires=1760506705&Signature=U6a1EOSWTCY-ZtWEOiU12N7ZStE~~4ZTyxtne4i2YhA9ahUh8INEDrL9KNDxQObTPVs-uNLyPCzcp-yru8gWNdyM36ArA3WTa1aXt~q6l3z2iEqjcEk~Ecd0X73P4gY5O5ciiTWvuaYMb7Cuagk2VzeYMUdzy2qXIADVkFCQ5aNhkz2KBjj-2Si4Vg~F5uGqsEcaHZgMuAMbIU1wR25uzGHrJ~oFumknufIDi-ASlUTB3ZeI6YsohgzYrFJeFnMeVryMihM1jlzrmQL1lVhIk1LjSzMBuW09Tdra~8HpxL-O6cOnTzD-2nR5jdzSNmkQnNy22dxYCpHhXtwHKmLYQQ__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_27_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 27,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/427/image/image.jpg?Expires=1760506705&Signature=U6a1EOSWTCY-ZtWEOiU12N7ZStE~~4ZTyxtne4i2YhA9ahUh8INEDrL9KNDxQObTPVs-uNLyPCzcp-yru8gWNdyM36ArA3WTa1aXt~q6l3z2iEqjcEk~Ecd0X73P4gY5O5ciiTWvuaYMb7Cuagk2VzeYMUdzy2qXIADVkFCQ5aNhkz2KBjj-2Si4Vg~F5uGqsEcaHZgMuAMbIU1wR25uzGHrJ~oFumknufIDi-ASlUTB3ZeI6YsohgzYrFJeFnMeVryMihM1jlzrmQL1lVhIk1LjSzMBuW09Tdra~8HpxL-O6cOnTzD-2nR5jdzSNmkQnNy22dxYCpHhXtwHKmLYQQ__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/428/image/image.jpg?Expires=1760506705&Signature=hb73pHD8Ta0XjKV8am4JEYh0lPRMS49RGbeEK4B6E~1TJkcrqWmqDhctJYBkZxWB8lXO7VfpmzjAeyCqV1AEjku~r0J7bOJ30odXENp6A59La0WFANAtoLPsKyuUgsT1jawFjKF-HV5DxIuoFfEbYLmEIaaWM1nA4TeMN~9Kh0FT9sBb2PqutjDLowZETe47FrrWnMXX0NZ3XiFPRpM-lbYM8nk9MRe6g7B4m~HPInqP0mWrTRTw1Eu8nYJo8Kum87BBZl9nl5Kf6QPA73K2Kg8F3yfks9OarGUuzc4ZSGIuki~fY~3b-nIESSOP-qpE13xCuJwHzdu8xKo7HPHt-g__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_28_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 28,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/428/image/image.jpg?Expires=1760506705&Signature=hb73pHD8Ta0XjKV8am4JEYh0lPRMS49RGbeEK4B6E~1TJkcrqWmqDhctJYBkZxWB8lXO7VfpmzjAeyCqV1AEjku~r0J7bOJ30odXENp6A59La0WFANAtoLPsKyuUgsT1jawFjKF-HV5DxIuoFfEbYLmEIaaWM1nA4TeMN~9Kh0FT9sBb2PqutjDLowZETe47FrrWnMXX0NZ3XiFPRpM-lbYM8nk9MRe6g7B4m~HPInqP0mWrTRTw1Eu8nYJo8Kum87BBZl9nl5Kf6QPA73K2Kg8F3yfks9OarGUuzc4ZSGIuki~fY~3b-nIESSOP-qpE13xCuJwHzdu8xKo7HPHt-g__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/429/image/image.jpg?Expires=1760506705&Signature=tw8LgZBJKzlZIASHBDCCHGJIZ38Vy-9pDUOAq~Ayz~R4AfMe8zvGVTv7tFH-OWFpB5N-Yem25X3jPyG15-8dQqW2iL8arZwP6LOmDQmdWS2wII~948x5~X4h94pKYZg-zkTjPdoB41zROI1wpDTkAInL2vvTyJnr~g5HpGMg5q2gynoSff8Db20bbxtdLkhyt4VcAMIQu59KT2IybFpJtHk~AQuAAhxORL5-lBdV6qIyxHEytSB3JuI6eOrmiDoqIPsParWHJ57UCL-YaUAebLrmPleuitySWxKPfAw9gCfKpjfp4VZS9tGf5I7fmi5z3DV2MJAUbKYNOz0K98bmOw__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_29_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 29,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/429/image/image.jpg?Expires=1760506705&Signature=tw8LgZBJKzlZIASHBDCCHGJIZ38Vy-9pDUOAq~Ayz~R4AfMe8zvGVTv7tFH-OWFpB5N-Yem25X3jPyG15-8dQqW2iL8arZwP6LOmDQmdWS2wII~948x5~X4h94pKYZg-zkTjPdoB41zROI1wpDTkAInL2vvTyJnr~g5HpGMg5q2gynoSff8Db20bbxtdLkhyt4VcAMIQu59KT2IybFpJtHk~AQuAAhxORL5-lBdV6qIyxHEytSB3JuI6eOrmiDoqIPsParWHJ57UCL-YaUAebLrmPleuitySWxKPfAw9gCfKpjfp4VZS9tGf5I7fmi5z3DV2MJAUbKYNOz0K98bmOw__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/430/image/image.jpg?Expires=1760506705&Signature=Co0V88Hok3oNtuqYnfJm4BL~vlL5eTNLEjA-97dX~2S3wX9~9wUEHCWveC99K8oKyDtiaPLOdImEi-HmUKT2SqwMS5VoU3TVJbYP8FbAIUKhJI-oujLpd0A0zkaoPOvXfhx~BuGV9bBKvNUXcrBwE-zkmg2poVaID8BwD8LbK~mS1eTwR4jcXSm9ojLXCeBnNNHA~wQK7Awp~FJyOc6hS4Np6c9vvPuDP60JBcU9WtBMh-Y-z0J~QiVo5h0TLHGiSfoAhgGPQuvvL5NsPCxTqnuLX000r9V2HBmBpuKFLox7VOX7oNyacnsCGdYm120mwuvtGha7bnGGaeeyCASqEQ__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_30_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 30,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/430/image/image.jpg?Expires=1760506705&Signature=Co0V88Hok3oNtuqYnfJm4BL~vlL5eTNLEjA-97dX~2S3wX9~9wUEHCWveC99K8oKyDtiaPLOdImEi-HmUKT2SqwMS5VoU3TVJbYP8FbAIUKhJI-oujLpd0A0zkaoPOvXfhx~BuGV9bBKvNUXcrBwE-zkmg2poVaID8BwD8LbK~mS1eTwR4jcXSm9ojLXCeBnNNHA~wQK7Awp~FJyOc6hS4Np6c9vvPuDP60JBcU9WtBMh-Y-z0J~QiVo5h0TLHGiSfoAhgGPQuvvL5NsPCxTqnuLX000r9V2HBmBpuKFLox7VOX7oNyacnsCGdYm120mwuvtGha7bnGGaeeyCASqEQ__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/431/image/image.jpg?Expires=1760506705&Signature=K9~fvohE-P1pnvBQ58ij3lyc8ZcTDvdySqFOMssuPHQrvurdiHLdPHBV1KhanLWnkbEBJUr2gwa1jSw3WZ1CFR1tqljUZzt-6raxrHxrWAKnkkZldmICXyxTdKi-bVuxXsPJY6QJYQIWN50Q8h2Y3ch8QoI-9jdTrkAsIhqx9B9pzN9GbjkbYiefmOGUATD7I5Mt3Vd2t~L0VXpjSOw418rkPS00tEJOenY93NRTLGooN2iDOXpT9dnXsJ4CNBEngjFmpF5Amdwa-XOt-91OcwdX0qItIlS7875DKlx-WG0F3b-5KoL2WMtyrN383SdSAD9mtIm4QOUJ7pP6xljsKw__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_31_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 31,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/431/image/image.jpg?Expires=1760506705&Signature=K9~fvohE-P1pnvBQ58ij3lyc8ZcTDvdySqFOMssuPHQrvurdiHLdPHBV1KhanLWnkbEBJUr2gwa1jSw3WZ1CFR1tqljUZzt-6raxrHxrWAKnkkZldmICXyxTdKi-bVuxXsPJY6QJYQIWN50Q8h2Y3ch8QoI-9jdTrkAsIhqx9B9pzN9GbjkbYiefmOGUATD7I5Mt3Vd2t~L0VXpjSOw418rkPS00tEJOenY93NRTLGooN2iDOXpT9dnXsJ4CNBEngjFmpF5Amdwa-XOt-91OcwdX0qItIlS7875DKlx-WG0F3b-5KoL2WMtyrN383SdSAD9mtIm4QOUJ7pP6xljsKw__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/432/image/image.jpg?Expires=1760506705&Signature=yuGe8yCVJsAvK3Yb4Im6QqJVlSXwkszJvfQafnTSzttJO8IWVYIbvjwioRf49zXDYwNMt9BD2GAIXes~0o9GL7cvZ~5WgZvynjVQlTp6J40yhODXO6VZGbNy4dl5xuBx0LGZ4aJVzuqJvx~d2CSbIzHOY6mC~0L9gBuT~7n-f4J53lampZ-x3sFiMln33feZdb8f3mOI~DyzZTjgspB7VjjQHImgWS9ujr~sek6HuxKvLmx0y2MvY1Plh0tRwQOitfp95xtXLMJQGF~CwVPKZCt6yJhR9Q0gJJvyXaJPIhkYLY2TwoF2wy7k~kGdIDNGWsCINrp-exXjn6l7b9fOvw__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_32_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 32,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/432/image/image.jpg?Expires=1760506705&Signature=yuGe8yCVJsAvK3Yb4Im6QqJVlSXwkszJvfQafnTSzttJO8IWVYIbvjwioRf49zXDYwNMt9BD2GAIXes~0o9GL7cvZ~5WgZvynjVQlTp6J40yhODXO6VZGbNy4dl5xuBx0LGZ4aJVzuqJvx~d2CSbIzHOY6mC~0L9gBuT~7n-f4J53lampZ-x3sFiMln33feZdb8f3mOI~DyzZTjgspB7VjjQHImgWS9ujr~sek6HuxKvLmx0y2MvY1Plh0tRwQOitfp95xtXLMJQGF~CwVPKZCt6yJhR9Q0gJJvyXaJPIhkYLY2TwoF2wy7k~kGdIDNGWsCINrp-exXjn6l7b9fOvw__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/433/image/image.jpg?Expires=1760506705&Signature=BTTRRSH28D9n2l84mzHacweNaZM9wZ9krsa6IG7YcmfBKtLZ-jD70L9BQ55GTUqG6pRUSd8Kw29Ia7pM2~2qoL4VQqWhapdhC9gtrRIZcrDbVeWykUSeTtNPqle3EuHiXxwNZGz8teWwGQlqp2iogU-tLwVw1pl1tulYkVNnw6yDnvRukNw1cucRCyOMg6uiKHphEC1s4FXy603qZlCYzg39sRsJxDd5~OAULMWluW8PkEoODryOLOP2i2Nnih9CXUl-37u-aZUzv3DDq5f~v9q5KBo-A1QEVemS~byek5WED8hfSNymuPa-jQvxwAjIMZjFZdxXetEYMjx1e3vb9A__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_33_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 33,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/433/image/image.jpg?Expires=1760506705&Signature=BTTRRSH28D9n2l84mzHacweNaZM9wZ9krsa6IG7YcmfBKtLZ-jD70L9BQ55GTUqG6pRUSd8Kw29Ia7pM2~2qoL4VQqWhapdhC9gtrRIZcrDbVeWykUSeTtNPqle3EuHiXxwNZGz8teWwGQlqp2iogU-tLwVw1pl1tulYkVNnw6yDnvRukNw1cucRCyOMg6uiKHphEC1s4FXy603qZlCYzg39sRsJxDd5~OAULMWluW8PkEoODryOLOP2i2Nnih9CXUl-37u-aZUzv3DDq5f~v9q5KBo-A1QEVemS~byek5WED8hfSNymuPa-jQvxwAjIMZjFZdxXetEYMjx1e3vb9A__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/434/image/image.jpg?Expires=1760506705&Signature=hhOVYdeI5nti2YWP3gj9MH61Scnd7Y5BLPQXAexJtBC6s3xlgDFWjYQC~zkQVmeSQl4-zCjVRveMt4Sui1ICfLum-G5VKzNdcK7TAjch6JfRjUgSclBjvY~5hjGpbO3VrkPwlvUZWBDU6Hysx6eeqBYAZAGtd1tsyEWAEXTn5eFsBQCjd4of4eY-3wUxNdqnUCkZK3zBwIfdhur63~jVXMJ~EeOMz70xwFKNhC8YfOqBnUDICNX0Yd3MrExKI-iNMPz3H-ORy0azbIRlcbIOqJ1TFF-okdCC7cpmMEeU7e-AN8TTOlNJwyzRLQgX0TsYatySE0gqP8vOq~5XIQW7PQ__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_34_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 34,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/434/image/image.jpg?Expires=1760506705&Signature=hhOVYdeI5nti2YWP3gj9MH61Scnd7Y5BLPQXAexJtBC6s3xlgDFWjYQC~zkQVmeSQl4-zCjVRveMt4Sui1ICfLum-G5VKzNdcK7TAjch6JfRjUgSclBjvY~5hjGpbO3VrkPwlvUZWBDU6Hysx6eeqBYAZAGtd1tsyEWAEXTn5eFsBQCjd4of4eY-3wUxNdqnUCkZK3zBwIfdhur63~jVXMJ~EeOMz70xwFKNhC8YfOqBnUDICNX0Yd3MrExKI-iNMPz3H-ORy0azbIRlcbIOqJ1TFF-okdCC7cpmMEeU7e-AN8TTOlNJwyzRLQgX0TsYatySE0gqP8vOq~5XIQW7PQ__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/435/image/image.jpg?Expires=1760506705&Signature=i840P7dUhJj7vhe0wkdu9kPi-DtI1yXJPvFpScbQApL8ObycZHbbwRSTRxTrQA91l4oYvNu0zYWIlmIpZG-~M-g6x-fT-ZuyEXnfZLN6REiZx~JhQclgFlGYKjdmEhjPsTHo8d8fms2i-vs~xX63E7aTYglY9wpabExqmHYAKMt0Y0r2gPtewjK4-hqxtWj-Pr9tfwOHofvlgE078G7eN94saSirH6JdGnLy3umLvNFb~NAqo1w-oZF3PS~p-jDU2-e8nkO5E2ylS-Vd5l8C~0~gkPhIQQe3CBIDg~7vcaCtnN5cKnX~NfWcG36hHem37te~0LP1CJ1yvHHT4~Gm0Q__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_35_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 35,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/435/image/image.jpg?Expires=1760506705&Signature=i840P7dUhJj7vhe0wkdu9kPi-DtI1yXJPvFpScbQApL8ObycZHbbwRSTRxTrQA91l4oYvNu0zYWIlmIpZG-~M-g6x-fT-ZuyEXnfZLN6REiZx~JhQclgFlGYKjdmEhjPsTHo8d8fms2i-vs~xX63E7aTYglY9wpabExqmHYAKMt0Y0r2gPtewjK4-hqxtWj-Pr9tfwOHofvlgE078G7eN94saSirH6JdGnLy3umLvNFb~NAqo1w-oZF3PS~p-jDU2-e8nkO5E2ylS-Vd5l8C~0~gkPhIQQe3CBIDg~7vcaCtnN5cKnX~NfWcG36hHem37te~0LP1CJ1yvHHT4~Gm0Q__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/436/image/image.jpg?Expires=1760506705&Signature=eu0He2RHmJkO717vSBo1HZ7Z7QL1-~CcvDKE1U6w69Zxafm2KZ7lYGdROplaj509mL48PkeASjaUB9-dlPIzUndthnAZ9ODYbAR2DG6dj3lpFYz8Os9vCYB8IAN2oCJ8jubdM1xjJ-hPDBa4y2QueV8UKVbF0-FyNjjHp68c3IakzccUJmKFv6c5mjAujKOLnqmWOpdsv1IJMdI9Kw3AqK9S1Tkr1atYNH0MA6IF7DCJHTOK1r4os2~-H2GrH71tdZdhyonYkNInKb242bFfYsmH3-1uMnd6fVFfBDynTQ6ATOc2mIPE0OD266b6lorQMtpjPTlrTvt-TD-ZXWhzlg__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_36_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 36,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/436/image/image.jpg?Expires=1760506705&Signature=eu0He2RHmJkO717vSBo1HZ7Z7QL1-~CcvDKE1U6w69Zxafm2KZ7lYGdROplaj509mL48PkeASjaUB9-dlPIzUndthnAZ9ODYbAR2DG6dj3lpFYz8Os9vCYB8IAN2oCJ8jubdM1xjJ-hPDBa4y2QueV8UKVbF0-FyNjjHp68c3IakzccUJmKFv6c5mjAujKOLnqmWOpdsv1IJMdI9Kw3AqK9S1Tkr1atYNH0MA6IF7DCJHTOK1r4os2~-H2GrH71tdZdhyonYkNInKb242bFfYsmH3-1uMnd6fVFfBDynTQ6ATOc2mIPE0OD266b6lorQMtpjPTlrTvt-TD-ZXWhzlg__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/437/image/image.jpg?Expires=1760506705&Signature=kCwM-OKedK22SPuH~59d0mqzCzLILZ8~woxO4JdUDfsnALneJ77PxRA3534djLyDPGZiesDn5kOcFguXKSHm45q~OmjJfzo4f8bU5LtOKk4tb8FunkJGAYmcQ2eeUBHYFaiRwf9PBn5Xkgqq8nKWapyaaMOVs1dBpKYlfG3wPgc~nmM5eqNS3QOnOl9j01a~8BJbmzHMPgI8MVaLSEzFvUS2RpDYb-rP1UxMmEYnmGjjWGEFV6z7zfH4gJ6t8~8qsvFrtEA6glyJ0fkfgwxB2Sp~RW2xRgvAHSpMN-mABpHtZHMmZQT2yVLWssJYDAwZS~O5e3TPobV9ByiHQ0Ny0g__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_37_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 37,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/437/image/image.jpg?Expires=1760506705&Signature=kCwM-OKedK22SPuH~59d0mqzCzLILZ8~woxO4JdUDfsnALneJ77PxRA3534djLyDPGZiesDn5kOcFguXKSHm45q~OmjJfzo4f8bU5LtOKk4tb8FunkJGAYmcQ2eeUBHYFaiRwf9PBn5Xkgqq8nKWapyaaMOVs1dBpKYlfG3wPgc~nmM5eqNS3QOnOl9j01a~8BJbmzHMPgI8MVaLSEzFvUS2RpDYb-rP1UxMmEYnmGjjWGEFV6z7zfH4gJ6t8~8qsvFrtEA6glyJ0fkfgwxB2Sp~RW2xRgvAHSpMN-mABpHtZHMmZQT2yVLWssJYDAwZS~O5e3TPobV9ByiHQ0Ny0g__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/438/image/image.jpg?Expires=1760506705&Signature=L9twqcKwCbcW6DsfJzQgQVVcMAqiS0JiM~YAH1Mz1~4HMibI-omXxqf4v9pipySjr8a9fm8wppn6OzUpk0H4KeJG8seAkxGbm5PF3WnixCjEgChAMvpgejNwy2U4bcjC-NXTvT4g33OpQM6yztBTa-zGS1Ndc9J~DHII0ETUAXFVrdqlxR5Weo59Y2Hj-0cXaKWScWRVzrsUPBIDj~aNPxfgCDpPn9S07J6KiGF4sy3hb3VrDHrt9b3WG0Vih2CUfwF~lcoj8tASeEldiSYYXROQqYkmpk~lwNHj9DjdCUNv6NX8BP9~C5513myvRdktIjJwPLIqQLa~c4D-M5YMew__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_38_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 38,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/438/image/image.jpg?Expires=1760506705&Signature=L9twqcKwCbcW6DsfJzQgQVVcMAqiS0JiM~YAH1Mz1~4HMibI-omXxqf4v9pipySjr8a9fm8wppn6OzUpk0H4KeJG8seAkxGbm5PF3WnixCjEgChAMvpgejNwy2U4bcjC-NXTvT4g33OpQM6yztBTa-zGS1Ndc9J~DHII0ETUAXFVrdqlxR5Weo59Y2Hj-0cXaKWScWRVzrsUPBIDj~aNPxfgCDpPn9S07J6KiGF4sy3hb3VrDHrt9b3WG0Vih2CUfwF~lcoj8tASeEldiSYYXROQqYkmpk~lwNHj9DjdCUNv6NX8BP9~C5513myvRdktIjJwPLIqQLa~c4D-M5YMew__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/439/image/image.jpg?Expires=1760506705&Signature=a3-HXSvH-lrXSgagkM6uW2X0JFV6nYDiEJAw1moXzK-ictvMsSMIVQTp1XUx9f-4aXWlAlW5WFJSZWc64kAU8rjz-bjxC8KtDwlGVGtZlKt~9VTziUyuIqvAZAqbh3VAhATgKjQ4FFseEzdZFd2Mn9ng~7ncfRiWWQIuJAxTww3Wey3ClcVAoVosiEgnXVTp97deDDiZ0ZeT-f05QMjaVaWtiwni7F4Dv7RtTimN85ZCMy6qpGnIK7S10SImNywT~Y1rpmAGKrBdglSNQbpFRYjIMKbPsRg24GrjZln08GZKdpuIvg6xzkxCWNt-gaQsNXiJ-OkecFG8ssFOztieRw__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_39_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 39,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/439/image/image.jpg?Expires=1760506705&Signature=a3-HXSvH-lrXSgagkM6uW2X0JFV6nYDiEJAw1moXzK-ictvMsSMIVQTp1XUx9f-4aXWlAlW5WFJSZWc64kAU8rjz-bjxC8KtDwlGVGtZlKt~9VTziUyuIqvAZAqbh3VAhATgKjQ4FFseEzdZFd2Mn9ng~7ncfRiWWQIuJAxTww3Wey3ClcVAoVosiEgnXVTp97deDDiZ0ZeT-f05QMjaVaWtiwni7F4Dv7RtTimN85ZCMy6qpGnIK7S10SImNywT~Y1rpmAGKrBdglSNQbpFRYjIMKbPsRg24GrjZln08GZKdpuIvg6xzkxCWNt-gaQsNXiJ-OkecFG8ssFOztieRw__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/440/image/image.jpg?Expires=1760506705&Signature=R4ycO32HUuZXdIe-4lOjyVkDcomGnHt2OS1b543dUqDZBHpR7y1l0HHDQiKFDvaZEQMjS4VKcKWxN7sj2eEh-2TFd8TxMOT6~yhplTgSMlGMxuVVwMJ8OCaztOUQ1SNZwtlCXJgDAms6Xs1FX6RLsa-MaM0D71Z8XuQZIoilaS839FmgBlzDwpgzRCFlo1ixNaZo5AZ8oCiI7DhorQEIc5~7ywoJOiIQZb5x0g6MpIlKf6Dx9xJoRlGjQKhiSn820DSfn1KKlorAj4MqG~aKU7v-eO8nyDnbRomvYfRytcydKF9bji4zbpv-dhvJEkFXLPIylRuRCN7oQs9QBMch6A__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_40_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 40,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/440/image/image.jpg?Expires=1760506705&Signature=R4ycO32HUuZXdIe-4lOjyVkDcomGnHt2OS1b543dUqDZBHpR7y1l0HHDQiKFDvaZEQMjS4VKcKWxN7sj2eEh-2TFd8TxMOT6~yhplTgSMlGMxuVVwMJ8OCaztOUQ1SNZwtlCXJgDAms6Xs1FX6RLsa-MaM0D71Z8XuQZIoilaS839FmgBlzDwpgzRCFlo1ixNaZo5AZ8oCiI7DhorQEIc5~7ywoJOiIQZb5x0g6MpIlKf6Dx9xJoRlGjQKhiSn820DSfn1KKlorAj4MqG~aKU7v-eO8nyDnbRomvYfRytcydKF9bji4zbpv-dhvJEkFXLPIylRuRCN7oQs9QBMch6A__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/441/image/image.jpg?Expires=1760506705&Signature=yhHp~605UiLiRdUFANkOcXJhB4ehRJhSUfI2deEr46Y1--24xngFTTven5aJHH44IL9~O23sslr02WrJAZHIKbtIuTQH1vktorZVynP0TEw3kX9cKY7946CGMb820JjGErbWo7NUrUQkgG93m15oaHFdjjSugNZQ9tRGsJ3dlZjh0NdQgD86H5Rgp6ZvQ5yQb-tZr~tzUTZn8r9vf1VmGLpVlMt3Z-59Mj0Fw43AZNVDP1NtcBln3keUdtekDbaa8HuihpamNnO3OpPsGrlMO1ia8Oj5lvI-EUNdWcSNqq~SsTMF79YzzS~v-eLb8bm6VmQ9-WjU3kPFaVOrK3nPzA__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_41_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 41,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/441/image/image.jpg?Expires=1760506705&Signature=yhHp~605UiLiRdUFANkOcXJhB4ehRJhSUfI2deEr46Y1--24xngFTTven5aJHH44IL9~O23sslr02WrJAZHIKbtIuTQH1vktorZVynP0TEw3kX9cKY7946CGMb820JjGErbWo7NUrUQkgG93m15oaHFdjjSugNZQ9tRGsJ3dlZjh0NdQgD86H5Rgp6ZvQ5yQb-tZr~tzUTZn8r9vf1VmGLpVlMt3Z-59Mj0Fw43AZNVDP1NtcBln3keUdtekDbaa8HuihpamNnO3OpPsGrlMO1ia8Oj5lvI-EUNdWcSNqq~SsTMF79YzzS~v-eLb8bm6VmQ9-WjU3kPFaVOrK3nPzA__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/442/image/image.jpg?Expires=1760506705&Signature=pWgZ9z7Yxgt4Km02H-VmvQJBcJqgj2S5HkdI1xOTo~hPA5byZlyeHJclCeh18jdxPwrap~e2N-I3NMEyh2LbrsDZR-py5i8QUV7liPkgXoiFQ~H5s54kCScJBezk2AZ2JEsfEZwY6xgI9VRiZjeNBumzOKgtg7-FcBnBNYD7i-HTl9myzXgmbh9ejMoWG9ooKIhvS7eo39finjlAupfSZWfj4f-SHG8oNXKmK~CRjOyst0n1vF5nXt17VUf277MZ6oxvOTMsbirn3pqo2COkrcxSMfPvsaAyKmulYzsfGPFMeqV9US9k841NbS13xNmEupRq4TFa4xaqKZLdOQ~e0w__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_42_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 42,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/442/image/image.jpg?Expires=1760506705&Signature=pWgZ9z7Yxgt4Km02H-VmvQJBcJqgj2S5HkdI1xOTo~hPA5byZlyeHJclCeh18jdxPwrap~e2N-I3NMEyh2LbrsDZR-py5i8QUV7liPkgXoiFQ~H5s54kCScJBezk2AZ2JEsfEZwY6xgI9VRiZjeNBumzOKgtg7-FcBnBNYD7i-HTl9myzXgmbh9ejMoWG9ooKIhvS7eo39finjlAupfSZWfj4f-SHG8oNXKmK~CRjOyst0n1vF5nXt17VUf277MZ6oxvOTMsbirn3pqo2COkrcxSMfPvsaAyKmulYzsfGPFMeqV9US9k841NbS13xNmEupRq4TFa4xaqKZLdOQ~e0w__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/443/image/image.jpg?Expires=1760506705&Signature=OzVFNotOKsis5Y-4ZY-kUjjXHzVmmELvIfG-aou6Z9oI42vfx6TOLmnl0yA12MWU7mpbeyL9q4yQUp6DeILUZTJt414JDaPv5kDlFCcjjcxJtxuGrnx94g-n1OxH3fvsVCT-P8jN2nthVej6wMqfyJZWxnE8d~A1SWQ3pBReZC-zc9KHUQ8AHPZsC9iITU1SGboa6vng6HoXZXKw0Ra7B45BXbTLYlxHFuUoprqX9VbXBNG~Wa~f4QGMqfGV1gLRyvaaUOqQps7gGdtx7MWvnxKFISHpT0I3x7pS8a3xUsdl7Cj5wfy-1QegXWQwXIyFEhNUH2tI0wIYzdq5tEkC~g__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_43_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 43,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/443/image/image.jpg?Expires=1760506705&Signature=OzVFNotOKsis5Y-4ZY-kUjjXHzVmmELvIfG-aou6Z9oI42vfx6TOLmnl0yA12MWU7mpbeyL9q4yQUp6DeILUZTJt414JDaPv5kDlFCcjjcxJtxuGrnx94g-n1OxH3fvsVCT-P8jN2nthVej6wMqfyJZWxnE8d~A1SWQ3pBReZC-zc9KHUQ8AHPZsC9iITU1SGboa6vng6HoXZXKw0Ra7B45BXbTLYlxHFuUoprqX9VbXBNG~Wa~f4QGMqfGV1gLRyvaaUOqQps7gGdtx7MWvnxKFISHpT0I3x7pS8a3xUsdl7Cj5wfy-1QegXWQwXIyFEhNUH2tI0wIYzdq5tEkC~g__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/444/image/image.jpg?Expires=1760506705&Signature=qYyjk7foc7UxOmk9YoNaT3vbFX~TyaVsuTRxS7WRsam6VE0mI4Y2klX-gn1DFgeDAlfTdmT6GyGFQpaisXreIxLtewxo5SVtU9TQI40~uuqq6AX4cRDlKDG4AP0ApJW2QJWDzAdfqFYSx3ZhtbKM52xT0ES~zqlcHn3CWZ8MKfrX-MBaUCh1E2s2uMK1LF6GPu4lDoAuBeMXDbWLXZTz3fj7~FkDCJdRVVPNbvlCjRaInm-pT4HMCU7GQM3RU2qus4SP11Cdt55B4g4NfzrjJo-Zv6ehD47fxyRVW2BbkgD2aoulwMKTPvPShUYSiXDt2J-fiWm-Jv4gBWLtj6rhvg__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_44_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 44,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/444/image/image.jpg?Expires=1760506705&Signature=qYyjk7foc7UxOmk9YoNaT3vbFX~TyaVsuTRxS7WRsam6VE0mI4Y2klX-gn1DFgeDAlfTdmT6GyGFQpaisXreIxLtewxo5SVtU9TQI40~uuqq6AX4cRDlKDG4AP0ApJW2QJWDzAdfqFYSx3ZhtbKM52xT0ES~zqlcHn3CWZ8MKfrX-MBaUCh1E2s2uMK1LF6GPu4lDoAuBeMXDbWLXZTz3fj7~FkDCJdRVVPNbvlCjRaInm-pT4HMCU7GQM3RU2qus4SP11Cdt55B4g4NfzrjJo-Zv6ehD47fxyRVW2BbkgD2aoulwMKTPvPShUYSiXDt2J-fiWm-Jv4gBWLtj6rhvg__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/445/image/image.jpg?Expires=1760506705&Signature=xSzIsf1xBygVKL7PZy~1TmPaTziI0yD4JBylo88Xa64PBGH1i3IRpAf-jv6PXuQDh1AQfEkum834TaMzv9N9uKJNNL36Efm9J3OAfaIOEFktPSL1diuaS3deEHuZQ2svWQmu1bSD3soryJyveyTIlZu9O9JxMCkJyAZiJ3SAEGDKO3Q8AImyoMyWF3HIWP6pl5I4AFlYRRZFI41QLKostJeMX4ivrgJbvYNNr~J716MznPI4nGPI00Vce7uQax4bl9~RcrUcCcwGyd6AS05Q~OOs0Z9oAV~MHRHq2AHofyfdnh-i8e50HccErreFma6tF6ZvCoV2NRP6Uksu3c9klA__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_45_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 45,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/445/image/image.jpg?Expires=1760506705&Signature=xSzIsf1xBygVKL7PZy~1TmPaTziI0yD4JBylo88Xa64PBGH1i3IRpAf-jv6PXuQDh1AQfEkum834TaMzv9N9uKJNNL36Efm9J3OAfaIOEFktPSL1diuaS3deEHuZQ2svWQmu1bSD3soryJyveyTIlZu9O9JxMCkJyAZiJ3SAEGDKO3Q8AImyoMyWF3HIWP6pl5I4AFlYRRZFI41QLKostJeMX4ivrgJbvYNNr~J716MznPI4nGPI00Vce7uQax4bl9~RcrUcCcwGyd6AS05Q~OOs0Z9oAV~MHRHq2AHofyfdnh-i8e50HccErreFma6tF6ZvCoV2NRP6Uksu3c9klA__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/446/image/image.jpg?Expires=1760506705&Signature=xc45d4p0dGvjJlaHX0PK765fYaCZEJSV5QmQ4edzUjJazJ5TGVwNEFwtwaCsLghykDQkuVEGFeR3JVXE10icZzKEAkEwHOwxHw9csyGCsayhKUZu64yrdgbS4Yp5hdMrhmSfufg6RZFznv8MqcKGsVqNkr4uochw7ZTNKnKCQq7Nh0zePxJNDWmmK1YlMuxnWwB1ug0xcV2vLxjVmYa9gh12d9b9O6axhAY24LnOU6b3DN0TIC3-mFJEOsGztFhpX47P~l7WIgWM0GlBxXRqslGOi0a5dBMuk6mOUVdpqPG3TgutzKnwfoyb9zzcHvkdgTZ02PvKk~D5GQj9BpATXA__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_46_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 46,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/446/image/image.jpg?Expires=1760506705&Signature=xc45d4p0dGvjJlaHX0PK765fYaCZEJSV5QmQ4edzUjJazJ5TGVwNEFwtwaCsLghykDQkuVEGFeR3JVXE10icZzKEAkEwHOwxHw9csyGCsayhKUZu64yrdgbS4Yp5hdMrhmSfufg6RZFznv8MqcKGsVqNkr4uochw7ZTNKnKCQq7Nh0zePxJNDWmmK1YlMuxnWwB1ug0xcV2vLxjVmYa9gh12d9b9O6axhAY24LnOU6b3DN0TIC3-mFJEOsGztFhpX47P~l7WIgWM0GlBxXRqslGOi0a5dBMuk6mOUVdpqPG3TgutzKnwfoyb9zzcHvkdgTZ02PvKk~D5GQj9BpATXA__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/447/image/image.jpg?Expires=1760506705&Signature=Es1p5mmQwfmoeBfDjdIXC5JDUI1KCWUox4ndeBAnqSCaatKLG1jVQekfTKNym01HUW1ulcV0-KJAGf18JLPag2oxHy6lAJYUkT0gZ6kq2mpwRRXjkY9~ov8dNOp9aTlxiFXNdNFSLfg-DbBGgt~NQfKBJLjQmZJLJV~pLlwskf5Wtoj6IkEwlc9mkBH60poMo0AMdvC~TnVgEAQapLUDE-49aYcYXaqnUx4SFVtQNg2VrUP57plHo7r3LhUUqPUGMsum2LZTDkYx3YBABAFq-MoUAuRupvwJjyxt7PVR~8gc6MpD4xSM0i1MaQ2cKP3gSZjsiHoQxf2pkAKueeNyvQ__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_47_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 47,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/447/image/image.jpg?Expires=1760506705&Signature=Es1p5mmQwfmoeBfDjdIXC5JDUI1KCWUox4ndeBAnqSCaatKLG1jVQekfTKNym01HUW1ulcV0-KJAGf18JLPag2oxHy6lAJYUkT0gZ6kq2mpwRRXjkY9~ov8dNOp9aTlxiFXNdNFSLfg-DbBGgt~NQfKBJLjQmZJLJV~pLlwskf5Wtoj6IkEwlc9mkBH60poMo0AMdvC~TnVgEAQapLUDE-49aYcYXaqnUx4SFVtQNg2VrUP57plHo7r3LhUUqPUGMsum2LZTDkYx3YBABAFq-MoUAuRupvwJjyxt7PVR~8gc6MpD4xSM0i1MaQ2cKP3gSZjsiHoQxf2pkAKueeNyvQ__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/448/image/image.jpg?Expires=1760506705&Signature=JEmYuKvCk1kOmgczZ2jYtNwEU3BxIqSEz3UDSquRlvaRynBFjcAPwkBFj16vz7lZVNKezKKMlUO4BWsBRK0VtfOP~p39dK4y8Ax2s9LuqlI5NqMYK342437kYsAdDfaBothaBuKfRpzvWVzwhZhQR-KwJc1hCuIUpFIsR3PswNJBz2c4gCsbmJYkeq12iZPo7UEjxsksDUi16WtZdvmai4LdNz0vW~de99H8WhpZuFJJzOYD6TG8zgwQiX3GZyGCrLhauYgNyFc9HWkbH8oi5~b7GVXmOFqA751tQ7ZXoY-UjSg15r0SuQ7AIaPABqOpUGyV4CtvtrCoUS1PEleiwg__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_48_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 48,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/448/image/image.jpg?Expires=1760506705&Signature=JEmYuKvCk1kOmgczZ2jYtNwEU3BxIqSEz3UDSquRlvaRynBFjcAPwkBFj16vz7lZVNKezKKMlUO4BWsBRK0VtfOP~p39dK4y8Ax2s9LuqlI5NqMYK342437kYsAdDfaBothaBuKfRpzvWVzwhZhQR-KwJc1hCuIUpFIsR3PswNJBz2c4gCsbmJYkeq12iZPo7UEjxsksDUi16WtZdvmai4LdNz0vW~de99H8WhpZuFJJzOYD6TG8zgwQiX3GZyGCrLhauYgNyFc9HWkbH8oi5~b7GVXmOFqA751tQ7ZXoY-UjSg15r0SuQ7AIaPABqOpUGyV4CtvtrCoUS1PEleiwg__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/449/image/image.jpg?Expires=1760506705&Signature=rWFHR6TmeexOECFK6T5Y6oF7ScXgGB1IC9hLFHgnVNCnW10Rd9kG6bBEQnIYUqWB9jlAv~4qhBinDNzjpoK0HkrVnuTM5H-pP-333dF7ddxTLV1MpOp5uYgY1a8hkbnGHEihEQTA75abqx7MORGMqn9lC~Y0NWDKhdf4VWK1RQ~V-cdAbnfS9nVO1-RQMzuXIyxR3CL13RBSZK~5i7EjOAsSwZAMaeVDi0zZH0Uk3dMB0Lbqqffi6C0XSZD0-sysTq28I~0CjvCbjQM9IICuIOHcVOngz4-EumYshGuLuic1mzRXLNO5D5QpveLO-lvvHw2lPR18s5u5vd26HdhhVQ__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_49_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 49,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/449/image/image.jpg?Expires=1760506705&Signature=rWFHR6TmeexOECFK6T5Y6oF7ScXgGB1IC9hLFHgnVNCnW10Rd9kG6bBEQnIYUqWB9jlAv~4qhBinDNzjpoK0HkrVnuTM5H-pP-333dF7ddxTLV1MpOp5uYgY1a8hkbnGHEihEQTA75abqx7MORGMqn9lC~Y0NWDKhdf4VWK1RQ~V-cdAbnfS9nVO1-RQMzuXIyxR3CL13RBSZK~5i7EjOAsSwZAMaeVDi0zZH0Uk3dMB0Lbqqffi6C0XSZD0-sysTq28I~0CjvCbjQM9IICuIOHcVOngz4-EumYshGuLuic1mzRXLNO5D5QpveLO-lvvHw2lPR18s5u5vd26HdhhVQ__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/450/image/image.jpg?Expires=1760506705&Signature=BtDbbB9u6~qaNoJpYsu1fJkxTjy6c3zI7qgzkTcZLc1wTF9j1dwatZ1sbLFWwZWfQX3w0YAckp2KszFheZBPtynqCHBfLSaaIXbzXlHFDcgw8GkvFvVwtzzbtPuLBAhWUQO-SpTt3wkfZKEjHL7h9LBu2u2DLL-QDb40BvaGPIbDuNRr8KM1scudKvIGH5iTpvaK9rXYNx1FM8oSeXTu~AfuEB0-4DmwhPAwW7IZwjo6Rxg05Qxjws48-sobux6MFLij2-fa0NAlevSsNl9JphhacZU2x2zm7aIpM0EjK5VurmVg01A8sjjeimGQlv2SaAudJoUPGE13XMZSOo31eg__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_50_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 50,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/450/image/image.jpg?Expires=1760506705&Signature=BtDbbB9u6~qaNoJpYsu1fJkxTjy6c3zI7qgzkTcZLc1wTF9j1dwatZ1sbLFWwZWfQX3w0YAckp2KszFheZBPtynqCHBfLSaaIXbzXlHFDcgw8GkvFvVwtzzbtPuLBAhWUQO-SpTt3wkfZKEjHL7h9LBu2u2DLL-QDb40BvaGPIbDuNRr8KM1scudKvIGH5iTpvaK9rXYNx1FM8oSeXTu~AfuEB0-4DmwhPAwW7IZwjo6Rxg05Qxjws48-sobux6MFLij2-fa0NAlevSsNl9JphhacZU2x2zm7aIpM0EjK5VurmVg01A8sjjeimGQlv2SaAudJoUPGE13XMZSOo31eg__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/451/image/image.jpg?Expires=1760506705&Signature=RZT6mfRcZDC2YVIUsM1KD5Z3LWDW0ZLkTpjWEw1a70MNpkHhX~mvGW3Auu-RAAesTiRRLRzxpeN70WSfpg5a9HkIUel9YDvCUgmgf4RTVO-G5WWAyl50ievn2Tg-DrTjgSL8oK6JxTpP-dQC~Zbq~AJrrPAt7LX5m-C~JVdbJz5bUSVebkttCJa70iXjjdTpWttpFzj-1w5bWftFHgN~LS5G9kHXTD~MINPD~9RD7SRSsWlRDs9AUFxmvuefwZizTU3fbWQ0Zy1wvM~-aQ7AiWxegIKcIYFkNhIbqehaMFytFlPY0Fv~WVhUl6IVKBjqsNpitaWpfH0-fNBWFDk~Zg__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_51_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 51,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/451/image/image.jpg?Expires=1760506705&Signature=RZT6mfRcZDC2YVIUsM1KD5Z3LWDW0ZLkTpjWEw1a70MNpkHhX~mvGW3Auu-RAAesTiRRLRzxpeN70WSfpg5a9HkIUel9YDvCUgmgf4RTVO-G5WWAyl50ievn2Tg-DrTjgSL8oK6JxTpP-dQC~Zbq~AJrrPAt7LX5m-C~JVdbJz5bUSVebkttCJa70iXjjdTpWttpFzj-1w5bWftFHgN~LS5G9kHXTD~MINPD~9RD7SRSsWlRDs9AUFxmvuefwZizTU3fbWQ0Zy1wvM~-aQ7AiWxegIKcIYFkNhIbqehaMFytFlPY0Fv~WVhUl6IVKBjqsNpitaWpfH0-fNBWFDk~Zg__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/452/image/image.jpg?Expires=1760506705&Signature=N~e76~y5Q3Cy1zOOMzGM6RRRp3tUH8svH8ZGrMOY1vcVGU1MjD65MUnv5AGGqBI2R49Cbcn0saTyuRs5aDlK7lnZxUSza6-7nU8oVKLxvqVNscqzJrYWMWzVfMQ-VZEP3a12niVWf2M7Qg446NhJJpI3UqKip4ZesTBCqazggRKWjJ6dRBxhY2SYnLZ5VgRH6Uk5tcZv8~RK55cVC9wmPqbobkB8DAz-jzBIQ2d1jSgIYq6rDFJFjsIhbcpDp9vYWnbaE~GeaAaJ01vfXS7IOoZJ4RLTNXXsgA7lS5llP0icEZ8XZqVH8OLLThGkPTuwCsZFcQs8lH3mLEj0T~XZKA__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_52_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 52,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/452/image/image.jpg?Expires=1760506705&Signature=N~e76~y5Q3Cy1zOOMzGM6RRRp3tUH8svH8ZGrMOY1vcVGU1MjD65MUnv5AGGqBI2R49Cbcn0saTyuRs5aDlK7lnZxUSza6-7nU8oVKLxvqVNscqzJrYWMWzVfMQ-VZEP3a12niVWf2M7Qg446NhJJpI3UqKip4ZesTBCqazggRKWjJ6dRBxhY2SYnLZ5VgRH6Uk5tcZv8~RK55cVC9wmPqbobkB8DAz-jzBIQ2d1jSgIYq6rDFJFjsIhbcpDp9vYWnbaE~GeaAaJ01vfXS7IOoZJ4RLTNXXsgA7lS5llP0icEZ8XZqVH8OLLThGkPTuwCsZFcQs8lH3mLEj0T~XZKA__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/453/image/image.jpg?Expires=1760506705&Signature=hBQ-ksPY7SWDhuxrQJtX~X6FIW00JZ07fqatn~m1Om8dl-McH6VKmrdSWSkDwQtZfbSO8ThUI-LmvwuMUQOw9B2kBKpzptP4kcgmI1aUg9XcbHv3~XlrFb6-KySSMQflKOuAIsUm3CXMyw3tx7oQUsTR4J4tEvzAh6T2HpM1e3GsoTi9XzQqgBAxfsmifZ1vA67-2LMnc7O0x9jaPnhmcoQPSAtzT0EQZ27NQeLYcOYLQDuvpgAGW0YObiWitePYX8Owe1ip6kK5jvvbMvXmMH6UxSGHJRpl8LPY7hvqf~BH38tzVmEK-quSwdI8r6GB2ygFh-u~mIw17zIImv9pnw__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_53_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 53,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/453/image/image.jpg?Expires=1760506705&Signature=hBQ-ksPY7SWDhuxrQJtX~X6FIW00JZ07fqatn~m1Om8dl-McH6VKmrdSWSkDwQtZfbSO8ThUI-LmvwuMUQOw9B2kBKpzptP4kcgmI1aUg9XcbHv3~XlrFb6-KySSMQflKOuAIsUm3CXMyw3tx7oQUsTR4J4tEvzAh6T2HpM1e3GsoTi9XzQqgBAxfsmifZ1vA67-2LMnc7O0x9jaPnhmcoQPSAtzT0EQZ27NQeLYcOYLQDuvpgAGW0YObiWitePYX8Owe1ip6kK5jvvbMvXmMH6UxSGHJRpl8LPY7hvqf~BH38tzVmEK-quSwdI8r6GB2ygFh-u~mIw17zIImv9pnw__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/454/image/image.jpg?Expires=1760506705&Signature=GpYbbTAeBEC2qLaQ9mLI0AxnUL8uAs-QhxCf-hlw07FPuOcgT0IGLayJTO8t-S3dyCsxRZng9k5SvJQTbYmt26Qa9cOccwRvTaLm~pTqDkGl~K~2YgfcUMS7TEGcA135EcAaE8g~VncMsj6rfgK0sAdrKpzpC5ezW-7TUbHs-iw-8U8qn9OmC3BdysR2pi~5LptnkVwaBgIVxer8Y~z0SMa35kY9~L2aupp8eCJ2kDjt0uA95Qbsrh1T0dNnMcqm57n-l9Q1-zpK~FfAv7LqH4T-0TkkVYGiIObdVaxwzc43vvowsNvF5Uk8R6CvmSBeNC6NEB5kGCVOrzRcwQXAkg__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_54_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 54,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/454/image/image.jpg?Expires=1760506705&Signature=GpYbbTAeBEC2qLaQ9mLI0AxnUL8uAs-QhxCf-hlw07FPuOcgT0IGLayJTO8t-S3dyCsxRZng9k5SvJQTbYmt26Qa9cOccwRvTaLm~pTqDkGl~K~2YgfcUMS7TEGcA135EcAaE8g~VncMsj6rfgK0sAdrKpzpC5ezW-7TUbHs-iw-8U8qn9OmC3BdysR2pi~5LptnkVwaBgIVxer8Y~z0SMa35kY9~L2aupp8eCJ2kDjt0uA95Qbsrh1T0dNnMcqm57n-l9Q1-zpK~FfAv7LqH4T-0TkkVYGiIObdVaxwzc43vvowsNvF5Uk8R6CvmSBeNC6NEB5kGCVOrzRcwQXAkg__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/455/image/image.jpg?Expires=1760506705&Signature=ws3by-WzpCT-CIieb0imDhay3b-7Uwrt~HF9xpExOgcNzUoYG4ckkvIF2MKPpp9NinaqWPx-Kt0K840wW4Y7OEyd--nVIhjZMYX1yq-tMetUs8-8Osar5s~DKKQor5wp0bZAerupFBtaMORqS5v~J797ZSkPUakfVVZYmdvEzeuQUfOwUze2yqsfCJMxCgd71OBvzusy~99~Eeg8Y6hibaymDOzCLWHnyYXETGOxBOAAelxHt8bRw-8buZtX8J-IcPdkCYSgxK8m5dv8XzMAn~z7aa2z1dW4lxDSo-gceqIIctrTZNBtAGgvNKYcTZY0pRnR~kAx92k54DnlaceG0Q__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_55_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 55,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/455/image/image.jpg?Expires=1760506705&Signature=ws3by-WzpCT-CIieb0imDhay3b-7Uwrt~HF9xpExOgcNzUoYG4ckkvIF2MKPpp9NinaqWPx-Kt0K840wW4Y7OEyd--nVIhjZMYX1yq-tMetUs8-8Osar5s~DKKQor5wp0bZAerupFBtaMORqS5v~J797ZSkPUakfVVZYmdvEzeuQUfOwUze2yqsfCJMxCgd71OBvzusy~99~Eeg8Y6hibaymDOzCLWHnyYXETGOxBOAAelxHt8bRw-8buZtX8J-IcPdkCYSgxK8m5dv8XzMAn~z7aa2z1dW4lxDSo-gceqIIctrTZNBtAGgvNKYcTZY0pRnR~kAx92k54DnlaceG0Q__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/456/image/image.jpg?Expires=1760506705&Signature=rP-odxYXdq42VqL3LyeDTfKmniubUJBW1qSz6HrbbFRzirqbhmQU8Cd-FMAOztk2tQcKTYU3hLkFcmLdtHcy-NC-3-DXKk622ZcyooRZ44RxvSdVJhppanVVJgIk6JIYBM42OzIny5BazF75EyCOnTCVlvRP1mVP4qrH1u7xzar5mtd6BpQj3TLlTZ4EhoUsDlbeLJGzqHBxirVDI86T2oalO0rRJ4JylIhlTJ1k-Inv3EDxU46kfH2xWOmH8-5LuvJrZP9I2gmqgSlPJFdRBIa-XuJ-oO8PcdJ93LWJrOxJL0ANYtHVJvzIzCk0dVIsadTB9kehys8rCeMCpgM7VA__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_56_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 56,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/456/image/image.jpg?Expires=1760506705&Signature=rP-odxYXdq42VqL3LyeDTfKmniubUJBW1qSz6HrbbFRzirqbhmQU8Cd-FMAOztk2tQcKTYU3hLkFcmLdtHcy-NC-3-DXKk622ZcyooRZ44RxvSdVJhppanVVJgIk6JIYBM42OzIny5BazF75EyCOnTCVlvRP1mVP4qrH1u7xzar5mtd6BpQj3TLlTZ4EhoUsDlbeLJGzqHBxirVDI86T2oalO0rRJ4JylIhlTJ1k-Inv3EDxU46kfH2xWOmH8-5LuvJrZP9I2gmqgSlPJFdRBIa-XuJ-oO8PcdJ93LWJrOxJL0ANYtHVJvzIzCk0dVIsadTB9kehys8rCeMCpgM7VA__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/457/image/image.jpg?Expires=1760506705&Signature=dxeMWP7pg9Z0gML1j15ecXZknn3RoniLIY-93aNxm54~yDko3tGVWXRAPVh2p2s-88ELNyInvrS6CWhJzIdSyraP-NEr4iszpeD4abxaVAOt5LqxS6QozwvYfsXUUXlhSNzuzf2IJEsCG4a9MbPiM6CaYFo3PY7JKQfn-CW0LIFz33jS5kUOSBhfbyB5fT7C~-FeqtLWF0VNYu9Ng8AKd95xOBmg4uY6Epv3TIPmbkBmkjlG7vI5uFPeiCHDi6pbnoLXrZCeCQAb7bDM1qYsgPjt6nmZnUxdvoEayDUZtEJHWmjGGFsHRgxQPJ5Sls3nL4DHZZiWm9-4NtmoFe-lWQ__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_57_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 57,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/457/image/image.jpg?Expires=1760506705&Signature=dxeMWP7pg9Z0gML1j15ecXZknn3RoniLIY-93aNxm54~yDko3tGVWXRAPVh2p2s-88ELNyInvrS6CWhJzIdSyraP-NEr4iszpeD4abxaVAOt5LqxS6QozwvYfsXUUXlhSNzuzf2IJEsCG4a9MbPiM6CaYFo3PY7JKQfn-CW0LIFz33jS5kUOSBhfbyB5fT7C~-FeqtLWF0VNYu9Ng8AKd95xOBmg4uY6Epv3TIPmbkBmkjlG7vI5uFPeiCHDi6pbnoLXrZCeCQAb7bDM1qYsgPjt6nmZnUxdvoEayDUZtEJHWmjGGFsHRgxQPJ5Sls3nL4DHZZiWm9-4NtmoFe-lWQ__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/458/image/image.jpg?Expires=1760506705&Signature=WzxV8P10-FcmjTPxinoHkbjgMUdGlLrDwR9PYrg1uw3DfT68d3GFinmg0H3R2mgchr5dPgXdRPDqlbO6uqYgFyaHrcCkXUKH6kxzdmMc7c-bjvaqyrnw34zbxuwpaSjsweGBKElI8llcinhy1GgKqn92ItT-Qj4jIhl90s0yHODftM1YbakVpMq31PCJKEYOFAR76CBwnpCLbGR1Q-Ww7-IroZSy3tOvvJ-wrcOY9SKeToZtmgpaRoJbQegPk1X269LdR2IF1Ol9NNSxpoijeR9YjvcaB4LTNfBr0FY8AEKq5kRtgeM1sHeyQj8GLreQJso012HOlsv7XlxYhLhcdA__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_58_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 58,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/458/image/image.jpg?Expires=1760506705&Signature=WzxV8P10-FcmjTPxinoHkbjgMUdGlLrDwR9PYrg1uw3DfT68d3GFinmg0H3R2mgchr5dPgXdRPDqlbO6uqYgFyaHrcCkXUKH6kxzdmMc7c-bjvaqyrnw34zbxuwpaSjsweGBKElI8llcinhy1GgKqn92ItT-Qj4jIhl90s0yHODftM1YbakVpMq31PCJKEYOFAR76CBwnpCLbGR1Q-Ww7-IroZSy3tOvvJ-wrcOY9SKeToZtmgpaRoJbQegPk1X269LdR2IF1Ol9NNSxpoijeR9YjvcaB4LTNfBr0FY8AEKq5kRtgeM1sHeyQj8GLreQJso012HOlsv7XlxYhLhcdA__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/459/image/image.jpg?Expires=1760506705&Signature=EKexu8FjESPapwATTmO1R8hIVApLSd4lu~Y2fjmVTrc3iwILXI5skootB-r8XyBAj003ce4CYN-gW8~56XcVnOU1hxtszyLwMWdvkfMSyCuU5hndRh5xjofQsVpb-JcB6Ijs6sAFVHOR06THL9eXg2GYlE0~j6BjtjUxgCgdtqC2W3mrFvbJ25qQe2SC9KI3APJgzU0gB3IlWw5GA9Xd24tkjF2keB8j8YMEmL5eu7sYLHHG1biPZODtzS1mFWUv-2kXXxz6hITfBnPKzbvZsjVXXYZS3QYDIfB9KAG1g4Xj6qZ0sCB~HvBSiE0FSSmSUV26em4oU7BtF8DsbGAr0g__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_59_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 59,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/459/image/image.jpg?Expires=1760506705&Signature=EKexu8FjESPapwATTmO1R8hIVApLSd4lu~Y2fjmVTrc3iwILXI5skootB-r8XyBAj003ce4CYN-gW8~56XcVnOU1hxtszyLwMWdvkfMSyCuU5hndRh5xjofQsVpb-JcB6Ijs6sAFVHOR06THL9eXg2GYlE0~j6BjtjUxgCgdtqC2W3mrFvbJ25qQe2SC9KI3APJgzU0gB3IlWw5GA9Xd24tkjF2keB8j8YMEmL5eu7sYLHHG1biPZODtzS1mFWUv-2kXXxz6hITfBnPKzbvZsjVXXYZS3QYDIfB9KAG1g4Xj6qZ0sCB~HvBSiE0FSSmSUV26em4oU7BtF8DsbGAr0g__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/460/image/image.jpg?Expires=1760506705&Signature=jHbkmvvtZUBJSOAOR~B14K9azqm8pDhHkKaLi~vRnP9UgBwjEcIUZOusGm2ZJicwvz99oyGzaeCcWt-mlPEisL6IVwhvykdwSxHgbmmjYKn-LRPpFTGeJ~FAD631rqF9EH-CNFPTeKC7Ndam5wQ2sW3hmgMKaoIwdqGa3L0LJKP4ivTJHAwbwujpg0IxeXtz1DFHlcscw00j4K8lAWzP5xMyQcaYw3TlMtY0LXd-rNAyrNF2bWdwXQMGtKuAwvrKe9d-0eh8bYCY7AEGUNL8C-dDEyLeOz7PHugb09ArbZvvb~1hXJ2SV61P7XV6snk6UnPz7nfqyHxxZ5Lap8crkw__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_60_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 60,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/460/image/image.jpg?Expires=1760506705&Signature=jHbkmvvtZUBJSOAOR~B14K9azqm8pDhHkKaLi~vRnP9UgBwjEcIUZOusGm2ZJicwvz99oyGzaeCcWt-mlPEisL6IVwhvykdwSxHgbmmjYKn-LRPpFTGeJ~FAD631rqF9EH-CNFPTeKC7Ndam5wQ2sW3hmgMKaoIwdqGa3L0LJKP4ivTJHAwbwujpg0IxeXtz1DFHlcscw00j4K8lAWzP5xMyQcaYw3TlMtY0LXd-rNAyrNF2bWdwXQMGtKuAwvrKe9d-0eh8bYCY7AEGUNL8C-dDEyLeOz7PHugb09ArbZvvb~1hXJ2SV61P7XV6snk6UnPz7nfqyHxxZ5Lap8crkw__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/461/image/image.jpg?Expires=1760506705&Signature=D8qIRnzbBslIpOc056643eIGgXNJOi5SDR3fmFpoSdaBjdLWbxKiacnH22~JUd0ZaOP0w5NG79M1m6TyuYHGXXqiMLoClFzm2m~W5jWmFQO55yzVy63wYH5fc8IDurV3NyViJ9YwDcLt6ezdzxRiXzAV4xVt1sAvdIeH7TunbjhrYpw7BBAOlu1F354ZJCINux~EBK-7hTrwyQjMzm1YzbFfizQ0BgYoQWbxN-PAoVeM4YM7OU614luWS2kFoPMwXHwZHhYmCJG9DySYcz3fpFR82-Ez7svVuF4WMkoHRy9y8Ux0c-Kckqg7aCGWrYOCDIEOiYCwfeKmPESlDQz0uA__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_61_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 61,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/461/image/image.jpg?Expires=1760506705&Signature=D8qIRnzbBslIpOc056643eIGgXNJOi5SDR3fmFpoSdaBjdLWbxKiacnH22~JUd0ZaOP0w5NG79M1m6TyuYHGXXqiMLoClFzm2m~W5jWmFQO55yzVy63wYH5fc8IDurV3NyViJ9YwDcLt6ezdzxRiXzAV4xVt1sAvdIeH7TunbjhrYpw7BBAOlu1F354ZJCINux~EBK-7hTrwyQjMzm1YzbFfizQ0BgYoQWbxN-PAoVeM4YM7OU614luWS2kFoPMwXHwZHhYmCJG9DySYcz3fpFR82-Ez7svVuF4WMkoHRy9y8Ux0c-Kckqg7aCGWrYOCDIEOiYCwfeKmPESlDQz0uA__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/462/image/image.jpg?Expires=1760506705&Signature=nbIzN80gC-mdw4fcxSbc6suQ9E~d2VkDH56pp~6KinolbUJTK9Q5DW76bF-q9DpKtLtsKtU6m5c40vWWoUaXHytw6xNoHallQSzwWxL6JQsUpBNOeZk4zfb2P77aNyR4va~CZrKFzZA7W6rnGtQJY7DBeoLBstN0hxuOP19m~rPLxpbWAwNDwnGH8vSiqDWS~wttJ4zQ792W59tcTzl3zyUUnXyPd59O3sHeTk6j1ECA8ntE57Hmn4oG18m2je1AhNMrfByWqhm2hIoXBz8iDmZrGN54G49~SAVQmJOnPFeHdkr47B9JdFP8ZI0ahun1EX0ymmtuNMTibtlEhTP8UA__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_62_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 62,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/462/image/image.jpg?Expires=1760506705&Signature=nbIzN80gC-mdw4fcxSbc6suQ9E~d2VkDH56pp~6KinolbUJTK9Q5DW76bF-q9DpKtLtsKtU6m5c40vWWoUaXHytw6xNoHallQSzwWxL6JQsUpBNOeZk4zfb2P77aNyR4va~CZrKFzZA7W6rnGtQJY7DBeoLBstN0hxuOP19m~rPLxpbWAwNDwnGH8vSiqDWS~wttJ4zQ792W59tcTzl3zyUUnXyPd59O3sHeTk6j1ECA8ntE57Hmn4oG18m2je1AhNMrfByWqhm2hIoXBz8iDmZrGN54G49~SAVQmJOnPFeHdkr47B9JdFP8ZI0ahun1EX0ymmtuNMTibtlEhTP8UA__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/463/image/image.jpg?Expires=1760506705&Signature=TsOGl8-X9dhstSJGkhvS1nLCjCoTc1pub-Nr1nysLPHJtI-LyVdwkzrfEMdfr-C5aMlebBOUuTWcth2xKue0FsSPsjZLGYTxWv9MVEj8Z6bwUgOcrSFtgLZ1n3X7ljvxFMPikOsQ21cVAk2m92nmPRfWo1BPyfkaLK452b7fjKThLd4MHcE6cD-Fgyfkx1R9~yfLP5O0a5Su9N46iOSlzqPqP~snYuG0X2eIyojcfUZmrGdas2rkQcLMS7chzrF15kfkUYn77UxPIEur66iuBSJWu0jHvTrhq9vlzPwexDxuR~q0FwuhADfNqtFK~ycLoIID5Bee8Yq3bWI8IIhIbw__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_63_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 63,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/463/image/image.jpg?Expires=1760506705&Signature=TsOGl8-X9dhstSJGkhvS1nLCjCoTc1pub-Nr1nysLPHJtI-LyVdwkzrfEMdfr-C5aMlebBOUuTWcth2xKue0FsSPsjZLGYTxWv9MVEj8Z6bwUgOcrSFtgLZ1n3X7ljvxFMPikOsQ21cVAk2m92nmPRfWo1BPyfkaLK452b7fjKThLd4MHcE6cD-Fgyfkx1R9~yfLP5O0a5Su9N46iOSlzqPqP~snYuG0X2eIyojcfUZmrGdas2rkQcLMS7chzrF15kfkUYn77UxPIEur66iuBSJWu0jHvTrhq9vlzPwexDxuR~q0FwuhADfNqtFK~ycLoIID5Bee8Yq3bWI8IIhIbw__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/464/image/image.jpg?Expires=1760506705&Signature=bn3zoQAAXNEmSVoh9dZ~yTnFzxsIid-IWvN27VyE8EHS2c~1JU53Qjw30LkFQP7btPEt~xgWBt8-rcWHMyUIxZm3GCAzNfMAZMF0jcwgVth0ehQqVXwBlRRVK8TQ~Vu~ZQ2Ch4IDaF8AdOKP1HH2J4LwoVMth1dkU4vDceK582gGd6wMeU6ppsR1EKCoMDcBOkz45yoCZdTXd5kJ7mQzPa9BfBQEHvfYABgGSe7YeobEaDCcrGSnvP1wlL~pG-5ChYxOVj6B4amu0ROw698pgLrITn3eCI7lei87OpzdN55fBUV4LnA2f20JQNlhpwzcgvNCPuV4~21E0fjrKcOSKg__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_64_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 64,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/464/image/image.jpg?Expires=1760506705&Signature=bn3zoQAAXNEmSVoh9dZ~yTnFzxsIid-IWvN27VyE8EHS2c~1JU53Qjw30LkFQP7btPEt~xgWBt8-rcWHMyUIxZm3GCAzNfMAZMF0jcwgVth0ehQqVXwBlRRVK8TQ~Vu~ZQ2Ch4IDaF8AdOKP1HH2J4LwoVMth1dkU4vDceK582gGd6wMeU6ppsR1EKCoMDcBOkz45yoCZdTXd5kJ7mQzPa9BfBQEHvfYABgGSe7YeobEaDCcrGSnvP1wlL~pG-5ChYxOVj6B4amu0ROw698pgLrITn3eCI7lei87OpzdN55fBUV4LnA2f20JQNlhpwzcgvNCPuV4~21E0fjrKcOSKg__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/465/image/image.jpg?Expires=1760506705&Signature=UrmJOQhAKK-9UQTZBRrj1v7xbx0RAxDch2IktGq6E5PocRawlMDpjoWEFjfLdByJSRqZv1HTtOuLR7WJysJITyhhptAtdXsHRjIOKPMcW1d1sxWVAyqDtM1P-h1nc5dnEWSJgiMVZ5OMxOJluFuvyKPNjvO0TTKWbz5mCOd3KKgiDOWfLgGenWcyLykQ-Wm1phnZMKTI2FWI7Qevgl~tLqd9AG8L3oSvkefqAtef5A0Pc0kktzUpUdT-B~2UJbsdvFi76rDWkZYJH4CQOyyxujAdg4jXnT-83mTVhP96aowkZTAcblEI-deGxvLSrUMbepmBslcoHYbK5Vxmi6SOUg__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_65_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 65,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/465/image/image.jpg?Expires=1760506705&Signature=UrmJOQhAKK-9UQTZBRrj1v7xbx0RAxDch2IktGq6E5PocRawlMDpjoWEFjfLdByJSRqZv1HTtOuLR7WJysJITyhhptAtdXsHRjIOKPMcW1d1sxWVAyqDtM1P-h1nc5dnEWSJgiMVZ5OMxOJluFuvyKPNjvO0TTKWbz5mCOd3KKgiDOWfLgGenWcyLykQ-Wm1phnZMKTI2FWI7Qevgl~tLqd9AG8L3oSvkefqAtef5A0Pc0kktzUpUdT-B~2UJbsdvFi76rDWkZYJH4CQOyyxujAdg4jXnT-83mTVhP96aowkZTAcblEI-deGxvLSrUMbepmBslcoHYbK5Vxmi6SOUg__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/466/image/image.jpg?Expires=1760506705&Signature=TKab3Kbt8CvBaBHd3FasSrwX4QXgNsKeNby-Jg2UF9Hm9sBusCAubGylL5Z7Dd6OA5488~VGvXSRRQqhiADcpwQtvBE8YZScm04TZH0C2tWhUnMxIhmk7LBnZusP3SAZQmloL90K-2DuoK82nnUYpdtrHLOmn-fQ0Oef4H0NHd~UGCSt0qePPtkghIhpmfWxxq89q9Th9qrxtUnmPC~LsnV0NN6zxjyvyRUovRrgUXuOVjNxb0TS2lFfZWMDJ9mY3b2qWlIGju~E1u9N0Oor~8mMoTS2XT24gp~ZffdU2mND~nmCfS0NXkEeLOld2zKaurDPKBO9llBAKByZ0zT76g__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_66_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 66,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/466/image/image.jpg?Expires=1760506705&Signature=TKab3Kbt8CvBaBHd3FasSrwX4QXgNsKeNby-Jg2UF9Hm9sBusCAubGylL5Z7Dd6OA5488~VGvXSRRQqhiADcpwQtvBE8YZScm04TZH0C2tWhUnMxIhmk7LBnZusP3SAZQmloL90K-2DuoK82nnUYpdtrHLOmn-fQ0Oef4H0NHd~UGCSt0qePPtkghIhpmfWxxq89q9Th9qrxtUnmPC~LsnV0NN6zxjyvyRUovRrgUXuOVjNxb0TS2lFfZWMDJ9mY3b2qWlIGju~E1u9N0Oor~8mMoTS2XT24gp~ZffdU2mND~nmCfS0NXkEeLOld2zKaurDPKBO9llBAKByZ0zT76g__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/467/image/image.jpg?Expires=1760506705&Signature=k~Qy6pK2tkhx6eurP63QH~EMXMWvZ2sUV4k9TK5kq1Ydeo6Kxq09UvsoqVTctK54TB8fJzHmNaDir3ocjBgA5Yrl605evhAOdfMXhZ3U4yYScB~QVaLR27TBGCacThXZr7lt5JFpozetRAy-QQMKLoOqkGFTPWCNy2Q4yvUw33gP7MPDqxHsVf3lbWlt3pDrrYNvQ8AYVoChRW8XIJcyjiOJZn~PEfCofzSYuvhLrtyHEIFezYKGUJot7cE7ELyVElavW5Ag7EJ0~D0fXDTmLw91iDkNgY~1c7-7JAIfl3Qky5EF6eu0R5RvORFTMpP4Kro8JlnJ67Y4RfRuxgFQOg__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_67_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 67,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/467/image/image.jpg?Expires=1760506705&Signature=k~Qy6pK2tkhx6eurP63QH~EMXMWvZ2sUV4k9TK5kq1Ydeo6Kxq09UvsoqVTctK54TB8fJzHmNaDir3ocjBgA5Yrl605evhAOdfMXhZ3U4yYScB~QVaLR27TBGCacThXZr7lt5JFpozetRAy-QQMKLoOqkGFTPWCNy2Q4yvUw33gP7MPDqxHsVf3lbWlt3pDrrYNvQ8AYVoChRW8XIJcyjiOJZn~PEfCofzSYuvhLrtyHEIFezYKGUJot7cE7ELyVElavW5Ag7EJ0~D0fXDTmLw91iDkNgY~1c7-7JAIfl3Qky5EF6eu0R5RvORFTMpP4Kro8JlnJ67Y4RfRuxgFQOg__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/468/image/image.jpg?Expires=1760506705&Signature=nWTPQEZ~6mU9zjePfSwd68hFWqbRpAoNU54ehnVLIILIYJxsYoeuuNHtokFnOM6ogcynC5XVi2PRw4aGyT3RF7D4ARGB7GklgG~1D~S1lB8wcCysNj0~S~MVO3UeYNQJR0waKHW1~IIJ-FXYJvXvdeZM3DbISDLsbX~bTIxOoEkUPMQg-S1EicDmmLMyxKldBFzsOmgFbCVWyf4wWrSxIp7xmomKjhwwyfDDJ2dpEJ1UJQ2R~Zb8Xg4HUiQr6SzUcXaEJJOFjJw5sv0Io065-vfHyaCmbA1VWOX0-~ssZGAscJd7eWqvxtDgZhxjtVxJkceEQXkRgm9vo3bcpZNzOw__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_68_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 68,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/468/image/image.jpg?Expires=1760506705&Signature=nWTPQEZ~6mU9zjePfSwd68hFWqbRpAoNU54ehnVLIILIYJxsYoeuuNHtokFnOM6ogcynC5XVi2PRw4aGyT3RF7D4ARGB7GklgG~1D~S1lB8wcCysNj0~S~MVO3UeYNQJR0waKHW1~IIJ-FXYJvXvdeZM3DbISDLsbX~bTIxOoEkUPMQg-S1EicDmmLMyxKldBFzsOmgFbCVWyf4wWrSxIp7xmomKjhwwyfDDJ2dpEJ1UJQ2R~Zb8Xg4HUiQr6SzUcXaEJJOFjJw5sv0Io065-vfHyaCmbA1VWOX0-~ssZGAscJd7eWqvxtDgZhxjtVxJkceEQXkRgm9vo3bcpZNzOw__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/469/image/image.jpg?Expires=1760506705&Signature=tRk6HucXeHuSvgX9tjRnxv8nEDowu9h7X1SkY2vdoyJXxbI08rcY9a~htMO~2sfz0VU8Hkb98bJk2mJdGJWeIgeOmD0LOoPbPf-4b1jXD~t1wyfUHHuEWgpOaZYOpe3nTpUHRnJW99JmPFqE1CtPy5pCHFvANmD037EI9LpiOjqv8RyGcOtp0Qp1~dRMbXYDURuQcJ7g0hlXULoBuIbymeRk8X~aLi4XTXKMEDD1RGh4ziSa4WWeczPrlWxR2-po9sZ3fVt4VWhXDXQlqBoiiUd5uRdlsjxEcqIAhzy5vGnvf2vGRVGIfvvvCJrrA4woAJBv02yNF3T3cwwGL1M68w__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_69_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 69,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/469/image/image.jpg?Expires=1760506705&Signature=tRk6HucXeHuSvgX9tjRnxv8nEDowu9h7X1SkY2vdoyJXxbI08rcY9a~htMO~2sfz0VU8Hkb98bJk2mJdGJWeIgeOmD0LOoPbPf-4b1jXD~t1wyfUHHuEWgpOaZYOpe3nTpUHRnJW99JmPFqE1CtPy5pCHFvANmD037EI9LpiOjqv8RyGcOtp0Qp1~dRMbXYDURuQcJ7g0hlXULoBuIbymeRk8X~aLi4XTXKMEDD1RGh4ziSa4WWeczPrlWxR2-po9sZ3fVt4VWhXDXQlqBoiiUd5uRdlsjxEcqIAhzy5vGnvf2vGRVGIfvvvCJrrA4woAJBv02yNF3T3cwwGL1M68w__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/470/image/image.jpg?Expires=1760506705&Signature=YvHeQqzFd4dZWaj1kdI3f5UVjFUB0W5BB2tu8sAc4mTdMzB3khyqWy4y1IimupqALhpmQJe5cWQus~xNS5PnFH9AZ3IWZWDhUPs15CzH0Uewp69RPMiw2vdbQxvJB1sqewog4kOwYompj13lShxOrfSn2h9dNzNePo~-PfrTSWnSQSAPfdZfJpvjhd9fscObA3psODmG1s6TFoAzEPwhn0ELiBtcbQK8479WO6SD~h6ctDNzWj5oNIe20mzih9QkLHDd4EKv-WuCQlB18LxPyX4b7ro~1TFhzqNs1ifFFT6ewcaUNoWC~RXPot5HTag~IkAoD~ciEEhb5WwLllv~Fw__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_70_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 70,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/470/image/image.jpg?Expires=1760506705&Signature=YvHeQqzFd4dZWaj1kdI3f5UVjFUB0W5BB2tu8sAc4mTdMzB3khyqWy4y1IimupqALhpmQJe5cWQus~xNS5PnFH9AZ3IWZWDhUPs15CzH0Uewp69RPMiw2vdbQxvJB1sqewog4kOwYompj13lShxOrfSn2h9dNzNePo~-PfrTSWnSQSAPfdZfJpvjhd9fscObA3psODmG1s6TFoAzEPwhn0ELiBtcbQK8479WO6SD~h6ctDNzWj5oNIe20mzih9QkLHDd4EKv-WuCQlB18LxPyX4b7ro~1TFhzqNs1ifFFT6ewcaUNoWC~RXPot5HTag~IkAoD~ciEEhb5WwLllv~Fw__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/471/image/image.jpg?Expires=1760506705&Signature=yM4JkGW-v6HsKjjdLjcThm8k8Q~ellUzzh~GEKzK9M9iIvQrx13qxH9HU86qJcyF2ikiZUJBqMq0TwWCHYirAPj5GVeeOBmh2lheuU48W63YkSkQz3NsIi0~0X6y66YNYRx4yxRKGc09y9N45KFrtXmAWJ4GpcZ2TgiGN-LMGRfXurofWnn~k1uZ6e5ErLijcuJm0YyRJKCVxozLfZRT9TS3MZOlHdynJUxzs6jd3JlZIRKdFhRyHw7xMfpTHaqBddf5nbKxvYSpgdzCvqf9CrX7qhKuKeUi2FYhxk~Kosb2Ceosg1YwMYbKMoKQYdU-BQzCWRKOhnkHG4NGIz8FGg__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_71_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 71,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/471/image/image.jpg?Expires=1760506705&Signature=yM4JkGW-v6HsKjjdLjcThm8k8Q~ellUzzh~GEKzK9M9iIvQrx13qxH9HU86qJcyF2ikiZUJBqMq0TwWCHYirAPj5GVeeOBmh2lheuU48W63YkSkQz3NsIi0~0X6y66YNYRx4yxRKGc09y9N45KFrtXmAWJ4GpcZ2TgiGN-LMGRfXurofWnn~k1uZ6e5ErLijcuJm0YyRJKCVxozLfZRT9TS3MZOlHdynJUxzs6jd3JlZIRKdFhRyHw7xMfpTHaqBddf5nbKxvYSpgdzCvqf9CrX7qhKuKeUi2FYhxk~Kosb2Ceosg1YwMYbKMoKQYdU-BQzCWRKOhnkHG4NGIz8FGg__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/472/image/image.jpg?Expires=1760506705&Signature=o93P~LnBdsk4WhGFppBGjAgtzW83i6pGIrS24aQdqwpRTuvrlXyy7ydHFujQ83~V~HobYRhG0fZeP8KX3zAKgduE5nl1G2ViwassX7oRtLc6LzQ8LURfTai~DuB-IE9sCPD8pUq15d3-eTCojiK6mIZElUBlXKNWvw8Z9ES53jKB1P39nUin-qlVvW4QI58WMnqYsLxTzPRIrdO00QEiC9YmSUOVpLsm7q8sT6Sc0ELDgMGiCI8-yVAel4ihMfuzEAHlocSwdJ00zn2VoL0vU4OiydWKOncBZtARYis~MrC7KoUgMtrd2RvqC7t1AAP54SmpjZDPXHxlN0s0jBy8xA__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_72_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 72,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/472/image/image.jpg?Expires=1760506705&Signature=o93P~LnBdsk4WhGFppBGjAgtzW83i6pGIrS24aQdqwpRTuvrlXyy7ydHFujQ83~V~HobYRhG0fZeP8KX3zAKgduE5nl1G2ViwassX7oRtLc6LzQ8LURfTai~DuB-IE9sCPD8pUq15d3-eTCojiK6mIZElUBlXKNWvw8Z9ES53jKB1P39nUin-qlVvW4QI58WMnqYsLxTzPRIrdO00QEiC9YmSUOVpLsm7q8sT6Sc0ELDgMGiCI8-yVAel4ihMfuzEAHlocSwdJ00zn2VoL0vU4OiydWKOncBZtARYis~MrC7KoUgMtrd2RvqC7t1AAP54SmpjZDPXHxlN0s0jBy8xA__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/473/image/image.jpg?Expires=1760506705&Signature=qSJRRkyghkOoZPSR-aUC27NvfM4KIZXBv6YMuXvfgyW8goQl~NaEgwDxlk3Nn75NmXCTYcLUyq~3BW-EEWEcsPbWqJwf4yIhP1AWII0gktPKTa8k66KewXnkrc~8HYp8wFXzAPK5B0Y6E2f4rMRaRA19PjgHA7RYUyoBMv6bEnO8KMpu1qyiBOyfC0C3r6MX~hpEUph7fILDXoHFsxgD2p7Ce00MqH6G1rliRANbsuoJ08RKeAg6GGOG-afvup-y6zAmFYN3iugtfteQysnmXXek2MsW81Z~TMRh9SaYAlCDAOxKQ75NKKVrgzFhsv9dlJeviM9~o1Jq0~l3GQWM3Q__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_73_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 73,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/473/image/image.jpg?Expires=1760506705&Signature=qSJRRkyghkOoZPSR-aUC27NvfM4KIZXBv6YMuXvfgyW8goQl~NaEgwDxlk3Nn75NmXCTYcLUyq~3BW-EEWEcsPbWqJwf4yIhP1AWII0gktPKTa8k66KewXnkrc~8HYp8wFXzAPK5B0Y6E2f4rMRaRA19PjgHA7RYUyoBMv6bEnO8KMpu1qyiBOyfC0C3r6MX~hpEUph7fILDXoHFsxgD2p7Ce00MqH6G1rliRANbsuoJ08RKeAg6GGOG-afvup-y6zAmFYN3iugtfteQysnmXXek2MsW81Z~TMRh9SaYAlCDAOxKQ75NKKVrgzFhsv9dlJeviM9~o1Jq0~l3GQWM3Q__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/474/image/image.jpg?Expires=1760506705&Signature=Zt7XnFkVKOnqX3K0~y73CSAlZHZnw6c002blPBTt9YB04H9296i29XqJkhhvTPTQIt0VsXzjr8aiyJjpEZxHHL0ns2MtthkiRTP8ZVZYRiqXF5d-gMZYdc3kV2jkTxsCQqw0jFCtbds4EfX-WRgHaHYyhP-Bgy-fPhe91Hw4ZlVlqVDKdoL6trCyRhBuTp5bFfdlmUv-gyu~svE1ubFY-uOyAl83R9LlmEFjuwSKN~pWWScVkZGxYx6iC7PxadUObDhgMxe21cNFHjqXN21JQEpjL3ps8mDGm1uLCHHaIGHpDu0~k4i0wVjBLnzr1QrLoaT8OtYbJfPAyf2H6J4ieQ__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_74_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 74,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/474/image/image.jpg?Expires=1760506705&Signature=Zt7XnFkVKOnqX3K0~y73CSAlZHZnw6c002blPBTt9YB04H9296i29XqJkhhvTPTQIt0VsXzjr8aiyJjpEZxHHL0ns2MtthkiRTP8ZVZYRiqXF5d-gMZYdc3kV2jkTxsCQqw0jFCtbds4EfX-WRgHaHYyhP-Bgy-fPhe91Hw4ZlVlqVDKdoL6trCyRhBuTp5bFfdlmUv-gyu~svE1ubFY-uOyAl83R9LlmEFjuwSKN~pWWScVkZGxYx6iC7PxadUObDhgMxe21cNFHjqXN21JQEpjL3ps8mDGm1uLCHHaIGHpDu0~k4i0wVjBLnzr1QrLoaT8OtYbJfPAyf2H6J4ieQ__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/475/image/image.jpg?Expires=1760506705&Signature=kUj0HjfpJdwBlA5RBXnQJ8ZkkmLjg~yzmFQEOFIaKT-~uB0eQpxO0wdpM7P~uXaMWieJKODLI5-uta~TtVLE7QT3lG7MFBaBnxfL6f~WK~Gz1USgEEbQJrOG0BmNUm8q2m5wB817EXZv0o8~B7n7osDzM6P3ReLjgcrszQ3sJ1bHVYRayzUabOyCqok7KWi9HMgSY0IHJiTq3ks5YDIqOOCo-BxWfbPvq5cfWuSOQD7oRLqzeB60iFVwzH-rMX2M3HZnQ8BHk3cu0wj8x~wXj9DJnhleI8LJ95msq5IETa7j22jveNYpNIyjcGtDBUaBtRDeQcGvORiMsskVVoW6qw__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_75_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 75,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/475/image/image.jpg?Expires=1760506705&Signature=kUj0HjfpJdwBlA5RBXnQJ8ZkkmLjg~yzmFQEOFIaKT-~uB0eQpxO0wdpM7P~uXaMWieJKODLI5-uta~TtVLE7QT3lG7MFBaBnxfL6f~WK~Gz1USgEEbQJrOG0BmNUm8q2m5wB817EXZv0o8~B7n7osDzM6P3ReLjgcrszQ3sJ1bHVYRayzUabOyCqok7KWi9HMgSY0IHJiTq3ks5YDIqOOCo-BxWfbPvq5cfWuSOQD7oRLqzeB60iFVwzH-rMX2M3HZnQ8BHk3cu0wj8x~wXj9DJnhleI8LJ95msq5IETa7j22jveNYpNIyjcGtDBUaBtRDeQcGvORiMsskVVoW6qw__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/476/image/image.jpg?Expires=1760506705&Signature=qXJ49yVgPPA4CwSTZtJxfwr0XsabB8fpkfPSEqsiljrbfhCpU2PTzMJ154HNlYaa0oNrAVONYjBiH2Sm52WaxLUzqPh3CiNmjbuSJ1d7kJLTe9~fkG4wIGMSi5JZpX9k2Odf5j55Z99efZXlR8reAljeTOKExeYAIWRhRcGFPh~JXIG3Y2DPvKprHMWV7ZM3QbIb1D7tPPXualpqWUF~iW0~DG8kVWf6cSjAcGjnRw1247UpUZgEOc2wjRhsmAjvKoz-25VrVg~Y7Qr81F0wscIXfg0B4G6KqE1mpeO2wSFE9k5VMTCPdrrFtqBg62~p6BweoRJqrGGsGK8kkVP1mA__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_76_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 76,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/476/image/image.jpg?Expires=1760506705&Signature=qXJ49yVgPPA4CwSTZtJxfwr0XsabB8fpkfPSEqsiljrbfhCpU2PTzMJ154HNlYaa0oNrAVONYjBiH2Sm52WaxLUzqPh3CiNmjbuSJ1d7kJLTe9~fkG4wIGMSi5JZpX9k2Odf5j55Z99efZXlR8reAljeTOKExeYAIWRhRcGFPh~JXIG3Y2DPvKprHMWV7ZM3QbIb1D7tPPXualpqWUF~iW0~DG8kVWf6cSjAcGjnRw1247UpUZgEOc2wjRhsmAjvKoz-25VrVg~Y7Qr81F0wscIXfg0B4G6KqE1mpeO2wSFE9k5VMTCPdrrFtqBg62~p6BweoRJqrGGsGK8kkVP1mA__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/477/image/image.jpg?Expires=1760506705&Signature=V4IUtiRYQOSDpblHbLk97yjokrW1dfffQz72TiUKYoHTp0R8ZCx4vlI2EbVU~GUGKeGwCVscVBia8GKynbkbnqx98jTtLemdo-Y~MN~WXWaCqMlsp0hfoXgL-qsyXBIhnLXOC1fy5s3Ong7QrSACQZUwhNozxZG~z8RTgYNjJ9qEr673SSJNNcBy72udIOlFOROObWTpqATkAuHmwY9SRtCY3m0Os54JpcSXaYdVQaujmz-QhUCSInTEomzZvhd8VDiz69kDC-P7E2D601ifpf4x94uFaUfhifCLjWbGoJ5tGBoo-IzPPV-lVpkL392J4ymvwVD0McMFCe9OJlkbSw__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_77_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 77,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/477/image/image.jpg?Expires=1760506705&Signature=V4IUtiRYQOSDpblHbLk97yjokrW1dfffQz72TiUKYoHTp0R8ZCx4vlI2EbVU~GUGKeGwCVscVBia8GKynbkbnqx98jTtLemdo-Y~MN~WXWaCqMlsp0hfoXgL-qsyXBIhnLXOC1fy5s3Ong7QrSACQZUwhNozxZG~z8RTgYNjJ9qEr673SSJNNcBy72udIOlFOROObWTpqATkAuHmwY9SRtCY3m0Os54JpcSXaYdVQaujmz-QhUCSInTEomzZvhd8VDiz69kDC-P7E2D601ifpf4x94uFaUfhifCLjWbGoJ5tGBoo-IzPPV-lVpkL392J4ymvwVD0McMFCe9OJlkbSw__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/478/image/image.jpg?Expires=1760506705&Signature=P5kG2mw3ZaFhlQysfqBh2vtu6k-pgdz-sdw7lKyZzFAQbEqmeIEiTWbMC7GCIQP6d31fQF-DBp9Wc9SDFKqMSUMvGx4-pD0eh2RjKAy7Ebf9Ccxb1C9ZZSFk7fc9PqcXfzUHZQR9c~0YQoZkpJBkmuAgNVXCs80845zhY5UcJ-meiEWIw89jJeQcjtuEaCNmj18NYjDUEyTe04vd8Aljyz77YwO84WjUIeaTx5Ho0YaJXQg3m-CD-8gnyungv6MmMvGtiX42VcxE~ltuY68J8QIcpX4n0Et23NviGBUB0tSQm3pYZs4XV~FGVO63UqNTTcBWP1jq~z7Nv3erPDui9A__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_78_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 78,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/478/image/image.jpg?Expires=1760506705&Signature=P5kG2mw3ZaFhlQysfqBh2vtu6k-pgdz-sdw7lKyZzFAQbEqmeIEiTWbMC7GCIQP6d31fQF-DBp9Wc9SDFKqMSUMvGx4-pD0eh2RjKAy7Ebf9Ccxb1C9ZZSFk7fc9PqcXfzUHZQR9c~0YQoZkpJBkmuAgNVXCs80845zhY5UcJ-meiEWIw89jJeQcjtuEaCNmj18NYjDUEyTe04vd8Aljyz77YwO84WjUIeaTx5Ho0YaJXQg3m-CD-8gnyungv6MmMvGtiX42VcxE~ltuY68J8QIcpX4n0Et23NviGBUB0tSQm3pYZs4XV~FGVO63UqNTTcBWP1jq~z7Nv3erPDui9A__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/479/image/image.jpg?Expires=1760506705&Signature=YU-TiYcNZBpikpJQH6k-tHXjXI-3LYx~PfxvQXdA3uh12udVrweLYBh~d74OpD-kvm4TF3tARx8jMkKZCSa8TSHaT15EB9roOl0fGKwDLxZpn2xMFq5FgCnBcV~dMUmCIn4SmEu7rcjyDCqva~sCZR1BmmnW94D9NydIr4JriW6UGtneG-irwEuowpxHl5U2LEPS1T7Giyw4AmsMpn0H7Q8i-hGRaH~C9jQrzA9AyWDtzxZpjlvlXoivvc~PKpN89UoqGAPlMd4MId-y0eEhUSh-XkF-H6nXqmxA6wNVNPIngGTOt8X-0ivkE41FydGzjoO-HbcyHcXx2HSXzcj1Vg__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_79_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 79,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/479/image/image.jpg?Expires=1760506705&Signature=YU-TiYcNZBpikpJQH6k-tHXjXI-3LYx~PfxvQXdA3uh12udVrweLYBh~d74OpD-kvm4TF3tARx8jMkKZCSa8TSHaT15EB9roOl0fGKwDLxZpn2xMFq5FgCnBcV~dMUmCIn4SmEu7rcjyDCqva~sCZR1BmmnW94D9NydIr4JriW6UGtneG-irwEuowpxHl5U2LEPS1T7Giyw4AmsMpn0H7Q8i-hGRaH~C9jQrzA9AyWDtzxZpjlvlXoivvc~PKpN89UoqGAPlMd4MId-y0eEhUSh-XkF-H6nXqmxA6wNVNPIngGTOt8X-0ivkE41FydGzjoO-HbcyHcXx2HSXzcj1Vg__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/480/image/image.jpg?Expires=1760506705&Signature=kF-WEm20zJkSoOScU9JdNhHnOKZma~-vEc3RY~hLHWF92k9XBjGCh~kXF7R5buNaj1T6r3fsPghBnBozUNrQw0~p2ow6C1UgId6QlsAaUiIl0rvuI3C9ikFOKqHG30~FvZF3CEWx0sntrqY5SvlufrydILwJjYKh8CSJs2B2DgoW-BGXOO7KIj-HFDkMMWh-1Fi7Oe4zeYM0Ldo1IcQUGUWvlPLAJ6fNs9snEBd2ioEv4-kchz4vwda5py82EPkOfB-lwK2rHV-1BalKhLlW6lkukx~mgAR8qH5yql6XKKbQPbyUWd4a0JwpWO8rkfmeTP5At9CX1o3y9k~Kpuh-yw__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_80_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 80,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/480/image/image.jpg?Expires=1760506705&Signature=kF-WEm20zJkSoOScU9JdNhHnOKZma~-vEc3RY~hLHWF92k9XBjGCh~kXF7R5buNaj1T6r3fsPghBnBozUNrQw0~p2ow6C1UgId6QlsAaUiIl0rvuI3C9ikFOKqHG30~FvZF3CEWx0sntrqY5SvlufrydILwJjYKh8CSJs2B2DgoW-BGXOO7KIj-HFDkMMWh-1Fi7Oe4zeYM0Ldo1IcQUGUWvlPLAJ6fNs9snEBd2ioEv4-kchz4vwda5py82EPkOfB-lwK2rHV-1BalKhLlW6lkukx~mgAR8qH5yql6XKKbQPbyUWd4a0JwpWO8rkfmeTP5At9CX1o3y9k~Kpuh-yw__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/481/image/image.jpg?Expires=1760506705&Signature=mKcgGF0I02c518ymiwO-1M6NNa8t0Ep-2yxUS~0hSPZwTzRc~oPuBYkIhpw-eIQdTQVo0DlkgszFBdMpE0y5fKmGwuD9OsMc2PcN9RMrf1ezgGmaI1R46Q4UYG7kLWlfnrOkiOaHJD~U21waS7I9UpNEms050AKRzy6xqJ5IGTcOdIP7hYi-FUS5cuZ~Ji--khJNTmLtN~eFmQ2w4p5soaVNsPr1VJKtSFLlQbCDqQFIy7W~dxIG3~2RlM01mxvdDctxIStYcrVD81Y0TsjySZcTZMB4fCg8B9msMROO4pM-5eoev3N0yto-XIHIXttrcrOLyg-qp0n8MgVH6VQFEw__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_81_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 81,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/481/image/image.jpg?Expires=1760506705&Signature=mKcgGF0I02c518ymiwO-1M6NNa8t0Ep-2yxUS~0hSPZwTzRc~oPuBYkIhpw-eIQdTQVo0DlkgszFBdMpE0y5fKmGwuD9OsMc2PcN9RMrf1ezgGmaI1R46Q4UYG7kLWlfnrOkiOaHJD~U21waS7I9UpNEms050AKRzy6xqJ5IGTcOdIP7hYi-FUS5cuZ~Ji--khJNTmLtN~eFmQ2w4p5soaVNsPr1VJKtSFLlQbCDqQFIy7W~dxIG3~2RlM01mxvdDctxIStYcrVD81Y0TsjySZcTZMB4fCg8B9msMROO4pM-5eoev3N0yto-XIHIXttrcrOLyg-qp0n8MgVH6VQFEw__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/482/image/image.jpg?Expires=1760506705&Signature=jOH-prrNlCxdGJIeftYuBOQT-l9pFWl2IMp5ER78ibSlJzlObqC3OFB1L5qxytybVHQQksYBAvzSYm9unoT1cJ8tzdTWKL~SG26U~xZsONXhpbpPo-aflZiO~U7bN~P~fmO306Cf8hUT2Nr8PZojts4Jci-L2XLatGAAvCWF7ANCtA-5bad5Vts30gm3vTYPxxxCCYbj3VEe0ZLIzqGbE35OtrGslPmWT7GioHLmSPLM02YwM6rhZXf-buOidOtvDyI8ne26WVMw2cPEBaVFSzoDUbhzGFOpWWPCTQ6UQUCBcxtE5Q-9wodj-fonUgXyDvPKet1UC-Z6HghqCYskQw__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_82_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 82,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/482/image/image.jpg?Expires=1760506705&Signature=jOH-prrNlCxdGJIeftYuBOQT-l9pFWl2IMp5ER78ibSlJzlObqC3OFB1L5qxytybVHQQksYBAvzSYm9unoT1cJ8tzdTWKL~SG26U~xZsONXhpbpPo-aflZiO~U7bN~P~fmO306Cf8hUT2Nr8PZojts4Jci-L2XLatGAAvCWF7ANCtA-5bad5Vts30gm3vTYPxxxCCYbj3VEe0ZLIzqGbE35OtrGslPmWT7GioHLmSPLM02YwM6rhZXf-buOidOtvDyI8ne26WVMw2cPEBaVFSzoDUbhzGFOpWWPCTQ6UQUCBcxtE5Q-9wodj-fonUgXyDvPKet1UC-Z6HghqCYskQw__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/483/image/image.jpg?Expires=1760506705&Signature=CRU6fqzMU0Ux2uydA6mpP0ORwbykuPBeA4KPiJV5h-2C8EP7r2DtQj42ZvNdsNQ0~sSXSKyuEyKLVIlEaqukZTMLACfzNBWlJ7AP9QMF2ITl3jxyzN-sGfTXWQoRmphH-6~nf03VetJMe8sbyBoLC3bcBydwDbG5eMf1pNn9bg-RRogTCq9-OgjCb3JkfqFYOSwhBhqwJIbeWV~XzT4pWi1732UvOkz2SxnLHhLQ6ZPq3l~lmE3kLc16IwHO4HZ0zvFJze9zQpPWCy9LdpBa0Hpq5GFQqNlsgdWhrZEsg8PPvpjDCdRLRNCUhd2DR8Vko2PE6vSbYZSQ4i9QDLFriA__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_83_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 83,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/483/image/image.jpg?Expires=1760506705&Signature=CRU6fqzMU0Ux2uydA6mpP0ORwbykuPBeA4KPiJV5h-2C8EP7r2DtQj42ZvNdsNQ0~sSXSKyuEyKLVIlEaqukZTMLACfzNBWlJ7AP9QMF2ITl3jxyzN-sGfTXWQoRmphH-6~nf03VetJMe8sbyBoLC3bcBydwDbG5eMf1pNn9bg-RRogTCq9-OgjCb3JkfqFYOSwhBhqwJIbeWV~XzT4pWi1732UvOkz2SxnLHhLQ6ZPq3l~lmE3kLc16IwHO4HZ0zvFJze9zQpPWCy9LdpBa0Hpq5GFQqNlsgdWhrZEsg8PPvpjDCdRLRNCUhd2DR8Vko2PE6vSbYZSQ4i9QDLFriA__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/484/image/image.jpg?Expires=1760506705&Signature=AjgzsKFMkvbaKtwNBcSFzm5XhErPiHRxoxz2LuuAzA2fbvvXXGtFhbtglKt0byiDGiYgn4T2DRHMhNGnLThUNtTx3MhO7r1IR2i0K0N~7ADSwX14MH7MbAgzz5cAjXRZncLHfGOY6UnRftrN-fcrvzYpwozirOdd2Jqf96xTOZytqhKnjm4rYWHgD55QY0Ef4hsbqjxoQIg3uBaUJ2T3iikD9MuoBnaHFqftu6DL8Z0WQaKaUj~lFXlGLZknanSgJHAfsKkJsaiA7wUxJzkuKebHRQdDdcixg0mm0vREZ5ZRPgfMzJdOTJFWCY0OiY9S~2kFUZeLh4JK6PAoHSrGRw__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_84_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 84,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/484/image/image.jpg?Expires=1760506705&Signature=AjgzsKFMkvbaKtwNBcSFzm5XhErPiHRxoxz2LuuAzA2fbvvXXGtFhbtglKt0byiDGiYgn4T2DRHMhNGnLThUNtTx3MhO7r1IR2i0K0N~7ADSwX14MH7MbAgzz5cAjXRZncLHfGOY6UnRftrN-fcrvzYpwozirOdd2Jqf96xTOZytqhKnjm4rYWHgD55QY0Ef4hsbqjxoQIg3uBaUJ2T3iikD9MuoBnaHFqftu6DL8Z0WQaKaUj~lFXlGLZknanSgJHAfsKkJsaiA7wUxJzkuKebHRQdDdcixg0mm0vREZ5ZRPgfMzJdOTJFWCY0OiY9S~2kFUZeLh4JK6PAoHSrGRw__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/485/image/image.jpg?Expires=1760506705&Signature=z7DiJKuAMBlWBXXq6auPV8YVu2FO0BH2ktgkyX1pKq8QhMaJNu39k690CDpUUtZEkcvTSn8r59TchL-8zwu7w8y06SmIhmD87suuqM1V3MtmDOzQOtgy9oJznfC56HCQdHeQUUw83mjRbZBUwnMykciQuwTdcOzUeeZLQTsJ74Dw2oKz1Q4bwZjjgqnsaz83PeA~Dh~iORKijmtQBkJqDsd9ogP~GrnZw5~AhpgdJ-leLn63RDnCeRCHq5t9B9vwI6fQhkFa~-xUVnPazoGLzYNy3GGJDLHnkItpnMn1B-gKP82axFDlmzZel948vQ~LMl6J0qKVO3dfLgflCGU4xA__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_85_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 85,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/485/image/image.jpg?Expires=1760506705&Signature=z7DiJKuAMBlWBXXq6auPV8YVu2FO0BH2ktgkyX1pKq8QhMaJNu39k690CDpUUtZEkcvTSn8r59TchL-8zwu7w8y06SmIhmD87suuqM1V3MtmDOzQOtgy9oJznfC56HCQdHeQUUw83mjRbZBUwnMykciQuwTdcOzUeeZLQTsJ74Dw2oKz1Q4bwZjjgqnsaz83PeA~Dh~iORKijmtQBkJqDsd9ogP~GrnZw5~AhpgdJ-leLn63RDnCeRCHq5t9B9vwI6fQhkFa~-xUVnPazoGLzYNy3GGJDLHnkItpnMn1B-gKP82axFDlmzZel948vQ~LMl6J0qKVO3dfLgflCGU4xA__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/486/image/image.jpg?Expires=1760506705&Signature=q0qA0PAxW68BBIjF2VEpVcb5ZkjzcvqwPR7gS2uPvPon573Wtzt~rMvxJRscuz3QVxPJxQkMuqlNSc8GJYLz9LprXX~bnjM89jVsbfPbo0Wa2LTS0PLazX3VypG4SE2fPaZW52ckFfbzhusfl9bcvtR49Cg~kV9qNxoSkMM5pY9I85SRktHxZPPDDGiHEEL5h4QTR6VbNm5TM9RMm~OUySHVaf~WhFT1pbRUHLk6PII~JCgNMNGZ7R02e0LUCvQiBHPn3YpzixO8NRZvGjhzmD5Bu0SYMiivmmGHOw6ZHBfACFl1f5tamqrEQgE7IyGquPYJryxwaiXrL5GsbWkYsQ__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_86_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 86,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/486/image/image.jpg?Expires=1760506705&Signature=q0qA0PAxW68BBIjF2VEpVcb5ZkjzcvqwPR7gS2uPvPon573Wtzt~rMvxJRscuz3QVxPJxQkMuqlNSc8GJYLz9LprXX~bnjM89jVsbfPbo0Wa2LTS0PLazX3VypG4SE2fPaZW52ckFfbzhusfl9bcvtR49Cg~kV9qNxoSkMM5pY9I85SRktHxZPPDDGiHEEL5h4QTR6VbNm5TM9RMm~OUySHVaf~WhFT1pbRUHLk6PII~JCgNMNGZ7R02e0LUCvQiBHPn3YpzixO8NRZvGjhzmD5Bu0SYMiivmmGHOw6ZHBfACFl1f5tamqrEQgE7IyGquPYJryxwaiXrL5GsbWkYsQ__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/487/image/image.jpg?Expires=1760506705&Signature=s4tADIhKfakdpJumq8dlowmi4HM5R3L1TMlFfkFelUBr4H3vlc9-TBCzFU-mYLkSMkB2sqnlne9~UZMxIWUrYWQUvHWAchjA6oeOdUI-NDt10h4uPKzQZh6EW0EvuazbMs5nJphPaBNO-s8eo-4WolimUZzT95-3UT8ao8SYqUwbmSzdqte3sQQ0IUBzO0cyiQF2n5cLIOD3Fb1KVq3rOZMmOTornVWQTaihvA8SvgTdiS53ZmMKOsvx4I2i0O~eUwY4CWD4SXYaeCiKc84gmpgZDjMqeaWjl329h4An3IgTod7H3CULgq-dqxWOEC1NmIJSQ9SMEgFKhOP576TiXA__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_87_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 87,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/487/image/image.jpg?Expires=1760506705&Signature=s4tADIhKfakdpJumq8dlowmi4HM5R3L1TMlFfkFelUBr4H3vlc9-TBCzFU-mYLkSMkB2sqnlne9~UZMxIWUrYWQUvHWAchjA6oeOdUI-NDt10h4uPKzQZh6EW0EvuazbMs5nJphPaBNO-s8eo-4WolimUZzT95-3UT8ao8SYqUwbmSzdqte3sQQ0IUBzO0cyiQF2n5cLIOD3Fb1KVq3rOZMmOTornVWQTaihvA8SvgTdiS53ZmMKOsvx4I2i0O~eUwY4CWD4SXYaeCiKc84gmpgZDjMqeaWjl329h4An3IgTod7H3CULgq-dqxWOEC1NmIJSQ9SMEgFKhOP576TiXA__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/488/image/image.jpg?Expires=1760506705&Signature=quL08gQc1jf8wSRtjIKMrXPHpkNQJMWpsLaNhOHWY2xLquHQ2HQ1hzjsJRolk-MQeVnz965BSunj~PKa94S8IBfSyWV3q3GXKmT5xwl1lHpqIU5O4Pe6IB3jl9wkaSBvGdtZt05-eIamINFdvTfYxpcD4dFmI~TMUUQnqA7AR9j2nF-DlHsbhNxvlBfxUaOH0ZJAciH8-6g-eeGj5uuKm2CSHk6mGVwmLuHWZ0Fn3XeYtHJuNhJalqoQbOlOXXIBSHhKvs2tiTLbT-DpiiU1Ku90akISu5YdfaEAb4Ylj3QKOfkkdtN9cAABCzM8qzairEktOx64K8LWv0l1Au7Vkw__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_88_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 88,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/488/image/image.jpg?Expires=1760506705&Signature=quL08gQc1jf8wSRtjIKMrXPHpkNQJMWpsLaNhOHWY2xLquHQ2HQ1hzjsJRolk-MQeVnz965BSunj~PKa94S8IBfSyWV3q3GXKmT5xwl1lHpqIU5O4Pe6IB3jl9wkaSBvGdtZt05-eIamINFdvTfYxpcD4dFmI~TMUUQnqA7AR9j2nF-DlHsbhNxvlBfxUaOH0ZJAciH8-6g-eeGj5uuKm2CSHk6mGVwmLuHWZ0Fn3XeYtHJuNhJalqoQbOlOXXIBSHhKvs2tiTLbT-DpiiU1Ku90akISu5YdfaEAb4Ylj3QKOfkkdtN9cAABCzM8qzairEktOx64K8LWv0l1Au7Vkw__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/489/image/image.jpg?Expires=1760506705&Signature=uKMskcN6~XtuJE0jq877oZq0aURWAv-WDMMeqQaObmCPFWwlAjaYHY9Iest6H9p~stOYIMPaBUv74XvI4ezGCoIRNN4Ndpvx1h1ztqgV809KKqQkcrxVaPxfefnajVfThCI-xV7i2OCfcTAraHQHt7~gmHt6XyYdOxo7afVZeR46YXAfzYdvjHwaK5ScAPiGqElBRoqezrVnMTlDB5~~wBNHhEex8axOOV3H~GAnvK4HEXTDAzb9X7NgaBEYnfhKGH7xLS0w3sHKzfbppUkfMBFz4R6UCobns2WeAYbmlPUaZ1ROKjjNC5JeJWr7mPgYbJF7MuGf1bx9z8QIBQBqGA__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_89_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 89,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/489/image/image.jpg?Expires=1760506705&Signature=uKMskcN6~XtuJE0jq877oZq0aURWAv-WDMMeqQaObmCPFWwlAjaYHY9Iest6H9p~stOYIMPaBUv74XvI4ezGCoIRNN4Ndpvx1h1ztqgV809KKqQkcrxVaPxfefnajVfThCI-xV7i2OCfcTAraHQHt7~gmHt6XyYdOxo7afVZeR46YXAfzYdvjHwaK5ScAPiGqElBRoqezrVnMTlDB5~~wBNHhEex8axOOV3H~GAnvK4HEXTDAzb9X7NgaBEYnfhKGH7xLS0w3sHKzfbppUkfMBFz4R6UCobns2WeAYbmlPUaZ1ROKjjNC5JeJWr7mPgYbJF7MuGf1bx9z8QIBQBqGA__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/490/image/image.jpg?Expires=1760506705&Signature=AGbgGw-wWJl7cdqzGc5M6q5286UxLYhuqghFPDMCfOwOn38aXAzNufQwwkF3Spy4-oKl4GwCr2gGjVrqzRwy-9EVIifiHIhV-FzdHPZEAd9ryK63NanY2pUT2GUYxC6~4rMgq5R5NKCx7NCtLrxmLLyBq46-z-bvvXULfp~Eea0WL6vamVhv4vpVlcvymSfqyOx4q-4QYhDCfZsTCCr08KJLESw4m5BUDtyPCe97aNvOGIfjYKidorc05ktRTuanhTrmmM8o6OlmTDyFSKvlhSKQowX36NvjGZ7UgTxxnwTALmM30QshHRlsh~-Gt2Fv~LVPKOQ3nRiGCajhBadCBQ__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_90_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 90,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/490/image/image.jpg?Expires=1760506705&Signature=AGbgGw-wWJl7cdqzGc5M6q5286UxLYhuqghFPDMCfOwOn38aXAzNufQwwkF3Spy4-oKl4GwCr2gGjVrqzRwy-9EVIifiHIhV-FzdHPZEAd9ryK63NanY2pUT2GUYxC6~4rMgq5R5NKCx7NCtLrxmLLyBq46-z-bvvXULfp~Eea0WL6vamVhv4vpVlcvymSfqyOx4q-4QYhDCfZsTCCr08KJLESw4m5BUDtyPCe97aNvOGIfjYKidorc05ktRTuanhTrmmM8o6OlmTDyFSKvlhSKQowX36NvjGZ7UgTxxnwTALmM30QshHRlsh~-Gt2Fv~LVPKOQ3nRiGCajhBadCBQ__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/491/image/image.jpg?Expires=1760506705&Signature=h0JamKxnC7vbHMo7EGQopILMsgFBy6eWjyL5Dr2b9mK6txpSr7CQXvWIvehsgFUzv2jbT2~gO-lOzwOG2vfw2NostDe-9Z-jVrtlY3uAS4mik97pkHqv0W63~DQ~4jMfwSabCeAGqHfWkvdH3ItSJbYwZrmGVghxNUjZwiZwUgha0rN1mjVPY8kUrGBz8qD-qn~uRq243SRqC8SUtNbtUmJdPUgA87AY8x9M6wjSbDWPhzjOj9yjZTV3U53v7LrPVUct98f6VQu2liY7UemZuAYmRXXp5luBOB93svk041b2F5OLK8nL18pjXO4FumCXDE~rTroY4p5t~CB02Hch1A__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_91_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 91,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/491/image/image.jpg?Expires=1760506705&Signature=h0JamKxnC7vbHMo7EGQopILMsgFBy6eWjyL5Dr2b9mK6txpSr7CQXvWIvehsgFUzv2jbT2~gO-lOzwOG2vfw2NostDe-9Z-jVrtlY3uAS4mik97pkHqv0W63~DQ~4jMfwSabCeAGqHfWkvdH3ItSJbYwZrmGVghxNUjZwiZwUgha0rN1mjVPY8kUrGBz8qD-qn~uRq243SRqC8SUtNbtUmJdPUgA87AY8x9M6wjSbDWPhzjOj9yjZTV3U53v7LrPVUct98f6VQu2liY7UemZuAYmRXXp5luBOB93svk041b2F5OLK8nL18pjXO4FumCXDE~rTroY4p5t~CB02Hch1A__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/492/image/image.jpg?Expires=1760506705&Signature=sZ7t9DbWpdz7xa2ZPXVbqSVvfJEPrqRqsawR5qYMWgVGwVfuYgeuY-lRYBj1G6wlUaUhAFONpzCWPddNnQ~tilkmdnhTWNXNUwA-MBL2p0Bf0rjzq-W9jXcM6~II5enhqYZM6R2sHm99qhUpoU54XVaNiUUfNpLYhoSPtj3UTnTr5ZDGvAh2f5wZHFU9HYuo2DvkNio5PIzAwXyynIqj4OT8dltPRj0OOGjiQwQAv66v0ZuIe~Rs26TKmRB7i2r3SBBXEP9uhpHIb2z~uN8NXtE9DwjLCwBV~7ud6WExup6zQGi6m5kmq228TT~zGVexBmLKQ5iv~HVGCLhe4tIsPQ__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_92_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 92,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/492/image/image.jpg?Expires=1760506705&Signature=sZ7t9DbWpdz7xa2ZPXVbqSVvfJEPrqRqsawR5qYMWgVGwVfuYgeuY-lRYBj1G6wlUaUhAFONpzCWPddNnQ~tilkmdnhTWNXNUwA-MBL2p0Bf0rjzq-W9jXcM6~II5enhqYZM6R2sHm99qhUpoU54XVaNiUUfNpLYhoSPtj3UTnTr5ZDGvAh2f5wZHFU9HYuo2DvkNio5PIzAwXyynIqj4OT8dltPRj0OOGjiQwQAv66v0ZuIe~Rs26TKmRB7i2r3SBBXEP9uhpHIb2z~uN8NXtE9DwjLCwBV~7ud6WExup6zQGi6m5kmq228TT~zGVexBmLKQ5iv~HVGCLhe4tIsPQ__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/493/image/image.jpg?Expires=1760506705&Signature=kZpaXQxCi8FzG9JUlaEQbK7LKFi9OKRbChqlHj3gFumc67WXJ38HVJzoE17YFgYB4HHXVUx9UFnJM7dVC8IqWYEpaYUUzVQbAfRoBTc99N0YF3mk-iYsyzBjpYIoa7zvi4qbpvfb70vA~LCgQ11EYu-qexm4Nl2PTch452fcM4gQ1BC2f2YjNhJ9fzzmeebRL2e0Qh-1RX6fnHTMzJbyd1S4GZBQ7NJU4EXN4ym~R7FhXN1~AnVCJgrwDsaVD4OyP0-Dk7NfX1CywUOfsbycezPiZEkvh72exhJH5t3kWoZ-6eeiJOqPfL-iq81Lgng4-pvMpK9-5clBOiTBCDBBVw__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_93_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 93,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/493/image/image.jpg?Expires=1760506705&Signature=kZpaXQxCi8FzG9JUlaEQbK7LKFi9OKRbChqlHj3gFumc67WXJ38HVJzoE17YFgYB4HHXVUx9UFnJM7dVC8IqWYEpaYUUzVQbAfRoBTc99N0YF3mk-iYsyzBjpYIoa7zvi4qbpvfb70vA~LCgQ11EYu-qexm4Nl2PTch452fcM4gQ1BC2f2YjNhJ9fzzmeebRL2e0Qh-1RX6fnHTMzJbyd1S4GZBQ7NJU4EXN4ym~R7FhXN1~AnVCJgrwDsaVD4OyP0-Dk7NfX1CywUOfsbycezPiZEkvh72exhJH5t3kWoZ-6eeiJOqPfL-iq81Lgng4-pvMpK9-5clBOiTBCDBBVw__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/494/image/image.jpg?Expires=1760506705&Signature=ydWvPheppttvOqKzWjtuQ4oF1ELAZRtGZ2dybEST1iKTP9RLpfhRsP029CJ8LdTaFpg6IC1i4b1DXYyF6fqmAYTimre96Clzx0KVs4EdORgRJRf7cvzyWXHBt3M2wiS~Dw6y3lGiztRfHREoJX2YjRbWfopHg4av527vfmW-kL3VLt4iH32akJK4s-o7PjWMgqE4LMSZru~PJ-J-yHepKjprxusGUIvaIrZQU0WcX-1IfWaGy4n6tZYS6TALCgUYA01VyCaQD04rhzfKJj600DuPnMV5enPhazd4ucXcyn~x5-C15s3PyvL44Xc291TabJ-QWpjk-iAmJZHe9FL7iQ__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_94_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 94,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/494/image/image.jpg?Expires=1760506705&Signature=ydWvPheppttvOqKzWjtuQ4oF1ELAZRtGZ2dybEST1iKTP9RLpfhRsP029CJ8LdTaFpg6IC1i4b1DXYyF6fqmAYTimre96Clzx0KVs4EdORgRJRf7cvzyWXHBt3M2wiS~Dw6y3lGiztRfHREoJX2YjRbWfopHg4av527vfmW-kL3VLt4iH32akJK4s-o7PjWMgqE4LMSZru~PJ-J-yHepKjprxusGUIvaIrZQU0WcX-1IfWaGy4n6tZYS6TALCgUYA01VyCaQD04rhzfKJj600DuPnMV5enPhazd4ucXcyn~x5-C15s3PyvL44Xc291TabJ-QWpjk-iAmJZHe9FL7iQ__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/495/image/image.jpg?Expires=1760506705&Signature=Hu67bOjYbrYWMdre923rGFMjrXwj5nzY2nNiom5JbEMTnjNAWgBFkaLWkh6uilkj-mgmeam~M9MNRj6~y5UobN-3q5xhGJ8Ebpd1KSUrwUPIKLk3p9ui9U0SLQk10j-dMrpLOa6N6boJRyQQaIwClNYrk1t7z3eiGVY8aFPgJFK~iDkyKLdQlzTAjVtEoH276NghGTmo3TbhK9Wm0Uv6zF9ywqfFpoSl0w~7iGFdeQjnvFZRerJ6Pdy-zGyErkiamTrKUho5QCPxm5v09YxaItZrnN~FA-mJCoaQyawqAy5wiQ90HPBAZiac~8LJ6A6edJMmRxeVuwg2Y5O~WPjmnQ__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_95_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 95,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/495/image/image.jpg?Expires=1760506705&Signature=Hu67bOjYbrYWMdre923rGFMjrXwj5nzY2nNiom5JbEMTnjNAWgBFkaLWkh6uilkj-mgmeam~M9MNRj6~y5UobN-3q5xhGJ8Ebpd1KSUrwUPIKLk3p9ui9U0SLQk10j-dMrpLOa6N6boJRyQQaIwClNYrk1t7z3eiGVY8aFPgJFK~iDkyKLdQlzTAjVtEoH276NghGTmo3TbhK9Wm0Uv6zF9ywqfFpoSl0w~7iGFdeQjnvFZRerJ6Pdy-zGyErkiamTrKUho5QCPxm5v09YxaItZrnN~FA-mJCoaQyawqAy5wiQ90HPBAZiac~8LJ6A6edJMmRxeVuwg2Y5O~WPjmnQ__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/496/image/image.jpg?Expires=1760506705&Signature=yQrju-q3HLsk-HuygR9BjwqHcVRs2BMaPSGmsUX0foxqbgEyZOyP3bJj2gzmdrPRjOYWX9675kFaDLobUAMNiLLkbFxXsIWk4zjbufKVrI8ReM1HBZF315fknjBtwRlg6dq0WvIYKlLgeS28ALxHatVgCHzmQx0eMm0Z-p9QYAu0fEIFeojvC9CJOrIdvoN7ROUhHEv8tjR8ItjNLg0UhGPRjbajzkOe0S5cSUD5JuiFMEatEBRH-fRoPXDES0I-PefRUi35sJgOh4qUXfgQGkKqfAoT-pbJe2eongdixwEKk5V7Nh9BCY1De3zfGmzWwQ3F6EEXP1kfRl4xwrrRGg__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_96_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 96,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/496/image/image.jpg?Expires=1760506705&Signature=yQrju-q3HLsk-HuygR9BjwqHcVRs2BMaPSGmsUX0foxqbgEyZOyP3bJj2gzmdrPRjOYWX9675kFaDLobUAMNiLLkbFxXsIWk4zjbufKVrI8ReM1HBZF315fknjBtwRlg6dq0WvIYKlLgeS28ALxHatVgCHzmQx0eMm0Z-p9QYAu0fEIFeojvC9CJOrIdvoN7ROUhHEv8tjR8ItjNLg0UhGPRjbajzkOe0S5cSUD5JuiFMEatEBRH-fRoPXDES0I-PefRUi35sJgOh4qUXfgQGkKqfAoT-pbJe2eongdixwEKk5V7Nh9BCY1De3zfGmzWwQ3F6EEXP1kfRl4xwrrRGg__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/497/image/image.jpg?Expires=1760506705&Signature=druCTLOkV6axI8kJotRkkis01jxSpjGWaT641J2JGnbeAMCuFicdxJ1sGEzX5Re49Mnn~NCu3OTV0ItXc8oSUiCCUE12EbRWnZ33wYpUzUhUZc1EAp4GBbCS3I9nzMe48bgVc4qWzv1gzIXT45CqL0-vYpTCUTmxR9fRcT~GAfh1OeuAAg6z0~QrXcjGkc3pxT863IJ4F7iQ0ES-37lgLkZkRaKFewScpMCEFrQwTOrS9HIXNFr2EL5UmGlLalMCVW3nOcKBE4mPD2jeaof784V94LRsgOQx5zYVBJpwTkiB0xdh4UklZTQMmMJt26BslR46BtKfw75QoojitPu7UQ__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_97_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 97,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/497/image/image.jpg?Expires=1760506705&Signature=druCTLOkV6axI8kJotRkkis01jxSpjGWaT641J2JGnbeAMCuFicdxJ1sGEzX5Re49Mnn~NCu3OTV0ItXc8oSUiCCUE12EbRWnZ33wYpUzUhUZc1EAp4GBbCS3I9nzMe48bgVc4qWzv1gzIXT45CqL0-vYpTCUTmxR9fRcT~GAfh1OeuAAg6z0~QrXcjGkc3pxT863IJ4F7iQ0ES-37lgLkZkRaKFewScpMCEFrQwTOrS9HIXNFr2EL5UmGlLalMCVW3nOcKBE4mPD2jeaof784V94LRsgOQx5zYVBJpwTkiB0xdh4UklZTQMmMJt26BslR46BtKfw75QoojitPu7UQ__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/498/image/image.jpg?Expires=1760506705&Signature=CPCCIWhL0eCBf82ssOeXuyAdeEIlkDejkppEeGkaYX2kiyX2wAxXat~~Axu9w5L8K3z8gkkm~u9K2L71qOjna3~WhoIPxVwFTyDFyRLaeQnRk~JDXQ21kh5q3NfbDDhvbok71F6cljpUHnKs4~c97eNgP7bVZPSBmwFvGaFUzIiB1gIQmxu0V4UxmKSyBR9QOkHS-VZhB-nscfdb6KbT9WwweF5lGNkrM0DDoapjAn3L5OHwbkH85EDsGMa3AnadopzvimgGLtaNCBJnOr7HxZMWOB-BUG2c-VNQZdLih3oBQxzvH7xWXKCoGMGsuFL8SL5mcN~rtS0rQDypmsjADg__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_98_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 98,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/498/image/image.jpg?Expires=1760506705&Signature=CPCCIWhL0eCBf82ssOeXuyAdeEIlkDejkppEeGkaYX2kiyX2wAxXat~~Axu9w5L8K3z8gkkm~u9K2L71qOjna3~WhoIPxVwFTyDFyRLaeQnRk~JDXQ21kh5q3NfbDDhvbok71F6cljpUHnKs4~c97eNgP7bVZPSBmwFvGaFUzIiB1gIQmxu0V4UxmKSyBR9QOkHS-VZhB-nscfdb6KbT9WwweF5lGNkrM0DDoapjAn3L5OHwbkH85EDsGMa3AnadopzvimgGLtaNCBJnOr7HxZMWOB-BUG2c-VNQZdLih3oBQxzvH7xWXKCoGMGsuFL8SL5mcN~rtS0rQDypmsjADg__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/499/image/image.jpg?Expires=1760506705&Signature=US2mZ-V1zTUXda0tGen-xa5VcEW8qNUkf9FH6IG5hM3Kfu9c75OxZ8sZPPJvD790MxyacrsAzlxtr0A2XEYL8HkjJGF9GoKCcot2tGTohk8yBVJrwT5Bg~CO2tBwxnS-7-eZODtHOD8nrg10A5zncVbo7BSmFvhsmQva7fxkUTE94gq1WRoh-jo5WJAjwYmHpJ2BFtjLUjBT~9c5s0Axu8UOMFEGCn0GGjbJjIhhMFNVeJ5dzsIa0oZYiPfC8KUlMmCvfaNMph8RC4sxysBT5OnvZ2Dq0VkG5uBGCBfIPU8D4SJlTmOvufTWZF9CLRd8ZXHooBZEuidLyW9Dl3PcEQ__&Key-Pair-Id=K3EI6M078Z3AC3",
      "name": "sijiey_Thermal-Affordance-Dataset_99_image",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 99,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/499/image/image.jpg?Expires=1760506705&Signature=US2mZ-V1zTUXda0tGen-xa5VcEW8qNUkf9FH6IG5hM3Kfu9c75OxZ8sZPPJvD790MxyacrsAzlxtr0A2XEYL8HkjJGF9GoKCcot2tGTohk8yBVJrwT5Bg~CO2tBwxnS-7-eZODtHOD8nrg10A5zncVbo7BSmFvhsmQva7fxkUTE94gq1WRoh-jo5WJAjwYmHpJ2BFtjLUjBT~9c5s0Axu8UOMFEGCn0GGjbJjIhhMFNVeJ5dzsIa0oZYiPfC8KUlMmCvfaNMph8RC4sxysBT5OnvZ2Dq0VkG5uBGCBfIPU8D4SJlTmOvufTWZF9CLRd8ZXHooBZEuidLyW9Dl3PcEQ__&Key-Pair-Id=K3EI6M078Z3AC3",
          "height": 512,
          "width": 1024
        }
      }
    }
  ],
  "imagePreloadTimestamp": "2025-10-15T04:38:18.762Z"
};

export const getPreloadedImages = () => {
  return deploymentConfig.preloadedImages || [];
};

export const isImagePreloaded = () => {
  return deploymentConfig.preloadedImages && deploymentConfig.preloadedImages.length > 0;
};
