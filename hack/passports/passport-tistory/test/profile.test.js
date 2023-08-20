/**
 * Created by saltfactory on 6/13/14.
 */
var fs = require('fs')
    , parse = require('../lib/profile').parse;


describe('profile.parse', function() {

  describe('profile from tistory blogInfo', function() {
    var profile;

    before(function(done) {
      fs.readFile('test/data/bloginfo.json', 'utf8', function(err, data) {
        if (err) { return done(err); }
        profile = parse(data);
        done();
      });
    });

    it('should parse profile', function() {
      expect(profile.id).to.equal('blogtest_080@hanmail.net');
      expect(profile.item[0].url).to.equal('http://oauth.tistory.com');
      expect(profile.item[0].title).to.equal('나만의 앱, Tistory OAuth API 로 만들어보세요!');
    });
  });

});