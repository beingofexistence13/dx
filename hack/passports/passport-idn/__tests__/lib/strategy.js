const Strategy = require('../../lib/strategy')

// ## //

describe('lib.strategy', () => {
  describe('defaults', () => {
    const strategy = new Strategy({
      clientID: 'ABC123',
      clientSecret: 'secret'
    }, (() => {
    }))

    it('should be named idn', () => {
      expect(strategy.name).toBe('idn')
    })

    it('should have default user agent', () => {
      expect(strategy._oauth2._customHeaders['User-Agent']).toBe('passport-idn')
    })
  })

  it('should allow overriding the default user agent', () => {
    const strategy = new Strategy({
      clientID: 'ABC123',
      clientSecret: 'secret',
      userAgent: 'cool-idn-agent'
    }, (() => {
    }))

    expect(strategy._oauth2._customHeaders['User-Agent']).toBe('cool-idn-agent')
  })

  it('should allow overriding headers', () => {
    const strategy = new Strategy({
      clientID: 'ABC123',
      clientSecret: 'secret',
      customHeaders: {
        'User-Agent': 'cool-idn-agent'
      }
    }, (() => {
    }))

    expect(strategy._oauth2._customHeaders['User-Agent']).toBe('cool-idn-agent')
  })

  it('should give priority to headers User-Agent over option', () => {
    const strategy = new Strategy({
      clientID: 'ABC123',
      clientSecret: 'secret',
      userAgent: 'cool-idn-agent',
      customHeaders: {'User-Agent': 'even-better-idn-agent'}
    }, (() => {
    }))

    expect(strategy._oauth2._customHeaders['User-Agent']).toBe('even-better-idn-agent')
  })
})
