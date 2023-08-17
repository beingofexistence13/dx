# passport-lastfm
[![Build Status](https://travis-ci.org/kizzlebot/passport-lastfm.svg?branch=master)](https://travis-ci.org/kizzlebot/passport-lastfm)  
Last.fm authentication strategy for Passport and Node.js.  Please contribute if you like!





## Installation
---------
`npm install passport-lastfm --save`

create a `api_key` and `secret` by [registering your app](http://www.last.fm/api/account/create)



## Usage
-----------

Set up passport strategies.  Be sure initialize with api_key and secret

```javascript
var LastFMStrategy = require('passport-lastfm')
var _ = require('lodash');
var cb_url = 'http://localhost:8000';

passport.use(new LastFmStrategy({
  'api_key': process.env.LASTFM_KEY,
  'secret': process.env.LASTFM_SECRET,
  'callbackURL': cb_url + '/auth/lastfm/callback'
}, function(req, sessionKey, done) {
  // Find/Update user's lastfm session

  // If user logged in
  if (req.user){
    User.findById(req.user.id, (err, user) => {
      if (err) return done(err);

      var creds = _.find(req.user.tokens, {type:'lastfm'});
      // if creds already present
      if (user.lastfm && creds){
        req.flash('info', {msg:'Account already linked'});
        return done(err, user, {msg:'Account already linked'})
      }

      else{
        user.tokens.push({type:'lastfm', username:sessionKey.username, key:sessionKey.key });
        user.lastfm = sessionKey.key;

        user.save(function(err){
          if (err) return done(err);
          req.flash('success', {msg:"Last.fm authentication success"});
          return done(err, user, sessionKey);
        });
      }
    });
  }
  else{
    return done(null, false, {message:'Must be logged in'});
  }
}));

```



In route handlers
```javascript
app.get('/auth/lastfm', passport.authenticate('lastfm'));
app.get('/auth/lastfm/callback', function(req, res, next){
  passport.authenticate('lastfm', {failureRedirect:'/'}, function(err, user, sesh){
    res.redirect('/');
  })(req, {} );
});

```




