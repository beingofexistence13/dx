/**
  * Parse profile.
  *
  * @param {Object|String} json
  * @return {Object}
  * @api private
  */
exports.parse = function(json) {
  if ('string' == typeof json) {
    json = JSON.parse(json);
  }

  var profile = {};
  profile.id = String(json.id);
  profile.firstName = json.first_name;
  profile.lastName = json.last_name;
  profile.userStatus = json.user_status;
  if (json.image) {
    profile.image = json.image;
  }
  if (json.email) {
    profile.emails = [{ value: json.email }];
  }

  return profile;
};
