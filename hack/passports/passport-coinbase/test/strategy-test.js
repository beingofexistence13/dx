var vows = require('vows');
var assert = require('assert');
var util = require('util');
var CoinbaseStrategy = require('passport-coinbase/strategy');


vows.describe('CoinbaseStrategy').addBatch({
  
  'strategy': {
    topic: function() {
      return new CoinbaseStrategy({
        clientID: 'ABC123',
        clientSecret: 'secret'
      },
      function() {});
    },
    
    'should be named coinbase': function (strategy) {
      assert.equal(strategy.name, 'coinbase');
    },
  },
  
  'strategy with scopes': {
    topic: function() {
      return new CoinbaseStrategy({
        clientID: 'ABC123',
        clientSecret: 'secret',
        scope: ['user', 'transactions']
      },
      function() {});
    },
    
    'should have correct scopes': function (strategy) {
      assert.deepEqual(strategy._scope, ['user', 'transactions']);
    },

    'should have space as a scope separator': function (strategy) {
      assert.equal(strategy._scopeSeparator, ' ');
    },
  },

  'strategy when loading user profile': {
    topic: function() {
      var strategy = new CoinbaseStrategy({
        clientID: 'ABC123',
        clientSecret: 'secret',
        scope: ['user']
      },
      function() {});
      
      // mock
      strategy._oauth2.get = function(url, accessToken, callback) {
        if (url == 'https://coinbase.com/api/v1/users') {
          var body = '{ "users": [{ "user": { "id": "mycoinbaseuserid", "name": "monalisa coincat", "email": "monalisa@coinvest.io" } }] }';
          callback(null, body, undefined);
        } else {
          callback(new Error('Incorrect user profile URL'));
        }
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
        assert.equal(profile.provider, 'coinbase');
        assert.equal(profile.id, 'mycoinbaseuserid');
        assert.equal(profile.displayName, 'monalisa coincat');
        assert.lengthOf(profile.emails, 1);
        assert.equal(profile.emails[0].value, 'monalisa@coinvest.io');
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
      var strategy = new CoinbaseStrategy({
        clientID: 'ABC123',
        clientSecret: 'secret',
        scope: ['user']
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
      },
    },
  },
}).export(module);
