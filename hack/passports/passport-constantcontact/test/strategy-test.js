var vows = require('vows');
var assert = require('assert');
var util = require('util');
var url = require('url');
var MailChimpStrategy = require('passport-mailchimp/strategy');

vows.describe('MailChimpStrategy').addBatch({
  'strategy': {
    topic: function() {
      return new MailChimpStrategy({
        clientID: '1234567',
        clientSecret: 'catz'
      },
      function() {});
    },
    'should be named mailchimp': function(strategy) {
      assert.equal(strategy.name, 'mailchimp');
    }
  }
});
