/* global describe, it, expect, before, nock */
/* jshint expr: true */

var IonisxStrategy     = require('../lib/strategy');

var InternalOAuthError = require('passport-oauth2').InternalOAuthError;
var fs                 = require('fs');

// ## //

describe('strategy', function () {
    before(function () {
        this.strategy = new IonisxStrategy({
            clientID: 'ABC123',
            clientSecret: 'secret'
        }, function () {});
    });

    it('should be named ionisx', function () {
        expect(this.strategy.name).to.equal('ionisx');
    });

    it('should have default user agent', function () {
        expect(this.strategy._oauth2._customHeaders['User-Agent']).to.equal('passport-ionisx');
    });

    describe('missing arguments', function () {
        it('should fail if the callback is not specified', function () {
            var f = function () {
                return new IonisxStrategy();
            };

            expect(f).to.throw();
        });

        it('should fail if the clientID is not specified', function () {
            var f = function () {
                return new IonisxStrategy(null, function () {});
            };

            expect(f).to.throw();
        });

        it('should not fail if the clientSecret is not specified', function () {
            var f = function () {
                return new IonisxStrategy({
                    clientID: 'specified'
                }, function () {});
            };

            expect(f()).to.be.ok;
        });
    });

    describe('constructed with user agent option', function () {
        before(function () {
            this.strategy = new IonisxStrategy({
                clientID: 'ABC123',
                clientSecret: 'secret',
                userAgent: 'cool-ionisx-agent'
            }, function () {});
        });

        it('should have default user agent', function () {
            expect(this.strategy._oauth2._customHeaders['User-Agent']).to.equal('cool-ionisx-agent');
        });
    });

    describe('constructed with custom headers including user agent', function () {
        before(function () {
            this.strategy = new IonisxStrategy({
                clientID: 'ABC123',
                clientSecret: 'secret',
                customHeaders: {
                    'User-Agent': 'cool-ionisx-agent'
                }
            }, function () {});
        });

        it('should have default user agent', function () {
            expect(this.strategy._oauth2._customHeaders['User-Agent']).to.equal('cool-ionisx-agent');
        });
    });

    describe('constructed with both custom headers including user agent and user agent option', function () {
        before(function () {
            this.strategy = new IonisxStrategy({
                clientID: 'ABC123',
                clientSecret: 'secret',
                userAgent: 'cool-ionisx-agent',
                customHeaders: {
                    'User-Agent': 'even-better-ionisx-agent'
                }
            }, function () {});
        });

        it('should have default user agent', function () {
            expect(this.strategy._oauth2._customHeaders['User-Agent']).to.equal('even-better-ionisx-agent');
        });
    });

    describe('load profile', function () {
        before(function () {
            this.strategy = new IonisxStrategy({
                clientID: 'ABC123',
                clientSecret: 'secret'
            }, function () {});

            this.strategy._oauth2.get = function (url, accessToken, callback) {
                var body = fs.readFileSync('test/data/example.json', 'utf8');
                callback(null, body, undefined);
            };
        });

        it('should parse the profile', function (done) {
            var self = this;

            this.strategy.userProfile('token', function (err, profile) {
                if (err) {
                    done(err);
                }
                else {
                    expect(profile).to.be.ok;
                    expect(profile.provider).to.equal('ionisx');

                    self.profile = profile;

                    done();
                }
            });
        });

        it('should have set the _raw property', function () {
            expect(this.profile._raw).to.be.a('string');
        });

        it('should have set the _json property', function () {
            expect(this.profile._json).to.be.an('object');
        });
    });

    describe('connection error', function () {
        before(function () {
            this.strategy = new IonisxStrategy({
                clientID: 'ABC123',
                clientSecret: 'secret',
                userProfileURL: '/profile'
            }, function () {});
        });

        it('should fail if the route is not reachable', function (done) {
            this.strategy.userProfile('token', function (err, profile) {
                expect(err).to.be.ok;
                expect(err).to.be.an.instanceof(InternalOAuthError);
                expect(profile).to.be.undefined;
                done();
            });
        });
    });

    describe('json parsing error', function () {
        before(function () {
            this.strategy = new IonisxStrategy({
                clientID: 'ABC123',
                clientSecret: 'secret',
                baseURL: 'http://foo.com',
            }, function () {});

            nock('http://foo.com')
                .get('/api/user/me')
                .reply('this json is not json {}');
        });

        it('should fail if JSON is not parse-able', function (done) {
            this.strategy.userProfile('token', function (err, profile) {
                expect(err).to.be.an.instanceof(Error);
                expect(profile).to.be.undefined;
                done();
            });
        });
    });
});
