# passport-raven

<img src="http://i.imgur.com/EtxtRb0.png" align="right"/>

Raven (University of Cambridge) authentication module for passport.

This allows you to authenticate students of the University of Cambridge.

It works for both current and past students and staff.

## Installation

```
npm install passport passport-raven
```

## Example

See `test/server.js`

## Usage

### Configure Strategy

```js
var RavenStrategy = require('passport-raven');

passport.use(new RavenStrategy({
  desc: 'My Raven Application',
  msg: 'we need to check you are a current student',
  // use demonstration raven server in development
  debug: process.env.NODE_ENV !== 'production'
}, function (crsid, params, callback) {
  // You can skip this check if you want to support ex students and staff as well
  if (params.isCurrent) {
    callback(null, {id: crsid});
  } else {
    callback(new Error('My Raven application is only for current students and staff'));
  }
}));
```

**Options:**

 - `desc` (String) - a description of the website to be displayed on the raven login page
 - `msg` (String) - a description of why authentication is being requested
 - `iact` (Boolean) - Set to `true` to force users to type their username and password even if they are already logged in. Set to `false` to only login if it can be done without user interaction.  Defaults to `null`.
 - `audience` (String) - a fully qualified domain name of the authentication requesting website.
 - `passReqToCallback` (Boolean) - If set the request object is provided as the first argument to the verify function. The verify callback can therefore use the state of the request to tailer further handling.


```js

passport.use(new RavenStrategy({
  desc: 'My Raven Application',
  msg: 'we need to check you are a current student',
  // use demonstration raven server in development
  debug: process.env.NODE_ENV !== 'production',
  passReqToCallback : true
}, function (req, crsid, params, callback) {
  // this function could be defined elsewhere eg in a Sails app services protocol
     ....
  }
});
`

```

**Params:**

Params include all the info returned from the server, here are two examples:

Current Students/Staff:

```
{ ver: '3',
  status: '200',
  msg: '',
  issue: '20141007T144208Z',
  id: '1412692928-14998-17',
  url: 'http://localhost:3000/login',
  principal: 'test0001',
  ptags: 'current',
  auth: 'pwd',
  sso: '',
  life: '36000',
  params: '',
  kid: '901',
  sig: 'qEK1GusOfnfh6D8BkmTi2iIsEXLmrfOd2TMEXStedOgaDXF7BQnN1nQvD8mudXhLO-rDLhp3JetrAded1XNeNaJPwdU5ZNIf5bJrvln2iqwbY280B4nGusvcOQjDoD1UJQ-J3hEpTDe7miDzGwSB-7zvdkpzt56qPgmUIIYHWs4_',
  isCurrent: true }
```


Past Students/Staff:

```
{ ver: '3',
  status: '200',
  msg: '',
  issue: '20141007T144128Z',
  id: '1412692886-14816-35',
  url: 'http://localhost:3000/login',
  principal: 'test0450',
  ptags: '',
  auth: '',
  sso: 'pwd',
  life: '35960',
  params: '',
  kid: '901',
  sig: 'otTWl-KZbXbRUMLjwpkoiT.nu8J7GnoHu6V8JzXjAu.XPGBBxRAJXEzCEQfc05jcoFmGWdHWPLjmJgNgom2vnltCu-CZOlAd9105v-k.9.dZQJAc65ugIlHDvPPT2icXiT1zo9.wzkCA.5vwLeUrhA8oKAa-6cuxbbzkwH-.Cc8_',
  isCurrent: false }
```

### Authenticate Requests

```js
app.get('/auth/raven', passport.authenticate('raven'), function(req, res) {
  // Successful authentication, redirect home.
  res.redirect('/');
});
```

## License

MIT
