module.exports = function(params, from, to) {
  var value = params[from];
  delete params[from];
  params[to] = value;
  return params;
};
