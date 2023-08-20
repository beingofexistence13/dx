/* global describe, it, expect, before */
/* jshint expr: true, multistr: true */

var fs = require('fs'),
    BehanceStrategy = require('../lib/strategy');


describe('Strategy#userProfile', function() {
    var profile_body;

    before(function(done) {
        fs.readFile('test/data/example.json', 'utf8', function(err, data) {
            if (err) { return done(err); }
            profile_body = data;
            done();
        });
    });
    
  var strategy =  new BehanceStrategy({
      clientID: 'ABC123',
      clientSecret: 'secret'
    },
    function() {});
  
  // mock
  strategy._oauth2.get = function(url, accessToken, callback) {
    if (url != 'http://www.behance.net/v2/users/') { return callback(new Error('wrong url argument')); }
    if (accessToken != 'token') { return callback(new Error('wrong token argument')); }

    callback(null, profile_body, undefined);
  };
    
  describe('loading profile', function() {
    var profile;
    
    before(function(done) {
      strategy.userProfile('token', function(err, p) {
        if (err) { return done(err); }
        profile = p;
        done();
      });
    });
    
    it('should parse profile', function() {
      expect(profile.provider).to.equal('behance');
      
      expect(profile.id).to.equal(50001);
      expect(profile.displayName).to.equal('Matias Corea');
      expect(profile.name.familyName).to.equal('Corea');
      expect(profile.name.givenName).to.equal('Matias');
      
      expect(profile.emails).to.equal(undefined);

    });
    
    it('should set raw property', function() {
      expect(profile._raw).to.be.a('string');
    });
    
    it('should set json property', function() {
      expect(profile._json).to.be.an('object');
    });
  });
  
  describe('encountering an error', function() {
    var err, profile;
    
    before(function(done) {
      strategy.userProfile('wrong-token', function(e, p) {
        err = e;
        profile = p;
        done();
      });
    });
    
    it('should error', function() {
      expect(err).to.be.an.instanceOf(Error);
      expect(err.constructor.name).to.equal('InternalOAuthError');
      expect(err.message).to.equal('Failed to fetch user profile');
    });
    
    it('should not load profile', function() {
      expect(profile).to.be.undefined;
    });
  });
  
});
