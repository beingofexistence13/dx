# Passport-Geeklist

Passport strategy for authenticating with Geeklist using the OAuth 1.0 API.

This module lets you authenticate using Geeklist in your Node.js applications. By plugging into Passport, Geeklist authentication can be easily and unobtrusively integrated into any application or framework that supports Connect-style middleware, including Express.

## Installation

	$ npm install passport-geeklist

## Usage

### Configure Strategy

In order to identify your application to geeklist, specify the consumer key, consumer secret, and callback URL within options. 
You can get and specify this options @ http://hackers.geekli.st/


	var passport = require('passport')
	, GeeklistStrategy = require('passport-geeklist').Strategy;
	
	passport.use(new GeeklistStrategy({
	    consumerKey: GEEKLIST_CONSUMER_KEY,
	    consumerSecret: GEEKLIST_CONSUMER_SECRET,
	    callbackURL: GEEKLIST_CALLBACK_URL
	  },
	  function(token, tokenSecret, profile, done) {
	    
	    done();
	  }
	));


#### Authenticate Requests

Use passport.authenticate(), specifying the 'geeklist' strategy, to authenticate requests.

For example, as route middleware in an Express application:

	app.get('/auth/geeklist', passport.authenticate('geeklist'));
	
	app.get('/auth/geeklist/callback', 
	  passport.authenticate('geeklist', { failureRedirect: '/login' }),
	  function(req, res) {
	    // Successful authentication, redirect home.
	    res.redirect('/');
	});
	
**Don't forget to activate session support (if you use express)**

	app.use(express.cookieParser()); 
    app.use(express.session({ secret: 'keyboard cat' }));

## Credits
Sébastien De Bollivier

## License

(The MIT License)

Copyright (c) 2012 Sébastien De Bollivier

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.