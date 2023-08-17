/**
 * Module dependencies.
 */
var util = require('util')
  , OAuth2Strategy = require('passport-oauth').OAuth2Strategy
  , InternalOAuthError = require('passport-oauth').InternalOAuthError;


/**
 * `Strategy` constructor.
 *
 * The StockTwits authentication strategy authenticates requests by delegating to
 * StockTwits using the OAuth 2.0 protocol.
 *
 * Applications must supply a `verify` callback which accepts an `accessToken`,
 * `refreshToken` and service-specific `profile`, and then calls the `done`
 * callback supplying a `user`, which should be set to `false` if the
 * credentials are not valid.  If an exception occured, `err` should be set.
 *
 * Options:
 *   - `clientID`      your StockTwits application's App ID
 *   - `clientSecret`  your StockTwits application's App Secret
 *   - `callbackURL`   URL to which StockTwits will redirect the user after granting authorization
 *
 * Examples:
 *
 *     passport.use(new StockTwitsStrategy({
 *         clientID: '123-456-789',
 *         clientSecret: 'shhh-its-a-secret'
 *         callbackURL: 'https://www.example.net/auth/stocktwits/callback'
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
  options.authorizationURL = options.authorizationURL || 'https://api.stocktwits.com/api/2/oauth/authorize';
  options.tokenURL = options.tokenURL || 'https://api.stocktwits.com/api/2/oauth/token';
  options.scopeSeparator = options.scopeSeparator || ',';

  OAuth2Strategy.call(this, options, verify);
  this.name = 'stocktwits';
  this._profileURL = options.profileURL || 'https://api.stocktwits.com/api/2/account/verify.json';
}

/**
 * Inherit from `OAuth2Strategy`.
 */
util.inherits(Strategy, OAuth2Strategy);

/**
 * Retrieve user profile from StockTwits.
 *
 * This function constructs a normalized profile, with the following properties:
 *
 *   - `provider`         always set to `stocktwits`
 *   - `_raw`             string representation of the response body
 *   - `_json`            parsed response body
 *   - `...`              all properties from body.user
 *
 * @param {String} accessToken
 * @param {Function} done
 * @api protected
 */
Strategy.prototype.userProfile = function(accessToken, done) {
  var url = this._profileURL;

  this._oauth2.getProtectedResource(url, accessToken, function (err, body, res) {
    if (err) { return done(new InternalOAuthError('failed to fetch user profile', err)); }
    
    try {
      var json = JSON.parse(body);
      var profile = json.user;
      
      profile.provider = 'stocktwits';
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
