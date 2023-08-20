/* global describe, it, expect, before */
/* jshint expr: true */

var chai = require('chai')
  , Strategy = require('../lib/strategy')
  , server = require('./bootstrap/xmpp-server');

describe('Strategy', function() {
    
  describe('handling a request with valid credentials in body using custom field names', function() {
    var strategy = new Strategy({ jidField: 'jabberid', passwordField: 'passwd' });
    
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
              req.body.jabberid = 'johndoe@localhost';
              req.body.passwd = 'secret';
            })
            .authenticate();
        });
    });
      
    after(function(done) {
        server.stopServer(done);
    })
    
    it('should supply user', function() {
      expect(user).to.be.an.object;
      expect(user.local).to.equal('johndoe');
      expect(user.user).to.equal('johndoe');
      expect(user.domain).to.equal('localhost');
      expect(user.resource).to.exist;
    });
  });
  
  describe('handling a request with valid credentials in body using custom field names with object notation', function() {
    var strategy = new Strategy({ jidField: 'user[jid]', passwordField: 'user[password]' });
    
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
              req.body.user = {};
              req.body.user.jid = 'johndoe@localhost';
              req.body.user.password = 'secret';
            })
            .authenticate();
        });
    });
      
    after(function() {
        server.stopServer();
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
