/**
 * Module dependencies.
 */
var Strategy = require('./oauth2');
var DataportenUser = require('./DataportenUser').DataportenUser;
var Authz = require('./Authz').Authz;
var Setup = require('./Setup').Setup;

/**
 * Framework version.
 */
require('pkginfo')(module, 'version');

/**
 * Expose constructors.
 */
exports.Strategy = Strategy;
exports.DataportenUser = DataportenUser;
exports.Authz = Authz;
exports.Setup = Setup;