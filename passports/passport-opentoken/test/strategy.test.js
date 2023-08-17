/*global describe, it, expect, before */

var chai = require('chai');
var Strategy = require('../lib/passport-opentoken/strategy');

chai.use(require('chai-passport-strategy'));
global.expect = chai.expect;


describe('Strategy', function () {

  var strategy = new Strategy(
    {
      tokenName: 'mytoken'
    },
    function () { return 0; }
  );

  it('should be named opentoken', function () {
    expect(strategy.name).to.equal('opentoken');
  });

  it('should throw if constructed without a tokeName options', function () {
    expect(function () {
      var s = new Strategy(function () {
        return null;
      });
      return s;
    }).to.throw(TypeError, 'OpenToken strategy requires a tokenName options');
  });

  it('should throw if constructed without a verify callback', function () {
    expect(function () {
      var s = new Strategy();
      return s;
    }).to.throw(TypeError, 'OpenToken strategy requires a verify callback');
  });

  /*
  describe('handling a request', function() {
    var ok, request;
    
    before(function(done) {
      chai.passport(strategy)
        .pass(function() {
          ok = true;
          done();
        })
        .req(function(req) {
          request = req;
        })
        .authenticate();
    });
    
    it('should call pass', function() {
      expect(ok).to.be.true;
    });
    
    it('should leave req.user undefined', function() {
      expect(request.user).to.be.undefined;
    });

  });
  // */

});
