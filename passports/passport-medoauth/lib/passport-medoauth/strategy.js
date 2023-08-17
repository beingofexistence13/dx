/**
 * Module dependencies.
 */
var util = require('util')
  , OAuth2Strategy = require('passport-oauth').OAuth2Strategy
  , InternalOAuthError = require('passport-oauth').InternalOAuthError;


/**
 * `Strategy` constructor.
 *
 * The medoauth authentication strategy authenticates requests by delegating to
 * medoauth using the OAuth 2.0 protocol.
 *
 * Applications must supply a `verify` callback which accepts an `accessToken`,
 * `refreshToken` and service-specific `profile`, and then calls the `done`
 * callback supplying a `user`, which should be set to `false` if the
 * credentials are not valid.  If an exception occured, `err` should be set.
 *
 * Options:
 *   - `clientID`      your medoauth application's Client ID
 *   - `clientSecret`  your medoauth application's Client Secret
 *   - `callbackURL`   URL to which medoauth will redirect the user after granting authorization
 *   - `scope`         array of permission scopes to request.  valid scopes include:
 *                     'user', 'public_repo', 'repo', 'gist', or none.
 *                     (see http://developer.medoauth.com/v3/oauth/#scopes for more info)
 *   — `userAgent`     All API requests MUST include a valid User Agent string. 
 *                     e.g: domain name of your application.
 *                     (see http://developer.medoauth.com/v3/#user-agent-required for more info)
 *
 * Examples:
 *
 *     passport.use(new medoauthStrategy({
 *         clientID: '123-456-789',
 *         clientSecret: 'shhh-its-a-secret'
 *         callbackURL: 'https://www.example.net/auth/medoauth/callback',
 *         userAgent: 'myapp.com'
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
  options.authorizationURL = options.authorizationURL || 'http://oauth.medoauth.com/dialog/authorize/';
 options.tokenURL = options.tokenURL || 'http;//oauth.medoauth.com/oauth/token';

  options.scopeSeparator = options.scopeSeparator || ',';
  options.customHeaders = options.customHeaders || {};
  
  if (!options.customHeaders['User-Agent']) {
    options.customHeaders['User-Agent'] = options.userAgent || 'passport-medoauth';
  }
  
  OAuth2Strategy.call(this, options, verify);
  this.name = 'medoauth';
  this._userProfileURL = options.userProfileURL || 'http://oauth.medoauth.com/profile';

}

/**
 * Inherit from `OAuth2Strategy`.
 */
util.inherits(Strategy, OAuth2Strategy);


/**
 * Retrieve user profile from medoauth.
 *
 * This function constructs a normalized profile, with the following properties:
 *
 *   - `provider`         always set to `medoauth`
 *   - `id`               the user's medoauth ID
 *   - `username`         the user's medoauth username
 *   - `displayName`      the user's full name
 *   - `profileUrl`       the URL of the profile for the user on medoauth
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
      
      var profile = { provider: 'medoauth' };
      profile.id = json.id;
      profile.displayName = json.name;
      profile.username = json.login;
      profile.profileUrl = json.html_url;
      profile.emails = [{ value: json.email }];
      
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
