/*
 * Code is based on passport-google-oauth module v0.1.5 by Jared Hanson
 * http://github.com/jaredhanson/passport-google-oauth
 */

/**
 * Module dependencies.
 */
var util = require('util')
  , OAuth2Strategy = require('passport-oauth').OAuth2Strategy
  , InternalOAuthError = require('passport-oauth').InternalOAuthError;

/**
 *
 * @param {Object} options
 * @param {Function} verify
 * @api public
 */
function Strategy(options, verify) {
  options = options || {};
  options.authorizationURL = options.authorizationURL || 'https://login.eveonline.com/oauth/authorize';
  options.tokenURL = options.tokenURL || 'https://login.eveonline.com/oauth/token';

  OAuth2Strategy.call(this, options, verify);
  this.name = 'eve_online';
}

/**
 * Inherit from `OAuth2Strategy`.
 */
util.inherits(Strategy, OAuth2Strategy);


/**
 * Retrieve user profile from Eve SSO.
 *
 * This function constructs a normalized profile, with the following properties:
 *
 *   - `provider`         always set to `eve`
 *   - `id`
 *   - `displayName`
 *   - `photos`
 *   - `username`
 *   - `characterName`
 *   - `characterID`
 *   - `characterOwnerHash`
 *
 * @param {String} accessToken
 * @param {Function} done
 * @api protected
 */
Strategy.prototype.userProfile = function(accessToken, done) {

  this._oauth2.useAuthorizationHeaderforGET(true);
  this._oauth2.get('https://login.eveonline.com/oauth/verify', accessToken, function (err, body, res) {

    if (err) { return done(new InternalOAuthError('failed to fetch user profile', err)); }

    try {

      var json = JSON.parse(body);

      var profile = { provider: 'eve_online' };
      profile.id = json.CharacterOwnerHash; // ID will change if character has changed the owner. If this is not critical, json.CharacterID can be used
      profile.displayName = json.CharacterName;
      profile.photos = [
        {value:'https://image.eveonline.com/Character/' + json.CharacterID + '_256.jpg'}
      ];
      profile.characterName = json.CharacterName;
      profile.characterID = json.CharacterID;
      profile.characterOwnerHash = json.CharacterOwnerHash;
      profile._raw = body;
      profile._json = json;

      done(null, profile);
    } catch(e) {
      done(e);
    }
  });
}


/**
 * Expose `Strategy`.
 */
module.exports = Strategy;
