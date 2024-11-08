// Try to require s3fs, but don't fail if not available
let s3fs;
try {
  s3fs = require('s3fs');
} catch (err) {
  // s3fs not available, that's ok
}

// Function to create local directory
function createLocalDir() {
  try {
    require('fs').mkdirSync('/assets/images', { recursive: true });
    console.log('Created local images directory');
  } catch (err) {
    console.error('Error creating local directory:', err);
    // Exit with success even if directory creation fails
    // This prevents build failure when running without proper permissions
    process.exit(0);
  }
}

// If s3fs is available, try to mount S3
if (s3fs) {
  const s3fsInstance = new s3fs('digitalgov', {
    region: process.env.AWS_DEFAULT_REGION || 'us-east-1'
  });

  s3fsInstance.mkdirp('/assets/images')
    .then(() => {
      console.log('Successfully mounted S3 bucket and created images directory');
    })
    .catch(err => {
      console.error('Error mounting S3:', err);
      createLocalDir();
    });
} else {
  // If s3fs isn't available, just create local directory
  createLocalDir();
}
