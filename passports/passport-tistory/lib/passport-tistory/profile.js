/**
 * Parse profile.
 *
 * @param {Object|String} json
 * @return {Object}
 * @api private
 */
exports.parse = function(json) {
  var profile = {}

  if ('string' == typeof json) {
    profile = JSON.parse(json);
  } else {
    profile = json;
  }

  profile.provider = 'tistory';



  return profile;
};
