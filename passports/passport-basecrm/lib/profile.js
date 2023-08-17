/**
 * Parse profile.
 *
 * @param {Object|String} json
 * @return {Object}
 * @api private
 */

'use strict';

exports.parse = function (json) {
    if ('string' === typeof json) {
        json = JSON.parse(json);
    }

    var profile = {};
    profile.id = String(json.data.id);
    profile.displayName = json.data.name;
    profile.username = json.data.email;
    profile.profileUrl = 'https://app.futuresimple.com/settings/profile';   //BaseCRM does not have a user specific URL
    if (json.data.email) {
        profile.emails = [{ value: json.data.email }];
    }

    return profile;
};
