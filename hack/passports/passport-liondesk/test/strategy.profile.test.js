/* global describe, it, before, expect */
'use strict';

var LionDeskStrategy = require('../lib/strategy');

describe('Strategy#userProfile', function() {
    
  describe('fetched from LionDesk API', function() {
    var strategy = new LionDeskStrategy({
        clientID: 'ABC123',
        clientSecret: 'secret'
      }, function() {});
  
    // Overiden the get method of _oauth2
    strategy._oauth2.get = function(url, accessToken, callback) {
      if (url != 'https://api-v2.liondesk.com/users') { return callback(new Error('incorrect url argument')); }
      if (accessToken != 'token') { return callback(new Error('incorrect token argument')); }
    
      var body = require('./fixtures/users');
      if (typeof body === 'object') {
        body = JSON.stringify(body);
      }
      callback(null, body, undefined);
    };
    
    var profile;
    
    before(function(done) {
      strategy.userProfile('token', function(err, p) {
        if (err) { return done(err); }
        profile = p;
        done();
      });
    });
    
    it('should parse profile', function() {
      expect(profile.provider).to.equal('liondesk');
    });
    
    it('should set raw property', function() {
      expect(profile._raw).to.be.a('string');
    });
    
    it('should set json property', function() {
      expect(profile._json).to.be.an('object');
    });
  });
  
  describe('error caused by invalid token when using LionDesk API', function() {
    var strategy = new LionDeskStrategy({
        clientID: 'ABC123',
        clientSecret: 'secret'
      }, function() {});
    
    strategy._oauth2.get = function(url, accessToken, callback) {
      if (url != 'https://api-v2.liondesk.com/users') { return callback(new Error('incorrect url argument')); }
      
      var body = require('./fixtures/errors/auth');
      if (typeof body === 'object') {
        body = JSON.stringify(body);
      }
      callback({ statusCode: 401, data: body });
    };
      
    var err, profile;
    
    before(function(done) {
      strategy.userProfile('invalid-token', function(e, p) {
        err = e;
        profile = p;
        done();
      });
    });
  
    it('should error', function() {
      expect(err).to.be.an.instanceOf(Error);
      expect(err.constructor.name).to.equal('LionDeskAPIError');
      expect(err.message).to.equal("Invalid access token");
      expect(err.code).to.equal(401);
    });
  });

});