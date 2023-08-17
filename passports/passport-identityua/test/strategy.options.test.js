var IdentityUaStrategy = require('../lib/strategy');


describe('Strategy#userProfile', function() {
    
  describe('with profile URL option', function() {
    var strategy = new IdentityUaStrategy({
        consumerKey: 'ABC123',
        consumerSecret: 'secret'
      },
      function() {});
    
      // mock
      strategy._oauth.get = function(url, token, tokenSecret, callback) {
        if (token != 'token') { return callback(new Error('incorrect token argument')); }
      
        var body = '{"iupi": "07c7a7c5-3c78-46c8-afc2-7341cefc7165","email": "example.user@ua.pt"}';
        callback(null, body, {});
      };
    
    describe('loading profile', function() {
      var profile;
    
      before(function(done) {
        strategy.userProfile('token', 'token-secret', { iupi: '07c7a7c5-3c78-46c8-afc2-7341cefc7165', email: 'example.user@ua.pt' }, function(err, p) {
          if (err) { return done(err); }
          profile = p;
          done();
        });
      });
    
      it('should parse profile', function() {
        expect(profile.provider).to.equal('identityua');
        expect(profile.iupi, '07c7a7c5-3c78-46c8-afc2-7341cefc7165');
        expect(profile.email, 'example.user@ua.pt');
      });
    
      it('should set raw property', function() {
        expect(profile._raw).to.be.a('string');
      });
    
      it('should set json property', function() {
        expect(profile._json).to.be.an('object');
      });
    });
  });
});
