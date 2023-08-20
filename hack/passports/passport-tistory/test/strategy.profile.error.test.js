/* global describe, it, expect, before */
/* jshint expr: true */

var FoursqaureStrategy = require('../lib/strategy');


describe('Strategy#userProfile', function() {

  describe('handling API errors', function() {
    var strategy =  new FoursqaureStrategy({
          clientID: 'ABC123',
          clientSecret: 'secret'
        },
        function() {});

    // mock
    strategy._oauth2.get = function(url, accessToken, callback) {
      if (url != 'https://www.tistory.com/apis/blog/info?output=json') { return callback(new Error('wrong url argument')); }
      if (accessToken != 'token') { return callback(new Error('wrong token argument')); }

      var body = '{"tistory":{"status":"404","error_message":"access_token \\uc774 \\uc720\\ud6a8\\ud558\\uc9c0 \\uc54a\\uc2b5\\ub2c8\\ub2e4. []"}}';
//      var body = '{"meta":{"code":401,"errorType":"invalid_auth","errorDetail":"OAuth token invalid or revoked."},"response":{}}';

      callback({ statusCode: 401, data: body });
    };

    var err, profile;
    before(function(done) {
      strategy.userProfile('token', function(e, p) {
        err = e;
        profile = p;
        done();
      });
    });

    it('should error', function() {
      expect(err).to.be.an.instanceOf(Error);
      expect(err.constructor.name).to.equal('APIError');
      expect(err.message).to.equal('OAuth token invalid or revoked.');
      expect(err.type).to.equal('invalid_auth');
      expect(err.code).to.equal(401);
    });
  });

  describe('handling malformed responses', function() {
    var strategy =  new FoursqaureStrategy({
          clientID: 'ABC123',
          clientSecret: 'secret'
        },
        function() {});

    // mock
    strategy._oauth2.get = function(url, accessToken, callback) {
      if (url != 'https://www.tistory.com/apis/blog/info?output=json') { return callback(new Error('wrong url argument')); }
      if (accessToken != 'token') { return callback(new Error('wrong token argument')); }

      var body = 'Hello, world.';
      callback(null, body, undefined);
    };

    var err, profile;
    before(function(done) {
      strategy.userProfile('token', function(e, p) {
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