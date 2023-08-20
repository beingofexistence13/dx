'use strict'

var STATUS_CODES = require('http').STATUS_CODES
var util = require('util')
var assert = require('assert')
var OpenIDStrategy = require('passport-openid').Strategy
var hyperquest = require('hyperquest')

var EMAIL_URL = 'https://authenticationapi.red-gate.com/identity/getfromredgateid?redGateId='

/**
 * `Strategy` constructor.
 *
 * The Red Gate ID authentication strategy authenticates requests by delegating to
 * Red Gate ID using the OpenID 2.0 protocol.
 *
 * Applications must supply a `validate` callback which accepts an `identifier`,
 * and optionally a service-specific `profile`, and then calls the `done`
 * callback supplying a `user`, which should be set to `false` if the
 * credentials are not valid.  If an exception occured, `err` should be set.
 *
 * Options:
 *   - `returnURL`  URL to which Red Gate ID will redirect the user after authentication
 *   - `realm`      the part of URL-space for which an OpenID authentication request is valid
 *
 * Examples:
 *
 *     passport.use(new RedGateIDStrategy({
 *         returnURL: 'http://localhost:3000/auth/Red Gate ID/return',
 *         realm: 'http://localhost:3000/'
 *       },
 *       function(identifier, done) {
 *         User.findByOpenID(identifier, function (err, user) {
 *           done(err, user);
 *         });
 *       }
 *     ));
 *
 * @param {Object} options
 * @param {Function} verify
 * @api public
 */
function Strategy(options, validate) {
  options = options || {}
  options.providerURL = options.providerURL || 'https://authentication.red-gate.com'
  //RedGate has its own system for "profile" exchange
  options.profile = false
  var prefix = options.providerURL + '/openid/user/'
  OpenIDStrategy.call(this, options, function (uri, done) {
    assert.equal(uri.substring(0, prefix.length), prefix)
    var user = {
      id: uri.substring(prefix.length),
      openID: uri
    }
    if (options.auth) {
      var url = EMAIL_URL + encodeURIComponent(user.id)
      var auth = options.auth.user + ':' + options.auth.pass
      hyperquest(url, {auth: auth}, function (err, res) {
        if (err) return done(err)
        var body = ''
        res.on('data', function (data) {
          body += data.toString()
        })
        .on('end', function () {
          if (res.statusCode === 200) {
            user = JSON.parse(body)
            user.openID = uri
            validate(user, done)
          } else {
            var err = new Error(body || STATUS_CODES[res.statusCode])
            err.code = (err.statusCode = res.statusCode)
            done(err)
          }
        })
      })
    } else {
      validate(user, done)
    }
  });
  this.name = 'redgate';
}

/**
 * Inherit from `OpenIDStrategy`.
 */
util.inherits(Strategy, OpenIDStrategy);


/**
 * Expose `Strategy`.
 */
module.exports = Strategy;