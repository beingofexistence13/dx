/**
 * Module dependencies.
 */
var passport = require('passport-strategy')
  , util = require('util');


/**
 * `Strategy` constructor.
 *
 * The local authentication strategy authenticates requests based on the
 * credentials submitted through an HTML-based login form.
 *
 * Applications must supply a `verify` callback which accepts `username` and
 * `password` credentials, and then calls the `done` callback supplying a
 * `user`, which should be set to `false` if the credentials are not valid.
 * If an exception occured, `err` should be set.
 *
 * Optionally, `options` can be used to change the fields in which the
 * credentials are found.
 *
 * Options:
 *   - `usernameField`  field name where the username is found, defaults to _username_
 *   - `passwordField`  field name where the password is found, defaults to _password_
 *   - `passReqToCallback`  when `true`, `req` is the first argument to the verify callback (default: `false`)
 *
 * Examples:
 *
 *     passport.use(new LocalStrategy(
 *       function(username, password, done) {
 *         User.findOne({ username: username, password: password }, function (err, user) {
 *           done(err, user);
 *         });
 *       }
 *     ));
 *
 * @param {Object} options
 * @param {Function} verify
 * @api public
 */
function Strategy(verify) {
  if (!verify) { throw new TypeError('CoolaStrategy requires a verify callback'); }
  
  this._sessionIdentifier = null;
  
  passport.Strategy.call(this);
  
  this.name = 'coola';
  this._verify = verify;
}

/**
 * Inherit from `passport.Strategy`.
 */
util.inherits(Strategy, passport.Strategy);

/**
 * Authenticate request based on cookies.
 */
Strategy.prototype.authenticate = function(req, options) {
  options = options || {};
  var sessionIdentifier = req.param('token') || req.cookies.sessionIdentifier || null;
  
  var self = this;
  
  function verified(err, user, info) {
    if (err) { return self.error(err); }
    if (!user) { return self.fail(info); }
    self.success(user, info);
  }
  
  try {
    this._verify(sessionIdentifier, verified, req);
  } catch (ex) {
    return self.error(ex);
  }
};


/**
 * Expose `Strategy`.
 */
module.exports = Strategy;
