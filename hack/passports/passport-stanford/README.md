# Passport-Stanford

*Passport-Stanford* is a [Passport](http://passportjs.org/)
authentication strategy to make it easier to work with [Stanford
University](http://www.stanford.edu)'s [SAML
2.0](https://wikipedia.org/wiki/SAML_2.0) authentication
infrastructure. It's built on top of
[passport-saml](https://github.com/bergie/passport-saml) and steals
many ideas from
[Passport-UWShib](https://github.com/drstearns/passport-uwshib.git).

## IdP Access

While this module contains configurations for most of Stanford's SAML
IdPs, only `itlabv2` is currently usable without registration. Each IdP
can be referenced in the Passport configuration by its SAML *entityID*
or a short alias:

### itlab (https://weblogin.itlab.stanford.edu/idp/shibboleth)

`weblogin.itlab` is a Shibboleth v3.x IdP run by the Emerging
Technology group, and will eventually replace `idp.itlab`.

### dev (https://idp-dev.stanford.edu/)

`dev` is the development IdP run by the Authentication Services team,
and requires [registration](https://shibboleth.stanford.edu/). `dev`
used to be the main system for testing, but is being replaced by `uat`.

### uat (https://idp-uat.stanford.edu/)

`uat` is the test IdP run by the Authentication Services team, and
requires [registration](https://shibboleth.stanford.edu/).

### prod (https://idp.stanford.edu/)

`prod` is the production IdP run by the Authentication Services team,
and requires [registration](https://shibboleth.stanford.edu/).

# Installation

You can install with `npm`:

    npm install passport-stanford

or, to add it to your
[package.json](https://www.npmjs.org/doc/package.json.html) file: this

    npm install --save passport-stanford


# Usage

There is a fully-working example server script in
[/test/app.js](/scottylogan/passport-stanford/blob/master/test/app.js),
and an associated
[package.json](/scottylogan/passport-stanford/blob/master/test/package.json),
which you can use to install all the necessary
packages to make the example script run (express, express middleware,
passport, etc.).

Typically, `passport` is used in conjunction with
[express](https://expressjs.org/) middleware, so you'll need to include
several `node` modules, in addition to the `http` and `https` modules:

  * `express` - Express middleware
  * `body-parser` - parse request bodies, required by `passport-saml`
  * `cookie-parser` - parse cookies, required by `passport`
  * `express-session` - session management
  * `passport` - authentication middleware
  * `morgan` - logger
  * `passport-stanford` - this module

Once the `passport-stanford` module is loaded, it can be used to create
a new Passport Strategy:

    var suSAML = require('passport-stanford');
    
    ...

    // create a Stanford SAML Strategy and tell Passport to use it
    var saml = new suSAML.Strategy({
      idp:        'itlabv2',
      entityId:   'http://localhost/',
      path:       acsPath,
      loginPath:  loginPath,
    });

    passport.use(saml);

To use a different IdP, just change the `idp` setting, or use the
`cert` and `entryPoint` [settings](https://github.com/bergie/passport-saml/blob/master/README.md#configure-strategy).

`acsPath` is the path to the SAML 2.0 Assertion Consumer Service -
where the IdP will send SAML Assertions. The default is `/saml/consume`.

`loginPath` is the path to your login page, where SAML authentication
is triggered. The default is `/login`.

In addition to the properties shown above, you may also pass any
settings accepted by [passport-saml](https://github.com/bergie/passport-saml/blob/master/README.md#configure-strategy).

The name of the strategy is `suSAML`, but you can use the `.name`
property of the Strategy to refer to that.

Apps have to create routes to handle login requests and responses from
the IdP. Logins will be GET requests, and response will be POST
requests:

    app.get(loginPath,
      passport.authenticate(saml.name),
      saml.return('/')
    );

    app.post(acsPath,
      passport.authenticate(saml.name),
      saml.return('/')
    );

`return` is a method from the Strategy object to return either to the
URL that triggered the authentication request, or to the URL passed
into `return`, or to `/`.

There's also a `metadata` method that can be used to provide SAML 2.0
metadata for your SP; it's also configured as a GET:

    app.get('/metadata',
      saml.metadata()
    );

Normally, to protect a route with Passport, you have to write code like
this:

    app.get("/profile", function(req, res) {
      if (req.isAuthenticated()) {
        res.render("profile", { user : req.user });
      } else {
        res.redirect("/login");
      }
    });

Since this is a common requirement, this module provides a `protect`
method to enforces SAML authentication:

    app.get('/profile', 
      saml.protect(),
      function(req, res) {
        res.render('profile', { user : req.user	});
      }
    );

You can also protect a set of routes by calling `protect` from
`app.use`:

    app.use(saml.protect());

Any route requested after this middleware will require authentication.

## Signed Responses

`passport-stanford` includes the public certs used by the Stanford IdPs
to sign SAML responses and/or assertions, so signature verification is
enabled by default.

## Encrypted Assertions

To use encrypted assertions you will need a private / public X.509 key
pair. The test app
[/test/package.json](/scottylogan/passport-stanford/blob/master/test/pac
kage.json) contains a `gencert` script to generate a key and
self-signed certificate. To configure encryption, add the paths to your
key and cert to the config:

    saml = new suSAML.Strategy({
      protocol:           'http://',
      idp:                'itlab',
      entityId:           'https://github.com/scottylogan/passport-stanford',
      path:               acsPath,
      loginPath:          loginPath,
      passReqToCallback:  true,
      passport:           passport,
      decryptionPvkPath:  './private.pem',
      decryptionCertPath: './public.pem',
    });

The public certificate will be included in the automatically generated
metadata. You will need to provide the metadata to your IdP.

## User Information

`passport-stanford` uses the mappings in `lib/attributes.js` to rewrite
the attributes received from the IdP - which are often OIDs - into more
friendly names. After authentication, both the original- and
friendly-named attributes are available in `req.user`.

## Pretending to be Shibboleth

To make your SP look more like a Shibboleth SP, you can use different
paths for the ACS and Metadata:

    app.post('/Shibboleth.sso/SAML2/POST',
      passport.authenticate(saml.name),
      saml.return('/')
    );

    app.get('/Shibboleth.sso/Metadata',
      saml.metadata()
    );
