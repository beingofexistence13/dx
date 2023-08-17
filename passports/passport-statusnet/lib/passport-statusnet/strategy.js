/**
 * Module dependencies.
 */
var util = require('util')
  , OAuthStrategy = require('passport-oauth').OAuthStrategy;


/**
 * `Strategy` constructor.
 *
 * The StatusNet authentication strategy authenticates requests by delegating to
 * StatusNet using the OAuth protocol.
 *
 * Applications must supply a `verify` callback which accepts a `token`,
 * `tokenSecret` and service-specific `profile`, and then calls the `done`
 * callback supplying a `user`, which should be set to `false` if the
 * credentials are not valid.  If an exception occured, `err` should be set.
 *
 * Options:
 *   - `statusnet`       A StatusNet instance (e.g. identi.ca)
 *   - `consumerKey`     identifies client to StatusNet
 *   - `consumerSecret`  secret used to establish ownership of the consumer key
 *   - `callbackURL`     URL to which StatusNet will redirect the user after obtaining authorization
 *
 * Examples:
 *
 *     passport.use(new StatusNetStrategy({
 *         statusnet: 'example.com'
 *         consumerKey: '123-456-789',
 *         consumerSecret: 'shhh-its-a-secret'
 *         callbackURL: 'https://www.example.net/auth/statusnet/callback'
 *       },
 *       function(token, tokenSecret, profile, done) {
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
  if (options.statusnet === undefined) {
    throw new Error("A StatusNet instance is required (e.g. identi.ca)");
  }
  this.prefix = "https://"+options.statusnet+"/api";
  options.requestTokenURL = options.requestTokenURL || this.prefix+'/oauth/request_token';
  options.accessTokenURL = options.accessTokenURL || this.prefix+'/oauth/access_token';
  options.userAuthorizationURL = options.userAuthorizationURL || this.prefix+'/oauth/authorize';
  options.sessionKey = options.sessionKey || 'oauth:'+options.statusnet;
  
  OAuthStrategy.call(this, options, verify);
  this.name = options.statusnet;
}

/**
 * Inherit from `OAuthStrategy`.
 */
util.inherits(Strategy, OAuthStrategy);


/**
 * Authenticate request by delegating to StatusNet using OAuth.
 *
 * @param {Object} req
 * @api protected
 */
Strategy.prototype.authenticate = function(req) {
  // When a user denies authorization on StatusNet, they are presented with a link
  // to return to the application in the following format (where xxx is the
  // value of the request token):
  //
  //     http://www.example.com/auth/statusnet/callback?oauth_problem=xxx
  //
  // Following the link back to the application is interpreted as an
  // authentication failure.
  if (req.query && req.query.oauth_problem) {
    return this.fail();
  }
  
  // Call the base class for standard OAuth authentication.
  OAuthStrategy.prototype.authenticate.call(this, req);
};

/**
 * Retrieve user profile from StatusNet.
 *
 * This function constructs a normalized profile, with the following properties:
 *
 *   - `id`        (equivalent to `id`)
 *   - `name`      (equivalent to `name`)
 *   - `username`  (equivalent to `screen_name`)
 *
 * StatusNet doesn't respond with any user information during oauth, so
 * we have to make an additional HTTPS request.
 *
 * @param {String} token
 * @param {String} tokenSecret
 * @param {Object} params
 * @param {Function} done
 * @api protected
 */
Strategy.prototype.userProfile = function(token, tokenSecret, params, done) {
  var url = this.prefix+"/users/show.json";
  this._oauth.get(url, token, tokenSecret, function (err, body, res) {
    if (err) { return done(err); }

    try {
      var json = JSON.parse(body),
          profile = { provider: this.name };
      profile.id = json.id;
      profile.name = json.name;
      profile.username = json.screen_name;

      done(null, profile);
    } catch (e) {
      done(e);
    }
  });
};


/**
 * Expose `Strategy`.
 */
module.exports = Strategy;
