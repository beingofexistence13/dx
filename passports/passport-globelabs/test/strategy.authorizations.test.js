var chai = require('chai')
  , GlobelabsStrategy = require('../lib/strategy');

describe('Strategy', function() {
  var strategy = new GlobelabsStrategy({
    appId: '1234',
    appSecret: 'secret'
  }, function() {});

  it('should be named globelabs', function() {
    expect(strategy.name).to.equal('globelabs');
  });

  describe('handling a request to be redirected', function() {
    var url;

    before(function(done) {
      chai.passport.use(strategy)
        .redirect(function(u) {
          url = u;
          done();
        })
        .req(function(req) {
        })
        .authenticate();
    });

    it('should be redirected', function() {
      expect(url).to.equal('https://developer.globelabs.com.ph/dialog/oauth?app_id=1234&response_type=code&redirect_uri=&client_id=1234');
    });
  });
});
