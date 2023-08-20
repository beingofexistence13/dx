/**
 * Parse profile.
 *
 * @param {Object|String} json
 * @return {Object}
 * @api private
 */
exports.parse = function (json) {
	if ('string' == typeof json) {
		json = JSON.parse(json);
	}
	
	var profile = {};
	profile.id = String(json.uid);
	if (json.id_str) {
		profile.id = json.id_str;
	}
	profile.username = json.nickname;
	profile.displayName = json.nickname;
	profile.name = {
		familyName: json.last_name, 
		givenName: json.first_name
	}
	profile.emails = [{value: json.email}];
	
	return profile;
};