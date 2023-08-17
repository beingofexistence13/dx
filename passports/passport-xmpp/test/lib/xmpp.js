var proxyquire = require('proxyquire')
  , chai = require('chai')
  , Event = require('events').EventEmitter

var noop = function() {}

describe('XMPP', function() {
    
    it('Calls client contructor with expected parameters', function(done) {
        var client = function(options) {
            expect(options.jid).to.equal('test@example.com')
            expect(options.password).to.equal('secret')
            done()
            return { on: noop }
        }
        var xmpp = proxyquire('../../lib/xmpp', { 'node-xmpp-client': client })
        xmpp({}, { jid: 'test@example.com', password: 'secret' }, function(e) { done(e) })
    })
    
    it('Calls client constructor with preferred value', function(done) {
        var client = function(options) {
            expect(options.preferred).to.equal('PLAIN')
            done()
            return { on: noop }
        }
        var xmpp = proxyquire('../../lib/xmpp', { 'node-xmpp-client': client })
        xmpp({}, { preferred: 'PLAIN' }, function(e) { done(e) })
    })
    
    it('Calls error callback on fail', function(done) {
        var event = null
        var endCalled = false
        var client = function() {
            this.client = event = new Event()
            this.client.end = function() {
                endCalled = true
            }
            return event
        }
        var xmpp = proxyquire('../../lib/xmpp', { 'node-xmpp-client': client })
        var callback = function(error, data, message) {
            expect(error).to.be.null
            expect(data).to.be.false
            expect(message.message).to.equal('Failed')
            expect(endCalled).to.be.true
            done()
        }
        xmpp({}, {}, callback)
        event.emit('error', 'Failed')
    })
    
    
    it('Calls success calback on success', function(done) {
        var event = null
        var user = { domain: 'example.com', user: 'test', resource: 'resource' }
        var endCalled = false
        var client = function() {
            this.client = event = new Event()
            this.client.end = function() {
                endCalled = true
            }
            return event
        }
        var xmpp = proxyquire('../../lib/xmpp', { 'node-xmpp-client': client })
        var callback = function(error, data, message) {
            expect(error).to.be.null
            expect(data).to.eql(user)
            expect(message).to.be.undefined
            expect(endCalled).to.be.true
            done()
        }
        xmpp({}, {}, callback)
        event.emit('online', { jid: user })
    })
    
    it('Handles an exception', function(done) {
    
        var client = function() {
            throw new Error('Weird stuff!')
        }
        var xmpp = proxyquire('../../lib/xmpp', { 'node-xmpp-client': client })
        var callback = function(error, data, message) {
            expect(error.message).to.equal('Weird stuff!')
            expect(data).to.be.undefined
            expect(message).to.be.undefined
            done()
        }
        xmpp({}, {}, callback)
    })
 
})

/*
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
*/