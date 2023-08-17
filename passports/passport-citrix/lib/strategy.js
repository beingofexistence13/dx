/**
 * Module dependencies.
 */
var util = require('util')
  , OAuth2Strategy = require('passport-oauth2')
  , InternalOAuthError = require('passport-oauth2').InternalOAuthError
  , querystring = require('querystring');

/**
 * `Strategy` constructor.
 *
 * The Citrix authentication strategy authenticates requests by delegating to
 * Citrix using the OAuth 2.0 protocol.
 *
 * Applications must supply a `verify` callback which accepts an `accessToken`,
 * `refreshToken` and service-specific `profile`, and then calls the `done`
 * callback supplying a `user`, which should be set to `false` if the
 * credentials are not valid.  If an exception occured, `err` should be set.
 *
 * Options:
 *   - `clientID`      your Citrix application's Client ID
 *   - `clientSecret`  your Citrix application's Client Secret
 *   - `callbackURL`   URL to which Citrix will redirect the user after granting authorization
 *
 * Examples:
 *
 *     passport.use(new CitrixStrategy({
 *         clientID: '123-456-789',
 *         clientSecret: 'shhh-its-a-secret'
 *         callbackURL: 'https://www.example.net/auth/citrix/callback'
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
  options.name = options.name || 'citrix';
  options.authorizationURL = options.authorizationURL || 'https://api.citrixonline.com/oauth/authorize';
  options.tokenURL = options.tokenURL || 'https://api.citrixonline.com/oauth/access_token';
  options.customHeaders = options.customHeaders || {};

  OAuth2Strategy.call(this, options, verify);
  this.name = options.name;
  this._oauth2.useAuthorizationHeaderforGET(true);

  this._oauth2.getOAuthAccessToken = function(code, params, callback) {
    var params= params || {};
    params['client_id'] = this._clientId;
    params['client_secret'] = this._clientSecret;
    var codeParam = (params.grant_type === 'refresh_token') ? 'refresh_token' : 'code';
    params[codeParam]= code;

    var post_data= querystring.stringify( params );

    this._request("GET", this._getAccessTokenUrl() + '?' + post_data, null, null, null, function(error, data, response) {
      if( error )  callback(error);
      else {
        var results;
        try {
          results= JSON.parse( data );
        }
        catch(e) {
          results= querystring.parse( data );
        }

        var access_token= results["access_token"];
        var refresh_token= results["refresh_token"];
        delete results["refresh_token"];
        callback(null, access_token, refresh_token, results); // callback results =-=
      }
    });
  }
}

/**
 * Inherit from `OAuth2Strategy`.
 */
util.inherits(Strategy, OAuth2Strategy);

/**
 *
 * @param {String} accessToken
 * @param {Function} done
 * @api protected
 */
Strategy.prototype.userProfile = function(accessToken, done) {
  this._oauth2.get("https://api.citrixonline.com/identity/v1/Users/me", accessToken, function(error, data, response) {
    if( error )  callback(error);
    else {
      var results;
      try {
        results= JSON.parse( data );
      }
      catch(e) {
        results= querystring.parse( data );
      }
      done(null, results)
    }
  });
}

module.exports = Strategy;
