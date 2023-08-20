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
  profile.id = String(json.identity.id);
  profile.displayName = json.identity.first_name+" "+json.identity.last_name;
  profile.username = json.identity.email_address;
  profile.emails = [{value:json.identity.email_address}]
  profile.accounts = json.accounts;

  return profile;
};
