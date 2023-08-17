'use strict';

import chai, {expect} from 'chai';
import chaiPassportStrategy from 'chai-passport-strategy';
import Strategy from '../strategy';

chai.use(chaiPassportStrategy);

describe('Strategy', () => {

  describe('handling a request with valid credentials in body using custom field names', () => {
    const strategy = new Strategy({agencyidField: 'agencyid', loaneridField: 'loanerid', pincodeField: 'pincode'}, (agencyid, loanerid, pincode, done) => {
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

  describe('handling a request with valid credentials in body using custom field names with object notation', () => {
    const strategy = new Strategy({agencyidField: 'user[agencyid]', loaneridField: 'user[loanerid]', pincodeField: 'user[pincode]'}, (agencyid, loanerid, pincode, done) => {
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
          req.body.user = {};
          req.body.user.agencyid = '123456';
          req.body.user.loanerid = '0123456789';
          req.body.user.pincode = '1234';
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
});

