var vows = require('vows');
var assert = require('assert');
var util = require('util');
var GeoloqiStrategy = require('passport-geoloqi/strategy');


vows.describe('GeoloqiStrategy').addBatch({
  
  'strategy': {
    topic: function() {
      return new GeoloqiStrategy({
        clientID: 'ABC123',
        clientSecret: 'secret'
      },
      function() {});
    },
    
    'should be named geoloqi': function (strategy) {
      assert.equal(strategy.name, 'geoloqi');
    },
  },
  
  'strategy when loading user profile': {
    topic: function() {
      var strategy = new GeoloqiStrategy({
        clientID: 'ABC123',
        clientSecret: 'secret'
      },
      function() {});
      
      // mock
      strategy._oauth2.get = function(url, accessToken, callback) {
        var body = '{"user_id":"0xX","username":"_00xxx0xXxXXxXXxX0","name":"Jared Hanson","display_name":"Jared Hanson","bio":"","website":"","timezone":"UTC","twitter":false,"profile_image":"","is_anonymous":0,"has_custom_username":0,"has_push_token":0,"public_location":0,"public_geonotes":1,"public_geonote_email":1,"timezone_offset":"+0000","email":"user@example.com","instamapper_devicekey":"","phone":"555-555-5555"}';
        
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
        assert.equal(profile.provider, 'geoloqi');
        assert.equal(profile.id, '0xX');
        assert.equal(profile.username, '_00xxx0xXxXXxXXxX0');
        assert.equal(profile.displayName, 'Jared Hanson');
        assert.equal(profile.emails[0].value, 'user@example.com');
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
      var strategy = new GeoloqiStrategy({
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
