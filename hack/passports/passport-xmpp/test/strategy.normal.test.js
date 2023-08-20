/* global describe, it, expect, before */
/* jshint expr: true */

var chai = require('chai')
  , Strategy = require('../lib/strategy')
  , server = require('./bootstrap/xmpp-server');


describe('Strategy', function() {

  describe('handling a request with valid credentials in body', function() {
    var strategy = new Strategy();
    
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
  
  describe('handling a request with valid credentials in query', function() {
    var strategy = new Strategy();
    
    var user
      , info;
    
    before(function(done) {
      server.startServer(function() {
          chai.passport(strategy)
            .success(function(u, i) {
              user = u;
              done();
            })
            .req(function(req) {
              req.query = {};
              req.query.jid = 'johndoe@localhost';
              req.query.password = 'secret';
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
  
  describe('handling a request without a body', function() {
    var strategy = new Strategy();
    
    var info, status;
    
    before(function(done) {
      server.startServer(function() {
          chai.passport(strategy)
            .fail(function(i, s) {
              info = i;
              status = s;
              done();
            })
            .authenticate();
      });
    });
      
    after(function(done) {
        server.stopServer(done);
    })
    
    it('should fail with info and status', function() {
      expect(info).to.be.an.object;
      expect(info.message).to.equal('Missing credentials');
      expect(status).to.equal(400);
    });
  });
  
  describe('handling a request without a body, but no jid and password', function() {
    var strategy = new Strategy({});
    
    var info, status;
    
    before(function(done) {
      server.startServer(function() {
          chai.passport(strategy)
            .fail(function(i, s) {
              info = i;
              status = s;
              done();
            })
            .req(function(req) {
              req.body = {};
            })
            .authenticate();
      });
    });
      
    after(function(done) {
        server.stopServer(done);
    })
    
    it('should fail with info and status', function() {
      expect(info).to.be.an.object;
      expect(info.message).to.equal('Missing credentials');
      expect(status).to.equal(400);
    });
  });
  
  describe('handling a request without a body, but no password', function() {
    var strategy = new Strategy();
    
    var info, status;
    
    before(function(done) {
      chai.passport(strategy)
        .fail(function(i, s) {
          info = i;
          status = s;
          done();
        })
        .req(function(req) {
          req.body = {};
          req.body.jid = 'johndoe@localhost';
        })
        .authenticate();
    });
    
    it('should fail with info and status', function() {
      expect(info).to.be.an.object;
      expect(info.message).to.equal('Missing credentials');
      expect(status).to.equal(400);
    });
  });
  
  describe('handling a request without a body, but no jid', function() {
    var strategy = new Strategy(function(jid, password, done) {
      throw new Error('should not be called');
    });
    
    var info, status;
    
    before(function(done) {
      chai.passport(strategy)
        .fail(function(i, s) {
          info = i;
          status = s;
          done();
        })
        .req(function(req) {
          req.body = {};
          req.body.password = 'secret';
        })
        .authenticate();
    });
    
    it('should fail with info and status', function() {
      expect(info).to.be.an.object;
      expect(info.message).to.equal('Missing credentials');
      expect(status).to.equal(400);
    });
  });
  
});
