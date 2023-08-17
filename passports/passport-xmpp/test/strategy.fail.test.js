/* global describe, it, expect, before */
/* jshint expr: true */

var chai = require('chai')
  , Strategy = require('../lib/strategy')
  , server = require('./bootstrap/xmpp-server');


describe('Strategy', function() {
  
  describe('failing authentication with info', function() {
    var strategy = new Strategy();
    
    var info;
    
    before(function(done) {
      server.startServer(function() {
          chai.passport(strategy)
            .fail(function(i) {
              info = i;
              done();
            })
            .req(function(req) {
              req.body = {};
              req.body.jid = 'johndoe@localhost';
              req.body.password = 'public';
            })
            .authenticate();
        });
    });
      
    after(function(done) {
        server.stopServer(done)
    });
    
    it('should fail', function() {
      expect(info).to.be.an('object');
      expect(info.message).to.equal('XMPP authentication failure');
    });
  });
  
});
