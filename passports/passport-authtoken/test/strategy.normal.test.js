/* global describe, it, expect, before */
/* jshint expr: true */

var chai = require('chai')
  , Strategy = require('../lib/strategy');


describe('Strategy', function() {
    
  describe('handling a request with valid credentials in body', function() {
    var strategy = new Strategy({ checkFields: 'pinNumber' }, function(token, pinNumber, done) {
      if (token == 'abcdefgh' && pinNumber == '0000') {
        return done(null, { id: '1234' }, { scope: 'read' });
      }
      return done(null, null);
    });
    
    var user
      , info;
    
    before(function(done) {
      chai.passport(strategy)
        .success(function(u, i) {
          user = u;
          info = i;
          done();
        })
        .req(function(req) {
          req.body = {};
          req.body.token = 'abcdefgh';
          req.body.pinNumber = '0000';
        })
        .authenticate();
    });
    
    it('should supply user', function() {
      expect(user).to.be.an.object;
      expect(user.id).to.equal('1234');
    });
    
    it('should supply info', function() {
      expect(info).to.be.an.object;
      expect(info.scope).to.equal('read');
    });
  });

  describe('handling a request with valid some credentials in body', function() {
    var strategy = new Strategy({ checkFields: 'pinNumber,subid' }, function(token, pinNumber, subid, done) {
      if (token == 'abcdefgh' && pinNumber == '0000' && subid == 'ijkl') {
        return done(null, { id: '1234' }, { scope: 'read' });
      }
      return done(null, null);
    });
    
    var user
      , info;
    
    before(function(done) {
      chai.passport(strategy)
        .success(function(u, i) {
          user = u;
          info = i;
          done();
        })
        .req(function(req) {
          req.body = {};
          req.body.token = 'abcdefgh';
          req.body.pinNumber = '0000';
          req.body.subid = 'ijkl';
        })
        .authenticate();
    });
    
    it('should supply user', function() {
      expect(user).to.be.an.object;
      expect(user.id).to.equal('1234');
    });
    
    it('should supply info', function() {
      expect(info).to.be.an.object;
      expect(info.scope).to.equal('read');
    });
  });
  
  
  describe('handling a request with valid credentials in query', function() {
    var strategy = new Strategy({ checkFields: ['pinNumber'] }, function(token, pinNumber, done) {
      if (token == 'abcdefgh' && pinNumber == '0000') {
        return done(null, { id: '1234' }, { scope: 'read' });
      }
      return done(null, null);
    });
    
    var user
      , info;
    
    before(function(done) {
      chai.passport(strategy)
        .success(function(u, i) {
          user = u;
          info = i;
          done();
        })
        .req(function(req) {
          req.query = {};
          req.query.token = 'abcdefgh';
          req.query.pinNumber = '0000';
        })
        .authenticate();
    });
    
    it('should supply user', function() {
      expect(user).to.be.an.object;
      expect(user.id).to.equal('1234');
    });
    
    it('should supply info', function() {
      expect(info).to.be.an.object;
      expect(info.scope).to.equal('read');
    });
  });

  describe('handling a request with valid some credentials in query', function() {
    var strategy = new Strategy({ checkFields: ['pinNumber', 'subid'] }, function(token, pinNumber, subid, done) {
      if (token == 'abcdefgh' && pinNumber == '0000' && subid == 'ijkl') {
        return done(null, { id: '1234' }, { scope: 'read' });
      }
      return done(null, null);
    });
    
    var user
      , info;
    
    before(function(done) {
      chai.passport(strategy)
        .success(function(u, i) {
          user = u;
          info = i;
          done();
        })
        .req(function(req) {
          req.query = {};
          req.query.token = 'abcdefgh';
          req.query.pinNumber = '0000';
          req.query.subid = 'ijkl';
        })
        .authenticate();
    });
    
    it('should supply user', function() {
      expect(user).to.be.an.object;
      expect(user.id).to.equal('1234');
    });
    
    it('should supply info', function() {
      expect(info).to.be.an.object;
      expect(info.scope).to.equal('read');
    });
  });
  
  describe('handling a request without a body', function() {
    var strategy = new Strategy({ checkFields: ['pinNumber'] }, function(token, pinNumber, done) {
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
        .authenticate();
    });
    
    it('should fail with info and status', function() {
      expect(info).to.be.an.object;
      expect(info.message).to.equal('Missing credentials');
      expect(status).to.equal(400);
    });
  });
  
  describe('handling a request without a body, but no token and pinNumber', function() {
    var strategy = new Strategy({ checkFields: ['pinNumber'] }, function(token, pinNumber, done) {
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
        })
        .authenticate();
    });
    
    it('should fail with info and status', function() {
      expect(info).to.be.an.object;
      expect(info.message).to.equal('Missing credentials');
      expect(status).to.equal(400);
    });
  });
  
  describe('handling a request without a body, but no token', function() {
    var strategy = new Strategy({ checkFields: ['pinNumber'] }, function(token, pinNumber, done) {
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
          req.body.pinNumber = '1234';
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
