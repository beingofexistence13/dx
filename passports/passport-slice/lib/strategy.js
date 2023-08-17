/**
 * Module dependencies.
 */
var util = require('util')
  , OAuth2Strategy = require('passport-oauth2')
  , InternalOAuthError = require('passport-oauth2').InternalOAuthError;


/**
 * `Strategy` constructor.
 *
 * The Slice authentication strategy authenticates requests by delegating to
 * Slice using the OAuth 2.0 protocol.
 *
 * Applications must supply a `verify` callback which accepts an `accessToken`,
 * `refreshToken` and service-specific `profile`, and then calls the `done`
 * callback supplying a `user`, which should be set to `false` if the
 * credentials are not valid.  If an exception occured, `err` should be set.
 *
 * Options:
 *   - `client_id`     Your Slice application's Client ID
 *   - `client_secret` Your Slice application's Client Secret
 *   - `response_type` the expected response type. Currently the only supported value is "code".
 *   - `redirect_uri`  The URL that Slice will redirect back to after authorization is complete.
                       Must be HTTPS, and must match the redirect_uri you have registered with Slice.
 *   - `state`         (optional) an arbitrary string that will returned in the response to your application.
 *        
 *                     (See https://developer.slice.com/docs/authz/oauth2/ for more info)
 *
 * Examples:
 *
 *     passport.use(new SliceStrategy({
 *         clientID: '123-456-789',
 *         clientSecret: 'shhh-its-a-secret'
 *         callbackURL: 'https://www.example.net/auth/slice/callback',
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
  options.authorizationURL = options.authorizationURL || 'https://api.slice.com/oauth/authorize';
  options.tokenURL = options.tokenURL || 'https://api.slice.com/oauth/token';
  options.scopeSeparator = options.scopeSeparator || ',';
  options.customHeaders = options.customHeaders || {};

  OAuth2Strategy.call(this, options, verify);
  this.name = 'slice';
  this._userProfileURL = options.userProfileURL || 'https://api.slice.com/api/v1/users/self';
  this._oauth2.useAuthorizationHeaderforGET(true);
}

/**
 * Inherit from `OAuth2Strategy`.
 */
util.inherits(Strategy, OAuth2Strategy);


/**
 * Retrieve user profile from Slice.
 *
 * This function constructs a normalized profile, with the following properties:
 *
 *   - `provider`       always set to `slice`
 *   - `userName`       the name that was used to identify this user when it was created
                        this field is only set for partners using server-side authorization,
                        in which case it must be unique within the context of a specific partner
 *   - `firstName`      the first name of the user, if available
 *   - `lastName`       the last name of the user, if available
 *   - `userEmail`      the primary email address used to register this user
 *
 * See more information at https://developer.slice.com/docs/resources
 *
 * @param {String} accessToken
 * @param {Function} done
 * @api protected
 */
Strategy.prototype.userProfile = function(accessToken, done) {
  this._oauth2.get(this._userProfileURL, accessToken, function (err, body, res) {
    var json;
    
    if (err) {
      return done(new InternalOAuthError('Failed to fetch user profile', err));
    }
    
    try {
      json = JSON.parse(body);
    } catch (ex) {
      return done(new Error('Failed to parse user profile'));
    }
    
    var profile = {};

    if ('string' == typeof json) {
      json = JSON.parse(json);
    }
    if (json.result.userName) {
      profile.userName = json.result.userName;
    }
    if (json.result.firstName) {
      profile.firstName = json.result.firstName;
    }
    if (json.result.lastName) {
      profile.lastName = json.result.lastName;
    }
    profile.userEmail = json.result.userEmail;
 
    profile.provider  = 'slice';
    profile._raw = body;
    profile._json = json;

    done(null, profile);
  });
}


/**
 * Expose `Strategy`.
 */
module.exports = Strategy;
