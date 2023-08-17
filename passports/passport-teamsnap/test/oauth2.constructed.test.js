var TeamsnapStrategy = require('../lib/strategy')
  , AuthorizationError = require('../lib/errors/authorizationerror')
  , TokenError = require('../lib/errors/tokenerror')
  , InternalOAuthError = require('../lib/errors/internaloautherror')
  , chai = require('chai')
  , clientID = process.env.TEAMSNAP_CLIENT_ID || 'ABC123'
  , secret = process.env.TEAMSNAP_SECRET || 'secret';

describe('TeamsnapStrategy', function() {
  
  describe('constructed', function() {
    
    describe('with normal options', function() {
      var strategy = new TeamsnapStrategy({
          clientID: clientID,
          clientSecret: secret
        }, function() {});
    
      it('should be named teamsnap', function() {
        expect(strategy.name).to.equal('teamsnap');
      });
    }); // with normal options
    
    describe('without a verify callback', function() {
      it('should throw', function() {
        expect(function() {
          new TeamsnapStrategy({
            clientID: clientID,
            clientSecret: secret
          });
        }).to.throw(TypeError, 'TeamsnapStrategy requires a verify callback');
      });
    }); // without a verify callback
    
    describe('without a clientID option', function() {
      it('should throw', function() {
        expect(function() {
          new TeamsnapStrategy({
            clientSecret: secret
          }, function() {});
        }).to.throw(TypeError, 'TeamsnapStrategy requires a clientID option');
      });
    }); // without a clientID option
    
    describe('without a clientSecret option', function() {
      it('should not throw', function() {
        expect(function() {
          new TeamsnapStrategy({
            clientID: clientID
          }, function() {});
        }).to.not.throw();
      });
    }); // without a clientSecret option
    
    describe('with only a verify callback', function() {
      it('should throw', function() {
        expect(function() {
          new TeamsnapStrategy(function() {});
        }).to.throw(TypeError, 'TeamsnapStrategy requires a clientID option');
      });
    }); // with only a verify callback
    
  }); // constructed
  
});
