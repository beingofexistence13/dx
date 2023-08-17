var vows = require('vows');
var assert = require('assert');
var util = require('util');
var authtkt = require('passport-authtkt');


vows.describe('passport-authtkt').addBatch({

  'module': {
    'should report a version': function (x) {
      assert.isString(authtkt.version);
    },

    'should export BadRequestError': function (x) {
      assert.isFunction(authtkt.BadRequestError);
    }
  },

  'getStrategy helper': {
    'should return null if passport is not configured': function() {
        var req = {};
        assert.isNull(authtkt.getStrategy(req));
    },

    'should return null if strategy is not configured': function() {
        var req = {};
        req._passport = {};
        req._passport.instance = {
            _strategies: {},
            _strategy: function(name) { return this._strategies[name]; }
        };
        assert.isNull(authtkt.getStrategy(req));
    },

    'should return strategy if configured': function() {
        var req = {};
        var s = {};
        req._passport = {};
        req._passport.instance = {
            _strategies: {authtkt: s},
            _strategy: function(name) { return this._strategies[name]; }
        };
        assert.isTrue(authtkt.getStrategy(req) === s);
    },

    'should return strategy by name if configured': function() {
        var req = {};
        var s1 = {}, s2 = {};
        req._passport = {};
        req._passport.instance = {
            _strategies: {authtkt: s1, other_authtkt: s2},
            _strategy: function(name) { return this._strategies[name]; }
        };
        assert.isTrue(authtkt.getStrategy(req, 'other_authtkt') === s2);
    }

  }

}).export(module);
