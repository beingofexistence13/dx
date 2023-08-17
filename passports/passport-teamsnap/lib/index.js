// Load modules.
var Strategy = require('./strategy')
  , AuthorizationError = require('./errors/authorizationerror')
  , TokenError = require('./errors/tokenerror')
  , InternalOAuthError = require('./errors/internaloautherror');

/**
 * Framework version.
 */
require('pkginfo')(module, 'version');

/**
 * Expose Strategy.
 */
exports = module.exports = Strategy;
exports.Strategy = Strategy;

/**
 * Expose Errors.
 */
exports.AuthorizationError = AuthorizationError;
exports.TokenError = TokenError;
exports.InternalOAuthError = InternalOAuthError;
