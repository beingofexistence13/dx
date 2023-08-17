'use strict';

const util = require('util');
const OAuth2Strategy = require('passport-oauth2');
const InternalOAuthError = require('passport-oauth2').InternalOAuthError;
const LionDeskAPIError = require('./errors/liondeskapierror')
const Profile = require('./profile');

/**
 * `Strategy` constructor.
 *
 * The LionDesk authentication strategy authenticates requests by delegating to
 * LionDesk using the OAuth 2.0 protocol.
 *
 * Applications must supply a `function` which accepts an `accessToken`,
 * `refreshToken` and service-specific `profile`, and then calls the `done`
 * callback supplying a `user`, which should be set to `false` if the
 * credentials are not valid.  If an exception occured, `err` should be set.
 *
 * Options:
 *   - `clientID`      your LionDesk Client ID
 *   - `clientSecret`  your LionDesk Client Secret
 *   - `callbackURL`   URL to which LionDesk will redirect the user after granting authorization
 *
 * Examples:
 *
 *     passport.use(new LionDeskStrategy({
 *         clientID: 'the-client-id',
 *         clientSecret: 'shhh-its-a-secret'
 *         callbackURL: 'https://www.example.net/auth/liondesk/callback'
 *       },
 *       function(accessToken, refreshToken, profile, done) {
 *         User.findOrCreate(..., function (err, user) {
 *           done(err, user);
 *         });
 *       }
 *     ));
 *
 * @constructor
 * @param {object} options
 * @param {function} verify
 * @access public
 */
function Strategy(options, verify) {
  options = options || {};
  options.authorizationURL = options.authorizationURL || 'https://api-v2.liondesk.com/oauth2/authorize';
  options.tokenURL = options.tokenURL || 'https://api-v2.liondesk.com/oauth2/token';
  options.scopeSeparator = options.scopeSeparator || ' ';
  options.scope = options.scope;

  OAuth2Strategy.call(this, options, verify);
  this.name = 'liondesk';
  this._userProfileURL = options.profileURL || 'https://api-v2.liondesk.com/users';
  this._oauth2.useAuthorizationHeaderforGET(true);
}

// Inherit from `OAuth2Strategy`.
util.inherits(Strategy, OAuth2Strategy);

/**
 * Retrieve user profile from LionDesk.
 *
 * This function constructs a normalized profile, with the following properties:
 *
 *   - `provider`         always set to `liondesk`
 *   - `id`
 *   - `username`
 *   - `displayName`
 *
 * @param {string} accessToken
 * @param {function} done
 * @access protected
 */
Strategy.prototype.userProfile = function(accessToken, done) {
  var self = this;
  this._oauth2.get(this._userProfileURL, accessToken, function (err, body, res) {
    var json;
    
    if (err) {
      if (err.data) {
        try {
          json = JSON.parse(err.data);
        } catch (_) {}
      }
      
      return done(new LionDeskAPIError(json.message, json.code));
    }
    
    try {
      json = JSON.parse(body);
    } catch (ex) {
      return done(new Error('Failed to parse user profile'));
    }
    
    var profile = Profile.parse(json);
    profile.provider  = 'liondesk';
    profile._raw = body;
    profile._json = json;
    
    done(null, profile);
  });
}

// Expose constructor.
module.exports = Strategy;
