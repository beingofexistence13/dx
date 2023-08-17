'use strict';

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
  
  json = json.data[0];

  var profile = {};
  profile.id = json.id;
  profile.username = json.username;
  profile.displayName = [json.last_name, json.first_name].join(' ');
  profile.name = { familyName: json.last_name,
                   givenName: json.first_name,
                   middleName: null };
  profile.emails = [{ value: json.email }];
  
  return profile;
};