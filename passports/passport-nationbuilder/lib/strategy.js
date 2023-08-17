/**
 * Module dependencies.
 */
var uri = require('url'),
  crypto = require('crypto'),
  util = require('util'),
  OAuth2Strategy = require('passport-oauth2'),
  Profile = require('./profile'),
  InternalOAuthError = require('passport-oauth2').InternalOAuthError,
  FacebookAuthorizationError = require('./errors/facebookauthorizationerror'),
  FacebookTokenError = require('./errors/facebooktokenerror'),
  FacebookGraphAPIError = require('./errors/facebookgraphapierror'),
  url = require('url'),
  OAuth2 = require('oauth').OAuth2;


/**
 * `Strategy` constructor.
 *
 * The Facebook authentication strategy authenticates requests by delegating to
 * Facebook using the OAuth 2.0 protocol.
 *
 * Applications must supply a `verify` callback which accepts an `accessToken`,
 * `refreshToken` and service-specific `profile`, and then calls the `done`
 * callback supplying a `user`, which should be set to `false` if the
 * credentials are not valid.  If an exception occured, `err` should be set.
 *
 * Options:
 *   - `clientID`      your Facebook application's App ID
 *   - `clientSecret`  your Facebook application's App Secret
 *   - `callbackURL`   URL to which Facebook will redirect the user after granting authorization
 *
 * Examples:
 *
 *     passport.use(new FacebookStrategy({
 *         clientID: '123-456-789',
 *         clientSecret: 'shhh-its-a-secret'
 *         callbackURL: 'https://www.example.net/auth/facebook/callback'
 *       },
 *       function(accessToken, refreshToken, profile, done) {
 *         User.findOrCreate(..., function (err, user) {
 *           done(err, user);
 *         });
 *       }
 *     ));
 *
 * @param {Object} options
 * @param {Function} verify
 * @api public
 */
function Strategy(options, verify) {
  options = options || {};

  options.authorizationURL = options.authorizationURL || 'https://' + options.slug +
    '.nationbuilder.com/oauth/authorize';
  options.tokenURL = options.tokenURL || 'https://' + options.slug +
    '.nationbuilder.com/oauth/token';
  options.scopeSeparator = options.scopeSeparator || ',';

  OAuth2Strategy.call(this, options, verify);
  this.name = 'nationbuilder';
  this._slug = options.slug;
  this._clientID = options.clientID;
  this._clientSecret = options.clientSecret;
}

/**
 * Inherit from `OAuth2Strategy`.
 */
util.inherits(Strategy, OAuth2Strategy);

OAuth2Strategy.prototype._getOAuth = function(slug) {
  var self = this;

  var authorizationURL = 'https://' + slug +
    '.nationbuilder.com/oauth/authorize',
    tokenURL = 'https://' + slug +
    '.nationbuilder.com/oauth/token';
  // NOTE: The _oauth2 property is considered "protected".  Subclasses are
  //       allowed to use it when making protected resource requests to retrieve
  //       the user profile.
  return new OAuth2(self._clientID, self._clientSecret,
    '', authorizationURL, tokenURL, undefined);
}

/**
 * Authenticate request by delegating to a service provider using OAuth 2.0.
 *
 * @param {Object} req
 * @api protected
 */
OAuth2Strategy.prototype.authenticate = function(req, options) {
  options = options || {};
  var self = this;

  if (options.slug || req.session.slug) {

    if (options.slug) {
      req.session.slug = options.slug;
    }

    if (!options.slug && req.session.slug) {
      options.slug = req.session.slug;
    }

    var _oauth2 = self._getOAuth(options.slug);

  }


  if (req.query && req.query.error) {
    if (req.query.error == 'access_denied') {
      return this.fail({
        message: req.query.error_description
      });
    } else {
      return this.error(new AuthorizationError(req.query.error_description, req.query.error, req.query.error_uri));
    }
  }

  var callbackURL = options.callbackURL || this._callbackURL;
  if (callbackURL) {
    var parsed = url.parse(callbackURL);
    if (!parsed.protocol) {
      // The callback URL is relative, resolve a fully qualified URL from the
      // URL of the originating request.
      callbackURL = url.resolve(utils.originalURL(req, {
        proxy: this._trustProxy
      }), callbackURL);
    }
  }

  if (req.query && req.query.code) {
    var code = req.query.code;

    if (this._state) {
      if (!req.session) {
        return this.error(new Error('OAuth2Strategy requires session support when using state. Did you forget app.use(express.session(...))?'));
      }

      var key = this._key;
      if (!req.session[key]) {
        return this.fail({
          message: 'Unable to verify authorization request state.'
        }, 403);
      }
      var state = req.session[key].state;
      if (!state) {
        return this.fail({
          message: 'Unable to verify authorization request state.'
        }, 403);
      }

      delete req.session[key].state;
      if (Object.keys(req.session[key]).length === 0) {
        delete req.session[key];
      }

      if (state !== req.query.state) {
        return this.fail({
          message: 'Invalid authorization request state.'
        }, 403);
      }
    }

    var params = this.tokenParams(options);
    params.grant_type = 'authorization_code';
    params.redirect_uri = callbackURL;

    (_oauth2 || this._oauth2).getOAuthAccessToken(code, params,
      function(err, accessToken, refreshToken, params) {
        if (err) {
          return self.error(self._createOAuthError('Failed to obtain access token', err));
        }

        self._loadUserProfile(options.slug || self._slug, accessToken, function(err, profile) {
          if (err) {
            return self.error(err);
          }

          function verified(err, user, info) {
            if (err) {
              return self.error(err);
            }
            if (!user) {
              return self.fail(info);
            }
            self.success(user, info);
          }

          try {
            if (self._passReqToCallback) {
              var arity = self._verify.length;
              if (arity == 6) {
                self._verify(req, accessToken, refreshToken, params, profile, verified);
              } else { // arity == 5
                self._verify(req, accessToken, refreshToken, profile, verified);
              }
            } else {
              var arity = self._verify.length;
              if (arity == 5) {
                self._verify(accessToken, refreshToken, params, profile, verified);
              } else { // arity == 4
                self._verify(accessToken, refreshToken, profile, verified);
              }
            }
          } catch (ex) {
            return self.error(ex);
          }
        });
      }
    );
  } else {
    var params = this.authorizationParams(options);
    params.response_type = 'code';
    params.redirect_uri = callbackURL;
    var scope = options.scope || this._scope;
    if (scope) {
      if (Array.isArray(scope)) {
        scope = scope.join(this._scopeSeparator);
      }
      params.scope = scope;
    }
    var state = options.state;
    if (state) {
      params.state = state;
    } else if (this._state) {
      if (!req.session) {
        return this.error(new Error('OAuth2Strategy requires session support when using state. Did you forget app.use(express.session(...))?'));
      }

      var key = this._key;
      state = uid(24);
      if (!req.session[key]) {
        req.session[key] = {};
      }
      req.session[key].state = state;
      params.state = state;
    }

    var location = (_oauth2 || this._oauth2).getAuthorizeUrl(params);
    this.redirect(location);
  }
};

/**
 * Return extra Facebook-specific parameters to be included in the authorization
 * request.
 *
 * Options:
 *  - `display`  Display mode to render dialog, { `page`, `popup`, `touch` }.
 *
 * @param {Object} options
 * @return {Object}
 * @api protected
 */
Strategy.prototype.authorizationParams = function(options) {
  var params = {};

  // https://developers.facebook.com/docs/reference/dialogs/oauth/
  if (options.display) {
    params.display = options.display;
  }

  // https://developers.facebook.com/docs/facebook-login/reauthentication/
  if (options.authType) {
    params.auth_type = options.authType;
  }
  if (options.authNonce) {
    params.auth_nonce = options.authNonce;
  }

  return params;
};

/**
 * Load user profile, contingent upon options.
 *
 * @param {String} accessToken
 * @param {Function} done
 * @api private
 */
OAuth2Strategy.prototype._loadUserProfile = function(slug, accessToken, done) {
  var self = this;

  function loadIt() {
    return self.userProfile(slug, accessToken, done);
  }

  function skipIt() {
    return done(null);
  }

  if (typeof this._skipUserProfile == 'function' && this._skipUserProfile.length > 1) {
    // async
    this._skipUserProfile(accessToken, function(err, skip) {
      if (err) {
        return done(err);
      }
      if (!skip) {
        return loadIt();
      }
      return skipIt();
    });
  } else {
    var skip = (typeof this._skipUserProfile == 'function') ? this._skipUserProfile() : this._skipUserProfile;
    if (!skip) {
      return loadIt();
    }
    return skipIt();
  }
};

/**
 * Retrieve user profile from Facebook.
 *
 * This function constructs a normalized profile, with the following properties:
 *
 *   - `provider`         always set to `facebook`
 *   - `id`               the user's Facebook ID
 *   - `username`         the user's Facebook username
 *   - `displayName`      the user's full name
 *   - `name.familyName`  the user's last name
 *   - `name.givenName`   the user's first name
 *   - `name.middleName`  the user's middle name
 *   - `gender`           the user's gender: `male` or `female`
 *   - `profileUrl`       the URL of the profile for the user on Facebook
 *   - `emails`           the proxied or contact email address granted by the user
 *
 * @param {String} accessToken
 * @param {Function} done
 * @api protected
 */
Strategy.prototype.userProfile = function(slug, accessToken, done) {
  var url = uri.parse('https://' + slug +
    '.nationbuilder.com/api/v1/people/me');
  url = uri.format(url);
  this.get(slug, url, accessToken, function(err, body, res) {
    var json;

    if (err) {
      if (err.data) {
        try {
          json = JSON.parse(err.data);
        } catch (_) {}
      }

      if (json && json.error && typeof json.error == 'object') {
        return done(new FacebookGraphAPIError(json.error.message, json.error.type,
          json.error.code, json.error.error_subcode));
      }
      return done(new InternalOAuthError('Failed to fetch user profile', err));
    }

    try {
      json = JSON.parse(body);
    } catch (ex) {
      return done(new Error('Failed to parse user profile'));
    }

    var profile = Profile.parse(json);
    profile.provider = 'nationbuilder';
    profile._raw = body;
    profile._json = json;
    profile._accessToken = accessToken;
    profile.nation = slug;

    done(null, profile);
  });
};

/**
 * Cannot use this._oauth2.get because we need to modify Accept and Content-Type
 *  headers
 */
Strategy.prototype.get = function(slug, url, accessToken, done) {
  var self = this;
  var headers = {
    'Authorization': this._oauth2.buildAuthHeader(accessToken),
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  };

  var _oauth2 = self._getOAuth(slug);
  _oauth2._request("GET", url, headers, "", null, done);
}

/**
 * Parse error response from Facebook OAuth 2.0 token endpoint.
 *
 * @param {String} body
 * @param {Number} status
 * @return {Error}
 * @api protected
 */
Strategy.prototype.parseErrorResponse = function(body, status) {
  var json = JSON.parse(body);
  if (json.error && typeof json.error == 'object') {
    return new FacebookTokenError(json.error.message, json.error.type, json.error
      .code, json.error.error_subcode);
  }
  return OAuth2Strategy.prototype.parseErrorResponse.call(this, body, status);
};

/**
 * Expose `Strategy`.
 */
module.exports = Strategy;
