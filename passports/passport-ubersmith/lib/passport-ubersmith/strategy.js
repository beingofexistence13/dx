/**
 * Module dependencies.
 */
var util = require('util');
var passport = require('passport-strategy');

var getItemFromUbersmith = function(method, params, key, done)
{
  var httpRequest = require('request');
  var url = this._ubersmithURL + '/?method=' + method + params;
  var uberOptions = {
    'url': url,
    'auth': { 'user': this._ubersmithAPIUsername,
      'pass': this._ubersmithAPIPassword,
      'sendImmediately': true
    },
    json: true
  };

  httpRequest(uberOptions, function (err, res) {
    parseUbersmithResponse(err, res, done)
  });
};

var parseUbersmithResponse = function (err, res, done)
{
  if (err)
  {
    done(err);
  }
  else
  {
    if (res.body && res.body.data)
    {
      done(null, res.body.data);
    } else {
      done(null, false, {code: res.body.error_code, message: res.body.error_message});
    }
  }
};

var authenticateUbersmithUser = function(username, password, done) {
  getItemFromUbersmith('uber.check_login', '&login=' +  encodeURI(username) + '&pass=' + encodeURI(password), 'uber.check_login', done);
};

/**
 * `Strategy` constructor.
 *
 * The Ubersmith API authentication strategy authenticates requests by delegating to
 * the Ubersmith API.
 *
 * Applications must supply a callback which accepts an error or a user profile.
 *
 * Options:
 *   - `ubersmithURL` The url to your Ubersmith Frontend
 *   - `ubersmithAPIUsername`  The API user to use
 *   - `ubersmithAPIPassword`  The API password to use
 *
 * Examples:
 *
 *     passport.use(new UbersmithStrategy({
 *         ubersmithURL: 'https://portal.example.com/api/2.0',
 *         ubersmithAPIUsername: 'myapplication',
 *         ubersmithAPIPassword: 'Y7Y78HAVsdfVBbLCHxtdfaKasDd'
 *       },
 *       function(profile)) {});
 *
 * @param {Object} options
 * @api public
 */
function Strategy(options) {

  if (typeof options == 'function') {
    verify = options;
    options = {};
  }

  this._usernameField = options.usernameField || 'username';
  this._passwordField = options.passwordField || 'password';

  this._ubersmithURL = options.ubersmithURL || 'https://portal.example.com/api/2.0';
  this._ubersmithAPIUsername = options.ubersmithAPIUsername || 'myapplication';
  this._ubersmithAPIPassword = options.ubersmithAPIPassword || 'Y7Y78HAVsdfVBbLCHxtdfaKasDd';

  passport.Strategy.call(this);
  this.name = 'ubersmith';
}

/**
 * Inherit from `Passport Strategy`.
 */
util.inherits(Strategy, passport.Strategy);

Strategy.prototype.authenticate = function (req, options) {
  options = options || {};
  var username = lookup(req.body, this._usernameField) || lookup(req.query, this._usernameField);
  var password = lookup(req.body, this._passwordField) || lookup(req.query, this._passwordField);

  if (!username || !password) {
    return this.fail({ message: options.badRequestMessage || 'Missing credentials' }, 400);
  }

  var self = this;

  function verified(err, user, info) {
    if (err) { return self.error(err); }
    if (!user) { return self.fail(info); }
    else { return self.success(user, info); }
  }

  try {
    authenticateUbersmithUser(username, password, verified);
  } catch (e) {
    return self.error(e);
  }
};

/**
 * Expose `Strategy`.
 */
module.exports = Strategy;