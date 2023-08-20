var chai = require('chai');
var expect = chai.expect;
var DAccountStrategy = require('../lib/strategy');

chai.use(require('chai-passport-strategy'));

describe('Strategy', function() {
    
  describe('constructed', function() {
    var strategy = new DAccountStrategy({
        clientID: 'ABC123',
        clientSecret: 'secret'
      },
      function() {});
    
    it('should be named daccount', function() {
      expect(strategy.name).to.equal('daccount');
    });
  });
  
  describe('constructed with undefined options', function() {
    it('should throw', function() {
      expect(function() {
        new DAccountStrategy(undefined, function(){});
      }).to.throw(Error);
    });
  });

  describe('authorization request with custom nonce and state parameters', function() {
    var strategy = new DAccountStrategy({
        clientID: 'ABC123',
        clientSecret: 'secret'
      }, function() {});
    
    var url;

    before(function(done) {
      chai.passport.use(strategy)
        .redirect(function(u) {
          url = u;
          done();
        })
        .req(function(req) {
        })
        .authenticate({ nonce: 'the_nonce', state: 'the_state' });
    });

    it('should be redirected', function() {
      expect(url).to.equal('https://id.smt.docomo.ne.jp/cgi8/oidc/authorize?nonce=the_nonce&state=the_state&response_type=code&scope=openid&client_id=ABC123');
    });
  });

  describe('authorization request with default nonce and state parameters', function() {
    var strategy = new DAccountStrategy({
        clientID: 'ABC123',
        clientSecret: 'secret'
      }, function() {});
    
    var url;

    before(function(done) {
      chai.passport.use(strategy)
        .redirect(function(u) {
          url = u;
          done();
        })
        .req(function(req) {
        })
        .authenticate();
    });

    it('should be redirected', function() {
      expect(url).to.match(/^https:\/\/id.smt.docomo.ne.jp\/cgi8\/oidc\/authorize\?nonce=[a-zA-Z0-9_-]{32}&state=[a-zA-Z0-9_-]{32}\&response_type=code\&scope=openid\&client_id=ABC123$/);
    });
  });
});
