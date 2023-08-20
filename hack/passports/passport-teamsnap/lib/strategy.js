/**
 * Module dependencies.
 */
var util = require('util')
    , OAuth2Strategy = require('passport-oauth2')
    , InternalOAuthError = require('passport-oauth2').InternalOAuthError
    , cj = require('collection-json')
    , debug = require('debug')('passport-teamsnap');


/**
 * `Strategy` constructor.
 *
 * The Teamsnap authentication strategy authenticates requests by delegating to
 * Teamsnap using the OAuth 2.0 protocol.
 *
 * Applications must supply a `verify` callback which accepts an `accessToken`,
 * `refreshToken` and service-specific `profile`, and then calls the `done`
 * callback supplying a `user`, which should be set to `false` if the
 * credentials are not valid.  If an exception occurred, `err` should be set.
 *
 * Options:
 *   - `apiVersion`    (optional) the Teamsnap API version to use (Only '3' currently). Default is '3'.
 *   - `clientID`      your Teamsnap application's app key found in the App Console
 *   - `clientSecret`  your Teamsnap application's app secret
 *   - `callbackURL`   URL to which Dropbox will redirect the user after granting authorization
 *
 * Examples:
 *
 *     passport.use(new TeamsnapStrategy({
 *         clientID: 'yourAppKey',
 *         clientSecret: 'yourAppSecret'
 *         callbackURL: 'https://www.example.net/auth/dropbox-teamsnap/callback',
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
  if (typeof options == 'function') {
    verify = options;
    options = undefined;
  }
  
  var supportedApiVersions = ['3'],
      defaultOptionsByApiVersion = {
        3: {
          profileURL:'https://api.teamsnap.com/v3/me',
          authorizationURL: 'https://auth.teamsnap.com/oauth/authorize',
          tokenURL: 'https://auth.teamsnap.com/oauth/token',
          scopeSeparator: ' ',
          customHeaders: {
            'Content-Type': 'application/json'
          }
        }
      };

  options = options || {};
  if (!verify) { throw new TypeError('TeamsnapStrategy requires a verify callback'); }
  if (!options.clientID) { throw new TypeError('TeamsnapStrategy requires a clientID option'); }

  if (options.apiVersion != null && supportedApiVersions.indexOf(options.apiVersion.toString()) === -1) {
    throw new Error('Unsupported Teamsnap API version. Supported versions is "3".');
  }

  this._apiVersion = options.apiVersion || '3';
  this._profileURL = options.profileURL || defaultOptionsByApiVersion[this._apiVersion].profileURL;

  options.authorizationURL = options.authorizationURL || defaultOptionsByApiVersion[this._apiVersion].authorizationURL;
  options.tokenURL = options.tokenURL || defaultOptionsByApiVersion[this._apiVersion].tokenURL;
  
  options.scopeSeparator = options.scopeSeparator || defaultOptionsByApiVersion[this._apiVersion].scopeSeparator;
  options.customHeaders = options.customHeaders || defaultOptionsByApiVersion[this._apiVersion].customHeaders;

  OAuth2Strategy.call(this, options, verify);
  this.name = 'teamsnap';
}

/**
 * Inherit from `OAuth2Strategy`.
 */
util.inherits(Strategy, OAuth2Strategy);

/**
 * Retrieve user profile from Teamsnap.
 *
 * This function constructs a normalized profile, with the following properties:
 *
 *   - `provider`         always set to `teamsnap`
 *   - `data`             will contains the data array from Teamsnap
 *
 * @param {String} accessToken
 * @param {Function} done
 * @api protected
 */
Strategy.prototype.userProfile = function(accessToken, done) {
  this._oauth2.useAuthorizationHeaderforGET(true);
  this._oauth2.get(this._profileURL, accessToken, function (err, body, res) {
    if (res && res.statusCode === 404) {
        return done(new InternalOAuthError(res.headers['x-caserrorcode'], res.statusCode));
    }

    var json;
    
    if (err) {
      if (err.data) {
        try {
          json = JSON.parse(err.data);
        } catch (_) {}
      }
        
      if (json && json.error) {
        return done(new InternalOAuthError(json.error.message, json.error.code));
      }
      return done(new InternalOAuthError('Failed to fetch user profile', err));
    }
    
    try {
      var profile = {};
      profile.provider = 'teamsnap';
      profile._raw = body;
      
      var collection = new cj.Collection(JSON.parse(body));
      
      debug("collection --> " + collection);
      
      if (collection.items) {
        profile.data = collection.items;
      } 
      
      return done(null,profile);
    } catch (ex) {
      debug("error --> " + ex);
      return done(new InternalOAuthError('Failed to parse user profile',ex));
    }
  });
};


/**
 * Expose `Strategy`.
 */
module.exports = Strategy;
