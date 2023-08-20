
#passport-stocktwits

```bash
$ npm install passport-stocktwits
```

```js
var passport = require('passport'),
    StockTwitsStrategy = require('passport-stocktwits').Strategy;

passport.use(new StockTwitsStrategy({
        clientID: '___',
        clientSecret: '___',
        callbackURL: 'http://localhost:3000/connect/stocktwits/callback',
        passReqToCallback: true
    }, function (req, token, secret, profile, done) {
        console.log(token);
        console.log(profile);
        done();
    }
));

app.get('/connect/stocktwits', passport.authorize('stocktwits',
    {scope: ['read','watch_lists','publish_messages','publish_watch_lists',
    'follow_users','follow_stocks'], failureRedirect:'/', successRedirect:'/'}));

app.get('/connect/stocktwits/callback', passport.authorize('stocktwits',
    {failureRedirect:'/', successRedirect:'/'}));

```
