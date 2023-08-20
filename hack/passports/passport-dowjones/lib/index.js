/**
 * Module dependencies.
 */
var util = require('util'),
  OAuth2Strategy = require('passport-oauth').OAuth2Strategy,
  xtend = require('xtend'),
  request = require('request'),
  pkg = require('../package.json');

function encodeClientInfo(obj) {
  var str = JSON.stringify(obj);
  return new Buffer(str).toString('base64')
      .replace(/\+/g, '-') // Convert '+' to '-'
      .replace(/\//g, '_') // Convert '/' to '_'
      .replace(/=+$/, ''); // Remove ending '='
}

var clientInfoHeader = encodeClientInfo({ name: 'passport-dowjones', version: pkg.version });

var Profile = require('./Profile');

/**
 * `Strategy` constructor.
 *
 *
 * @param {Object} options
 * @param {Function} verify
 * @api public
 */
function Strategy(options, verify) {
  ['clientID',
    'clientSecret',
    'callbackURL'].forEach(function (k) {
    if(!options[k]){
      throw new Error('You must provide the ' + k + ' configuration value to use passport-dowjones.');
    }
  });


  this.options = xtend({}, options, {
    authorizationURL: 'https://sso.accounts.dowjones.com/authorize',
    tokenURL:         'https://sso.accounts.dowjones.com/oauth/token',
    userInfoURL:      'https://sso.accounts.dowjones.com/userinfo',
    apiUrl:           'https://sso.accounts.dowjones.com/api',
    delegationUrl:    'https://sso.accounts.dowjones.com/delegation'
  });


  this._base = Object.getPrototypeOf(Strategy.prototype);
  this._base.constructor.call(this, this.options, verify);

  this.name = 'dowjones';
}

/**
 * Inherit from `OAuth2Strategy`.
 */
util.inherits(Strategy, OAuth2Strategy);

Strategy.prototype.authenticate = function (req, options) {
  if (req.query && req.query.error) {
    return this.fail(req.query.error);
  }
  this._base.authenticate.call(this, req, options);
};

Strategy.prototype.authorizationParams = function(options) {
  return {connection: options.connection, audience: options.audience};
};


Strategy.prototype._getAccessToken = function(done){
  var body = {
    'client_id':     this.options.clientID,
    'client_secret': this.options.clientSecret,
    'type':          'web_server',
    'grant_type':    'client_credentials'
  };

  request({
    method: 'POST',
    url: this.options.tokenURL,
    form: body,
    headers: {
      'DowJones-Passport-Client': clientInfoHeader
    }
  }, function (err, resp, body) {

    if(err) return done(err);
    var result = JSON.parse(body);
    var accessToken = result['access_token'];
    var idToken = result['id_token'];
    done(null, accessToken, idToken);
  });


};

/**
 * Retreive the Delegation Token from Accounts.DowJones.com
 * @param id_token
 * @param scopes - can be an array of strings or a single string
 * @param done
 */

Strategy.prototype.getDelegationToken = function(id_token, scopes, done) {
  var scope;
  if (id_token instanceof Array){
    scope = scopes.join(' ');
  } else {
    scope = scopes
  }

  var body = { grant_type:'urn:ietf:params:oauth:grant-type:jwt-bearer',
    client_id: this.options.clientID,
    api_type: 'app',
    id_token: id_token,
    scope: 'openid ' + scope,
  };

  request({ method: 'POST',
    url: this.options.delegationUrl,
    headers: {'DowJones-Passport-Client': clientInfoHeader},
    form: body
  }, function(err, resp, body) {
    if(err) return done(err);
    var result = JSON.parse(body);
    done(null, result.id_token, result);
  });
}

/**
 * Retrieve user profile from Accounts.DowJones.com.
 *
 * This function constructs a normalized profile, with the following properties:
 *
 *   - `provider`         this is the strategy (google-oauth2, google, office365, google-apps)
 *   - `id`               this is the user_id of the DowJones profile
 *   - `username`         this is the nickname of the DowJones profile
 *   - `displayName`
 *
 * @param {String} accessToken
 * @param {Function} done
 * @api protected
 */
Strategy.prototype.userProfile = function(accessToken, done) {
  this._oauth2.get(this.options.userInfoURL, accessToken, function (err, body, res) {
    if (err) { return done(new Error('failed to fetch user profile', err)); }

    try {
      var json = JSON.parse(body);
      var profile = new Profile(json, body);

      done(null, profile);
    } catch(e) {
      done(e);
    }
  });
};


/**
 * Expose `Strategy` directly from package.
 */
exports = module.exports = Strategy;

/**
 * Export constructors.
 */
exports.Strategy = Strategy;
