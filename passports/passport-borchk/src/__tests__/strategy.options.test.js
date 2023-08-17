'use strict';

import chai, {expect} from 'chai';
import chaiPassportStrategy from 'chai-passport-strategy';
import Strategy from '../strategy';

chai.use(chaiPassportStrategy);

describe('Strategy', () => {

  describe('handling a request without a body, but no username and password, with message option to authenticate', function() {
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
        .authenticate({badRequestMessage: 'Something is wrong with this request'});
    });

    it('should fail with info and status', () => {
      expect(info).to.be.an.object; // eslint-disable-line
      expect(info.message).to.equal('Something is wrong with this request');
      expect(status).to.equal(400);
    });
  });

});
