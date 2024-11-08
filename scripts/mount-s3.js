const S3FS = require('s3fs');

// Create an instance of S3FS for the digitalgov bucket
const s3fs = new S3FS('digitalgov', {
  region: process.env.AWS_DEFAULT_REGION || 'us-east-1'
});

// Ensure the images directory exists
s3fs.mkdirp('/assets/images')
  .then(() => {
    console.log('Successfully mounted S3 bucket and created images directory');
  })
  .catch(err => {
    console.error('Error mounting S3:', err);
    // Create local directory as fallback
    require('fs').mkdirSync('/assets/images', { recursive: true });
  });
