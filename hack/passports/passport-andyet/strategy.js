var crypto = require('crypto');
var querystring = require('querystring');
var util = require('util');
var request = require('request');

function Strategy(options, verify) {
    if (!options.clientId) {
        throw new Error('Must specify a client ID');
    }

    if (!options.clientSecret) {
        throw new Error('Must specify a client secret');
    }

    this.options = options || {};
    this.options.apps = options.apps || 'https://apps.andyet.com';
    this.options.api = options.api || 'https://api.andbang.com';
    this._verify = verify;

    this.name = 'andyet';
}

Strategy.prototype.authenticate = function (req, options) {
    var self = this;
    options = options || {};

    if (req.query && req.query.error) {
        return self.fail(req.query.error);
    }

    if (req.query && req.query.code) {
        // we're being invoked in the callback
        if (req.query.state != req.session.oauthState) {
            return self.fail('OAuth state values do not match: ' + req.query.state + ' != ' + req.session.oauthState);
        }

        request.post({
            url: self.options.apps + '/oauth/access_token',
            strictSSL: true,
            json: true,
            form: {
                code: req.query.code,
                grant_type: 'authorization_code',
                client_id: self.options.clientId,
                client_secret: self.options.clientSecret
            }
        }, function (err, res, body) {
            if (res && res.statusCode === 200) {
                req.session.access_token = body.access_token;
                req.session.refresh_token = body.refresh_token;
                self._loadUserProfile(body.access_token, function (profile) {
                    self._verify(body.access_token, body.refresh_token, profile, function (err, user, info) {
                        if (err) return self.error(err);
                        if (!user) return self.fail(info);
                        self.success(user, info);
                    });
                });
            } else {
                return self.fail('Failed to get access token');
            }
        });
    } else {
        // we're being invoked in the auth
        req.session.oauthState = crypto.createHash('sha1').update(crypto.randomBytes(4098)).digest('hex');
        var url = self.options.apps + '/oauth/authorize?' + querystring.stringify({
            response_type: 'code',
            client_id: self.options.clientId,
            state: req.session.oauthState
        });
        self.redirect(url);
    }
};

Strategy.prototype._loadUserProfile = function (accessToken, callback) {
    var self = this;

    request.get({
        url: self.options.api + '/me',
        strictSSL: true,
        headers: {
            authorization: 'Bearer ' + accessToken
        },
        json: true
    }, function (err, res, body) {
        if (res && res.statusCode === 200) {
            callback(body);
        } else {
            self.fail('Failed to load user profile');
        }
    });
};

module.exports = Strategy;
