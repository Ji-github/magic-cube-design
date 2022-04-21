const fs = require('fs');
const path = require('path');
const lessToJs = require('less-vars-to-js');

const stylePath = path.join(__dirname, '..', 'components', 'style');
const clogsLess = fs.readFileSync(path.join(stylePath, 'themes', 'clogs.less'), 'utf8');

const clogsPaletteLess = lessToJs(clogsLess, {
  stripPrefix: true,
  resolveVariables: false,
});

module.exports = clogsPaletteLess;
