/**
 * Module dependencies.
 */
var util = require('util')
  // , crypto = require('crypto')
  , OAuthStrategy = require('passport-oauth').OAuthStrategy
  , InternalOAuthError = require('passport-oauth').InternalOAuthError;

/**
 * `Strategy` constructor.
 *
 * The Nate authentication strategy authenticates requests by delegating to
 * Nate using the OAuth protocol.
 *
 * Applications must supply a `verify` callback which accepts a `token`,
 * `tokenSecret` and service-specific `profile`, and then calls the `done`
 * callback supplying a `user`, which should be set to `false` if the
 * credentials are not valid.  If an exception occured, `err` should be set.
 *
 * Options:
 *   - `consumerKey`     identifies client to Nate
 *   - `consumerSecret`  secret used to establish ownership of the consumer key
 *   - `callbackURL`     URL to which Nate will redirect the user after obtaining authorization
 *
 * Examples:
 *
 *     passport.use(new NateStrategy({
 *         consumerKey: '123-456-789',
 *         consumerSecret: 'shhh-its-a-secret'
 *         callbackURL: 'https://www.example.net/auth/Nate/callback'
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
function Strategy(options, verify) {
  options = options || {};
  options.requestTokenURL = options.requestTokenURL || 'https://oauth.nate.com/OAuth/GetRequestToken/V1a/';
  options.accessTokenURL = options.accessTokenURL || 'https://oauth.nate.com/OAuth/GetAccessToken/V1a/';
  options.userAuthorizationURL = options.userAuthorizationURL || 'https://oauth.nate.com/OAuth/Authorize/V1a/';
  options.sessionKey = options.sessionKey || 'oauth:nate';

  OAuthStrategy.call(this, options, verify);
  this.name = 'nate';
}

/**
 * Inherit from `OAuthStrategy`.
 */
util.inherits(Strategy, OAuthStrategy);

/**
 * Retrieve user profile from Nate.
 *
 * This function constructs a normalized profile, with the following properties:
 *
 *   - `displayName`
 *
 * @param {String} token
 * @param {String} tokenSecret
 * @param {Object} params
 * @param {Function} done
 * @api protected
 */

Strategy.prototype.userProfile = function(token, tokenSecret, params, done) {
  this._oauth.post('https://openapi.nate.com/OApi/RestApiSSL/CY/200800/gethomeinfo/v1/', token, tokenSecret, { 'output': 'json' }, 'json', function (err, body, res) {
    if (err) { return done(new InternalOAuthError('failed to fetch user profile', err)); }
    
    try {
      var json = JSON.parse(body);

      var profile = { provider: 'nate' };
      profile.id = json.id;
      profile.name = json.name;
      profile.displayName = json.name;
      profile.profileUrl = json.profileUrl;
                       
      profile._raw = body;
      profile._json = json;
      
      done(null, profile);
    } catch(e) {
      done(e);
    }
  });
}


/**
 * Expose `Strategy`.
 */
module.exports = Strategy;
