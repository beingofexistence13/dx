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
  profile.username = json.username;

  // These are extra properties, not part of the standard definition
  profile.doctor = json.doctor;
  profile.isDoctor = json.is_doctor;
  profile.isStaff = json.is_staff;
  profile.practiceGroup = json.practice_group;
  profile.permissions = json.permissions;

  return profile;
};
