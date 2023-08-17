/**
 * Module dependencies.
 */
var util = require('util')
    , OAuth2Strategy = require('passport-oauth').OAuth2Strategy
    , InternalOAuthError = require('passport-oauth').InternalOAuthError;


/**
 * `Strategy` constructor.
 *
 * The Feedly authentication strategy authenticates requests by delegating to
 * Feedly using the OAuth 2.0 protocol.
 *
 * Applications must supply a `verify` callback which accepts an `accessToken`,
 * `refreshToken` and service-specific `profile`, and then calls the `done`
 * callback supplying a `user`, which should be set to `false` if the
 * credentials are not valid.  If an exception occured, `err` should be set.
 *
 * Options:
 *   - `clientID`      your Feedly application's client id
 *   - `clientSecret`  your Feedly application's client secret
 *   - `callbackURL`   URL to which Feedly will redirect the user after granting authorization
 *
 * Examples:
 *
 *     passport.use(new FeedlyStrategy({
 *         clientID: '123-456-789',
 *         clientSecret: 'shhh-its-a-secret'
 *         callbackURL: 'https://www.example.net/auth/Feedly/callback'
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
    options.authorizationURL = options.authorizationURL || 'https://cloud.feedly.com/v3/auth/auth';
    options.tokenURL = options.tokenURL || 'http://cloud.feedly.com/v3/auth/token';
    options.profilePath = options.tokenURL || '/v3/profile/'
    options.refreshTokenUrl = options.refreshTokenUrl || '/v3/auth/token'
    options.domain = options.domain || 'cloud.feedly.com'

    OAuth2Strategy.call(this, options, verify);
    this.name = 'feedly';
}

/**
 * Inherit from `OAuth2Strategy`.
 */
util.inherits(Strategy, OAuth2Strategy);

/**
 * Return extra Feedly-specific parameters to be included in the authorization
 * request.
 *
 * Options:
 *  - `display`  Display mode to render dialog, { `page`, `popup`, `touch` }.
 *
 * @param {Object} options
 * @return {Object}
 * @api protected
 */
Strategy.prototype.authorizationParams = function (options) {
    var params = {};

    if (options.display) {
        params.display = options.display;
    }
    if (!options.grant_type) {
        params.grant_type = 'authorization_code';
    }
    if (!options.state) {
        params.state = '';
    }
    if (!options.code) {
        params.code = options.code;
    }
    return params;
};


/**
 * Retrieve user profile from Feedly.
 *
 * This function constructs a normalized profile, with the following properties:
 *
 *   - `provider`         always set to `feedly`
 *   - `id`               the user's Feedly ID
 *   - `username`         the user's Feedly username
 *   - `displayName`      the user's full name
 *
 * @param {String} accessToken
 * @param {Function} done
 * @api protected
 */
Strategy.prototype.userProfile = function(accessToken, done) {
    // TODO: Feedly provides user profile information in the access token
    //       response.  As an optimization, that information should be used, which
    //       would avoid the need for an extra request during this step.  However,
    //       the internal node-oauth module will have to be modified to support
    //       exposing this information.
    // Hack code to work around the default token name ( as defined in the OAuth2 spec ).
    this._oauth2.useAuthorizationHeaderforGET(true);
    this._oauth2.buildAuthHeader("OAuth", accessToken);

    this._oauth2.get('http://cloud.feedly.com/v3/profile', accessToken, function (err, body, res) {
        if (err) { return done(new InternalOAuthError('failed to fetch user profile', err)); }

        try {
            var json = JSON.parse(body);
            var profile = { provider: 'feedly' };
            profile.provider_id = json.id;
            profile.displayName = json.fullName;

            profile._raw = body;
            profile._json = json;

            return done(null, profile);
        } catch(e) {
            return done(e);
        }
    });
}


/**
 * Expose `Strategy`.
 */
module.exports = Strategy;