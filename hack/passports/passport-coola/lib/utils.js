var utils = {};

utils.serialize = function(params) {
    var string = '';
    for (var param in params) {
        string += '&' + param + '=' + encodeURIComponent(params[param]);
    }

    return string.substr(1, string.length);
}

module.exports = utils;