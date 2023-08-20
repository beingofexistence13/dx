# Passport Netatmo Strategy

Strategy to authenticate with Netatmo via OAuth2 in Passport

For more details, read the Netatmo developer docs at https://dev.netatmo.com/

## Installation

`$ npm install passport-netatmo`

## Usage

Assuming an [express](http://expressjs.com/) app:

    var NetatmoStrategy = require('passport-netatmo').Strategy;

    passport.use(new NetatmoStrategy({
      clientID: NETATMO_ID,
      clientSecret: NETATMO_SECRET,
      callbackURL: 'https://example.com/auth/netatmo/callback' // optional if set at dev.netatmo.com
    }));

    app.get('/auth/netatmo', passport.authenticate('netatmo'));
    app.get('/auth/netatmo/callback',
        passport.authenticate('netatmo', { }),
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
