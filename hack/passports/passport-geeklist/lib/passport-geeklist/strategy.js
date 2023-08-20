/**
 * Module dependencies.
 */
var util = require('util')
  , OAuthStrategy = require('passport-oauth').OAuthStrategy
  , InternalOAuthError = require('passport-oauth').InternalOAuthError;


/**
 * `Strategy` constructor.
 *
 * The Geeklist authentication strategy authenticates requests by delegating to
 * Geeklist using the OAuth protocol.
 *
 * Applications must supply a `verify` callback which accepts a `token`,
 * `tokenSecret` and service-specific `profile`, and then calls the `done`
 * callback supplying a `user`, which should be set to `false` if the
 * credentials are not valid.  If an exception occured, `err` should be set.
 *
 * Options:
 *   - `consumerKey`     identifies client to Geeklist
 *   - `consumerSecret`  secret used to establish ownership of the consumer key
 *   - `callbackURL`     URL to which Geeklist will redirect the user after obtaining authorization
 *
 * Examples:
 *
 *     passport.use(new GeeklistStrategy({
 *         consumerKey: '123-456-789',
 *         consumerSecret: 'shhh-its-a-secret'
 *         callbackURL: 'https://www.example.net/auth/Geeklist/callback'
 *       },
 *       function(token, tokenSecret, profile, done) {
 *         return done();
 *       }
 *     ));
 *
 * @param {Object} options
 * @param {Function} verify
 * @api public
 */
function Strategy(options, verify) {
  options = options || {};
  options.requestTokenURL = options.requestTokenURL || 'http://api.geekli.st/v1/oauth/request_token';
  options.accessTokenURL = options.accessTokenURL || 'http://api.geekli.st/v1/oauth/access_token';
  options.userAuthorizationURL = options.userAuthorizationURL || 'https://geekli.st/oauth/authorize';
  options.sessionKey = options.sessionKey || 'oauth:geeklist';
  
  OAuthStrategy.call(this, options, verify);
  this.name = 'geeklist';
}

/**
 * Inherit from `OAuthStrategy`.
 */
util.inherits(Strategy, OAuthStrategy);

/**
 * Retrieve user profile from Geeklist.
 *
 * This function constructs a normalized profile, with the following properties:
 *
 *   - `id`        (equivalent to `user_id`)
 *   - `username`  (equivalent to `screen_name`)
 *   - 'displayName'
 *   - 'photos' (large && small avatar pics)
 *
 * @param {String} token
 * @param {String} tokenSecret
 * @param {Object} params
 * @param {Function} done
 * @api protected
 */
Strategy.prototype.userProfile = function(token, tokenSecret, params, done) {
    this._oauth.get('http://api.geekli.st/v1/user', token, tokenSecret, function (err, body, res) {
      if (err) { return done(new InternalOAuthError('failed to fetch user profile', err)); }
      
      try {
        var json = JSON.parse(body);
      
        var profile = { provider: 'geeklist' };
        profile.id = json.data._id;
        profile.username = json.data.screen_name;
        profile.displayName = json.data.name;
        profile.photos = [{ value: json.data.avatar.large }, { value: json.data.avatar.small }];
      
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
