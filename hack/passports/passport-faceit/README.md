# passport-faceit

FACEIT is a trademark or registered trademark of FACEIT LIMITED in the U.S. and/or other countries. "passport-faceit" is not operated by, sponsored by, or affiliated with FACEIT LIMITED in any way.

[Passport](http://passportjs.org/) strategies for authenticating with [FACEIT](https://faceit.com/)
using OAuth 2.0.

This module lets you authenticate using FACEIT in your Node.js applications.
By plugging into Passport, FACEIT authentication can be easily and
unobtrusively integrated into any application or framework that supports
[Connect](http://www.senchalabs.org/connect/)-style middleware, including
[Express](http://expressjs.com/).

## Install
```bash
$ npm install passport-faceit
```
## Usage of OAuth 2.0

#### Configure Strategy

The FACEIT OAuth 2.0 authentication strategy authenticates users using a FACEIT
account and OAuth 2.0 tokens. The strategy requires a `verify` callback, which
accepts these credentials and calls `done` providing a user, as well as
`options` specifying a client ID, client secret, and callback URL.

```javascript
var passport       = require("passport");
var faceitStrategy = require("passport-faceit").Strategy;

passport.use(new faceitStrategy({
    clientID: FACEIT_CLIENT_ID,
    clientSecret: FACEIT_CLIENT_SECRET
  },
  function(accessToken, refreshToken, params, profile, done) {
    const userData = jwt.decode(params.id_token);

    done(null, {
      faceitId: userData.guid,
      faceitAvatar: userData.picture,
      faceitEmail: userData.email,
      faceitNickname: userData.nickname
    });
  }
));
```

#### Authenticate Requests

Use `passport.authenticate()`, specifying the `"faceit"` strategy, to
authenticate requests.

For example, as route middleware in an [Express](http://expressjs.com/)
application:

```javascript
app.get("/auth/faceit", passport.authenticate("faceit"));
app.get("/auth/faceit/callback", passport.authenticate("faceit", { failureRedirect: "/" }), function(req, res) {
    // Successful authentication, redirect home.
    res.redirect("/");
});
```

## Example

```javascript
var express        = require("express");
var bodyParser     = require("body-parser");
var cookieParser   = require("cookie-parser");
var cookieSession  = require("cookie-session");
var passport       = require("passport");
var faceitStrategy = require("passport-faceit").Strategy;

var app = express();

app.set("views", "./views");
app.set("view engine", "ejs");

// Middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cookieSession({secret:"somesecrettokenhere"}));
app.use(passport.initialize());
app.use(express.static("./public"));

passport.use(new faceitStrategy({
    clientID: "098f6b-cd4621d-373cade-4e83262-7b4f6f",
    clientSecret: "4eb20288afaed97e82bde371260db8d8"
  },
  function(accessToken, refreshToken, params, profile, done) {
    const userData = jwt.decode(params.id_token);

    done(null, {
      faceitId: userData.guid,
      faceitAvatar: userData.picture,
      faceitEmail: userData.email,
      faceitNickname: userData.nickname
    });
  }
));

passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(user, done) {
    done(null, user);
});

app.get("/", function(req, res) {
    res.render("index");
});

app.get("/auth/faceit", passport.authenticate("faceit"));
app.get("/auth/faceit/callback", passport.authenticate("faceit", { failureRedirect: "/" }), function(req, res) {
    // Successful authentication, redirect home.
    res.redirect("/");
});

app.listen(3000);
```

## License

The MIT License (MIT)

Copyright (c) 2018-2020 Technoblazed

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
