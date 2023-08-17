var vows = require('vows');
var assert = require('assert');
var util = require('util');
var VimeoStrategy = require('passport-vimeo/strategy');


vows.describe('VimeoStrategy').addBatch({
  
  'strategy': {
    topic: function() {
      return new VimeoStrategy({
        consumerKey: 'ABC123',
        consumerSecret: 'secret'
      },
      function() {});
    },
    
    'should be named meetup': function (strategy) {
      assert.equal(strategy.name, 'vimeo');
    },
  },
  
  'strategy when loading user profile': {
    topic: function() {
      var strategy = new VimeoStrategy({
        consumerKey: 'ABC123',
        consumerSecret: 'secret'
      },
      function() {});
      
      // mock
      strategy._oauth.get = function(url, token, tokenSecret, callback) {
        var body = '{ "person": { \
          "created_on":"2006-02-13 11:27:25", \
          "id":"101193", \
          "is_plus":"1", \
          "is_staff":"1", \
          "username":"brad", \
          "display_name":"Brad Dougherty", \
          "location":"Rochester, \
           NY", \
          "url":"http:\/\/braddougherty.us", \
          "bio":"BRAD!", \
          "number_of_contacts":"56", \
          "number_of_uploads":"5", \
          "number_of_likes":"122", \
          "number_of_videos":"12", \
          "number_of_videos_appears_in":"7", \
          "profileurl":"http:\/\/www.vimeo.com\/brad", \
          "videosurl":"http:\/\/www.vimeo.com\/brad\/videos" \
        } }';
        
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
        assert.equal(profile.provider, 'vimeo');
        assert.equal(profile.id, '101193');
        assert.equal(profile.username, 'brad');
        assert.equal(profile.displayName, 'Brad Dougherty');
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
      var strategy = new VimeoStrategy({
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
