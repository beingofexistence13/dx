/**
 * Support for splitting auth_tkt tickets and encoding/decoding base64
 * strings. 
 *
 * Provides an object with functions `splitTicket()`, `base64Encode()` and
 * `base64Decode()`.
 *
 * May be loaded using `require()` in node.js, as a RequireJS AMD dependency,
 * or as a simple script (in which case the global `authtktUtils` will contain
 * the utilities object).
 */

(function (root, factory) {
    if (typeof exports === 'object') { // Node.
        module.exports = factory();
    } else if (typeof define === 'function' && define.amd) { // RequireJS
        define(factory);
    } else { // Browser globals (root is window)
        root.authtktUtils = factory();
    }
}(this, function () {
    
    return {

        /**
         * Parse a ticket into an object with keys `userid`, `tokens`, `userData`
         * and `timestamp`.
         *
         * @param {String} ticket The ticket to parse
         * @param {Object} options including `encodeUserData` and `jsonUserData`
         * @return {Object}
         */
        splitTicket: function (ticket, options) {
            options = options || {};

            var digest    = ticket.slice(0, 32),
                val       = ticket.slice(32, 40),
                remainder = ticket.slice(40),
                parts, timestamp, userid, userData, tokens;
            
            if(!val)
                throw Error("No value in ticket string");

            timestamp = parseInt(val, 16); // convert from hexadecimal

            parts = remainder.split("!");
            if(parts.length == 2) {
                userid = parts[0];
                userData = parts[1];
                tokens = [];
            } else if(parts.length == 3) {
                userid = parts[0];
                userData = parts[2];
                tokens = parts[1].split(',');
            } else {
                throw Error("Invalid remainder in ticket");
            }

            if(options.encodeUserData === undefined || options.encodeUserData)
                userData = this.base64Decode(userData);
            if(options.jsonUserData)
                userData = JSON.parse(userData);

            return {
                digest: digest,
                userid: userid,
                tokens: tokens,
                userData: userData,
                timestamp: timestamp
            };
        },

        /* Base64 encoding/decoding
         *
         * Copyright (c) 2010 Nick Galbreath
         * http://code.google.com/p/stringencoders/source/browse/#svn/trunk/javascript
         *
         * Permission is hereby granted, free of charge, to any person
         * obtaining a copy of this software and associated documentation
         * files (the "Software"), to deal in the Software without
         * restriction, including without limitation the rights to use,
         * copy, modify, merge, publish, distribute, sublicense, and/or sell
         * copies of the Software, and to permit persons to whom the
         * Software is furnished to do so, subject to the following
         * conditions:
         *
         * The above copyright notice and this permission notice shall be
         * included in all copies or substantial portions of the Software.
         */

        base64Decode: function (s) {
            // convert to string
            s = "" + s;
            var pads, i, b10;
            var imax = s.length;
            if (imax === 0) {
                return s;
            }

            if (imax % 4 !== 0) {
                throw "Cannot decode base64";
            }

            pads = 0;
            if (s.charAt(imax -1) == this.PADCHAR) {
                pads = 1;
                if (s.charAt(imax -2) == this.PADCHAR) {
                    pads = 2;
                }
                // either way, we want to ignore this last block
                imax -= 4;
            }

            var x = [];
            for (i = 0; i < imax; i += 4) {
                b10 = (this.getbyte64(s,i) << 18) | (this.getbyte64(s,i+1) << 12) |
                    (this.getbyte64(s,i+2) << 6) | this.getbyte64(s,i+3);
                x.push(String.fromCharCode(b10 >> 16, (b10 >> 8) & 0xff, b10 & 0xff));
            }

            switch (pads) {
            case 1:
                b10 = (this.getbyte64(s,i) << 18) | (this.getbyte64(s,i+1) << 12) | (this.getbyte64(s,i+2) << 6);
                x.push(String.fromCharCode(b10 >> 16, (b10 >> 8) & 0xff));
                break;
            case 2:
                b10 = (this.getbyte64(s,i) << 18) | (this.getbyte64(s,i+1) << 12);
                x.push(String.fromCharCode(b10 >> 16));
                break;
            }
            return x.join('');
        },

        base64Encode: function (s) {
            var padchar = this.PADCHAR;
            var alpha   = this.ALPHA;

            var i, b10;
            var x = [];

            // convert to string
            s = "" + s;

            var imax = s.length - s.length % 3;

            if (s.length === 0) {
                return s;
            }
            for (i = 0; i < imax; i += 3) {
                b10 = (this.getbyte(s,i) << 16) | (this.getbyte(s,i+1) << 8) | this.getbyte(s,i+2);
                x.push(alpha.charAt(b10 >> 18));
                x.push(alpha.charAt((b10 >> 12) & 0x3F));
                x.push(alpha.charAt((b10 >> 6) & 0x3f));
                x.push(alpha.charAt(b10 & 0x3f));
            }
            switch (s.length - imax) {
            case 1:
                b10 = this.getbyte(s,i) << 16;
                x.push(alpha.charAt(b10 >> 18) + alpha.charAt((b10 >> 12) & 0x3F) +
                       padchar + padchar);
                break;
            case 2:
                b10 = (this.getbyte(s,i) << 16) | (this.getbyte(s,i+1) << 8);
                x.push(alpha.charAt(b10 >> 18) + alpha.charAt((b10 >> 12) & 0x3F) +
                       alpha.charAt((b10 >> 6) & 0x3f) + padchar);
                break;
            }
            return x.join('');
        },

        // Helpers

        PADCHAR: '=',
        ALPHA: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',

        getbyte64: function (s,i) {
            var idx = this.ALPHA.indexOf(s.charAt(i));
            if (idx == -1) {
            throw "Cannot decode base64";
            }
            return idx;
        },

        getbyte: function (s,i) {
            var x = s.charCodeAt(i);
            if (x > 255) {
                throw "INVALID_CHARACTER_ERR: DOM Exception 5";
            }
            return x;
        }

    };

}));
