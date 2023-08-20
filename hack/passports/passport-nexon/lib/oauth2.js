"use strict";

/**
 * Passport wrapper for main st. oauth2
 */
var querystring= require('querystring')
  , OAuth2Strategy = require('passport-oauth2')
  , SessionStateStore = require('./state/session')
  , url = require('url')
  , util = require('util')
  , InternalOAuthError = require('./errors/internaloautherror');

/**
 * Strategy constructor
 *
 */

var Strategy = function(options, verify) {
  options = options || {};
  options.baseURL = options.baseURL || 'htttps://accounts.nexon.net';
  if(options.authorizationURL.indexOf('http') < 0) options.authorizationURL = options.baseURL + (options.authorizationURL || '/account/authorize');
  if(options.tokenURL.indexOf('http') < 0) options.tokenURL = options.baseURL + (options.tokenURL || '/oauth2/v1/token');
  if(options.revokeURL.indexOf('http') < 0) options.revokeURL = options.baseURL + (options.revokeURL || '/oauth2/v1/revoke');
  if(options.logoutURL.indexOf('http') < 0) options.logoutURL = options.baseURL + (options.logoutURL || '/account/logout');
  options.store = new SessionStateStore('oauth2:' + url.parse(options.authorizationURL).hostname); // override our sessionState for additional state info process (redirect_uri...)

  OAuth2Strategy.call(this, options, verify);

  // it is only for 'Authorization' post header setting 
  this._oauth2.__proto__.getOAuthAccessToken= function(code, params, callback) {
    var params= params || {};
    params['client_id'] = this._clientId;
    var codeParam = (params.grant_type === 'refresh_token') ? 'refresh_token' : 'code';
    params[codeParam]= code;

    var post_headers= {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic ' + Buffer.from(this._clientId + ':' + this._clientSecret).toString('base64')  // this is for main st.
    };
    var post_data= querystring.stringify( params );

    this._request("POST", this._getAccessTokenUrl(), post_headers, post_data, null, function(error, data, response) {
      if( error )  callback(error);
      else {
        var results;
        try {
          results= JSON.parse( data );
        }
        catch(e) {
          results= querystring.parse( data );
        }
        var access_token= results["access_token"];
        var refresh_token= results["refresh_token"];
        delete results["refresh_token"];
        callback(null, access_token, refresh_token, results); // callback results =-=
      }
    });
  }

  this.name    = 'nexon';
  this.options = options;

  this._skipUserProfile = (options.skipUserProfile === undefined) ? false : options.skipUserProfile;
};

util.inherits(Strategy, OAuth2Strategy);

Strategy.prototype.userProfile = function(accessToken, done) {
  this._oauth2.get(this.options.userProfileURL, accessToken, function (err, body, res) {
    if (err) { return done(new InternalOAuthError('failed to fetch user profile', err)); }
    
    try {
      var json = JSON.parse(body);
      
      var profile = { provider: 'nexon' };
      profile.id = json.user_no;
      profile.email = json.user_id; // user_id is email in main st.
      profile.name = json.profile.profile_name;

      profile._raw = body;
      profile._json = json;
      
      done(null, profile);
    } catch(e) {
      done(e);
    }
  });
};

/***
 * 1. revoke existed access_token (it will revoke refresh_token automatically)
 * 2. redirect to /account/logout page in order to wipe out user client browser cookie values under accounts.nexon.net domain 
 */
Strategy.prototype.logout = function(req, res, callback) {
  if(req.session.accessToken) {
    var post_headers= {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic ' + Buffer.from(this.options.clientID + ':' + this.options.clientSecret).toString('base64')  // this is for main st.
    };
    var post_data= querystring.stringify({
        token: req.session.accessToken,
        token_type_hint: 'access_token'
      });
    

    var self = this;
    // #1
    this._oauth2._request("POST", this.options.revokeURL, post_headers, post_data, null, function(error, data, response) {
      if( error ) {
        // callback(error);
        req.session.destroy(function(e) {
          req.logout();
          res.redirect(req.originalUrl);
        });        
      }
      else {
        // #2
        var state = self.options.store.storeOnly(req);
        req.session.destroy(function(e) {
          req.logout();
          var url = req.protocol + '://' + req.get('host') + req.originalUrl;
          res.redirect(self.options.logoutURL + '?' + querystring.stringify({state: state, redirect_uri: url}));
        });
      }
    });
  } else {
    if(req.query.state) {
      try {
        this.options.store.verify(req, req.query.state, callback);
        return;
      } catch(e) {
      }
    }
    res.redirect(req.query.redirect_url);
  }
};

module.exports = Strategy;

