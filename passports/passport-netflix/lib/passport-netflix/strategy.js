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
 * The Netflix authentication strategy authenticates requests by delegating to
 * Netflix using the OAuth protocol.
 *
 * Applications must supply a `verify` callback which accepts a `token`,
 * `tokenSecret` and service-specific `profile`, and then calls the `done`
 * callback supplying a `user`, which should be set to `false` if the
 * credentials are not valid.  If an exception occured, `err` should be set.
 *
 * Options:
 *   - `consumerKey`     identifies client to Netflix
 *   - `consumerSecret`  secret used to establish ownership of the consumer key
 *   - `callbackURL`     URL to which Netflix will redirect the user after obtaining authorization
 *
 * Examples:
 *
 *     passport.use(new NetflixStrategy({
 *         consumerKey: '123-456-789',
 *         consumerSecret: 'shhh-its-a-secret'
 *         callbackURL: 'https://www.example.net/auth/netflix/callback'
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
  options.requestTokenURL = options.requestTokenURL || 'http://api.netflix.com/oauth/request_token';
  options.accessTokenURL = options.accessTokenURL || 'http://api.netflix.com/oauth/access_token';
  var params = { oauth_consumer_key: options.consumerKey };
  options.userAuthorizationURL = options.userAuthorizationURL || 'https://api-user.netflix.com/oauth/login?' + querystring.stringify(params);
  options.sessionKey = options.sessionKey || 'oauth:netflix';

  OAuthStrategy.call(this, options, verify);
  this.name = 'netflix';
}

/**
 * Inherit from `OAuthStrategy`.
 */
util.inherits(Strategy, OAuthStrategy);

/**
 * Retrieve user profile from Netflix.
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
  // TODO: As an optimization, if only the user ID is needed, as opposed to the
  //       full profile, the user_id in the query parameters can be used and an
  //       extra network request can be avoided.  For example:
  //
  //           profile.id = params.user_id
  
  this._oauth.get('http://api.netflix.com/users/' + params.user_id, token, tokenSecret, function (err, body, res) {
    if (err) { return done(new InternalOAuthError('failed to fetch user profile', err)); }
    
    var parser = new xml2js.Parser();
    parser.parseString(body, function (err, xml) {
      if (err) { return done(err) };
      
      var profile = { provider: 'netflix' };
      profile.id = xml.user_id;
      profile.displayName = xml.first_name + ' ' + xml.last_name;
      profile.name = { familyName: xml.last_name,
                       givenName: xml.first_name };
                       
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
