/**
 * Module dependencies.
 */
var util = require('util'),
  OAuth = require('oauth').OAuth,
  Oauth1Strategy = require('passport-oauth1');



function Strategy(options, verify) {
  options = options || {};
  options.subdomain = options.subdomain || ':subdomain';
	this.baseUrl = 'https://' + options.subdomain + '.uservoice.com';
  options.requestTokenURL = this.baseUrl + '/oauth/request_token';
  options.accessTokenURL = this.baseUrl + '/oauth/access_token';
  options.userAuthorizationURL = this.baseUrl + '/oauth/authorize';

  this._options = options;

  Oauth1Strategy.call(this, options, verify);

  this.name = 'uservoice';
}

util.inherits(Strategy, Oauth1Strategy);

Strategy.prototype.authenticate = function(req, options) {
	var self = this, subdomain = self._options.subdomain, parseUrl;

  options = options || {};
  if(options.subdomain){
  	subdomain = options.subdomain;
  }
	if(!subdomain){
		console.error(new Error('Missing Subdomain'));
		return;
	}
	parseUrl = function (url){
		return url.replace(':subdomain', subdomain);
	};
  self._options.requestTokenURL = parseUrl(self._options.requestTokenURL);
  self._options.accessTokenURL = parseUrl(self._options.accessTokenURL);
	self._oauth = new OAuth(self._options.requestTokenURL, self._options.accessTokenURL,
                          self._options.consumerKey,  self._options.consumerSecret,
                          '1.0', null, self._options.signatureMethod || 'HMAC-SHA1',
                          null, self._options.customHeaders);

	self._userAuthorizationURL = parseUrl(self._userAuthorizationURL);

  Oauth1Strategy.prototype.authenticate.call(self, req, options);
};

module.exports = Strategy;