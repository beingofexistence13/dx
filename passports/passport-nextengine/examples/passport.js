const passport = require('koa-passport')
const { User } = require('./lib/model')

passport.serializeUser((user, done) => {
  done(null, user.uid)
})

passport.deserializeUser((uid, done) => {
  User.query().where({ uid }).first()
    .then(user => {
      user ? done(null, user) : done(null, false)
    })
})

// Use `passport-nextengine` instead of `./strategy` in production
const NextengineStrategy = require('./strategy').Strategy
passport.use(new NextengineStrategy({
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET
}, (user, done) => {
  User.query().where({ uid: user.uid }).first()
    .then(u => {
      if (u) {
        return Promise.resolve(u)
      } else {
        return User.query().insert({
          uid: user.uid,
          display_name: user.pic_name,
          access_token: user.access_token,
          refresh_token: user.refresh_token,
        })
      }
    })
    .then(u => done(null, u))
    .catch(done)
}))

module.exports = passport
