'use strict';

var crypto = require('crypto');
var CleverCloudStrategy = require('../lib/strategy');

describe('CleverCloudStrategy', function () {
  var USER_EMAIL = 'test@test.com';
  var USER_ID = 10;
  var USERS = {};
  var SSO_SALT = 'secret';
  var TOKEN = '5557cab6315fce75f5dab448511219579096dea2';

  USERS[USER_EMAIL]  = {
    id: USER_ID,
    plop: true
  };

  describe('with verify callback that accepts params', function () {

    function verify(id, email, done) {
      if (USERS.hasOwnProperty(email)) {
        return done(null, USERS[email], {
          message: 'Hello'
        });
      }

      return done(null, false);
    }

    var strategy = new CleverCloudStrategy({
      sso_salt: SSO_SALT
    }, verify);

    describe('handling an authorized callback request', function () {
      var request, user, info;

      before(function (done) {
        chai.passport.use(strategy)
          .success(function (u, i) {
            user = u;
            info = i;
            done();
          })
          .req(function (req) {
            request = req;
            req.body = {};

            var shasum = crypto.createHash('sha1');
            var ID = 'abcdefghijklmnop';
            var reqTime = now();
            shasum.update(ID + ':' + SSO_SALT + ':' + reqTime);

            req.body['id'] = ID;
            req.body['timestamp'] = reqTime;
            req.body['token'] = shasum.digest('hex');
            req.body['email'] = USER_EMAIL;
          })
          .authenticate();
      });

      it('should supply user', function () {
        expect(user).to.be.an.object;
        expect(user.id).to.equal(USER_ID);
      });

      it('should supply info', function () {
        expect(info).to.be.an.object;
        expect(info.message).to.equal('Hello');
      });

      it('should handle timestamp as a string and in seconds instead of ms', function (done) {
        chai.passport.use(strategy)
          .success(function (u, i) {
            done();
          })
          .req(function (req) {
            request = req;
            req.body = {};

            var shasum = crypto.createHash('sha1');
            var ID = 'abcdefghijklmnop';
            var reqTime = now();
            shasum.update(ID + ':' + SSO_SALT + ':' + reqTime);

            req.body['id'] = ID;
            req.body['timestamp'] = reqTime;
            req.body['token'] = shasum.digest('hex');
            req.body['email'] = USER_EMAIL;

          })
          .authenticate();
      });
    });

  });

});

function now() {
  return Math.round((Date.now() - 100) / 1000);
}
