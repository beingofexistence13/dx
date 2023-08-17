/* global describe, it, expect, before */
/* jshint expr: true */

var fs = require('fs')
	, parse = require('../lib/profile').parse;


describe('profile.parse', function() {

	describe('example profile', function() {
		var profile;

		before(function(done) {
			fs.readFile('test/data/example.json', 'utf8', function(err, data) {
				if (err) { return done(err); }
				profile = parse(data);
				done();
			});
		});

		it('should parse profile', function() {
			expect(profile.id).to.equal('41423353');
			expect(profile.username).to.equal('cstigler602');
			expect(profile.displayName).to.equal('Charlie Stigler');
			expect(profile.emails).to.have.length(1);
			expect(profile.emails[0].value).to.equal('charlie@zaption.com');
			expect(profile.role).to.equal('teacher');
		});
	});

	describe('example profile with null email', function() {
		var profile;

		before(function(done) {
			fs.readFile('test/data/example-null-email.json', 'utf8', function(err, data) {
				if (err) { return done(err); }
				profile = parse(data);
				done();
			});
		});

		it('should parse profile', function() {
			expect(profile.id).to.equal('41423353');
			expect(profile.username).to.equal('cstigler602');
			expect(profile.displayName).to.equal('Charlie Stigler');
			expect(profile.emails).to.be.undefined;
			expect(profile.role).to.equal('teacher');
		});
	});

});
