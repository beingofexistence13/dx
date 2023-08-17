/**
 * Module dependencies.
 */
 var util = require('util')
 , OAuth2Strategy = require('passport-oauth').OAuth2Strategy
 , InternalOAuthError = require('passport-oauth').InternalOAuthError;


/**
 * `Strategy` constructor.
 *
 * The Baidu authentication strategy authenticates requests by delegating to
 * Baidu using the OAuth 2.0 protocol.
 *
 * Applications must supply a `verify` callback which accepts an `accessToken`,
 * `refreshToken` and service-specific `profile`, and then calls the `done`
 * callback supplying a `user`, which should be set to `false` if the
 * credentials are not valid.  If an exception occured, `err` should be set.
 *
 * Options:
 *   - `clientID`      your Baidu application's app key
 *   - `clientSecret`  your Baidu application's app secret
 *   - `callbackURL`   URL to which Baidu will redirect the user after granting authorization
 *
 * Examples:
 *
 *     passport.use(new BaiduStrategy({
 *         clientID: 'app key',
 *         clientSecret: 'app secret'
 *         callbackURL: 'https://www.example.net/auth/baidu/callback'
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
  options.authorizationURL = options.authorizationURL || 'https://openapi.baidu.com/oauth/2.0/authorize';
  options.tokenURL = options.tokenURL || 'https://openapi.baidu.com/oauth/2.0/token';
  options.scopeSeparator = options.scopeSeparator || ',';
  
  OAuth2Strategy.call(this, options, verify);
  this.name = 'baidu';

  var _request = this._oauth2._request.bind(this._oauth2);
  this._oauth2._request = function(method, url, headers, post_body, access_token, callback) {
    if (method == 'POST') {
      method = 'GET';
      url += (url.indexOf('?') == -1 ? '?' : '&') + post_body;
      post_body = '';
      delete headers['Content-Type']
    }

    return _request(method, url, headers, post_body, access_token, callback);
  }

  this._oauth2.get = function(url, access_token, callback) {
    url += (url.indexOf('?') == -1 ? '?' : '&') + (require('querystring')).stringify({
      access_token: access_token,
      oauth_consumer_key: this._clientId
    });

    return this._request('GET', url, {}, '', access_token, callback );
  };
}

/**
 * Inherit from `OAuth2Strategy`.
 */
 util.inherits(Strategy, OAuth2Strategy);


/**
 * Retrieve user profile from Baidu.
 *
 * This function constructs a normalized profile, with the following properties:
 *
 *   - `provider`         always set to `Baidu`
 *   - `id`               baidu userid
 *   - `nickname`         baidu username
 *
 * @param {String} accessToken
 * @param {Function} done
 * @api protected
 */
Strategy.prototype.userProfile = function(accessToken, done) {
  var oauth2 = this._oauth2;
  oauth2.get('https://openapi.baidu.com/rest/2.0/passport/users/getLoggedInUser', accessToken, function (err, result, res) {
    if (err) { return done(new InternalOAuthError('failed to fetch user profile', err)); }
    
    result = JSON.parse(result);
    oauth2.get('https://openapi.baidu.com/rest/2.0/passport/users/getInfo?uid=' + result.uid, accessToken, function (err, body, res) {
      try {
        var json = JSON.parse(body);

        var profile = { provider: 'baidu' };

        small = "http://tb.himg.baidu.com/sys/portraitn/item/" + json.portrait;
        large = "http://tb.himg.baidu.com/sys/portrait/item/" + json.portrait;

        profile.id = json.userid;
        profile.username = json.username;
        profile.displayName = json.realname;
        profile.gender = json.sex;
        profile.photos = [{ value: small },{ value: large }]
        profile._raw = body;
        profile._json = json;
        done(null, profile);
      } catch(e) {
        done(e);
      }
    });
  });
}


/**
 * Expose `Strategy`.
 */
 module.exports = Strategy;
