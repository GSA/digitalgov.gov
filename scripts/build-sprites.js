const SVGSpriter = require('svg-sprite');
const fs = require('fs');
const path = require('path');
const glob = require('glob');

const config = {
  shape: {
    dimension: {
      maxWidth: 24,
      maxHeight: 24,
    },
    id: {
      separator: "-",
    },
    spacing: {
      padding: 0,
    },
  },
  mode: {
    symbol: true,
  },
};

async function buildSprite() {
  const spriter = new SVGSpriter(config);
  const iconDir = path.join(__dirname, '../themes/digital.gov/static/uswds/img/usa-icons');
  const outputDir = path.join(__dirname, '../themes/digital.gov/static/uswds/img');

  // Add all SVG files to the spriter
  const svgFiles = glob.sync(path.join(iconDir, '**/*.svg'));
  for (const file of svgFiles) {
    const svgContent = fs.readFileSync(file, 'utf8');
    spriter.add(file, null, svgContent);
  }

  // Compile sprite
  const result = await new Promise((resolve, reject) => {
    spriter.compile((error, result) => {
      if (error) reject(error);
      else resolve(result);
    });
  });

  // Write sprite file
  if (result.symbol && result.symbol.sprite) {
    const outputPath = path.join(outputDir, 'sprite.svg');
    fs.mkdirSync(path.dirname(outputPath), { recursive: true });
    fs.writeFileSync(outputPath, result.symbol.sprite.contents);
    console.log(`Sprite generated at: ${outputPath}`);
  }
}

// Run if called directly
if (require.main === module) {
  buildSprite().catch(console.error);
}

module.exports = { buildSprite };
