var vows = require('vows');
var assert = require('assert');
var util = require('util');
var TripItStrategy = require('passport-tripit/strategy');


vows.describe('TripItStrategy').addBatch({
  
  'strategy': {
    topic: function() {
      return new TripItStrategy({
        consumerKey: 'ABC123',
        consumerSecret: 'secret'
      },
      function() {});
    },
    
    'should be named tripit': function (strategy) {
      assert.equal(strategy.name, 'tripit');
    },
  },
  
  'strategy when loading user profile': {
    topic: function() {
      var strategy = new TripItStrategy({
        consumerKey: 'ABC123',
        consumerSecret: 'secret'
      },
      function() {});
      
      // mock
      strategy._oauth.get = function(url, token, tokenSecret, callback) {
        var body = '{ \
            "timestamp": "1322517396", \
            "num_bytes": "1240", \
            "Profile": { \
                "@attributes": { \
                    "ref": "XXxxXxxXX-xXNx_XXNNNXx" \
                }, \
                "ProfileEmailAddresses": { \
                    "ProfileEmailAddress": [{ \
                        "address": "jaredhanson@example.com", \
                        "is_auto_import": "false", \
                        "is_confirmed": "true", \
                        "is_primary": "true" \
                    }, \
                    { \
                        "address": "jaredhanson@example.net", \
                        "is_auto_import": "false", \
                        "is_confirmed": "true", \
                        "is_primary": "false" \
                    }] \
                }, \
                "is_client": "true", \
                "is_pro": "false", \
                "screen_name": "jaredhanson", \
                "public_display_name": "Jared Hanson", \
                "profile_url": "people\/jaredhanson", \
                "home_city": "Berkeley, CA", \
                "photo_url": "http:\/\/static.tripit.com\/uploads\/images\/6\/6\/9\/669XXXXXXXXXXXXX.jpg", \
                "activity_feed_url": "http:\/\/www.tripit.com\/feed\/activities\/private\/XXXXXXXX-XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\/activities.atom", \
                "alerts_feed_url": "http:\/\/www.tripit.com\/feed\/alerts\/private\/XXXXXXXX-XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\/alerts.atom", \
                "ical_url": "webcal:\/\/www.tripit.com\/feed\/ical\/private\/XXXXXXXX-XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\/tripit.ics" \
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
        assert.equal(profile.provider, 'tripit');
        assert.equal(profile.id, 'XXxxXxxXX-xXNx_XXNNNXx');
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
      var strategy = new TripItStrategy({
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
