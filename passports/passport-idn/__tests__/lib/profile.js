const {readFileSync} = require('fs')

const {parse} = require('../../lib/profile')

describe('lib.profile', () => {
  describe('parse', () => {
    it('should parse profile', () => {
      const data = readFileSync('__tests__/__fixtures__/example.json', 'utf8')

      expect(parse(data)).toMatchSnapshot()
    })

    it('should parse profile with null email', () => {
      const data = readFileSync('__tests__/__fixtures__/example-null-email.json', 'utf8')

      expect(parse(data)).toMatchSnapshot()
    })
  })
})
