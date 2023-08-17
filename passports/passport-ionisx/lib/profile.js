var parse = function (json) {
    var profile = {};

    profile.id = json.id;
    profile.username = json.username;
    profile.name = json.name;

    profile.primaryEmail = json.primaryEmail;

    if (json.emails) {
        profile.emails = json.emails.map(function (email) {
            return {
                value: email.email,
                confirmed: email.confirmed
            };
        });
    }

    return profile;
};

// ## //

exports.parse = parse;
