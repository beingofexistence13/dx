/* global describe, it, expect, before */
/* jshint expr: true */

var REscourStrategy = require('../lib/strategy');

describe('Strategy#userProfile', function() {

  describe('with default URL and proof enabled', function() {
    var strategy = new REscourStrategy({
        clientID: 'ABC123',
        clientSecret: 'secret'
      },
      function() {});

    // mock
    strategy._oauth2.get = function(url, accessToken, callback) {
      if (accessToken != 'token') { return callback(new Error('incorrect token argument')); }

      var body = '{"id":"500308595","name":"Spencer Applegate","first_name":"Spencer","last_name":"Applegate"}';
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
        expect(profile.provider).to.equal('rescour');
        expect(profile.id).to.equal('500308595');
        // expect(profile.username).to.equal('spencerapplegate');
      });
    });
  });

  describe('with profile URL option', function() {
    var strategy = new REscourStrategy({
        clientID: 'ABC123',
        clientSecret: 'secret'
      },
      function() {});

    // mock
    strategy._oauth2.get = function(url, accessToken, callback) {
      if (accessToken != 'token') { return callback(new Error('incorrect token argument')); }

      var body = '{"id":"500308595","name":"Spencer Applegate","first_name":"Spencer","last_name":"Applegate"}';
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
        expect(profile.provider).to.equal('rescour');
        expect(profile.id).to.equal('500308595');
        // expect(profile.username).to.equal('spencerapplegate');
      });
    });
  });

  describe('with profile URL option and proof enabled', function() {
    var strategy = new REscourStrategy({
        clientID: 'ABC123',
        clientSecret: 'secret'
      },
      function() {});

    // mock
    strategy._oauth2.get = function(url, accessToken, callback) {
      if (accessToken != 'token') { return callback(new Error('incorrect token argument')); }

      var body = '{"id":"500308595","name":"Spencer Applegate","first_name":"Spencer","last_name":"Applegate"}';
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
        expect(profile.provider).to.equal('rescour');
        expect(profile.id).to.equal('500308595');
        // expect(profile.username).to.equal('spencerapplegate');
      });
    });
  });

  describe('with profile fields mapped from portable contacts schema', function() {
    var strategy = new REscourStrategy({
        clientID: 'ABC123',
        clientSecret: 'secret'
      },
      function() {});

    // mock
    strategy._oauth2.get = function(url, accessToken, callback) {
      if (accessToken != 'token') { return callback(new Error('incorrect token argument')); }

      var body = '{"id":"500308595","name":"Spencer Applegate","first_name":"Spencer","last_name":"Applegate"}';
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
        expect(profile.provider).to.equal('rescour');
        expect(profile.id).to.equal('500308595');
        // expect(profile.username).to.equal('spencerapplegate');
      });
    });
  });

});
