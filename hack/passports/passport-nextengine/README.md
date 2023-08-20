# passport-nextengine

Nextengine authentication strategy for Passport and Node.js.

## Install

    $ npm install passport-nextengine

## Usage

### Create nextengine application

At first, you must create new application.  

1. Login [nextengine](https://base.next-engine.org)
1. Click `アプリを作る`
1. Input required information and callback uri in test environment
1. Copy `クライアントID`(client id) and `クライアントシークレット`(client secret)

### Register strategy

```js
const NextengineStrategy = require('passport-nextengine').Strategy
passport.use(new NextengineStrategy({
  clientId: 'YOUR_CLIENT_ID',
  clientSecret: 'YOUR_CLIENT_SECRET',
  // redirectUri: 'YOUR_REDIRECT_URI'
}, (user, done) => {
  done(null, user)
}))
```

### Authenticate

```js
app
  // POST /auth/nextengine
  .use(route.post('/auth/nextengine',
    passport.authenticate('nextengine')
  ))
  // GET /auth/nextengine/callback
  .use(route.get('/auth/nextengine/callback',
    passport.authenticate('nextengine', {
      failureRedirect: '/',
      successRedirect: '/dashboard'
    })
  ))
```

For more details, please see [Example application](https://github.com/Leko/passport-nextengine/blob/master/examples/README.md) .

## License

[The MIT License](http://opensource.org/licenses/MIT)
