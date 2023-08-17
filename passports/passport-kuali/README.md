# passport-kuali

A Passport Strategy for Kuali Services.

# Installation

```
npm install passport passport-kuali
```

# Usage

```js
const express = require('express')
const passport = require('passport')
const KualiStrategy = require('passport-kuali')

passport.use(new KualiStrategy())
const requireUser = passport.authenticate('kuali', {
  session: false, // Enable if you are using sessions
  failWithError: true // This is enabled to pass whatever error happens to the express error handling middleware
})

const app = express()

app.use(passport.initialize())
app.get('/me', requireUser, (req, res, next) => {
  res.send(req.user)
})
```

# API

## `new KualiStrategy(options)`

Creates a new Kuali Strategy to be used in passport.

- `options.getUserEndpoint` - A function that takes in the express request and
  returns a string of the users endpoint. Default is:
  ```js
  () => '/api/v1/users/current'`
  ```

- `options.getAuthorizationToken` - A function that takes in the express request
  and returns the auth token to be passed onto the Kuali auth service.
  Default is:
  ```js
  req => {
    const authorization = req.headers['authorization'] || ''
    return authorization.replace(/^bearer /i, '').trim()
  }
  ```

- `options.getHost` - A function that takes in the express request and returns
  the host (or rather, origin) of the request. Should return protocol with the
  hostname. Ex: `https://monsters.kuali.co`.
  Default is:
  ```js
  req => {
    return url.format({
      protocol: `https:`,
      host: req.get('host')
    })
  }
  ```
  Note that if you are behind a proxy, you'll need to have your proxy forward
  the protocol and host for the default option to work. They can be forwarded on
  the following headers: `X-Forwarded-Proto` and `X-Forwarded-Host`, and you'll
  need to have your express app trust those proxy headers: `app.set('trust proxy', true)`.

- `options.mockUser` - This can be `true` or a function that takes in the
  express request object and should return a user. If `true` is passed, a mock
  user will be provided. If you would like to control the logic of when a user
  is to be mocked (for tests and such), pass in the function and do your logic
  there. By default, the user is not mocked, but if `true` is passed, the
  default function looks like this:
  ```js
  () => ({
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
  ```

- `options.name` - Change this if you want to have multiple "kuali" strategies
  implemented. Defaults to `kuali`, and is used when you call
  `passport.authenticate('kuali')`. If you change this option, you should change
  the `'kuali'` portion of the `passport.authenticate()` call.
