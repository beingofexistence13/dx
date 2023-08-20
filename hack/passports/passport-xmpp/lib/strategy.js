/**
 * Module dependencies.
 */
var passport = require('passport-strategy')
  , util = require('util')
  , lookup = require('./utils').lookup
  , xmpp = require('./xmpp');

/**
 * `Strategy` constructor.
 *
 * The XMPP authentication strategy authenticates requests based on the
 * credentials submitted through an HTML-based login form.
 *
 * Applications must supply a `verify` callback which accepts `jid` and
 * `password` credentials, and then calls the `done` callback supplying a
 * `user`, which should be set to `false` if the credentials are not valid.
 * If an exception occured, `error` should be set.
 *
 * Optionally, `options` can be used to change the fields in which the
 * credentials are found.
 *
 * Options:
 *   - `jidField`  field name where the jid is found, defaults to _jid
 *   - `passwordField`  field name where the password is found, defaults to _password_
 *   - `preferredField` field name where te preferred authentication strategy is found, defaults to _preferred_
 *   - `passReqToCallback`  when `true`, `req` is the first argument to the verify callback (default: `false`)
 *
 * Examples:
 *
 *     passport.use(new XmppStrategy(
 *       function(jid, password, done) {
 *         User.findOne({ jid: jid, password: password [, preferred: 'PLAIN' ] }, function (error, user) {
 *           done(error, user);
 *         });
 *       }
 *     ));
 *
 * @param {Object} options
 * @param {Function} verify
 * @api public
 */
function Strategy(options) {
  if (typeof options === 'function') {
    verify = options;
    options = {};
  }

  if (!options) options = {};
    
  this._jidField = options.jidField || 'jid';
  this._passwordField = options.passwordField || 'password';
  this._preferredField = options.preferredField || 'preferred';
  
  passport.Strategy.call(this);
  this.name = 'xmpp';
  this._verify = xmpp;
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
  var jid = lookup(req.body, this._jidField) || lookup(req.query, this._jidField);
  var password = lookup(req.body, this._passwordField) || lookup(req.query, this._passwordField);
  var preferred = lookup(req.body, this._preferredField) || lookup(req.query, this._preferredField);
  if (!jid || !password) {
    return this.fail({ message: options.badRequestMessage || 'Missing credentials' }, 400);
  }
  
  var self = this;
  
  function verified(error, user, info) {
    if (error) { return self.error(error); }
    if (!user) { return self.fail(info); }
    self.success(user, info);
  }
  
  var options = {
      jid: jid,
      password: password
  }
  if (preferred) {
      options.preferred = preferred;
  }
  try {
    this._verify(req, options, verified);
  } catch (ex) {
    return self.error(ex);
  }
};


/**
 * Expose `Strategy`.
 */
module.exports = Strategy;
