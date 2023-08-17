var util = require('util')
  , OAuth2Strategy = require('passport-oauth2').Strategy
  , InternalOAuthError = require('passport-oauth2').InternalOAuthError;

/**
 * `Strategy` constructor.
 *
 * The Square authentication strategy authenticates requests by delegating to
 * Square using the OAuth 2.0 protocol.
 *
 * Applications must supply a `verify` callback which accepts an `accessToken`,
 * `refreshToken` and service-specific `profile`, and then calls the `done`
 * callback supplying a `user`, which should be set to `false` if the
 * credentials are not valid.  If an exception occured, `err` should be set.
 *
 * Options:
 *   - `clientId`      	your Square application's client id
 *   - `clientSecret`  	your Square application's client secret
 *   - `callbackURL`   	URL to which Square will redirect the user after granting authorization (optional of set in your Square Application
 *   - `grant_type`		Must be authorization_code
 *
 * Examples:
 *
 *     passport.use(new SquareStrategy({
 *         client_id: '123-456-789',
 *         client_secret: 'shhh-its-a-secret'
 *         redirect_uri: 'https://www.example.net/auth/Square/callback'
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
  // http://developers.Square.com/oauth/
  options.authorizationURL = options.authorizationURL || 'https://connect.squareup.com/oauth2/authorize';
  options.tokenURL = options.tokenURL || 'https://connect.squareup.com/oauth2/token';
  options.scope = options.scope || 'MERCHANT_PROFILE_READ, PAYMENTS_READ,PAYMENTS_WRITE,SETTLEMENTS_READ,ITEMS_READ,ITEMS_WRITE,ORDERS_READ,ORDERS_WRITE';
  options.scopeSeparator = options.scopeSeparator || ',';
  options.grant_type = options.grant_type || 'authorization_code';

  OAuth2Strategy.call(this, options, verify);
  this.name = 'square';
}

/**
 * Inherit from `OAuth2Strategy`.
 */
util.inherits(Strategy, OAuth2Strategy);


/**
 * Retrieve user profile from Square.
 *
 * This function constructs a normalized profile, with the following properties:
 *
 *   - `provider`         always set to `Square`
 *   - `id`
 *   - `username`
 *   - `displayName`
 *
 * @param {String} accessToken
 * @param {Function} done
 * @api protected
 */
Strategy.prototype.userProfile = function(accessToken, done) {
  var authorization = 'Bearer ' + accessToken;
  var headers = {
    'Authorization' : authorization
  };
  this._oauth2._request('GET', 'https://connect.squareup.com/v1/me', headers, '', '', function(err, body, res) {
    if (err) { return done(new InternalOAuthError('failed to fetch user profile', err)); }

    try {

      var squareProfile = JSON.parse(body);

      var profile = {
        provider: 'square',
        id: squareProfile.id,
        name: squareProfile.name,
        email : squareProfile.email,
        business_name: squareProfile.business_name,
        _squareProfile: squareProfile
      };

      done(null, profile);
    } catch (e) {
      done(e);
    }
  });
};

/**
 * Expose `Strategy`.
 */
module.exports = Strategy;
