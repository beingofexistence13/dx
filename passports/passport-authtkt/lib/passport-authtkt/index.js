/**
 * Module dependencies.
 */
var Strategy        = require('./strategy'),
    BadRequestError = require('./errors/badrequesterror'),
    AuthTkt         = require('./authtkt'),
    authtktUtils    = require('./authtktutils');
/**
 * Framework version.
 */
require('pkginfo')(module, 'version');

/**
 * Expose constructors and helpers
 */
exports.Strategy = Strategy;
exports.BadRequestError = BadRequestError;

exports.AuthTkt = AuthTkt;
exports.utils = authtktUtils;

/**
 * Get a configured authtkt strategy from the request, so that you ca
 * access e.g. `options`, `key`, and the `authtkt` instance.
 * Returns `null` if either passport or an authtkt strategy is not configured.
 * Name defaults to `authtkt` (the default strategy name).
 */
exports.getStrategy = function(req, name) {
    name = name || 'authtkt';
    
    var passport = req._passport;
    if(!passport) return null;

    var strategy = passport.instance._strategy(name);
    if(!strategy) return null;

    return strategy;
};