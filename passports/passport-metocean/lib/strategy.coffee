###
Module dependencies.
###
uri = require 'url'
util = require 'util'
OAuth2Strategy = require 'passport-oauth2'

###
`Strategy` constructor.

The MetOcean authentication strategy authenticates requests by delegating to
MetOcean using the OAuth 2.0 protocol.

Applications must supply a `verify` callback which accepts an `accessToken`,
`refreshToken` and service-specific `profile`, and then calls the `done`
callback supplying a `user`, which should be set to `false` if the
credentials are not valid.  If an exception occured, `err` should be set.

Options:
- `clientID`      your MetOcean application's App ID
- `clientSecret`  your MetOcean application's App Secret
- `callbackURL`   URL to which MetOcean will redirect the user after granting authorization

Examples:

	passport.use(new MetOceanStrategy({
			clientID: '123-456-789',
			clientSecret: 'shhh-its-a-secret'
			callbackURL: 'https://www.example.net/auth/metocean/callback'
		},
		function(accessToken, refreshToken, profile, done) {
			User.findOrCreate(..., function (err, user) {
				done(err, user);
			});
		}
	));

@param {Object} options
@param {Function} verify
@api public
###
Strategy = (options, verify) ->
	options = options or {}
	host = options.host #TODO: default
	options.authorizationURL = options.authorizationURL or "#{host}/odo/auth/oauth2/authorize"
	options.tokenURL = options.tokenURL or "#{host}/odo/auth/oauth2/token"
	OAuth2Strategy.call this, options, verify
	@name = 'metocean'
	@_clientSecret = options.clientSecret
	@_profileURL = options.profileURL or "#{host}/odo/auth/oauth2/profile"
	

# Inherit from `OAuth2Strategy`
util.inherits Strategy, OAuth2Strategy

###
Retrieve user profile from MetOcean.

This function constructs a normalized profile, with the following properties:

- `provider`         always set to `metocean`
- `id`               the user's MetOcean ID
- `username`         the user's MetOcean username
- `displayName`      the user's full name

@param {String} accessToken
@param {Function} done
@api protected
###
Strategy::userProfile = (accessToken, done) ->
	url = uri.parse @_profileURL
	url = uri.format url
	
	@_oauth2.get url, accessToken, (err, body, res) ->
		return done err if err
			
		json = null
		try
			json = JSON.parse body
		catch ex
			return done(new Error('Failed to parse user profile'))
		
		profile = JSON.parse body
		profile.provider = 'metocean'
		profile._raw = body
		profile._json = json
		profile.accessToken = accessToken
		done null, profile

# Expose `Strategy`
module.exports = Strategy
