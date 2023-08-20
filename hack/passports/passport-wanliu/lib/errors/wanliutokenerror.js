/**
 * `WanliuTokenError` error.
 *
 * WanliuTokenError represents an error received from a Wanliu's token
 * endpoint.  Note that these responses don't conform to the OAuth 2.0
 * specification.
 *
 *
 * @constructor
 * @param {String} [message]
 * @param {String} [type]
 * @param {Number} [code]
 * @param {Number} [subcode]
 * @api public
 */
function WanliuTokenError(message, type, code, subcode) {
  Error.call(this);
  Error.captureStackTrace(this, arguments.callee);
  this.name = 'WanliuTokenError';
  this.message = message;
  this.type = type;
  this.code = code;
  this.subcode = subcode;
  this.status = 500;
}

/**
 * Inherit from `Error`.
 */
WanliuTokenError.prototype.__proto__ = Error.prototype;


/**
 * Expose `WanliuTokenError`.
 */
module.exports = WanliuTokenError;