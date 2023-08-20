/**
 * Module dependencies.
 */
var util = require('util')
var OAuthStrategy = require('passport-oauth').OAuthStrategy
var InternalOAuthError = require('passport-oauth').InternalOAuthError
var querystring = require('querystring')
var URL = require('url')
var URI = require('urijs')
require('urijs/src/URITemplate')
var async = require('async')
var request = require('request')

/**
 * `Strategy` constructor.
 *
 * The FellowshipOne authentication strategy authenticates requests by delegating
 * to Fellowship One using the OAuth 1.0a protocol.
 *
 * Applications must supply a `verify` callback which accepts a `token`,
 * `tokenSecret` and service-specific `profile`, and then calls the `done`
 * callback supplying a `user`, which should be set to `false` if the
 * credentials are not valid.  If an exception occured, `err` should be set.
 *
 * Options:
 *   - `churchCode`      Your Fellowship One church code
 *   - `staging`         Whether we're using staging or production
 *   - `consumerKey`     Fellowship One Developer Key
 *   - `consumerSecret`  Fellowship One Secret Key
 *   - `callbackURL`     URL to which Fellowship One will redirect the user after obtaining authorization
 *
 * Examples:
 *
 *     passport.use(new F1Strategy({
 *         churchCode: 'MYCHURCH',
 *         staging: true,
 *         consumerKey: '123',
 *         consumerSecret: 'xxx'
 *         callbackURL: 'https://www.example.net/auth/fellowshipone/callback'
 *       },
 *       function(token, tokenSecret, profile, done) {
 *         User.findOrCreate(..., function (err, user) {
 *           done(err, user)
 *         })
 *       }
 *     ))
 *
 * @param {Object} options
 * @param {Function} verify
 * @api public
 */

function Strategy (options, verify) {
  options = options || {}
  options.churchCode = options.churchCode
  options.apiURL = expand(options.apiURL || 'https://{churchCode}.fellowshiponeapi.com/v1', options)
  options.requestTokenURL = expand(options.requestTokenURL || options.apiURL + '/Tokens/RequestToken', options)
  options.accessTokenURL = expand(options.accessTokenURL || options.apiURL + '/Tokens/AccessToken', options)
  options.userAuthorizationURL = expand(options.userAuthorizationURL || options.apiURL + '/PortalUser/Login', options)

  OAuthStrategy.call(this, options, verify)
  this.options = options
  this.name = 'fellowshipone'

  // Override oauth.getOAuthAccessToken so that we can get the user profile from the
  // response headers.
  this._oauth.getOAuthAccessToken = this._getOAuthAccessToken.bind(this._oauth)

  // Override oauth._performSecureRequest to account for https://github.com/ciaranj/node-oauth/issues/182
  this._oauth._performSecureRequest = this._performSecureRequest.bind(this._oauth)
}

/**
 * Inherit from `OAuthStrategy`.
 */
util.inherits(Strategy, OAuthStrategy)

var expand = function (uri, options) {
  return URI.expand(uri, options).normalize().toString()
}

// Override oauth.getOAuthAccessToken so that we can get the user profile from the
// response headers.
Strategy.prototype._getOAuthAccessToken = function (oauthToken, oauthTokenSecret, oauthVerifier, callback) {
  /* jshint sub: true */
  var extraParams = {}
  if (typeof oauthVerifier === 'function') {
    callback = oauthVerifier
  } else {
    extraParams.oauth_verifier = oauthVerifier
  }

  this._performSecureRequest(oauthToken, oauthTokenSecret, this._clientOptions.accessTokenHttpMethod, this._accessUrl, extraParams, null, null,
    function (error, data, response) {
      if (error) {
        callback(error)
      } else {
        var results = querystring.parse(data)
        var oauthAccessToken = results['oauth_token']
        delete results['oauth_token']
        var oauthAccessTokenSecret = results['oauth_token_secret']
        delete results['oauth_token_secret']

        // this is the only customization really
        results.userURL = response.headers['content-location']

        callback(null, oauthAccessToken, oauthAccessTokenSecret, results)
      }
    })
}

// Override oauth._performSecureRequest to account for https://github.com/ciaranj/node-oauth/issues/182
Strategy.prototype._performSecureRequest = function (oauthToken, oauthTokenSecret, method, url, extraParams, postBody, postContentType, callback) {
  /* jshint shadow: true, sub: true, eqnull: true */
  var orderedParameters = this._prepareParameters(oauthToken, oauthTokenSecret, method, url, extraParams)

  if (!postContentType) {
    postContentType = 'application/x-www-form-urlencoded'
  }
  var parsedUrl = URL.parse(url, false)
  if (parsedUrl.protocol === 'http:' && !parsedUrl.port) {
    parsedUrl.port = 80
  } else if (parsedUrl.protocol === 'https:' && !parsedUrl.port) {
    parsedUrl.port = 443
  }

  var headers = {}
  var authorization = this._buildAuthorizationHeaders(orderedParameters)
  if (this._isEcho) {
    headers['X-Verify-Credentials-Authorization'] = authorization
  } else {
    headers['Authorization'] = authorization
  }

  headers['Host'] = parsedUrl.host

  for (var key in this._headers) {
    if (this._headers.hasOwnProperty(key)) {
      headers[key] = this._headers[key]
    }
  }

  // Filter out any passed extraParams that are really to do with OAuth
  for (key in extraParams) {
    if (this._isParameterNameAnOAuthParameter(key)) {
      delete extraParams[key]
    }
  }

  if ((method === 'POST' || method === 'PUT') && (postBody == null && extraParams != null)) {
    // Fix the mismatch between the output of querystring.stringify() and this._encodeData()
    postBody = querystring.stringify(extraParams)
      .replace(/!/g, '%21')
      .replace(/'/g, '%27')
      .replace(/\(/g, '%28')
      .replace(/\)/g, '%29')
      .replace(/\*/g, '%2A')
  }

  if (postBody) {
    if (Buffer.isBuffer(postBody)) {
      headers['Content-length'] = postBody.length
    } else {
      headers['Content-length'] = Buffer.byteLength(postBody)
    }
    headers['Content-Type'] = postContentType
  } else {
    headers['Content-length'] = 0
  }

  var path
  if (!parsedUrl.pathname || parsedUrl.pathname === '') parsedUrl.pathname = '/'
  if (parsedUrl.query) path = parsedUrl.pathname + '?' + parsedUrl.query
  else path = parsedUrl.pathname

  var request
  if (parsedUrl.protocol === 'https:') {
    request = this._createClient(parsedUrl.port, parsedUrl.hostname, method, path, headers, true)
  } else {
    request = this._createClient(parsedUrl.port, parsedUrl.hostname, method, path, headers)
  }

  var clientOptions = this._clientOptions
  if (callback) {
    var data = ''
    var self = this

    // Some hosts *cough* google appear to close the connection early / send no content-length header
    // allow this behaviour.
    var allowEarlyClose = false // OAuthUtils.isAnEarlyCloseHost(parsedUrl.hostname)
    var callbackCalled = false
    var passBackControl = function (response) {
      if (!callbackCalled) {
        callbackCalled = true
        if (response.statusCode >= 200 && response.statusCode <= 299) {
          callback(null, data, response)
        } else {
          // Follow 301 or 302 redirects with Location HTTP header
          if ((response.statusCode === 301 || response.statusCode === 302) && clientOptions.followRedirects && response.headers && response.headers.location) {
            self._performSecureRequest(oauthToken, oauthTokenSecret, method, response.headers.location, extraParams, postBody, postContentType, callback)
          } else {
            var err = new Error()
            err.statusCode = response.statusCode
            err.data = data
            callback(err, data, response)
          }
        }
      }
    }

    request.on('response', function (response) {
      response.setEncoding('utf8')
      response.on('data', function (chunk) {
        data += chunk
      })
      response.on('end', function () {
        passBackControl(response)
      })
      response.on('close', function () {
        if (allowEarlyClose) {
          passBackControl(response)
        }
      })
    })

    request.on('error', function (err) {
      if (!callbackCalled) {
        callbackCalled = true
        callback(err)
      }
    })

    if ((method === 'POST' || method === 'PUT') && postBody != null && postBody !== '') {
      request.write(postBody)
    }
    request.end()
  } else {
    if ((method === 'POST' || method === 'PUT') && postBody != null && postBody !== '') {
      request.write(postBody)
    }
    return request
  }
}

/**
 * Implement this so that we can send the callback... This doesn't seem to be
 * working right for the oauth module...
 */
Strategy.prototype.userAuthorizationParams = function (options) {
  return {
    oauth_callback: this._callbackURL
  }
}

// retrieve a profile-related object asynchronously and yield its body
Strategy.prototype._retrieve = function (oauth, url, callback) {
  process.nextTick(function () {
    request.get(url, {
      oauth: oauth,
      json: true
    }, function (err, res, body) {
      if (err) {
        console.error(err)
        return callback(new InternalOAuthError('failed to fetch user profile', err))
      }
      if (res.statusCode > 299) {
        err = new InternalOAuthError('error ' + res.statusCode + ' while fetching user profile: ' + body)
        err.statusCode = res.statusCode
        console.error('failed to fetch user profile: %j', err)
        return callback(err)
      }

      if (!body) return callback(new InternalOAuthError('Fellowship One returned invalid reply object %s', body))

      callback(null, body)
    })
  })
}

// transform an array of [ {person:...}, {communications:...}] into a profile
Strategy.prototype.transform = function (err, items, done) {
  if (err) return done(err)

  if (!items[0].person) return done(new InternalOAuthError('Fellowship One returned invalid reply object %s', items[0]))
  if (!items[1].communications) return done(new InternalOAuthError('Fellowship One returned invalid reply object %s', items[1]))

  var user = items[0].person
  var profile = {}
  profile.id = Number(user['@id'])
  profile.uri = user['@uri']
  profile.displayName = user.goesByName ? user.goesByName : user.firstName
  profile.fullName = profile.displayName + ' ' + user.lastName

  var communication = items[1].communications.communication || []

  var emails = communication.reduce(function (memo, comm) {
    if (comm.communicationGeneralType === 'Email') {
      memo.push({
        value: comm.communicationValue,
        type: comm.communicationType.name,
        preferred: comm.preferred === 'true'
      })
    }
    return memo
  }, [])

  var email = emails.reduce(function (memo, email) {
    if (email.preferred) return email
    else if (memo) return memo
    else return email
  }, undefined)
  if (email && email.value) profile.email = email.value

  done(null, profile)
}

/**
 * Retrieve user profile from Fellowship One.
 *
 * This function constructs a normalized profile, with the following properties:
 *
 *   - `id`
 *   - `displayName`
 *   - `email`
 *
 * @param {String} token
 * @param {String} tokenSecret
 * @param {Object} params - this should have a userURL property, injected by the _oauth.getOAuthAccessToken call
 * @param {Function} done
 * @api protected
 */
Strategy.prototype.userProfile = function (token, tokenSecret, params, done) {
  if (!params || !params.userURL) return done(null, {})

  var oauth = {
    consumer_key: this.options.consumerKey,
    consumer_secret: this.options.consumerSecret,
    token: token,
    token_secret: tokenSecret
  }

  // turn the person and communications record into a profile
  async.map([params.userURL, params.userURL + '/Communications'], this._retrieve.bind(this, oauth), function (err, items) {
    this.transform(err, items, done)
  }.bind(this))
}

/**
 * Expose `Strategy`.
 */
module.exports = Strategy
