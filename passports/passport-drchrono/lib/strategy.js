/**
 * Module dependencies.
 */
var OAuth2Strategy = require('passport-oauth2')
    , util = require('util')
    , debug = require('debug')('passport-drchrono:strategy')
    , request = require('request')
    , InternalOAuthError = require('passport-oauth2').InternalOAuthError
    , Profile = require('./profile');


/**
 * Creates an instance of `DrchronoStrategy`.
 *
 * The drchrono authentication strategy authenticates requests by delegating
 * to drchrono REST API using  the OAuth 2.0 protocol.
 *
 * Applications must supply a `verify` callback with the following signature
 *
 *     function(accessToken, refreshToken, profile, done)
 *
 * The verify callback is responsible for finding or creating the user,
 * and invoking `done` with the following arguments:
 *
 *     done(err, user, info);
 *
 * If there is an authentication failure, `user` should be set to `false`.
 *
 * The options follow the common names for other passport OAuth strategies (google, facebook)
 * even though for drchrono they have a different name.
 *
 * Options:
 *   - `clientID`      your drchrono client ID
 *   - `clientSecret`  your drchrono application's client secret
 *   - `callbackURL`   URL to which Windows Live will redirect the user after granting authorization
 *   - `scope`         drchrono scope, following the format given in their API
 *
 * Example:
 *
 *     passport.use(new DrchronoStrategy({
 *            clientID: 'abcdefgxs023934',
 *            clientSecret: 'assdfco09sdXDAdg9cxaaSASDF90asdgf0asdvc',
 *            callbackURL: 'https://www.example.net/auth/drchrono/callback'
 *        },
 *       function(accessToken, credentials, profile, done) {
 *           User.findOrCreate(..., function (err, user) {
 *               done(err, user);
 *           });
 *        }
 *     ));
 *
 * @constructor
 * @param {Object} options
 * @param {String} options.clientID - your drchrono client ID. It can be found on the drchrono API management page
 * @param {String} options.clientSecret - your drchrono client secret. It can be found on the drchrono API management page
 * @param {String} options.callbackURL - URL to which drchrono will redirect the user after obtaining authorization
 * @param {String} [options.scope] - drchrono scope directive
 * @param {Boolean} [options.passReqToCallback] - if the request object is passed to the verify callback
 * @param {String} [options.authorizationURL] - URL used to obtain an authorization grant
 * @param {String} [options.profileURL] - URL used to obtain the profile information
 * @param {String} [options.tokenURL] - URL used to obtain an access token
 * @param {Function} verify
 * @api public
 */
function DrchronoStrategy(options, verify) {

    options = options || {};

    // Verify we have basic information. This way if something is missing, the user knows as soon as possible
    if (!verify) { throw new TypeError('DrchronoStrategy requires a verify callback'); }
    if (!options.clientID) { throw new TypeError('DrchronoStrategy requires a clientID option'); }
    if (!options.clientSecret) { throw new TypeError('DrchronoStrategy requires a clientSecret option'); }
    if (!options.callbackURL) { throw new TypeError('DrchronoStrategy requires a callbackURL option'); }

    // Allow to have custom/updated urls
    options.authorizationURL = options.authorizationURL || 'https://drchrono.com/o/authorize/';
    options.tokenURL = options.tokenURL || 'https://drchrono.com/o/token/';


    OAuth2Strategy.call(this, options, verify);
    this.name = 'drchrono';
    this._verify = verify;
    this._passReqToCallback = options.passReqToCallback;

    this._profileURL = options.profileURL || 'https://drchrono.com/api/users/current';
    this._clientID = options.clientID;
    this._clientSecret = options.clientSecret;

    /**
     * Overwrite `_oauth2.get` to use `request.get` allowing for custom headers.
     */
    this._oauth2.get = function (url, accessToken, callback) {
        request.get({
            url: url,
            headers: {
                'Authorization': 'Bearer ' + accessToken,
                'Accept': 'application/json;'
            }
        }, function(err, response, body) {
            if (callback) callback(err, body, response);
        });
    };
}

/**
 * Inherit from `passport.Strategy`.
 */
util.inherits(DrchronoStrategy, OAuth2Strategy);

/**
 * Retrieve user profile from drchrono.
 *
 * This function constructs a normalized profile, with the following properties:
 *
 *   - `provider`         always set to `drchrono`
 *   - `id`
 *   - `username`
 *
 * @param {string} accessToken
 * @param {function} done
 * @access protected
 */
DrchronoStrategy.prototype.userProfile = function(accessToken, done) {
    debug('userProfile url: %s', this._profileURL);
    this._oauth2.useAuthorizationHeaderforGET(true);
    this._oauth2.get(this._profileURL, accessToken, function (err, body, res) {
        var json;

        // TODO: check if we can be more specific about the error returned
        if (err) {
            debug('userProfile error: %j' + err);
            return done(new InternalOAuthError('Failed to fetch user profile', err));
        }

        try {
            debug('userProfile body: %s', body);
            json = JSON.parse(body);
        } catch (ex) {
            return done(new Error('Failed to parse user profile'));
        }

        var profile = Profile.parse(json);
        profile.provider = 'drchrono';
        profile._raw = body;
        profile._json = json;

        done(null, profile);
    });
};

/**
 * Expose `DrchronoStrategy`.
 */
module.exports = DrchronoStrategy;
