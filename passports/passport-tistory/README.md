passport-tistory
================

***passport-tistory*** 는 [Tistory](http://www.tistory.com) 블로그의 API를 사용하기 위해서 `passport`를 사용해 복잡한 인증과정을 간단하게 구현한 인증구현체 모듈이다.
Tistory 인증 API는 OAuth 2.0 기반의 인증 방식을 사용하고 있다. 그래서 `passport-oauth2`를 상속받아 만들어져 있다.

Tistory 오픈 API를 사용하기 위해서는 다음과 같은 과정이 필요하다.

1. Tistory 사이트에서 클라이언트(웹, 앱 서비스 등록)를 등록
2. 웹 프레임워크 설치 (express.js)
3. `passport-tistory` 설치
4. 웹 프레임워크에서 `passport-tistory` 연동
5. Tistory 인증처리 테스트 후 accessToken 획득
5. accessToken으로 Tistory 오픈 API 사용

설치
=======

passport-tistory 은 npm으로 간단히 설치 할 수 있다.

```
npm install passport-tistory
```

사용방법
==========

passport-tistory 사용 방법은 `passport` 모듈과 `passport-tistory` 모듈을 로드해서 다음과 같이 인증이 필요한 부분에 `passport.use()` 사용한다.

```javascript
var passport = require('passport'),
    TistoryStrategy= require('passport-tistory').Strategy;

passport.use(new TistoryStrategy({
    clientID : clientID,
    callbackURL : callbackURL
  },
  function(accessToken, refreshToken, profile, done){
    // 사용자의 정보는 profile에 들어있다.
    User.findOrCreate(..., function(err, user) {
      if (err) { return done(err); }
      done(null, user);
    });
  }
));
```

Tistory Client 등록하기
=====================
`passport-tistory` 는 Tistory API를 사용하기 위해서 인증을 처리하는 모듈로 Tistory API를 사용하기 위해서는 가장먼저 티스토리에서 클라이언트를 등록해야한다.

Tistory 오픈 API를 사용하기 위해서는 다음 문서를 먼저 확인한다.
* [Tistory 인증가이드](http://www.tistory.com/guide/api/oauth)
* [Tistory API가이드](http://www.tistory.com/guide/api/index)

위 두 문서를 참조하고 난 후 [Tistory 클라이언트트 등록](http://www.tistory.com/guide/api/manage/register)을 한다.

클라인트 등록을 필드 속성은 다음과 같다.

| 필드명 | 설명 | 비고 |
|-------|----|-----|
| 서비스 명 | Tistory 클리언트 이름을 입력한다||
| 설명 | 설명을 입력한다||
| 로그 | 로고가 될 파일을 업로드한다||
| 서비스형태 | 웹서비스, PC애프리케이션, 모바일 중에 선택을 한다||
| 서비스 권한 | 읽기전용, 읽기/쓰기 중에 선택을 한다 | 읽기전용을하면 블로그에 글을 등록, 수정, 삭제를 할 수 없다|
| 서비스URL | Tistory 클라이언트를 만들어서 사용할 host의 URL을 입력합니다.|개발할 때는 http://127.0.0.1 로 지정한다|
| CallBack 경로 | Tistory 인증 후에 보여진 URL을 한다 | 개발할 때는 http://127.0.0.1/auth/tistory/callback 으로 지정한다|



Express.js와 연동하기
==================

웹 서비스를 만들기 위해서 Express.js 를 사용하고 있다면 다음과 같인 `passport-tistory`를 연동해서 사용할 수 있다.


```javascript
var express = require('express')
    , passport = require('passport')
    , util = require('util')
    , TistoryStrategy = require('passport-tistory').Strategy;

var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var path = require('path');
var logger = require('morgan');
var session = require('express-session');


var TISTORY_CLIENT_ID = ""        // 티스토리 API를 사용하기 위해서 등록한 Client의 Client ID
var TISTORY_CLIENT_SECRET = "";   // 티스토리 API를 사용하기 이해서 등록한 Client의 Clietn Secret

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});


passport.use(new TistoryStrategy({
      clientID: TISTORY_CLIENT_ID,
      clientSecret: TISTORY_CLIENT_SECRET,
      callbackURL: "http://127.0.0.1:3000/auth/tistory/callback"
    },
    function(accessToken, refreshToken, profile, done) {
      // asynchronous verification, for effect...
      console.log("accessToken: " + accessToken);
      console.log("refreshToken: " +refreshToken);

      process.nextTick(function () {
        return done(null, profile);
      });
    }
));

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({ secret: 'keyboard cat' }))
app.use(passport.initialize());
app.use(passport.session())

// GET /
app.get('/', function(req, res){
  res.render('index', { user: req.user });
});

// GET /account
app.get('/account', ensureAuthenticated, function(req, res){
  res.render('account', { user: req.user });
});

// GET /login
app.get('/login', function(req, res){
  res.render('login', { user: req.user });
});

// GET /auth/tistory
app.get('/auth/tistory',
    passport.authenticate('tistory'),
    function(req, res){
      console.log(req);
    });

// GET /auth/tistory/callback
app.get('/auth/tistory/callback',
    passport.authenticate('tistory', { failureRedirect: '/login' }),
    function(req, res) {
      console.log(req);
      res.redirect('/');
    });
// GET /logout
app.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});

app.listen(3000);

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) { return next(); }
  res.redirect('/login')
}

```

profile 프로퍼티
================

Tistory는 user 고유 정보를 가져오는 API가 존재하지 않는다. 그래서 다른 passport plugins과 달리 profile 정보로 Tistory의 blogInfo를 가져오게 했다.

| key | value | description |
|-----|-------|-------------|
| provider  | String  | tistory 고정  |
| id        | String  | Tistory 블로그 계정  |
| userId    | String  | Tistory 계정 userId |
| tistory   | Object  | Tistory 정보  |
| status    | String  | 결과 상태 값 |
| item      | Array   | Tistory에 만들어진 블로그의 정보 |


Copyright and License
======================

The MIT License (MIT)

Copyright (c) 2014 SungKwang Song

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.