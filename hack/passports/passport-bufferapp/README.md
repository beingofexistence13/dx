# Passport-BufferApp

Passport strategy for authenticating with BufferApp using the OAuth 2.0 API.

This module lets you authenticate using BufferApp in your Node.js applications. By plugging into Passport, BufferApp authentication can be easily and unobtrusively integrated into any application or framework that supports Connect-style middleware, including Express.

## Installation

	$ npm install passport-bufferapp

## Usage

### Configure Strategy

In order to identify your application to BufferApp, specify the client id, cmoe,t secret, and callback URL within options. 
You can get and specify this options @ http://bufferapp.com/developers/apps/create


	var passport = require('passport')
	  , BufferAppStrategy = require('passport-bufferapp').Strategy;
	
	passport.use(new BufferAppStrategy({
	    clientID: BUFFERAPP_CLIENT_ID,
	    clientSecret: BUFFERAPP_CLIENT_SECRET,
	    callbackURL:BUFFERAPP_REDIRECT_URI
	  },
	  function(accessToken, refreshToken, profile, done) {
	    
	    return done();
	  }
	));


#### Authenticate Requests

Use passport.authenticate(), specifying the 'bufferapp' strategy, to authenticate requests.

For example, as route middleware in an Express application:

	app.get('/auth/bufferapp', passport.authenticate('bufferapp'));
	
	app.get('/auth/bufferapp/callback', 
	  passport.authenticate('bufferapp', { failureRedirect: '/login' }),
	  function(req, res) {
	    // Successful authentication, redirect home.
	    res.redirect('/');
	});

## Credits
Sébastien De Bollivier

## License

(The MIT License)

Copyright (c) 2012 Sébastien De Bollivier

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.