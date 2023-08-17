var util = require('util')
  , OAuth2Strategy = require('passport-oauth2');

function Strategy(options, verify) {
  options = options || {};
  options.authorizationURL = options.authorizationURL || 'https://www.thingiverse.com/login/oauth/authorize';
  options.tokenURL = options.tokenURL || 'https://www.thingiverse.com/login/oauth/access_token';
  options.sessionKey = options.sessionKey || 'oauth:thingiverse';

  OAuth2Strategy.call(this, options, verify);
  this.name = 'thingiverse';
}

util.inherits(Strategy, OAuth2Strategy);

Strategy.prototype.userProfile = function(accessToken, done) {
this._oauth2.get('https://api.thingiverse.com/users/me', accessToken, function (err, body, res) {
    if (err) { return done(new InternalOAuthError('failed to fetch user profile', err)); }

    try {
      var json = JSON.parse(body);

      var profile = { provider: 'thingiverse' };
      profile.id = json.id;
      profile.name = json.name;
      profile.email = json.email;

      profile._raw = body;
      profile._json = json;
    } catch(e) {
        done(e);
        return;
    }
    done(null, profile);
  });
}

module.exports = Strategy;
