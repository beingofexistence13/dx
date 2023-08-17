/**
 * JavaScript implementation of the mod_auth_tkt cookie standard.
 *
 * Ported from https://github.com/plone/plone.session/blob/master/plone/session/tktauth.py
 */

var crypto       = require('crypto'),
    sprintf      = require('sprintf').sprintf,
    jspack       = require('jspack').jspack,
    _            = require('underscore'),
    authtktUtils = require('./authtktutils');

/**
 * Create a new AuthTkt utility.
 *
 * @param {String} secret The secret to use for ticket creation/validation
 * @param {Object} options
 *
 * Valid options include:
 *
 *   - `encodeUserData`    Encode and decode the userData string using base64.
 *                         Defaults to true.
 *   - `jsonUserData`      Encode and decode the userData string as JSON.
 *                         Defaults to false.
 *   - `ip`                Use the given IP address (a dotted quad string)
 *                         to create/validate tickets.
 *   - `timeout`           Time, in seconds, for ticket validation.
 *
 * Options can also be overridden when passed to individual methods.
 */
var AuthTkt = function(secret, options) {
    this.secret = secret;
    this.options = _.extend({
        encodeUserData: true,
        jsonUserData: false,
        ip: '0.0.0.0',
        timeout: null,
        tokens: []
    }, options || {});
};

/**
 * Create a mod_auth_tkt ticket
 *
 * @param {String} userid User id to encode
 * @param {Object} options can contain `tokens`, `userData`, `timestamp`, and 'ip'
 * @return {String}
 */
AuthTkt.prototype.createTicket = function(userid, options) {
    options = _.extend({
        userData: '',
        timestamp: Math.round(new Date().getTime() / 1000)
    }, this.options, options || {});

    var tokenList = options.tokens.join(",");

    if(options.jsonUserData)
        options.userData = JSON.stringify(options.userData);

    var data1 = this.inetAton(options.ip).concat(this.packTimestamp(options.timestamp)),
        data2 = userid + '\0' + tokenList + '\0' + options.userData;
        digest = this.createDigest(data1, data2);

    // digest + timestamp as an eight character hexadecimal + userid + !
    var ticket = sprintf("%s%08x%s!", digest, options.timestamp, userid);

    if(options.tokens.length > 0)
        ticket += tokenList + '!';
    ticket += options.encodeUserData? this.base64Encode(options.userData) : options.userData;

    return ticket;
};

/**
 * Parse a ticket into an object with keys `userid`, `tokens`, `userData`
 * and `timestamp`.
 *
 * @param {String} ticket The ticket to parse
 * @param {Object} options including `encodeUserData` and `jsonUserData`
 * @return {Object}
 */
AuthTkt.prototype.splitTicket = function(ticket, options) {
    options = _.extend(this.options, options || {});
    return authtktUtils.splitTicket(ticket, options);
};

/**
 * Validate a ticket, returning either its data (as per `splitTicket`) or null.
 *
 * @param {String} ticket The ticket to parse
 * @param {Object} options including `ip`, `timeout`, `encodeUserData` and
 *  `jsonUserData`.
 * @return {Object}
 */
AuthTkt.prototype.validateTicket = function(ticket, options) {
    options = _.extend({
        now: new Date().getTime() / 1000
    }, this.options, options || {});

    var data, newTicket;

    try {
        data = this.splitTicket(ticket, options);
    } catch(e) {
        console.error("Invalid auth tkt: " + e);
        return null;
    }

    newTicket = this.createTicket(data.userid, _.extend(options, {
        tokens: data.tokens,
        userData: data.userData,
        timestamp: data.timestamp
    }));
    if(this.isEqual(newTicket.slice(0, 32), data.digest)) {
        if(!options.timeout)
            return data;
        if(data.timestamp + options.timeout > options.now)
            return data;
    }

    return null;
};

/**
 * Create an encoded ticket suitable for storing in a cookie.
 *
 * @param {String} userid User id to encode
 * @param {Object} options can contain `tokens`, `userData`, `timestamp`, and 'ip'
 * @return {String}
 */
AuthTkt.prototype.getCookie = function(userid, options) {
    return this.base64Encode(this.createTicket(userid, options));
};

/**
 * Validate a ticket, returning either its data (as per `splitTicket`) or null,
 * based on a base64-encoded cookie value
 *
 * @param {String} ticket The ticket to parse, base64 encoded
 * @param {Object} options
 * @return {Object}
 */
AuthTkt.prototype.validateCookie = function(ticket, options) {
    return this.validateTicket(this.base64Decode(ticket), options);
};

// Helpers

/**
 * Encode the given value to base65
 */
AuthTkt.prototype.base64Encode = function(tkt) {
    return new Buffer(tkt).toString('base64').trim();
};

/**
 * Decode the given value from base65
 */
AuthTkt.prototype.base64Decode = function(val) {
    return new Buffer(val, 'base64').toString('ascii');
};

/**
 * Pack a dotted quad IP address into four bytes. Return an octet array.
 */
AuthTkt.prototype.inetAton = function(ip) {
    return ip.split('.').reduce(function(memo, num) {
        return memo.concat(jspack.Pack("!B", [parseInt(num, 10)]));
    }, []);
};

/**
 * Pack a numeric timestamp into an octet array
 */
AuthTkt.prototype.packTimestamp = function(timestamp) {
    return jspack.Pack("!I", [timestamp]);
};

/**
 * Constant time comparison; avoid potential attack vector
 */
AuthTkt.prototype.isEqual = function(val1, val2) {
    if(typeof val1 != "string" || typeof val2 != "string")
        return false;

    if(val1.length != val2.length)
        return false;

    var result = 0;
    for(var i = 0; i < val1.length; ++i) {
        result |= val1[i].charCodeAt(0) ^ val2[i].charCodeAt(0);
    }

    return result === 0;
};

/**
 * Create a mod_auth_tkt digest
 */
AuthTkt.prototype.createDigest = function(data1, data2) {
    var digest0 = crypto.createHash('md5').update(Buffer.concat([new Buffer(data1), new Buffer(this.secret), new Buffer(data2)])).digest('hex');
    var digest = crypto.createHash('md5').update(digest0 + this.secret).digest('hex');
    return digest;
};

module.exports = AuthTkt;