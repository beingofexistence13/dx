'use strict';

/**
 * Module dependencies.
 */
var util = require('util')
var OAuth2Strategy = require('passport-oauth').OAuth2Strategy
var InternalOAuthError = require('passport-oauth').InternalOAuthError;

/**
 * `Strategy` constructor.
 *
 * The OSChina authentication strategy authenticates requests by delegating to
 * OSChina using the OAuth 2.0 protocol.
 *
 * Applications must supply a `verify` callback which accepts an `accessToken`,
 * `refreshToken` and service-specific `profile`, and then calls the `done`
 * callback supplying a `user`, which should be set to `false` if the
 * credentials are not valid.  If an exception occured, `err` should be set.
 *
 * Options:(see http://www.oschina.net/openapi for more info)
 *   - `clientID`      your OSChina application's Client ID
 *   - `clientSecret`  your OSChina application's Client Secret
 *   - `callbackURL`   URL to which OSChina will redirect the user after granting authorization
 *   - `state`         your OSChina application's state
 *
 * Examples:
 *
 *     passport.use(new OSChinaStrategy({
 *         clientID: '123-456-789',
 *         clientSecret: 'shhh-its-a-secret'
 *         callbackURL: 'https://www.example.net/auth/osc/callback'
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
    options.authorizationURL = options.authorizationURL || 'https://www.oschina.net/action/oauth2/authorize';
    options.tokenURL = options.tokenURL || 'https://www.oschina.net/action/openapi/token';
    options.scopeSeparator = options.scopeSeparator || ',';
    options.customHeaders = options.customHeaders || {};
    options.state = options.state || '';

    if (!options.customHeaders['User-Agent']) {
        options.customHeaders['User-Agent'] = options.userAgent || 'passport-oschina';
    }

    OAuth2Strategy.call(this, options, verify);
    this.name = 'oschina';
    this._userProfileURL = options.userProfileURL || 'https://www.oschina.net/action/openapi/user';
}

/**
 * Inherit from `OAuth2Strategy`.
 */
util.inherits(Strategy, OAuth2Strategy);


/**
 * Retrieve user profile from OSChina.
 *
 * This function constructs a normalized profile, with the following properties:
 *
 *   - `provider`         always set to `oschina`
 *   - `id`               the user's OSChina ID
 *   - `email`            the user's OSChina email
 *   - `name`             the user's display name
 *   - `gender`           the user's gender
 *   - `avatar`           the user's avatar link
 *   - `location`         the user's location
 *   - `url`              the URL of the personal page for the user on OSChina
 *
 * @param {String} accessToken
 * @param {Function} done
 * @api protected
 */
Strategy.prototype.userProfile = function(accessToken, done) {
    console.log(this._userProfileURL + " " + accessToken)
    this._oauth2.get(this._userProfileURL, accessToken, function(err, body, res) {
        if (err) {
            return done(new InternalOAuthError('failed to fetch user profile', err));
        }

        try {
            var json = JSON.parse(body);

            var profile = {
                provider: 'oschina'
            };

            profile.id = json.id;
            profile.email = json.email;
            profile.name = json.name;
            profile.gender = json.gender;
            profile.avatar = json.avatar;
            profile.location = json.location;
            profile.url = json.url;

            profile._raw = body;
            profile._json = json;

            done(null, profile);
        }
        catch (e) {
            done(e);
        }
    });
}

/**
 * Expose `Strategy`.
 */
module.exports = Strategy;