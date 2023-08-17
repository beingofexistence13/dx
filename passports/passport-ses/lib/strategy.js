var passport = require('passport-strategy')
var crypto = require('crypto')
var URL = require('url-parse')
var aws = require('aws-sdk')
var tokenstore = require('./tokenstore')
var cache = {}

function Strategy(options, verify) {
  options = options || {}
  
  if (!options.accessKeyId || !options.secretAccessKey) {
    throw new Error('AWS access key and secret are required');
  }
  
  if (!options.source) {
    throw new Error('Source email address is required')
  }
  
  if (!options.hostname) {
    throw new Error('Hostname is required')
  }
  
  if (!verify) {
    throw new Error('SES Strategy requires a verify callback')
  }
  
  passport.Strategy.call(this);
  
  this._client = new aws.SES({
    apiVersion: options.apiVersion || '2010-12-01',
    accessKeyId: options.accessKeyId,
    secretAccessKey: options.secretAccessKey,
    region: options.region || 'us-east-1',
  })
  
  this._verify = verify;
  
  this._source = options.source
  
  this._passReqToCallback = options.passReqToCallback
  
  this._signinSubject = options.signinSubject
  
  this._tokenStore = options.tokenStore || tokenstore.createTokenStore()
    
  this._baseUrl = new URL(options.hostname)
  
  this._baseUrl.scheme = options.scheme || 'https'  
}

Strategy.prototype.authenticate = function(req, options) {
  options = options || {}
  var token = req.query.token
  var email = req.query.email
  var self = this
  
  if (token) {
    self._tokenStore.get(token, function(err, foundToken) {
      if (err) { return self.error(err) }
      
      if (!foundToken) {
        return self.fail({message: 'Invalid token'})
      }
    
      if (!!foundToken.isValid && !foundToken.isValid()) {
        return self.fail({message: 'Expired token'})
      }
      
      email = foundToken.email
      foundToken.destroy && foundToken.destroy()

      function verified(err, user, info) {
        if (err) { return self.error(err); }
        if (!user) { return self.fail(info); }
        self.success(user, info);
      }

      try {
        if (self._passReqToCallback) {
          self._verify(req, email, verified)
        } else {
          self._verify(email, verified)
        }
      } catch(ex) {
        self.error(ex)
      }
      
    })
    
  } else {
    if (!email) {
      return self.fail(options.badRequestMessage || 'Missing email', 400);
    }
    
    crypto.randomBytes(10, function(err, buf) {
      if (err) { return self.error(err); }
      
      token = buf.toString('hex');
      
      self._tokenStore.set(token, email, function(err, savedToken) {
        
        var requrl = new URL(req.url)
        var tokenurl = new URL(self._baseUrl.toString())
        tokenurl.pathname = requrl.pathname
        tokenurl.query = { token }

        self._client.sendEmail({
          Source: self._source,
          Destination: { ToAddresses: [email] },
          Message: {
            Subject: {
              Data: self._signinSubject || 'Sign in to App',
            },
            Body: {
              Text: {
                Data: `Click and confirm that you want to sign in using this link:\n${ tokenurl.toString() }`,
              },
            },
          },
        }, function(err, data) {
          if (err) { return self.error(err) }

          if (options.emailSentRedirect) {
            self.redirect(options.emailSentRedirect)
          } else {
            self.pass()
          }
        })
        
      })
    })
  }
};

module.exports = Strategy;
