/* global describe, it, expect, before */
/* jshint expr: true */

var chai = require('chai')
  , REscourStrategy = require('../lib/strategy');


describe('Strategy', function() {

  var strategy = new REscourStrategy({
      clientID: 'ABC123',
      clientSecret: 'secret'
    },
    function() {});

});
