var vows = require('vows');
var assert = require('assert');
var util = require('util');
var AuthTktStrategy = require('passport-authtkt/strategy');
var BadRequestError = require('passport-authtkt/errors/badrequesterror');
var authtktutils = require('passport-authtkt/authtktutils');

vows.describe('AuthTktStrategy').addBatch({

    'strategy': {
        topic: new AuthTktStrategy('abcdefghijklmnopqrstuvwxyz0123456789'),
        
        'should be named authtkt': function (strategy) {
            assert.equal(strategy.name, 'authtkt');
        },

        'strategy handling a request without cookie middleware configured': {
        
            topic: function(strategy) {
                var self = this;
                var req = {};
                strategy.success = function(user, info) {
                    self.callback(null, req, user, info);
                };

                strategy.fail = function() {
                    self.callback(new Error('should-be-called'), req);
                };
            
                req.res = {};
                req.res.on = function(event, fn) {
                };
            
                process.nextTick(function () {
                    try {
                        strategy.authenticate(req);
                    } catch(e) {
                        self.callback(e, req);
                    }
                });
            },
      
            'should fail' : function(err, req, user, info) {
                assert.isNotNull(err);
            },
            
            'should not set authInfo' : function(err, req, user, info) {
                assert.isUndefined(req.authInfo);
            }
        },

        'strategy handling a request with cookie middleware configured': {
            topic: function() {
                return new AuthTktStrategy('abcdefghijklmnopqrstuvwxyz0123456789');
            },
    
            'after augmenting with actions': {
                topic: function(strategy) {
                    var self = this;
                    var req = {};
                    strategy.success = function(user, info) {
                        req.authInfo = info;
                        self.callback(null, req, user, info);
                    };

                    strategy.fail = function() {
                        self.callback(new Error('should-be-called'), req);
                    };
                
                    req.cookies = {};
                    req.res = {};
                    req.res.on = function(event, fn) {
                    };
                
                    process.nextTick(function () {
                        strategy.authenticate(req);
                    });
                },
          
                'should fail' : function(err, req, user, info) {
                    assert.isNotNull(err);
                },
                
                'should not set authInfo' : function(err, req, user, info) {
                    assert.isUndefined(req.authInfo);
                }
            }
        },

        'strategy handling a request with default options and an invalid cookie': {
            topic: function() {
                return new AuthTktStrategy('abcdefghijklmnopqrstuvwxyz0123456789');
            },
    
            'after augmenting with actions': {
                topic: function(strategy) {
                    var self = this;
                    var req = {};
                    strategy.success = function(user, info) {
                        req.authInfo = info;
                        self.callback(null, req, user, info);
                    };

                    strategy.fail = function() {
                        self.callback(new Error('should-be-called'), req);
                    };
                
                    req.cookies = {
                        authtkt: 'foo'
                    };
                    req.res = {};
                    req.res.on = function(event, fn) {
                    };
                
                    process.nextTick(function () {
                        strategy.authenticate(req);
                    });
                },
          
                'should fail' : function(err, req, user, info) {
                    assert.isNotNull(err);
                },
                
                'should not set authInfo' : function(err, req, user, info) {
                    assert.isUndefined(req.authInfo);
                }
            }
        },

        'strategy handling a request with default options and a basic ticket': {
            topic: function() {
                return new AuthTktStrategy('abcdefghijklmnopqrstuvwxyz0123456789');
            },
    
            'after augmenting with actions': {
                topic: function(strategy) {
                    var self = this;
                    var req = {};
                    strategy.success = function(user, info) {
                        req.authInfo = info;
                        self.callback(null, req, user, info);
                    };

                    strategy.fail = function() {
                        self.callback(new Error('should-not-be-called'), req);
                    };
                
                    req.cookies = {
                        authtkt: 'YzdjNzMwMGFjNWNmNTI5NjU2NDQ0MTIzYWNhMzQ1Mjk0ODg1YWZhMGpibG9nZ3Mh'
                    };
                    req.res = {};
                    req.res.on = function(event, fn) {
                    };
                
                    process.nextTick(function () {
                         strategy.authenticate(req);
                    });
                },
          
                'should not fail' : function(err, req, user, info) {
                    assert.isNull(err);
                },
                
                'should set authInfo' : function(err, req, user, info) {
                    assert.deepEqual(info, {
                        digest: 'c7c7300ac5cf529656444123aca34529',
                        userid: 'jbloggs',
                        tokens: [],
                        userData: '',
                        timestamp: 1216720800
                    });
                },

                'should set req.authInfo' : function(err, req, user, info) {
                    assert.deepEqual(req.authInfo, {
                        digest: 'c7c7300ac5cf529656444123aca34529',
                        userid: 'jbloggs',
                        tokens: [],
                        userData: '',
                        timestamp: 1216720800
                    });
                },

                'should set user to be the user data' : function(err, req, user, info) {
                    assert.equal(user, '');
                }
            }
        },

        'strategy handling a request with options passed to authtkt': {
            topic: function() {
                return new AuthTktStrategy('abcdefghijklmnopqrstuvwxyz0123456789', {
                    encodeUserData: false
                });
            },
    
            'after augmenting with actions': {
                topic: function(strategy) {
                    var self = this;
                    var req = {};
                    strategy.success = function(user, info) {
                        req.authInfo = info;
                        self.callback(null, req, user, info);
                    };

                    strategy.fail = function() {
                        self.callback(new Error('should-not-be-called'), req);
                    };
                
                    req.cookies = {
                        authtkt: 'ZWVhMzYzMGU5ODE3N2JkYmYwZTdmODAzZTE2MzJiN2U0ODg1YWZhMGpibG9nZ3MhZm9vLGJhciFKb2UgQmxvZ2dz'
                    };
                    req.res = {};
                    req.res.on = function(event, fn) {
                    };
                
                    process.nextTick(function () {
                         strategy.authenticate(req);
                    });
                },
          
                'should not fail' : function(err, req, user, info) {
                    assert.isNull(err);
                },
                
                'should set authInfo' : function(err, req, user, info) {
                    assert.deepEqual(info, {
                        digest: 'eea3630e98177bdbf0e7f803e1632b7e',
                        userid: 'jbloggs',
                        tokens: ['foo', 'bar'],
                        userData: 'Joe Bloggs',
                        timestamp: 1216720800
                    });
                },

                'should set req.authInfo' : function(err, req, user, info) {
                    assert.deepEqual(req.authInfo, {
                        digest: 'eea3630e98177bdbf0e7f803e1632b7e',
                        userid: 'jbloggs',
                        tokens: ['foo', 'bar'],
                        userData: 'Joe Bloggs',
                        timestamp: 1216720800
                    });
                },

                'should set user to be the user data' : function(err, req, user, info) {
                    assert.equal(user, 'Joe Bloggs');
                }
            }
        },

        'strategy handling a request with options passed to the authenticate method': {
            topic: function() {
                return new AuthTktStrategy('abcdefghijklmnopqrstuvwxyz0123456789');
            },
    
            'after augmenting with actions': {
                topic: function(strategy) {
                    var self = this;
                    var req = {};
                    strategy.success = function(user, info) {
                        req.authInfo = info;
                        self.callback(null, req, user, info);
                    };

                    strategy.fail = function() {
                        self.callback(new Error('should-not-be-called'), req);
                    };
                
                    req.cookies = {
                        authtkt: 'ZWVhMzYzMGU5ODE3N2JkYmYwZTdmODAzZTE2MzJiN2U0ODg1YWZhMGpibG9nZ3MhZm9vLGJhciFKb2UgQmxvZ2dz'
                    };
                    req.res = {};
                    req.res.on = function(event, fn) {
                    };
                
                    process.nextTick(function () {
                         strategy.authenticate(req, {encodeUserData: false});
                    });
                },
          
                'should not fail' : function(err, req, user, info) {
                    assert.isNull(err);
                },
                
                'should set authInfo' : function(err, req, user, info) {
                    assert.deepEqual(info, {
                        digest: 'eea3630e98177bdbf0e7f803e1632b7e',
                        userid: 'jbloggs',
                        tokens: ['foo', 'bar'],
                        userData: 'Joe Bloggs',
                        timestamp: 1216720800
                    });
                },

                'should set req.authInfo' : function(err, req, user, info) {
                    assert.deepEqual(req.authInfo, {
                        digest: 'eea3630e98177bdbf0e7f803e1632b7e',
                        userid: 'jbloggs',
                        tokens: ['foo', 'bar'],
                        userData: 'Joe Bloggs',
                        timestamp: 1216720800
                    });
                },

                'should set user to be the user data' : function(err, req, user, info) {
                    assert.equal(user, 'Joe Bloggs');
                }
            }
        },

        'strategy handling a request with options passed to the authenticate method overriding strategy-level options': {
            topic: function() {
                return new AuthTktStrategy('abcdefghijklmnopqrstuvwxyz0123456789', {
                    encodeUserData: true
                });
            },
    
            'after augmenting with actions': {
                topic: function(strategy) {
                    var self = this;
                    var req = {};
                    strategy.success = function(user, info) {
                        req.authInfo = info;
                        self.callback(null, req, user, info);
                    };

                    strategy.fail = function() {
                        self.callback(new Error('should-not-be-called'), req);
                    };
                
                    req.cookies = {
                        authtkt: 'ZWVhMzYzMGU5ODE3N2JkYmYwZTdmODAzZTE2MzJiN2U0ODg1YWZhMGpibG9nZ3MhZm9vLGJhciFKb2UgQmxvZ2dz'
                    };
                    req.res = {};
                    req.res.on = function(event, fn) {
                    };
                
                    process.nextTick(function () {
                         strategy.authenticate(req, {encodeUserData: false});
                    });
                },
          
                'should not fail' : function(err, req, user, info) {
                    assert.isNull(err);
                },
                
                'should set authInfo' : function(err, req, user, info) {
                    assert.deepEqual(info, {
                        digest: 'eea3630e98177bdbf0e7f803e1632b7e',
                        userid: 'jbloggs',
                        tokens: ['foo', 'bar'],
                        userData: 'Joe Bloggs',
                        timestamp: 1216720800
                    });
                },

                'should set req.authInfo' : function(err, req, user, info) {
                    assert.deepEqual(req.authInfo, {
                        digest: 'eea3630e98177bdbf0e7f803e1632b7e',
                        userid: 'jbloggs',
                        tokens: ['foo', 'bar'],
                        userData: 'Joe Bloggs',
                        timestamp: 1216720800
                    });
                },

                'should set user to be the user data' : function(err, req, user, info) {
                    assert.equal(user, 'Joe Bloggs');
                }
            }
        },

        'strategy updating cookie on response if a timeout is set': {
            topic: function() {
                var timestamp = 1216720800;
                var now = timestamp + 60*60;
                return new AuthTktStrategy('abcdefghijklmnopqrstuvwxyz0123456789', {
                    timeout: 12*60*60,
                    // test only:
                    now: now,
                    timestamp: timestamp + 10
                });
            },
    
            'after augmenting with actions': {
                topic: function(strategy) {
                    var self = this;
                    var req = {};
                    strategy.success = function(user, info) {
                        req.user = user;
                        req.authInfo = info;
                    };

                    strategy.fail = function() {
                        assert.fail(); // should not happen
                    };
                
                    req.cookies = {
                        authtkt: 'ZWVhMzYzMGU5ODE3N2JkYmYwZTdmODAzZTE2MzJiN2U0ODg1YWZhMGpibG9nZ3MhZm9vLGJhciFTbTlsSUVKc2IyZG5jdz09'
                    };
                    req.res = {};
                    req.res.cookies = {};
                    req.res.on = function(event, fn) {
                        self.callback(req, event, fn);
                    };
                    req.res.clearCookie = function(name) {
                        assert.fail(); // should not happen
                    };
                    req.res.cookie = function(name, val) {
                        req.res.cookies[name] = val;
                    };
                
                    process.nextTick(function () {
                         strategy.authenticate(req);
                    });
                },
          
                'should register a header event handler': function(req, event, fn) {
                    assert.equal(event, 'header');
                },

                'should update cookie': function(req, event, fn) {
                    fn();
                    assert.equal(req.res.cookies.authtkt, 'YzhhZDIzZGI2MjMyNGViNjcxYzZhODA0ODViODczZDY0ODg1YWZhYWpibG9nZ3MhZm9vLGJhciFTbTlsSUVKc2IyZG5jdz09');

                    var data = authtktutils.splitTicket(authtktutils.base64Decode(req.res.cookies.authtkt));
                    assert.deepEqual(data, {
                        digest: 'c8ad23db62324eb671c6a80485b873d6',
                        userid: 'jbloggs',
                        tokens: ['foo', 'bar'],
                        userData: 'Joe Bloggs',
                        timestamp: 1216720810
                    });

                }
            }
        },

        'strategy updating cookie on response if user data has changed': {
            topic: function() {
                var timestamp = 1216720800;
                var now = timestamp + 60*60;
                return new AuthTktStrategy('abcdefghijklmnopqrstuvwxyz0123456789', {
                    // test only:
                    now: now,
                    timestamp: timestamp + 10
                });
            },
    
            'after augmenting with actions': {
                topic: function(strategy) {
                    var self = this;
                    var req = {};
                    strategy.success = function(user, info) {
                        req.user = user;
                        req.authInfo = info;
                    };

                    strategy.fail = function() {
                        assert.fail(); // should not happen
                    };
                
                    req.cookies = {
                        authtkt: 'ZWVhMzYzMGU5ODE3N2JkYmYwZTdmODAzZTE2MzJiN2U0ODg1YWZhMGpibG9nZ3MhZm9vLGJhciFTbTlsSUVKc2IyZG5jdz09'
                    };
                    req.res = {};
                    req.res.cookies = {};
                    req.res.on = function(event, fn) {
                        self.callback(req, event, fn);
                    };
                    req.res.clearCookie = function(name) {
                        assert.fail(); // should not happen
                    };
                    req.res.cookie = function(name, val) {
                        req.res.cookies[name] = val;
                    };
                
                    process.nextTick(function () {
                         strategy.authenticate(req);
                    });
                },
          
                'should register a header event handler': function(req, event, fn) {
                    assert.equal(event, 'header');
                },

                'should update cookie': function(req, event, fn) {
                    req.authInfo.userData = 'Joey Bloggs';
                    fn();
                    assert.equal(req.res.cookies.authtkt, 'NmYxNDg1MTVhZTQxZTU3YzQwMTE5ZDU4NTJhM2EyNWU0ODg1YWZhYWpibG9nZ3MhZm9vLGJhciFTbTlsZVNCQ2JHOW5aM009');

                    var data = authtktutils.splitTicket(authtktutils.base64Decode(req.res.cookies.authtkt));
                    assert.deepEqual(data, {
                        digest: '6f148515ae41e57c40119d5852a3a25e',
                        userid: 'jbloggs',
                        tokens: ['foo', 'bar'],
                        userData: 'Joey Bloggs',
                        timestamp: 1216720810
                    });

                }
            }
        },

        'strategy updating cookie on response if tokens have changed': {
            topic: function() {
                var timestamp = 1216720800;
                var now = timestamp + 60*60;
                return new AuthTktStrategy('abcdefghijklmnopqrstuvwxyz0123456789', {
                    // test only:
                    now: now,
                    timestamp: timestamp + 10
                });
            },
    
            'after augmenting with actions': {
                topic: function(strategy) {
                    var self = this;
                    var req = {};
                    strategy.success = function(user, info) {
                        req.user = user;
                        req.authInfo = info;
                    };

                    strategy.fail = function() {
                        assert.fail(); // should not happen
                    };
                
                    req.cookies = {
                        authtkt: 'ZWVhMzYzMGU5ODE3N2JkYmYwZTdmODAzZTE2MzJiN2U0ODg1YWZhMGpibG9nZ3MhZm9vLGJhciFTbTlsSUVKc2IyZG5jdz09'
                    };
                    req.res = {};
                    req.res.cookies = {};
                    req.res.on = function(event, fn) {
                        self.callback(req, event, fn);
                    };
                    req.res.clearCookie = function(name) {
                        assert.fail(); // should not happen
                    };
                    req.res.cookie = function(name, val) {
                        req.res.cookies[name] = val;
                    };
                
                    process.nextTick(function () {
                         strategy.authenticate(req);
                    });
                },
          
                'should register a header event handler': function(req, event, fn) {
                    assert.equal(event, 'header');
                },

                'should update cookie': function(req, event, fn) {
                    req.authInfo.tokens = ['x', 'y'];
                    fn();
                    assert.equal(req.res.cookies.authtkt, 'OTdiMGM1MWU1MmFiZTFkZTZmYjY0OWFmM2VhNzY3YmI0ODg1YWZhYWpibG9nZ3MheCx5IVNtOWxJRUpzYjJkbmN3PT0=');

                    var data = authtktutils.splitTicket(authtktutils.base64Decode(req.res.cookies.authtkt));
                    assert.deepEqual(data, {
                        digest: '97b0c51e52abe1de6fb649af3ea767bb',
                        userid: 'jbloggs',
                        tokens: ['x', 'y'],
                        userData: 'Joe Bloggs',
                        timestamp: 1216720810
                    });

                }
            }
        },

        'strategy updating cookie on response if userid has changed': {
            topic: function() {
                var timestamp = 1216720800;
                var now = timestamp + 60*60;
                return new AuthTktStrategy('abcdefghijklmnopqrstuvwxyz0123456789', {
                    // test only:
                    now: now,
                    timestamp: timestamp + 10
                });
            },
    
            'after augmenting with actions': {
                topic: function(strategy) {
                    var self = this;
                    var req = {};
                    strategy.success = function(user, info) {
                        req.user = user;
                        req.authInfo = info;
                    };

                    strategy.fail = function() {
                        assert.fail(); // should not happen
                    };
                
                    req.cookies = {
                        authtkt: 'ZWVhMzYzMGU5ODE3N2JkYmYwZTdmODAzZTE2MzJiN2U0ODg1YWZhMGpibG9nZ3MhZm9vLGJhciFTbTlsSUVKc2IyZG5jdz09'
                    };
                    req.res = {};
                    req.res.cookies = {};
                    req.res.on = function(event, fn) {
                        self.callback(req, event, fn);
                    };
                    req.res.clearCookie = function(name) {
                        assert.fail(); // should not happen
                    };
                    req.res.cookie = function(name, val) {
                        req.res.cookies[name] = val;
                    };
                
                    process.nextTick(function () {
                         strategy.authenticate(req);
                    });
                },
          
                'should register a header event handler': function(req, event, fn) {
                    assert.equal(event, 'header');
                },

                'should update cookie': function(req, event, fn) {
                    req.authInfo.userid = 'joe.bloggs';
                    fn();
                    assert.equal(req.res.cookies.authtkt, 'NWU2NzI5ZDFlMTVjNTNlYTg0Y2UxNmRjNGMyYjc3NWQ0ODg1YWZhYWpvZS5ibG9nZ3MhZm9vLGJhciFTbTlsSUVKc2IyZG5jdz09');

                    var data = authtktutils.splitTicket(authtktutils.base64Decode(req.res.cookies.authtkt));
                    assert.deepEqual(data, {
                        digest: '5e6729d1e15c53ea84ce16dc4c2b775d',
                        userid: 'joe.bloggs',
                        tokens: ['foo', 'bar'],
                        userData: 'Joe Bloggs',
                        timestamp: 1216720810
                    });

                }
            }
        },

        'strategy not updating cookie on response if no timeout and nothing has changed': {
            topic: function() {
                var timestamp = 1216720800;
                var now = timestamp + 60*60;
                return new AuthTktStrategy('abcdefghijklmnopqrstuvwxyz0123456789', {
                    // test only:
                    now: now,
                    timestamp: timestamp + 10
                });
            },
    
            'after augmenting with actions': {
                topic: function(strategy) {
                    var self = this;
                    var req = {};
                    strategy.success = function(user, info) {
                        req.user = user;
                        req.authInfo = info;
                    };

                    strategy.fail = function() {
                        assert.fail(); // should not happen
                    };
                
                    req.cookies = {
                        authtkt: 'ZWVhMzYzMGU5ODE3N2JkYmYwZTdmODAzZTE2MzJiN2U0ODg1YWZhMGpibG9nZ3MhZm9vLGJhciFTbTlsSUVKc2IyZG5jdz09'
                    };
                    req.res = {};
                    req.res.cookies = {};
                    req.res.on = function(event, fn) {
                        self.callback(req, event, fn);
                    };
                    req.res.clearCookie = function(name) {
                        assert.fail(); // should not happen
                    };
                    req.res.cookie = function(name, val) {
                        req.res.cookies[name] = val;
                    };
                
                    process.nextTick(function () {
                         strategy.authenticate(req);
                    });
                },
          
                'should register a header event handler': function(req, event, fn) {
                    assert.equal(event, 'header');
                },

                'should not update cookie': function(req, event, fn) {
                    fn();
                    assert.isUndefined(req.res.cookies.authtkt);
                }
            }
        },

        'strategy deleting cookie on response if authInfo has been removed': {
            topic: function() {
                var timestamp = 1216720800;
                var now = timestamp + 60*60;
                return new AuthTktStrategy('abcdefghijklmnopqrstuvwxyz0123456789', {
                    // test only:
                    now: now,
                    timestamp: timestamp + 10
                });
            },
    
            'after augmenting with actions': {
                topic: function(strategy) {
                    var self = this;
                    var req = {};
                    strategy.success = function(user, info) {
                        req.user = user;
                        req.authInfo = info;
                    };

                    strategy.fail = function() {
                        assert.fail(); // should not happen
                    };
                
                    req.cookies = {
                        authtkt: 'ZWVhMzYzMGU5ODE3N2JkYmYwZTdmODAzZTE2MzJiN2U0ODg1YWZhMGpibG9nZ3MhZm9vLGJhciFTbTlsSUVKc2IyZG5jdz09'
                    };
                    req.res = {};
                    req.res.cookies = {};
                    req.res.on = function(event, fn) {
                        self.callback(req, event, fn);
                    };
                    req.res.clearCookie = function(name) {
                        req.res.cookies[name] = null;
                    };
                    req.res.cookie = function(name, val) {
                        assert.fail(); // should not happen
                    };
                
                    process.nextTick(function () {
                         strategy.authenticate(req);
                    });
                },
          
                'should register a header event handler': function(req, event, fn) {
                    assert.equal(event, 'header');
                },

                'should delete cookie': function(req, event, fn) {
                    delete req.authInfo;
                    fn();
                    assert.isNull(req.res.cookies.authtkt);
                }
            }
        },

        'strategy setting a cookie if not authenticated but later authInfo is added': {
            topic: function() {
                var timestamp = 1216720800;
                var now = timestamp + 60*60;
                return new AuthTktStrategy('abcdefghijklmnopqrstuvwxyz0123456789', {
                    // test only:
                    now: now,
                    timestamp: timestamp
                });
            },
    
            'after augmenting with actions': {
                topic: function(strategy) {
                    var self = this;
                    var req = {};
                    strategy.success = function(user, info) {
                        req.user = user;
                        req.authInfo = info;
                    };

                    strategy.fail = function() {
                        
                    };
                
                    req.cookies = {};
                    req.res = {};
                    req.res.cookies = {};
                    req.res.on = function(event, fn) {
                        self.callback(req, event, fn);
                    };
                    req.res.clearCookie = function(name) {
                        assert.fail(); // should not happen
                    };
                    req.res.cookie = function(name, val) {
                        req.res.cookies[name] = val;
                    };
                
                    process.nextTick(function () {
                         strategy.authenticate(req);
                    });
                },
          
                'should register a header event handler': function(req, event, fn) {
                    assert.equal(event, 'header');
                },

                'should set cookie': function(req, event, fn) {
                    req.authInfo = {
                        digest: 'c7c7300ac5cf529656444123aca34529',
                        userid: 'jbloggs',
                        tokens: [],
                        userData: '',
                        timestamp: 1216720800
                    };
                    fn();
                    assert.equal(req.res.cookies.authtkt, 'YzdjNzMwMGFjNWNmNTI5NjU2NDQ0MTIzYWNhMzQ1Mjk0ODg1YWZhMGpibG9nZ3Mh');
                }
            }
        }
    }
}).export(module);