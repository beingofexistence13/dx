exports = module.exports = function(options) {

  return function manual(identifier, cb) {
    var missing = ['clientID', 'clientSecret'].filter( function(opt) { return !options[opt] } );
    if (missing.length) return cb(new Error('Manual OpenID configuration is missing required parameter(s) - ' + missing.join(', ')));

    var params = {
      issuer: 'https://api.vivokey.com/openid',
      authorizationURL: 'https://api.vivokey.com/openid/authorize/',
      tokenURL: 'https://api.vivokey.com/openid/token/',
      userInfoURL: 'https://api.vivokey.com/openid/userinfo/',
      clientID: options.clientID,
      clientSecret: options.clientSecret,
      callbackURL: options.callbackURL
    }

    Object.keys(options).map(opt => {
      if (['nonce', 'display', 'prompt', 'max_age', 'ui_locals', 'id_token_hint', 'login_hint', 'acr_values'].indexOf(opt) !== -1) {
        params[opt] = options[opt];
      }
    });

    return cb(null, params);
  };
};
