/* eslint-env jest */
'use strict'

const nock = require('nock')
const express = require('express')
const supertest = require('supertest')
const { Passport } = require('passport')
const KualiStrategy = require('../kuali-strategy')

describe('KualiStrategy', () => {
  afterEach(() => nock.cleanAll())

  const setupApp = (options, mw) => {
    const app = express()
    const passport = new Passport()
    passport.use(new KualiStrategy(options))
    app.use(passport.initialize())
    app.use(
      passport.authenticate('kuali', { session: false, failWithError: true }),
      mw
    )
    app.use((err, req, res, next) => {
      res.status(err.statusCode || err.status || 500).json({
        message: err.message,
        kualiError: err.kualiError
      })
    })
    return supertest(app)
  }

  test('gets the user', () => {
    const request = setupApp(null, (req, res) => res.send(req.user))
    const user = {
      id: 'foobar',
      displayName: 'Test User',
      role: 'admin'
    }
    const token = 'Bearer my-token'
    nock('https://monsters.kuali.co')
      .get('/api/v1/users/current')
      .reply(function () {
        expect(this.req.headers).toHaveProperty('authorization', token)
        return [200, user]
      })
    return request
      .get('/')
      .set('Host', 'monsters.kuali.co')
      .set('Authorization', token)
      .expect(200, user)
  })

  test('returns 401 if remote returns 401', () => {
    const request = setupApp(null, (req, res) => res.send(req.user))
    const token = 'Bearer my-token'
    nock('https://monsters.kuali.co')
      .get('/api/v1/users/current')
      .reply(function () {
        return [401, { message: 'Unauthorized' }] // does not match to return body
      })
    return request
      .get('/')
      .set('Host', 'monsters.kuali.co')
      .set('Authorization', token)
      .expect(401, { message: 'Unauthorized' })
  })

  test('returns error if status is anything but 200 or 401', () => {
    const request = setupApp(null, (req, res) => res.send(req.user))
    const token = 'Bearer my-token'
    nock('https://monsters.kuali.co')
      .get('/api/v1/users/current')
      .reply(function () {
        return [503, { message: 'Service Unavailable' }]
      })
    return request
      .get('/')
      .set('Host', 'monsters.kuali.co')
      .set('Authorization', token)
      .expect(503, {
        message: 'Error attempting to authenticate',
        kualiError: {
          message: 'Service Unavailable'
        }
      })
  })

  test('returns 400 if no authorization header is present', () => {
    const request = setupApp(null, (req, res) => res.send(req.user))
    return request
      .get('/')
      .set('Host', 'monsters.kuali.co')
      .expect(400, {
        message: 'Bad Request'
      })
  })

  test('throws error if there is a network error', () => {
    const request = setupApp(null, (req, res) => res.send(req.user))
    const token = 'Bearer my-token'
    nock('https://monsters.kuali.co')
      .get('/api/v1/users/current')
      .replyWithError('NETWORK_ERROR')
    return request
      .get('/')
      .set('Host', 'monsters.kuali.co')
      .set('Authorization', token)
      .expect(500, { message: 'Error: NETWORK_ERROR' })
  })

  test('it sends a mock user', () => {
    const request = setupApp({ mockUser: true }, (req, res) =>
      res.send(req.user)
    )
    return request
      .get('/')
      .expect(200)
      .then(response => {
        expect(response.body).toMatchSnapshot()
      })
  })

  test('it allows custom mock user option', () => {
    const mockUser = {
      id: 'foobar'
    }
    const request = setupApp(
      {
        mockUser: req => {
          expect(req).toBeInstanceOf(express.request.constructor)
          return mockUser
        }
      },
      (req, res) => res.send(req.user)
    )
    return request.get('/').expect(200, mockUser)
  })

  test('allows custom getHost', () => {
    const request = setupApp(
      {
        getHost: req => {
          expect(req).toBeInstanceOf(express.request.constructor)
          return 'https://foo.bar.kuali.co'
        }
      },
      (req, res) => res.send(req.user)
    )
    const user = {
      id: 'foobar',
      displayName: 'Test User',
      role: 'admin'
    }
    const token = 'Bearer my-token'
    nock('https://foo.bar.kuali.co')
      .get('/api/v1/users/current')
      .reply(function () {
        expect(this.req.headers).toHaveProperty('authorization', token)
        return [200, user]
      })
    return request
      .get('/')
      .set('Host', 'monsters.kuali.co')
      .set('Authorization', token)
      .expect(200, user)
  })

  test('allows custom getUserEndpoint', () => {
    const request = setupApp(
      {
        getUserEndpoint: req => {
          expect(req).toBeInstanceOf(express.request.constructor)
          return '/api/v2/users/me'
        }
      },
      (req, res) => res.send(req.user)
    )
    const user = {
      id: 'foobar',
      displayName: 'Test User',
      role: 'admin'
    }
    const token = 'Bearer my-token'
    nock('https://monsters.kuali.co')
      .get('/api/v2/users/me')
      .reply(function () {
        expect(this.req.headers).toHaveProperty('authorization', token)
        return [200, user]
      })
    return request
      .get('/')
      .set('Host', 'monsters.kuali.co')
      .set('Authorization', token)
      .expect(200, user)
  })

  test('allows custom getAuthorizationToken', () => {
    const token = 'my-token'
    const request = setupApp(
      {
        getAuthorizationToken: req => {
          expect(req).toBeInstanceOf(express.request.constructor)
          return token
        }
      },
      (req, res) => res.send(req.user)
    )
    const user = {
      id: 'foobar',
      displayName: 'Test User',
      role: 'admin'
    }
    nock('https://monsters.kuali.co')
      .get('/api/v1/users/current')
      .reply(function () {
        expect(this.req.headers).toHaveProperty(
          'authorization',
          `Bearer ${token}`
        )
        return [200, user]
      })
    return request
      .get('/')
      .set('Host', 'monsters.kuali.co')
      .expect(200, user)
  })
})
