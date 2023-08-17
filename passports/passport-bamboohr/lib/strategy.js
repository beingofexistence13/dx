/**
 * Module dependencies.
 */
var passport = require('passport-strategy')
  , util = require('util')
  , lookup = require('./utils').lookup
  , request = require('request');


/**
 * `Strategy` constructor.
 *
 * The BambooHR authentication strategy authenticates requests based on the
 * credentials submitted through an HTML-based login form and passed through
 * to BambooHR servers.
 *
 * Applications must supply a `next` callback which accepts `user` object
 * (which contains username, company, userId, employeeId, key from BambooHR),
 * and then calls the `done` callback supplying a `user`, which should be 
 * set to `false` if the credentials are not valid.
 * If an exception occured, `err` should be set.
 *
 * Optionally, `options` can be used to change the fields in which the
 * credentials are found.
 *
 * Options:
 *   - `usernameField`  field name where the username is found, defaults to _username_
 *   - `passwordField`  field name where the password is found, defaults to _password_
 *   - `companyField`  field name where the company name is found, defaults to _company_
 *   - `passReqToCallback`  when `true`, `req` is the first argument to the verify callback (default: `false`)
 *
 * Examples:
 *
 *     passport.use(new BamboohrStrategy({
 *         apiKey: "asdf"
 *       },
 *       function(user, done) {
 *         User.findOne({ bambooId: user.userId }, function (err, user) {
 *           done(err, user);
 *         });
 *       }
 *     ));
 *
 * @param {Object} options
 * @param {Function} next  Called after user is verified on BambooHR server.
 * @api public
 */
function Strategy(options, next) {
  options = options || {};

  if (!options.apiKey) { throw new TypeError("BamboohrStrategy options requires a 'apiKey' property"); }
  if (!next) {throw new TypeError("BamboohrStrategy requires a next callback"); }

  this._apiKey = options.apiKey;
  this._usernameField = options.usernameField || 'username';
  this._passwordField = options.passwordField || 'password';
  this._companyField = options.companyField || 'company';
  this._next = next;

  passport.Strategy.call(this);

  this.name = 'bamboohr';
  this._passReqToCallback = options.passReqToCallback;
}

/**
 * Inherit from `LocalStrategy`.
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
  var username = lookup(req.body, this._usernameField) || lookup(req.query, this._usernameField);
  var password = lookup(req.body, this._passwordField) || lookup(req.query, this._passwordField);
  var company = lookup(req.body, this._companyField) || lookup(req.query, this._companyField);
  
  if (!username || !password || !company) {
    return this.fail({ message: options.badRequestMessage || 'Missing credentials' }, 400);
  }
  
  var self = this;
  
  function verified(err, user, info) {
    if (err) { return self.error(err); }
    if (!user) { return self.fail(info); }
    self.success(user, info);
  }

  this._verify = function (req, username, password, company, apiKey, next) {
    var reqOptions = {
      uri: 'https://api.bamboohr.com/api/gateway.php/' + company + "/v1/login",
      form: {
        user: username,
        password: password,
        applicationKey: apiKey
      },
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        "accept": "application/json"        
      },
      json:true // The request doesn't parse the JSON otherwise?
    };

    request.post(reqOptions, function(error, response, body) {
      if (error || !body || !body.success) {
        return self.error(error || "Error: Could not authenticate with BambooHR.");
      } else {
        var user = {
          username: username,
          company: company,
          userId: body.userId,
          employeeId: body.employeeId,
          key: body.key
        };

        // Get Full Name Information
        var reqOptions = {
          uri: 'https://api.bamboohr.com/api/gateway.php/' + company + "/v1/employees/0?fields=firstName,lastName",
          auth: { 
            "user": user.key,
            "pass": "x"
          },
          form: { 
            "fields": "firstName,lastName"
          },
          headers: {
            "content-type": "application/x-www-form-urlencoded",
            "accept": "application/json"        
          },
          json:true // The request doesn't parse the JSON otherwise?
        }
        request.get(reqOptions, function(error, response, body) {
          if (error || !body ) {
            return self.error(error || "Error: Could not authenticate with BambooHR.");
          } else {
            user.fullName = body.firstName + " " + body.lastName;
            try {
              if (self._passReqToCallback) {
                next(req, user, verified);
              } else {
                next(user, verified);
              }
            } catch (ex) {
              return self.error(ex);
            }
          }
        });
      }
    });
  }
  
  try {
    this._verify(req, username, password, company, this._apiKey, this._next);
  } catch (ex) {
    return self.error(ex);
  }
};


/**
 * Expose `Strategy`.
 */
module.exports = Strategy;
