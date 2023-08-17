var vows = require('vows');
var assert = require('assert');
var util = require('util');
var AssemblaStrategy = require('passport-assembla/strategy');


vows.describe('AssemblaStrategy').addBatch({
  
  'strategy': {
    topic: function() {
      return new AssemblaStrategy({
        clientID: 'ABC123',
        clientSecret: 'secret'
      },
      function() {});
    },
    
    'should be named assembla': function (strategy) {
      assert.equal(strategy.name, 'assembla');
    }
  },
  
  'strategy when loading user profile from api': {
    topic: function() {
      var strategy = new AssemblaStrategy({
        clientID: 'ABC123',
        clientSecret: 'secret'
      },
      function() {});
      
      // NOTE: This response is received if the user profile is requested from
      //       the following endpoint:
      //         https://api.assembla.com/v1/user
      
      // mock
      strategy._oauth2.get = function(url, accessToken, callback) {
        var body = '{"organization":"assembla", "name":"Maxi Perez", "id":"abcdefghijk"}';
        
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
          strategy.userProfile('access-token', done);
        });
      },
      
      'should not error' : function(err, req) {
        assert.isNull(err);
      },
      'should load profile' : function(err, profile) {
        assert.equal(profile.provider, 'assembla');
        assert.equal(profile.id, 'abcdefghijk');
        assert.equal(profile.company, 'assembla');
        assert.equal(profile.displayName, 'Maxi Perez');
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
      var strategy = new AssemblaStrategy({
        clientID: 'ABC123',
        clientSecret: 'secret'
      },
      function() {});
      
      // mock
      strategy._oauth2.get = function(url, accessToken, callback) {
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
          strategy.userProfile('access-token', done);
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
