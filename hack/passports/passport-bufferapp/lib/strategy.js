/**
 * Module dependencies.
 */
var util = require('util')
  , OAuth2Strategy = require('passport-oauth').OAuth2Strategy
  , InternalOAuthError = require('passport-oauth').InternalOAuthError;


/**
 * `Strategy` constructor.
 *
 * The BufferApp authentication strategy authenticates requests by delegating to
 * BufferApp using the OAuth2 protocol.
 *
 * Applications must supply a `verify` callback which accepts a `token`,
 * `tokenSecret` and service-specific `profile`, and then calls the `done`
 * callback supplying a `user`, which should be set to `false` if the
 * credentials are not valid.  If an exception occured, `err` should be set.
 *
 * Options:
 *   - `consumerKey`     identifies client to BufferApp
 *   - `consumerSecret`  secret used to establish ownership of the consumer key
 *   - `callbackURL`     URL to which BufferApp will redirect the user after obtaining authorization
 *
 * Examples:
 *
 *         passport.use(new BufferAppStrategy({
 *             clientID: BUFFERAPP_CLIENT_ID,
 *             clientSecret: BUFFERAPP_CLIENT_SECRET,
 *             callbackURL:BUFFERAPP_REDIRECT_URI
 *           },
 *           function(accessToken, refreshToken, profile, done) {
 *             return done();
 *           }
 *         ));
 *
 * @param {Object} options
 * @param {Function} verify
 * @api public
 */
function Strategy(options, verify) {
  options = options || {};

  options.authorizationURL = options.authorizationURL || 'https://bufferapp.com/oauth2/authorize';
  options.tokenURL = options.tokenURL || 'https://api.bufferapp.com/1/oauth2/token.json';
  
  OAuth2Strategy.call(this, options, verify);
  this.name = 'bufferapp';
  
  this._skipExtendedUserProfile = (options.skipExtendedUserProfile === undefined) ? false : options.skipExtendedUserProfile;
}

/**
 * Inherit from `OAuth2Strategy`.
 */
util.inherits(Strategy, OAuth2Strategy);


/**
 * Retrieve user profile from BufferApp.
 *
 * This function constructs a normalized profile, with the following properties:
 *
 *   - `id`        (equivalent to `_id`)
 *   - `username`  (equivalent to `secret_email`)
 * @param {String} token
 * @param {Function} done
 * @api protected
 */
Strategy.prototype.userProfile = function (accessToken, done) {
  if (!this._skipExtendedUserProfile) {
    this._oauth2.get('https://api.bufferapp.com/1/user.json', accessToken, function (err, body, res) {
      if (err) { return done(new InternalOAuthError('failed to fetch user profile', err)); }
      
      try {
        var json = JSON.parse(body);
      
        var profile = { provider: 'bufferapp' };
        profile.id = json._id;
        profile.username = json.secret_email;
      
        profile._raw = body;
        profile._json = json;
      
        done(null, profile);
      } catch(e) {
        done(e);
      }
    });
  }
}


/**
 * Expose `Strategy`.
 */
module.exports = Strategy;
