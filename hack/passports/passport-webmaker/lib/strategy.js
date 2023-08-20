var OAuth2Strategy = require("passport-oauth2"),
  util = require("util"),
  uri = require("url"),
  InternalOAuthError = require("passport-oauth2").InternalOAuthError;

/**
 * `Strategy` constructor.
 *
 * Parameters:
 *    clientID: The client ID provided when you registered your app.
 *    clientSecret: The client secret provided when you registered your app.
 *    action: This is either "signup" or "signin", by default it's "signin".
 *    state: This must be set to "true", it helps prevent CSRF attacks.
 *
 * @param options
 * @param verify
 * @constructor
 */
function Strategy(options, verify) {
  options = options || {};
  options.authorizationURL = options.authorizationURL || "https://id.webmaker.org/login/oauth/authorize";
  options.tokenURL = options.tokenURL || "https://id.webmaker.org/login/oauth/access_token";

  OAuth2Strategy.call(this, options, verify);
  this.name = "webmaker";
  this._profileUrl = options.profileURL || "https://id.webmaker.org/user";
}

util.inherits(Strategy, OAuth2Strategy);

/**
 * Webmaker specific parameters to be included in the authorization request.
 *
 * @param options
 */
Strategy.prototype.authorizationParams = function(options) {
  var params = {};

  if (options.action) { params["action"] = options.action; }

  // Bug: Webmaker uses "scopes" instead of "scope" so we need to create this parameter, and manually create the scope string.
  if (options.scopes) {
    if (Array.isArray(options.scopes)) {
      params["scopes"] = options.scopes.join(" ");
    } else {
      params["scopes"] = options.scopes;
    }
  }
  return params;
};

/**
 * Retrieve a user profile from Webmaker and normalize it.
 * See: http://passportjs.org/docs/profile
 *
 * @param accessToken
 * @param done
 */
Strategy.prototype.userProfile = function(accessToken, done) {
  var url = uri.parse(this._profileUrl);

  this._oauth2.useAuthorizationHeaderforGET(true);
  this._oauth2.setAuthMethod("token");
  this._oauth2.get(url, accessToken, function (err, body, res) {
    if (err) {
      return done(new InternalOAuthError("Failed to fetch user profile", err));
    }

    try {
      var json = JSON.parse(body);
      var profile = { provider: "webmaker" };

      profile.id = json.id;
      profile.username = json.username;
      profile.locale = json.prefLocale;
      profile.emails = [{ value: json.email }];
      profile.photos = [{ value: json.avatar }];

      done(null, profile);
    } catch (error) {
      done(error);
    }
  });
};

// Expose `Constructor` method.
module.exports = Strategy;
