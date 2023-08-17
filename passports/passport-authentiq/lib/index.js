// Load modules
var Strategy = require('./strategy');

// Expose Strategy
exports = module.exports = Strategy;

// Framework version
require('pkginfo')(module, 'versiongit ');

// Expose Contstructors
exports.Strategy = Strategy;
