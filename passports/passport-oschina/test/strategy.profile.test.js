/* global describe, it, expect, before */
/* jshint expr: true */

var OSChinaStrategy = require('../lib/strategy');

describe('Strategy#userProfile', function() {
    
  describe('loading profile using custom URL', function() {
    var strategy =  new OSChinaStrategy({
        clientID: 'ABC123',
        clientSecret: 'secret',
        userProfileURL: 'https://oschina.corpDomain/action/openapi/user'
      },
      function() {});
  
    // mock
    strategy._oauth2.get = function(url, accessToken, callback) {
      if (url != 'https://oschina.corpDomain/action/openapi/user') { return callback(new Error('wrong url argument')); }
      if (accessToken != 'token') { return callback(new Error('wrong token argument')); }
    
      var body = '{ "id": "985", "name": "geminiyellow", "email": "geminiyellow@gmail.com", "gender": "male", "avatar" : "http://www.oschina.net/uploads/user/geminiyellow", "location" : "shanghai", "url": "http://home.oschina.net/geminiyellow" }';
  
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
      expect(profile.provider).to.equal('oschina');
      
      expect(profile.id).to.equal('985');
      expect(profile.name).to.equal('geminiyellow');
      expect(profile.email).to.equal('geminiyellow@gmail.com');
      expect(profile.gender).to.equal('male');
      expect(profile.location).to.equal('shanghai');
      expect(profile.url).to.equal('http://home.oschina.net/geminiyellow');
    });
    
    it('should set raw property', function() {
      expect(profile._raw).to.be.a('string');
    });
    
    it('should set json property', function() {
      expect(profile._json).to.be.an('object');
    });
  });
  
});