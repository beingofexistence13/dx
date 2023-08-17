/**
 * `WanliuAuthorizationError` error.
 *
 * WanliuAuthorizationError represents an error in response to an
 * authorization request on Wanliu.  Note that these responses don't conform
 * to the OAuth 2.0 specification.
 *
 *
 * @constructor
 * @param {String} [message]
 * @param {Number} [code]
 * @api public
 */
function WanliuAuthorizationError(message, code) {
  Error.call(this);
  Error.captureStackTrace(this, arguments.callee);
  this.name = 'WanliuAuthorizationError';
  this.message = message;
  this.code = code;
  this.status = 500;
}

/**
 * Inherit from `Error`.
 */
WanliuAuthorizationError.prototype.__proto__ = Error.prototype;


/**
 * Expose `WanliuAuthorizationError`.
 */
module.exports = WanliuAuthorizationError;