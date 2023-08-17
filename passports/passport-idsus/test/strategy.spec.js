/* jshint camelcase: false */
var IdsusStrategy = require('..'),
  Chance = new require('chance')(),
  util = require('./lib/util'),
  nock = require('nock'),
  VError = require('verror'),
  fixtures = require('./fixtures');

// Fake data to be used as parameter to load IdsusStrategy
var IdsusStrategyParams = fixtures.strategyParams;

describe('Strategy', function() {

  describe('constructed', function() {
    var strategy = new IdsusStrategy(IdsusStrategyParams, function() {});
    it('should be named idsus', function() {
      expect(strategy.name).to.equal('idsus');
    });
  });

  describe('constructed with no arguments', function() {
    it('should throw RangeError', function() {
      expect(function() {
        return new IdsusStrategy();
      }).to.throw(RangeError);
    });
  });

  describe('constructed with wrong type first argument', function() {
    it('should throw TypeError', function() {
      expect(function() {
        return new IdsusStrategy('SOMEID', function() {});
      }).to.throw(TypeError);
    });
  });

  describe('constructed with wrong type second argument argument', function() {
    it('should throw TypeError', function() {
      expect(function() {
        return new IdsusStrategy({}, {});
      }).to.throw(TypeError);
    });
  });


  describe('constructed with missing option key: clientID', function() {
    it('should throw RangeError', function() {
      expect(function() {
        return new IdsusStrategy({
          domain: IdsusStrategyParams.domain,
          clientSecret: IdsusStrategyParams.clientSecret,
          callbackURL: IdsusStrategyParams.callbackURL,
        }, function() {});
      }).to.throw(RangeError);
    });
  });

  describe('constructed with missing option key: clientSecret', function() {
    it('should throw RangeError', function() {
      expect(function() {
        return new IdsusStrategy({
          domain: IdsusStrategyParams.domain,
          clientID: IdsusStrategyParams.clientID,
          callbackURL: IdsusStrategyParams.callbackURL,
        }, function() {});
      }).to.throw(RangeError);
    });
  });

  describe('constructed with missing option key: callbackURL', function() {
    it('should throw RangeError', function() {
      expect(function() {
        return new IdsusStrategy({
          domain: IdsusStrategyParams.domain,
          clientID: IdsusStrategyParams.clientID,
          clientSecret: IdsusStrategyParams.clientSecret,
        }, function() {});
      }).to.throw(RangeError);
    });
  });

  describe('constructed with missing option key: domain', function() {
    it('should throw RangeError', function() {
      expect(function() {
        return new IdsusStrategy({
          clientID: IdsusStrategyParams.clientID,
          clientSecret: IdsusStrategyParams.clientSecret,
        }, function() {});
      }).to.throw(RangeError);
    });
  });

  describe('authorization request', function() {

    var strategy = new IdsusStrategy(IdsusStrategyParams, function() {});

    it('should be redirected', function(done) {
      chai.passport.use(strategy)
        .redirect(function(redirectUrl) {
          expect(redirectUrl).to.equal(util.redirectUrl(IdsusStrategyParams));
          done();
        })
        .authenticate();
    });
  });

  describe('retrieve access token and user data', function() {
    before(function() {
      // Setup Nock inteceptor for valid token
      nock('https://login.' + IdsusStrategyParams.domain)
        .post('/oauth/token/')
        .reply(200, fixtures.accessToken);

      // Setup Nock inteceptor for user profile
      nock('https://api.' + IdsusStrategyParams.domain)
        .get('/perfil/dados/')
        .query(true)
        .reply(200, fixtures.userSchema);
    });

    it('should fetch user data', function(callback) {
      var strategy = new IdsusStrategy(IdsusStrategyParams, function(accessToken, tokenType, expiresIn, refreshToken, scope, user, done) {
        expect(accessToken).to.be.a('string');
        expect(accessToken).to.be.equal(fixtures.accessToken.access_token);
        expect(tokenType).to.be.a('string');
        expect(tokenType).to.be.equal(fixtures.accessToken.token_type);
        expect(expiresIn).to.be.a('date');
        expect(refreshToken).to.be.a('string');
        expect(refreshToken).to.be.equal(fixtures.accessToken.refresh_token);
        expect(scope).to.be.a('array');
        expect(scope.lenght).to.be.equal(fixtures.accessToken.scope.split(' ').lenght);
        expect(user).to.be.a('object');
        expect(user).to.have.all.keys(Object.keys(fixtures.userSchema));
        expect(done).to.be.a('function');
        done(null, user);
      });

      chai.passport.use(strategy)
        .req(function(req) {
          req.query = {};
          req.query.code = Chance.guid();
        })
        .success(function(user) {
          expect(user).to.be.a('object');
          callback();
        })
        .authenticate();
    });

    after(function() {
      nock.cleanAll();
    });
  });

  describe('invalid autorization code', function() {
    var strategy = new IdsusStrategy(IdsusStrategyParams, function() {});

    before(function() {
      // Setup Nock inteceptor
      nock(IdsusStrategyParams.loginURL)
        .post('/oauth/token/')
        .reply(401, {
          error: 'invalid_grant'
        });
    });

    it('should fail with invalid authorization code', function(done) {
      chai.passport.use(strategy)
        .req(function(req) {
          req.query = {};
          req.query.code = Chance.guid();
        })
        .error(function(error) {
          expect(error).to.be.instanceof(VError);
          done();
        })
        .authenticate();
    });

    after(function() {
      nock.cleanAll();
    });
  });

  describe('fetch user date without a valid token', function() {
    var strategy = new IdsusStrategy(IdsusStrategyParams, function() {});

    before(function() {
      // Setup Nock inteceptor for valid token
      nock(IdsusStrategyParams.loginURL)
        .post('/oauth/token/')
        .reply(200, fixtures.accessToken);

      // Setup Nock inteceptor for user profile
      nock(IdsusStrategyParams.loginURL)
        .get('/api/user/')
        .query(true)
        .reply(401, { error: 'Invalid credentials' });
    });

    it('should fail with no Authorization Bearer header', function(done) {
      chai.passport.use(strategy)
        .req(function(req) {
          req.query = {};
          req.query.code = Chance.guid();
        })
        .error(function(error) {
          expect(error).to.be.instanceof(VError);
          done();
        })
        .authenticate();
    });

    after(function() {
      nock.cleanAll();
    });
  });

  describe('fail retrieving user from db in verify callback', function() {
    before(function() {
      // Setup Nock inteceptor for valid token
      nock(IdsusStrategyParams.loginURL)
        .post('/oauth/token/')
        .reply(200, fixtures.accessToken);

      // Setup Nock inteceptor for user profile
      nock(IdsusStrategyParams.domain)
        .get('/perfil/dados/')
        .query(true)
        .reply(200, fixtures.userSchema);
    });

    it('should fail with Error instance passed to verify done argument function', function(done) {
      var strategy = new IdsusStrategy(IdsusStrategyParams, function(accessToken, tokenType, expiresIn, refreshToken, scope, user, done) {
        done(new Error('Could not find user'));
      });

      chai.passport.use(strategy)
        .req(function(req) {
          req.query = {};
          req.query.code = Chance.guid();
        })
        .error(function(error) {
          expect(error).to.be.instanceof(Error);
          done();
        })
        .authenticate();
    });

    after(function() {
      nock.cleanAll();
    });
  });

  describe('fail sending empty user to done callback function', function() {
    before(function() {
      // Setup Nock inteceptor for valid token
      nock(IdsusStrategyParams.loginURL)
        .post('/oauth/token/')
        .reply(200, fixtures.accessToken);

      // Setup Nock inteceptor for user profile
      nock(IdsusStrategyParams.domain)
        .get('/perfil/dados')
        .query(true)
        .reply(200, fixtures.userSchema);
    });

    /* jshint ignore:start */
    it('should fail with no further parametes', function(done) {
      var strategy = new IdsusStrategy(IdsusStrategyParams, function(accessToken, tokenType, expiresIn, refreshToken, scope, user, done) {
        done(null, null);
      });

      chai.passport.use(strategy)
        .req(function(req) {
          req.query = {};
          req.query.code = Chance.guid();
        })
        .fail(function(info) {
          expect(info).to.be.undefined;
          done();
        })
        .authenticate();
    });
    /* jshint ignore:end */

    after(function() {
      nock.cleanAll();
    });
  });
});
