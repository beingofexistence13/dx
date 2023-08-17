/**
 * Module dependencies.
 */
var util = require('util')
  , OAuth2Strategy = require('passport-oauth').OAuth2Strategy
  , InternalOAuthError = require('passport-oauth').InternalOAuthError;


/**
 * `Strategy` constructor.
 *
 * The Gowalla authentication strategy authenticates requests by delegating to
 * Gowalla using the OAuth 2.0 protocol.
 *
 * Applications must supply a `verify` callback which accepts an `accessToken`,
 * `refreshToken` and service-specific `profile`, and then calls the `done`
 * callback supplying a `user`, which should be set to `false` if the
 * credentials are not valid.  If an exception occured, `err` should be set.
 *
 * Options:
 *   - `clientID`      your Gowalla application's client id
 *   - `clientSecret`  your Gowalla application's client secret
 *   - `callbackURL`   URL to which Gowalla will redirect the user after granting authorization
 *
 * Examples:
 *
 *     passport.use(new GowallaStrategy({
 *         clientID: '123-456-789',
 *         clientSecret: 'shhh-its-a-secret'
 *         callbackURL: 'https://www.example.net/auth/gowalla/callback'
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
  options.authorizationURL = options.authorizationURL || 'https://gowalla.com/api/oauth/new';
  options.tokenURL = options.tokenURL || 'https://api.gowalla.com/api/oauth/token';
  
  OAuth2Strategy.call(this, options, verify);
  this.name = 'gowalla';
  
  this._gowallaAPIKey = options.clientID;
}

/**
 * Inherit from `OAuth2Strategy`.
 */
util.inherits(Strategy, OAuth2Strategy);


/**
 * Retrieve user profile from Gowalla.
 *
 * This function constructs a normalized profile, with the following properties:
 *
 *   - `provider`         always set to `gowalla`
 *   - `username`         the user's Gowalla username
 *   - `displayName`      the user's full name
 *
 * @param {String} accessToken
 * @param {Function} done
 * @api protected
 */
Strategy.prototype.userProfile = function(accessToken, done) {
  // TODO: The Gowalla API requires that certain headers be set in the request.
  //       However, the public API exposed by the underlying node-oauth module
  //       does not allow these headers to be set.  As such, a private API
  //       method is being used here.  A patch should be implemented for and
  //       submitted to the node-oauth project.
  
  var headers = {};
  headers['Accept'] = 'application/json';
  headers['X-Gowalla-API-Key'] = this._gowallaAPIKey;
  
  this._oauth2._request('GET', 'https://api.gowalla.com/users/me', headers, '', accessToken, function (err, body, res) {
    if (err) { return done(new InternalOAuthError('failed to fetch user profile', err)); }
    
    try {
      var json = JSON.parse(body);
      
      var profile = { provider: 'gowalla' };
      profile.username = json.username;
      profile.displayName = json.first_name + ' ' + json.last_name;
      profile.name = { familyName: json.last_name,
                       givenName: json.first_name };
                       
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
