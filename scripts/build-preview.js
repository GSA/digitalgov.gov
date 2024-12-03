Zconst { execSync } = require('child_process');
const { copyUswdsAssets } = require('./build-assets');

async function buildPreview() {
  try {
    // Copy USWDS assets first
    await copyUswdsAssets();
    
    // Build the site using the preview config with Hugo extended version
    console.log('Building site with preview configuration...');
    execSync('npx hugo-extended --config config.yml,config/env/preview/config.yml', {
      stdio: 'inherit',
      env: {
        ...process.env,
        NODE_ENV: 'production'
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
