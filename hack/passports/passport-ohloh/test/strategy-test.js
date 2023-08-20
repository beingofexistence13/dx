var vows = require('vows');
var assert = require('assert');
var util = require('util');
var OhlohStrategy = require('passport-ohloh/strategy');


vows.describe('OhlohStrategy').addBatch({
  
  'strategy': {
    topic: function() {
      return new OhlohStrategy({
        consumerKey: 'ABC123',
        consumerSecret: 'secret'
      },
      function() {});
    },
    
    'should be named ohloh': function (strategy) {
      assert.equal(strategy.name, 'ohloh');
    },
  },
  
  'strategy when loading user profile': {
    topic: function() {
      var strategy = new OhlohStrategy({
        consumerKey: 'ABC123',
        consumerSecret: 'secret'
      },
      function() {});
      
      // mock
      strategy._oauth.get = function(url, token, tokenSecret, callback) {
        var body = '<?xml version="1.0" encoding="UTF-8"?>\n<response>\n  <status>success</status>\n  <result>\n    <account>\n      <id>7476</id>\n      <name>jaredhanson</name>\n      <created_at>2007-08-04T16:27:22Z</created_at>\n      <updated_at>2009-06-22T14:57:22Z</updated_at>\n      <homepage_url>http://www.jaredhanson.net/</homepage_url>\n      <avatar_url>http://www.gravatar.com/avatar.php?gravatar_id=6c43616eef331e8ad08c7f90a51069a5</avatar_url>\n      <email_sha1>cd7201e0add2ea853956b72618dad2054615377d</email_sha1>\n      <posts_count>0</posts_count>\n      <location>Berkeley, CA, USA</location>\n      <country_code>US</country_code>\n      <latitude>37.872222</latitude>\n      <longitude>-122.268403</longitude>\n      <kudo_score>\n        <kudo_rank>1</kudo_rank>\n        <position>356432</position>\n      </kudo_score>\n    </account>\n  </result>\n</response>\n';
        
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
        assert.equal(profile.provider, 'ohloh');
        assert.equal(profile.id, '7476');
        assert.equal(profile.displayName, 'jaredhanson');
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
  
  'strategy when loading user profile and encountering an error': {
    topic: function() {
      var strategy = new OhlohStrategy({
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
