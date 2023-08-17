/**
 * Module dependencies.
 */
var util = require('util')
  , url = require('url')
  , crypto= require('crypto')
  , utils = require('passport-oauth/lib/passport-oauth/strategies/utils')
  , OAuth2Strategy = require('passport-oauth').OAuth2Strategy
  , InternalOAuthError = require('passport-oauth').InternalOAuthError;


/**
 * `Strategy` constructor.
 *
 *
 * Applications must supply a `verify` callback which accepts an `accessToken`,
 * `refreshToken` and service-specific `profile`, and then calls the `done`
 * callback supplying a `user`, which should be set to `false` if the
 * credentials are not valid.  If an exception occured, `err` should be set.
 *
 * Options:
 *   - `clientID`      your Mail.ru application's App ID
 *   - `clientSecret`  your Mail.ru application's App Secret
 *   - `callbackURL`   URL to which Mail.ru will redirect the user after granting authorization
 *
 * Examples:
 *
 *     passport.use(new VKontakteStrategy({
 *         clientID: '123-456-789',
 *         clientSecret: 'shhh-its-a-secret'
 *         clientPrivateKey: 'your private key'
 *         callbackURL: 'https://www.example.net/auth/mailru/callback'
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
  options.authorizationURL = options.authorizationURL || 'https://connect.mail.ru/oauth/authorize';
  options.tokenURL = options.tokenURL || 'https://connect.mail.ru/oauth/token';
  options.scopeSeparator = options.scopeSeparator || ',';

  OAuth2Strategy.call(this, options, verify);
  this.name = 'mailru';
  this._options = options;
}

/**
 * Inherit from `OAuth2Strategy`.
 */
util.inherits(Strategy, OAuth2Strategy);

/**
 * Authenticate request by delegating to a service provider using OAuth 2.0.
 *
 * Since VK.com API is brain-dead and doesn't allow getting user info just
 * by its OAuth access token, this method uses a hack around this limitation.
 *
 * @param {Object} req
 * @api protected
 */
Strategy.prototype.authenticate = function(req, options) {
  options = options || {};
  var self = this;
  
  if (req.query && req.query.error) {
    // TODO: Error information pertaining to OAuth 2.0 flows is encoded in the
    //       query parameters, and should be propagated to the application.
    return this.fail();
  }
  
  var callbackURL = options.callbackURL || this._callbackURL;
  if (callbackURL) {
    var parsed = url.parse(callbackURL);
    if (!parsed.protocol) {
      // The callback URL is relative, resolve a fully qualified URL from the
      // URL of the originating request.
      callbackURL = url.resolve(utils.originalURL(req), callbackURL);
    }
  }
  
  if (req.query && req.query.code) {
    var code = req.query.code;
    
    // NOTE: The module oauth (0.9.5), which is a dependency, automatically adds
    //       a 'type=web_server' parameter to the percent-encoded data sent in
    //       the body of the access token request.  This appears to be an
    //       artifact from an earlier draft of OAuth 2.0 (draft 22, as of the
    //       time of this writing).  This parameter is not necessary, but its
    //       presence does not appear to cause any issues.
    this._oauth2.getOAuthAccessToken(code, { grant_type: 'authorization_code', redirect_uri: callbackURL },
      function(err, accessToken, refreshToken, raw) {
        if (err) { return self.error(new InternalOAuthError('failed to obtain access token', err)); }

        self.userProfile(accessToken, self._options, function(err, profile) {
          if (err) { return self.error(err); };
        
          function verified(err, user, info) {
            if (err) { return self.error(err); }
            if (!user) { return self.fail(info); }
            self.success(user, info);
          }

          if (self._passReqToCallback) {
            self._verify(req, accessToken, refreshToken, profile, verified);
          } else {
            self._verify(accessToken, refreshToken, profile, verified);
          }
        });
      }
    );
  } else {
    // NOTE: The module oauth (0.9.5), which is a dependency, automatically adds
    //       a 'type=web_server' parameter to the query portion of the URL.
    //       This appears to be an artifact from an earlier draft of OAuth 2.0
    //       (draft 22, as of the time of this writing).  This parameter is not
    //       necessary, but its presence does not appear to cause any issues.
    
    var params = this.authorizationParams(options);
    params['response_type'] = 'code';
    params['redirect_uri'] = callbackURL;
    var scope = options.scope;
    if (scope) {
      if (Array.isArray(scope)) { scope = scope.join(this._scopeSeparator); }
      params.scope = scope;
    }
    
    var location = this._oauth2.getAuthorizeUrl(params);
    this.redirect(location);
  }
}


/**
 * Retrieve user profile from Mail.ru.
 *
 * This function constructs a normalized profile, with the following properties:
 *
 *   - `provider`         always set to `vkontakte`
 *   - `id`               the user's Mail.ru ID
 *   - `displayName`      the user's full name
 *   - `name.familyName`  the user's last name
 *   - `name.givenName`   the user's first name
 *   - `gender`           the user's gender: `male` or `female`
 *
 * @param {String} accessToken
 * @param {Function} done
 * @api protected
 */
Strategy.prototype.userProfile = function(accessToken, options, done) {
    var query = {
        app_id: options.clientID,
        method: 'users.getInfo',
        secure:1,
        session_key: accessToken
    },
    data = '',
    fields = [];

    for ( key in query ) {
        data += key + '=' + query[key];
    }
    data += options.clientSecret;
    query.sig = crypto.createHash('md5').update(data).digest("hex");

    for ( key in query ) {
        fields.push(key + '=' + query[key]);
    }

    this._oauth2.getProtectedResource('http://www.appsmail.ru/platform/api?' + fields.join('&'), null, function (err, body, res) {
    if (err) { return done(new InternalOAuthError('failed to fetch user profile', err)); }
  
    try {
      var json = JSON.parse(body);
      if (json.error) throw new InternalOAuthError('failed to fetch user profile', json.error);
      json = json[0];

      var profile = { provider: 'mailru' };
      profile.id = json.uid;
      profile.username = json.nick;
      profile.displayName = json.first_name + ' ' + json.last_name;
      profile.name = { familyName: json.last_name,
                       givenName: json.first_name };


      if (json.sex) {
        profile.gender = json.sex == 1 ? 'female' : 'male';
      }

      profile.profileUrl = json.link;
      profile.emails = [{ value: json.email }];


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
