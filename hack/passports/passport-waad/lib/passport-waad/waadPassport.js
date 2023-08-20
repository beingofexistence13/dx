
/*
 *  eHT authentication provider.  
 *
 *  SAML v2.0 provider for use with Azure AD.  Note that it's assumed
 *  customer ADFS will be sync'd with Azure.
 *
 */
'use strict';

var fs = require('fs');
var SamlStrategy = require('./samlstrategy');
var graphApiInc = require('./graphApi');
var jsonQuery = require('json-query');
var StrategyMock = require('./strategyMock');
var graphApi = new graphApiInc.graphApi();

// This user is helpful when testing locally and 
// you don't want to mess with AD.
var testUser = { };

//
//  All users are indexed on their emails
//
var findByEmail = function(users, email, fn) {
    
  for (var i = 0, len = users.length; i < len; i++) {
    var user = users[i];
    if (user.email === email) {
      return fn(null, user);
    }
  }
  
  return fn(null, null);
};

//
//  Main closure.
//
var waadPassport = function(options) {

    var conf= options.configuration;
    this.name = options.name;
    this.passport = options.passport;
    this.app = options.app;
    this.name = options.name;

    this.users = [];

    if (!conf) {
    	conf = JSON.parse(fs.readFileSync(options.configurationFile, "utf8"));

	if (!conf) { 
       	    throw "Missing configuration object!";
    	}
    }

    if (!this.passport) {
        throw "Missing passport object!";
    }

    if (!this.app) {
        throw "You must pass the app object!";
    }

    if (!this.name) {
        throw "You must pass the name of this service!";
    }

    if (this.name == "test") {

        console.log("Running in test mode - real auth disabled");

        if (conf.testUser) {
            testUser.email = conf.testUser;
            console.log('Test user is ' + testUser.email);
        }

        if (conf.testGroups) {
            testUser.groups = conf.testGroups;
            console.log('Test user is in groups');
            console.log(testUser.groups);
        }

        if (conf.testUserName) {
            testUser.userName =conf.testUserName;
            console.log('test user name is ' + testUser.userName);
        }
    }

    this.configuration =  {
        appUrl: conf.appUrl,
        identityMetadata: conf.identityMetadata,
        loginCallback: conf.loginCallback,
        issuer: conf.issuer,
        logoutCallback: conf.logoutCallback,
        privateCert: '',
        publicCert: '',
        tenant : conf.tenant,
        clientId : conf.clientId,
        clientSecret : conf.clientSecret
    };

    this.samlStrategy = null;
    
    try { 
        this.configuration.privateCert = fs.readFileSync(conf.privateCert, 'utf-8');
    } catch (e) { 
        throw "Private cert is invalid...";
    }
    
    try {
        this.configuration.publicCert =  fs.readFileSync(conf.publicCert, 'utf-8');
    } catch (e) { 
        throw "Public cert is invalid...";
    }

    if (this.name != "test") {
        
        console.log('Setup passport SAML');
        
        this.samlStrategy = this.strategy(this.configuration, this.users);
        this.passport.use(this.samlStrategy);
            
        this.passport.serializeUser(this.serializeUser);
        this.passport.deserializeUser(this.deserializeUser(this.users));

    } else {
        
        console.log('Setup passport mock (test)');
        this.passport.use(new StrategyMock(testUser));
      
        this.passport.serializeUser(function(user,done) { 
            console.log("Serialize " + user.email);
            return done(null,user.email);
        });

        this.passport.deserializeUser(function(id,done) { 
            console.log('Deserialize');
            return done(null,testUser);
        });

    }
    
    this.app.use(this.passport.initialize());
    this.app.use(this.passport.session());
    
    return this;
};

// Deserialize from in memory cache using email as a key
waadPassport.prototype.deserializeUser = function(users) { 
    
    return function(id, done) { 
        console.log('DeserializeUser ' + id);
        findByEmail(users, id, function (err, user) {
            done(err, user);
        });
    };
    
}

// Serialize into memory cache using email as a key
waadPassport.prototype.serializeUser = function(user, done) { 
    console.log('SerializeUser ' + user.email);
    done(null, user.email);
}

waadPassport.prototype.lookupGraphData = function(configuration, profile, users, callback) { 
            
    if (configuration.clientSecret === null) {
            
        // No WAAD data to be had (ADFS with no WAAD)
        callback(users, profile);
            
    } else {
    
        graphApi.getAADToken(
            
            configuration.tenant, 
            configuration.clientId, 
            configuration.clientSecret,
            
            function(err,token) { 
                
	            graphApi.getUser(
	                configuration.tenant, 
	                token, 
	                profile.email,
	                function(err, value) { 
	                    
	                    if (err) { 
	                        callback(err, null);
	                    } else {
	                        callback(null, value);
	                    }
	                    
	                }
	            );
             }
        ); 
    }
};

// Return the passport strategy - note the need to bring users into the closure.
waadPassport.prototype.strategy = function(configuration, users) { 
    
    console.log('Setup SAML-P strategy');
    
    return new SamlStrategy(configuration, function(profile, done) { 
    
        // Step 1 - did we get a valid email back?
        if (!profile.email) {
          return done(new Error("No email found"), null);
        }

        // Step 3 - put the user object into the users array for future caching use.
        findByEmail(users, profile.email, function(err, user) {
              
            if (err) {
              return done(err);
            }
            
            // Don't have this user yet .. add
            if (!user) {
                
                // User data is rarely complete until we do a graph seach.
                // Note, for ADFS direct connect this makes no sense and
                // the call effecively does nothing.
                waadPassport.prototype.lookupGraphData(
                    configuration, 
                    profile, 
                    users, 
                    
                    function(err, adData) { 
                    
                        if (!err && adData) { 
                            
                            // Save relevant data
                            profile.objectId = adData.objectId;
                            profile.graphData = adData;
                            
                            // A certain amount of normalization is required.
                            var user = { 
                                objectId : adData.objectId,
                                accountEnabled : adData.accountEnabled,
                                city : adData.city,
                                country : adData.country,
                                department : adData.department,
                                displayName : adData.displayName,
                                facsimileTelephoneNumber : adData.facsimileTelephoneNumber,
                                givenName : adData.givenName,
                                jobTitle : adData.jobTitle,
                                email : profile.email,
                                mobile : adData.mobile,
                                postalCode : adData.postalCode,
                                preferredLanguage : adData.preferredLanguage,
                                state : adData.state,
                                streetAddress : adData.streetAddress,
                                surname : adData.surname,
                                telephoneNumber : adData.telephoneNumber,
                                thumbnailPhoto : adData.thumbnailPhoto,
                                userName: adData.givenName + " " + adData.surname,
                                groups : []
                            };
                            
                            for(var g in adData.groups){
                                user.groups.push(
                                    {
                                        name : adData.groups[g].displayName
                                    });
                            }
                            
                            users.push(user);
                            
                            return done(null, user);
                            
                        } else {
                            return done(err, null);
                        }
                    
                });
            
                
            } else {
                return done(null, user);
            }
        });
    }
)};

  
// Authentication
waadPassport.prototype.authenticate = function(auth) { 
    
   return auth.passport.authenticate(
        auth.name, { failureRedirect: '/', failureFlash: true });
};

  
// Authentication
waadPassport.prototype.deauthenticate = function(auth) { 
    
    return function(req,res,next) { 
        
        console.log("Deuthenticate " + req.user.email);
        for(var i = auth.users.length - 1; i >= 0; i--) {
            if(auth.users[i].email === req.user.email) {
                auth.users.splice(i, 1);
            }   
        }
        
        next();
    };
};

waadPassport.prototype.memberOf = function(group, errorCallback, req, res, next) { 
    
    return function(req,res,next) { 

        if (req.isAuthenticated()) { 
            
            var foundGroup = jsonQuery('groups[name=' + group +'].name', {
                data: req.user
            });
            
            if (foundGroup.value) {
                return next();
            }
        }
    
        console.log('Hitting error callback');
        errorCallback(req,res);

    };
};

// Verification of auth.c
waadPassport.prototype.ensureAuthenticated = function(req,res,next) { 
    
    if (req.isAuthenticated()) {
        return next();
    }
  
    // Back to login page - no auth.
    res.redirect('/login');
};
    
// Setup sign on routes.  Please be careful where you use this
// - the order of routes MATTERS.
waadPassport.prototype.setSSORoutes = function(router, loginCallback, logoutCallback) { 
    
    console.log('Setup SSO routes');
    
    router.post('/login/callback',
        waadPassport.prototype.authenticate(this),
        loginCallback
    );

    router.get('/login',
        waadPassport.prototype.authenticate(this),
        loginCallback
    );
    
    router.post('/logout/callback', function(req, res){
        console.log("logout post from:" + req.ip);
        logoutCallback();
    });
     
    router.get('/logout', 
        waadPassport.prototype.deauthenticate(this),
        function(req, res) {

            // Full SAML logout won't postback yet ...
            req.logout();
            logoutCallback(req,res);
    });

};

exports.waadPassport = waadPassport;
