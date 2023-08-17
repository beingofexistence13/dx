var vows = require('vows');
var assert = require('assert');
var util = require('util');
var geoloqi = require('passport-geoloqi');


vows.describe('passport-geoloqi').addBatch({
  
  'module': {
    'should report a version': function (x) {
      assert.isString(geoloqi.version);
    },
  },
  
}).export(module);
