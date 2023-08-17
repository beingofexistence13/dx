/* global describe, it, expect, before */
/* jshint expr: true */

var fs      = require('fs');
var parse   = require('../lib/profile').parse;

// ## //

describe('profile.parse', function () {
    describe('example profile', function () {
        before(function () {
            this.profile = parse(
                JSON.parse(fs.readFileSync('test/data/example.json', 'utf8'))
            );
        });

        it('should parse profile', function () {
            expect(this.profile.id).to.equal('1a');
            expect(this.profile.username).to.equal('jdoe');
            expect(this.profile.name).to.equal('John Doe');
            expect(this.profile.emails).to.have.length(1);
            expect(this.profile.emails[0].value).to.equal('jdoe@example.com');
        });
    });

    describe('example profile with null email', function () {
        before(function () {
            this.profile = parse(
                JSON.parse(fs.readFileSync('test/data/example-null-email.json', 'utf8'))
            );
        });

        it('should parse profile', function () {
            expect(this.profile.id).to.equal('1b');
            expect(this.profile.username).to.equal('jdale');
            expect(this.profile.name).to.be.undefined;
            expect(this.profile.emails).to.be.undefined;
        });
    });
});
