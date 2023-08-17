util = require('util');
OAuth2Strategy = require('passport-oauth').OAuth2Strategy;

function PlaylyfeOAuth2Strategy(options, verify) {
  options.authorizationURL = 'http://playlyfe.com/auth';
  options.tokenURL = 'http://playlyfe.com/auth/token';
  options.passReqToCallback = true;
  options.callbackURL = options.redirectURI;
  delete options.redirectURI;
  self = this;
  PlaylyfeOAuth2Strategy.super_.call(
    this,
    options,
    function(req, accessToken, refreshToken, profile, done) {
      // Store tokens in user session
      req.session[self.options.clientID + '_playlyfe_access_token'] = accessToken;
      req.session[self.options.clientID + '_playlyfe_refresh_token'] = refreshToken;
      verify(accessToken, refreshToken, profile, done);
    }
  );
  this.name = 'playlyfe';
}

util.inherits(PlaylyfeOAuth2Strategy, OAuth2Strategy);

PlaylyfeOAuth2Strategy.prototype.userProfile = function(accessToken, done) {
  this._oauth2.getProtectedResource(
    'http://api.playlyfe.com/me',
    accessToken,
    function(err, user) {
      done(null, JSON.parse(user));
    }
  );
};

module.exports = PlaylyfeOAuth2Strategy;
