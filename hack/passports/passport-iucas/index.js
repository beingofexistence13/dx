var url = require('url'),
    util = require('util'),
    https = require('https'),
    passport = require('passport')

function Strategy(options, verify) {
    if (typeof options == 'function') {
        verify = options;
        options = {};
    }
    if (!verify) { throw new Error('IU cas authentication strategy requires a verify function'); }

    this.casURL = "https://idp.login.iu.edu/idp/profile/cas";
    this.serviceURL = options.serviceURL; //optional - if not set, authenticate will use current URL

    passport.Strategy.call(this);
    this.name = 'iucas';
    this._verify = verify;
    this._passReqToCallback = options.passReqToCallback;
}
util.inherits(Strategy, passport.Strategy);

Strategy.prototype.authenticate = function (req, options) {
    options = options || {};
    if(this.serviceURL) {
        var serviceURL = this.serviceURL;
    } else {
        //use the current url
        var serviceURL = req.protocol + '://' + req.get('host') + req.originalUrl;
    }

    var self = this;

    function verified(err, user, info) {
        if (err) { return self.error(err); }
        if (!user) { return self.fail(info); }
        //console.log("calling verified success");
        self.success(user, info);
    };

    //handling logout?
    var relayState = req.query.RelayState;
    if (relayState) {
        console.log("handling logout");
        req.logout();
        return this.redirect(this.casURL+'/logout');
    }

    //redirect to cas for the first time
    if (!req.query.ticket) {
        var redirectURL = url.parse(this.casURL+'/login');
        redirectURL.query = {
            service: serviceURL
        };
        return this.redirect(url.format(redirectURL));
    }

    //got ticket! validate it.
    var validateURL = url.parse(this.casURL+'/serviceValidate');
    validateURL.query = {
        ticket: req.query.ticket,
        service: serviceURL
    }
    https.get(url.format(validateURL), function(res) {
        var body = '';
        res.on('data', function(d) {
            body += d;
        });
        res.on('end', function() {
            if(body.indexOf('cas:authenticationSuccess') === -1) {
                verified(new Error('Authentication failed'));
            } else {
                var lines = body.split('\n');
                var username = lines[3].replace('<cas:user>','').replace('</cas:user>', '').trim();
                if(self._passReqToCallback) { 
                    self._verify(req, username, verified);
                } else {
                    self._verify(username, verified);
                }
            }
        });
    }).on('error', function(e) {;
        self.error(new Error(e));
    });
};

exports.Strategy = Strategy;
