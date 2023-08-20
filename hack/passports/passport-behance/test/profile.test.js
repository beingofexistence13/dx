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
      expect(profile.id).to.equal(50001);
      expect(profile.displayName).to.equal('Matias Corea');
      expect(profile.name.familyName).to.equal('Corea');
      expect(profile.name.givenName).to.equal('Matias');
      
      expect(profile.emails).to.equal(undefined);
    });
  });
  
});
