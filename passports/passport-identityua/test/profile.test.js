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
      expect(profile.id).to.equal('07c7a7c5-3c78-46c8-afc2-7341cefc7165');
      expect(profile.email).to.equal('example.user@ua.pt');
    });
  });
  
});
