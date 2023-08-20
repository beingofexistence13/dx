/**
 * Module Dependencies
 */
var util = require('util')
  , BearerStrategy = require('passport-http-bearer')
  , jsonwebtoken = require('jsonwebtoken');


/**
 * Creates an instance of `HttpBearerStrategy`.
 *
 * The Thinkful authentication strategy authenticates requests based on the JWT
 * token contained in the `Authorization` header field, the `Tf-Authorization`
 * cookie, `access_token` body parameter, or `access_token` query parameter.
 *
 * We leverage passport-http-bearer for parsing and error handling. We provide a
 * JWT specific verification call, and manipulate the request to support the
 * `Tf-Authorization` cookie and correct for the missing `Bearer ` prefix on
 * the token. (Remaining doc from passport-http-bearer)
 *
 * Applications must supply a `verify` callback, for which the function
 * signature is:
 *
 *     function(token, done) { ... }
 *
 * `token` is the bearer token provided as a credential.  The verify callback
 * is responsible for finding the user who posesses the token, and invoking
 * `done` with the following arguments:
 *
 *     done(err, user, info);
 *
 * If the token is not valid, `user` should be set to `false` to indicate an
 * authentication failure.  Additional token `info` can optionally be passed as
 * a third argument, which will be set by Passport at `req.authInfo`, where it
 * can be used by later middleware for access control.  This is typically used
 * to pass any scope associated with the token.
 *
 * Options:
 *
 *   - `realm`  authentication realm, defaults to "Users"
 *   - `scope`  list of scope values indicating the required scope of the access
 *              token for accessing the requested resource
 *
 * Examples:
 *
 *     passport.use(new ThinkfulStrategy(
 *       function(token, done) {
 *         User.findByToken({ token: token }, function (err, user) {
 *           if (err) { return done(err); }
 *           if (!user) { return done(null, false); }
 *           return done(null, user, { scope: 'read' });
 *         });
 *       }
 *     ));
 *
 * For further details on HTTP Bearer authentication, refer to [The OAuth 2.0 Authorization Protocol: Bearer Tokens](http://tools.ietf.org/html/draft-ietf-oauth-v2-bearer)
 *
 * @constructor
 * @param {Object} [options]
 * @param {Function} verify
 * @api public
 */
function ThinkfulStrategy (options, verify) {
  options = options || {};

  BearerStrategy.call(this, function verifyJWT (req, token, done) {
    var _this = this;

    jsonwebtoken.verify(token, this._secret, function (err, user) {
      if (err) {
        return _this.fail(400, err); }
      try {
        user = JSON.parse(user); } catch (e) { return _this.fail(400) }

      return verify(req, user, done);
    });
  });

  this.name = 'thinkful';
  this._secret = options.secret;
  this._passReqToCallback = true;
}

/**
 * Inherit from BearerStrategy
 */
util.inherits(ThinkfulStrategy, BearerStrategy);

/**
 * Authenticate request based on the contents of an `authorization` header,
 * `Tf-Authorization` cookie, or `access_token` body/query parameter.
 *
 * @param {Object} req
 * @api protected
 */
ThinkfulStrategy.prototype.authenticate = function tfAuthenticate (req) {
  var token = req.headers.authorization || req.cookies['Tf-Authorization'];

  if(!token) {
    return this.fail(401)
  }
  else if (!/^Bearer/.test(token)) {
    token = 'Bearer ' + token;
  }

  req.headers.authorization = token;

  BearerStrategy.prototype.authenticate.call(this, req);
};

/**
 * Expose `Strategy`.
 */
module.exports = ThinkfulStrategy;
