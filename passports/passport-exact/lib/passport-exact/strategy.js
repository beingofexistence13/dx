/**
 * Module dependencies.
 */
var util = require('util') 
  ,xml2js = require('xml2js').parseString
  ,OAuth2Strategy = require('passport-oauth').OAuth2Strategy
  ,InternalOAuthError = require('passport-oauth').InternalOAuthError;


/**
 * `Strategy` constructor.
 *
 * The Exact authentication strategy authenticates requests by delegating to
 * Exact using the OAuth 2.0 protocol.
 *
 * Applications must supply a `verify` callback which accepts an `accessToken`,
 * `refreshToken` and service-specific `profile`, and then calls the `done`
 * callback supplying a `user`, which should be set to `false` if the
 * credentials are not valid.  If an exception occured, `err` should be set.
 *
 * Options:
 *   - `clientID`    your exact application's client id
 *   - `clientSecret` your exact application's client secret
 *   - `baseUrl`  the base Url for the Exact servers. If not specified: https://start.exactonline.nl
 *   - `callbackURL`    URL to which uber will redirect the user after granting authorization
 *
 * Examples:
 *
 *     passport.use(new uberStrategy({
 *         clientID: '123-456-789',
 *         clientSecret: 'shhh-its-a-secret'
           baseUrl: 'https://start.exactonline.nl'
 *         callbackURL: 'https://www.example.net/auth/exact/callback'
 *       },
 *       function(accessToken, refreshToken, profile, done) {
 *         User.findOrCreate(..., function (err, user) {
 *           done(err, user);
 *         });
 *       }
 *     ));
 *
 * @param {Object} options
 * @param {Function} verify
 * @api public
 */
function Strategy(options, verify) {
  options = options || {};
  options.baseUrl = options.baseUrl || 'https://start.exactonline.nl';
  options.authorizationURL = options.baseUrl + '/api/oauth2/auth';
  options.tokenURL = options.baseUrl + '/api/oauth2/token';
  
  OAuth2Strategy.call(this, options, verify);
  this.name = 'exact';
  this.baseUrl = options.baseUrl;
}

/**
 * Inherit from `OAuth2Strategy`.
 */
util.inherits(Strategy, OAuth2Strategy);

/**
 * Retrieve user profile from Exact.
 *
 * This function constructs a normalized profile, with the following properties:
 *
 *   - `provider`         always set to `exact`
 *   - `id`
 *   - `displayName`      FirstName + " " + LastName
 *
 * @param {String} accessToken
 * @param {Function} done
 * @api protected
 */
Strategy.prototype.userProfile = function(accessToken, done) {

  this._oauth2._request('GET', this.baseUrl + '/api/v1/current/Me', 
                        {Authorization: "Bearer " + accessToken },
                        null, 
                        accessToken, 
                        function (err, body, res) {
    if (err) { return done(new InternalOAuthError('failed to fetch user profile', err)); }
    
    try {

      xml2js(body, { attrkey: 'A' }, function (e, json) {

        if(e) return done(e);
        
        var profile = { provider: 'exact' };
        var properties = json.feed.entry[0].content[0]['m:properties'][0];

        profile.id = properties['d:UserID'][0]['_'];
        profile.displayName = properties['d:FullName'][0];
        profile.firstName = properties['d:FirstName'][0];
        profile.middleName = properties['d:MiddleName'][0];
        profile.lastName = properties['d:LastName'][0];
        profile.currentDivision = properties['d:CurrentDivision'][0]['_'];
        profile.picture = properties['d:PictureUrl'][0];
        profile.userName = properties['d:UserName'][0];
        profile.languageCode = properties['d:LanguageCode'][0];
        profile.email = properties['d:Email'][0];
        profile.title = properties['d:Title'][0];
        profile.gender = properties['d:Gender'][0];
        profile.language = properties['d:Language'][0];
        
        profile._json = json;
        profile._xml = body;

        done(null, profile);
      });

    } catch(e) {
      done(e);
    }
  });
}


/**
 * Expose `Strategy`.
 */
module.exports = Strategy;
