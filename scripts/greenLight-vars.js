const fs = require('fs');
const path = require('path');
const lessToJs = require('less-vars-to-js');

const stylePath = path.join(__dirname, '..', 'components', 'style');
const greenLightLess = fs.readFileSync(path.join(stylePath, 'themes', 'greenLight.less'), 'utf8');

const greenLightPaletteLess = lessToJs(greenLightLess, {
  stripPrefix: true,
  resolveVariables: false,
});

module.exports = greenLightPaletteLess;
