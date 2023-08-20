/* exports all fixtures (js|json) loaded into /fixtures */
var fs = require('fs'),
    path = require('path');

var files = fs.readdirSync(__dirname);

files = files.filter(function  (f) {
  var ext = path.extname(f);
  if (f === 'index.js') {
    return false;
  }
  return ext === '.json' || ext === '.js';
});

files.forEach(function (f){
  exports[path.basename(f, path.extname(f))] = require('./' + f);
});