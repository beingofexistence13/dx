/**
 * Module dependencies.
 */

'use strict';

var util               = require('util'),
    OAuth2Strategy     = require('passport-oauth2'),
    Profile            = require('./profile'),
    InternalOAuthError = require('passport-oauth2').InternalOAuthError;

/**
 * `Strategy` constructor.
 *
 * The BaseCRM authentication strategy authenticates requests by delegating to
 * BaseCRM using the OAuth 2.0 protocol.
 *
 * Applications must supply a `verify` callback which accepts an `accessToken`,
 * `refreshToken` and service-specific `profile`, and then calls the `done`
 * callback supplying a `user`, which should be set to `false` if the
 * credentials are not valid.  If an exception occurred, `err` should be set.
 *
 * Options:
 *   - `clientID`      your BaseCRM application's Client ID
 *   - `clientSecret`  your BaseCRM application's Client Secret
 *   - `callbackURL`   URL to which BaseCRM will redirect the user after granting authorization
 *   - `scope`         array of permission scopes to request.  valid scopes include:
 *                     'profile', 'read', 'write' or 'sync'.
 *                     (see https://dev.futuresimple.com/docs/rest/articles/oauth2/requests for
 * more info)
 *   — `userAgent`     All API requests MUST include a valid User Agent string.
 *                     e.g: domain name of your application.
 *                     (see https://dev.futuresimple.com/docs/rest/articles/requests for more info)
 *
 * Examples:
 *
 *     passport.use(new BaseCRMStrategy({
 *         clientID: '123-456-789',
 *         clientSecret: 'shhh-its-a-secret'
 *         callbackURL: 'https://www.example.net/auth/basecrm/callback',
 *         userAgent: 'myapp.com'
 *       },
 *       function(accessToken, refreshToken, profile, done) {
 *         User.findOrCreate(..., function (err, user) {
 *           done(err, user);
 *         });
 *       }
 *     ));
 *
 * @param {Object} options
 * @param {Function} verify
 * @api public
 */
function Strategy(options, verify) {
    options = options || {};
    options.authorizationURL = options.authorizationURL || 'https://api.getbase.com/oauth2/authorize';
    options.tokenURL = options.tokenURL || 'https://api.getbase.com/oauth2/token';
    options.scopeSeparator = options.scopeSeparator || ' ';
    options.customHeaders = options.customHeaders || {};

    if (!options.customHeaders['User-Agent']) {
        options.customHeaders['User-Agent'] = options.userAgent || 'passport-basecrm';
    }

    OAuth2Strategy.call(this, options, verify);
    this.name = 'basecrm';
    this._userProfileURL = options.userProfileURL || 'https://api.getbase.com/v2/users/self';
    this._oauth2.useAuthorizationHeaderforGET(true);
}

/**
 * Inherit from `OAuth2Strategy`.
 */
util.inherits(Strategy, OAuth2Strategy);

/**
 * Retrieve user profile from BaseCRM.
 *
 * This function constructs a normalized profile, with the following properties:
 *
 *   - `provider`         always set to `basecrm`
 *   - `id`               the user's BaseCRM ID
 *   - `username`         the user's BaseCRM username
 *   - `displayName`      the user's full name
 *   - `profileUrl`       the URL of the profile for the user on BaseCRM
 *   - `emails`           the user's email addresses
 *
 * @param {String} accessToken
 * @param {Function} done
 * @api protected
 */
Strategy.prototype.userProfile = function (accessToken, done) {
    this._oauth2.get(this._userProfileURL, accessToken, function (err, body, res) {
        var json,
            profile;

        if (err) {
            return done(new InternalOAuthError('Failed to fetch user profile', err));
        }

        try {
            json = JSON.parse(body);
        } catch (ex) {
            return done(new Error('Failed to parse user profile'));
        }

        profile = Profile.parse(json);
        profile.provider = 'basecrm';
        profile._raw = body;
        profile._json = json;

        done(null, profile);
    });
};

/**
 * Expose `Strategy`.
 */
module.exports = Strategy;

