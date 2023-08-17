var vows = require('vows');
var assert = require('assert');
var util = require('util');
var EveryplayStrategy = require('passport-everyplay/strategy');


vows.describe('EveryplayStrategy').addBatch({
  
  'strategy': {
    topic: function() {
      return new EveryplayStrategy({
        clientID: 'ABC123',
        clientSecret: 'secret'
      },
      function() {});
    },
    
    'should be named everyplay': function (strategy) {
      assert.equal(strategy.name, 'everyplay');
    }
  },
  
  'strategy when loading user profile': {
    topic: function() {
      var strategy = new EveryplayStrategy({
        clientID: 'ABC123',
        clientSecret: 'secret'
      },
      function() {});
      
      // mock
      strategy.get = function(url, accessToken, callback) {
        var body = '{ \
          "id": 1, \
          "hidden": false, \
          "avatar_url_small": "https://www.everyplay.com/assets/img/icon-default-avatar-small.png", \
          "avatar_url": "https://www.yammer.com/mugshot/75x75/2270139", \
          "cover_url": "https://www.everyplay.com/assets/img/icon-default-cover.jpeg", \
          "username": "Nomon", \
          "permalink": "nomon",\
          "created_at": "2013-01-06T09:31:01.037Z", \
          "games_count": 4, \
          "online": false, \
          "video_count": 116, \
          "followings_count": 32, \
          "followers_count": 118, \
          "permalink_url": "https://m.everyplay.com/nomon", \
          "uri": "https://api.everyplay.com/users/1", \
          "video_likes_count": 1, \
          "kind": "user", \
          "user_followed": false \
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
          strategy.userProfile('access-token', done);
        });
      },
      
      'should not error' : function(err, req) {
        assert.isNull(err);
      },
      'should load profile' : function(err, profile) {
        assert.equal(profile.provider, 'everyplay');
        assert.equal(profile.id, '1');
        assert.equal(profile.displayName, 'Nomon');
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
      var strategy = new EveryplayStrategy({
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
