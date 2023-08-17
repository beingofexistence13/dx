/**
 * Module dependencies.
 */
var xml2js = require('xml2js')
  , querystring = require('querystring')
  , util = require('util')
  , OAuthStrategy = require('passport-oauth').OAuthStrategy
  , InternalOAuthError = require('passport-oauth').InternalOAuthError;


/**
 * `Strategy` constructor.
 *
 * The Ohloh authentication strategy authenticates requests by delegating to
 * Ohloh using the OAuth protocol.
 *
 * Applications must supply a `verify` callback which accepts a `token`,
 * `tokenSecret` and service-specific `profile`, and then calls the `done`
 * callback supplying a `user`, which should be set to `false` if the
 * credentials are not valid.  If an exception occured, `err` should be set.
 *
 * Options:
 *   - `consumerKey`     identifies client to Ohloh
 *   - `consumerSecret`  secret used to establish ownership of the consumer key
 *   - `callbackURL`     URL to which Ohloh will redirect the user after obtaining authorization
 *
 * Examples:
 *
 *     passport.use(new OhlohStrategy({
 *         consumerKey: '123-456-789',
 *         consumerSecret: 'shhh-its-a-secret'
 *         callbackURL: 'https://www.example.net/auth/ohloh/callback'
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
  options.requestTokenURL = options.requestTokenURL || 'http://www.ohloh.net/oauth/request_token';
  options.accessTokenURL = options.accessTokenURL || 'http://www.ohloh.net/oauth/access_token';
  var params = { oauth_callback: options.callbackURL };
  options.userAuthorizationURL = options.userAuthorizationURL || 'http://www.ohloh.net/oauth/authorize?' + querystring.stringify(params);
  options.sessionKey = options.sessionKey || 'oauth:ohloh';

  OAuthStrategy.call(this, options, verify);
  this.name = 'ohloh';
}

/**
 * Inherit from `OAuthStrategy`.
 */
util.inherits(Strategy, OAuthStrategy);

/**
 * Retrieve user profile from Ohloh.
 *
 * This function constructs a normalized profile, with the following properties:
 *
 *   - `id`
 *   - `displayName`
 *
 * @param {String} token
 * @param {String} tokenSecret
 * @param {Object} params
 * @param {Function} done
 * @api protected
 */
Strategy.prototype.userProfile = function(token, tokenSecret, params, done) {
  this._oauth.get('http://www.ohloh.net/accounts/me.xml', token, tokenSecret, function (err, body, res) {
    if (err) { return done(new InternalOAuthError('failed to fetch user profile', err)); }
    
    var parser = new xml2js.Parser();
    parser.parseString(body, function (err, xml) {
      if (err) { return done(err) };

      var profile = { provider: 'ohloh' };
      profile.id = xml.result.account.id;
      profile.displayName = xml.result.account.name;
      
      profile._raw = body;
      profile._xml2json =
      profile._xml2js = xml;

      done(null, profile);
    });
  });
}


/**
 * Expose `Strategy`.
 */
module.exports = Strategy;
