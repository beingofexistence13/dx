var TeamsnapStrategy = require('../lib/strategy')
  , AuthorizationError = require('../lib/errors/authorizationerror')
  , TokenError = require('../lib/errors/tokenerror')
  , InternalOAuthError = require('../lib/errors/internaloautherror')
  , chai = require('chai')
  , clientID = process.env.TEAMSNAP_CLIENT_ID || 'ABC123'
  , secret = process.env.TEAMSNAP_SECRET || 'secret';

describe('TeamsnapStrategy', function() {
  
  describe('issuing authorization request', function() {
    
    describe('that redirects to service provider without redirect URI', function() {
      var strategy = new TeamsnapStrategy({
        clientID: clientID,
        clientSecret: secret
      },
      function(accessToken, refreshToken, profile, done) {});
      
      
      var url;
  
      before(function(done) {
        chai.passport.use(strategy)
          .redirect(function(u) {
            url = u;
            done();
          })
          .req(function(req) {
          })
          .authenticate();
      });
  
      it('should be redirected', function() {
        expect(url).to.equal('https://auth.teamsnap.com/oauth/authorize?response_type=code&client_id=' + clientID);
      });
    }); // that redirects to service provider without redirect URI
    
    describe('that redirects to service provider with redirect URI', function() {
      var strategy = new TeamsnapStrategy({
        clientID: clientID,
        clientSecret: secret,
        callbackURL: 'https://www.example.net/auth/example/callback',
      },
      function(accessToken, refreshToken, profile, done) {});
      
      
      var url;
  
      before(function(done) {
        chai.passport.use(strategy)
          .redirect(function(u) {
            url = u;
            done();
          })
          .req(function(req) {
          })
          .authenticate();
      });
  
      it('should be redirected', function() {
        expect(url).to.equal('https://auth.teamsnap.com/oauth/authorize?response_type=code&redirect_uri=https%3A%2F%2Fwww.example.net%2Fauth%2Fexample%2Fcallback&client_id=' + clientID);
      });
    }); // that redirects to service provider with redirect URI
    
    describe('that redirects to service provider with redirect URI and scope', function() {
      var strategy = new TeamsnapStrategy({
        clientID: clientID,
        clientSecret: secret,
        callbackURL: 'https://www.example.net/auth/example/callback',
        scope: 'read'
      },
      function(accessToken, refreshToken, profile, done) {});
      
      
      var url;
  
      before(function(done) {
        chai.passport.use(strategy)
          .redirect(function(u) {
            url = u;
            done();
          })
          .req(function(req) {
          })
          .authenticate();
      });
  
      it('should be redirected', function() {
        expect(url).to.equal('https://auth.teamsnap.com/oauth/authorize?response_type=code&redirect_uri=https%3A%2F%2Fwww.example.net%2Fauth%2Fexample%2Fcallback&scope=read&client_id=' + clientID);
      });
    }); // that redirects to service provider with redirect URI and scope
    
    describe('that redirects to service provider with scope option', function() {
      var strategy = new TeamsnapStrategy({
        clientID: clientID,
        clientSecret: secret,
        callbackURL: 'https://www.example.net/auth/example/callback',
      },
      function(accessToken, refreshToken, profile, done) {});
      
      
      var url;
  
      before(function(done) {
        chai.passport.use(strategy)
          .redirect(function(u) {
            url = u;
            done();
          })
          .req(function(req) {
          })
          .authenticate({ scope: 'read' });
      });
  
      it('should be redirected', function() {
        expect(url).to.equal('https://auth.teamsnap.com/oauth/authorize?response_type=code&redirect_uri=https%3A%2F%2Fwww.example.net%2Fauth%2Fexample%2Fcallback&scope=read&client_id=' + clientID);
      });
    }); // that redirects to service provider with scope option
    
    describe('that redirects to service provider with scope option as array', function() {
      var strategy = new TeamsnapStrategy({
        clientID: clientID,
        clientSecret: secret,
        callbackURL: 'https://www.example.net/auth/example/callback',
      },
      function(accessToken, refreshToken, profile, done) {});
      
      
      var url;
  
      before(function(done) {
        chai.passport.use(strategy)
          .redirect(function(u) {
            url = u;
            done();
          })
          .req(function(req) {
          })
          .authenticate({ scope: ['permission_1', 'permission_2' ] });
      });
  
      it('should be redirected', function() {
        expect(url).to.equal('https://auth.teamsnap.com/oauth/authorize?response_type=code&redirect_uri=https%3A%2F%2Fwww.example.net%2Fauth%2Fexample%2Fcallback&scope=permission_1%20permission_2&client_id=' + clientID);
      });
    }); // that redirects to service provider with scope option as array
    
    describe('that redirects to service provider with scope option as array using non-standard separator', function() {
      var strategy = new TeamsnapStrategy({
        clientID: clientID,
        clientSecret: secret,
        callbackURL: 'https://www.example.net/auth/example/callback',
        scopeSeparator: ','
      },
      function(accessToken, refreshToken, profile, done) {});
      
      
      var url;
  
      before(function(done) {
        chai.passport.use(strategy)
          .redirect(function(u) {
            url = u;
            done();
          })
          .req(function(req) {
          })
          .authenticate({ scope: ['permission_1', 'permission_2' ] });
      });
  
      it('should be redirected', function() {
        expect(url).to.equal('https://auth.teamsnap.com/oauth/authorize?response_type=code&redirect_uri=https%3A%2F%2Fwww.example.net%2Fauth%2Fexample%2Fcallback&scope=permission_1%2Cpermission_2&client_id=' + clientID);
      });
    }); // that redirects to service provider with scope option as array using non-standard separator
    
    describe('that redirects to service provider with state option', function() {
      var strategy = new TeamsnapStrategy({
        clientID: clientID,
        clientSecret: secret,
        callbackURL: 'https://www.example.net/auth/example/callback',
      },
      function(accessToken, refreshToken, profile, done) {});
      
      
      var url;
  
      before(function(done) {
        chai.passport.use(strategy)
          .redirect(function(u) {
            url = u;
            done();
          })
          .req(function(req) {
          })
          .authenticate({ state: 'foo123' });
      });
  
      it('should be redirected', function() {
        expect(url).to.equal('https://auth.teamsnap.com/oauth/authorize?response_type=code&redirect_uri=https%3A%2F%2Fwww.example.net%2Fauth%2Fexample%2Fcallback&state=foo123&client_id=' + clientID);
      });
    }); // that redirects to service provider with state option
    
    describe('that redirects to service provider with redirect URI option', function() {
      var strategy = new TeamsnapStrategy({
        clientID: clientID,
        clientSecret: secret,
        callbackURL: 'https://www.example.net/auth/example/callback',
      },
      function(accessToken, refreshToken, profile, done) {});
      
      
      var url;
  
      before(function(done) {
        chai.passport.use(strategy)
          .redirect(function(u) {
            url = u;
            done();
          })
          .req(function(req) {
          })
          .authenticate({ callbackURL: 'https://www.example.net/auth/example/callback/alt1' });
      });
  
      it('should be redirected', function() {
        expect(url).to.equal('https://auth.teamsnap.com/oauth/authorize?response_type=code&redirect_uri=https%3A%2F%2Fwww.example.net%2Fauth%2Fexample%2Fcallback%2Falt1&client_id=' + clientID);
      });
    }); // that redirects to service provider with redirect URI option
    
    describe('that redirects to service provider with relative redirect URI option', function() {
      var strategy = new TeamsnapStrategy({
        clientID: clientID,
        clientSecret: secret,
        callbackURL: 'https://www.example.net/auth/example/callback',
      },
      function(accessToken, refreshToken, profile, done) {});
      
      
      var url;
  
      before(function(done) {
        chai.passport.use(strategy)
          .redirect(function(u) {
            url = u;
            done();
          })
          .req(function(req) {
            req.url = '/auth/example/callback/alt2';
            req.headers.host = 'www.example.net';
            req.connection = { encrypted: true };
          })
          .authenticate({ callbackURL: '/auth/example/callback/alt2' });
      });
  
      it('should be redirected', function() {
        expect(url).to.equal('https://auth.teamsnap.com/oauth/authorize?response_type=code&redirect_uri=https%3A%2F%2Fwww.example.net%2Fauth%2Fexample%2Fcallback%2Falt2&client_id=' + clientID);
      });
    }); // that redirects to service provider with relative redirect URI option
    
    describe('that redirects to authorization server using authorization endpoint that has query parameters with scope option', function() {
      var strategy = new TeamsnapStrategy({
        clientID: clientID,
        clientSecret: secret,
        callbackURL: 'https://www.example.net/auth/example/callback',
      },
      function(accessToken, refreshToken, profile, done) {});
      
      
      var url;
  
      before(function(done) {
        chai.passport.use(strategy)
          .redirect(function(u) {
            url = u;
            done();
          })
          .req(function(req) {
          })
          .authenticate({ scope: 'read' });
      });
  
      it('should be redirected', function() {
        expect(url).to.equal('https://auth.teamsnap.com/oauth/authorize?response_type=code&redirect_uri=https%3A%2F%2Fwww.example.net%2Fauth%2Fexample%2Fcallback&scope=read&client_id=' + clientID);
      });
    }); // that redirects to authorization server using authorization endpoint that has query parameters with scope option
    
    describe('that redirects to authorization server using authorization endpoint that has query parameters including scope with scope option', function() {
      var strategy = new TeamsnapStrategy({
        clientID: clientID,
        clientSecret: secret,
        callbackURL: 'https://www.example.net/auth/example/callback',
      },
      function(accessToken, refreshToken, profile, done) {});
      
      var url;
  
      before(function(done) {
        chai.passport.use(strategy)
          .redirect(function(u) {
            url = u;
            done();
          })
          .req(function(req) {
          })
          .authenticate({ scope: 'read' });
      });
  
      it('should be redirected', function() {
        expect(url).to.equal('https://auth.teamsnap.com/oauth/authorize?response_type=code&redirect_uri=https%3A%2F%2Fwww.example.net%2Fauth%2Fexample%2Fcallback&scope=read&client_id=' + clientID);
      });
    }); // that redirects to authorization server using authorization endpoint that has query parameters including scope with scope option
    
    describe('that redirects to authorization server using authorization endpoint that has query parameters including state with state option', function() {
      var strategy = new TeamsnapStrategy({
        clientID: clientID,
        clientSecret: secret,
        callbackURL: 'https://www.example.net/auth/example/callback',
      },
      function(accessToken, refreshToken, profile, done) {});
      
      
      var url;
  
      before(function(done) {
        chai.passport.use(strategy)
          .redirect(function(u) {
            url = u;
            done();
          })
          .req(function(req) {
          })
          .authenticate({ state: 'foo123' });
      });
  
      it('should be redirected', function() {
        expect(url).to.equal('https://auth.teamsnap.com/oauth/authorize?response_type=code&redirect_uri=https%3A%2F%2Fwww.example.net%2Fauth%2Fexample%2Fcallback&state=foo123&client_id=' + clientID);
      });
    }); // that redirects to authorization server using authorization endpoint that has query parameters including state with state option
    
  }); // issuing authorization request
  
  
  describe('processing response to authorization request', function() {
    
    describe('that was denied', function() {
      var strategy = new TeamsnapStrategy({
        
        
        clientID: clientID,
        clientSecret: secret,
        callbackURL: 'https://www.example.net/auth/example/callback',
      },
      function(accessToken, refreshToken, profile, done) {});
      
      
      var user
        , info;

      before(function(done) {
        chai.passport.use(strategy)
          .fail(function(i) {
            info = i;
            done();
          })
          .req(function(req) {
            req.query = {};
            req.query.error = 'access_denied';
          })
          .authenticate();
      });

      it('should fail without message', function() {
        expect(info).to.not.be.undefined;
        expect(info.message).to.be.undefined;
      });
    }); // that was denied
    
    describe('that was denied with description', function() {
      var strategy = new TeamsnapStrategy({
        
        
        clientID: clientID,
        clientSecret: secret,
        callbackURL: 'https://www.example.net/auth/example/callback',
      },
      function(accessToken, refreshToken, profile, done) {});
      
      
      var user
        , info;

      before(function(done) {
        chai.passport.use(strategy)
          .fail(function(i) {
            info = i;
            done();
          })
          .req(function(req) {
            req.query = {};
            req.query.error = 'access_denied';
            req.query.error_description = 'Why oh why?';
          })
          .authenticate();
      });

      it('should fail with message', function() {
        expect(info).to.not.be.undefined;
        expect(info.message).to.equal('Why oh why?');
      });
    }); // that was denied with description
    
  }); // processing response to authorization request
  
  
  describe('using a relative redirect URI', function() {
  
    describe('issuing authorization request', function() {
      var strategy = new TeamsnapStrategy({
        
        
        clientID: clientID,
        clientSecret: secret,
        callbackURL: '/auth/example/callback',
      },
      function(accessToken, refreshToken, profile, done) {});
  
      describe('that redirects to service provider from secure connection', function() {
        var url;

        before(function(done) {
          chai.passport.use(strategy)
            .redirect(function(u) {
              url = u;
              done();
            })
            .req(function(req) {
              req.url = '/auth/example';
              req.headers.host = 'www.example.net';
              req.connection = { encrypted: true };
            })
            .authenticate();
        });

        it('should be redirected', function() {
          expect(url).to.equal('https://auth.teamsnap.com/oauth/authorize?response_type=code&redirect_uri=https%3A%2F%2Fwww.example.net%2Fauth%2Fexample%2Fcallback&client_id=' + clientID);
        });
      }); // that redirects to service provider from secure connection
      
      describe('that redirects to service provider from insecure connection', function() {
        var url;

        before(function(done) {
          chai.passport.use(strategy)
            .redirect(function(u) {
              url = u;
              done();
            })
            .req(function(req) {
              req.url = '/auth/example';
              req.headers.host = 'www.example.net';
              req.connection = {};
            })
            .authenticate();
        });

        it('should be redirected', function() {
          expect(url).to.equal('https://auth.teamsnap.com/oauth/authorize?response_type=code&redirect_uri=http%3A%2F%2Fwww.example.net%2Fauth%2Fexample%2Fcallback&client_id=' + clientID);
        });
      }); // that redirects to service provider from insecure connection
      
      
      describe('from behind a secure proxy', function() {
        
        describe('that is trusted by app and sets x-forwarded-proto', function() {
          var url;

          before(function(done) {
            chai.passport.use(strategy)
              .redirect(function(u) {
                url = u;
                done();
              })
              .req(function(req) {
                req.app = {
                  get: function(name) {
                    return name == 'trust proxy' ? true : false;
                  }
                }
            
                req.url = '/auth/example';
                req.headers.host = 'www.example.net';
                req.headers['x-forwarded-proto'] = 'https';
                req.connection = {};
              })
              .authenticate();
          });

          it('should be redirected', function() {
            expect(url).to.equal('https://auth.teamsnap.com/oauth/authorize?response_type=code&redirect_uri=https%3A%2F%2Fwww.example.net%2Fauth%2Fexample%2Fcallback&client_id=' + clientID);
          });
        }); // that is trusted by app and sets x-forwarded-proto
        
        describe('that is trusted by app and sets x-forwarded-proto and x-forwarded-host', function() {
          var url;

          before(function(done) {
            chai.passport.use(strategy)
              .redirect(function(u) {
                url = u;
                done();
              })
              .req(function(req) {
                req.app = {
                  get: function(name) {
                    return name == 'trust proxy' ? true : false;
                  }
                }
            
                req.url = '/auth/example';
                req.headers.host = 'server.internal';
                req.headers['x-forwarded-proto'] = 'https';
                req.headers['x-forwarded-host'] = 'www.example.net';
                req.connection = {};
              })
              .authenticate();
          });

          it('should be redirected', function() {
            expect(url).to.equal('https://auth.teamsnap.com/oauth/authorize?response_type=code&redirect_uri=https%3A%2F%2Fwww.example.net%2Fauth%2Fexample%2Fcallback&client_id=' + clientID);
          });
        }); // that is trusted by app and sets x-forwarded-proto and x-forwarded-host
        
        describe('that is not trusted by app and sets x-forwarded-proto', function() {
          var url;

          before(function(done) {
            chai.passport.use(strategy)
              .redirect(function(u) {
                url = u;
                done();
              })
              .req(function(req) {
                req.app = {
                  get: function(name) {
                    return name == 'trust proxy' ? false : false;
                  }
                }
            
                req.url = '/auth/example';
                req.headers.host = 'www.example.net';
                req.headers['x-forwarded-proto'] = 'https';
                req.connection = {};
              })
              .authenticate();
          });

          it('should be redirected', function() {
            expect(url).to.equal('https://auth.teamsnap.com/oauth/authorize?response_type=code&redirect_uri=http%3A%2F%2Fwww.example.net%2Fauth%2Fexample%2Fcallback&client_id=' + clientID);
          });
        }); // that is trusted by app and sets x-forwarded-proto and x-forwarded-host
        
        describe('that is not trusted by app and sets x-forwarded-proto and x-forwarded-host', function() {
          var url;

          before(function(done) {
            chai.passport.use(strategy)
              .redirect(function(u) {
                url = u;
                done();
              })
              .req(function(req) {
                req.app = {
                  get: function(name) {
                    return name == 'trust proxy' ? false : false;
                  }
                }
            
                req.url = '/auth/example';
                req.headers.host = 'server.internal';
                req.headers['x-forwarded-proto'] = 'https';
                req.headers['x-forwarded-host'] = 'www.example.net';
                req.connection = {};
              })
              .authenticate();
          });

          it('should be redirected', function() {
            expect(url).to.equal('https://auth.teamsnap.com/oauth/authorize?response_type=code&redirect_uri=http%3A%2F%2Fserver.internal%2Fauth%2Fexample%2Fcallback&client_id=' + clientID);
          });
        }); // that is not trusted by app and sets x-forwarded-proto and x-forwarded-host
        
        describe('that is trusted by strategy and sets x-forwarded-proto', function() {
          var strategy = new TeamsnapStrategy({
            clientID: clientID,
            clientSecret: secret,
            callbackURL: '/auth/example/callback',
            proxy: true
          },
          function(accessToken, refreshToken, profile, done) {});
          
          
          var url;

          before(function(done) {
            chai.passport.use(strategy)
              .redirect(function(u) {
                url = u;
                done();
              })
              .req(function(req) {
                req.url = '/auth/example';
                req.headers.host = 'www.example.net';
                req.headers['x-forwarded-proto'] = 'https';
                req.connection = {};
              })
              .authenticate();
          });

          it('should be redirected', function() {
            expect(url).to.equal('https://auth.teamsnap.com/oauth/authorize?response_type=code&redirect_uri=https%3A%2F%2Fwww.example.net%2Fauth%2Fexample%2Fcallback&client_id=' + clientID);
          });
        }); // that is trusted by strategy and sets x-forwarded-proto
        
        describe('that is trusted by strategy and sets x-forwarded-proto and x-forwarded-host', function() {
          var strategy = new TeamsnapStrategy({
            clientID: clientID,
            clientSecret: secret,
            callbackURL: '/auth/example/callback',
            proxy: true
          },
          function(accessToken, refreshToken, profile, done) {});
          
          
          var url;

          before(function(done) {
            chai.passport.use(strategy)
              .redirect(function(u) {
                url = u;
                done();
              })
              .req(function(req) {
                req.url = '/auth/example';
                req.headers.host = 'server.internal';
                req.headers['x-forwarded-proto'] = 'https';
                req.headers['x-forwarded-host'] = 'www.example.net';
                req.connection = {};
              })
              .authenticate();
          });

          it('should be redirected', function() {
            expect(url).to.equal('https://auth.teamsnap.com/oauth/authorize?response_type=code&redirect_uri=https%3A%2F%2Fwww.example.net%2Fauth%2Fexample%2Fcallback&client_id=' + clientID);
          });
        }); // that is trusted by strategy and sets x-forwarded-proto and x-forwarded-host
        
      }); // from behind a secure proxy
    
    }); // issuing authorization request
    
  }); // using a relative redirect URI
  
});
