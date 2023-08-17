/* global describe, it, expect, before */
/* jshint expr: true */

var FoursquareStrategy = require('../lib/strategy');


describe('Strategy#userProfile', function() {

  var strategy =  new FoursquareStrategy({
        clientID: 'ABC123',
        clientSecret: 'secret'
      },
      function() {});

  // mock
  strategy._oauth2.get = function(url, accessToken, callback) {
    if (url != 'https://www.tistory.com/apis/blog/info?output=json') { return callback(new Error('wrong url argument')); }
    if (accessToken != 'token') { return callback(new Error('wrong token argument')); }

    var body = '{"tistory":{"status":"200","id":"saltfactory@hanmail.net","item":[{"url":"http://oauth.tistory.com","secondaryUrl":"http://","nickname":"Tistory API","title":"나만의 앱, Tistory OAuth API 로 만들어보세요!","description":"","default":"Y","blogIconUrl":"http://i1.daumcdn.net/cfs.tistory/blog/79/795307/index.gif","faviconUrl":"http://i1.daumcdn.net/cfs.tistory/blog/79/795307/index.ico","profileThumbnailImageUrl":"http://cfile1.uf.tistory.com/R106x0/1851DB584DAF942950AF29","profileImageUrl":"http://cfile1.uf.tistory.com/R106x0/1851DB584DAF942950AF29","statistics":{"post":"3","comment":"0","trackback":"0","guestbook":"0","invitation":"0"}},{"url":"http://oauth2.tistory.com","secondaryUrl":"http://","nickname":"Tistory API","title":"나만의 비밀 홈","description":"","default":"N","blogIconUrl":"http://i1.daumcdn.net/cfs.tistory/blog/79/795308/index.gif","faviconUrl":"http://i1.daumcdn.net/cfs.tistory/blog/79/795308/index.ico","profileThumbnailImageUrl":"","profileImageUrl":"","blogId":"795308","statistics":{"post":"0","comment":"0","trackback":"0","guestbook":"0","invitation":"0"}}]}}';

    callback(null, body, undefined);
  };

  describe('loading profile', function() {
    var profile;

    before(function(done) {
      strategy.userProfile('token', function(err, p) {
        if (err) { return done(err); }
        profile = p;
        done();
      });
    });

    it('should parse profile', function() {
      expect(profile.provider).to.equal('tistory');

      expect(profile.id).to.equal('saltfactory@hanmail.net');
      expect(profile.item[0].url).to.equal('http://oauth.tistory.com');
      expect(profile.item[0].title).to.equal('나만의 앱, Tistory OAuth API 로 만들어보세요!');


    });

    it('should set raw property', function() {
      expect(profile._raw).to.be.a('string');
    });

    it('should set json property', function() {
      expect(profile._json).to.be.an('object');
    });
  });

  describe('encountering an error', function() {
    var err, profile;

    before(function(done) {
      strategy.userProfile('wrong-token', function(e, p) {
        err = e;
        profile = p;
        done();
      });
    });

    it('should error', function() {
      expect(err).to.be.an.instanceOf(Error);
      expect(err.constructor.name).to.equal('InternalOAuthError');
      expect(err.message).to.equal('Failed to fetch user profile');
    });

    it('should not load profile', function() {
      expect(profile).to.be.undefined;
    });
  });

});