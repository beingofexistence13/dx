/**
 * Parse profile.
 *
 * @param {object|string} json
 * @return {object}
 * @access public
 */
exports.parse = function(json) {
  if ('string' == typeof json) {
    json = JSON.parse(json);
  }

  var profile = {};
  profile.id = json.id;

  if (json.phone) {
    profile.phone = { number: json.phone.number,
                     countryPrefix: json.phone.country_prefix,
                     nationalNumber: json.phone.national_number };
  }

  if (json.email && json.email.address) {
    profile.email = json.email.address
  }

  return profile;
};
