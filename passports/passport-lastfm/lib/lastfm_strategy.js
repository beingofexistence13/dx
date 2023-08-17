var url = require('url');
var util = require('util');
var defaults = require('./defaults');
var Strategy = require('passport-strategy');
var LastFmNode = require('lastfm').LastFmNode;








function LastfmStrategy(options, verify){
  options = options || {};
  if (!options.api_key && !options.clientID)  { throw new TypeError('LastfmStrategy requires a clientID obtained from http://www.last.fm/api/account/create'); }
  if (!options.secret && !options.clientSecret)  { throw new TypeError('LastfmStrategy requires a clientSecret obtained from http://www.last.fm/api/account/create'); }
  if (!options.callback_url && !options.callbackURL)  { throw new TypeError('LastfmStrategy requires a callbackURL option'); }

  if (!verify || typeof(verify) != 'function')  { throw new TypeError('LastfmStrategy requires verify callback function'); }

  Strategy.call(this);

  this.name = 'lastfm';
  this.api_key = options.api_key || options.clientID;
  this.secret = options.secret || options.clientSecret;
  this.callbackURL = options.callback_url || options.callbackURL;


  this._verify = verify;
  this._lastfm = new LastFmNode({
    'api_key': this.api_key,
    'secret':this.secret
  });
}


LastfmStrategy.prototype.authenticate = function(request, options){
  var self = this;
  var authUrl = self.getAuthenticationUrl({cb:self.callbackURL});


  if (request.query && request.query.token){
    var token = request.query.token;


    var callback = function(er, session){
      if (!session) self.fail(session, 403);

      function verified(err, user, session){
        if (err)  self.error(err);
        else if (!user) self.fail(user, session);
        else self.success(user, session);
      }

      self._verify(request, session, verified);
    };


    var lastfm_opts = defaults.defaultOptions({ 'token' : token }, callback, 'session');

    this._lastfm.request('auth.getSession', lastfm_opts);
  }
  else{
    self.redirect(authUrl);
  }
}




LastfmStrategy.prototype.getAuthenticationUrl = function(param) {
  var params = param ;
  if (!param) params = {};
  var baseUrl = 'http://www.last.fm/api/auth';
  var urlParts = url.parse(baseUrl);

  urlParts.query = {};;
  urlParts.query.api_key = this.api_key;

  if (params.token) { urlParts.query.token = params.token; }

  var rtn = `${url.format(urlParts)}&cb=${this.callbackURL}`;
  return rtn ;
};


util.inherits(LastfmStrategy, Strategy);



module.exports = exports = LastfmStrategy;
