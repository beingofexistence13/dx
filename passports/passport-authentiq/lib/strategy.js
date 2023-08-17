// Load modules
var OpenIDConnectStrategy = require('passport-openidconnect'),
    Resolver = require('./resolver'),
    util = require('util'),
    xtend = require('xtend');


/**
 * `Strategy` constructor.
 *
 * The Authentiq OpenID Connect authentication strategy authenticates requests using
 * OpenID Connect, which is an identity layer on top of the OAuth 2.0 protocol.
 *
 * Options:
 *   - `clientID`      your Authentiq application's Client ID
 *   - `clientSecret`  your Authentiq application's Client Secret
 *   - `callbackURL`   URL to which Authentiq will redirect the user after granting authorization
 *   - `scope`         array of permission scopes to request.  valid scopes include:
 *                     'aq:name', 'email~rs', 'phone', 'aq:push'
 *                     more on Identity Claims at http://developers.authentiq.io/#identity-claims
 *
 * @param {Object} options
 * @param {Function} verify
 * @api public
 */
function Strategy(options, verify) {
    ['clientID',
      'clientSecret',
      'callbackURL',
      'scope'].forEach(function (k) {
        if (!options[k]) {
            throw new Error('You must provide the ' + k + ' configuration value to use passport-authentiq.');
        }
    });

    this.options = xtend({}, options, {
        providerURL: options.providerURL || 'https://connect.authentiq.io',
        sessionKey: options.sessionKey || 'authentiq:connect.authentiq.io'
    });

    // pass a custom Resolver, that ignores WebFinger
    this.options.resolver = this.options.resolver || new Resolver(this.options);

    // return back the Authentiq application's Client, based on the options
    function getClientCallback(issuer, cb) {
        return cb(null, {
            id: options.clientID,
            secret: options.clientSecret,
            redirectURIs: [
                options.callbackURL
            ]
        });
    };

    this.options.getClientCallback = this.options.getClientCallback || getClientCallback;

    OpenIDConnectStrategy.call(this, this.options, verify);

    this.name = 'authentiq';
}

util.inherits(Strategy, OpenIDConnectStrategy);


/**
 * Export constructor
 */
module.exports = Strategy;
