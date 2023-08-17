exports.redirectUrl = function (params){
  return  'https://login.'+ params.domain +
  '/oauth/authorize/?state=random_state_string' +
  '&client_id=' + params.clientID +
  '&response_type=code';
};
