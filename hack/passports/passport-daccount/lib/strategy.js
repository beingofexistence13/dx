'use strict';

var OAuth2Strategy = require('passport-oauth2')
  , util = require('util')
  , crypto = require('crypto')
  , assert = require('assert')
  , InternalOAuthError = require('passport-oauth2').InternalOAuthError;

/**
 * `Strategy` constructor.
 *
 * The Docomo dAccount authentication strategy authenticates requests by delegating to
 * Docomo dAccount using the OAuth 2.0 protocol.
 *
 * Applications must supply a `verify` callback which accepts an `accessToken`,
 * `refreshToken` and service-specific `profile`, and then calls the `cb`
 * callback supplying a `user`, which should be set to `false` if the
 * credentials are not valid.  If an exception occured, `err` should be set.
 *
 * Options:
 *   - `clientID`      your Docomo dAccount application's App ID
 *   - `clientSecret`  your Docomo dAccount application's App Secret
 *   - `callbackURL`   URL to which Docomo dAccount will redirect the user after granting authorization
 *
 * Examples:
 *
 *     passport.use(new DAccountStrategy({
 *         clientID: '123-456-789',
 *         clientSecret: 'shhh-its-a-secret'
 *         callbackURL: 'https://www.example.net/auth/daccount/callback'
 *       },
 *       function(accessToken, refreshToken, profile, cb) {
 *         User.findOrCreate(..., function (err, user) {
 *           cb(err, user);
 *         });
 *       }
 *     ));
 *
 * @constructor
 * @param {object} options
 * @param {function} verify
 * @access public
 */
function Strategy(options, verify) {
  options = options || {};
  options.authorizationURL = options.authorizationURL || 'https://id.smt.docomo.ne.jp/cgi8/oidc/authorize';
  options.tokenURL = options.tokenURL || 'https://conf.uw.docomo.ne.jp/common/token';
  options.scope = options.scope || 'openid';

  options.customHeaders = options.customHeaders || {};

  if (!options.customHeaders['Authorization']) {
    options.customHeaders['Authorization'] = 'Basic ' + new Buffer(options.clientID + ":" + options.clientSecret).toString('base64');
  }

  OAuth2Strategy.call(this, options, verify);

  this.name = 'daccount';
  this._profileURL = options.profileURL || 'https://conf.uw.docomo.ne.jp/common/userinfo';
  this._generateState = !!(options.store || options.state);
  // The defaults that follow ensure this works in most authentication flows.
  this._params = {
    authif: options.authif || '1',
    idauth: options.idauth || '1'
  };
}

// Inherit from `OAuth2Strategy`.
util.inherits(Strategy, OAuth2Strategy);

/**
 * Return mandatory parameters to be included in the authorization request.
 *
 * Options:
 *  - `nonce`  String value used to associate a Client session with an ID Token, and to mitigate replay attacks.
 *  - `state`  Opaque value used to maintain state between the request and the callback.
 *
 * @param {object} options
 * @return {object}
 * @access protected
 */
Strategy.prototype.authorizationParams = function (options) {
  var params = Object.assign({
    nonce: options.nonce || uid(32)
  }, this._params);
  
  if (!this._generateState && !options.state) {
    // ensure state value if a state store and a state value were not specified
    params.state = uid(32);
  }

  if ('state' in options) {
    params.state = options.state;
  }

  return params;
};

/**
 * Retrieve user profile from Docomo dAccount.
 *
 * This function constructs a normalized profile, with the following properties:
 *
 *   - `provider`         always set to `daccount`
 *   - `id`               the user's Docomo dAccount ID
 *
 * @param {string} accessToken
 * @param {function} done
 * @access protected
 */
Strategy.prototype.userProfile = function(accessToken, done) {
  this._oauth2.useAuthorizationHeaderforGET(true);
  this._oauth2.get(this._profileURL, accessToken, function (err, body, res) {
    if (err) { return done(new InternalOAuthError('Failed to fetch user profile', err)); }
    
    try {
      var json = JSON.parse(body);

      var profile = { provider: 'daccount' };

      // json.sub = "https://i.mydocomo.com/id/{user_id}"
      profile.id = json.sub.split('/').pop();
      
      profile._json = json;
      profile._raw = body;
      
      done(null, profile);
    } catch(e) {
      done(e);
    }
  });
};

/**
 * Return a unique identifier with the given `len`.
 *
 *     utils.uid(10);
 *     // => "FDaS435D2z"
 *
 * @param {Number} len
 * @return {String}
 * @access private
 */
function uid(len) {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_';
  const rnd = crypto.randomBytes(len);
  const value = new Array(len);
  const charsLength = chars.length;

  // NOTE: To prevent a bias in the uids generated from this function,
  //       the values taken by each random byte must be distributed
  //       evenly over the character set. To confirm this, we assert
  //       that the length of that set divides the cardinality of the
  //       set of possible values of the byte.
  assert.equal(256 % charsLength, 0);

  for (var i = 0; i < len; i++) {
    value[i] = chars[rnd[i] % charsLength];
  }

  return value.join('');
}

// Expose constructor.
module.exports = Strategy;
