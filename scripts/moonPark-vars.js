const fs = require('fs');
const path = require('path');
const lessToJs = require('less-vars-to-js');

const stylePath = path.join(__dirname, '..', 'components', 'style');
const moonParkLess = fs.readFileSync(path.join(stylePath, 'themes', 'moonPark.less'), 'utf8');

const moonParkPaletteLess = lessToJs(moonParkLess, {
  stripPrefix: true,
  resolveVariables: false,
});

module.exports = moonParkPaletteLess;
