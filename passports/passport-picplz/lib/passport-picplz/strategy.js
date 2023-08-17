/**
 * Module dependencies.
 */
var util = require('util')
  , OAuth2Strategy = require('passport-oauth').OAuth2Strategy
  , InternalOAuthError = require('passport-oauth').InternalOAuthError;


/**
 * `Strategy` constructor.
 *
 * The picplz authentication strategy authenticates requests by delegating to
 * picplz using the OAuth 2.0 protocol.
 *
 * Applications must supply a `verify` callback which accepts an `accessToken`,
 * `refreshToken` and service-specific `profile`, and then calls the `done`
 * callback supplying a `user`, which should be set to `false` if the
 * credentials are not valid.  If an exception occured, `err` should be set.
 *
 * Options:
 *   - `clientID`      your picplz application's client id
 *   - `clientSecret`  your picplz application's client secret
 *   - `callbackURL`   URL to which picplz will redirect the user after granting authorization
 *
 * Examples:
 *
 *     passport.use(new PicplzStrategy({
 *         clientID: '123-456-789',
 *         clientSecret: 'shhh-its-a-secret'
 *         callbackURL: 'https://www.example.net/auth/picplz/callback'
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
  options.authorizationURL = options.authorizationURL || 'https://picplz.com/oauth2/authenticate';
  options.tokenURL = options.tokenURL || 'https://picplz.com/oauth2/access_token';
  
  OAuth2Strategy.call(this, options, verify);
  this.name = 'picplz';
  
  // NOTE: Due to OAuth 2.0 implementations arising at different points and
  //       drafts in the specification process, the parameter used to denote the
  //       access token is not always consistent.    As of OAuth 2.0 draft 22,
  //       the parameter is named "access_token".  However, picplz's
  //       implementation expects it to be named "oauth_token".  For further
  //       information, refer to: https://sites.google.com/site/picplzapi/authentication
  this._oauth2.setAccessTokenName("oauth_token");
}

/**
 * Inherit from `OAuth2Strategy`.
 */
util.inherits(Strategy, OAuth2Strategy);


/**
 * Retrieve user profile from picplz.
 *
 * This function constructs a normalized profile, with the following properties:
 *
 *   - `provider`         always set to `picplz`
 *   - `id`               the user's picplz ID
 *   - `username`         the user's picplz username
 *   - `displayName`      the user's full name
 *
 * @param {String} accessToken
 * @param {Function} done
 * @api protected
 */
Strategy.prototype.userProfile = function(accessToken, done) {
  this._oauth2.get('https://api.picplz.com/api/v2/user.json?id=self', accessToken, function (err, body, res) {
    if (err) { return done(new InternalOAuthError('failed to fetch user profile', err)); }
    
    try {
      var json = JSON.parse(body);
      
      var profile = { provider: 'picplz' };
      profile.id = json.value.users[0].id;
      profile.displayName = json.value.users[0].display_name;
      profile.username = json.value.users[0].username;
      
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
