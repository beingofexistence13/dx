/**
 * Module dependencies.
 */
var util = require('util'),
    oauth2 = require('passport-oauth2'),
    OAuth2Strategy = oauth2.Strategy,
    InternalOAuthError = oauth2.InternalOAuthError;


/**
 * `Strategy` constructor.
 *
 * The Proz.com authentication strategy authenticates requests by delegating to
 * Proz.com using the OAuth 2.0 protocol.
 *
 * Applications must supply a `verify` callback which accepts an `accessToken`,
 * `refreshToken` and service-specific `profile`, and then calls the `done`
 * callback supplying a `user`, which should be set to `false` if the
 * credentials are not valid.  If an exception occured, `err` should be set.
 *
 * Options:
 *   - `clientID`      your Proz.com application's api key
 *   - `clientSecret`  your Proz.com application's api secret
 *   - `callbackURL`   URL to which Proz.com will redirect the user after granting authorization
 *
 * Examples:
 *
 *     passport.use(new ProzStrategy({
 *         clientID: '123-456-789',
 *         clientSecret: 'shhh-its-a-secret'
 *         callbackURL: 'http://127.0.0.1:8080/auth/callback'
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
    options.authorizationURL = options.authorizationURL || 'https://www.proz.com/oauth/authorize/';
    options.tokenURL = options.tokenURL || 'https://www.proz.com/oauth/token/';
    options.scopeSeparator = options.scopeSeparator || ',';
    options.sessionKey = options.sessionKey || 'oauth:proz.com';

    OAuth2Strategy.call(this, options, verify);
    this.name = 'proz';
    this._clientID = options.clientID;
    this._clientSecret = options.clientSecret;
}

/**
 * Inherit from `OAuth2Strategy`.
 */
util.inherits(Strategy, OAuth2Strategy);

/**
 * Retrieve user profile from Proz.com.
 *
 * This function constructs a normalized profile, with the following properties:
 *
 *   - `provider`         always set to `Proz.com`
 *   - `id`
 *   - `username`
 *   - `displayName`
 *
 * @param {String} accessToken
 * @param {Function} done
 * @api protected
 */
Strategy.prototype.userProfile = function(accessToken, done) {
    //is this the url?
    var url = 'https://api.proz.com/v2/user?'
        //+ 'api_secret=' + encodeURIComponent(this._clientSecret) +
        // '&api_key=' + encodeURIComponent(this._clientID);

    this._oauth2.get(url, accessToken, function(err, body, res) {
        if (err) { return done(new InternalOAuthError('failed to fetch user profile', err)); }

        try {
            var json = JSON.parse(body);

            var profile = { provider: 'prozpassport' };

            profile.uuid = json.uuid;
            profile.siteName = json.site_name;
            profile.email = json.email;
            profile.profileUrl = json.profile_url;
            profile.contactInfoEmail = json.contact_info.email;
            profile.contactInfoFirstName = json.contact_info.first_name;
            profile.contactInfoMiddleName = json.contact_info.middle_name;
            profile.contactInfoLastName = json.contact_info.last_name;
            profile.membershipStatus = json.proz_membership.status;
            profile.membershipExpirationDate = json.proz_membership.expiration_date;

            profile._raw = body;
            profile._json = json;


            console.log(profile);
            done(null, profile);
        } catch (e) {
            done(e);
        }
    });
}

/**
 * Expose `Strategy`.
 */
// module.exports.version = '1.0.0';
module.exports = Strategy;