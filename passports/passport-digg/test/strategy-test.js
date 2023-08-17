var vows = require('vows');
var assert = require('assert');
var util = require('util');
var DiggStrategy = require('passport-digg/strategy');


vows.describe('DiggStrategy').addBatch({
  
  'strategy': {
    topic: function() {
      return new DiggStrategy({
        consumerKey: 'ABC123',
        consumerSecret: 'secret'
      },
      function() {});
    },
    
    'should be named digg': function (strategy) {
      assert.equal(strategy.name, 'digg');
    },
  },
  
  'strategy when loading user profile': {
    topic: function() {
      var strategy = new DiggStrategy({
        consumerKey: 'ABC123',
        consumerSecret: 'secret'
      },
      function() {});
      
      // mock
      strategy._oauth.get = function(url, token, tokenSecret, callback) {
        var body = '{ \
            "count": 0, \
            "users": {}, \
            "title": "Info for calling user", \
            "timestamp": 1322540508, \
            "uri": "http://services.digg.com/2.0/user.getInfo", \
            "cursor": "", \
            "version": "2.0", \
            "authorized": "0", \
            "data": "users", \
            "method": "user.getInfo", \
            "user": { \
                "username": "jaredhanson", \
                "about": "", \
                "user_id": "112497", \
                "name": "Jared Hanson", \
                "icons": [ \
                    "http://cdn3.diggstatic.com/user/112497/c.png", \
                    "http://cdn3.diggstatic.com/user/112497/h.png", \
                    "http://cdn3.diggstatic.com/user/112497/m.png", \
                    "http://cdn2.diggstatic.com/user/112497/l.png", \
                    "http://cdn2.diggstatic.com/user/112497/p.png", \
                    "http://cdn2.diggstatic.com/user/112497/s.png", \
                    "http://cdn2.diggstatic.com/user/112497/r.png" \
                ], \
                "gender": "3", \
                "diggs": 2, \
                "comments": 0, \
                "followers": 0, \
                "location": "Berkeley, CA", \
                "following": 0, \
                "submissions": 2, \
                "icon": "http://cdn2.diggstatic.com/user/112497/p.png" \
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
        assert.equal(profile.provider, 'digg');
        assert.equal(profile.id, '112497');
        assert.equal(profile.username, 'jaredhanson');
        assert.equal(profile.displayName, 'Jared Hanson');
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
      var strategy = new DiggStrategy({
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
