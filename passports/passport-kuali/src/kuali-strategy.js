'use strict'

const url = require('url')
const Strategy = require('passport-strategy')
const request = require('request-promise')
const pkg = require('../package.json')

const ERRORS = {
  NO_AUTHORIZATION: 'Missing Authorization Token'
}

const defaultOptions = {
  name: 'kuali',
  getUserEndpoint: () => '/api/v1/users/current',
  getAuthorizationToken: req => {
    const authorization = req.headers['authorization'] || ''
    return authorization.replace(/^bearer /i, '').trim()
  },
  getHost: req => {
    return url.format({
      protocol: `https:`,
      host: req.get('host')
    })
  },
  mockUser: false
}

const defaultMockUser = () => ({
  id: '59ef62388eb4e253149451fd',
  username: 'mockuser',
  displayName: 'mockuser',
  impersonatedBy: null,
  approved: true,
  apps: {
    appBuilder: true,
    groups: true,
    workflow: true,
    cm: true,
    users: true
  },
  createdAt: 1508860880459,
  email: 'mockuser@example.com',
  firstName: null,
  lastName: null,
  groupId: null,
  name: 'Mock User',
  phone: null,
  role: 'admin',
  schoolId: null,
  scopesCm: '["OVERLORD","EDIT_CONFIG"]',
  ssoId: null,
  updatedAt: 1508860880459,
  updatedBy: {
    id: '59ef62388eb4e253149451fd'
  }
})

class KualiStrategy extends Strategy {
  constructor (options) {
    super()
    this.options = Object.assign({}, defaultOptions, options)
    if (this.options.mockUser === true) {
      this.options.mockUser = defaultMockUser
    }
    this.name = this.options.name
  }

  authenticate (req) {
    if (typeof this.options.mockUser === 'function') {
      const user = this.options.mockUser(req)
      return this.success(user)
    }

    const token = this.options.getAuthorizationToken(req)

    if (!token) {
      return this.fail({ message: ERRORS.NO_AUTHORIZATION }, 400)
    }

    const host = this.options.getHost(req)
    const currentUserEndpoint = this.options.getUserEndpoint(req)

    request({
      method: 'GET',
      uri: `${host}${currentUserEndpoint}`,
      headers: {
        Authorization: `Bearer ${token}`,
        'User-Agent': `Passport-Kuali-Strategy ${pkg.version}`
      },
      json: true,
      resolveWithFullResponse: true,
      simple: false
    })
      .then(response => {
        if (response.statusCode === 200) return this.success(response.body)
        if (response.statusCode === 401) return this.fail(response.body, 401)
        this.error(
          Object.assign(new Error('Error attempting to authenticate'), {
            statusCode: response.statusCode,
            kualiError: response.body
          })
        )
      })
      .catch(err => this.error(err))
  }
}

module.exports = KualiStrategy
