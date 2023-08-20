passport-youtube-v3
===================

Youtube API v3 strategy for passport

## Install

    $ npm install passport-youtube-v3

## Usage

#### Configure Strategy

The Youtube authentication strategy authenticates users using a youtube
account and OAuth 2.0 tokens.  The strategy requires a `verify` callback, which
accepts these credentials and calls `done` providing a user, as well as
`options` specifying a app ID, app secret, and callback URL.

See [this doc](https://developers.google.com/youtube/v3/guides/authentication) for information about youtube scopes.

```javascript

var YoutubeV3Strategy = require('passport-youtube-v3').Strategy


passport.use(new YoutubeV3Strategy({
    clientID: YOUTUBE_APP_ID,
    clientSecret: YOUTUBE_APP_SECRET,
    callbackURL: "http://localhost:3000/auth/youtube/callback",
    scope: ['https://www.googleapis.com/auth/youtube.readonly']
  },
  function(accessToken, refreshToken, profile, done) {
    User.findOrCreate({ userId: profile.id }, function (err, user) {
      return done(err, user);
    });
  }
));
```
