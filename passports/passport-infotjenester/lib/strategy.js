'use strict';
/**
 * Module dependencies.
 */
const passport    = require('passport-strategy');
const https       = require('https');
const util        = require('util');

const hrLogonOptions = {
  host: 'https://hrlogon.net',
  path: '/Auth.aspx?response_type=sessionguid',
  method: 'GET',
  headers: {}
};

const getUserOptions = {
  hostname: 'logon.hrapis.net',
  path: '',
  method: 'GET',
  headers: {
    'Content-Type': 'application/json'
  }
};

function Strategy(options, verify) {
  this.options = options || {};
  this.options.clientApiKey = options.clientApiKey;
  this.options.callbackURL = options.callbackURL;
  this.options.vendor = options.vendor || 1;
  this.options.passReqToCallback = options.passReqToCallback || false;
  this.verify = verify;

  passport.Strategy.call(this);
  this.name = 'infotjenester';
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
  var self = this;
  if(!req.query['Code']){
    req['ItasClientApiKey'] = self.options.clientApiKey;
    self.redirect(hrLogonOptions.host + hrLogonOptions.path + `&RetUrl=${self.options.callbackURL}&vendor=${self.options.vendor}`);
  }else{
    getUserOptions.headers['ItasClientApiKey'] = self.options.clientApiKey;
    getUserOptions.path = '/session/' + req.query['Code'] + '/userinfoextended';

    https.get(getUserOptions,function(res){
      res.setEncoding('utf8');
      let body = '';
      res.on("data", chunk => body += chunk);
      res.on('end', function() {
        let profile = JSON.parse(body);
        profile.SessionGuid = req.query['Code'];

        if(!profile) return self.fail();
        else {

          let callback = (err,user) => {
            if(err) return self.error(err);
            if(!user) return self.fail();
            return self.success(user);
          };

          let params = [];

          if(self.options.passReqToCallback) params.push(req);
          params.push(profile);
          params.push(callback);

          return self.verify(...params)
        }
      });
    }).on('error', self.error);
  }
};

/**
 * Expose `Strategy`.
 */
 module.exports = Strategy;
