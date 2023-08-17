'use strict';

import chai, {expect} from 'chai';
import chaiPassportStrategy from 'chai-passport-strategy';
import Strategy from '../strategy';

chai.use(chaiPassportStrategy);

describe('Strategy', () => {

  describe('handling a request with valid credentials in body', () => {
    const strategy = new Strategy((agencyid, loanerid, pincode, done) => {
      if (agencyid === '123456' && loanerid === '0123456789' && pincode === '1234') {
        return done(null, {id: '1234'}, {scope: 'read'});
      }
      return done(null, false);
    });

    let user;
    let info;

    before((done) => {
      chai.passport.use(strategy)
        .success((u, i) => {
          user = u;
          info = i;
          done();
        })
        .req((req) => {
          req.body = {};
          req.body.agencyid = '123456';
          req.body.loanerid = '0123456789';
          req.body.pincode = '1234';
        })
        .authenticate();
    });

    it('should supply user', () => {
      expect(user).to.be.an.object; // eslint-disable-line
      expect(user.id).to.equal('1234');
    });

    it('should supply info', () => {
      expect(info).to.be.an.object; // eslint-disable-line
      expect(info.scope).to.equal('read');
    });
  });

  describe('handling a request with valid credentials in query', () => {
    const strategy = new Strategy((agencyid, loanerid, pincode, done) => {
      if (agencyid === '123456' && loanerid === '0123456789' && pincode === '1234') {
        return done(null, {id: '1234'}, {scope: 'read'});
      }
      return done(null, false);
    });

    let user;
    let info;

    before((done) => {
      chai.passport.use(strategy)
        .success((u, i) => {
          user = u;
          info = i;
          done();
        })
        .req((req) => {
          req.query = {};
          req.query.agencyid = '123456';
          req.query.loanerid = '0123456789';
          req.query.pincode = '1234';
        })
        .authenticate();
    });

    it('should supply user', () => {
      expect(user).to.be.an.object; // eslint-disable-line
      expect(user.id).to.equal('1234');
    });

    it('should supply info', () => {
      expect(info).to.be.an.object; // eslint-disable-line
      expect(info.scope).to.equal('read');
    });
  });

  describe('handling a request without a body', () => {
    const strategy = new Strategy((agencyid, loanerid, pincode, done) => {
      if (agencyid === '123456' && loanerid === '0123456789' && pincode === '1234') {
        return done(null, {id: '1234'}, {scope: 'read'});
      }
      return done(null, false);
    });

    let info;
    let status;

    before((done) => {
      chai.passport.use(strategy)
        .fail((i, s) => {
          info = i;
          status = s;
          done();
        })
        .authenticate();
    });

    it('should fail with info and status', () => {
      expect(info).to.be.an.object; // eslint-disable-line
      expect(info.message).to.equal('Missing credentials');
      expect(status).to.equal(400);
    });
  });

  describe('handling a request without a body, but no username and password', () => {
    const strategy = new Strategy((agencyid, loanerid, pincode, done) => { // eslint-disable-line
      throw new Error('should not be called');
    });

    let info;
    let status;

    before((done) => {
      chai.passport.use(strategy)
        .fail((i, s) => {
          info = i;
          status = s;
          done();
        })
        .req((req) => {
          req.body = {};
        })
        .authenticate();
    });

    it('should fail with info and status', () => {
      expect(info).to.be.an.object; // eslint-disable-line
      expect(info.message).to.equal('Missing credentials');
      expect(status).to.equal(400);
    });
  });

  describe('handling a request without a body, but no password', () => {
    const strategy = new Strategy((agencyid, loanerid, pincode, done) => { // eslint-disable-line
      throw new Error('should not be called');
    });

    let info;
    let status;

    before((done) => {
      chai.passport.use(strategy)
        .fail((i, s) => {
          info = i;
          status = s;
          done();
        })
        .req((req) => {
          req.body = {};
          req.body.loanerid = '0123456789';
        })
        .authenticate();
    });

    it('should fail with info and status', () => {
      expect(info).to.be.an.object; // eslint-disable-line
      expect(info.message).to.equal('Missing credentials');
      expect(status).to.equal(400);
    });
  });

  describe('handling a request without a body, but no username', () => {
    const strategy = new Strategy((agencyid, loanerid, pincode, done) => { // eslint-disable-line
      throw new Error('should not be called');
    });

    let info;
    let status;

    before((done) => {
      chai.passport.use(strategy)
        .fail((i, s) => {
          info = i;
          status = s;
          done();
        })
        .req(function(req) {
          req.body = {};
          req.body.pincode = '1324';
        })
        .authenticate();
    });

    it('should fail with info and status', () => {
      expect(info).to.be.an.object; // eslint-disable-line
      expect(info.message).to.equal('Missing credentials');
      expect(status).to.equal(400);
    });
  });

});
