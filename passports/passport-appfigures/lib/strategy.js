var util = require('util')
  , OAuthStrategy = require('passport-oauth1')
  , Profile = require('./profile')
  , InternalOAuthError = require('passport-oauth1').InternalOAuthError

/**
 * `Strategy` constructor.
 *
 * The App Figures authentication strategy authenticates requests by delegating to
 * App Figures using the OAuth 1.0 protocol.
 *
 * Applications must supply a `verify` callback which accepts an `accessToken`,
 * `refreshToken` and service-specific `profile`, and then calls the `done`
 * callback supplying a `user`, which should be set to `false` if the
 * credentials are not valid.  If an exception occured, `err` should be set.
 *
 * Options:
 *   - `consumerKey`      your App Figures application's consumer key
 *   - `consumerSecret`  your App Figures application's consumer secret
 *   - `callbackURL`   URL to which App Figures will redirect the user after granting authorization
 *
 * Examples:
 *
 *     passport.use(new AppFiguresStrategy({
 *         consumerKey: '123',
 *         consumerSecret: 'abc'
 *         callbackURL: 'https://www.example.com/auth/appfigures/callback'
 *       },
 *       function(accessToken, refreshToken, profile, done) {
 *         User.findOrCreate(..., function (err, user) {
 *           done(err, user)
 *         })
 *       }
 *     ))
 *
 * @param {Object} options
 * @param {Function} verify
 * @api public
 */
function Strategy(options, verify) {
  options = options || {}
  options.requestTokenURL = options.requestTokenURL || 'https://api.appfigures.com/v2/oauth/request_token'
  options.accessTokenURL = options.accessTokenURL || 'https://api.appfigures.com/v2/oauth/access_token'
  options.userAuthorizationURL = options.userAuthorizationURL || 'https://api.appfigures.com/v2/oauth/authorize'

  OAuthStrategy.call(this, options, verify)
  this.name = 'appfigures'
  this._userProfileURL = options.userProfileURL || 'https://api.appfigures.com/v2/'
}

util.inherits(Strategy, OAuthStrategy)

Strategy.prototype.userProfile = function(token, tokenSecret, params, done) {
  this._oauth.get(this._userProfileURL, token, tokenSecret, function (err, body, res) {
    var json

    if (err) {
      if (err.data) {
        try {
          json = JSON.parse(err.data)
        } catch (_) {}
      }

      if (json && json.error && typeof json.error == 'string') {
        return done(new APIError(json.error))
      }
      return done(new InternalOAuthError('Failed to fetch user profile', err))
    }

    try {
      json = JSON.parse(body)
    } catch (ex) {
      return done(new Error('Failed to parse user profile'))
    }

    var profile = Profile.parse(json)
    profile.provider  = 'appfigures'
    profile._raw = body
    profile._json = json

    done(null, profile)
  })
}

module.exports = Strategy
