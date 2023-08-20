'use strict'

var assert = require('assert')
var it = require('testit')
var RedGateStrategy = require('../')

var strategy = new RedGateStrategy({returnURL: 'https://www.example.com'}, function () {
})

it('should be named redgate', function () {
  assert.equal(strategy.name, 'redgate')
})
it('should have correct provider URL', function () {
  assert.equal(strategy._providerURL, 'https://authentication.red-gate.com')
})