var uri            = require('url');
var util           = require('util');
var OAuth2Strategy = require('passport-oauth2');

function Strategy(options, verify) {
  options                  = options || {};
  options.authorizationURL = 'https://www.mapmyfitness.com/v7.0/oauth2/authorize/';
  options.tokenURL         = 'https://api.ua.com/v7.0/oauth2/uacf/access_token/';
  options.customHeaders    = { 'Api-Key': options.clientID };

  OAuth2Strategy.call(this, options, verify);
  this.name = 'underarmour';
}

util.inherits(Strategy, OAuth2Strategy);

Strategy.prototype.userProfile = function (accessToken, done) {
  var user_url          = 'https://api.ua.com/v7.0/user/self/';
  var existingHeaders   = this._oauth2._customHeaders;
  var additionalHeaders = {
    'Authorization' : 'Bearer ' + accessToken,
    'Content-Type'  : 'application/json'
  };

  for (var attrname in additionalHeaders) {
    existingHeaders[attrname] = additionalHeaders[attrname];
  }

  this._oauth2._request('GET', user_url, existingHeaders, '', accessToken, function (err, body, res) {
    if (err) {
      return done(new Error('Failed to fetch user profile: ', err));
    }
    try {
      var json    = JSON.parse(body);
      var profile = {
        provider    : 'underarmour',
        id          : json.id,
        username    : json.username,
        displayName : json.display_name,
        '_raw'      : body,
        '_json'     : json
      };
      done(null, profile);
    } catch (e) {
      done(e);
    }
  });
};

module.exports = Strategy;
