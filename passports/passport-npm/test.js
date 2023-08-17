'use strict';

const NPMStrategy = require('./').NPMStrategy;
const NPMStrategyErrorHandler = require('./').NPMStrategyErrorHandler;

const tap = require('tap');
const http = require('http');
const express = require('express');
const passport = require('passport');
const spawn = require('child_process').spawn;
const createReadStream = require('fs').createReadStream;
const readFileSync = require('fs').readFileSync;
const writeFileSync = require('fs').writeFileSync;
const path = require('path');
const tmp = require('tmp');

// FIXTURES
// where we will store our test's .npmrc
const npmrc = path.join(__dirname,'fixture/tmp/.npmrc');

// for blanking out npmrc globalconfig/userconfig
const blank = path.join(__dirname,'fixture/blank');

const LOGIN_TOKEN = JSON.stringify({token: false});
tap.test('token serialization', test =>
  testNPM({
    test,
    expected: {
      type: 'basic',
      password: 'pass',
      name: 'user',
      generated_token: LOGIN_TOKEN
    },
    command: 'login',
    stdin_file: path.join(__dirname,'fixture/login.txt'),
    expected_npmrc: path.join(__dirname,'fixture/login_npmrc.txt')
  })
);
tap.test('login invalid', test =>
  testNPM({
    test,
    expected: {
      type: 'basic',
      password: 'INVALID',
      name: 'INVALID'
    },
    command: 'view',
    args: ['passport-npm', '--always-auth=true', '--fetch-retries=0'],
    expected_exit: 1,
  })
);
tap.test('token sending', test =>
  testNPM({
    test,
    expected: {
      type: 'token',
      token: LOGIN_TOKEN,
    },
    command: 'get',
    args: ['passport-npm', '--always-auth=true'],
    starting_npmrc: path.join(__dirname,'fixture/login_npmrc.txt'),
    expected_npmrc: path.join(__dirname,'fixture/login_npmrc.txt')
  })
);
tap.test('token invalid', test =>
  testNPM({
    test,
    expected: {
      type: 'token',
      token: 'INVALID',
    },
    command: 'view',
    args: ['passport-npm', '--always-auth=true', '--fetch-retries=0'],
    expected_exit: 1,
    starting_npmrc: path.join(__dirname,'fixture/login_npmrc.txt'),
    expected_npmrc: path.join(__dirname,'fixture/login_npmrc.txt')
  })
);

function createTestServer(test, options, callback) {
  options = options || {};
  const type = options.type || 'none'; // basic || token || none,
  const token = options.token || null;
  const name = options.name || null;
  const password = options.password || null;
  const generated_token = options.generated_token || null;

  const router = express();
  const server = http.createServer(router);
  server.listen(0, '127.0.0.1', (err)=> {
    if (err) return void callback(err, null);
    test.tearDown(server.close.bind(server));

    // check the login of a user and create a user object
    // set user to `false` if login is invalid
    function authenticate(found, done) {
      if (type !== 'basic') {
        test.fail(new Error(`unexpected basic login, expected ${type}`));
      }
      else {
        const pass = name === found.name
          && password === found.password;
        if (pass) {
          done(null, {});
        }
        else {
          done(new Error('invalid login'));
        }
      }
    }
    // creates a string for `npm` to store in user .npmrc
    // send a falsey string to not use tokens (not recommended)
    //
    // use this to prevent `npm` from storing username and password on disk
    // commonly used to store an access token
    function serializeNPMToken(found, done) {
      if (type !== 'basic') {
        test.fail(new Error(`unexpected serialization (basic login workflow invoked), expected login type ${type}`));
      }
      done(null, generated_token);
    }
    // similar to `authenticate`
    //
    // consumes the result token string serializeToken
    function deserializeNPMToken(found, done) {
      if (type !== 'token') {
        test.fail(new Error(`unexpected token login, expected ${type}`));
      }
      test.equal(found.token, token, 'should have the right token string');
      done(null, {});
    }

    passport.use(new NPMStrategy({
      // router needs to support router.put(...middleware)
      router,
      authenticate,
      serializeNPMToken,
      deserializeNPMToken
    }));
    router.use(
      passport.initialize(),
      passport.authenticate('npm', {
        // npm client doesn't have compatible sessions with PassportJS
        // - does not use a cookie
        // - uses bearer tokens and basic auth via HTTP authorization header
        session: false,
        // npm client doesn't have compatible response parsing with PassportJS
        // error.status will be the expected status code of the error
        // NOTE: `npm` does not like status codes that are not:
        //   200, 201, 400, 401, 403, or 500
        failWithError: true
      }),
      // function to send back responses that npm client understands
      NPMStrategyErrorHandler,
      (req, res) => {res.end('{}');}
    );
    callback(null, server); 
  });
}

// creates a new server to test against
// takes starting npmrc copies to a tmp file
// runs npm command w/ args against tmp file userconfig
// - has blank globalconfig
// - passes stdin_file over stdin
// npmrc files can use variables:
// - $PORT : testing server port
// - $TOKEN : the generated_token
function testNPM(options) {
  options = options || {};
  const test = options.test;
  const expected =  options.expected || {};
  const stdin_file =  options.stdin_file || blank;
  const command = options.command;
  const expected_exit =  options.expected_exit || 0;
  const args =  options.args || [];
  const starting_npmrc =  options.starting_npmrc || blank;
  const expected_npmrc =  options.expected_npmrc || blank;
  
  createTestServer(test, expected, (err, server) => {
    if (err) return void test.fail(err);

    const PORT = server.address().port;
    function interpolate(buf) {
      return buf.toString().replace(/\$(?:$|PORT|TOKEN)/g, (token) => {
        return {
          $: '$',
          PORT,
          TOKEN: expected.generated_token
        }[token.slice(1)];
      });
    }

    tmp.file((err, tmp_npmrc, fd, cleanup) => {
      if (err) return void test.fail(err);
      test.tearDown(()=>cleanup());
      let expected_body;
      try {
        writeFileSync(tmp_npmrc, interpolate(readFileSync(starting_npmrc)));
        expected_body = interpolate(readFileSync(expected_npmrc));
      } catch(e) {
        return void test.fail(e);
      }
      const pid = spawn('npm', [
          `--registry=http://127.0.0.1:${PORT}`,
          `--userconfig=${tmp_npmrc}`,
          `--globalconfig=${blank}`,
          `--loglevel=silent`,
          command
        ].concat(args), {
          // npm demands stdout/err be a tty
          stdio: ['pipe', 'inherit', 'inherit'],
          env: {PATH:process.env.PATH}
        });
      createReadStream(stdin_file).pipe(pid.stdin);
      pid.on('exit', (code, signal) => {
        test.equal(code, expected_exit, `should have npm exit code ${expected_exit}`);
        let found_body;
        try {
          found_body = readFileSync(tmp_npmrc).toString();
        }
        catch (e) {
          return void test.fail(e);
        }
        test.equal(found_body, expected_body, 'should have the correct npmrc contents')
        test.end();
      });
    });
  });
}