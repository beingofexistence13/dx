/**
 * Module dependencies.
 */
var util = require('util'),
    OAuth2Strategy = require('passport-oauth2').Strategy,
    InternalOAuthError = require('passport-oauth2').InternalOAuthError;

/**
 * 'Strategy' constructor.
 * Options:
 *   - clientID       identifies client to Misfit
 *   - clientSecret   secret used to establish ownership of clientID
 *   - callbackURL    URL to which Misfit will redirect after obtaining authorization. (Must match Misfit app configuration)
 * 
 * Example:
 *
 *   passport.use(new MisfitStrategy({
 *       clientID: '12345',
 *       clientSecret: 'secretsauce',
 *       callbackURL: 'https://example.com/auth/misfit/callback'
 *     },
 *     function(accessToken, refreshToken, profile, done) {
 *       User.findOrCreate(..., function(err, user) {
 *         done(err, user);
 *       });
 *     }
 *   ));
 * 
 * @param {Object} options 
 * @param {Function} verify 
 */
function Strategy(options, verify) {
  options = options || {};
  options.authorizationURL = options.authorizationURL || 'https://api.misfitwearables.com/auth/dialog/authorize';
  options.tokenURL = options.tokenURL || 'https://api.misfitwearables.com/auth/tokens/exchange';
  options.scopeSeparator = options.scopeSeparator || ',';
  options.customHeaders = options.customHeaders || {};

  if (!options.customHeaders['User-Agent']) {
    options.customHeaders['User-Agent'] = options.userAgent || 'passport-misfit';
  }

  OAuth2Strategy.call(this, options, verify);
  this.name = 'misfit';
  this._userProfileURL = options.userProfileURL || 'https://api.misfitwearables.com/move/resource/v1/user/me/profile';
}

/**
 * Inherit from 'Oauth2Strategy'
 */
util.inherits(Strategy, OAuth2Strategy);


/**
 * Retrieve user profile from Misfit
 * 
 * @param  {String}   accessToken
 * @param  {Function} done       
 * @api protected              
 */
Strategy.prototype.userProfile = function(accessToken, done) {
  this._oauth2.useAuthorizationHeaderforGET(true); 
  this._oauth2.get(this._userProfileURL, accessToken, function (err, body, res) {
    if (err) { return done(new InternalOAuthError('failed to fetch user profile', err)); }

    try {
      var json = JSON.parse(body);

      var profile = json;
      profile.provider = 'misfit';
      profile._raw = body;
      profile._json = json;

      done(null, profile);
    } catch(e) {
      done(e);
    }
  });
};

/**
 * Expose 'Strategy'
 */
module.exports = Strategy;