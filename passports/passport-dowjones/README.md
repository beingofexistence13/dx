# Authentication

## Getting Application credentials

You will need to reach out to DowJones to get your clientID, clientSecret and establish
your callback URL.  Once you have set these values, you can get to them by going
to your Dow Jones Client Settings.

## Installation

	npm install passport-dowjones
	npm install express

For other related passport functionality, such as session management, please see the [passport.js](http://passportjs.org/) site.  This
example relies on the express-session npm package, but other session managers could be used in its place.

## Configuration

Take your credentials from the Dow Jones Client Settings section described above and initialize the strategy as follows:

```js
var DowJonesStrategy = require('passport-dowjones'),
    passport = require('passport');

var strategy = new DowJonesStrategy({
   clientID:     'your-client-id',
   clientSecret: 'your-client-secret',
   callbackURL:  '/callback'
  },
  function(accessToken, refreshToken, extraParams, profile, done) {
    // accessToken is the token to call oAuth API (not needed in the most cases)
    // extraParams.id_token has the JSON Web Token
    // profile has all the information from the user

	// next we'll grab the api token and store it as part of the session
	this.getDelegationToken(extraParams, 'pib'), function(err, apiToken) {
	  if(err !== undefined) {
	    return done(err);
	  }
	  // store the apiToken in session
	  session.id_token = apiToken.id_token;

	  return done(null, profile);
	});
  }
);

passport.use(strategy);
```

## Usage

For this application, we support login and the callback interface.  Passport supports other mechanisms to for remaining endpoints,
but we will focus on login here.

First, create the login endpoint that

```js
app.get('/login',
  passport.authenticate('dowjones', {connection: 'dj-oauth'}));
```

Next, we'll create the callback interface that gets invoked after login completes.  Note that we get an
API token by calling delegate passing the references

```js
app.get('/callback',
  passport.authenticate('dowjones', { failureRedirect: '/login' }),
  function(req, res) {
    if (!req.user) {
      throw new Error('user null');
    }

    res.redirect("/");
  }
);
```

```js
app.get('/logout',
	strategy.logout(session.id_token));
```

## Alternate:  Authenticating using OpenID/oAuth Requests

The DowJones Authentication API is built on OpenID and oAuth.  Compatible libraries can be used to perform authentication.  The
call sequence for authentication is as follows:

![DowJones Authentication Sequence Diagram](http://www.websequencediagrams.com/files/render?link=r_EJ10NaljsGPxFk033c)


### Authorize:  This call must honor 302 redirects per the openid spec.

```js
https://sso.accounts.dowjones.com/authorize?connection=dj-piboauthv2
    &response_type=code
    &redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fcallback
    &scope=openid%20given_name%20family_name
    &client_id=08vQuQyNrLR7ypS4irMbiE33LPLev37V
		&connection=dj-oauth
```

### Callback with the Authorization Code

Your callback handler receives a 'code' query parameter.  You submit this for the access token and id token.

```js
POST https://sso.accounts.dowjones.com/oauth/token
Content-type: application/json
{ client_id=CLIENT_ID,
  redirect_uri=REDIRECT_URI,
  client_secret=CLIENT_SECRET,
  code=AUTHORIZATION_CODE,
  grant_type=authorization_code
}
```

### Exchange ID Token for the AuthToken

```js
var result = JSON.parse(body);

POST https://sso.accounts.dowjones.com/delegation
Content-type: application/json
{ grant_type:'urn:ietf:params:oauth:grant-type:jwt-bearer',
  client_id: this.options.clientID,
  api_type: 'app',
  id_token: id_token,
  scope: 'openid pib'
}
```

### Logout With the AuthToken

```js

https://sso.accounts.dowjones.com/logout?token=session.id_token
		&returnTo=http%3A%2F%2Flocalhost%3A3000%2FloggedOut

```

### Grab the resulting token to submit to the API calls.

At this point, you can submit the API token to DowJones APIs.

## Complete example

A complete example of using this library [here](http://github.com/dowjones/passport-dowjones-sample).

## Integration Test

Run `mocha ./test/integration/`

NOTE: the tests require you to set the following environment variables before running:  
export TEST_USER_PASSWORD=yourtestuserpassword  
export TEST_USER_EMAIL=yourtestuseremail  
export CLIENT_ID=yourclientid  
export CLIENT_SECRET=yourclientsecret  


## Documentation

For more information about [DowJones](http://dowjones.com) see our documentation page.

## Author

[Dow Jones](http://dowjones.com)

## License

This project is licensed under the MIT license. See the [LICENSE](https://github.com/dowjones/passport-dowjones/blob/master/LICENSE) file for more info.
