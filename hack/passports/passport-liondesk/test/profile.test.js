/* global describe, it, before, expect */
'use strict';

const Profile = require('../lib/profile');

describe('Profile.parse', function() {
  
  var profile;

  before(function(done) {
    const body = require('./fixtures/users');
    profile = Profile.parse(body);
    done();
  });
  
  it('should parse profile', function() {
    expect(profile.id).to.equal(9999999);
    expect(profile.displayName).to.equal('Torres Christian');
    expect(profile.name.familyName).to.equal('Torres');
    expect(profile.name.givenName).to.equal('Christian');
    expect(profile.username).to.equal('example');
    expect(profile.emails[0].value).to.equal('example@gmail.com');
  });
  
});
