var vows = require('vows');
var assert = require('assert');
var util = require('util');
var NetflixStrategy = require('passport-netflix/strategy');


vows.describe('NetflixStrategy').addBatch({
  
  'strategy': {
    topic: function() {
      return new NetflixStrategy({
        consumerKey: 'ABC123',
        consumerSecret: 'secret'
      },
      function() {});
    },
    
    'should be named netflix': function (strategy) {
      assert.equal(strategy.name, 'netflix');
    },
  },
  
  'strategy when loading user profile': {
    topic: function() {
      var strategy = new NetflixStrategy({
        consumerKey: 'ABC123',
        consumerSecret: 'secret'
      },
      function() {});
      
      // mock
      strategy._oauth.get = function(url, token, tokenSecret, callback) {
        var body = '<?xml version="1.0" standalone="yes"?> \
\
        <user> \
          <user_id>xxxxx.xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-</user_id> \
          <first_name>Jared</first_name> \
          <last_name>Hanson</last_name> \
          <nickname>JaredH</nickname> \
          <can_instant_watch>true</can_instant_watch> \
          <max_maturity_level> \
            <category scheme="http://api.netflix.com/categories/maturity_level" label="1000000" term="1000000"></category> \
          </max_maturity_level> \
          <preferred_formats> \
            <category scheme="http://api.netflix.com/categories/title_formats" label="DVD" term="DVD"></category> \
          </preferred_formats> \
          <link href="http://api.netflix.com/users/xxxxx.xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-/queues" rel="http://schemas.netflix.com/queues" title="queues"></link> \
          <link href="http://api.netflix.com/users/xxxxx.xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-/rental_history" rel="http://schemas.netflix.com/rental_history" title="rental history"></link> \
          <link href="http://api.netflix.com/users/xxxxx.xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-/recommendations" rel="http://schemas.netflix.com/recommendations" title="recommendations"></link> \
          <link href="http://api.netflix.com/users/xxxxx.xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-/title_states" rel="http://schemas.netflix.com/title_states" title="title states"></link> \
          <link href="http://api.netflix.com/users/xxxxx.xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-/ratings" rel="http://schemas.netflix.com/ratings" title="ratings"></link> \
          <link href="http://api.netflix.com/users/xxxxx.xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-/reviews" rel="http://schemas.netflix.com/reviews" title="reviews"></link> \
          <link href="http://api.netflix.com/users/xxxxx.xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-/at_home" rel="http://schemas.netflix.com/at_home" title="at home"></link> \
          <link href="http://api.netflix.com/users/xxxxx.xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-/feeds" rel="http://schemas.netflix.com/feeds" title="feeds"></link> \
        </user>';
        
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
        assert.equal(profile.provider, 'netflix');
        assert.equal(profile.id, 'xxxxx.xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-');
        assert.equal(profile.displayName, 'Jared Hanson');
        assert.equal(profile.name.familyName, 'Hanson');
        assert.equal(profile.name.givenName, 'Jared');
      },
      'should set raw property' : function(err, profile) {
        assert.isString(profile._raw);
      },
      'should set xml2js property' : function(err, profile) {
        assert.isObject(profile._xml2js);
        assert.strictEqual(profile._xml2json, profile._xml2js);
      },
    },
  },
  
  'strategy when loading user profile and encountering unexpected content': {
    topic: function() {
      var strategy = new NetflixStrategy({
        consumerKey: 'ABC123',
        consumerSecret: 'secret'
      },
      function() {});
      
      // mock
      strategy._oauth.get = function(url, token, tokenSecret, callback) {
        var body = '{}';
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
      
      'should error' : function(err, profile) {
        assert.isNotNull(err);
      },
      'should not load profile' : function(err, profile) {
        assert.isUndefined(profile);
      },
    },
  },
  
  'strategy when loading user profile and encountering an error': {
    topic: function() {
      var strategy = new NetflixStrategy({
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
