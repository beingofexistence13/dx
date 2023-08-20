var util = require('util'),
  IdentSus = require('id-sus-sdk-nodejs'),
  Strategy = require('passport-strategy').Strategy,
  _values = require('lodash.values'),
  VError = require('verror');

function IdsusStrategy(options, verify) {
  if (Array.prototype.splice.call(arguments, 0).length < 2) {
    throw new RangeError('IdsusStrategy requires an options object and a verify callback');
  }

  if (Object.prototype.toString.call(options) !== '[object Object]') {
    throw new TypeError('IdsusStrategy options argument must be a plain object');
  }

  if (typeof verify !== 'function') {
    throw new TypeError('IdsusStrategy verify argument must be a function');
  }

  if (!options.domain) {
    throw new RangeError('IdsusStrategy options requires a domain key');
  }

  if (!options.clientID) {
    throw new RangeError('IdsusStrategy options requires a clientID key');
  }
  if (!options.clientSecret) {
    throw new RangeError('IdsusStrategy options requires a clientID key');
  }
  if (!options.callbackURL) {
    throw new RangeError('IdsusStrategy options requires a callbackURL key');
  }

  Strategy.call(this);

  this.options = options;

  this._verify = verify;

  this.name = 'idsus';

  this.idsus = IdentSus({
    client_id: this.options.clientID,
    client_secret: this.options.clientSecret,
    redirect_uri: this.options.callbackURL,
    domain: this.options.domain,
  });
}

util.inherits(IdsusStrategy, Strategy);

IdsusStrategy.prototype.authenticate = function(req) {
  var _self = this;
  var IdSUS = _self.idsus;

  function verified(err, user, info) {
    if (err) {
      return _self.error(err);
    }
    if (!user) {
      return _self.fail(info);
    }

    info = info || {};
    _self.success(user, info);
  }

  if (req.query && req.query.code) {
    
    IdSUS.getTokenAndScopes({origin:'code', code: req.query.code }, function (err, body) {

      if (err) {
        return _self.error(new VError(err));
      }

      var args = _values(body.tokenObj).concat(body.scopeObj);
      args.push(verified);

      _self._verify.apply(null, args);

    });

  } else {
    _self.redirect(IdSUS.getUrlCode());
  }

};

module.exports = IdsusStrategy;
