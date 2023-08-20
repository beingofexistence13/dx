/* global describe, it, expect, before */
/* jshint expr: true */

var chai = require('chai')
  , proxyquire = require('proxyquire')
  , server = require('./bootstrap/xmpp-server');


describe('Strategy', function() {
  
  describe('failing authentication with bad \'preferred\' value', function() {

    it('Report expected \'preferred\' value', function(done) {
      var fakeClient = function(req, options) {
        expect(req.body.preferred).to.equal('UNKNOWN');
        expect(options.preferred).to.equal('UNKNOWN');
        done()
      }
      var Strategy = proxyquire('../lib/strategy', { './xmpp': fakeClient });
      var strategy = new Strategy();

      chai.passport(strategy)
            .success(function() {
              done('error');
            })
            .error(function(error) {
               done(error);
            })
            .req(function(req) {
              req.body = {};
              req.body.jid = 'johndoe@localhost';
              req.body.password = 'secret';
              req.body.preferred = 'UNKNOWN';
            })
            .authenticate();
    });

    it('Allows me to change the preferred field name', function(done) {
      var fakeClient = function(req, options) {
        expect(req.body.saslType).to.equal('UNKNOWN');
        expect(options.preferred).to.equal('UNKNOWN');
        done()
      }
      var Strategy = proxyquire('../lib/strategy', { './xmpp': fakeClient });
      var strategy = new Strategy({ preferredField: 'saslType' });

      chai.passport(strategy)
            .success(function() {
              done('error');
            })
            .error(function(error) {
               done(error);
            })
            .req(function(req) {
              req.body = {};
              req.body.jid = 'johndoe@localhost';
              req.body.password = 'secret';
              req.body.saslType = 'UNKNOWN';
            })
            .authenticate();
    });
      
    it('No preferred does not set option', function(done) {
      var fakeClient = function(req, options) {
        expect(req.body.preferred).to.not.exist;
        expect(options.preferred).to.not.exist;
        done()
      }
      var Strategy = proxyquire('../lib/strategy', { './xmpp': fakeClient });
      var strategy = new Strategy();

      chai.passport(strategy)
            .success(function() {
              done('error');
            })
            .error(function(error) {
               done(error);
            })
            .req(function(req) {
              req.body = {};
              req.body.jid = 'johndoe@localhost';
              req.body.password = 'secret';
            })
            .authenticate();
    });
      
  });
  
});
