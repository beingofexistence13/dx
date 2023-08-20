/**
 * Module dependencies.
 */
var util = require('util'),
  querystring = require('querystring'),
  OAuth2Strategy = require('passport-oauth').OAuth2Strategy,
  InternalOAuthError = require('passport-oauth').InternalOAuthError;

/**
 * `Strategy` constructor.
 *
 * The PhantAuth authentication strategy authenticates requests by delegating to
 * PhantAuth using the OpenID Connect protocol.
 *
 * Applications must supply a `verify` callback which accepts an `accessToken`,
 * `refreshToken` and service-specific `profile`, and then calls the `done`
 * callback supplying a `user`, which should be set to `false` if the
 * credentials are not valid.  If an exception occured, `err` should be set.
 *
 * Options:
 *   - `clientID`      your PhantAuth application's client id
 *   - `clientSecret`  your PhantAuth application's client secret
 *   - `callbackURL`   URL to which PhantAuth will redirect the user
 *                     after granting authorization
 *   - `scope`         [Optional] An array of OpenID Connect scopes.
 *                     Supported values: "profile", "email", "address", "phone"
 *
 * Examples:
 *
 *     passport.use(new PhantAuthStrategy({
 *         clientID: 'passport-test-app',
 *         clientSecret: '7JLKq6rE'
 *         callbackURL: 'https://www.example.net/auth/phantauth/callback'
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
  options.authorizationURL =
    options.authorizationURL || '	https://phantauth.net/auth/authorize';
  options.tokenURL =
    options.tokenURL || 'https://phantauth.net/auth/token';

  OAuth2Strategy.call(this, options, verify);
  this.name = 'phantauth';
  this._userProfileURL =
    options.userProfileURL || 'https://phantauth.net/auth/userinfo';

  this._oauth2.getOAuthAccessToken = function(code, params, callback) {
    params = params || {};
    var codeParam =
      params.grant_type === 'refresh_token' ? 'refresh_token' : 'code';
    params[codeParam] = code;
    params['client_id'] = this._clientId;
    params['client_secret'] = this._clientSecret;

    var post_data = querystring.stringify(params);
    var post_headers = {
      'Content-Type': 'application/x-www-form-urlencoded'
    };

    this._request(
      'POST',
      this._getAccessTokenUrl(),
      post_headers,
      post_data,
      null,
      function(error, data, response) {
        if (error) callback(error);
        else {
          var results = JSON.parse(data);
          var access_token = results.access_token;
          var refresh_token = results.refresh_token;
          var expires_in = results.expires_in;
          delete results.refresh_token;
          callback(null, access_token, refresh_token, expires_in, results); // callback results =-=
        }
      }
    );
  };
}

/**
 * Inherit from `OAuth2Strategy`.
 */
util.inherits(Strategy, OAuth2Strategy);

/**
 * Return extra PhantAuth-specific parameters to be included in the authorization
 * request.
 *
 * Options:
 *
 * @param {Object} options
 * @return {Object}
 * @api protected
 */
Strategy.prototype.authorizationParams = function(options) {
  options = options || {};
  var params = {};

  options.scope = options.scope || ['openid','profile','email','phone','address'];
  if ( ! options.scope.includes('openid')) {
    options.scope.unshift('openid');
  }

  return {scope: options.scope.join(' ')};
};

/**
 * Retrieve user profile from PhantAuth.
 *
 * This function constructs a normalized profile, with the following properties:
 *
 *   - `provider`          always set to `phantauth`
 *   - `id`                the user's PhantAuth sub
 *   - `username`          the user's PhantAuth sub
 *   - `displayName`       the user's full name
 *   - `profileUrl`        the URL of the profile for the user on PhantAuth
 *   - `urls`              the user's profile URL as one element object array (`value`, `type` fields)
 *   - `name`              object with the user's name (`familyName`, `givenName`, `middleName`, `formatted` fields)
 *   - `nickname`          the user's nickname
 *   - `birthday`          the user's birthday
 *   - `gender`            the user's gender: `male`, `female` or `unknown`
 *   - `preferredUsername` the user's preferred username
 *   - `emails`            the user's email as one element object array (`value`, `type` fields)
 *   - `phoneNumbers`      the user's phone numbers as one element object array (`value`, `type` fields)
 *   - `photos`            the user's profile picture URL as one element object array (`value`, `type` fields)
 *   - `addresses`         the user's physical mailing address as an object (`formatted`, `streetAddress`, `locality`,`region`, `postalCode`, `country` fields )
 *
 * @param {String} accessToken
 * @param {Function} done
 * @api protected
 */
Strategy.prototype.userProfile = function(accessToken, done) {
  var authorization = 'Bearer ' + accessToken;
  var headers = {
    Authorization: authorization
  };
  this._oauth2._request('GET', this._userProfileURL, headers, '', '', function(
    err,
    body,
    res
  ) {
    if (err) {
      return done(new InternalOAuthError('failed to fetch user profile', err));
    }

    try {
      var json = JSON.parse(body);

      var profile = {
        provider: 'phantauth',
        id: json.sub,
        username: json.sub,
        preferredUsername: json.preferred_username,
        nickname: json.nickname,
        displayName: json.name,
        gender: json.gender || 'unknown',
        birthday: json.birthdate,
        profileUrl: json.profile,
        _raw: body,
        _json: json
      };

      if ( json.name && (json.family_name || json.given_name) ) {
        profile.name = {
          formatted: json.name,
          familyName: json.family_name,
          givenName: json.given_name,
          middleName: json.middle_name
         };
      }

      if (json.profile) {
        profile.urls =  [{value: json.profile, type: 'work'}];
      }

      if (json.email) {
        profile.emails = [{value: json.email, type: 'work'}];
      }

      if (json.phone_number) {
        profile.phoneNumbers = [{value: json.phone_number, type: 'work'}];
      }

      if (json.address) {
        profile.addresses = [ {
          formatted: json.address.formatted,
          streetAddress: json.address.street_address,
          locality: json.address.locality,
          region: json.address.region,
          postalCode: json.address.postal_code,
          country: json.address.country
          }
        ];
      }

      if (json.picture) {
        profile.photos = [{value: json.picture, type: 'thumbnail'}];
      }

      done(null, profile);
    } catch (e) {
      done(e);
    }
  });
};

/**
 * Expose `Strategy`.
 */
module.exports = Strategy;
