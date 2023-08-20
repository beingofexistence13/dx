const OAuth2Strategy = require('passport-oauth2')
const {InternalOAuthError} = require('passport-oauth2')

const Profile = require('./profile')

class Strategy extends OAuth2Strategy {
  constructor(options, verify) {
    options = options || {}
    options.authorizationURL = options.authorizationURL || 'https://anywhere.idn.laposte.fr/oauth/v2/authorize'
    options.tokenURL = options.tokenURL || 'https://anywhere.idn.laposte.fr/oauth/v2'
    options.scopeSeparator = options.scopeSeparator || ','
    options.customHeaders = options.customHeaders || {}

    if (!options.customHeaders['User-Agent']) {
      options.customHeaders['User-Agent'] = options.userAgent || 'passport-idn'
    }

    super(options, verify)

    this.name = 'idn'
    this._userProfileURL = options.userProfileURL || 'https://anywhere.idn.laposte.fr/oauth/v2/me'
    this._oauth2.useAuthorizationHeaderforGET(true)
  }

  userProfile(accessToken, done) {
    this._oauth2.get(this._userProfileURL, accessToken, (err, body) => {
      let json

      if (err) {
        done(new InternalOAuthError('Failed to fetch user profile', err))
        return
      }

      try {
        json = JSON.parse(body)
      } catch (error) {
        done(new Error('Failed to parse user profile'))
        return
      }

      const profile = Profile.parse(json)
      profile.provider = 'idn'
      profile._raw = body
      profile._json = json

      done(null, profile)
    })
  }
}

module.exports = Strategy
