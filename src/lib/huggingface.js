/**
 * Hugging Face Dataset Integration
 * Provides functions to connect to and retrieve images from Hugging Face datasets
 */

/**
 * Test connection to Hugging Face dataset
 * @param {string} token - Hugging Face access token
 * @param {string} datasetName - Dataset name (e.g., "username/dataset-name")
 * @returns {Promise<{success: boolean, datasetInfo?: object, error?: string}>}
 */
export const testHuggingFaceConnection = async (token, datasetName) => {
  try {
    // Try datasets-server API first (more reliable for public datasets)
    console.log(`Testing connection to dataset: ${datasetName}`);
    
    try {
      const datasetsServerResponse = await fetch(`https://datasets-server.huggingface.co/info?dataset=${datasetName}`);
      
      if (datasetsServerResponse.ok) {
        const datasetsServerInfo = await datasetsServerResponse.json();
        console.log('Successfully connected via datasets-server API');
        
        // Try to get image count
        let imageCount = 0;
        try {
          const imageCountResult = await getImageCountFromDataset(token, datasetName);
          imageCount = imageCountResult.imageCount || 0;
        } catch (countError) {
          console.warn('Could not get image count:', countError);
        }
        
        return {
          success: true,
          datasetInfo: {
            id: datasetName,
            description: `Dataset accessed via datasets-server API`,
            author: datasetName.split('/')[0] || 'unknown',
            lastModified: new Date().toISOString(),
            private: false,
            imageCount: imageCount,
            ...datasetsServerInfo
          }
        };
      }
    } catch (datasetsServerError) {
      console.warn('datasets-server API failed, trying traditional API:', datasetsServerError);
    }

    // Fallback to traditional Hugging Face API
    const headers = {
      'Content-Type': 'application/json'
    };
    
    // Only add Authorization header if token is provided
    if (token && token.trim()) {
      headers['Authorization'] = `Bearer ${token}`;
    }
    
    const response = await fetch(`https://huggingface.co/api/datasets/${datasetName}`, {
      headers
    });

    if (!response.ok) {
      if (response.status === 401) {
        if (!token || !token.trim()) {
          throw new Error(`Dataset "${datasetName}" requires authentication. Please provide a Hugging Face Access Token.`);
        } else {
          throw new Error(`Invalid or expired Hugging Face Access Token. Please check your token.`);
        }
      } else if (response.status === 404) {
        throw new Error(`Dataset "${datasetName}" not found. Please check the dataset name.`);
      } else {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }
    }

    const datasetInfo = await response.json();
    
    return {
      success: true,
      datasetInfo
    };
  } catch (error) {
    console.error('Hugging Face connection test failed:', error);
    console.error('Error details:', {
      message: error.message,
      stack: error.stack,
      name: error.name
    });
    return {
      success: false,
      error: error.message
    };
  }
};

/**
 * Get images from Hugging Face dataset
 * @param {string} token - Hugging Face access token
 * @param {string} datasetName - Dataset name
 * @param {number} limit - Maximum number of images to retrieve
 * @param {number} offset - Offset for pagination
 * @returns {Promise<{success: boolean, images?: Array, total?: number, error?: string}>}
 */
export const getImagesFromHuggingFace = async (token, datasetName, limit = 500, offset = 0) => {
  try {
    // Prepare headers for authenticated requests
    const headers = {
      'Content-Type': 'application/json'
    };
    
    // Only add Authorization header if token is provided
    if (token && token.trim()) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    // Try datasets-server API first (works for most public datasets)
    console.log(`Attempting to load images from dataset: ${datasetName}`);
    
    // Use rows endpoint with pagination for larger datasets
    const viewerResponse = await fetch(`https://datasets-server.huggingface.co/rows?dataset=${datasetName}&config=default&split=train&offset=${offset}&length=${Math.min(limit, 100)}`, {
      // Don't use auth headers for datasets-server API as it's public
    });

    if (viewerResponse.ok) {
      const viewerData = await viewerResponse.json();
      const images = [];

      console.log(`Dataset viewer response for ${datasetName}:`, viewerData);

      if (viewerData.rows) {
        const rowsToProcess = viewerData.rows;
        console.log(`Processing ${rowsToProcess.length} rows from dataset ${datasetName}`);

        for (let i = 0; i < rowsToProcess.length; i++) {
          const rowContainer = rowsToProcess[i];
          console.log(`Row ${i} structure:`, Object.keys(rowContainer));

          // Extract the actual row data (it's nested in the 'row' field)
          const actualRow = rowContainer.row || rowContainer;
          console.log(`Actual row ${i} data keys:`, Object.keys(actualRow));

          // Look for image columns in the actual row data
          const imageColumns = Object.keys(actualRow).filter(key => 
            key.toLowerCase().includes('image') || 
            key.toLowerCase().includes('img') || 
            key.toLowerCase().includes('picture') ||
            key.toLowerCase().includes('photo') ||
            key.toLowerCase().includes('thermal') || // Add thermal for this specific dataset
            key.toLowerCase().includes('rgb') ||     // Add rgb as common image type
            key.toLowerCase().includes('depth')      // Add depth as common image type
          );

          console.log(`Found image columns in row ${i}:`, imageColumns);

          for (const column of imageColumns) {
            const imageData = actualRow[column];
            console.log(`Image data for column ${column}:`, imageData);

            if (imageData && typeof imageData === 'object') {
              let imageUrl = null;
              
              // Handle different image data formats
              if (imageData.src) {
                imageUrl = imageData.src;
              } else if (imageData.url) {
                imageUrl = imageData.url;
              } else if (typeof imageData === 'string') {
                imageUrl = imageData;
              }

                  if (imageUrl) {
                    images.push({
                      url: imageUrl,
                      name: `${datasetName.replace('/', '_')}_${i}_${column}`,
                      metadata: {
                        dataset: datasetName,
                        column: column,
                        rowIndex: i,
                        ...actualRow
                      }
                    });
                    console.log(`Added image ${images.length - 1}: ${imageUrl}`);
                  }
                } else if (typeof imageData === 'string' && imageData.startsWith('http')) {
                  // Handle direct URL strings
                  images.push({
                    url: imageData,
                    name: `${datasetName.replace('/', '_')}_${i}_${column}`,
                    metadata: {
                      dataset: datasetName,
                      column: column,
                      rowIndex: i,
                      ...actualRow
                    }
                  });
                  console.log(`Added direct URL image ${images.length - 1}: ${imageData}`);
                }
          }
        }
      }

      if (images.length > 0) {
        return {
          success: true,
          images,
          total: viewerData.num_rows_total || viewerData.rows?.length || images.length
        };
      }
    }

    // If datasets-server API didn't work, try alternative method with authentication
    if (token && token.trim()) {
      console.log('Trying authenticated API access...');
      
      try {
        const rowsResponse = await fetch(`https://datasets-server.huggingface.co/rows?dataset=${datasetName}&config=default&split=train&offset=${offset}&limit=${limit}`, {
          headers
        });

        if (rowsResponse.ok) {
          const rowsData = await rowsResponse.json();
          const images = [];
          
          if (rowsData.rows) {
            for (const rowContainer of rowsData.rows) {
              const actualRow = rowContainer.row || rowContainer;
              
              // Look for image columns
              const imageColumns = Object.keys(actualRow).filter(key => 
                key.toLowerCase().includes('image') || 
                key.toLowerCase().includes('img') || 
                key.toLowerCase().includes('picture') ||
                key.toLowerCase().includes('photo') ||
                key.toLowerCase().includes('thermal') ||
                key.toLowerCase().includes('rgb') ||
                key.toLowerCase().includes('depth')
              );

              for (const column of imageColumns) {
                const imageData = actualRow[column];
                if (imageData && typeof imageData === 'object') {
                  let imageUrl = null;
                  
                  if (imageData.src) {
                    imageUrl = imageData.src;
                  } else if (imageData.path) {
                    imageUrl = `https://huggingface.co/datasets/${datasetName}/resolve/main/${imageData.path}`;
                  } else if (imageData.bytes) {
                    imageUrl = `data:image/jpeg;base64,${imageData.bytes}`;
                  }

                  if (imageUrl) {
                    images.push({
                      url: imageUrl,
                      name: `${datasetName}_${rowContainer.row_idx || 'unknown'}_${column}`,
                      metadata: {
                        dataset: datasetName,
                        row_idx: rowContainer.row_idx,
                        column: column,
                        ...actualRow
                      }
                    });
                  }
                }
              }
            }
          }

          return {
            success: true,
            images,
            total: rowsData.num_rows_total || images.length
          };
        }
      } catch (authError) {
        console.warn('Authenticated API access failed:', authError);
      }
    }

    // If all methods fail, return appropriate error
    throw new Error(`Unable to access images from dataset "${datasetName}". The dataset may require authentication or may not contain images.`);

  } catch (error) {
    console.error('Failed to get images from Hugging Face:', error);
    return {
      success: false,
      error: error.message
    };
  }
};

/**
 * Get random images from Hugging Face dataset
 * @param {string} token - Hugging Face access token
 * @param {string} datasetName - Dataset name
 * @param {number} count - Number of random images to get
 * @returns {Promise<{success: boolean, images?: Array, error?: string}>}
 */
export const getRandomImagesFromHuggingFace = async (token, datasetName, count = 10) => {
  try {
    // First get total count
    const totalResponse = await getImagesFromHuggingFace(token, datasetName, 1, 0);
    
    if (!totalResponse.success || !totalResponse.total) {
      return totalResponse;
    }

    const total = totalResponse.total;
    const randomOffsets = [];
    
    // Generate random offsets
    for (let i = 0; i < Math.min(count, total); i++) {
      let offset;
      do {
        offset = Math.floor(Math.random() * total);
      } while (randomOffsets.includes(offset));
      randomOffsets.push(offset);
    }

    // Get images at random offsets
    const allImages = [];
    
    for (const offset of randomOffsets) {
      const response = await getImagesFromHuggingFace(token, datasetName, 1, offset);
      if (response.success && response.images.length > 0) {
        allImages.push(response.images[0]);
      }
    }

    return {
      success: true,
      images: allImages
    };

  } catch (error) {
    console.error('Failed to get random images from Hugging Face:', error);
    return {
      success: false,
      error: error.message
    };
  }
};

/**
 * Get image count from Hugging Face dataset
 * @param {string} token - Hugging Face access token (optional)
 * @param {string} datasetName - Dataset name
 * @returns {Promise<{imageCount: number}>}
 */
export const getImageCountFromDataset = async (token, datasetName) => {
  try {
    // First try to get dataset size info from datasets-server API
    try {
      const sizeResponse = await fetch(`https://datasets-server.huggingface.co/size?dataset=${datasetName}`);
      if (sizeResponse.ok) {
        const sizeData = await sizeResponse.json();
        console.log('Dataset size info:', sizeData);
        
        // Look for train split size
        if (sizeData.size && sizeData.size.splits) {
          const trainSplit = sizeData.size.splits.find(split => split.split === 'train');
          if (trainSplit && trainSplit.num_examples) {
            return { imageCount: trainSplit.num_examples };
          }
        }
      }
    } catch (sizeError) {
      console.warn('Could not get dataset size from API:', sizeError);
    }

    // Fallback: Try to get all available images to count them
    const result = await getImagesFromHuggingFace(token, datasetName, 1000, 0);
    
    if (result.success && result.images) {
      // If we got images, use the total if available
      if (result.total) {
        return { imageCount: result.total };
      } else {
        // Count actual images found
        return { imageCount: result.images.length };
      }
    }
    
    return { imageCount: 0 };
  } catch (error) {
    console.warn('Error getting image count:', error);
    return { imageCount: 0 };
  }
};

/**
 * Check if Hugging Face dataset integration is configured
 * @param {object} config - Image dataset configuration
 * @returns {boolean}
 */
export const isHuggingFaceConfigured = (config) => {
  return !!(config && config.enabled && config.datasetName);
};
