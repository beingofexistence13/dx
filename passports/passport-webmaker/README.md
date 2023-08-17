# :rocket: passport-webmaker

[Passport](http://passportjs.org/) strategy for authenticating with [Webmaker](https://webmaker.org/) using the OAuth 2.0 API.

This module lets you authenticate using Webmaker in your Node.js applications.
By plugging into Passport, Webmaker authentication can be easily and
unobtrusively integrated into any application or framework that supports
[Connect](http://www.senchalabs.org/connect/)-style middleware, including
[Express](http://expressjs.com/).

## Install

```$ npm install passport-webmaker```

## Usage

#### Create an Application

Before using `passport-webmaker`, you must register your application and generate appropriate credentials.

If you want to register your application with Mozilla's production/staging instances of id.webmaker.org then send an email to
`devops@mozillafoundation.org` with the information detailed and outlined [here](https://github.com/mozilla/id.webmaker.org/blob/master/docs/oauth.md#registering-your-application).
Note that registration requests can be denied at any time, for any reason and that these requests are typically not granted to applications
outside the relevant scope of Mozilla's products and services.

Alternatively, if you are running your own instance of id.webmaker.org you can generate these tokens yourself, although this process is currently
not documented and outside the scope of this project. Upon registration by either method your application will be issued a `clientID` and `clientSecret`
which will need to be provided to the strategy as explained below. You will also need to configure a redirect URI that matches the route in your application.

#### Configure Strategy

The Webmaker authentication strategy authenticates users using a Webmaker account and OAuth 2.0 tokens.
The client ID and secret obtained when creating an application are supplied as options when creating the strategy.
The strategy also requires a `verify` callback, which receives the access token and optional refresh token,
as well as `profile` which contains the authenticated user's Webmaker profile. The `verify` callback must call `done`
providing a user to complete authentication.

```js
passport.use(new WebmakerStrategy({
    clientID: WEBMAKER_CLIENT_ID,
    clientSecret: WEBMAKER_CLIENT_SECRET,
    state: true
  },
  function(accessToken, refreshToken, profile, done) {
    User.findOrCreate({ id: profile.id }, function (err, user) {
      return done(err, user);
    });
  }
 ));
 ```

#### Authenticate Requests

 Use `passport.authenticate()`, specifying the `'webmaker'` strategy, to authenticate requests.

 For example, as route middleware in an [Express](https://expressjs.com/) application:

 ```js
 app.get('/auth/webmaker', passport.authenticate('webmaker'));

 app.get('/auth/webmaker/callback',
     passport.authenticate('webmaker', { failureRedirect: '/login', successfulRedirect: '/'}));
```

## FAQ

These are some answers to the most frequently asked questions, if you have additional questions feel free
to submit an issue ticket and tag whomever is the current project maintainer as well.

##### How do you ask for additional permissions/information?

You can request additional permissions by appending parameters to the `scopes` option in `passport.authenticate()`.

```js
app.get('/auth/webmaker',
  passport.authenticate('webmaker', { scopes: ['user', 'email'] }));
```

**Note:** Your parameter must be called `scopes` (plural) and not `scope` (singular), otherwise this will throw an error.

##### What is the structure of the user information returned?

We follow the standard convention for normalizing profiles as detailed by [passport.js](http://passportjs.org/docs/profile).

```json
{
  "provider":"webmaker",
  "id":1022,
  "displayName":"ryan",
  "locale":"en-US",
  "emails":[
    {
      "value":"hello@myemail.com"
    }
  ],
  "photos":[
    {
      "value":"https://example.com/ryan/webmaker-avatar-200x200.png"
    }
  ]
}
```

##### How can you change what instance of id.webmaker.org is being used?

By default all authentication will go through `https://id.webmaker.org` however, it's also possible to point
passport-webmaker at your own instance of `id.webmaker.org`. This is especially helpful if maybe you want to
debug on a developmental/staging server, like we do here at Mozilla on a regular basis.

Below we append three parameters to the options object to be used when creating the strategy. They are:
`authorizationURL`, `tokenURL` and `profileURL`. Changing these three URLs is all you need to change your `id` instance.

```js
passport.use(new WebmakerStrategy({
    clientID: WEBMAKER_CLIENT_ID,
    clientSecret: WEBMAKER_CLIENT_SECRET,
    state: true,
    authorizationURL: "https://id.mofostaging.net/login/oauth/authorize",
    tokenURL: "https://id.mofostaging.net/login/oauth/access_token",
    profileURL: "https://id.mofostaging.net/user"
  },
  function(accessToken, refreshToken, profile, done) {
    User.findOrCreate({ id: profile.id }, function (err, user) {
      return done(err, user);
    });
  }
 ));
 ```

##### How can I change the login flow used by `passport-webmaker`?

You can tell `passport-webmaker` to use the `signup` flow vs. the `signin` flow by assigning the string value to the optional `action` parameter when calling `passport.authenticate()`. The default is `signin`.

```js
app.get('/auth/webmaker',
  passport.authenticate('webmaker', { scopes: ['user', 'email'], action: "signup" }));
```

##### What is "Error: OAuth 2.0 authentication requires session support when using state."?

`passport-webmaker` requires persistent login session support in order to be used properly. It is a requirement
of using passport.js's internal implementation of `state` which is a randomly generated string used to prevent
CSRF-like attacks and other man-in-the-middle intrusions. Often times errors like these occur when your web app
doesn't support sessions, or they aren't being configured properly with passport.js.

Check out the passport.js documentation for information on [configuring login sessions](http://passportjs.org/docs/configure).

##### Misc. potential errors and their causes

**Error:** "{"statusCode":400,"error":"Bad Request","message":"child \"state\" fails because [\"state\" is required]","validation":{"source":"query","keys":["state"]}}"

**Cause:** You have either forgotten to set the `state` parameter when initializing your strategy, or have disabled it by setting it to `false`.

**Error:** The `refreshToken` parameter is undefined.

**Cause:** This is perfectly normal, `id` doesn't support this type of request. It's just a place holder.

## Credits

 - [Jared Hanson](https://github.com/jaredhanson) for his incredible work on passport.js, great documentation and more.
    - Some code snippets and documentation layout were also heavily inspired by his work on his own passport modules!
 - **MoFo DevOps** for providing guidance and technical support where necessary, as well as insight on the OAuth flow.
