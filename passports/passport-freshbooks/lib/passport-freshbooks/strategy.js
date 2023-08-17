/**
 * Module dependencies.
 */
var util = require('util')
  , url = require('url')
  , querystring = require('querystring')
  , OAuthStrategy = require('passport-oauth').OAuthStrategy
  , InternalOAuthError = require('passport-oauth').InternalOAuthError;

/**
 * `Strategy` constructor.
 *
 * The authentication strategy authenticates requests by delegating to
 * Freshbooks using the OAuth protocol.
 *
 * Applications must supply a `verify` callback which accepts a `token`,
 * `tokenSecret` and service-specific `profile`, and then calls the `done`
 * callback supplying a `user`, which should be set to `false` if the
 * credentials are not valid.  If an exception occured, `err` should be set.
 *
 * Options:
 *   - `consumerKey`     identifies client
 *   - `consumerSecret`  secret used to establish ownership of the consumer key
 *   - `callbackURL`     URL to which we will redirect the user after obtaining authorization
 *
 * Examples:
 *
 *     passport.use(new FreshbooksStrategy({
 *         consumerKey: 'example',
 *         consumerSecret: 'shhh-its-a-secret'
 *         callbackURL: 'https://www.example.net/auth/freshbooks/callback'
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
  options.requestTokenURL = 'https://' + options.subdomain + '.freshbooks.com/oauth/oauth_request.php';
  options.accessTokenURL = 'https://' + options.subdomain + '.freshbooks.com/oauth/oauth_access.php';
  options.userAuthorizationURL = 'https://' + options.subdomain + '.freshbooks.com/oauth/oauth_authorize.php';
  options.signatureMethod = "PLAINTEXT";
  options.sessionKey = options.sessionKey || 'oauth:freshbooks';

  this.options = options; // CRUFT?

  OAuthStrategy.call(this, options, verify);
  this.name = 'freshbooks';
  this._profileFields = options.profileFields || null;
}

/**
 * Inherit from `OAuthStrategy`.
 */
util.inherits(Strategy, OAuthStrategy);

/**
 * Authenticate request by delegating to Freshbooks using OAuth.
 *
 * @param {Object} req
 * @api protected
 */
Strategy.prototype.authenticate = function(req, options) {
  // When a user denies authorization, they are presented with a
  // link to return to the application in the following format:
  //
  //     http://www.example.com/auth/linkedin/callback?oauth_problem=user_refused
  //
  // Following the link back to the application is interpreted as an
  // authentication failure.
  if (req.query && req.query.oauth_problem) {
    return this.fail();
  }
  
  // Call the base class for standard OAuth authentication.
  OAuthStrategy.prototype.authenticate.call(this, req, options);
}

/**
 * Retrieve user profile.
 *
 * This function constructs a normalized profile, with the following properties:
 *
 *   - `id`
 *   - `displayName`
 *   - `name.familyName`
 *   - `name.givenName`
 *   - `email` = [ one-email ]
 *
 * @param {String} token
 * @param {String} tokenSecret
 * @param {Object} params
 * @param {Function} done
 * @api protected
 */
Strategy.prototype.userProfile = function(token, tokenSecret, params, done) {
  /**
   * Ok, we can get the user's profile from here:
   *  http://developers.freshbooks.com/docs/staff/#staff.current
   *    <!--?xml version="1.0" encoding="utf-8"?-->
   *    <request method="staff.current"></request>
   *
   * The technique is to use the OAuth tokens to make these XML requests
   *
   * The profile data is:
   *  - added to standard fields: http://passportjs.org/guide/profile/
   *  - saves as xml: profile._xml
   *  - saved as json: profile._json
   *  - parsed to an object: profile._obj
   */
  var url = "https://" + this.options.subdomain + ".freshbooks.com/api/2.1/xml-in";
  var post_body = "<!--?xml version=\"1.0\" encoding=\"utf-8\"?--><request method=\"staff.current\"></request>";
  var post_content_type = "application/xml";

  // This is how to use Freshbooks API with Passport OAuth setting up request
  this._oauth.post(url, token, tokenSecret, post_body, post_content_type, function (err, body, res) {
    if (err) { return done(new InternalOAuthError('failed to fetch user profile', err)); }
    
    try {
      var parser = require('xml2json');
      var json = parser.toJson(body); //returns a string containing the JSON structure by default
      var obj = JSON.parse(json);  // SECURITY trust Freshbooks to not send toxic json. FIXME?

      var profile = { provider: 'freshbooks' };

      profile.id = obj.response.staff.staff_id;
      profile.displayName = obj.response.staff.first_name + ' ' + obj.response.staff.last_name;
      profile.name = { familyName: obj.response.staff.last_name,
                       givenName: obj.response.staff.first_name };
      if (obj.response.staff.email) { profile.emails = [{ value: obj.response.staff.email }]; }
      profile._object = obj;
      profile._json = json;
      profile._raw = body;

      done(null, profile);
    } catch(e) {
      done(e);
    }
  });
}

/**
 * Return extra parameters to be included in the request token
 * request.
 *
 * @param {Object} options
 * @return {Object}
 * @api protected
 */
Strategy.prototype.requestTokenParams = function(options) {
  return options;
}

/**
 * Expose `Strategy`.
 */
module.exports = Strategy;
