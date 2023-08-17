# Passport Honeywell Strategy

Strategy to authenticate with Honeywell via OAuth2 in Passport

For more details, read the Honeywell developer docs at https://developer.honeywell.com

## Installation

`$ npm install passport-honeywell`

## Usage

Assuming an [express](http://expressjs.com/) app:

    var HoneywellStrategy = require('passport-honeywell').Strategy;

    passport.use(new HoneywellStrategy({
      clientID: 'Consumer Key',
      clientSecret: 'Consumer Secret',
      callbackURL: 'https://example.com/auth/honeywell/callback'
    }));

    app.get('/auth/honeywell', passport.authenticate('honeywell'));
    app.get('/auth/honeywell/callback',
        passport.authenticate('honeywell', { }),
        function(req, res) {
          // access token is in req.user.accessToken
          // refresh token is in req.user.refreshToken
          // expires in req.user.expires_in seconds
        }
       );

## License

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
