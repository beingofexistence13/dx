'use strict';

var CleverCloudStrategy = require('../');

describe('CleverCloudStrategy', function () {

  var strategy = new CleverCloudStrategy({
    sso_salt: 'ok'
  }, function () {});

  it('should be named clevercloud', function () {
    expect(strategy.name).to.equal('clevercloud');
  });

  it('should throw if constructed without a verify callback', function () {
    expect(function () {
      new CleverCloudStrategy({
        sso_salt: 'secret'
      });
    }).to.throw(TypeError, 'CleverCloudStrategy requires a verify callback');
  });

  it('should throw if constructed without a sso_salt option', function () {
    expect(function () {
      new CleverCloudStrategy({}, function () {});
    }).to.throw(TypeError, 'CleverCloudStrategy requires a sso_salt option');
  });

});
