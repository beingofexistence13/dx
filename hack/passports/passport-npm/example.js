#!/usr/bin/env node
'use strict';

const passport = require('passport');
const NPMStrategy = require('./').NPMStrategy;
const NPMStrategyErrorHandler = require('./').NPMStrategyErrorHandler;
const router = require('express')();

// dictionary to store user sessions
const sessions = Object.create(null);
let sessionId = 1;

function authenticate(data, done) {
  const req = data.req;
  const name = data.name;
  const password = data.password;

  if (name === 'user' && password === 'pass') {
    done(null, {
      name
    });
    return;
  }
  done(null, false);
}

function serializeNPMToken(data, done) {
  const req = data.req;
  const name = data.name;
  const password = data.password;

  const token = JSON.stringify(sessionId++);
  // lets lock our session to only work if new connection has the same remote IP
  // you can test this using npm's `--local-address` config option
  const remoteAddress = req.socket.remoteAddress;
  sessions[token] = {
    user: {
      name
    },
    remoteAddress,
    time:Date.now()
  };
  console.log(`Saving Session for ${name} as Token: ${token}`);
  done(null, token);
}

function deserializeNPMToken(data, done) {
  const req = data.req;
  const token = data.token;

  console.log(`Session ${token} reviving.`);
  const session = JSON.parse(token);
  if (!(session in sessions)) {
    const err = new Error(`Unknown session ${token}, please login again.`);
    err.status = 401;
    done(err);
    return;
  }
  const cachedSession = sessions[session];
  if (req.socket.remoteAddress !== cachedSession.remoteAddress) {
    const err = new Error('Login tied to different IP, please login again.');
    err.status = 401;
    done(err);
    return;
  }
  // only keep session valid for 10 seconds
  const TTL = 10 * 1000 - (Date.now() - cachedSession.time);
  console.log(`Session ${token} TTL: ${TTL}`)
  if (TTL < 0) {
    const err = new Error('Session has expired, please login again');
    // this may not show a msg telling client login due to `npm` cli logic
    err.status = 401;
    done(err);
    return;
  }
  done(null, cachedSession.user);
}

passport.use(new NPMStrategy({
  router,
  authenticate,
  serializeNPMToken,
  deserializeNPMToken
}));

router.use(
  (req, res, next) => {
    console.log(`Incoming request: ${req.method} ${req.url}`);
    next(null);
  },
  passport.initialize(),
  passport.authenticate('npm', {
    // npm client doesn't have compatible sessions with PassportJS
    // - does not use a cookie
    // - uses bearer tokens and basic auth via HTTP authorization header
    session: false,
    // npm client doesn't have compatible response parsing with PassportJS
    failWithError: true
  }),
  // print out our errors to the server console
  (err, req, res, next) => {
    if (err) console.log(err.status, err);
    next(err);
  },
  NPMStrategyErrorHandler,
  (req, res) => {
    console.log(`Authenticated as ${req.user.name}`)
    res.end(`{}`);
  }
);

const server = require('http').createServer(router);
server.listen(process.env.PORT || 8080, (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('npm login proxy started on port', server.address().port);
})
