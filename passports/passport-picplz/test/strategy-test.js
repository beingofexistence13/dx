var vows = require('vows');
var assert = require('assert');
var util = require('util');
var PicplzStrategy = require('passport-picplz/strategy');


vows.describe('PicplzStrategy').addBatch({
  
  'strategy': {
    topic: function() {
      return new PicplzStrategy({
        clientID: 'ABC123',
        clientSecret: 'secret'
      },
      function() {});
    },
    
    'should be named picplz': function (strategy) {
      assert.equal(strategy.name, 'picplz');
    },
  },
  
  'strategy when loading user profile': {
    topic: function() {
      var strategy = new PicplzStrategy({
        clientID: 'ABC123',
        clientSecret: 'secret'
      },
      function() {});
      
      // mock
      strategy._oauth2.get = function(url, accessToken, callback) {
        var body = '{ "result": "ok", "value": { "users": [ { "username": "waterbuffalo", "display_name": "Waterbuffalo", "following_count": 36, "follower_count": 139, "id": 1908, "icon": { "url": "http://a2.picplzthumbs.com/i/FwCNRNyPZJGlqJMyQXwM2wgQ_k4.png", "width": 100, "height": 100 } } ] } }';
        
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
        assert.equal(profile.provider, 'picplz');
        assert.equal(profile.id, '1908');
        assert.equal(profile.username, 'waterbuffalo');
        assert.equal(profile.displayName, 'Waterbuffalo');
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
      var strategy = new PicplzStrategy({
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
      },
    },
  },
  
}).export(module);
