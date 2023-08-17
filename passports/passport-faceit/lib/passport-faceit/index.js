/**
 * Module dependencies.
 */
const OAuth2Strategy = require('./oauth2');

/**
 * Framework version.
 */
require('pkginfo')(module, 'version');

/**
 * Expose constructors.
 */
exports.Strategy = OAuth2Strategy;
exports.OAuth2Strategy = OAuth2Strategy;
