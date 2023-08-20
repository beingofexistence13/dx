var vows = require('vows');
var assert = require('assert');
var util = require('util');
var OdeskStrategy = require('./../lib/passport-odesk').Strategy;

vows.describe('OdeskStrategy').addBatch({

  'strategy': {
    topic: function() {
      return new OdeskStrategy({
        consumerKey: 'ABC123',
        consumerSecret: 'secret'
      },
      function() {});
    },

    'should be named odesk': function (strategy) {
      assert.equal(strategy.name, 'odesk');
    }
  },

    'strategy user authorization params': {
        topic: function() {
            return new OdeskStrategy({
                    consumerKey: 'ABC123',
                    consumerSecret: 'secret'
                },
                function() {});
        },
        'should return empty object when parsing invalid options': function (strategy) {
            var params = strategy.userAuthorizationParams({ foo: 'bar' });
            assert.lengthOf(Object.keys(params), 0);
        }
    },

  'strategy when loading user profile': {
    topic: function() {
      var strategy = new OdeskStrategy({
        consumerKey: 'ABC123',
        consumerSecret: 'secret'
      },
      function() {});

      // mock
      strategy._oauth.get = function(url, token, tokenSecret, callback) {
          var body = '{' +
              '"server_time":"1367492929", ' +
              '"auth_user": ' +
              '          { ' +
              '              "first_name":"John", ' +
              '              "last_name":"Doe", ' +
              '              "uid":"John_Doe", ' +
              '              "mail":"JohnDoe@odesk.com", ' +
              '              "messenger_id":"", ' +
              '              "messenger_type":"", ' +
              '              "timezone":"Europe\/Klin", ' +
              '              "timezone_offset":"14400" ' +
              '         }, ' +
              '"info": ' +
              '          { ' +
              '              "portrait_50_img":"https:\/\/odesk-prod-portraits.s3.amazonaws.com\/Users:romanov_klin:PortraitUrl_50?AWSAccessKeyId=1XVAX3FNQZAFC9GJCFR2&Expires=2147483647&Signature=P7XYYyZr9c%2Bvv%2F25voKeTg92eFc%3D", ' +
              '              "ref":"3603850", ' +
              '              "portrait_32_img":"https:\/\/odesk-prod-portraits.s3.amazonaws.com\/Users:romanov_klin:PortraitUrl_32?AWSAccessKeyId=1XVAX3FNQZAFC9GJCFR2&Expires=2147483647&Signature=IZROy3xeRt260AJ3oPp3M9nJP8g%3D",' +
              '              "has_agency":"0",' +
              '              "portrait_100_img":"https:\/\/odesk-prod-portraits.s3.amazonaws.com\/Users:romanov_klin:PortraitUrl_100?AWSAccessKeyId=1XVAX3FNQZAFC9GJCFR2&Expires=2147483647&Signature=lOzpO2SN%2BEqwB30YsBeHz1wHMsk%3D", ' +
              '              "company_url":"http://example.com", ' +
              '              "capacity":{"provider":"yes","buyer":"yes","affiliate_manager":"no"}, ' +
              '              "location":{"city":"Klin","state":"","country":"Russia"}, ' +
              '              "profile_url":"https:\/\/www.odesk.com\/users\/~johnDoe"} ' +
              '          } ' +
              '';

          callback(null, body, undefined);
      }

      return strategy;
    },

    'when told to load user profile': {
      topic: function(strategy) {
        var self = this;
        function done(err, profile) {
          self.callback(err, profile);
        }

        process.nextTick(function () {
          strategy.userProfile('token', 'token-secret', {}, done);
        });
      },

      'should not error' : function(err, req) {
        assert.isNull(err);
      },
      'should load profile' : function(err, profile) {
        assert.equal(profile.provider, 'odesk');
        assert.equal(profile.id,'John_Doe');
        assert.equal(profile.displayName, 'John Doe');
        assert.notStrictEqual(profile.name, {"familyName": 'Doe', "givenName": 'John'});
        assert.equal(profile.img, 'https://odesk-prod-portraits.s3.amazonaws.com/Users:romanov_klin:PortraitUrl_50?AWSAccessKeyId=1XVAX3FNQZAFC9GJCFR2&Expires=2147483647&Signature=P7XYYyZr9c%2Bvv%2F25voKeTg92eFc%3D');
        assert.equal(profile.country, 'Russia');
        assert.equal(profile.profile, 'https://www.odesk.com/users/~johnDoe');
        assert.notStrictEqual(profile.emails, [{"value":"JohnDoe@odesk.com",type:"work"}]);
        assert.equal(profile.timezone, 'Europe/Klin');
        assert.equal(profile.timezone_offset, '14400');
        assert.notStrictEqual(profile.location, {"city":"Klin","state":"","country":"Russia"});
        assert.equal(profile.company_url, 'http://example.com');
      }
    }
  },

  'strategy when loading user profile and encountering an error': {
    topic: function() {
      var strategy = new OdeskStrategy({
        consumerKey: 'ABC123',
        consumerSecret: 'secret'
      },
      function() {});

      // mock
      strategy._oauth.get = function(url, token, tokenSecret, callback) {
        callback(new Error('something went wrong'));
      }

      return strategy;
    },

    'when told to load user profile': {
      topic: function(strategy) {
        var self = this;
        function done(err, profile) {
          self.callback(err, profile);
        }

        process.nextTick(function () {
          strategy.userProfile('token', 'token-secret', {}, done);
        });
      },

      'should error' : function(err, req) {
        assert.isNotNull(err);
      },
      'should wrap error in InternalOAuthError' : function(err, req) {
        assert.equal(err.constructor.name, 'InternalOAuthError');
      },
      'should not load profile' : function(err, profile) {
        assert.isUndefined(profile);
      }
    }
  },
  'strategy handling a request that has been denied': {
    topic: function() {
      var strategy = new OdeskStrategy({
          consumerKey: 'ABC123',
          consumerSecret: 'secret'
        },
        function() {}
      );
      return strategy;
    },

    'after augmenting with actions': {
      topic: function(strategy) {
        var self = this;
        var req = {};
        strategy.success = function(user) {
          self.callback(new Error('should-not-be-called'));
        }
        strategy.fail = function() {
          self.callback(null, req);
        }

        req.query = {};
        req.query.denied = 'token';
        process.nextTick(function () {
          strategy.authenticate(req);
        });
      },

      'should not call success' : function(err, req) {
        assert.isNull(err);
      },
      'should call fail' : function(err, req) {
        assert.isNotNull(req);
      }
    }
  },
    'strategy when loading user profile without extended info': {
        topic: function() {
            var strategy = new OdeskStrategy({
                    consumerKey: 'ABC123',
                    consumerSecret: 'secret',
                    skipExtendedUserProfile: true
                },
                function() {});

            // mock
            strategy._oauth.get = function(url, token, tokenSecret, callback) {
                var body = '{' +
                    '"server_time":"1367492929", ' +
                    '"auth_user": ' +
                    '          { ' +
                    '              "first_name":"John", ' +
                    '              "last_name":"Doe", ' +
                    '              "uid":"John_Doe", ' +
                    '              "mail":"JohnDoe@odesk.com", ' +
                    '              "messenger_id":"", ' +
                    '              "messenger_type":"", ' +
                    '              "timezone":"Europe\/Klin", ' +
                    '              "timezone_offset":"14400" ' +
                    '         }, ' +
                    '"info": ' +
                    '          { ' +
                    '              "portrait_50_img":"https:\/\/odesk-prod-portraits.s3.amazonaws.com\/Users:romanov_klin:PortraitUrl_50?AWSAccessKeyId=1XVAX3FNQZAFC9GJCFR2&Expires=2147483647&Signature=P7XYYyZr9c%2Bvv%2F25voKeTg92eFc%3D", ' +
                    '              "ref":"3603850", ' +
                    '              "portrait_32_img":"https:\/\/odesk-prod-portraits.s3.amazonaws.com\/Users:romanov_klin:PortraitUrl_32?AWSAccessKeyId=1XVAX3FNQZAFC9GJCFR2&Expires=2147483647&Signature=IZROy3xeRt260AJ3oPp3M9nJP8g%3D",' +
                    '              "has_agency":"0",' +
                    '              "portrait_100_img":"https:\/\/odesk-prod-portraits.s3.amazonaws.com\/Users:romanov_klin:PortraitUrl_100?AWSAccessKeyId=1XVAX3FNQZAFC9GJCFR2&Expires=2147483647&Signature=lOzpO2SN%2BEqwB30YsBeHz1wHMsk%3D", ' +
                    '              "company_url":"http://example.com", ' +
                    '              "capacity":{"provider":"yes","buyer":"yes","affiliate_manager":"no"}, ' +
                    '              "location":{"city":"Klin","state":"","country":"Russia"}, ' +
                    '              "profile_url":"https:\/\/www.odesk.com\/users\/~johnDoe"} ' +
                    '          } ' +
                    '';


                throw new Error('OAuth request should not be issued when extended user profile is disabled');
            }

            return strategy;
        },

        'when told to load user profile': {
            topic: function(strategy) {
                var self = this;

                function done(err, profile) {
                    self.callback(err, profile);
                }

                process.nextTick(function(){
                    strategy.userProfile('token', 'token-secret', {"id":"John_Doe","displayName":"John Doe"}, done);
                });
            },

            'should load profile' : function(err, profile) {
                assert.equal(profile.provider, 'odesk');
                assert.equal(profile.id, 'John_Doe');
                assert.equal(profile.displayName, 'John Doe');
            },
            'should not error' : function(err, req) {
                assert.isNull(err);
            }
        }
    }
}).export(module);
