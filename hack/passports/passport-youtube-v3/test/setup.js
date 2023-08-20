var app = require('express')(),
    passport = require('passport')

// Make sure the client ID/secret is setup for the following urls:
// Domain: http://localhost:8080
// Callback url: http://localhost:8080/callback

passport.use(new YoutubeV3Strategy({
    clientID: 'enter client id here',
    clientSecret: 'enter client secret here',
    callbackURL: 'http://localhost:8080/redirect',
    scope: ['https://www.googleapis.com/auth/youtube.readonly']
}, function (accessToken, refreshToken, profile, done) {
    console.log('got authentication for', profile)
    done(profile)
}))

app.get('/authenticate', passport.authenticate('youtube'))
app.get('/callback', passport.authenticate('youtube'))

app.listen(8080)

console.log('Now open http://localhost:8080/authenticate')
