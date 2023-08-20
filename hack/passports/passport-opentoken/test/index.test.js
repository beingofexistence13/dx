/*global describe, it, expect */
var chai     = require('chai');
var strategy = require('..');

chai.use(require('chai-passport-strategy'));
global.expect = chai.expect;

describe('passport-anonymous', function () {

  it('should report a version', function () {
    expect(strategy.version).to.be.a('string');
  });

  it('should export Strategy constructor directly from package', function () {
    expect(strategy).to.be.a('function');
    expect(strategy).to.equal(strategy.Strategy);
  });

  it('should export Strategy constructor', function () {
    expect(strategy.Strategy).to.be.a('function');
  });

});
