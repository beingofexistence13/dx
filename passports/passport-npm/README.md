# passport-npm

Passport strategy for authenticating an `npm` client.

## usage

```js
const { NPMStrategy, NPMStrategyErrorHandler } = require('passport-npm');
// check the login of a user and create a user object
// set user to `false` if login is invalid
function authenticate({
  req, // HTTP.IncomingMessage
  name, // string
  password // string
}, done) {
  done(null, /* User on success || false on failure */);
}
// creates a string for `npm` to store in user .npmrc
// send a falsey string to not use tokens (not recommended)
//
// use this to prevent `npm` from storing username and password on disk
// commonly used to store an access token
function serializeNPMToken({
  req, // HTTP.IncomingMessage
  name, // string
  password // string
}, done) {
  done(null, /* non-falsey token string || false to store username and password instead */)
}
// similar to `authenticate`
//
// consumes the result token string serializeToken
function deserializeNPMToken({
  req, // HTTP.IncomingMessage
  token // string
}, done) {
  done(null, /* User on success || false on failure */);
}

passport.use(new NPMStrategy({
  // router needs to support router.put(...middleware)
  // registers PUT: /-/user/org.couchdb.user:*
  router, // optional
  authenticate,
  serializeNPMToken,
  deserializeNPMToken
}));
router.get('/privileged',
  passport.initialize(),
  passport.authenticate('npm', {
    // npm client doesn't have compatible sessions with PassportJS
    // - does not use a cookie
    // - uses bearer tokens and basic auth via HTTP authorization header
    session: false,
    // npm client doesn't have compatible response parsing with PassportJS
    // error.status will be the expected status code of the error
    // NOTE: `npm` does not like status codes that are not:
    //   200, 201, 400, 401, 403, or 500
    failWithError: true
  }),
  // function to convert responses so npm client understands them
  NPMStrategyErrorHandler
  ...
);
```

## Recommended npm configuration

In your project repositories wishing to connect to the `npm` authenticated server place a local `$PROJECT/.npmrc` file with:

```ini
registry=http://path.to.server.local:1337/
always-auth=true
```

Then run `npm login` to put your authentication information in your user configuration at `~/.npmrc`.

This will keep your login information outside of your project.

## Why `[de]serializeNPMToken` an not `passport.[de]serializeUser`?

`npm` uses the `authorization:` HTTP header and bearer tokens instead of Cookies. Passport only supports cookie based sessions normally. They are not named `[de]serializeUser` to avoid confusion with passport based sessions.

## Why `router`?

This is required so that users can use `npm login` against your router. It is optional, but recommended if you support basic auth.

## Why `NPMStrategyErrorHandler`?

`npm` expects a JSON response for failed logins, Passport sends back plaintext. This middleware will correct errors to a format `npm` understands and stop propagating the error. It expects `error.status` be the expected status code and `error.message` to be a message (Note: the `npm` cli often ignores custom messages).

## Don't want to support tokens for npm?

Not recommended, but:

1. mandate `always-auth=true` for your `npm` configuration
2. ensure your `~/.npmrc` has login (`_auth` and `email`) information entered in it properly.
3. create a `deserializeToken` method that always generates an falsey user
4. you *must* still have `serializeToken` successfully generate a falsey token (it will be thrown away after authentication)

## Don't want to support basic auth for npm?

1. Manually add your `_authToken` to your `.npmrc` file with syntax like:

  ```ini
  //my.registry.invalid/:_authToken="string to pass to deserializeToken"
  ```

2. create a `authenticate` method that always generates a falsey user.
3. create a `serializeToken` method that always generates an Error.

## Local testing

```sh
# startup
PORT=8080 node example.js
```

```sh
npm login --registry=http://localhost:8080/
# username = user
# password = pass
# email = # ignored
npm --registry=http://localhost:8080/ install passport-npm
```

## `npm` doesn't always show the error messages I send

Correct, this is a feature of the `npm` client and not related to `passport-npm`.

## `npm` is always sending basic auth

This is most likely caused by your `~/.npmrc` user config having authentication information in it. Try `npm logout` then `npm login`.

## Does this work with `yarn`?

Currently, we cannot reliably setup configuration for `yarn` due lacking options that match the `npm` client to perform integration tests. It does appear to work though at least naively.
