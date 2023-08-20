var vows = require('vows');
var assert = require('assert');
var util = require('util');
var GowallaStrategy = require('passport-gowalla/strategy');


vows.describe('GowallaStrategy').addBatch({
  
  'strategy': {
    topic: function() {
      return new GowallaStrategy({
        clientID: 'ABC123',
        clientSecret: 'secret'
      },
      function() {});
    },
    
    'should be named gowalla': function (strategy) {
      assert.equal(strategy.name, 'gowalla');
    },
  },
  
  'strategy when loading user profile': {
    topic: function() {
      var strategy = new GowallaStrategy({
        clientID: 'ABC123',
        clientSecret: 'secret'
      },
      function() {});
      
      // mock
      strategy._oauth2._request = function(method, url, headers, body, accessToken, callback) {
        var body = '{"stamps_count":4,"url":"/users/897","bookmarked_spots_url":"/users/897/bookmarks","friends_activity_url":"/checkins/recent","can_post_to_facebook":false,"_auto_connect_addressbook_friends":null,"current_checkins":[],"following_count":0,"friend_requests_count":1,"_is_friend":true,"_visited_spots_urls_url":"/users/897/visited_spots_urls","can_post_to_twitter":false,"hometown":"Berkeley, CA","items_url":"/users/897/items","friends_url":"/users/897/friends","challenge_pins_url":"/users/897/pins/challenges","top_spots_url":"/users/897/top_spots","trip_pins_url":"/users/897/pins/trips","photos_count":0,"pending_count":0,"state_pins_url":"/users/897/pins/states","username":"jaredhanson","challenge_pin_count":3,"province_pins_url":"/users/897/pins/provinces","following_url":"/users/897/friends/following","region_pin_count":3,"bookmarked_spots_count":0,"twitter_username":null,"facebook_url":"http://facebook.com/profile.php?id=","large_image_url":"http://s3.amazonaws.com/static.gowalla.com/users/897-huge.jpg?1239030228","friends_count":0,"last_name":"Hanson","highlights_url":"/users/897/highlights","bookmarks_url":"/users/897/bookmarks","reward_count":0,"website":"http://www.jaredhanson.net/","trips_count":0,"_bookmarked_spots_urls_url":"/users/897/bookmarked_spots_urls","notifications_url":"/users/897/notifications","followers_url":"/users/897/friends/followers","activity_url":"/users/897/events","country_pin_count":1,"_checkin_radius_meters":5000,"province_pin_count":0,"trip_pin_count":0,"last_checkins":[{"created_at":"2011-03-11T19:19:05Z","spot":{"name":"Mmmpanadas","image_url":"http://static.gowalla.com/categories/204-35b63bfa0742cc7e439c63c656c60e05-100.png","url":"/spots/697820"},"url":"/checkins/30858612","type":"checkin","_comments_count":0,"message":"","activity_url":"/checkins/30858612/activity"}],"photos_url":"/users/897/photos","twitter_id":null,"_auto_connect_facebook_friends":null,"_image_url_200":"http://static.gowalla.com.s3.amazonaws.com/users/897-standard.jpg?1239030228","pins_count":6,"image_url":"http://static.gowalla.com.s3.amazonaws.com/users/897-standard.jpg?1239030228","stamps_url":"/users/897/stamps","_street_team_level":0,"first_name":"Jared","blocking_count":0,"items_count":5,"friend_requests_url":"/users/897/friend_requests","state_pin_count":2,"followers_count":0,"blocking_url":"/users/897/friends/blocking","pending_url":"/users/897/friends/pending","bio":"","pins_url":"/users/897/pins","trips_url":"/users/897/trips","highlights_count":0,"country_pins_url":"/users/897/pins/countries"}';
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
        assert.equal(profile.provider, 'gowalla');
        assert.equal(profile.username, 'jaredhanson');
        assert.equal(profile.displayName, 'Jared Hanson');
        assert.equal(profile.name.familyName, 'Hanson');
        assert.equal(profile.name.givenName, 'Jared');
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
      var strategy = new GowallaStrategy({
        clientID: 'ABC123',
        clientSecret: 'secret'
      },
      function() {});
      
      // mock
      strategy._oauth2.getProtectedResource = function(url, accessToken, callback) {
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
