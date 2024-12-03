const { execSync } = require('child_process');
const { copyUswdsAssets } = require('./build-assets');

async function buildPreview() {
  try {
    // Copy USWDS assets first
    await copyUswdsAssets();
    
    // Build the site using the preview config
    console.log('Building site with preview configuration...');
    execSync('hugo --config config.yml,config/env/preview/config.yml', {
      stdio: 'inherit'
    });
    
    console.log('Preview build completed successfully');
  } catch (err) {
    console.error('Error building preview:', err);
    process.exit(1);
  }
}

// Run if called directly
if (require.main === module) {
  buildPreview();
}

module.exports = { buildPreview };
