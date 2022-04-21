const fs = require('fs');
const path = require('path');
const lessToJs = require('less-vars-to-js');

const stylePath = path.join(__dirname, '..', 'components', 'style');
const scorpioLess = fs.readFileSync(path.join(stylePath, 'themes', 'scorpio.less'), 'utf8');

const scorpioPaletteLess = lessToJs(scorpioLess, {
  stripPrefix: true,
  resolveVariables: false,
});

module.exports = scorpioPaletteLess;
