/**
 * Module dependencies.
 */
var passport = require('passport-strategy')
  , util = require('util')
  , lookup = require('./utils').lookup;


/**
 * `Strategy` constructor.
 *
 * The authtoken authentication strategy authenticates requests based on the
 * credentials submitted through an API-based login.
 *
 * Applications must supply a `verify` callback which accepts `token` and
 * others credentials, and then calls the `done` callback supplying a
 * `user`, which should be set to `false` if the credentials are not valid.
 * If an exception occured, `err` should be set.
 *
 * Optionally, `options` can be used to change the fields in which the
 * credentials are found.
 *
 * Options:
 *   - `authtokenField`  field name where the authtoken is found, defaults to _token_
 *   - `checkFields`  field names array where the other phrase are found, defaults to _[]_
 *   - `passReqToCallback`  when `true`, `req` is the first argument to the verify callback (default: `false`)
 *
 * Examples:
 *
 *     passport.use(new AuthTokenStrategy(
 *       function(token, other1, other2, done) {
 *         User.findOne({ token: token, other1: other1 }, function (err, user) {
 *           done(err, user);
 *         });
 *       }
 *     ));
 *
 * @param {Object} options
 * @param {Function} verify
 * @api public
 */
function Strategy(options, verify) {
  if (typeof options == 'function') {
    verify = options;
    options = {};
  }
  if (!verify) { throw new TypeError('AuthTokenStrategy requires a verify callback'); }
  
  this._authtokenField = options.authtokenField || 'token';
  this._checkFields = options.checkFields || [];
  if (typeof(this._checkFields) === 'string') {
    this._checkFields = this._checkFields.split(',');
  }
  
  passport.Strategy.call(this);
  this.name = 'authtoken';
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
Strategy.prototype.authenticate = function(req, options) {
  options = options || {};
  var token = lookup(req.body, this._authtokenField) || lookup(req.query, this._authtokenField);
  var keys = this._checkFields;
  var values = [];
  for (var i = 0, len = keys.length; i < len; ++i) {
    values.push( lookup(req.body, keys[i]) || lookup(req.query, keys[i]) );
  }
  
  if (!token) {
    return this.fail({ message: options.badRequestMessage || 'Missing credentials' }, 400);
  }
  
  var self = this;
  
  function verified(err, user, info) {
    if (err) { return self.error(err); }
    if (!user) { return self.fail(info); }
    self.success(user, info);
  }
  
  try {
    var args = [token].concat(values);
    args.push(verified);
    if (self._passReqToCallback) {
      args.unshift(req);
    }
    this._verify.apply(self, args);
  } catch (ex) {
    return self.error(ex);
  }
};


/**
 * Expose `Strategy`.
 */
module.exports = Strategy;

