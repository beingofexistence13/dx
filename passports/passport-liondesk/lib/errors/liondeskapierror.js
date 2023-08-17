/**
 * `LionDeskAPIError` error.
 *
 * @constructor
 * @param {string} [message]
 * @param {number} [code]
 * @access public
 */
function LionDeskAPIError(message, code) {
  Error.call(this);
  Error.captureStackTrace(this, arguments.callee);
  this.name = 'LionDeskAPIError';
  this.message = message;
  this.code = code;
}

// Inherit from `Error`.
LionDeskAPIError.prototype.__proto__ = Error.prototype;


// Expose constructor.
module.exports = LionDeskAPIError;
