const { S3Client, GetObjectCommand } = require('@aws-sdk/client-s3');
const fs = require('fs');
const path = require('path');

const BUCKET_NAME = 'digitalgov';
const LOCAL_IMAGE_DIR = './assets/s3-images';
const IMAGE_DATA_DIR = './data/images';

// Function to create local directory
function createLocalDir() {
  try {
    fs.mkdirSync(LOCAL_IMAGE_DIR, { recursive: true });
    console.log('Created local images directory');
  } catch (err) {
    console.error('Error creating local directory:', err);
  }
}

// Simple YAML parser for our specific case
function parseImageYaml(content) {
  const uidMatch = content.match(/uid\s*:\s*([^\n]+)/);
  const formatMatch = content.match(/format\s*:\s*([^\n]+)/);

  if (uidMatch && formatMatch) {
    return {
      uid: uidMatch[1].trim(),
      format: formatMatch[1].trim()
    };
  }
  return null;
}

// Function to read image metadata files
function getImageMetadata() {
  const images = [];
  try {
    const files = fs.readdirSync(IMAGE_DATA_DIR);
    files.forEach(file => {
      if (file.endsWith('.yml')) {
        try {
          const content = fs.readFileSync(path.join(IMAGE_DATA_DIR, file), 'utf8');
          const data = parseImageYaml(content);
          if (data) {
            images.push({
              key: `${data.uid}.${data.format}`,
              uid: data.uid,
              format: data.format
            });
          }
        } catch (err) {
          console.error(`Error reading ${file}:`, err);
        }
      }
    });
  } catch (err) {
    console.error('Error reading metadata directory:', err);
  }
  
  return images;
}

// Function to download a file from S3
async function downloadFile(s3Client, key) {
  const localPath = path.join(LOCAL_IMAGE_DIR, key);
  try {
    const command = new GetObjectCommand({
      Bucket: BUCKET_NAME,
      Key: key,
    });

    const response = await s3Client.send(command);
    const writeStream = fs.createWriteStream(localPath);

    await new Promise((resolve, reject) => {
      response.Body.pipe(writeStream)
        .on('error', reject)
        .on('finish', resolve);
    });

    console.log(`Downloaded: ${key}`);
  } catch (err) {
    console.error(`Error downloading ${key}:`, err);
  }
}

// Main function to sync S3 to local filesystem, downloading one file at a time
async function syncS3ToLocal() {
  try {
    // Create S3 client
    const s3Client = new S3Client({
      region: process.env.AWS_DEFAULT_REGION || 'us-east-1',
      credentials: {
        accessKeyId: process.env.AWS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_KEY
      }
    });

    // Create local directory
    createLocalDir();

    // Get list of images from metadata
    const images = getImageMetadata();
    if (images.length === 0) {
      console.warn('No images found in metadata. Exiting sync process.');
      return;
    }
    console.log(`Found ${images.length} images in metadata`);

    // Sequentially download each image
    for (const img of images) {
      console.log(`Preparing to download: ${img.key}`);
      await downloadFile(s3Client, img.key);
    }

    console.log('Successfully synced S3 bucket to local filesystem');
  } catch (err) {
    console.error('Critical error in sync process:', err);
  }
}

// Run the sync
syncS3ToLocal();
