# Passport-Signature

## Usage
Add "passport-signature" to your `package.json` file. Then, `(sudo) npm install -l`.

## Config

Following thr Passport Strategy conventions, your settings should look like:

    // Signature Strategy
    passport.use(new SignatureStrategy({
      clientID: 'your-license',
      clientSecret: 'your-secret',
      callbackURL: 'http://your.app.com/auth/signature/return',
      providerURL: 'https://auth.signature.com/',
      profileURL: 'https://auth.signature.com/api/userinfo'
    }, function (token, tokenSecret, profile, done) {
      compound.models.User.findOrCreate({
        signatureId: profile.id,
        profile: profile
      }, function (err, user) {
        done(err, user);
      });
    }));

..etc.

## Notes
Tested against the `example` project in [this](https://github.com/jaredhanson/oauth2orize) OAUTH2 provider repo.

###Thanks 
[Jared Hanson](https://github.com/jaredhanson/)

###License 
MIT
