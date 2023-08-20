'use strict';

import chai, {expect} from 'chai';
import chaiPassportStrategy from 'chai-passport-strategy';
import Strategy from '../strategy';

chai.use(chaiPassportStrategy);

describe('Strategy', () => {

  describe('encountering an error during verification', () => {
    const strategy = new Strategy((agencyid, loanerid, pincode, done) => {
      done(new Error('something went wrong'));
    });

    let err;

    before((done) => {
      chai.passport.use(strategy)
        .error((e) => {
          err = e;
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

    it('should error', () => {
      expect(err).to.be.an.instanceof(Error);
      expect(err.message).to.equal('something went wrong');
    });
  });

  describe('encountering an exception during verification', () => {
    const strategy = new Strategy((agencyid, loanerid, pincode, done) => { // eslint-disable-line
      throw new Error('something went horribly wrong');
    });

    let err;

    before((done) => {
      chai.passport.use(strategy)
        .error((e) => {
          err = e;
          done();
        })
        .req((req) => {
          req.query = {};
          req.query.agencyid = '0123456789';
          req.query.loanerid = '0123456789';
          req.query.pincode = '0123456789';
        })
        .authenticate();
    });

    it('should error', () => {
      expect(err).to.be.an.instanceof(Error);
      expect(err.message).to.equal('something went horribly wrong');
    });
  });

});
