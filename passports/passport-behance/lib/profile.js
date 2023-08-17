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
  var profile = {}

  if ( !json.user ) return profile;

  profile.id = json.user.id;
  profile.username = json.user.username;
  profile.displayName = json.user.display_name;
  profile.name = { familyName: json.user.last_name,
                   givenName: json.user.first_name };

  profile.photos = [];
  for ( var key in json.user.images )
      profile.photos.push( {value: json.user.images[key] });

  return profile;
};
