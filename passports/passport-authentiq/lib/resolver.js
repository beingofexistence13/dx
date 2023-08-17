// Load modules
var NoOpenIDError = require('./errors/no_openid_error');


/**
 * Discover OpenID Connect provider configuration from Authentiq Provider.
 *
 * @return {Function}
 * @api public
 */
function Resolver(options) {
  options = options || {};

  this.providerURL = options.providerURL;

  if (!this.providerURL) {
      throw new NoOpenIDError('No OpenID Connect issuer has been set');
  }
}

Resolver.prototype.resolve = function (identifier, cb) {
    return cb(null, this.providerURL);
};

module.exports = Resolver;
