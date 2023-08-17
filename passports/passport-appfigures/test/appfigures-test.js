var AppFiguresStrategy = require('..')
  , fs = require('fs')
  , assert = require('assert')
  , parse = require('../lib/profile').parse

describe('passport-appfigures', function () {

  describe('example profile', function () {
    var profile

    before(function (done) {
      fs.readFile('test/profile.json', 'utf8', function (err, data) {
        if (err) { return done(err) }
        profile = parse(data)
        console.log()
        done()
      })
    })

    it('should parse profile', function () {
      assert.equal(profile.id, 123)
      assert.equal(profile.name, 'Nathan Bowser')
      assert.equal(profile.email, 'nathan@foo.com')
      assert.equal(profile.avatar_url, 'https://secure.gravatar.com/avatar/936ffb5030a32c7745e6e6feeadkdk?d=mm')
    })
  })

  describe('strategy', function () {

    var strategy = new AppFiguresStrategy({
        consumerKey: 'ABC123',
        consumerSecret: 'secret'
      }, function() {})

    it('should export Strategy constructor directly from package', function () {
      assert(typeof AppFiguresStrategy === 'function')
      assert(AppFiguresStrategy == AppFiguresStrategy.Strategy)
      assert(typeof AppFiguresStrategy.Strategy === 'function')
    })

    it('should be named appfigures', function () {
      assert.equal(strategy.name, 'appfigures')
    })
  })

  describe('user profile', function() {

    var strategy =  new AppFiguresStrategy({
        consumerKey: 'ABC123',
        consumerSecret: 'secret'
      }, function() {})

    // mock
    strategy._oauth.get = function(url, token, tokenSecret, callback) {
      if (url != 'https://api.appfigures.com/v2/') { return callback(new Error('wrong url argument')) }

      if (token != 'token' && tokenSecret != 'tokenSecret') { return callback(new Error('wrong token argument')) }

      var body = JSON.stringify(require('./profile.json'))

      callback(null, body, undefined)
    }


    before(function (done) {
      strategy.userProfile('token', 'tokenSecret', {}, function (err, p) {
        if (err) { return done(err) }
        profile = p
        done()
      })
    })

    it('parses profile', function () {
      assert.equal(profile.id, 123)
      assert.equal(profile.name, 'Nathan Bowser')
      assert.equal(profile.email, 'nathan@foo.com')
      assert.equal(profile.avatar_url, 'https://secure.gravatar.com/avatar/936ffb5030a32c7745e6e6feeadkdk?d=mm')
    })

    it('sets raw property', function () {
      assert.equal(typeof profile._raw, 'string')
    })

    it('sets json property', function () {
      assert.equal(typeof profile._json, 'object')
    })


    describe('encountering an error', function () {
      before(function (done) {
        strategy.userProfile('wrong-token', 'wrong-secret', {}, function (e, p) {
          err = e
          profile = p
          done()
        })
      })

      it('handles error', function () {
        assert(err instanceof Error)

        assert.equal(err.constructor.name, 'InternalOAuthError')
        assert.equal(err.message, 'Failed to fetch user profile')
      })

      it('does not load profile', function () {
        assert.equal(typeof profile, 'undefined')
      })

    })
  })

})
