var Strategy = require('./strategy');

var pkg_info = require('pkginfo')
pkg_info(module, 'version');

exports.Strategy = Strategy;


