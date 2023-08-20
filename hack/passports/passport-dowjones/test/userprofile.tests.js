var djProfile = require('./fixtures/dj-example-profile');
var Profile = require('../lib/Profile');

describe('Profile', function () {

  before(function () {
    this.profile = new Profile(djProfile);
  });

  [
    ['provider', 'google-oauth2'],
    ['id', 'google-oauth2|abc123890'],
    ['displayName', 'Joe Sample']
  ].forEach(function(tuple){

    it('should map ' + tuple[0], function () {
      this.profile[tuple[0]]
        .should.eql(tuple[1]);
    });

  });

  it('should map the name', function () {
    this.profile.name.givenName
        .should.eql('Joe');
    this.profile.name.familyName
        .should.eql('Sample');
  });

  it('should map the emails', function () {
    this.profile.emails[0]
      .value.should.eql('joesample@gmail.com');
  });
});
