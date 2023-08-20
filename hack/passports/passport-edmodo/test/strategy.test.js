/* global describe, it, expect */
/* jshint expr: true */

var EdmodoStrategy = require('../lib/strategy');

describe('Strategy', function() {
	var strategy = new EdmodoStrategy({
			clientID: 'ABC123',
			clientSecret: 'secret'
		},
		function() {});

	it('should be named edmodo', function() {
		expect(strategy.name).to.equal('edmodo');
	});

	describe('constructed with user agent option', function() {
		var strategy = new EdmodoStrategy({
				clientID: 'ABC123',
				clientSecret: 'secret',
				userAgent: 'example.com'
			},
			function() {});
	});

	describe('constructed with custom headers including user agent', function() {
		var strategy = new EdmodoStrategy({
				clientID: 'ABC123',
				clientSecret: 'secret',
				customHeaders: { 'User-Agent': 'example.net' }
			},
			function() {});
	});

	describe('constructed with both custom headers including user agent and user agent option', function() {
		var strategy = new EdmodoStrategy({
				clientID: 'ABC123',
				clientSecret: 'secret',
				customHeaders: { 'User-Agent': 'example.org' },
				userAgent: 'example.net'
			},
			function() {});
	});

});
