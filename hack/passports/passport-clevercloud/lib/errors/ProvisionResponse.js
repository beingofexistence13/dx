'use strict';

/**
 * `ProvisionError` error.
 *
 * ProvisionError represents an error in response to an authorization
 * request.  For details, refer to RFC 6749, section 4.1.2.1.
 *
 * References:
 *   - [The OAuth 2.0 Authorization Framework](http://tools.ietf.org/html/rfc6749)
 *
 * @constructor
 * @param {String} [message]
 * @param {String} [code]
 * @param {String} [uri]
 * @param {Number} [status]
 * @api public
 */
function ProvisionError(message, status) {
  Error.call(this);
  Error.captureStackTrace(this, arguments);
  this.id = 'error';
  this.name = 'ProvisionError';
  this.message = message;
  this.status = status || 500;
}

/**
 * Inherit from `Error`.
 */
ProvisionError.prototype = Object.create(Error.prototype);
ProvisionError.prototype.constructor = ProvisionError;

/**
 * Expose `ProvisionError`.
 */
module.exports = ProvisionError;
