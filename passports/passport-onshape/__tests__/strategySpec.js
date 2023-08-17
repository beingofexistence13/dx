var Strategy=require('../lib/index.js');

describe('Strategy Tests', function () {
  var onshapeStrategy;
  beforeEach(function() {
    onshapeStrategy = new Strategy({
      clientID: 'AClientID',
      clientSecret: 'TheClientSecret',
      callbackURL: 'http://example.com/oauthCallback',
      userAgent: 'TheUserAgent'
      }, function() {});
  });

  it('should be able to construct the Onshape strategy', function() {

    expect(onshapeStrategy.name).toEqual('onshape');
  });

  it('should fetch the user profile', function() {
    var done = jest.fn();
    jest.spyOn(onshapeStrategy._oauth2, 'get').mockImplementation(function(url, token, cb) {
      var response = {id: 'AUserId', name: 'User Name',html_url: 'http://example.com', email: 'user@example.com'};
      cb(null, JSON.stringify(response));
    });
    onshapeStrategy.userProfile('AnAccessToken', done);
    expect(onshapeStrategy._oauth2.get).toHaveBeenCalledWith(expect.any(String), 'AnAccessToken', expect.any(Function));
    expect(done).toHaveBeenCalledWith(null, {
      provider: 'onshape',
      id: 'AUserId',
      displayName: 'User Name',
      profileUrl: 'http://example.com',
      emails: [{value: 'user@example.com'}],
      _raw: expect.any(String),
      _json: expect.any(Object)
    });
  });

  it('should handle an error when fetching the user profile', function() {
    var done = jest.fn();
    jest.spyOn(onshapeStrategy._oauth2, 'get').mockImplementation(function(url, token, cb) {
      cb('An Error occured', null);
    });
    onshapeStrategy.userProfile('AnAccessToken', done);
    expect(onshapeStrategy._oauth2.get).toHaveBeenCalledWith(expect.any(String), 'AnAccessToken', expect.any(Function));
    expect(done).toHaveBeenLastCalledWith( {message: 'Failed to fetch user profile', name: 'InternalOAuthError', oauthError: 'An Error occured'} );
  });

  it('should handle an error when deserializing the user profile', function() {
    var done = jest.fn();
    jest.spyOn(onshapeStrategy._oauth2, 'get').mockImplementation(function(url, token, cb) {
      cb(null, 'A Text String');
    });
    onshapeStrategy.userProfile('AnAccessToken', done);
    expect(onshapeStrategy._oauth2.get).toHaveBeenCalledWith(expect.any(String), 'AnAccessToken', expect.any(Function));
    expect(done).toHaveBeenLastCalledWith(expect.objectContaining({message: 'Failed to parse user profile'}));
  });
});
