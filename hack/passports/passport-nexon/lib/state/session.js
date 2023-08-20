var uid = require('uid2');

/**
 * this SessionStore is copied from passport-oauth2/lib/state/session.js 
 */
function SessionStore(key) {
  if (!key) { throw new TypeError('Session-based state store requires a session key'); }
  this._key = key;
}

/**
 * Store request state.
 *
 * It will be called right before redirecting to authorizationURL
 *
 * @param {Object} req
 * @param {Function} callback
 * @api protected
 */
SessionStore.prototype.store = function(req, callback) {
  if (!req.session) { return callback(new Error('OAuth 2.0 authentication requires session support when using state. Did you forget to use express-session middleware?')); }

  var key = this._key;
  var state = uid(24);
  var data = {
      state: state,
      redirect_url: req.query.redirect_url || req.originalUrl
  };
  state = encodeURIComponent(JSON.stringify(data));
  if (!req.session[key]) { req.session[key] = {}; }  
  req.session[key].state = state;
  callback(null, state);
};

SessionStore.prototype.storeOnly = function(req) {
  var key = this._key;
  if (!req.session[key]) { req.session[key] = {}; }
  var state = uid(24);
  req.session[key].state = state;
  return state;
};

/**
 * Verify request state.
 *
 * This implementation simply compares the state parameter in the request to the
 * value generated earlier and stored in the session.
 *
 * @param {Object} req
 * @param {String} providedState
 * @param {Function} callback
 * @api protected
 */
SessionStore.prototype.verify = function(req, providedState, callback) {
  if (!req.session) { return callback(new Error('OAuth 2.0 authentication requires session support when using state. Did you forget to use express-session middleware?')); }

  var key = this._key;
  if (!req.session[key] || !req.session[key].state) {
   return callback(null, false, { message: 'Unable to verify authorization request state.' });
  }
  
  var stateString = decodeURIComponent(req.session[key].state);
  if (stateString !== decodeURIComponent(providedState)) {
   return callback(null, false, { message: 'Invalid authorization request state.' });
  }
  
  var data = JSON.parse(stateString);
//   req.session[key].state = data;
  req.session._oauth_redirect_url = data.redirect_url;
  
    delete req.session[key].state;
    if (Object.keys(req.session[key]).length === 0) {
        delete req.session[key];
    }

  return callback(null, true, data);
};

// Expose constructor.
module.exports = SessionStore;
