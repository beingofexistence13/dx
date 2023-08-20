# passport-trademe

[Trade Me](www.trademe.co.nz) authentication strategy for [Passport](http://passportjs.org/).

## Installation

### Installing passport-trademe
```
  [sudo] npm install passport-trademe
```

## Motivation
Fame, fortune ... free beer.  

## Usage

Very simple ...

``` js
	var passport = require( 'passport' )		
		, TrademeStrategy = require( 'passport-trademe' ).Strategy
		
	...
	
	var trademeKey = require( './keys/trademeKey' );
	passport.use(new TrademeStrategy( {
		consumerKey: trademeKey.consumerKey
		, consumerSecret: trademeKey.consumerSecret
		, callbackURL: app.get( 'site-url' ) + '/auth/trademe/callback'
	}
	, function( token, tokenSecret, profile, done ) {
	
		...
		
		}
	) );
	
	...
	
	app.configure( function() {
		app.use( passport.initialize() );
		app.use( passport.session() );
		app.use( app.router );
	} );
```

Define you "conversation" routes ...

```js
	app.get( '/auth/trademe'
		, passport.authenticate( 'trademe'
			, { 
				// Add the scope of your application here
				scope: [ 'MyTradeMeRead'
					, 'MyTradeMeWrite'
					, 'BiddingAndBuying' ] 
			} 
		)
		, function( req, res ) {
			// Nothing to do here. The "conversation" will end at the callback route.
		} );
	
	app.get( '/auth/trademe/callback' 
		, passport.authenticate( 'trademe' 
			, {
				failureRedirect: '/login'
			}
		)
		, function( req, res ) {
			res.redirect( '/' );
		} );
```

Use to protect something ...

```js
	function ensureAuthenicated = function( req, res, next ) {
		if ( req.isAuthenticated() ) { 
			return next(); 
		}
		res.redirect( '/login' )
	}
	
	...
	
	app.get( '/someProtectedResource'
		, ensureAuthenticated
		, function ( req, res ) {
			res.redirect( '/' );
		} );
```

#### Author: [Dupes](http://dupesnduds.com)
