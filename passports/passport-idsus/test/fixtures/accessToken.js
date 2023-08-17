/* jshint camelcase: false */
var Chance = new require('chance')();

module.exports = {
  access_token: Chance.guid(),
  token_type: Chance.string(),
  expires_in: Chance.timestamp(),
  refresh_token: Chance.guid(),
  scope: Chance.sentence({ words: 5 })
};
