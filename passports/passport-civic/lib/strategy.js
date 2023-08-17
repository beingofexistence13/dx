var civicSip = require('civic-sip-api');
var passport = require('passport-strategy')
    , util = require('util');

function Strategy(options, verify) {
    passport.Strategy.call(this);

    if (!verify) throw new Error('Civic strategy requires a verify function');
    if(!options.appId) throw new Error('appId is a required field');
    if(!options.prvKey) throw new Error('prvKey is a required field');
    if(!options.appSecret) throw new Error('appSecret is a required field');

    this.name = 'civic';
    this._verify = verify;
    this._passReqToCallback = options.passReqToCallback;
    this._civicClient = civicSip.newClient(options);
}

util.inherits(Strategy, passport.Strategy);

/**
 * Authenticate request based on the body which would contain civic_jwt_token
 * header.
 *
 * @param {Object} req
 * @api protected
 */
Strategy.prototype.authenticate = function(req) {
    var self = this;
    function verified(err, user, info) {
		if (err) {
			return self.error(err);
		}
		if (!user) {
			return self.fail(info);
		}
		self.success(user, info);
	}
    this._civicClient.exchangeCode(req.body.civic_jwt_token).then(function(userData) {
        if (self._passReqToCallback)
        {
            self._verify(req,userData,verified);
        }
        else
        {
            self._verify(userData,verified);
        }
      }).catch(function(error) {
        self.error(error);
      });
}

module.exports = Strategy;
