/* global describe, it, expect, before */
/* jshint expr: true */

var DigitalOceanStrategy = require('../lib/strategy');


describe('Strategy#userProfile', function() {
    
  describe('loading profile using custom URL', function() {
    var strategy =  new DigitalOceanStrategy({
        clientID: 'ABC123',
        clientSecret: 'secret',
        userProfileURL: 'https://github.corpDomain/api/v3/user'
      },
      function() {});
  
    // mock
    strategy._oauth2.get = function(url, accessToken, callback) {
      if (url != 'https://github.corpDomain/api/v3/user') { return callback(new Error('wrong url argument')); }
      if (accessToken != 'token') { return callback(new Error('wrong token argument')); }
    
      var body = '{ "login": "alice", "id": 1, "name": "alice cooper", "email": "droplet@digitalocean.com", "html_url": "https://api.digitalocean.com/v2/sizes" }';
  
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
      expect(profile.provider).to.equal('digitalocean');
      
      expect(profile.id).to.equal('1');
      expect(profile.username).to.equal('alice');
      expect(profile.displayName).to.equal('alice cooper');
      expect(profile.profileUrl).to.equal('https://api.digitalocean.com/v2/sizes');
      expect(profile.emails).to.have.length(1);
      expect(profile.emails[0].value).to.equal('droplet@digitalocean.com');
    });
    
    it('should set raw property', function() {
      expect(profile._raw).to.be.a('string');
    });
    
    it('should set json property', function() {
      expect(profile._json).to.be.an('object');
    });
  });
  
});
