/**
 * Module dependencies.
 */
var async = require('async')
  , parse = require('./profile').parse
  , util = require('util')
  , XML = require('xtraverse')
  , OAuthStrategy = require('passport-oauth1')
  , InternalOAuthError = require('passport-oauth1').InternalOAuthError;


/**
 * `Strategy` constructor.
 *
 * The Identity UA authentication strategy authenticates requests by delegating to
 * IdP using the OAuth protocol.
 *
 * Applications must supply a `verify` callback which accepts a `token`,
 * `tokenSecret` and service-specific `profile`, and then calls the `done`
 * callback supplying a `user`, which should be set to `false` if the
 * credentials are not valid.  If an exception occured, `err` should be set.
 *
 * Options:
 *   - `consumerKey`     identifies client
 *   - `consumerSecret`  secret used to establish ownership of the consumer key
 *   - `callbackURL`     URL to which will redirect the user after obtaining authorization
 *
 * Examples:
 *
 *     passport.use(new IdentityUaStrategy({
 *         consumerKey: '123-456-789',
 *         consumerSecret: 'shhh-its-a-secret'
 *         callbackURL: 'https://www.example.net/auth/callback'
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
  options.requestTokenURL = options.requestTokenURL || 'http://identity.ua.pt/oauth/request_token';
  options.accessTokenURL = options.accessTokenURL || 'http://identity.ua.pt/oauth/access_token';
  options.userAuthorizationURL = options.userAuthorizationURL || 'http://identity.ua.pt/oauth/authorize';

  
  OAuthStrategy.call(this, options, verify);
  this.name = 'identityua';
  this._userProfileURL = options.userProfileURL || 'http://identity.ua.pt/oauth/get_data';
  this._scope = options.scope || [];
}

/**
 * Inherit from `OAuthStrategy`.
 */
util.inherits(Strategy, OAuthStrategy);


/**
 * Authenticate request by delegating to IdP using OAuth.
 *
 * @param {Object} req
 * @api protected
 */
Strategy.prototype.authenticate = function(req, options) {
  // When a user denies authorization, they are presented with a link
  // to return to the application in the following format (where xxx is the
  // value of the request token):
  //
  //     http://www.example.com/auth/callback?denied=xxx
  //
  // Following the link back to the application is interpreted as an
  // authentication failure.
  console.log('iam-debug: authenticate query ', req.query);
  console.log('iam-debug: authenticate denied ', req.query.denied);
  console.log('iam-debug: authenticate options ', options);
  if (req.query && req.query.denied) {
    return this.fail();
  }
  
  // Call the base class for standard OAuth authentication.
  OAuthStrategy.prototype.authenticate.call(this, req, options);
};

/**
 * Retrieve user profile from IdentityUA.
 *
 * This function constructs a normalized profile.
 *
 * @param {String} token
 * @param {String} tokenSecret
 * @param {Object} params
 * @param {Function} done
 * @api protected
 */
Strategy.prototype.userProfile = function(token, tokenSecret, params, done) {
  var json, scope = this._scope;
  
  if (scope.length === 0) {
    scope = 'uu';
    this._oauth.get(this._userProfileURL + '?format=json&scope=' + scope, token, tokenSecret, function (err, body, res) {
      if (err) {
        return done(new InternalOAuthError('Failed to fetch user profile', err));
      }
      
      try {
        json = JSON.parse(body);
      } catch (ex) {
        return done(new Error('Failed to parse user profile'));
      }
      
      var profile = parse(json);
      profile.provider = 'identityua';
      profile._raw = body;
      profile._json = json;
    
      done(null, profile);
    });
  }
  else {
    var _strategy = this;
    var fn = function(param, callback) {
      console.log(' [ fn ] param === ', param);
      _strategy._oauth.get(this._userProfileURL + '?format=json&scope=' + param, token, tokenSecret, function (err, body, res) {
        console.log('\n\n#### PARAM: ', param);
        console.error('error: \n', err);
        console.log('body: \n', body);
        console.log();
        if (err) {
          console.error(err);
          return callback(err);
        }
        
        try {
          json = JSON.parse(body);
          console.log('_strategy.get(...) => ', json);
          callback(null, json);
        }
        catch (ex) {
          var _err = new Error('Failed to parse user profile');
          console.error(_err);
          callback(_err);
        }
      });
    };
    var resolve = function(err, results) {
      console.log('\n\n[ async ] results: ', results);
      done(null, results);
    };
    async.map(scope, fn, resolve);
  }
};

/**
 * Parse error response from OAuth endpoint.
 *
 * @param {String} body
 * @param {Number} status
 * @return {Error}
 * @api protected
 */
Strategy.prototype.parseErrorResponse = function(body, status) {
  var xml = XML(body)
    , msg = xml.children('error').t();
  return new Error(msg || body);
};


/**
 * Expose `Strategy`.
 */
module.exports = Strategy;
