/**
 * Module dependencies.
 */
var util = require('util')
  , OAuth2Strategy = require('passport-oauth').OAuth2Strategy;


/**
 * `Strategy` constructor.
 *
 * The eHealth authentication strategy authenticates requests by delegating to
 * eHealth using the OAuth 2.0 protocol.
 *
 * Applications must supply a `verify` callback which accepts an `accessToken`,
 * `refreshToken` and service-specific `profile`, and then calls the `done`
 * callback supplying a `user`, which should be set to `false` if the
 * credentials are not valid.  If an exception occured, `err` should be set.
 *
 * Options:
 *   - `clientID`      your eHealth application's client id
 *   - `clientSecret`  your eHealth application's client secret
 *   - `callbackURL`   URL to which eHealth will redirect the user after granting authorization
 *
 * Examples:
 *
 *     passport.use(new eHealthStrategy({
 *         clientID: '123-456-789',
 *         clientSecret: 'shhh-its-a-secret'
 *         callbackURL: 'https://www.example.net/auth/eHealth/callback'
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
  options.authorizationURL = options.authorizationURL || 'https://launcher.healthesignature.com/oauth2/authorize';
  options.tokenURL = options.tokenURL || 'https://launcher.healthesignature.com/oauth2/token';
  options.userURL = options.userURL || 'https://launcher.healthesignature.com/oauth2/authorization';
  OAuth2Strategy.call(this, options, verify);
  this.name = 'eHealth';
  this.userURL = options.userURL
}

/**
 * Inherit from `OAuth2Strategy`.
 */
util.inherits(Strategy, OAuth2Strategy);


/**
 * Retrieve user profile from eHealth.
 *
 * This function constructs a normalized profile, with the following properties:
 *
 *   - `provider`         always set to `eHealth`
 *   - `id`
 *   - `username`
 *   - `displayName`
 *
 * @param {String} accessToken
 * @param {Function} done
 * @api protected
 */
Strategy.prototype.userProfile = function(accessToken, done) {
  this._oauth2.get(this.userURL, accessToken, function (err, body, res) {
    if (err) { return done(err); }
    
    try {
      var json = JSON.parse(body);
      
      var profile = { provider: 'eHealth' };
      profile.id = json.user_id;
      profile.email = json.email_address
      profile.displayName = json.first_name + ' ' + json.last_name;
      profile.name = { familyName: json.last_name,
                       givenName: json.first_name };
      profile.attrbutes = json.attrbutes
      
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
