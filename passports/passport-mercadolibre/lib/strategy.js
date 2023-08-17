/**
 * Module dependencies.
 */
var util = require('util')
  , OAuth2Strategy = require('passport-oauth').OAuth2Strategy
  , https = require('https');


/**
 * `Strategy` constructor.
 *
 * The Mercadolibre authentication strategy authenticates requests by delegating
 * to Mercadolibre using the OAuth 2.0 protocol.
 *
 * Applications must supply a `verify` callback which accepts an `accessToken`,
 * `refreshToken` and service-specific `profile`, and then calls the `done`
 * callback supplying a `user`, which should be set to `false` if the
 * credentials are not valid.  If an exception occured, `err` should be set.
 *
 * Options:
 *   - `clientID`      your Mercadolibre application's client id
 *   - `clientSecret`  your Mercadolibre application's client secret
 *   - `callbackURL`   URL to which Mercadolibre will redirect the user after granting authorization
 *
 * Examples:
 *
 *     passport.use(new MercadolibreStrategy({
 *         clientID: '2288989987133514',
 *         clientSecret: 'shhh-its-a-secret'
 *         callbackURL: 'https://www.example.net/auth/mercadolibre/callback'
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
  options.authorizationURL = options.authorizationURL || 'https://auth.mercadolibre.com.ar/authorization';
  options.tokenURL = options.tokenURL || 'https://api.mercadolibre.com/oauth/token';
  this.profileUrl = options.profileUrl || "https://api.mercadolibre.com/users/me";

  OAuth2Strategy.call(this, options, verify);
  this.name = 'mercadolibre';
}

/**
 * Inherit from `OAuth2Strategy`.
 */
util.inherits(Strategy, OAuth2Strategy);

/**
 * Retrieve user profile from Mercadolibre.
 *
 * This function constructs a normalized profile.
 *
 * @param {String} accessToken
 * @param {Function} done
 * @api protected
 */
Strategy.prototype.userProfile = function(accessToken, done) {

  this._oauth2.get(this.profileUrl, accessToken, function (err, body, res) {

    if (err) { return done(err); };

    try {
      var json = JSON.parse(body);
      //console.log(json);
      var profile = { provider: 'MercadoLibre' };
      profile.id = json.id;
      profile.nickname = json.nickname;
      profile.first_name = json.first_name;
      profile.last_name = json.last_name;
      profile.email = json.email;
      profile.accessToken = accessToken;
      profile._raw = body;
      profile._json = json;

      done(null, profile);
    } catch(e) {
      done(e);
    };
  });
}

/**
 * Expose `Strategy`.
 */
module.exports = Strategy;