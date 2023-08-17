/**
 * Module dependencies.
 */
var util = require('util')
	, OAuthStrategy = require('passport-oauth').OAuthStrategy
	, InternalOAuthError = require('passport-oauth').InternalOAuthError;


/**
 * `Strategy` constructor.
 *
 * @param {Object} options
 * @param {Function} verify
 * @api public
 */
function Strategy(options, verify) {

	options = options || {};
	options.sessionKey = options.sessionKey || 'oauth:trademe';
	options.apiVersion = options.apiVersion || 'v1';

	options.apiHost = options.apiHost || 'https://api.trademe.co.nz';
	options.oAuthBaseUrl = options.oAuthBaseUrl || 'https://secure.trademe.co.nz/Oauth';

	if(options.sandbox) {
		options.apiHost = options.apiHost.replace('trademe.co.nz', 'tmsandbox.co.nz');
		options.oAuthBaseUrl = options.oAuthBaseUrl.replace('trademe.co.nz', 'tmsandbox.co.nz');
	}

	options.requestTokenURL = options.requestTokenURL || options.oAuthBaseUrl + '/RequestToken';
	options.accessTokenURL = options.accessTokenURL || options.oAuthBaseUrl + '/AccessToken';
	options.userAuthorizationURL = options.userAuthorizationURL || options.oAuthBaseUrl + '/Authorize';

	OAuthStrategy.call(this, options, verify);
	this.name = 'trademe';

	this._options = options;

	this._skipExtendedUserProfile = (options.skipExtendedUserProfile === undefined) ? false : options.skipExtendedUserProfile;
}

/**
 * Inherit from `OAuthStrategy`.
 */
util.inherits(Strategy, OAuthStrategy);


/**
 * Authenticate request by delegating to Trademe using OAuth.
 *
 * @param {Object} req
 * @api protected
 */
Strategy.prototype.authenticate = function(req, options) {
	// authentication failure.
	if (req.query && req.query.denied) {
		return this.fail();
	}
	
	// Call the base class for standard OAuth authentication.
	OAuthStrategy.prototype.authenticate.call(this, req, options);
}

/**
 * Retrieve member profile from Trademe.
 *
 * @param {String} token
 * @param {String} tokenSecret
 * @param {Object} params
 * @param {Function} done
 * @api protected
 */
Strategy.prototype.userProfile = function(token, tokenSecret, params, done) {
	
	var profile = { provider: 'trademe' };

	var that = this;
	
	if (!this._skipExtendedUserProfile) {
		
		var url = this._options.apiHost + '/' + this._options.apiVersion + '/MyTradeMe/Summary.json';
		this._oauth.get(url, token, tokenSecret, function (err, body, res) {

			if (err) { return done(new InternalOAuthError('failed to fetch member profile', err)); }
			
			var myTradeMeObject = {};
			
			try {
				myTradeMeObject = JSON.parse(body);
			} catch (e) {
				myTradeMeObject = null;
				return done(e);
			}
			
			if (myTradeMeObject === undefined || myTradeMeObject === null) {
				return done(new Error('Unfortunately the myTradeMeObject is non-existent'));
			} 

			if(!myTradeMeObject.MemberId) {
				return done(new Error('No MemberId returned'));
			}

			const memberUrl = that._options.apiHost + '/' + that._options.apiVersion + '/Member/' + myTradeMeObject.MemberId +'/Profile.json';
		
			that._oauth.get(memberUrl, token, tokenSecret, function (err, body, res) {

				if (err) { return done(new InternalOAuthError('failed to fetch member profile', err)); }

				var object = {};
			
				try {
					object = JSON.parse(body);
				} catch (e) {
					object = null;
					return done(e);
				}
				
				if (object === undefined || object === null) {
					return done(new Error('Unfortunately the object is non-existent'));
				} 

				profile.id = object.Member.MemberId.toString();
				profile.emails = [
					{
						value: myTradeMeObject.Email
					}
				];
				profile.username = myTradeMeObject.Nickname
				profile.displayName = [
					myTradeMeObject.FirstName || '',
					myTradeMeObject.LastName || ''
				].join(' ').trim();
				profile.photos = object.Photo ? [
					{
						value: object.Photo
					} 
				] : [];
				profile.member = object;
				profile.mine = myTradeMeObject;

				return done(null, profile);
			});
		});
	} else {
		profile.id = params.user_id;
		
		return done(null, profile);
	}
}

//
Strategy.prototype.requestTokenParams = function(options) {
  var params = options || {};
  
  var scope = options.scope;
  if (scope) {
    if (Array.isArray(scope)) { scope = scope.join(' '); }
    params['scope'] = scope;
  }
  return params;
}

/**
 * Expose `Strategy`.
 */
module.exports = Strategy;
