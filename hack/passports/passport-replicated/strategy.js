var debug = require('debug')('passport:strategy:replicated')
var passport = require('passport-strategy')
var util = require('util')
var xtend = require('xtend')
var request = require('superagent')

function lookup (obj, field) {
  if (!obj) {
    return null
  }
  var chain = field.split(']').join('').split('[')
  for (var i = 0, len = chain.length; i < len; i++) {
    var prop = obj[chain[i]]
    if (typeof prop === 'undefined') {
      return null
    }
    if (typeof prop !== 'object') {
      return prop
    }
    obj = prop
  }
  return null
}

function ReplicatedStrategy (options, verify) {
  if (typeof options === 'function') {
    verify = options
    options = {}
  }

  options = xtend({
    url: process.env.REPLICATED_INTEGRATIONAPI || null,
    path: '/identity/v1/login'
  }, options)

  if (!verify) {
    throw new Error('Replicated Identity authentication strategy requires a verify function')
  }

  if (!options.url) {
    throw new Error('Replciated Identify Authentication Strategy requires a valid Replicated Integration API URL')
  }

  this._usernameField = options.usernameField || 'username'
  this._passwordField = options.passwordField || 'password'

  passport.Strategy.call(this)

  this.name = 'replicated'
  this._verify = verify
  this._options = options
}
util.inherits(ReplicatedStrategy, passport.Strategy)

ReplicatedStrategy.prototype.authenticate = function ReplicatedStrategyAuthenticate (req, options) {
  var self = this

  options = options || {}
  var username = lookup(req.body, this._usernameField) || lookup(req.query, this._usernameField)
  var password = lookup(req.body, this._passwordField) || lookup(req.query, this._passwordField)

  if (!username || !password) {
    return self.fail({ message: options.badRequestMessage || 'Missing credentials' }, 400)
  }

  function verified (err, user, info) {
    if (err) {
      debug('error', err)
      return self.error(err)
    }

    if (!user) {
      debug('no user', user, info)
      return self.fail(info)
    }

    debug('success', info)
    self.success(user, info)
  }

  request
    .post(self._options.url + self._options.path)
    .send({
      username: username,
      password: password
    })
    .end(function (err, res) {
      if (err) {
        debug('request error', err)
        return self.error(err.message || err)
      }

      if (self._passReqToCallback) {
        self._verify(req, res.body, verified)
      } else {
        self._verify(res.body, verified)
      }
    })
}

module.exports = ReplicatedStrategy
