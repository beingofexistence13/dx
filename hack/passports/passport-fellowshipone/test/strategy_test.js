var should = require('should')
var sinon = require('sinon')
var request = require('request')
var Strategy = require('../lib/passport-fellowshipone').Strategy

describe('passport-fellowshipone strategy', function () {
  var strategy, apiURL, churchCode

  var r
  beforeEach(function () {
    request.get = function () {}
    r = sinon.mock(request)
  })
  afterEach(function () {
    r.restore()
  })

  function verifyAll () {
    r.verify()
  }

  describe('provider', function () {
    beforeEach(function () {
      strategy = new Strategy({
        consumerKey: 'ckey',
        consumerSecret: 'csecret'
      }, function () {})
    })

    it('is named fellowshipone', function () {
      strategy.name.should.eql('fellowshipone')
    })
  })

  describe('options', function () {
    describe('churchCode', function () {
      beforeEach(function () {
        churchCode = 'examplechurch'
        strategy = new Strategy({
          churchCode: churchCode,
          consumerKey: 'key',
          consumerSecret: 'secret'
        }, function () {})
      })

      it('sets apiURL', function () {
        strategy.options.should.have.property('apiURL', 'https://' +
          churchCode + '.fellowshiponeapi.com/v1')
      })
    })
    describe('apiURL', function () {
      beforeEach(function () {
        apiURL = 'http://example.com/api'
        strategy = new Strategy({
          churchCode: 'foo',
          apiURL: apiURL,
          consumerKey: 'key',
          consumerSecret: 'secret'
        }, function () {})
      })

      it('supports templating', function () {
        strategy = new Strategy({
          churchCode: 'foo',
          apiVersion: 1,
          protocol: 'https',
          apiURL: '{protocol}://{churchCode}.staging.fellowshiponeapi.com/v{apiVersion}',
          consumerKey: 'key',
          consumerSecret: 'secret'
        }, function () {})
        strategy.options.should.have.property('apiURL',
          'https://foo.staging.fellowshiponeapi.com/v1')
      })

      it('sets requestTokenURL', function () {
        strategy.options.should.have.property('requestTokenURL', apiURL +
          '/Tokens/RequestToken')
      })
      it('sets accessTokenURL', function () {
        strategy.options.should.have.property('accessTokenURL', apiURL +
          '/Tokens/AccessToken')
      })
      it('sets userAuthorizationURL', function () {
        strategy.options.should.have.property('userAuthorizationURL',
          apiURL + '/PortalUser/Login')
      })
    })
  })

  describe('userAuthorizationParams', function () {
    beforeEach(function () {
      apiURL = 'http://example.com'
      strategy = new Strategy({
        apiURL: apiURL,
        consumerKey: 'key',
        consumerSecret: 'secret'
      }, function () {})
    })

    it('sends back oauth_callback', function () {
      strategy._callbackURL = 'foo'
      strategy.userAuthorizationParams({}).should.eql({
        oauth_callback: 'foo'
      })
    })
  })

  describe('userProfile', function () {
    beforeEach(function () {
      apiURL = 'http://example.com'
      strategy = new Strategy({
        apiURL: apiURL,
        consumerKey: 'key',
        consumerSecret: 'secret'
      }, function () {})
    })
    it('yields empty user given no params', function (done) {
      strategy.userProfile(null, null, null, function (err, user) {
        should.not.exist(err)
        user.should.eql({})
        done()
      })
    })
    it('yields empty user given no userURL in params', function (done) {
      strategy.userProfile(null, null, {}, function (err, user) {
        should.not.exist(err)
        user.should.eql({})
        done()
      })
    })
    it('yields error when GET errors', function (done) {
      r.expects('get').withArgs('http://example.com').yields('ERROR')

      strategy.userProfile(null, null, {
        userURL: 'http://example.com'
      }, function (err, user) {
        should.exist(err)
        verifyAll()
        done()
      })
    })
    it('yields error when GET returns non-OK statuses', function (done) {
      r.expects('get').withArgs('http://example.com').yields(null, {
        statusCode: 404
      }, 'not found')

      strategy.userProfile(null, null, {
        userURL: 'http://example.com'
      }, function (err, user) {
        should.exist(err)
        verifyAll()
        done()
      })
    })

    it('yields error given empty reply', function (done) {
      r.expects('get').withArgs('http://example.com').yields(null, {
        statusCode: 200
      })

      strategy.userProfile(null, null, {
        userURL: 'http://example.com'
      }, function (err, user) {
        should.exist(err)

        verifyAll()
        done()
      })
    })

    it('yields error given reply object without correct properties',
      function (done) {
        r.expects('get').withArgs('http://example.com').yields(null, {
          statusCode: 200
        }, {})
        r.expects('get').withArgs('http://example.com/Communications').yields(
          null, {
            statusCode: 200
          }, {})

        strategy.userProfile(null, null, {
          userURL: 'http://example.com'
        }, function (err, user) {
          should.exist(err)

          verifyAll()
          done()
        })
      })

    it('yields profile based on F1 Person record', function (done) {
      var f1person = {
        person: {
          '@id': 1234,
          '@uri': 'http://example.com',
          firstName: 'John',
          lastName: 'Doe'
        }
      }
      var f1comms = {
        communications: {
          communication: [{
            communicationGeneralType: 'Email',
            communicationValue: 'john@example.com',
            communicationType: {
              name: 'Email'
            },
            preferred: 'false'
          }]
        }
      }
      var expected = {
        id: 1234,
        uri: 'http://example.com',
        displayName: 'John',
        fullName: 'John Doe',
        email: 'john@example.com'
      }

      r.expects('get').yields(null, {
        statusCode: 200
      }, f1person)
      r.expects('get').yields(null, {
        statusCode: 200
      }, f1comms)

      strategy.userProfile(null, null, {
        userURL: 'http://example.com'
      }, function (err, user) {
        should.not.exist(err)
        user.should.eql(expected)

        verifyAll()
        done()
      })
    })
  })

  describe('_getOAuthAccessToken', function () {
    var s
    beforeEach(function () {
      s = sinon.mock(strategy)
      strategy._clientOptions = {}
    })
    afterEach(function () {
      s.restore()
    })

    function verifyAll () {
      r.verify()
      s.verify()
    }
    it('errors when _performSecureRequest yields error', function (done) {
      s.expects('_performSecureRequest').yields('ERROR')

      strategy._getOAuthAccessToken('', '', function (err, token, secret, params) {
        err.should.eql('ERROR')
        verifyAll()
        done()
      })
    })
    it('responds with userURL in params', function (done) {
      var userURL = 'http://example.com/user/1234'
      var data = 'oauth_token=tok&oauth_token_secret=sec'
      s.expects('_performSecureRequest').yields(null, data, {
        headers: {
          'content-location': userURL
        }
      })

      strategy._getOAuthAccessToken(null, null, function (err, token, secret, params) {
        should.not.exist(err)
        should(params).have.property('userURL', userURL)
        token.should.eql('tok')
        secret.should.eql('sec')
        verifyAll()
        done()
      })
    })
  })
})
