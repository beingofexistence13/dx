/* global describe, it, expect, before */
/* jshint expr: true */

var chai = require('chai')
  , Strategy = require('../lib/strategy')
  , server = require('./bootstrap/xmpp-server');

describe('Strategy', function() {
    
  describe('passing request to verify callback', function() {
    var strategy = new Strategy({});
    
    var user
      , info;
    
    before(function(done) {
      server.startServer(function() {
          chai.passport(strategy)
            .success(function(u) {
              user = u;
              done();
            })
            .req(function(req) {
              req.body = {};
              req.body.jid = 'johndoe@localhost';
              req.body.password = 'secret';
            })
            .authenticate();
      })
    });
      
    after(function(done) {
      server.stopServer(done)
    })
    
    it('should supply user', function() {
      expect(user).to.be.an.object;
      expect(user.local).to.equal('johndoe');
      expect(user.user).to.equal('johndoe');
      expect(user.domain).to.equal('localhost');
      expect(user.resource).to.exist;
    });

  });
  
});
