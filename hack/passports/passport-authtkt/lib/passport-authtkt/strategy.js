/**
 * Module dependencies.
 */
var passport = require('passport'),
    util = require('util'),
    BadRequestError = require('./errors/badrequesterror'),
    AuthTkt = require('./authtkt'),
    _ = require('underscore');

/**
 * `Strategy` constructor.
 *
 *   - `key`               Name of the cookie.
 *   - `encodeUserData`    Encode and decode the userData string using base64.
 *                         Defaults to true.
 *   - `jsonUserData`      Encode and decode the userData string as JSON.
 *                         Defaults to false.
 *   - `ip`                Use the given IP address (a dotted quad string)
 *                         to create/validate tickets.
 *   - `timeout`           Time, in seconds, for ticket validation.
 *
 * @param {Object} secret The server-side authentication secret
 * @param {Object} options Options hash
 * @api public
 */
function Strategy(secret, options) {
    options = options || {};

    if(!secret)
        throw new Error("secret is required");

    passport.Strategy.call(this);
    this.name = 'authtkt';
    this.authtkt = new AuthTkt(secret, options);
    this.key = options.key || 'authtkt';
    this.options = options;
}

/**
 * Inherit from `passport.Strategy`.
 */
util.inherits(Strategy, passport.Strategy);

/**
 * Authenticate request based on the presence of an authentication cookie
 *
 * @param {Object} req the request
 * @param {Object} options Can be used to override any of the options above
 * @api protected
 */
Strategy.prototype.authenticate = function(req, options) {
    options =_.extend({
        timeout: null,
        ip: '0.0.0.0',
        tokens: []
    }, this.options, options || {});

    if(!req.cookies)
        throw new Error("The cookieParser() middleware must be configured before passport to use this strategy");

    var cookieValue = req.cookies[this.key],
        strategy = this,
        authInfo;

    if(cookieValue) {
        authInfo = this.authtkt.validateCookie(cookieValue, options);
    }

    if (authInfo) {
        this.success(authInfo.userData, _.clone(authInfo));
    } else {
        this.fail(new BadRequestError(options.badRequestMessage || 'Missing credentials'));
    }

    // Refresh the cookie on response if necessary
    req.res.on('header', function() {
        if(req.authInfo) {
            var userid = req.authInfo.userid;
            var userData = req.authInfo.userData;
            var tokens = req.authInfo.tokens;

            // We don't want to set the cookie if nothing's changed and we
            // are not refreshing for use with a timeout
            if(options.timeout || !authInfo ||
               !_.isEqual(userid, authInfo.userid) ||
               !_.isEqual(userData, authInfo.userData) ||
               !_.isEqual(tokens, authInfo.tokens)
            ) {
                var newCookieValue = strategy.authtkt.getCookie(userid, _.extend(options, {
                    userData: userData,
                    tokens: tokens
                }));
                req.res.cookie(strategy.key, newCookieValue);
            }
        } else if(cookieValue) {
            req.res.clearCookie(strategy.key);
        }
    });
};


/**
 * Expose `Strategy`.
 */
module.exports = Strategy;
