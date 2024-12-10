const fs = require('fs-extra');
const path = require('path');
const { buildSprite } = require('./build-sprites');

const USWDS_PATH = path.join(__dirname, '../node_modules/@uswds/uswds/dist');
const THEME_PATH = path.join(__dirname, '../themes/digital.gov/static/uswds');

async function copyUswdsAssets() {
  try {
    // Copy USWDS fonts
    await fs.copy(
      path.join(USWDS_PATH, 'fonts'),
      path.join(THEME_PATH, 'fonts')
    );
    console.log('USWDS fonts copied successfully');

    // Copy USWDS images
    await fs.copy(
      path.join(USWDS_PATH, 'img'),
      path.join(THEME_PATH, 'img')
    );
    console.log('USWDS images copied successfully');

    // Build SVG sprite
    await buildSprite();
    console.log('SVG sprite built successfully');

  } catch (err) {
    console.error('Error preparing assets:', err);
    process.exit(1);
  }
}

// Run if called directly
if (require.main === module) {
  copyUswdsAssets();
}

module.exports = { copyUswdsAssets };
