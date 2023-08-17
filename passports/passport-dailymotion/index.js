var util = require('util');

var OAuth2Strategy      = require('passport-oauth').OAuth2Strategy,
    InternalOAuthError  = require('passport-oauth').InternalOAuthError;

var Strategy = function(options, verify) {
    options = options || {};
    options.authorizationURL = options.authorizationURL || 'https://www.dailymotion.com/oauth/authorize';
    options.tokenURL = options.tokenURL || 'https://api.dailymotion.com/oauth/token';
    options.scopeSeparator = options.scopeSeparator || ',';

    OAuth2Strategy.call(this, options, verify);
    this.name = 'dailymotion';
    this._profileURL = options.profileURL || 'https://api.dailymotion.com/me';
};

util.inherits(Strategy, OAuth2Strategy);

Strategy.prototype.userProfile = function(accessToken, done) {
    var url = this._profileURL;

    this._oauth2.getProtectedResource(url, accessToken, function(err, body, res) {
        if (!!err)
            return done(new InternalOAuthError('failed to fetch user profile', err));

        try { var json = JSON.parse(body); }
        catch(e) { done(e); }

        var dmProfile = { provider: 'dailymotion' };
        dmProfile.id = json.id;

        if (!!json.email)
            dmProfile.emails = [{ value: json.email }];

        dmProfile.displayName = json.screenname;

        var nameComponents = dmProfile.displayName.split(' ');
        var pName = { familyName: '', givenName: nameComponents[0] };

        if (nameComponents.length > 1)
            pName.familyName = nameComponents[nameComponents.length - 1];

        dmProfile.name = pName;

        dmProfile._raw = body;
        dmProfile._json = json;

        done(null, dmProfile);
    });
};

module.exports.Strategy = Strategy;
