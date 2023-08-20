/* eslint no-unused-vars: 0, no-unused-expressions: 0, standard/no-callback-literal: 0 */

var PunwaveStrategy = require('../lib/strategy')

describe('Strategy#userProfile', function () {
  describe('fetched from default endpoint', function () {
    var strategy = new PunwaveStrategy({
      clientID: 'ABC123',
      clientSecret: 'secret'
    }, function () {})

    strategy._oauth2.get = function (url, accessToken, callback) {
      if (url !== 'https://api.punwave.com/oauth2/users/me') return callback(new Error('incorrect url argument'))
      if (accessToken !== 'token') return callback(new Error('incorrect token argument'))

      var body = '{"firstName":"Kevin","lastName":"Wang","email":"chunkai1312@gmail.com","name":"Kevin Wang","id":"574c19165a9aec772be70108"}'
      callback(null, body, undefined)
    }

    var profile

    before(function (done) {
      strategy.userProfile('token', function (err, p) {
        if (err) return done(err)
        profile = p
        done()
      })
    })

    it('should parse profile', function () {
      expect(profile.provider).to.equal('punwave')

      expect(profile.id).to.equal('574c19165a9aec772be70108')
      expect(profile.displayName).to.equal('Kevin Wang')
      expect(profile.name.firstName).to.equal('Kevin')
      expect(profile.name.lastName).to.equal('Wang')
      expect(profile.email).to.equal('chunkai1312@gmail.com')
    })

    it('should set raw property', function () {
      expect(profile._raw).to.be.a('string')
    })

    it('should set json property', function () {
      expect(profile._json).to.be.an('object')
    })
  }) // fetched from default endpoint

  describe('error caused by invalid token', function () {
    var strategy = new PunwaveStrategy({
      clientID: 'ABC123',
      clientSecret: 'secret'
    }, function () {})

    strategy._oauth2.get = function (url, accessToken, callback) {
      var body = 'Unauthorized'

      callback({ statusCode: 400, data: body })
    }

    var err, profile
    before(function (done) {
      strategy.userProfile('token', function (e, p) {
        err = e
        profile = p
        done()
      })
    })

    it('should error', function () {
      expect(err).to.be.an.instanceOf(Error)
    })
  }) // error caused by invalid token

  describe('error caused by malformed response', function () {
    var strategy = new PunwaveStrategy({
      clientID: 'ABC123',
      clientSecret: 'secret'
    }, function () {})

    strategy._oauth2.get = function (url, accessToken, callback) {
      var body = 'Hello, world.'
      callback(null, body, undefined)
    }

    var err, profile

    before(function (done) {
      strategy.userProfile('token', function (e, p) {
        err = e
        profile = p
        done()
      })
    })

    it('should error', function () {
      expect(err).to.be.an.instanceOf(Error)
      expect(err.message).to.equal('Failed to parse user profile')
    })
  }) // error caused by malformed response

  describe('internal error', function () {
    var strategy = new PunwaveStrategy({
      clientID: 'ABC123',
      clientSecret: 'secret'
    }, function () {})

    strategy._oauth2.get = function (url, accessToken, callback) {
      return callback(new Error('something went wrong'))
    }

    var err, profile

    before(function (done) {
      strategy.userProfile('wrong-token', function (e, p) {
        err = e
        profile = p
        done()
      })
    })

    it('should error', function () {
      expect(err).to.be.an.instanceOf(Error)
      expect(err.constructor.name).to.equal('InternalOAuthError')
      expect(err.message).to.equal('Failed to fetch user profile')
      expect(err.oauthError).to.be.an.instanceOf(Error)
      expect(err.oauthError.message).to.equal('something went wrong')
    })

    it('should not load profile', function () {
      expect(profile).to.be.undefined
    })
  }) // internal error
})
