var uri = require('url')
    , crypto = require('crypto')
    , util = require('util')
    , OAuth2Strategy = require('passport-oauth2')
//    , FacebookAuthorizationError = require('./errors/facebookauthorizationerror')
//    , FacebookTokenError = require('./errors/facebooktokenerror')
//    , FacebookGraphAPIError = require('./errors/facebookgraphapierror');

function Strategy(options, verify) {
    options = options || {};
    options.authorizationURL = options.authorizationURL || 'https://www.mapmyfitness.com/v7.0/oauth2/authorize';
    options.tokenURL = options.tokenURL || 'https://oauth2-api.mapmyapi.com/v7.0/oauth2/access_token';
    options.customHeaders = options.customHeaders || {'Api-Key': options.clientID};

    OAuth2Strategy.call(this, options, verify);
    this.name = 'mapmyfitness';
}


util.inherits(Strategy, OAuth2Strategy);

//Strategy.prototype.authenticate = function(req, options) {
////    // Facebook doesn't conform to the OAuth 2.0 specification, with respect to
////    // redirecting with error codes.
////    //
////    //   FIX: https://github.com/jaredhanson/passport-oauth/issues/16
////    if (req.query && req.query.error_code && !req.query.error) {
////        return this.error(new FacebookAuthorizationError(req.query.error_message, parseInt(req.query.error_code, 10)));
////    }
//
//    OAuth2Strategy.prototype.authenticate.call(this, req, options);
//};

Strategy.prototype.userProfile = function(accessToken, done) {
    var user_url = 'https://oauth2-api.mapmyapi.com/v7.0/user/self/';
    var existingHeaders = this._oauth2._customHeaders;
    var additionalHeaders = {'Authorization': "Bearer " + accessToken,
        'Content-Type': 'application/json'};
    for (var attrname in additionalHeaders) {
        existingHeaders[attrname] = additionalHeaders[attrname];
    }
    console.log("HEADERS2:" + JSON.stringify(existingHeaders));
    this._oauth2._request("GET", user_url, existingHeaders, "", accessToken, function (err, body, res) {
        if (err) {
            return done(new InternalOAuthError('failed to fetch user profile', err));
        }
        try {
            var json = JSON.parse(body);
            var profile = { provider: 'mapmyfitness' };
            profile.id = json.id;
            profile.username = json.username;
            profile._raw = body;
            profile._json = json;
            done(null, profile);
        } catch(e) {
            done(e);
        }
    });
};

module.exports = Strategy;