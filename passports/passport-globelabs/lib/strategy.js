'use strict';

/**
 * Module dependencies.
 */
var util = require('util');
var OAuth2Strategy = require('passport-oauth').OAuth2Strategy;

/**
 * The GlobeLabs authetication strategy.
 * 
 * Applications must supply a `verify` callback, for which the function
 * signature is:
 *
 *     function(accessToken, subscriberNumber, done) { ... }
 * 
 * The verify callback is responsible for finding or creating the user, and
 * invoking `done` with the following arguments:
 * 
 *     done(err, user, info);
 * 
 * `user` should be set to `false` to indicate an authentication failure.
 * Additional `info` can optionally be passed as a third argument, typically
 * used to display informational messages.  If an exception occured, `err`
 * should be set.
 * 
 * Options:
 *   - `appId`          identifies app to service provider
 *   - `appSecret`      secret used to establish ownership of the app identifer
 *   - `passReqToCallback` when `true`, `req` is the first argument to the
 *                         verify callback (default: `false`)
 * 
 * Examples:
 * 
 *     passport.use(new GlobeLabsStrategy({
 *         appId: '123-456-789',
 *         appSecret: 'shhh-its-a-secret'
 *       },
 *       function(accessToken, subscriberNumber, done) {
 *         User.findOrCreate(..., function (err, user) {
 *           done(err, user);
 *         });
 *       }
 *     ));
 * 
 * @param {Object} opts
 * @param {Function} verify
 * @returns {Strategy}
 */
function Strategy(opts, verify) {
    opts = opts || { };
    opts.authorizationURL = opts.authorizationURL || 'https://developer.globelabs.com.ph/dialog/oauth';
    opts.tokenURL = opts.tokenURL || 'https://developer.globelabs.com.ph/oauth/access_token';
    opts.scopeSeparator = opts.scopeSeparator || ',';

    opts.clientID = opts.appId || opts.clientID;
    opts.clientSecret = opts.appSecret || opts.clientSecret;

    OAuth2Strategy.call(this, opts, verify);

    if (opts.passReqToCallback) {
        this._verify = function(req, accessToken, refreshToken, params, profile, verified) {
            var subscriberNumber = params['subscriber_number'];

            verify.call(this, req, accessToken, subscriberNumber, verified);
        };
    } else {
        this._verify = function(accessToken, refreshToken, params, profile, verified) {
            var subscriberNumber = params['subscriber_number'];

            verify.call(this, accessToken, subscriberNumber, verified);
        };
    }

    this.name = 'globelabs';
    this._appId = opts.appId || opts.clientID;
    this._appSecret = opts.appSecret || opts.clientSecret;
}

// Extends
util.inherits(Strategy, OAuth2Strategy);

/**
 * Build the correct authorization url parameters.
 * 
 * @param {Object} opts
 * @returns {Object}
 */
Strategy.prototype.authorizationParams = function(opts) {
    return {
        app_id : this._appId
    };
};

/**
 * Build the correct token url parameters.
 * 
 * @param {Object} opts
 * @returns {Object}
 */
Strategy.prototype.tokenParams = function(opts) {
    return {
        app_id : this._appId,
        app_secret : this._appSecret
    };
};

/**
 * Expose `Strategy`
 */
module.exports = Strategy;
