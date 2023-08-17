var vows = require('vows');
var assert = require('assert');
var util = require('util');
var MovesStrategy = require('../lib/strategy');

vows.describe('MovesStrategy').addBatch({
  
  'strategy': {
    
    // test the name of the strategy
    topic: function() {
      return new MovesStrategy({
        clientID: clientID,
        clientSecret: clientSecret
      },
      function() {});
    },
    
    'should be named moves': function (strategy) {
      assert.equal(strategy.name, 'moves');
    },

    // strategy when loading a profile
    topic: function() {
    	var strategy = new MovesStrategy({
    		clientID: 'mock_clientID',
        clientSecret: 'mock_clientSecret',
    		callbackURL: '/moves/auth/callback'
    	},
    	function()  {});

    	// mock response
    	strategy._oauth2.get = function(url, accessToken, callback) {
    		var body = '{"userId": 23138311640030064,"profile": {"firstDate": "20121211","currentTimeZone": {"id": "Europe/Helsinki","offset": 10800},"localization": {"language": "en","locale": "fi_FI","firstWeekDay": 2,"metric": true},"caloriesAvailable": true,"platform": "ios"}}';
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
        assert.equal(profile.provider, 'moves');
        assert.equal(profile.id, '23138311640030064');
      },
      'should set raw property' : function(err, profile) {
        assert.isString(profile._raw);
      },
      'should set json property' : function(err, profile) {
        assert.isObject(profile._json);
      }
    }
  },

  'strategy when loading a user profile and encountering an error': {
  	topic: function() {
    	var strategy = new MovesStrategy({
    		clientID: 'mock_clientID',
    		clientSecret: 'mock_clientSecret',
    		callbackURL: '/moves/auth/callback'
    	},
    	function()  {});

    	// mock response
    	strategy._oauth2.get = function(url, accessToken, callback) {
    		callback(new Error('an error for the purposes of test'));
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
      }
    }

  }
}).export(module);
