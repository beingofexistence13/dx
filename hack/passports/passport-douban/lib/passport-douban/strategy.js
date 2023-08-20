/**
 * Module dependencies.
 */
var util = require('util')
  , OAuth2Strategy = require('passport-oauth').OAuth2Strategy
  , InternalOAuthError = require('passport-oauth').InternalOAuthError;


/**
 * `Strategy` constructor.
 *
 * The Douban authentication strategy authenticates requests by delegating to
 * Douban using the OAuth 2.0 protocol.
 *
 * Applications must supply a `verify` callback which accepts an `accessToken`,
 * `refreshToken` and service-specific `profile`, and then calls the `done`
 * callback supplying a `user`, which should be set to `false` if the
 * credentials are not valid.  If an exception occured, `err` should be set.
 *
 * Options:
 *   - `clientID`      your Douban application's Client ID
 *   - `clientSecret`  your Douban application's Client Secret
 *   - `callbackURL`   URL to which Douban will redirect the user after granting authorization
 *   - `scope`         array of permission scopes to request.  valid scopes include:
 *                     'user', 'public_repo', 'repo', 'gist', or none.
 *                     (see http://developer.douban.com/v3/oauth/#scopes for more info)
 *
 * Examples:
 *
 *     passport.use(new DoubanStrategy({
 *         clientID: '123-456-789',
 *         clientSecret: 'shhh-its-a-secret'
 *         callbackURL: 'https://www.example.net/auth/douban/callback'
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
  options.authorizationURL = options.authorizationURL || 'https://www.douban.com/service/auth2/auth';
  options.tokenURL = options.tokenURL || 'https://www.douban.com/service/auth2/token';
  options.scopeSeparator = options.scopeSeparator || ',';
  
  OAuth2Strategy.call(this, options, verify);
  this.name = 'douban';
  this._userProfileURL = options.userProfileURL || 'https://api.douban.com/v2/user/~me';
  this._oauth2._useAuthorizationHeaderForGET = true;
}

/**
 * Inherit from `OAuth2Strategy`.
 */
util.inherits(Strategy, OAuth2Strategy);


/**
 * Retrieve user profile from Douban.
 *
 * This function constructs a normalized profile, with the following properties:
 *
 *   - `provider`         always set to `douban`
 *   - `id`               the user's Douban ID
 *   - `username`         the user's Douban username
 *   - `displayName`      the user's full name
 *   - `profileUrl`       the URL of the profile for the user on Douban
 *   - `emails`           the user's email addresses
 *
 * @param {String} accessToken
 * @param {Function} done
 * @api protected
 */
Strategy.prototype.userProfile = function(accessToken, done) {
  this._oauth2.get(this._userProfileURL, accessToken, function (err, body, res) {
    if (err) { return done(new InternalOAuthError('failed to fetch user profile', err)); }
    
    try {
      var json = JSON.parse(body);
      
      var profile = { provider: 'douban' };
      profile.id = json.id;
      profile.displayName = json.name;
      profile.username = json.uid;
      profile.avatar = json.avatar;
      profile.profileUrl = json.alt;
      
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
