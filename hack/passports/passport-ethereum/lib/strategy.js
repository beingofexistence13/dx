/**
 * Module dependencies.
 */
var passport = require('passport-strategy')
  , util = require('util')
  , lookup = require('./utils').lookup;


/**
 * `Strategy` constructor.
 *
 * The ethereum authentication strategy authenticates requests based on the
 * credentials submitted through an HTML-based login form.
 *
 * Applications must supply a `verify` callback which accepts `address` and
 * `signature` credentials, and then calls the `done` callback supplying a
 * `user`, which should be set to `false` if the credentials are not valid.
 * If an exception occured, `err` should be set.
 *
 * Optionally, `options` can be used to change the fields in which the
 * credentials are found.
 *
 * Options:
 *   - `addressField`  field name where the address is found, defaults to _address_
 *   - `signatureField`  field name where the signature is found, defaults to _signature_
 *   - `passReqToCallback`  when `true`, `req` is the first argument to the verify callback (default: `false`)
 *
 *
 * @param {Object} options
 * @param {Function} verify
 * @api public
 */
function Strategy (options, verify) {
  if (typeof options == 'function') {
    verify = options;
    options = {};
  }
  if (!verify) { throw new TypeError('EthereumStrategy requires a verify callback'); }

  this._addressField = options.addressField || 'address';
  this._signatureField = options.signatureField || 'signature';

  passport.Strategy.call(this);
  this.name = 'ethereum';
  this._verify = verify;
  this._passReqToCallback = options.passReqToCallback;
}

/**
 * Inherit from `passport.Strategy`.
 */
util.inherits(Strategy, passport.Strategy);

/**
 * Authenticate request based on the contents of a form submission.
 *
 * @param {Object} req
 * @api protected
 */
Strategy.prototype.authenticate = function (req, options) {
  options = options || {};
  var address = lookup(req.body, this._addressField) || lookup(req.query, this._addressField);
  var signature = lookup(req.body, this._signatureField) || lookup(req.query, this._signatureField);

  if (!address || !signature) {
    return this.fail({ message: options.badRequestMessage || 'Missing credentials' }, 400);
  }

  var self = this;

  function verified (err, user, info) {
    if (err) { return self.error(err); }
    if (!user) { return self.fail(info); }
    self.success(user, info);
  }

  try {
    if (self._passReqToCallback) {
      this._verify(req, address, signature, verified);
    } else {
      this._verify(address, signature, verified);
    }
  } catch (ex) {
    return self.error(ex);
  }
};


/**
 * Expose `Strategy`.
 */
module.exports = Strategy;
