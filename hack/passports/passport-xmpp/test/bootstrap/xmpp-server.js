'use strict';

var xmpp = require('node-xmpp-server')
  , c2s = null
  , debug = require('debug')('xmpp-server')
  
var startServer = function(done) {
    // Sets up the server.
    c2s = new xmpp.C2SServer({
        port: 5222,
        domain: 'localhost'
    })

    // On Connect event. When a client connects.
    c2s.on('connect', function(client) {
        // That's the way you add mods to a given server.

        // Allows the developer to register the jid against anything they want
        c2s.on('register', function(opts, cb) {
            debug('REGISTER')
            cb(true)
        })

        // Allows the developer to authenticate users against anything they want.
        client.on('authenticate', function(opts, cb) {
            debug('AUTH ' + opts.jid + ' -> ' + opts.password)
            if ('secret' === opts.password) {
                debug('SUCCESS')
                return cb(null, opts)
            }
            debug('FAIL')
            cb(false)
        })

        client.on('online', function() {
            debug('ONLINE')
        })

        // Stanza handling
        client.on('stanza', function(stanza) {
            debug('STANZA' + stanza)
        })

        // On Disconnect event. When a client disconnects
        client.on('disconnect', function() {
           debug('DISCONNECT')
        })

    })

    if (done) done();
}

module.exports = {
    startServer: startServer,
    stopServer: function(done) {
        if (!c2s) {
            return done();
        }
        c2s.shutdown(done);
    }
}