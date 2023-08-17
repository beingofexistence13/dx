
const url = require('url')
const path = require('path')
const Strategy = require('passport-strategy').Strategy
const Nextengine = require('next-engine')
const { User } = require('next-engine/Entity')
const Connection = require('next-engine/lib/Connection')

class NextengineStrategy extends Strategy {
  static get Strategy () {
    return Nextengine
  }

  constructor(options, verify) {
    super(options, verify)

    if (!verify) {
      throw new TypeError('NextengineStrategy requires a verify callback')
    }

    this.name = 'nextengine'
    this.verify = verify
    this.options = options
  }

  authenticate (req, options) {
    const client = this.getClient()
    const verified = (err, user) => {
      if (err) {
        return this.error(err)
      }
      if (!user) {
        return this.fail({})
      }
      this.success(user, {})
    }

    if (Object.keys(options).length) {
      const query = url.parse(req.url, true).query
      return client.authorize(query.uid, query.state)
        .then(res => {
          if (this.options.passReqToCallback) {
            return this.verify(req, res, verified)
          } else {
            return this.verify(res, verified)
          }
        })
        .catch(e => this.fail(e.message))
    } else {
      return this.redirect(client.getAuthorizeURL())
    }
  }

  getClient () {
    const Strategy = this.constructor.Strategy
    return new Strategy({
      clientId: this.options.clientId,
      clientSecret: this.options.clientSecret,
      redirectUri: this.options.redirectUri,
    })
  }
}

module.exports = NextengineStrategy
