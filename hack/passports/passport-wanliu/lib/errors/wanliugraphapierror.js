/**
 * `WanliuGraphAPIError` error.
 *
 *
 * @constructor
 * @param {String} [message]
 * @param {String} [type]
 * @param {Number} [code]
 * @param {Number} [subcode]
 * @api public
 */
function WanliuGraphAPIError(message, type, code, subcode) {
  Error.call(this);
  Error.captureStackTrace(this, arguments.callee);
  this.name = 'WanliuGraphAPIError';
  this.message = message;
  this.type = type;
  this.code = code;
  this.subcode = subcode;
  this.status = 500;
}

/**
 * Inherit from `Error`.
 */
WanliuGraphAPIError.prototype.__proto__ = Error.prototype;


/**
 * Expose `WanliuGraphAPIError`.
 */
module.exports = WanliuGraphAPIError;