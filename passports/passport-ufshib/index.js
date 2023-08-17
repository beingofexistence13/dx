"use strict;"

/*
    UF Shibboleth Passport Authentication Module

    This module exposes a passport Strategy object that is pre-configured to
    work with UF's Shibboleth identity provider (IdP). To use this, you 
    must register your server with the UF IdP, and you can use the 
    metadataRoute() method below to provide the metadata necessary for 
    registration via the standard metadata url (urls.metadata).

    author: Lee Stevens with code derived from Dave Stearns University of Washington
            Modified for use at The University of Florida
*/

const passport      = require('passport');
const saml          = require('passport-saml');
const util          = require('util');
var xml2js          = require('xml2js');
var parseString     = require('xml2js').parseString;
var fs              = require('fs');

var parser          = new xml2js.Parser();


//const ufIdPEntryPoint = 'https://beta.login.ufl.edu/idp/profile/SAML2/Redirect/SSO';   

const strategyName = 'ufsaml';

//standard login, callback, logout, and meta-data URLs
//these will be exposed from module.exports so that
//clients can refer to them
//the metadata one in particular is important to get right
//as the auto-regisration process requires that exact URL
const urls = {
    metadata: '/Shibboleth.sso/Metadata'
};

//export the urls map
module.exports.urls = urls;

//map of possible profile attributes and what name
//we should give them on the resulting user object
//add to this with other attrs if you request them


var profileAttrs = {};
var shibboleth2 = JSON.parse(fs.readFileSync('./config/shibboleth2.json', 'utf-8'));
var attributeMap = fs.readFileSync(shibboleth2.attribute_path, 'utf-8');
var publicCert = fs.readFileSync(shibboleth2.cert_path, 'utf-8');
var privateKey = fs.readFileSync(shibboleth2.pvt_key_path, 'utf-8');

parseString(attributeMap,function(err,result) {
    result.Attributes.Attribute.forEach(function (element) {
        profileAttrs[element.$.name] = element.$.id;
    });
});

function convertProfileToUser(profile) {
    var user = {};
    var niceName;
    var attr;
    for (attr in profile) {
        niceName = profileAttrs[attr];
        if (niceName !== undefined && profile[attr]) {
            if(niceName.indexOf("UFAD_PSRoles") >= 0)
                user[niceName] = profile[attr].split("$");
            else
                user[niceName] = profile[attr];
            if (process.env.NODE_ENV === 'development') console.log(niceName + "=" + user[niceName] );
        }
        else
            user[attr]=profile[attr];
    }
    return user;    
}

/*
    Passport Strategy for UF Shibboleth Authentication
    This class extends passport-saml's Strategy, providing the necessary 
    options and handling the conversion of the returned profile into a 
    sensible user object.

    options should contain:
        entityId: your server's entity id,
        domain: your server's domain name,
        callbackUrl: login callback url (relative to domain),
        privateKey: your private key for signing requests (optional)
*/
function Strategy(options) {
    samlOptions = {
        entryPoint: shibboleth2.idp_entrypoint,
        identifierFormat: null,
        issuer: shibboleth2.entityId || shibboleth2.domain,
        callbackUrl: 'https://' + shibboleth2.domain + options.callbackUrl,
        decryptionPvk: privateKey,
        privateCert: privateKey,
        acceptedClockSkewMs: 180000,
        forced: options.forced,
        passive: options.passive
    };

    function verify(profile, done) {
        if (!profile)
            return done(new Error('Empty SAML profile returned!')); 
        else {   
            user = convertProfileToUser(profile);
            if (user) {
                if ("authz" in options) {
                    authz = options["authz"](user);
                    if (!authz.status) {
                        return done(null, false, { message: authz.message });
                    }
                }
            }
            return done(null, user);
        }              
    }
    saml.Strategy.call(this, samlOptions, verify);
    this.name = strategyName;
}

util.inherits(Strategy, saml.Strategy);

module.exports.Strategy = Strategy;

/*
    Route implementation for the standard Shibboleth metadata route
    usage:
        var ufshib = require(...);
        var strategy = new ufshib.Strategy({...});
        app.get(ufshib.urls.metadata, ufshib.metadataRoute(strategy));

    ** NOTE **
    This function does not generate metadata that fully complies with the UF shibboleth IDP.
    Hand altering of the metadat generated may be necessary for it to work.  
    This is a todo, and when I make this work I will remove this comment. ~ Lee

*/
module.exports.metadataRoute = function(strategy) {
    return function(req, res) {
        res.type('application/xml');
        res.status(200).send(strategy.generateServiceProviderMetadata(publicCert));
    }
} //metadataRoute

/*
    Middleware for ensuring that the user has authenticated.
    You can use this in two different ways. If you pass this to
    app.use(), it will secure all routes added after that.
    Or you can use it selectively on routes that require authentication
    like so:
        app.get('/foo/bar', ensureAuth(loginUrl), function(req, res) {
            //route implementation
        });

    where loginUrl is the url to your login route where you call
    passport.authenticate()
*/
module.exports.ensureAuth = function(loginUrl) {
    return function(req, res, next) {
        if (req.isAuthenticated()) {
            if(req.cookies.sm) {
                var then = req.cookies.sm;
                var now = (new Date).getTime();
                var diff = now - then;
                if(diff > (shibboleth2.session_age_millis))
                {
                    res.clearCookie('sm');
                    if(req.url.indexOf(shibboleth2.status_401_route) == 0) {
                        req.session.destroy();
                        res.status(401).send({"status":"Unauthorized"});
                    }
                    else {
                       req.logout(); 
                       req.session.authRedirectUrl = req.url;
                       res.redirect(loginUrl);
                    }
                }
                else {
                    var milliseconds = (new Date).getTime();
                    res.cookie('sm', milliseconds, { httpOnly: true });
                }
            }
            else {
                var milliseconds = (new Date).getTime();
                res.cookie('sm', milliseconds, { httpOnly: true });
            }
            return next();
        }
        else {
            if(req.url.indexOf(shibboleth2.status_401_route) == 0) {
                res.status(401).send({"status":"Unauthorized"});
            }
            else {
               req.session.authRedirectUrl = req.url;
               res.redirect(loginUrl);
            }
        }
    }
};


/*
    Middleware for redirecting back to the originally requested URL after
    a successful authentication. The ensureAuth() middleware above will
    capture the current URL in session state, and when your callback route
    is called, you can use this to get back to the originally-requested URL.
    usage:
        var ufshib = require(...);
        var strategy = new ufshib.Strategy({...});
        app.get('/login', passport.authenticate(strategy.name));
        app.post('/login/callback', passport.authenticate(strategy.name), ufshib.backtoUrl());
        app.use(ufshib.ensureAuth('/login'));
*/
module.exports.backToUrl = function(defaultUrl) {
    return function(req, res) {
        var url = req.session.authRedirectUrl;
        delete req.session.authRedirectUrl;
        res.redirect(url || defaultUrl || '/');
    }
};


