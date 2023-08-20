var vows = require('vows');
var assert = require('assert');
var util = require('util');
var mailchimp = require('passport-mailchimp');

vows.describe('passport-mailchimp').addBatch({
  'module': {
    'should report a version': function(x) {
      assert.isString(mailchimp.version);
    }
  }
}).export(module);
