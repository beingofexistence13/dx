/**
 * Module dependencies.
 */
var OAuth2Strategy = require('passport-oauth').OAuth2Strategy;
var InternalOAuthError = require('passport-oauth').InternalOAuthError;
var util = require('util');
var querystring = require('querystring');
var renameProperty = require('./rename-property');


/**
 * `Strategy` constructor.
 *
 * The Untappd authentication strategy authenticates requests by delegating to 
 * Untappd using the OAuth 2.0 protocol.
 *
 * Applications must supply a `verify` callback which accepts an `accessToken`,
 * `refreshToken` and service-specific `profile`, and then calls the `done`
 * callback supplying a `user`, which should be set to `false` if the
 * credentials are not valid.  If an exception occured, `err` should be set.
 *
 * Options:
 *   - `clientID`     your Untappd application's Client ID
 *   - `clientSecret` your Untappd application's Client Secret
 *   - `callbackURL`  URL to which Untappd will redirect the user after granting authorization
 *
 * Examples:
 *
 *     passport.use(new UntappdStrategy({
 *       clientID: 'UNTAPPD_CLIENT_ID',
 *       clientSecret: 'UNTAPPD_CLIENT_SECRET',
 *       callbackURL: 'https://www.example.net/auth/untappd/callback'
 *     }, function(accessToken, refreshToken, profile, done) {
 *       User.findOrCreate({ untappdId: profile.id }, function(err, user) {
 *         done(err, user);
 *       });
 *     });
 *
 * @param options
 * @param verify
 * @api public
 */
function Strategy(options, verify) {
  options = options || {};
  options.authorizationURL = options.authorizationURL || 'https://untappd.com/oauth/authenticate';
  options.tokenURL = options.tokenURL || 'https://untappd.com/oauth/authorize';

  OAuth2Strategy.call(this, options, verify);
  this.name = 'untappd';

  // For quirks of Untappd's OAuth implementation.
  this._oauth2.getOAuthAccessToken = getOAuthAccessToken;

  var original = this._oauth2.getAuthorizeUrl;
  this._oauth2.getAuthorizeUrl = function(params) {
    renameProperty(params, 'redirect_uri', 'redirect_url');
    return original.apply(this, arguments);
  };
}

/**
 * Inherit from `OAuth2Strategy`.
 */
util.inherits(Strategy, OAuth2Strategy);


/**
 * Retrive user profile from Untappd.
 *
 * This function constructs a normalized profile, with the following properties.
 *   - `provider`        always set to `'untappd'`
 *   - `id`              the user's Untappd ID
 *   - `displayName`     the user's Untappd username
 *   - `name.familyName` the user's last name
 *   - `name.givenName`  the user's first name
 *   - `emails`:         the email address granted by the user
 *   - `phots`:          the avatar image URLs of the user
 *
 * @param accessToken
 * @param done
 * @api protected
 */
Strategy.prototype.userProfile = function(accessToken, done) {
  var url = 'https://api.untappd.com/v4/user/info?compact=true';
  this._oauth2.get(url, accessToken, function(err, body, res) {
    if (err) {
      return done(new InternalOAuthError('Failed to fetch user metadata', err));
    }

    try {
      var user = JSON.parse(body).response.user;
      var profile = {
        provider: 'untappd',
        id: user.id,
        displayName: user.user_name,
        name: {
          familyName: user.last_name,
          givenName: user.first_name
        },
        emails: [
          { value: user.settings.email_address }
        ],
        photos: [
          { value: user.user_avatar },
          { value: user.user_avatar_hd }
        ]
      };
      done(null, profile);
    } catch (e) {
      done(e);
    }
  });
};

/**
 * Get OAuth access token from Untappd. Untappd accepts GET instead of POST
 * for code-token exchange. It also expects `redirect_url` instead of `redirect_uri`.
 *
 * @param {String} code
 * @param {Object} params
 * @param {Function} callback
 */
function getOAuthAccessToken(code, params, callback) {
  renameProperty(params, 'redirect_uri', 'redirect_url');

  params['client_id'] = this._clientId;
  params['client_secret'] = this._clientSecret;
  var codeParam = (params.grant_type === 'refresh_token') ? 'refresh_token' : 'code';
  params[codeParam] = code;

  var url = this._getAccessTokenUrl() + '?' + querystring.stringify(params);

  this._request('GET', url, {}, '', null, function(error, data, response) {
    if (error) {
      callback(error);
    } else {
      var results = JSON.parse(data);
      if (results.meta.http_code !== 200) {
        return callback(data);
      }
      results = results.response;
      var access_token = results['access_token'];
      var refresh_token = results['refresh_token'];
      delete results['refresh_token'];
      callback(null, access_token, refresh_token, results);
    }
  });
};

/**
 * Expose `Strategy`.
 */
module.exports = Strategy;
