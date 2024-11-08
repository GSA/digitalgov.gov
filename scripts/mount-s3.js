const { S3Client, ListObjectsV2Command, GetObjectCommand } = require('@aws-sdk/client-s3');
const fs = require('fs');
const path = require('path');

const BUCKET_NAME = 'digitalgov';
const LOCAL_IMAGE_DIR = './assets/images';

// Function to create local directory
function createLocalDir() {
  try {
    fs.mkdirSync(LOCAL_IMAGE_DIR, { recursive: true });
    console.log('Created local images directory');
  } catch (err) {
    console.error('Error creating local directory:', err);
    process.exit(0);
  }
}

// Function to download a file from S3
async function downloadFile(s3Client, key) {
  const localPath = path.join(LOCAL_IMAGE_DIR, path.basename(key));
  
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

// Main function to sync S3 to local filesystem
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

    // List all objects in the bucket
    const command = new ListObjectsV2Command({
      Bucket: BUCKET_NAME,
      Prefix: 'images/' // Only sync files in the images directory
    });

    const response = await s3Client.send(command);
    
    if (!response.Contents) {
      console.log('No files found in S3 bucket');
      return;
    }

    // Download each file
    const downloadPromises = response.Contents
      .filter(obj => !obj.Key.endsWith('/')) // Skip directories
      .map(obj => downloadFile(s3Client, obj.Key));

    await Promise.all(downloadPromises);
    
    console.log('Successfully synced S3 bucket to local filesystem');
  } catch (err) {
    console.error('Error syncing S3:', err);
    process.exit(1);
  }
}

// Run the sync
syncS3ToLocal();
