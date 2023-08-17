var util                = require('util');
var OAuth2Strategy      = require('passport-oauth2');
var InternalOAuthError  = require('passport-oauth2').InternalOAuthError;
var Profile             = require('./profile');

// ## //

var Strategy = function (options, verify) {
    options = options || {};
    options.baseURL = options.baseURL || 'https://ionisx.com';
    options.authorizationURL = options.authorizationURL || options.baseURL + '/oauth2/authorize';
    options.tokenURL = options.tokenURL || options.baseURL + '/oauth2/token';
    options.scopeSeparator = options.scopeSeparator || ',';
    options.customHeaders = options.customHeaders || {};

    if (!options.customHeaders['User-Agent']) {
        options.customHeaders['User-Agent'] = options.userAgent || 'passport-ionisx';
    }

    OAuth2Strategy.call(this, options, verify);
    this.name = 'ionisx';
    this._userProfileURL = options.userProfileURL || options.baseURL + '/api/user/me';
    this._oauth2.useAuthorizationHeaderforGET(true);
};

util.inherits(Strategy, OAuth2Strategy);

Strategy.prototype.userProfile = function (accessToken, done) {
    this._oauth2.get(this._userProfileURL, accessToken, function (err, body) {
        var json;

        if (err) {
            done(new InternalOAuthError('Failed to fetch user profile', err));
            return;
        }

        try {
            json = JSON.parse(body);
        }
        catch (ex) {
            done(new Error('Failed to parse user profile'));
            return;
        }

        var profile = Profile.parse(json);
        profile.provider  = 'ionisx';
        profile._raw = body;
        profile._json = json;

        done(null, profile);
    });
};

// ## //

module.exports = Strategy;
