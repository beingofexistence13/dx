[![DeepScan grade](https://deepscan.io/api/projects/2829/branches/20466/badge/grade.svg)](https://deepscan.io/dashboard#view=project&pid=2829&bid=20466)

Passport strategy for authenticating with PingFederate using the [OpenToken API](https://github.com/darrenderidder/node-opentoken).

This is a work in progress, but usable.

Install
-------
`npm install passport-opentoken`

Usage
-----

Create a login redirect to your PingFederate / OpenToken server,
with a URL containing `PartnerSpId` and `TargetResource` parameters,
a login callback route and a logout route.


```javascript
app.get('/login/opentoken', function (req, res) {
  res.redirect("https://localhost:9031/idp/startSSO.ping" +
    "?PartnerSpId=PF-DEMO" +
    "&TargetResource=https://localhost:3000/login/opentoken/callback");
});

app.get('/login/opentoken/callback', passport.authenticate('opentoken'), function (req, res) {
  res.redirect('/dashboard.html'); // or whatever your landing page is
});

app.all('/logout/opentoken', function (req, res) {
  req.session.destroy();
  res.redirect('https://localhost:9031/quickstart-app-idp/go?action=logout');
});
```

Configuration
-------------

Before the above will work, you need to configure passport to use
the opentoken strategy. Create a [verify callback](http://passportjs.org/guide/configure/)
and instantiate an `OpenTokenStrategy` object for `passport` to use.

```js
function verifyCallback(username, done) {
  // see http://passportjs.org/guide/configure/ for an example
  // of a verify callback.
});

var otkOptions = {
  tokenName: 'mytoken',
  password: 'blahblah',
  cipherSuite: 2
};

passport.use(new OpenTokenStrategy(otkOptions, verifyCallback));
```

If using sessions, you'll need `passport.serializeUser` and `passport.deserializeUser` functions as per the passport [documentation](http://passportjs.org/guide/configure/).

CipherSuites are defined in the [node-opentoken](https://github.com/darrenderidder/node-opentoken/blob/master/lib/ciphersuites.js) module:

```
0 = no encryption
1 = aes-256-cbc
2 = aes-128-cbc
3 = 3des
```
