exports.parse = function (json) {
  if (typeof json === 'string') {
    json = JSON.parse(json)
  }

  var profile = {}
  profile.id = String(json.user_id)
  profile.username = json.user_name
  profile.given_name = json.given_name
  profile.family_name = json.family_name
  profile.name = json.name
  profile.email = json.email

  return profile
}
