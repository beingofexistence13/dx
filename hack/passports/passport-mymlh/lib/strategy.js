// Module Dependencies
var util = require('util');
var OAuth2Strategy = require('passport-oauth2');
var InternalOAuthError = require('passport-oauth2').InternalOAuthError;

/**
 * `Strategy` constructor.
 *
 * The MyMLH authentication strategy authenticates requests by delegating to
 * MyMLH using the OAuth 2.0 protocol.
 *
 * Applications must supply a `verify` callback which accepts an `accessToken`,
 * `refreshToken` and service-specific `profile`, and then calls the `done`
 * callback supplying a `user`, which should be set to `false` if the
 * credentials are not valid.  If an exception occured, `err` should be set.
 *
 * Options:
 *   - `clientID`      your MyMLH application's client id
 *   - `clientSecret`  your MyMLH application's client secret
 *   - `callbackURL`   URL to which MyMLH will redirect the user after granting authorization
 *
 * Examples:
 *
 *     passport.use(new MyMLHStrategy({
 *         clientID: '123-456-789',
 *         clientSecret: 'shhh-its-a-secret'
 *         callbackURL: 'https://www.example.net/callback/mymlh'
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
  options.authorizationURL = options.authorizationURL || 'https://my.mlh.io/oauth/authorize';
  options.tokenURL = options.tokenURL || 'https://my.mlh.io/oauth/token';
  options.scopeSeparator = options.scopeSeparator || ' ';
  options.customHeaders = options.customHeaders || {};

  if (!options.customHeaders['User-Agent']) {
    options.customHeaders['User-Agent'] = options.userAgent || 'passport-mymlh';
  }

  OAuth2Strategy.call(this, options, verify);
  this.name = 'mymlh';
  this._userProfileURL = options.userProfileURL || 'https://my.mlh.io/api/v2/user';

  var self = this;
  var _oauth2_getOAuthAccessToken = this._oauth2_getOAuthAccessToken;
  this._oauth2_getOAuthAccessToken = function (code, params, callback) {
    _oauth2_getOAuthAccessToken.call(self._oauth2, code, params, function (err, accessToken, refreshToken, params) {
      if (err) { return callback(err); }
      if (!accessToken) {
        return callback({
          statusCode: 400,
          data: JSON.stringify(params)
        });
      }
      callback(null, accessToken, refreshToken, params);
    });
  }
}

// Inherit from OAuth2Strategy
util.inherits(Strategy, OAuth2Strategy);

/**
 * Retrieve user profile from MyMLH.
 *
 * This function constructs a normalized profile, with the following properties:
 *
 *   - `provider`              always set to `mymlh`
 *   - `id`                    the user's MyMLH id
 *   - 'email'                 the user's email
 *   - 'created_at'            date and time when the user was created
 *   - 'updated_at'            date and time when the user was last updated
 *   - 'first_name'            the user's first name
 *   - 'last_name'             the user's last name
 *   - 'major'                 the user's major ex. Computer Science
 *   - 'shirt_size'            the user's shirt size
 *   - 'dietary_restrictions'  the user's dietary restrictions, if any specified
 *   - 'special_needs'         the user's special needs, if any specified
 *   - 'date_of_birth'         the user's birth date
 *   - 'gender'                the user's gender
 *   - 'phone_number'          the user's phone number
 *   - 'level_of_study'        the user's level of study ex. High School, Undergraduate
 *   - 'school.id'             id number of the user's school ex. school = { id:2, name: 'Rutgers University'}
 *   - 'school.name'           name of the user's school ex 1 line above applies here
 *
 * @param {String} accessToken
 * @param {Function} done
 * @api protected
 */
Strategy.prototype.userProfile = function (accessToken, done) {
  this._oauth2.get(this._userProfileURL, accessToken, function (err, body, res) {
    if (err) { return done(new InternalOAuthError('failed to fetch user profile', err)); }

    try {
      var json = JSON.parse(body);
      var profile = { provider: 'mymlh' };
      profile.id = json.data.id;
      profile.email = json.data.email;
      profile.created_at = json.data.created_at;
      profile.updated_at = json.data.updated_at;
      profile.first_name = json.data.first_name;
      profile.last_name = json.data.last_name;
      profile.major = json.data.major;
      profile.shirt_size = json.data.shirt_size;
      profile.dietary_restrictions = json.data.dietary_restrictions;
      profile.special_needs = json.data.special_needs;
      profile.date_of_birth = json.data.date_of_birth;
      profile.gender = json.data.gender;
      profile.phone_number = json.data.phone_number;
      profile.level_of_study = json.data.level_of_study;
      profile.school = json.data.school;
      profile._data = json.data;
      profile._raw = body;
      profile._json = json;

      done(null, profile);
    } catch(e) {
      done(e);
    }
  });
};

// Expose Strategy
module.exports = Strategy;
