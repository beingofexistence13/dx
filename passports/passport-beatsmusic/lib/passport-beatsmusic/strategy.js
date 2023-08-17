/**
 * Module dependencies.
 */
var util = require('util'),
    url = require('url'),
    OAuth2Strategy = require('passport-oauth').OAuth2Strategy,
    InternalOAuthError = require('passport-oauth').InternalOAuthError,
    baseURL = 'https://partner.api.beatsmusic.com',
    apiVersion = 'v1',
    baseAPIURL = baseURL + '/' + apiVersion + '/api';



/**
 * `Strategy` constructor.
 *
 * The Beats Music authentication strategy authenticates requests by delegating to
 * Beats Music using the OAuth 2.0 protocol.
 *
 * Applications must supply a `verify` callback which accepts an `accessToken`,
 * `refreshToken` and `beatsmusic` object, which contains additional info as outlined
 * here: https://developer.beatsmusic.com/docs/read/getting_started/Web_Server_Applications.
 * The callback should then call the `done`
 * callback supplying a `user`, which should be set to `false` if the
 * credentials are not valid.  If an exception occured, `err` should be set.
 *
 * Options:
 *   - `clientID`      your Beats Music application's client ID
 *   - `clientSecret`  your Beats Music application's App Secret
 *   - `callbackURL`   URL to which Beats Music will redirect the user after granting authorization
 *
 * Examples:
 *     BeatsMusicStrategy = require('passport-beatsmusic').Strategy;
 *
 *     ...
 *
 *     passport.use(new BeatsMusicStrategy({
 *         clientID: '123-456-789',
 *         clientSecret: 'shhh-its-a-super-secret'
 *         callbackURL: 'https://www.example.net/auth/beatsmusic/callback'
 *       },
 *       function(accessToken, refreshToken, beatsmusic, done) {
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
    options.baseOauth2URL = options.baseOauth2URL || baseURL + '/' + apiVersion + '/oauth2';
    options.authorizationURL = options.authorizationURL || options.baseOauth2URL + '/authorize';
    options.tokenURL = options.tokenURL || options.baseOauth2URL + '/token';
    options.scopeSeparator = options.scopeSeparator || ',';

    OAuth2Strategy.call(this, options, verify);
    this.name = 'beatsmusic';
}

/**
 * Inherit from `OAuth2Strategy`.
 */
util.inherits(Strategy, OAuth2Strategy);

/**
 * Retrieve the user profile from Beats Music.
 *
 * This will construct a Passport normalized profile:
 * - `provider`        always `beatsmusic`
 * - `id`              the user's beatsmusic id
 * - `username`        the user's beatsmusic username
 * - `displayName`     the user's full name
 * - `emails`          the user's email addresses
 */
OAuth2Strategy.prototype.userProfile = function (accessToken, done) {
    var strat = this;
    // retrieve the user context using /api/me
    strat._oauth2.get(baseAPIURL + '/me', accessToken, function (err, contextBody, res) {
        if (err) {
            return done(new InternalOAuthError('failed to fetch user context'));
        }

        try {
            var jsonContext = JSON.parse(contextBody),
                context = jsonContext.result.user_context;

            // retrieve the user profile using /api/users/:id
            strat._oauth2.get(baseAPIURL + '/users/' + context, accessToken, function (err, userBody, res) {
                if (err) {
                    return done(new InternalOAuthError('failed to fetch user profile', err));
                }

                // create Passport normalized profile
                try {
                    var json = JSON.parse(userBody),
                        profile = {
                            provider: 'beatsmusic'
                        };

                    profile.id = json.data.id;
                    profile.username = json.data.username;
                    profile.displayName = json.data.full_name;
                    profile._raw = userBody;
                    profile._json = json;

                    done(null, profile);
                } catch (e) {
                    done(e);
                }
            });
        } catch (e) {
            done(e);
        }
    });
};

/**
 * Expose `Strategy`.
 */
module.exports = Strategy;
