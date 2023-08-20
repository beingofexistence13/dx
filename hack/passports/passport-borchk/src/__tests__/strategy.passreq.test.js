'use strict';

import chai, {expect} from 'chai';
import chaiPassportStrategy from 'chai-passport-strategy';
import Strategy from '../strategy';

chai.use(chaiPassportStrategy);

describe('Strategy', () => {

  describe('passing request to verify callback', () => {
    const strategy = new Strategy({passReqToCallback: true}, (req, agencyid, loanerid, pincode, done) => {
      if (agencyid === '123456' && loanerid === '0123456789' && pincode === '1234') {
        return done(null, {id: '1234'}, {scope: 'read', foo: req.headers['x-foo']});
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
          req.headers['x-foo'] = 'hello';

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

    it('should supply request header in info', () => {
      expect(info.foo).to.equal('hello');
    });
  });

});
