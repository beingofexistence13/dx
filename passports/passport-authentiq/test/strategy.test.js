/* global describe, it, expect */
/* jshint expr: true */
var AuthentiqStrategy = require('../lib/').Strategy;

describe('constructor with bad params', function () {

    it('should fail if no clientID is provided as option', function () {
        (function () {
            new AuthentiqStrategy(
                {},
                function(iss, sub, profile, done) {
                }
            );
        }).should.throw('You must provide the clientID configuration value to use passport-authentiq.');
    });

    it('should fail if no clientSecret is passed as option', function () {
        (function () {
            new AuthentiqStrategy(
                {clientID: 'bar'},
                function(iss, sub, profile, done) {
                }
            );
        }).should.throw('You must provide the clientSecret configuration value to use passport-authentiq.');
    });

    it('should fail if no callbackURL is provided as option', function () {
        (function () {
            new AuthentiqStrategy(
                {clientID: 'bar', clientSecret: 'baz'},
                function(iss, sub, profile, done) {
                }
            );
        }).should.throw('You must provide the callbackURL configuration value to use passport-authentiq.');
    });

    it('should fail if no scopes are provided as an option', function () {
        (function () {
            new AuthentiqStrategy(
                {clientID: 'bar', clientSecret: 'baz', callbackURL: 'test'},
                function (iss, sub, profile, done) {
                }
            );
        }).should.throw('You must provide the scope configuration value to use passport-authentiq.');
    });
});

describe('constructor with right params and no scope should boot OK', function () {
    var strategy;

    before(function () {
        strategy = new AuthentiqStrategy({
                clientID: 'testid',
                clientSecret: 'testsecret',
                callbackURL: '/callback',
                scope: 'aq:name~r aq:location address~r email~rs phone'
            },
            function (iss, sub, profile, done) {
            }
        );
    });

    it('should be named authentiq', function () {
        strategy.name.should.eql('authentiq');
    });

    it('authentiq providerURL should be properly set', function () {
        strategy.options.providerURL.should.eql('https://connect.authentiq.io');
    });

    it('authentiq sessionKey should be properly set to _key', function () {
        strategy._key.should.eql('authentiq:connect.authentiq.io');
    });

    it('clienID should be properly set', function () {
        strategy.options.clientID.should.eql('testid');
    });

    it('clientSecret should be properly set', function () {
        strategy.options.clientSecret.should.eql('testsecret');
    });

    it('callbackURL should be properly set', function () {
        strategy.options.callbackURL.should.eql('/callback');
    });

    it('scope should be properly set', function () {
        strategy._scope.should.eql('aq:name~r aq:location address~r email~rs phone');
    });
});
