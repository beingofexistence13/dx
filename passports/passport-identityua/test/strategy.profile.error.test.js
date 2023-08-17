var IdentityUaStrategy = require('../lib/strategy');


describe('Strategy#userProfile', function() {
    
  describe('handling malformed responses', function() {
    var strategy = new IdentityUaStrategy({
        consumerKey: 'ABC123',
        consumerSecret: 'secret'
      },
      function() {});
    
      // mock
      strategy._oauth.get = function(url, token, tokenSecret, callback) {
        if (token != 'token') { return callback(new Error('incorrect token argument')); }
      
        var body = 'Hello, world.';
        callback(null, body, undefined);
      }
    
    describe('loading profile', function() {
      var err, profile;
    
      before(function(done) {
        strategy.userProfile('token', 'token-secret', { iupi: '07c7a7c5-3c78-46c8-afc2-7341cefc7165' }, function(e, p) {
          err = e;
          profile = p;
          done();
        });
      });
    
      it('should error', function() {
        expect(err).to.be.an.instanceOf(Error);
        expect(err.message).to.equal('Failed to parse user profile');
      });
    });
  });
  
});
