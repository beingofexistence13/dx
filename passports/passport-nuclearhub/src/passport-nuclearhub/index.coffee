passport = require 'passport'
util = require 'util'
signedRequest = require 'signed-request'

exports.Strategy = Strategy = (options, verify) ->
  if typeof options == 'function'
    verify = options
    options = {}

  if ! verify? then throw new Error 'NuclearHub authentication strategy requires a verify function'
  
  @_appSecret = options.appSecret or ''
  
  passport.Strategy.call this
  @name = 'nuclearhub'
  @_verify = verify
  @_passReqToCallback = options.passReqToCallback

util.inherits Strategy, passport.Strategy

Strategy.prototype.authenticate = (req, options) ->
  options ?= {}

  try
    data = signedRequest.parse req.body.signedData, @_appSecret, 3600
  catch e
    return @fail new Error "Invalid signed request"
  
  verified = (err, user, info) =>
    return @error err if err?
    return @fail info if !user
    @success user, info
  
  if @_passReqToCallback
    @_verify req, data, verified
  else
    @_verify data, verified
  
  return