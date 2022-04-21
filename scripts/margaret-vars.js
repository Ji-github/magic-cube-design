const fs = require('fs');
const path = require('path');
const lessToJs = require('less-vars-to-js');

const stylePath = path.join(__dirname, '..', 'components', 'style');
const margaretLess = fs.readFileSync(path.join(stylePath, 'themes', 'margaret.less'), 'utf8');

const margaretPaletteLess = lessToJs(margaretLess, {
  stripPrefix: true,
  resolveVariables: false,
});

module.exports = margaretPaletteLess;
