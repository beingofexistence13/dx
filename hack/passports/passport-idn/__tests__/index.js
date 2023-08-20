const {readFileSync} = require('fs')

const Strategy = require('..')

const example = readFileSync('__tests__/__fixtures__/example.json', 'utf8')

describe('passport-idn', () => {
  it('should export Strategy constructor directly from package', () => {
    expect(Strategy).toBeInstanceOf(Function)
  })

  it('should load a profile completely', () => {
    const strategy = new Strategy({
      clientID: 'ABC123',
      clientSecret: 'secret'
    }, (() => {
    }))

    strategy._oauth2.get = function (url, accessToken, done) {
      if (url !== 'https://anywhere.idn.laposte.fr/oauth/v2/me') {
        done(new Error('wrong url argument'))
        return
      }

      if (accessToken !== 'token') {
        done(new Error('wrong token argument'))
        return
      }

      done(null, example)
    }

    strategy.userProfile('token', (error, profile) => {
      expect(profile).toMatchSnapshot()
    })
  })
})
