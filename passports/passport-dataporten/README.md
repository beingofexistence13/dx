# Passport Strategy for Dataporten

[Passport](https://github.com/jaredhanson/passport) strategy for authenticating with [Dataporten](http://dataporten.no) using the OAuth 2.0 API.

## Install

```
npm install passport-dataporten --save
```




## Usage


Use the helper Setup class for simple and flexible passportjs setup:

```
var Dataporten = require('passport-dataporten');
var app = express();

var config = {
	"clientID": "10ad9f43-1ba3-4cb2-a459-1f9b3af25ac1",
	"clientSecret": "4175677a-06f8-4cc3-8224-2f858d18b610",
  "sessionkey": "d6096809-4d65-4931-b7d3-97637fc70e88",
	"callbackURL": "http://localhost:8080/auth/dataporten/callback",
};
var dataportenSetup = new Dataporten.Setup(config);

app.use(dpsetup.passport.initialize());
app.use(dpsetup.passport.session());

dpsetup.setupAuthenticate(app, '/login');
dpsetup.setupLogout(app, '/logout');
dpsetup.setupCallback(app);
```

Use `Dataporten.Authz` for authorization:

```
var authzConfig = {"redirectOnNoAccess": "/login"};
var dataportenAuthorizationMiddleware = (new Dataporten.Authz(authzConfig))
	.allowUsers(['eeb5bad8-c466-4393-91cc-6fb61807e4dd'])
	.allowGroups(['fc:adhoc:892fe78e-14cd-43b1-abf8-b453a2c7758d'])
	.middleware();
app.use('/', dataportenAuthorizationMiddleware);
```

## Thanks

- [Jørn Åne](http://github.com/jornane)
- [Jared Hanson](http://github.com/jaredhanson)
- [Andreas Åkre Solberg](http://github.com/andreassolberg)

## License

[The ISC License](http://opensource.org/licenses/ISC)

Copyright &copy; 2015-2017 [UNINETT AS](http://github.com/uninett)
