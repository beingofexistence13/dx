'use strict';

/**
 * @file
 * Borrower Check authentication strategy for Passport and Node.js
 * Based on the work done by Jared Hanson in passport-locale -- https://github.com/jaredhanson/passport-local
 */

/**
 * Module dependencies.
 */
import passport from 'passport-strategy';
import lookup from './utils';

export default class Strategy extends passport.Strategy {
  constructor(options, verify) {
    super();

    if (typeof options === 'function') {
      verify = options;
      options = {};
    }
    if (!verify) {
      throw new TypeError('BorchkStrategy requires a verify callback');
    }

    this._agencyidField = options.agencyidField || 'agencyid';
    this._loaneridField = options.loaneridField || 'loanerid';
    this._pincodeField = options.pincodeField || 'pincode';

    passport.Strategy.call(this);
    this.name = 'borchk';
    this._verify = verify;
    this._passReqToCallback = options.passReqToCallback;
  }

  /**
   * Authenticate request based on the contents of a form submission.
   *
   * @param {Object} req
   * @param {Object} options
   * @api protected
   */
  authenticate(req, options) {
    options = options || {};
    var agencyid = lookup(req.body, this._agencyidField) || lookup(req.query, this._agencyidField);
    var loanerid = lookup(req.body, this._loaneridField) || lookup(req.query, this._loaneridField);
    var pincode = lookup(req.body, this._pincodeField) || lookup(req.query, this._pincodeField);

    if (!agencyid || !loanerid || !pincode) {
      return this.fail({message: options.badRequestMessage || 'Missing credentials'}, 400);
    }

    var self = this;

    function verified(err, user, info) {
      if (err) {
        return self.error(err);
      }
      if (!user) {
        return self.fail(info);
      }
      self.success(user, info);
    }

    try {
      if (self._passReqToCallback) {
        this._verify(req, agencyid, loanerid, pincode, verified);
      }
      else {
        this._verify(agencyid, loanerid, pincode, verified);
      }
    }
    catch (ex) {
      return self.error(ex);
    }
  }
}

