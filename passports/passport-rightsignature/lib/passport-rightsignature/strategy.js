/**
 * Module dependencies.
 */
var util = require('util')
  , OAuthStrategy = require('passport-oauth').OAuthStrategy;


/**
 * `Strategy` constructor.
 *
 * The Right Signature authentication strategy authenticates requests by delegating to
 * Right Signature using the OAuth protocol.
 *
 * Applications must supply a `verify` callback which accepts a `token`,
 * `tokenSecret` and service-specific `profile`, and then calls the `done`
 * callback supplying a `user`, which should be set to `false` if the
 * credentials are not valid.  If an exception occured, `err` should be set.
 *
 * Options:
 *   - `clientID`     identifies client to Right Signature
 *   - `clientSecret`  secret used to establish ownership of the consumer key
 *   - `callbackURL`     URL to which Right Signature will redirect the user after obtaining authorization
 *
 * Examples:
 *
 *     passport.use(new RightSignatureStrategy({
 *         consumerKey: 'consumer-key',
 *         consumerSecret: 'consumer-secret'
 *         callbackURL: 'https://www.example.net/auth/rightsignature/callback'
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
  options.requestTokenURL = options.requestTokenURL || 'https://rightsignature.com/oauth/request_token';
  options.accessTokenURL = options.accessTokenURL || 'https://rightsignature.com/oauth/access_token';
  options.userAuthorizationURL = options.userAuthorizationURL || 'https://rightsignature.com/oauth/authorize';
  options.sessionKey = options.sessionKey || 'oauth:rightsignature';

  OAuthStrategy.call(this, options, verify);
  this.name = 'rightsignature';
}

/**
 * Inherit from `OAuthStrategy`.
 */
util.inherits(Strategy, OAuthStrategy);

/**
 * Retrieve user profile from Right Signature.
 *
 * This function constructs a normalized profile, with the following properties:
 *
 *   - `role (Right Signature role)`
 *   - `email (Right Signature email)`
 *   - `name (Right Signature name)`
 *   - `plan (Right Signature plan)`
 *
 * @param {String} token
 * @param {String} tokenSecret
 * @param {Object} params
 * @param {Function} done
 * @api protected
 */
Strategy.prototype.userProfile = function(token, tokenSecret, params, done) {
this._oauth.get('https://rightsignature.com/api/users/user_details.json', token, tokenSecret, function (err, body, res) {
    if (err) { return done(new InternalOAuthError('failed to fetch user profile', err)); }
    
    try {
      var json = JSON.parse(body);
      
      var profile = { provider: 'rightsignature' };
      profile.role = json.user.role;
      profile.email = json.user.email;
      profile.name = json.user.name;
      profile.plan = json.user.plan;
      
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
