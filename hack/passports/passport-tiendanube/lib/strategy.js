/**
 * Module dependencies.
 */
 var OAuth2Strategy, Strategy, https, util;

util = require('util');
OAuth2Strategy = require('passport-oauth2').Strategy;
https = require('https');

/**
 * `Strategy` constructor.
 *
 * The TiendaNube authentication strategy authenticates requests by delegating
 * to TiendaNube using the OAuth 2.0 protocol.
 *
 * Applications must supply a `verify` callback which accepts an `accessToken`,
 * `refreshToken` and service-specific `profile`, and then calls the `done`
 * callback supplying a `user`, which should be set to `false` if the
 * credentials are not valid.  If an exception occured, `err` should be set.
 *
 * Options:
 *   - `clientID`      your TiendaNube application's client id
 *   - `clientSecret`  your TiendaNube application's client secret
 *
 * Examples:
 *
 *     passport.use(new TiendaNubeStrategy({
 *         clientID: 123,
 *         clientSecret: "241549680a97a527a7f79451cdb70195",
 *         customHeaders: {'User-Agent': 'AgentName (agent@email.com)'}
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
Strategy = function(options, verify) {
  var callback, clientID;
  clientID = options.clientID;
  options.authorizationURL = options.authorizationURL || 'https://www.tiendanube.com/apps/' + clientID + '/authorize';
  options.tokenURL = options.tokenURL || 'https://www.tiendanube.com/apps/authorize/token';
  options.customHeaders = options.customHeaders || {};
  options.customHeaders['User-Agent'] = options.userAgent;
  callback = function(accessToken, refreshToken, result, _, done) {
    this.getStore(accessToken, result.user_id, function(err, profile) {
      if (err) {
        return done(err);
      }
      verify(accessToken, refreshToken, profile, done);
    });
  };
  OAuth2Strategy.call(this, options, callback);
  this.name = 'tiendanube';
};

/**
 * Inherit from `OAuthStrategy`.
 */
 util.inherits(Strategy, OAuth2Strategy);

/**
 * Retrieve user profile from TiendaNube.
 *
 * This function constructs a normalized profile.
 *
 * @param {String} accessToken
 * @param {Function} done
 * @api protected
 */
Strategy.prototype.getStore = function(accessToken, storeId, done) {
  var profileUrl;
  profileUrl = 'https://api.tiendanube.com/v1/' + storeId + '/store';
  headers = {
    'Authentication': 'bearer ' + accessToken
  };
  this._oauth2._request("GET", profileUrl, headers, "", accessToken, function(err, body, res) {
    var e, json, profile;
    if (err) {
      return done(err);
    }
    try {
      json = JSON.parse(body);
      profile = {
        provider: 'TiendaNube'
      };
      profile.id = json.id;
      profile.name = json.name[json.main_language];
      profile.email = json.email;
      profile.original_domain = json.original_domain;
      profile.main_currency = json.main_currency;
      profile.accessToken = accessToken;
      done(null, profile);
    } catch (_error) {
      e = _error;
      done(e);
    }
  });
};

/**
 * Expose `Strategy`.
 */
module.exports = Strategy;
