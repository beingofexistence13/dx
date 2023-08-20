const OAuth2Strategy = require('passport-oauth2')
const util = require('util')
const Profile = require('./profile')
const InternalOAuthError = require('passport-oauth2').InternalOAuthError

function Strategy (options, verify) {
  options = options || {}
  options.authorizationURL = options.authorizationURL
  options.tokenURL = options.tokenURL
  options.scopeSeparator = options.scopeSeparator || ','

  OAuth2Strategy.call(this, options, verify)
  this.name = 'predix'
  this._userProfileURL = options.userProfileURL
  this._clientSecret = options.clientSecret
  this._oauth2.useAuthorizationHeaderforGET(true)
}

// Inherit from `OAuth2Strategy`.
util.inherits(Strategy, OAuth2Strategy)

Strategy.prototype.authorizationParams = function (options) {
  if (this._stateParamCallback) {
    return {'state': this._stateParamCallback()}
  }
  return {}
}

Strategy.prototype.userProfile = function (accessToken, done) {
  // var self = this
  this._oauth2.get(this._userProfileURL, accessToken, function (err, body, res) {
    var json

    if (err) {
      if (err.data) {
        try {
          json = JSON.parse(err.data)
        } catch (_) {}
      }

      // if (json && json.message) {
      //   return done(new APIError(json.message))
      // }
      return done(new InternalOAuthError('Failed to fetch user profile', err))
    }

    try {
      json = JSON.parse(body)
    } catch (ex) {
      return done(new Error('Failed to parse user profile'))
    }

    var profile = Profile.parse(json)
    profile.provider = 'predix'
    profile._raw = body
    profile._json = json

    done(null, profile)
  })
}

// Expose constructor
module.exports = Strategy
