const fs = require('fs');
const path = require('path');
const lessToJs = require('less-vars-to-js');

const stylePath = path.join(__dirname, '..', 'components', 'style');
const limeLess = fs.readFileSync(path.join(stylePath, 'themes', 'lime.less'), 'utf8');

const limePaletteLess = lessToJs(limeLess, {
  stripPrefix: true,
  resolveVariables: false,
});

module.exports = limePaletteLess;
