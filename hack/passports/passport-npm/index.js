'use strict';

const bodyParser = require('body-parser');
const Strategy = require('passport-strategy');
const BasicStrategy = require('passport-http').BasicStrategy;
const BearerStrategy = require('passport-http-bearer');

exports.NPMStrategyErrorHandler = (err,req,res,next) => {
  if (!err) {
    return void next(null);
  }
  res.statusCode = err.status || 500;
  // passport can send error messages in a few different ways
  let msg = err.message;
  if (err.info) {
    if (typeof err.info === 'string') msg = err.info;
    msg = err.info.message || err.message;
  }
  res.end(JSON.stringify({'error': msg}, null, 2));
};
const LOGIN_URL_PREFIX = '/-/user/org.couchdb.user:';
exports.NPMStrategy = class NPMStrategy extends Strategy {
  constructor(options) {
    options = options || {};
    const authenticate = options.authenticate;
    const serializeNPMToken = options.serializeNPMToken;
    const deserializeNPMToken = options.deserializeNPMToken;
    const router = options.router;
    if (typeof authenticate !== 'function') {
      throw TypeError('Required option "authenticate" must be a function');
    }
    if (typeof serializeNPMToken !== 'function') {
      throw TypeError('Required option "serializeNPMToken" must be a function');
    }
    if (typeof deserializeNPMToken !== 'function') {
      throw TypeError('Required option "deserializeNPMToken" must be a function');
    }
    super();
    this.name = 'npm';
    if (router && typeof router.put === 'function') {
      router.put(`${LOGIN_URL_PREFIX}*`, bodyParser.json(),
        this.updateNPMUser.bind(this)
      );
    }
    this.authfn = authenticate;
    this.serializeNPMToken = serializeNPMToken;
    this.deserializeNPMToken = deserializeNPMToken;
    this.basic = new BasicStrategy({
      passReqToCallback: true
    }, (req, name, password, verify) =>
      void this.authfn({
        req,
        name,
        password
      }, (err, user) =>
        void verify(err, err ? null : user)
      ))
    this.bearer = new BearerStrategy({
      passReqToCallback: true
    }, (req, token, done) => 
      void this.deserializeNPMToken({req, token}, done));
    Object.freeze(this);
  }

  authenticate(req, options) {
    const mixin = {
      success: this.success,
      fail: this.fail,
      redirect: this.redirect,
      pass: this.pass,
      error: this.error,
    };
    if (req.headers['authorization']) {
      const authorization = req.headers['authorization'];
      if (/^Basic\s/.test(authorization)) {
        const clone = Object.assign(Object.create(this.basic), mixin);
        return void this.basic.authenticate.call(clone, req, options);
      }
      if (/^Bearer\s/.test(authorization)) {
        const clone = Object.assign(Object.create(this.bearer), mixin);
        return void this.bearer.authenticate.call(clone, req, options);
      }
    }
    this.fail();
  }

  updateNPMUser(req, res) {
    const name = req.body.name;
    const password = req.body.password;
    if (req.url.slice(LOGIN_URL_PREFIX.length) !== name) {
      res.statusCode = 400;
      res.end(JSON.stringify(
        {message: 'Name mismatch in url and body'}
      ));
    }
    this.authfn({
      req,
      name,
      password
    }, (authenticateError, user) => {
      if (authenticateError) {
        res.statusCode = authenticateError.status || 500;
        return void res.end(JSON.stringify(
          {message: authenticateError.message}
        ));
      }
      if (!user) {
        res.statusCode = 401;
        return void res.end(JSON.stringify(
          {message: 'Unauthorized'}
        ));
      }
      this.serializeNPMToken({
        req,
        name,
        password
      }, (serializeError, token) => {
        if (!token) {
          serializeError = new Error(`Cannot serialize to a coersive falsey token`);
        }
        if (serializeError) {
          res.statusCode = serializeError.status || 500;
          return void res.end(JSON.stringify(
            {message: serializeError.message}
          ));
        }
        res.statusCode = 201;
        res.end(JSON.stringify({token}));
      });
    });
  }
}
Object.freeze(exports.NPMStrategy);
