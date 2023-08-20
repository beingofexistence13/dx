# passport-andyet

This is a passport strategy for andyet's auth

## Install

```
npm install passport-andyet
```

## Usage

```js
var AndyetStrategy = require('passport-andyet').Strategy;

Passport.use(new AndyetStrategy({
    clientId: YOUR_CLIENT_ID,
    clientSecret: YOUR_CLIENT_SECRET,
    apps: 'https://apps.andyet.com', // this is the default, but can be overridden
    api: 'https://api.andbang.com' // again, this is the default
}, function (accessToken, refreshToken, profile, done) {
    // profile is the json object representing the user as fetched from the /me route of the api
    // you can use that data to look up a local user, or whatever else you need to do here
    // when you're finished call done with an error parameter first (if there was an error) and
    // the user object second
    done(null, profile);
});
```
