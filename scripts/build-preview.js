const { execSync } = require('child_process');
const { copyUswdsAssets } = require('./build-assets');
const fs = require('fs');
const path = require('path');

async function buildPreview() {
  try {
    // Copy USWDS assets first
    await copyUswdsAssets();
    
    // Get Hugo version from .hugo-version file
    const hugoVersion = fs.readFileSync(path.join(__dirname, '../.hugo-version'), 'utf8').trim();
    console.log(`Using Hugo version: ${hugoVersion}`);
    
    // Build the site using the preview config
    console.log('Building site with preview configuration...');
    execSync(`hugo --config config.yml,config/env/preview/config.yml`, {
      stdio: 'inherit',
      env: {
        ...process.env,
        NODE_ENV: 'production',
        HUGO_VERSION: hugoVersion
      }
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
