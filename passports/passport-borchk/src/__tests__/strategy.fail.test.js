'use strict';

import chai, {expect} from 'chai';
import chaiPassportStrategy from 'chai-passport-strategy';
import Strategy from '../strategy';

chai.use(chaiPassportStrategy);

describe('Strategy', () => {

  describe('failing authentication', () => {
    const strategy = new Strategy((agencyid, loanerid, pincode, done) => {
      return done(null, false);
    });

    let info;

    before((done) => {
      chai.passport.use(strategy)
        .fail((i) => {
          info = i;
          done();
        })
        .req((req) => {
          req.body = {};
          req.body.agencyid = '0123456789';
          req.body.loanerid = '0123456789';
          req.body.pincode = '0123456789';
        })
        .authenticate();
    });

    it('should fail', () => {
      expect(info).to.be.undefined; // eslint-disable-line
    });
  });

  describe('failing authentication with info', () => {
    const strategy = new Strategy((agencyid, loanerid, pincode, done) => {
      return done(null, false, {message: 'authentication failed'});
    });

    let info;

    before((done) => {
      chai.passport.use(strategy)
        .fail((i) => {
          info = i;
          done();
        })
        .req((req) => {
          req.body = {};
          req.body.agencyid = '0123456789';
          req.body.loanerid = '0123456789';
          req.body.pincode = '0123456789';
        })
        .authenticate();
    });

    it('should fail', () => {
      expect(info).to.be.an('object');
      expect(info.message).to.equal('authentication failed');
    });
  });

});
