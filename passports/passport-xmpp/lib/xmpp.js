var Client = require('node-xmpp-client');


module.exports = function(req, options, callback) {
    try {
        var credentials = {
            jid: options.jid,
            password: options.password
        };
        if (options.preferred) {
            credentials.preferred = options.preferred;
        }
        var client = new Client(credentials);

        client.on('online', function(user) {
            client.end()
            callback(null, user.jid);   
        })
        client.on('error', function(error) {
            client.end()
            callback(null, false, { message: error })
        })
    } catch (e) {
        callback(e)
    }
    
}