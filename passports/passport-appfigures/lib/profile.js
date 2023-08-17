/**
 * Parse profile.
 *
 * @param {Object|String} json
 * @return {Object}
 * @api private
 */
exports.parse = function(json) {
  if ('string' == typeof json) {
    json = JSON.parse(json)
  }

  var profile = {}
  profile.id = String(json.user.id)
  profile.name = json.user.name
  profile.email = json.user.email
  profile.avatar_url = json.user.avatar_url

  return profile
}
