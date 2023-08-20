/* global describe, it, expect, before */
/* jshint expr: true */

var fs = require('fs')
  , parse = require('../lib/profile').parse;


describe('profile.parse', function() {
    
  describe('example profile', function() {
    var profile;
    
    before(function(done) {
      fs.readFile('test/data/example.json', 'utf8', function(err, data) {
        if (err) { return done(err); }
        profile = parse(data);
        done();
      });
    });
    
    it('should parse profile', function() {
      expect(profile.id).to.equal('1');
      expect(profile.username).to.equal('alice');
      expect(profile.displayName).to.equal('alice cooper');
      expect(profile.profileUrl).to.equal('https://api.digitalocean.com/v2/sizes');
      expect(profile.emails).to.have.length(1);
      expect(profile.emails[0].value).to.equal('droplet@digitalocean.com');
    });
  });
  
  describe('example profile with null email', function() {
    var profile;
    
    before(function(done) {
      fs.readFile('test/data/example-null-email.json', 'utf8', function(err, data) {
        if (err) { return done(err); }
        profile = parse(data);
        done();
      });
    });
    
    it('should parse profile', function() {
      expect(profile.id).to.equal('1');
      expect(profile.username).to.equal('alice');
      expect(profile.displayName).to.equal('alice cooper');
      expect(profile.profileUrl).to.equal('https://api.digitalocean.com/v2/sizes');
      expect(profile.emails).to.be.undefined;
    });
  });
  
});
