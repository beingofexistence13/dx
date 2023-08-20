/**
 * Module dependencies.
 */
var util = require('util')
  , OAuthStrategy = require('passport-oauth').OAuthStrategy
  , InternalOAuthError = require('passport-oauth').InternalOAuthError;


/**
 * `Strategy` constructor.
 *
 * The Odesk authentication strategy authenticates requests by delegating to
 * Odesk using the OAuth protocol.
 *
 * Applications must supply a `verify` callback which accepts a `token`,
 * `tokenSecret` and service-specific `profile`, and then calls the `done`
 * callback supplying a `user`, which should be set to `false` if the
 * credentials are not valid.  If an exception occured, `err` should be set.
 *
 * Options:
 *   - `consumerKey`     identifies client to Odesk
 *   - `consumerSecret`  secret used to establish ownership of the consumer key
 *   - `callbackURL`     URL to which Odesk will redirect the user after obtaining authorization
 *
 * Examples:
 *
 *     passport.use(new OdeskStrategy({
 *         consumerKey: '123-456-789',
 *         consumerSecret: 'shhh-its-a-secret'
 *         callbackURL: 'https://www.example.net/auth/odesk/callback'
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
  options.requestTokenURL = options.requestTokenURL || 'https://www.odesk.com/api/auth/v1/oauth/token/request';
  options.accessTokenURL = options.accessTokenURL || 'https://www.odesk.com/api/auth/v1/oauth/token/access';
  options.userAuthorizationURL = options.userAuthorizationURL || 'https://www.odesk.com/services/api/auth';
  options.sessionKey = options.sessionKey || 'oauth:twitter'; //strange, but without it works we have errors - Anatolij

  OAuthStrategy.call(this, options, verify);
  this.name = 'odesk';
  
  this._skipExtendedUserProfile = (options.skipExtendedUserProfile === undefined) ? false : options.skipExtendedUserProfile;
}

/**
 * Inherit from `OAuthStrategy`.
 */
util.inherits(Strategy, OAuthStrategy);


/**
 * Authenticate request by delegating to Odesk using OAuth.
 *
 * @param {Object} req
 * @api protected
 */
Strategy.prototype.authenticate = function(req, options) {
  // When a user denies authorization on Odesk, they are presented with a link
  // to return to the application in the following format (where xxx is the
  // value of the request token):
  //
  //     http://www.example.com/auth/Odesk/callback?denied=xxx
  //
  // Following the link back to the application is interpreted as an
  // authentication failure.
  if (req.query && req.query.denied) {
    return this.fail();
  }
  
  // Call the base class for standard OAuth authentication.
  OAuthStrategy.prototype.authenticate.call(this, req, options);
}

/**
 * Retrieve user profile from Odesk.
 *
 * This function constructs a normalized profile, with the following properties:
 *
 *   - `id`        (equivalent to `user_id`)
 *   - `displayName`  (equivalent to `name`)
 *
 * @param {String} token
 * @param {String} tokenSecret
 * @param {Object} params
 * @param {Function} done
 * @api protected
 */
Strategy.prototype.userProfile = function(token, tokenSecret, params, done) {
  if (!this._skipExtendedUserProfile) {
    this._oauth.get(
        'https://www.odesk.com/api/auth/v1/info.json',
        token, tokenSecret, function (err, body, res) {
      if (err) { return done(new InternalOAuthError('failed to fetch user profile', err)); }
      
      try {
        var data = JSON.parse(body);
          var profile = {
              provider: 'odesk',
              "id" :  data.auth_user.uid,
              "name": {"familyName": data.auth_user.last_name, "givenName": data.auth_user.first_name},
//              accessToken : token, //i think we don't need to expose this here -- Anatolij
//              accessTokenSecret : tokenSecret,
              ref : data.info.ref,
              "displayName" : data.auth_user.first_name + " " + data.auth_user.last_name,
              "img" : data.info.portrait_50_img,
              "country" : data.info.location.country,
              "profile" : data.info.profile_url,
              "emails":[{"value":data.auth_user.mail,type:"work"}],
              "timezone":data.auth_user.timezone,
              "timezone_offset":data.auth_user.timezone_offset,
              "location":data.info.location,
              "company_url":data.info.company_url
          };
        done(null, profile);
      } catch(e) {
        done(e);
      }
    });
  } else {
    var profile = { provider: 'odesk' };
    profile.id = params.id;
    profile.displayName = params.displayName;
    done(null, profile);
  }
}

/**
 * Expose `Strategy`.
 */
module.exports = Strategy;
