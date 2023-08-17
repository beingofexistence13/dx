/*global describe, it*/
var should = require('should');
var namely = require('..');

describe('passport-namely', function() {

  it('should report a version', function() {
    should.exist(namely.version);
    namely.version.should.be.type('string');
  });

  it('should export Strategy constructor directly from package', function() {
    namely.should.be.type('object');
    namely.Strategy.should.be.eql(namely.Strategy);
    namely.Strategy.should.be.type('function');
  });

});
