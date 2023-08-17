var vows = require('vows');
var assert = require('assert');
var util = require('util');
var url = require('url');
var DeskcomStrategy = require('passport-deskcom/strategy');

vows.describe('DeskcomStrategy').addBatch({
    'strategy': {
        topic: function() {
            return new DeskcomStrategy({
                    consumerKey: 'desk-com-test-key',
                    consumerSecret: 'desk-com-test-secret',
                    site: 'https://example.desk.com/'
                },
                function() {});
        },
        'should be name deskcom' : function (strategy) {
            assert.equal(strategy.name, 'deskcom');
        }
    },

    'strategy when loading user profile': {
        topic: function() {
            var strategy = new DeskcomStrategy({
                    consumerKey: 'desk-com-test-key',
                    consumerSecret: 'desk-com-test-secret',
                    site: 'https://example.desk.com/'
                },
                function() {});

            // mock

            strategy._oauth.get = function(url, accessToken, accessTokenSecret, callback) {
                var testData = {
                    "user": {
                        "id":22494486,
                        "name":"Misato Takahashi",
                        "name_public":"Misato Takahashi",
                        "email":"misato_takahashi@spotlig.ht",
                        "created_at":"2012-03-13T14:52:52+09:00",
                        "updated_at":"2013-01-15T15:55:42+09:00",
                        "user_level":"siteadmin_billing",
                        "login_count":333,
                        "time_zone":"Seoul",
                        "last_login_at":"2013-01-15T15:54:29+09:00",
                        "current_login_at":"2013-01-15T15:55:42+09:00"
                    },
                    "token" : accessToken,
                    "tokenSecret": accessTokenSecret
                }
                var body = JSON.stringify(testData);

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
                    strategy.userProfile('desk-com-access-token1', 'desk-com-access-token-secret1', {},  done);
                });
            },

            'should not error' : function(err, req) {
                assert.isNull(err);
            },
            'should load profile' : function(err, profile) {
                assert.equal(profile.provider, 'deskcom');
                assert.equal(profile.id, '22494486');
                assert.equal(profile.name, 'Misato Takahashi');
                assert.equal(profile.name_public, 'Misato Takahashi');
                assert.equal(profile.email, 'misato_takahashi@spotlig.ht');
                assert.equal(profile.created_at, '2012-03-13T14:52:52+09:00');
                assert.equal(profile.updated_at, '2013-01-15T15:55:42+09:00');
                assert.equal(profile.user_level, 'siteadmin_billing');
                assert.equal(profile.login_count, 333);
                assert.equal(profile.last_login_at, '2013-01-15T15:54:29+09:00');
                assert.equal(profile.token, 'desk-com-access-token1');
                assert.equal(profile.tokenSecret, 'desk-com-access-token-secret1');
            },
            'should set raw property' : function(err, profile) {
                assert.isString(profile._raw);
            },
            'should set json property' : function(err, profile) {
                assert.isObject(profile._json);
            }
        }
    },

    'strategy when loading user profile and encountering an error': {
        topic: function() {
            var strategy = new DeskcomStrategy({
                    consumerKey: 'desk-com-test-key',
                    consumerSecret: 'desk-com-test-secret',
                    site: 'https://example.desk.com/'
                },
                function() {});

            // mock
            strategy._oauth.getProtectedResource = function(url, accessToken, callback) {
                callback(new Error('something-went-wrong'));
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
                    strategy.userProfile('access-token', 'access-token-secret', {},  done);
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
    }
}).export(module);
