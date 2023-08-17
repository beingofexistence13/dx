var util = require('util'),
  profile = require('./profile'),
  OAuth2Strategy = require('passport-oauth2');

var request = require('request');
/**
 * TistoryStrategy 생성자.<br/>
 *
 * @param options
 * @param verify
 *
 * @constructor
 */
function TistoryStrategy(options, verify) {
  var oauthHost = 'https://www.tistory.com';
  options = options || {};
  options.authorizationURL = options.authorizationURL || oauthHost + '/oauth/authorize';
  options.tokenURL = options.tokenURL || oauthHost + '/oauth/access_token/';

  options.customHeaders = options.customHeaders || {};

  if (!options.customHeaders['User-Agent']) {
    options.customHeaders['User-Agent'] = options.userAgent || 'passport-tistory';
  }

  OAuth2Strategy.call(this, options, verify);
  this.name = 'tistory';
  this._userProfileURL = 'https://www.tistory.com/apis/blog/info?output=json';
  this._oauth2.getOAuthAccessToken = function (code, params, callback) {
    var params = params || {};
    params['client_id'] = this._clientId;
    params['client_secret'] = this._clientSecret;
    var codeParam = (params.grant_type === 'refresh_token') ? 'refresh_token' : 'code';
    params[codeParam] = code;


    var url = this._getAccessTokenUrl() + "?" + querystring.stringify(params);

    request(url, function (error, response, data) {
      if (error) callback(error);
      else {
        var results;
        try {
          // As of http://tools.ietf.org/html/draft-ietf-oauth-v2-07
          // responses should be in JSON
          results = JSON.parse(data);
        }
        catch (e) {
          // .... However both Facebook + Github currently use rev05 of the spec
          // and neither seem to specify a content-type correctly in their response headers :(
          // clients of these services will suffer a *minor* performance cost of the exception
          // being thrown
          results = querystring.parse(data);
        }
        var access_token = results["access_token"];
        var refresh_token = results["refresh_token"];
        delete results["refresh_token"];
        callback(null, access_token, refresh_token, results); // callback results =-=
      }
    });
  }

}

/**
 * `OAuth2Stragegy`를 상속 받는다.
 */
util.inherits(TistoryStrategy, OAuth2Strategy);

/**
 * Tistory 블로그 정보를 얻는다.<br/>
 * 사용자 정보를 성공적으로 조회하면 아래의 object가 done 콜백함수 호출과 함꼐 넘어간다.
 *
 *   - `provider`         tistory 고정
 *   - `tistory`          블로그 정보
 *   - `status`           상태 값
 *   - `id`               Tistory 사용자
 *   - `userId`           Tistory 사용자 userId
 *   - `item`             Tistory에 만들어 놓은 블로그 정보
 *   - `_raw`             json string 원문
 *   _ `_json`            json 원 데이터
 *
 * @param {String} accessToken
 * @param {Function} done
 */
TistoryStrategy.prototype.userProfile = function (accessToken, done) {
  this._oauth2.get(this._userProfileURL, accessToken, function (err, body, res) {
    if (err) {
      return done(new InternalOAuthError('failed to fetch user profile', err));
    }

    try {
      var json = JSON.parse(body);

      profile.status = json.tistory.status;
      profile.id = json.tistory.id;
      profile.userId = json.tistory.userId;
      profile.tistory = json.tistory.tistory;
      profile.item = json.tistory.item;
      profile._raw = body;
      profile._json = json;

      done(null, profile);

    } catch (e) {
      done(e);
    }
  });
}

/**
 * Expose `TistoryStrategy`.
 */
module.exports = TistoryStrategy;
