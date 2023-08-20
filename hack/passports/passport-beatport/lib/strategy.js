/**
 * Module dependencies.
 */
var util = require('util');
var OAuthStrategy = require('passport-oauth1');
var InternalOAuthError = require('passport-oauth1').InternalOAuthError;

/**
 * `Strategy` constructor.
 *
 * The Beatport authentication strategy authenticates requests by delegating to
 * Beatport using the OAuth protocol.
 *
 * Options:
 *   - `consumerKey`     identifies client to Beatport provider 
 *   - `consumerSecret`  secret used to establish ownership of the consumer key
 *   - `callbackURL`     URL to which Beatport will redirect the user after obtaining authorization
 *
 * Examples:
 *
 *     var BeatportStartegy = require('passport-beatport').Strategy;
 *
 *     passport.use(new BeatportStartegy({
 *         consumerKey: EXAMPLE_CONSUMER_KEY,
 *         consumerSecret: EXAMPLE_CONSUMER_SECRET, 
 *         callbackURL: 'https://www.example.net/auth/beatport/callback'
 *       },
 *       function(token, tokenSecret, profile, done) {
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
var Strategy = function (options, verify) {
    options = options || {};
    options.requestTokenURL      = options.requestTokenURL      || 'https://oauth-api.beatport.com/identity/1/oauth/request-token';
    options.accessTokenURL       = options.accessTokenURL       || 'https://oauth-api.beatport.com/identity/1/oauth/access-token';
    options.userAuthorizationURL = options.userAuthorizationURL || 'https://oauth-api.beatport.com/identity/1/oauth/authorize';

    OAuthStrategy.call(this, options, verify);
    this.name = 'beatport';

    this._userProfileURL = options.userProfileURL || 'https://oauth-api.beatport.com/identity/1/person';
    this._skipExtendedUserProfile = (options.skipExtendedUserProfile !== undefined) ? options.skipExtendedUserProfile : false;
}

/**
 * Inherit from `OAuth2Strategy`.
 */
util.inherits(Strategy, OAuthStrategy);

/**
 * Retrieve user profile from Beatport.
 *
 * This function constructs a normalized profile, with the following properties:
 *
 *  - `id`
 *  - `username`
 *  - `displayName`
 *
 * @param {String} token
 * @param {String} tokenSecret
 * @param {Object} params
 * @param {Function} done
 * @api protected
 */
Strategy.prototype.userProfile = function(token, tokenSecret, params, done) {
    this._oauth.get(this._userProfileURL, token, tokenSecret, function (err, data, res) {
        if (err) {
            return done(new InternalOAuthError('Failed to fetch user profile', err));
        }

        try {
            var json = JSON.parse(data);

            var profile = {};
            profile.provider    = 'beatport';
            profile.id          = String(json.id);
            profile.username    = json.username;
            profile.displayName = [json.first_name, json.last_name].join(' ');

            profile._raw  = data;
            profile._json = json;

            done(null, profile); 
        } catch (ex) {
            done(new Error('Failed to parse user profile'));
        }
    });
};

/**
 * Expose `Strategy`.
 */
module.exports = Strategy;
