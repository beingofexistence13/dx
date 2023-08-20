/**
 * Module dependencies.
 */
var util = require('util')
  , OAuthStrategy = require('passport-oauth').OAuthStrategy
  , InternalOAuthError = require('passport-oauth').InternalOAuthError;


/**
 * `Strategy` constructor.
 *
 * The Vimeo authentication strategy authenticates requests by delegating to
 * Vimeo using the OAuth protocol.
 *
 * Applications must supply a `verify` callback which accepts a `token`,
 * `tokenSecret` and service-specific `profile`, and then calls the `done`
 * callback supplying a `user`, which should be set to `false` if the
 * credentials are not valid.  If an exception occured, `err` should be set.
 *
 * Options:
 *   - `consumerKey`     identifies client to Vimeo
 *   - `consumerSecret`  secret used to establish ownership of the consumer key
 *   - `callbackURL`     URL to which Vimeo will redirect the user after obtaining authorization
 *
 * Examples:
 *
 *     passport.use(new VimeoStrategy({
 *         consumerKey: '123-456-789',
 *         consumerSecret: 'shhh-its-a-secret'
 *         callbackURL: 'https://www.example.net/auth/vimeo/callback'
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
  options.requestTokenURL = options.requestTokenURL || 'http://vimeo.com/oauth/request_token';
  options.accessTokenURL = options.accessTokenURL || 'http://vimeo.com/oauth/access_token';
  options.userAuthorizationURL = options.userAuthorizationURL || 'http://vimeo.com/oauth/authorize';
  options.sessionKey = options.sessionKey || 'oauth:vimeo';

  OAuthStrategy.call(this, options, verify);
  this.name = 'vimeo';
}

/**
 * Inherit from `OAuthStrategy`.
 */
util.inherits(Strategy, OAuthStrategy);

/**
 * Retrieve user profile from Vimeo.
 *
 * This function constructs a normalized profile, with the following properties:
 *
 *   - `id`
 *   - `username`
 *   - `displayName`
 *
 * @param {String} token
 * @param {String} tokenSecret
 * @param {Object} params
 * @param {Function} done
 * @api protected
 */
Strategy.prototype.userProfile = function(token, tokenSecret, params, done) {
  this._oauth.get('http://vimeo.com/api/rest/v2/?method=vimeo.people.getInfo&user_id=' + token + '&format=json', token, tokenSecret, function (err, body, res) {
    if (err) { return done(new InternalOAuthError('failed to fetch user profile', err)); }
    
    try {
      var json = JSON.parse(body);
      
      var profile = { provider: 'vimeo' };
      profile.id = json.person.id
      profile.username = json.person.username;
      profile.displayName = json.person.display_name;
      
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
