var vows = require('vows');
var assert = require('assert');
var util = require('util');
var SmugMugStrategy = require('passport-smugmug/strategy');


vows.describe('SmugMugStrategy').addBatch({
  
  'strategy': {
    topic: function() {
      return new SmugMugStrategy({
        consumerKey: 'ABC123',
        consumerSecret: 'secret'
      },
      function() {});
    },
    
    'should be named smugmug': function (strategy) {
      assert.equal(strategy.name, 'smugmug');
    },
  },
  
  'strategy when loading user profile': {
    topic: function() {
      var strategy = new SmugMugStrategy({
        consumerKey: 'ABC123',
        consumerSecret: 'secret'
      },
      function() {});
      
      // mock
      strategy._oauth.get = function(url, token, tokenSecret, callback) {
        var body = '{ \
          "stat": "ok", \
          "method": "smugmug.auth.checkAccessToken", \
          "Auth": { \
            "Token": { \
              "id": "d3efea45091f72e6g2d7b23d2aa2e459", \
              "Secret": "be5gbe23bb92dcbb826f8b2cc3383dc88a9fbc5397ba123l53280b430f520", \
              "Access": "Full", \
              "Permissions": "Modify" \
            }, \
            "User": { \
              "id": 1234, \
              "AccountStatus": "Active", \
              "AccountType": "Pro", \
              "FileSizeLimit": 25165824, \
              "Name": "Fred Nerk", \
              "NickName": "fred", \
              "SmugVault": true, \
              "URL": "http://fred.smugmug.com" \
            } \
          } \
        }';
        
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
        assert.equal(profile.provider, 'smugmug');
        assert.equal(profile.id, '1234');
        assert.equal(profile.displayName, 'Fred Nerk');
      },
      'should set raw property' : function(err, profile) {
        assert.isString(profile._raw);
      },
      'should set json property' : function(err, profile) {
        assert.isObject(profile._json);
      },
    },
  },
  
  'strategy when loading user profile and encountering an error': {
    topic: function() {
      var strategy = new SmugMugStrategy({
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
      },
    },
  },

}).export(module);
