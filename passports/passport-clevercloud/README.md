Passport-Clevercloud
===============

[![Build Status](https://drone.io/github.com/Redsmin/passport-clevercloud/status.png)](https://drone.io/github.com/Redsmin/passport-clevercloud/latest) [![Deps](https://david-dm.org/Redsmin/passport-clevercloud.png)](https://david-dm.org/Redsmin/passport-clevercloud)  [![Version](http://badge.fury.io/js/passport-clevercloud.png)](http://badge.fury.io/js/passport-clevercloud)
![npm](https://nodei.co/npm/passport-clevercloud.png)
====================

Passportjs strategy for CleverCloud

### Usage

```javascript
var CleverCloudStrategy = require('CleverCloudStrategy');

passport.use(new CleverCloudStrategy({
   sso_salt: 'secret'
 },
 function(id, email, done) {
   User.findOrCreate(..., function (err, user) {
     done(err, user);
   });
 }
));
```
