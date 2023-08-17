/**
 * Module dependencies.
 */

var util = require('util')
    , _ = require('underscore')
    , OAuthStrategy = require('passport-oauth').OAuthStrategy
    , InternalOAuthError = require('passport-oauth').InternalOAuthError;

/**
 * Const parameters
 */
var DESK_COM_TOKEN_PATH = '/oauth/request_token';
var DESK_COM_ACCESS_TOKEN_PATH  = '/oauth/access_token';
var DESK_COM_AUTH_PATH = '/oauth/authorize';
var DESK_CRETENTIAL_PATH = '/api/v1/account/verify_credentials.json';

var DESK_COM_SESSION_KEY = 'oauth:deskcom:';

/**
 * `Strategy` constructor.
 *
 * Desk.com authentication strategy
 * Oauth1.0a protocol
 *
 * Options:
 *   - `consumerKey`     identifies client to Deskcom
 *   - `consumerSecret`  secret used to establish ownership of the consumer key
 *   - `callbackURL`     URL to which Deskcom will redirect the user after obtaining authorization
 *
 * Examples:
 *
 *   passport.use(new DeskcomStrategy({
 *       consumerKey: '*************',
 *       consumerSecret: '***************',
 *       site: 'https://yoursite.desk.com',
 *     },
 *     function (token, tokenSecret, profile, done) {
 *
 *     }
 *   });
 *
 * @param {Object} options
 * @param {Function} verify
 * @api public
 */
function Strategy(options, verify) {
    options = options || {};
    if (!options.site) {
        throw new Error('DesckcomStrategy requires desk.com site url');
    }
    options.requestTokenURL = options.requestTokenURL || options.site+DESK_COM_TOKEN_PATH;
    options.accessTokenURL = options.accessTokenURL || options.site+DESK_COM_ACCESS_TOKEN_PATH;
    options.userAuthorizationURL = options.userAuthorizationURL || options.site+DESK_COM_AUTH_PATH;
    options.sessionKey = options.sessionKey || DESK_COM_SESSION_KEY

    this.DESK_CRETENTIAL_URL = options.site+DESK_CRETENTIAL_PATH;

    OAuthStrategy.call(this, options, verify);
    this.name = 'deskcom';
}

util.inherits(Strategy, OAuthStrategy);

module.exports = Strategy;

/**
 * Authenticate request by delegating to Desk.com using OAuth.
 *
 * @param req
 * @param options
 * @return {*}
 * @api protected
 */
Strategy.prototype.authenticate = function(req, options) {
    if (req.query && req.query.denied) {
        return this.fail();
    }
    OAuthStrategy.prototype.authenticate.call(this, req, options);
}

/**
 * Retrieve user profile from  Desk.com.
 *
 * @param {String} token
 * @param {String} tokenSecret
 * @param {Object} params
 * @param {Function} done
 * @api protected
 */
Strategy.prototype.userProfile = function(token, tokenSecret, params,  done) {
    this._oauth.get(this.DESK_CRETENTIAL_URL, token, tokenSecret, function (err, body, res) {
        if (err) {
            return done(new InternalOAuthError('failed to fetch user CRETENTIAL', err));
        }
        try {
            var json = JSON.parse(body);
            var profile = _.clone(json.user);
            profile.provider = 'deskcom';
	        profile.token = token;
	        profile.tokenSecret = tokenSecret;
            profile._raw = body;
            profile._json = json;
            done(null, profile);
        } catch (e) {
            done(e);
        }
    });
}

/**
 * Expose `Strategy`.
 */
module.exports = Strategy;





