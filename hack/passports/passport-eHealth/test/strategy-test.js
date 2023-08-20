var vows = require('vows');
var assert = require('assert');
var util = require('util');
var eHealthStrategy = require('passport-eHealth/strategy');


vows.describe('eHealthStrategy').addBatch({
  
  'strategy': {
    topic: function() {
      return new eHealthStrategy({
        clientID: 'ABC123',
        clientSecret: 'secret'
      },
      function() {});
    },
    
    'should be named eHealth': function (strategy) {
      assert.equal(strategy.name, 'eHealth');
    },
  },
  
  'strategy when loading user profile': {
    topic: function() {
      var strategy = new eHealthStrategy({
        clientID: 'ABC123',
        clientSecret: 'secret'
      },
      function() {});
      
      // mock
      strategy._oauth2.get = function(url, accessToken, callback) {
        var body = '{"expires_at": "2012-01-25T18:30:08Z","attributes": ["user"],"user_id": 5555, "last_name": "Doe","email_address": "john.doe@example.com","first_name": "John"}';
        
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
        assert.equal(profile.provider, 'eHealth');
        assert.equal(profile.id, '5555');
        assert.equal(profile.displayName, 'John Doe');
        assert.equal(profile.name.familyName, 'Doe');
        assert.equal(profile.name.givenName, 'John');
        assert.equal(profile.email, 'john.doe@example.com');
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
      var strategy = new eHealthStrategy({
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
      'should not load profile' : function(err, profile) {
        assert.isUndefined(profile);
      },
    },
  },
  
}).export(module);
