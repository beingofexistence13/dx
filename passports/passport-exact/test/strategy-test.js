var vows = require('vows');
var assert = require('assert');
var util = require('util');
var Strategy = require('passport-exact/strategy');


vows.describe('exactStrategy').addBatch({
  
  'strategy': {
    topic: function() {
      return new Strategy({
        clientID: 'ABC123',
        clientSecret: 'secret'
      },
      function() {});
    },
    
    'should be named exact': function (strategy) {
      assert.equal(strategy.name, 'exact');
    },
  },
  
  'strategy when loading user profile': {
    topic: function() {
      var strategy = new Strategy({
        clientID: 'ABC123',
        clientSecret: 'secret'
      },
      function() {});
      
      // mock
      strategy._oauth2._request = function(method, url, headers, postData, accessToken, callback) {
        /*jshint multistr: true */
        var body = '<?xml version="1.0" encoding="utf-8" standalone="yes"?>\
          <feed xml:base="https://start.exactonline.nl/api/v1/current/" xmlns:d="http://schemas.microsoft.com/ado/2007/08/dataservices" xmlns:m="http://schemas.microsoft.com/ado/2007/08/dataservices/metadata" xmlns="http://www.w3.org/2005/Atom">\
            <title type="text">Me</title>\
            <id>https://start.exactonline.nl/api/v1/current/Me</id>\
            <updated>2015-01-20T14:34:54Z</updated>\
            <link rel="self" title="Me" href="Me" />\
            <entry>\
              <id>https://start.exactonline.nl/api/v1/current/Me(guid\'c8d0f941-973a-4272-aa2b-749886a60ea8\')</id>\
              <title type="text"></title>\
              <updated>2015-01-20T14:34:54Z</updated>\
              <author>\
                <name />\
              </author>\
              <link rel="edit" title="Me" href="Me(guid\'c8d0f941-973a-4272-aa2b-749886a60ea8\')" />\
              <category term="Exact.Web.Api.System.Me" scheme="http://schemas.microsoft.com/ado/2007/08/dataservices/scheme" />\
              <content type="application/xml">\
                <m:properties>\
                  <d:CurrentDivision m:type="Edm.Int32">755851</d:CurrentDivision>\
                  <d:FullName>John Foo</d:FullName>\
                  <d:PictureUrl>https://start.exactonline.nl//docs/images/placeholder_contact_myeol.png</d:PictureUrl>\
                  <d:ThumbnailPicture m:type="Edm.Binary">/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAQCAwMDAgQDAwMEBAQEBQkGBQUFBQsICAYJDQsNDQ0LDAwOEBQRDg8TDwwMEhgSExUWFxcXDhEZGxkWGhQWFxb/2wBDAQQEBAUFBQoGBgoWDwwPFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhb/wAARCAAyADIDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD7WvbmZbgqGGAq9UB7D2qL7XP/AHl/74X/AAo1D/j7b/dX/wBBFQUATi6nP8S/98L/AIUfa5/7y/8AfC/4V5h8XPFki3o0jSbySNrds3MkXykOOihgc8d+1YehePvEWnyr59yL+EfejuBkkezjkfrQB7X9rn/vL/3wv+FH2uf+8v8A3wv+FZPhnV7XXNFi1K0DKkmQyN95GHVTV+gDoLWaQ20ZO3lB/CPSio7T/j0i/wBwfyooAytQ/wCPtv8AdX/0EVCnDAn1qbUP+Ptv91f/AEEVBgHg9DwaAPn3XWV9cvXRgytdSEMDkEbzzmqtWtcs307WruwkILW07Rkjvg8H8sVVoA9a+BrKfBkihgWW8fIzyMhcV2VcX8DbI2/hWa8Yj/TbglR6BBt/nmu0oA3LT/j0i/3B/Kii0/49Iv8AcH8qKAMrUP8Aj7b/AHV/9BFQVH4m1PTtMkMuo3sFspVceY+CflHQdT+Fcfq/xL0S3ythb3N646HHlp+Z5/SgDmvjhZWtt4phuYDiW8h3zqCOGB2g47ZH8q4zjvwO9XvE2qTa1rlxqc8aRvOR8ichQAABz7CqNAH0B4esrTTtDtbKxObeKIbGzndnksT6kkmrleU+BvH/APY2kw6XfWDTwQZEcsT4dQTnBB4OM+oruNE8Z+HNUdY4dQWGVukVyPLJ+hPB/OgDurT/AI9Iv9wfyootAfskX+4P5UUAeFfFRVk+Iepl1DEOgBYZwPLXiuf8qL/nmn/fIoooAPKi/wCeaf8AfIo8qL/nmn/fIoooAPKi/wCeaf8AfIoaGIggxIR/uiiigD6T8EknwZpBPJOnwEk9/wB2tFFFAH//2Q==</d:ThumbnailPicture>\
                  <d:ThumbnailPictureFormat>jpeg</d:ThumbnailPictureFormat>\
                  <d:UserID m:type="Edm.Guid">c8d0f941-973a-4272-aa2b-749886a60ea8</d:UserID>\
                  <d:UserName>john.foo</d:UserName>\
                  <d:LanguageCode>en-GB</d:LanguageCode>\
                  <d:Legislation m:type="Edm.Int64">1</d:Legislation>\
                  <d:Email>john.foo@contoso.com</d:Email>\
                  <d:Title>DHR</d:Title>\
                  <d:Initials m:null="true" />\
                  <d:FirstName>John</d:FirstName>\
                  <d:MiddleName m:null="true" />\
                  <d:LastName>Foo</d:LastName>\
                  <d:Gender>O</d:Gender>\
                  <d:Nationality m:null="true" />\
                  <d:Language>EN</d:Language>\
                  <d:Phone m:null="true" />\
                  <d:PhoneExtension m:null="true" />\
                  <d:Mobile m:null="true" />\
                  <d:ServerUtcOffset m:type="Edm.Double">3600</d:ServerUtcOffset>\
                </m:properties>\
              </content>\
            </entry>\
          </feed>';

        callback(null, body, undefined);
      };
      
      return strategy;
    },
    
    'when told to load user profile': {
      topic: function(strategy) {
        var self = this;
        function done(err, profile) {
          self.callback(err, profile);
        }
        
        process.nextTick(function () {
          strategy.userProfile('access-token', done);
        });
      },
      
      'should not error' : function(err, req) {
        assert.isNull(err);
      },
      'should load profile' : function(err, profile) {
        assert.equal(profile.provider, 'exact');
        assert.equal(profile.id, 'c8d0f941-973a-4272-aa2b-749886a60ea8');
        assert.equal(profile.displayName, 'John Foo');
      },
      'should set xml property' : function(err, profile) {
        assert.isString(profile._xml);
      },
      'should set json property' : function(err, profile) {
        assert.isObject(profile._json);
      },
    },
  },
  
  'strategy when loading user profile and encountering an error': {
    topic: function() {
      var strategy = new Strategy({
        clientID: 'ABC123',
        clientSecret: 'secret'
      },
      function() {});
      
      // mock
      strategy._oauth2._request = function(method, url, headers, postData, accessToken, callback) {
        callback(new Error('something-went-wrong'));
      }
      
      return strategy;
    },
    
    'when told to load user profile': {
      topic: function(strategy) {
        var self = this;
        function done(err, profile) {
          self.callback(err, profile);
        }
        
        process.nextTick(function () {
          strategy.userProfile('access-token', done);
        });
      },
      
      'should error' : function(err, req) {
        assert.isNotNull(err);
      },
      'should wrap error in InternalOAuthError' : function(err, req) {
        assert.equal(err.constructor.name, 'InternalOAuthError');
      },
      'should not load profile' : function(err, profile) {
        assert.isUndefined(profile);
      },
    },
  },
  
}).export(module);