'use strict';

var _ = require('underscore');
var util = require('util');
var OAuth2Strategy = require('passport-oauth').OAuth2Strategy;

function Strategy(options, verify) {
  options = options || {};
  options.authorizationURL = options.authorizationURL || 'https://www.ustream.tv/oauth2/authorize';
  options.tokenURL = options.tokenURL || 'https://www.ustream.tv/oauth2/token';

  if (options.scope) {
    if (_.isArray(options.scope)) {
      options.scope.push('identity');
      options.scopeSeparator = ',';
    } else {
      options.scope = options.scope
        .split(',')
        .reduce(function(previousValue, currentValue, index, array) {
          if (currentValue !== '') {
            previousValue.push(currentValue);
          }
          return previousValue;
        }, ['identity']).join(',');
    }
  } else {
    options.scope = 'identity';
  }

  OAuth2Strategy.call(this, options, verify);
  this.name = 'ustream';

  this._oauth2._useAuthorizationHeaderForGET = true;
}

util.inherits(Strategy, OAuth2Strategy);

module.exports = Strategy;
