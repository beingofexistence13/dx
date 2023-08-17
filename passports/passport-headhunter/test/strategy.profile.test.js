/* global describe, it, expect, before */
/* jshint expr: true */

var HeadHunterStrategy = require('../lib/strategy');


describe('Strategy#userProfile', function() {

  var strategy =  new HeadHunterStrategy({
      clientID: 'ABC123',
      clientSecret: 'secret'
    },
    function() {});

  // mock
  strategy._oauth2.get = function(url, accessToken, callback) {
    if (url != 'https://m.hh.ru/me') { return callback(new Error('wrong url argument')); }
    if (accessToken != 'token') { return callback(new Error('wrong token argument')); }

    var body = '{ "login": "Имя", "id": 12345678, "first_name": "Имя", "last_name": "Фамилия", "email": "contact@example.com" }';

    callback(null, body, undefined);
  };

  describe('loading profile', function() {
    var profile;

    before(function(done) {
      strategy.userProfile('token', function(err, p) {
        if (err) { return done(err); }
        profile = p;
        done();
      });
    });

    it('should parse profile', function() {
      expect(profile.provider).to.equal('headhunter');

      expect(profile.id).to.equal('12345678');
      expect(profile.username).to.equal('Имя');
      expect(profile.displayName).to.equal('Имя Фамилия');
      expect(profile.profileUrl).to.equal('https://m.hh.ru/me');
      expect(profile.emails).to.have.length(1);
      expect(profile.emails[0].value).to.equal('contact@example.com');
    });

    it('should set raw property', function() {
      expect(profile._raw).to.be.a('string');
    });

    it('should set json property', function() {
      expect(profile._json).to.be.an('object');
    });
  });

  describe('encountering an error', function() {
    var err, profile;

    before(function(done) {
      strategy.userProfile('wrong-token', function(e, p) {
        err = e;
        profile = p;
        done();
      });
    });

    it('should error', function() {
      expect(err).to.be.an.instanceOf(Error);
      expect(err.constructor.name).to.equal('InternalOAuthError');
      expect(err.message).to.equal('Failed to fetch user profile');
    });

    it('should not load profile', function() {
      expect(profile).to.be.undefined;
    });
  });

});
