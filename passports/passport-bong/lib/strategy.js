/**
 * Module dependencies.
 */
var util = require('util')
  , OAuth2Strategy = require('passport-oauth2')
  , Profile = require('./profile')
  , InternalOAuthError = require('passport-oauth2').InternalOAuthError;


/**
 * `Strategy` constructor.
 *
 * The Bong authentication strategy authenticates requests by delegating to
 * Bong using the OAuth 2.0 protocol.
 *
 * Applications must supply a `verify` callback which accepts an `accessToken`,
 * `refreshToken` and service-specific `profile`, and then calls the `done`
 * callback supplying a `user`, which should be set to `false` if the
 * credentials are not valid.  If an exception occured, `err` should be set.
 *
 * Options:
 *   - `clientID`      your Bong application's Client ID
 *   - `clientSecret`  your Bong application's Client Secret
 *   - `callbackURL`   URL to which Bong will redirect the user after granting authorization
 *   - `scope`         array of permission scopes to request.  valid scopes include:
 *                     'user', 'public_repo', 'repo', 'gist', or none.
 *                     (see https://github.com/Ginshell/bongOpenPlatform for more info)
 *   — `userAgent`     All API requests MUST include a valid User Agent string.
 *                     e.g: domain name of your application.
 *                     (see https://github.com/Ginshell/bongOpenPlatform for more info)
 *
 * Examples:
 *
 *     passport.use(new BongStrategy({
 *         clientID: '123-456-789',
 *         clientSecret: 'shhh-its-a-secret'
 *         callbackURL: 'https://www.example.net/auth/bong/callback',
 *         userAgent: 'myapp.com'
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
  options.authorizationURL = options.authorizationURL || 'http://open.bong.com/oauth/authorize';
  options.tokenURL = options.tokenURL || 'http://open.bong.com/oauth/token';
  options.scopeSeparator = options.scopeSeparator || ',';
  options.customHeaders = options.customHeaders || {};

  if (!options.customHeaders['User-Agent']) {
    options.customHeaders['User-Agent'] = options.userAgent || 'passport-bong';
  }

  OAuth2Strategy.call(this, options, verify);
  this.name = 'bong';

  this._uid = ''; // bong oauth2 uid 扩展 (see: https://github.com/Ginshell/bongOpenPlatform)
  this._userProfileURL = options.userProfileURL || 'http://open.bong.com/1/userInfo/{$uid}';
  this._oauth2.useAuthorizationHeaderforGET(true);
}

/**
 * Inherit from `OAuth2Strategy`.
 */
util.inherits(Strategy, OAuth2Strategy);

/**
 * Retrieve user profile from Bong.
 *
 * This function constructs a normalized profile, with the following properties:
 * (see: https://github.com/Ginshell/bongOpenPlatform/blob/master/docs/userinfo.md)
 *
 *   - `uid`              the user's Bong ID
 *   - `name`             用户姓名
 *   - `gender`           性别：1 为男，2 为女
 *   - `birthday`         生日年份
 *   - `weight`           体重，单位为kg
 *   - `height`           身高，单位为cm
 *   - `targetSleeptTime` 目标睡眠时间，单位分钟
 *   - `targetCalorie`    目标卡路里消耗，单位千焦
 *   
 *
 * @param {String} accessToken
 * @param {Function} done
 * @api protected
 */
Strategy.prototype.userProfile = function (accessToken, done) {

  var uid = this._uid;

  this._oauth2.get(
    this._userProfileURL.replace('{$uid}', uid),
    accessToken,
    function (err, body, res) {
      var json;

      if (err) {
        return done(new InternalOAuthError('Failed to fetch user profile', err));
      }

      try {
        json = JSON.parse(body);
      } catch (ex) {
        return done(new Error('Failed to parse user profile'));
      }

      var profile = Profile.parse(json);
      profile.uid = uid;
      profile.provider = 'bong';
      profile._raw = body;

      done(null, profile);
    });
};


/**
 * onGetOAuthAccessToken
 *
 * @param {Object} params
 * @api private
 */
OAuth2Strategy.prototype.onGetOAuthAccessToken = function(params) {
  this._uid = params.uid;
};

/**
 * Expose `Strategy`.
 */
module.exports = Strategy;
