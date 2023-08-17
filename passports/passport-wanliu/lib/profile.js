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
  var profile = {}, info = json.info;
  profile.id = json.id;
  profile.login = info.login;
  profile.displayName = info.name;
  // profile.email = json.email;
  profile.telephone = info.telephone;
  // profile.name = { familyName: json.last_name,
  //                  givenName: json.first_name,
  //                  middleName: json.middle_name };

  // profile.gender = json.gender;
  // profile.profileUrl = json.link;

  if (info.email) {
    profile.emails = [{ value: info.email }];
  }
  // if (json.avatar) {
  //   if (typeof json.picture == 'object' && json.picture.data) {
  //     // October 2012 Breaking Changes
  //     profile.photos = [{ value: json.picture.data.url }];
  //   } else {
  //     profile.photos = [{ value: json.picture }];
  //   }
  // }

  return profile;
};