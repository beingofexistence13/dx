# passport-abakus

[![Build Status](https://travis-ci.org/webkom/passport-abakus.svg)](https://travis-ci.org/webkom/passport-abakus)
[![Coverage Status](https://coveralls.io/repos/webkom/passport-abakus/badge.png)](https://coveralls.io/r/webkom/passport-abakus)

```bash
npm install passport-abakus
```

passport-abakus is a passport strategy that can be used to to authenticate users
against the API of abakus.no. If you would like to use it you need a API token.
Contact webkom@abakus.no to request one.

## Usage
This module is based on passport-local. The setup should be
fairly the same except it is not necessary to write the strategy.

```javascript
var passport = require("passport");
var abakusStrategy = require("passport-abakus");

passport.use(abakusStrategy());

app.use(passport.initialize());
```

In addition to add the strategy in your app. You must make sure that the
API token is stored in a environment variable called `ABAKUS_TOKEN`

### Options
`abakusStrategy` takes options as an object. The different options are listed
below.

* `requireAbakom` (default: *false*) - if set to *true* any user that is not a
member of abakom will not be able to log in.

## Contribute
Open an issue or a pull-request with your fix or awesome new feature.
Make sure to check those that are already open, to avoid duplicates.

--------
MIT © webkom, Abakus Linjeforening
