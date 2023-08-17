var request = require('request');

var DataportenUser = function(data, accessToken, opts) {
	// this.strategy = strategy;
	this.data = data || {};
	this.accessToken = accessToken || null;
	this.opts = opts || {};

	this.groupsUrl = 'https://groups-api.dataporten.no/groups/me/groups';

	this.groups = null;
	// this.loadGroups();
}

DataportenUser.prototype.loadGroups = function() {

	var that = this;
	return new Promise(function(resolve, reject) {

		var options = {
			url: that.groupsUrl,
			headers: {
				'User-Agent': 'passport-dataporten',
				'Authorization': 'Bearer ' + that.accessToken
			}
		};
		// console.log("Perforing OAuth 2.0 Request", options);
		request(options, function (error, response, body) {
			if (!error && response.statusCode == 200) {
				var data = JSON.parse(body);
				// console.log("DATA groups", data);
				resolve(data);
			}
			reject(error);
		});

	}).then(function(groups) {
		console.log("Setting groups");
		that.groups = groups;
		return groups;
	});
};

DataportenUser.prototype.getGroups = function() {
	return this.groups;
};

DataportenUser.prototype.serialize = function() {
	var pack = {
		"data": this.data,
		"accessToken": this.accessToken,
	};
	if (this.groups !== null) {
		pack.groups = this.groups;
	}
	return pack;
}

DataportenUser.unserialize = function(pack) {
	var u = new DataportenUser(pack.data, pack.accessToken);
	if (pack.groups) {
		u.groups = pack.groups;
	}
	return u;
}

exports.DataportenUser = DataportenUser;