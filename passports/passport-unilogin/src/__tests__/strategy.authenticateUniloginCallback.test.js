import {assert} from 'chai';
import Strategy from '../strategy';
import sinon from 'sinon';

describe('Testing the authenticateUniloginCallback method of UNI-Login strategy', () => {

  let strategy = null;
  let sandbox = null;

  const fakeCallbackMethod = () => {};
  const options = {
    id: 'test',
    secret: 'secret',
    uniloginBasePath: 'path_to_unilogin',
    maxTicketAge: 0
  };

  beforeEach(() => {
    sandbox = sinon.sandbox.create();
    strategy = new Strategy(options, fakeCallbackMethod);
  });

  afterEach(() => {
    strategy = null;
    sandbox.restore();
  });

  it('Should call the given callback function without any errors', () => {
    const spy = sandbox.spy(strategy, 'callback');
    const req = {
      query: {
        auth: '31b166f19998267a16da4b3d76228ffc',
        timestamp: 0,
        user: 'some_user'
      }
    };

    strategy.authenticateUniloginCallback(req);
    assert.isTrue(spy.called, 'callback was called');
    const expected = '[[null,{"query":{"auth":"31b166f19998267a16da4b3d76228ffc","timestamp":0,"user":"some_user"}},{"auth":"31b166f19998267a16da4b3d76228ffc","timestamp":0,"user":"some_user"},null]]';
    assert.equal(JSON.stringify(spy.args), expected, 'Arguments given to callback function did match');

    const errorObject = spy.args[0][0];
    assert.isNull(errorObject, 'error object is null');

    const authObject = spy.args[0][1];
    assert.equal(authObject.query.auth, req.query.auth, 'the returned auth matches the given');
    assert.equal(authObject.query.timestamp, req.query.timestamp, 'the returned timestamp matches the given');
    assert.equal(authObject.query.user, req.query.user, 'the returned user matches the given');
  });

  it('Should call the given callback function with a auth comparison error', () => {
    const spy = sandbox.spy(strategy, 'callback');
    const req = {
      query: {
        auth: 'random',
        timestamp: 0,
        user: 'some_user'
      }
    };

    strategy.authenticateUniloginCallback(req);
    assert.isTrue(spy.called, 'callback was called');
    const expected = '[[{"auth":{"error":true,"message":"Auth/token calculation mismatch"},"timestamp":{"error":false,"message":null}},{"query":{"auth":"random","timestamp":0,"user":"some_user"}},{"auth":"random","timestamp":0,"user":"some_user"},null]]';
    assert.equal(JSON.stringify(spy.args), expected, 'Arguments given to callback function did match');

    const errorObject = spy.args[0][0];
    assert.isTrue(errorObject.auth.error, 'auth error object is true');
    assert.equal(errorObject.auth.message, 'Auth/token calculation mismatch', 'The returned error message was as expected');
    assert.isFalse(errorObject.timestamp.error, 'timestamp error object is false');

    const authObject = spy.args[0][1];
    assert.equal(authObject.query.auth, req.query.auth, 'the returned auth matches the given');
    assert.equal(authObject.query.timestamp, req.query.timestamp, 'the returned timestamp matches the given');
    assert.equal(authObject.query.user, req.query.user, 'the returned user matches the given');
  });

  it('Should call the given callback function with a timestamp comparison error', () => {
    const spy = sandbox.spy(strategy, 'callback');
    const req = {
      query: {
        auth: '31b166f19998267a16da4b3d76228ffc',
        timestamp: 19700101000000,
        user: 'some_user'
      }
    };

    strategy.maxTicketAge = 1;

    strategy.authenticateUniloginCallback(req);
    assert.isTrue(spy.called, 'callback was called');
    const expected = '[[{"auth":{"error":true,"message":"Auth/token calculation mismatch"},"timestamp":{"error":true,"message":"Ticket timestamp has exceeded the value defined in maxTicketAge (1)"}},{"query":{"auth":"31b166f19998267a16da4b3d76228ffc","timestamp":19700101000000,"user":"some_user"}},{"auth":"31b166f19998267a16da4b3d76228ffc","timestamp":19700101000000,"user":"some_user"},null]]';
    assert.equal(JSON.stringify(spy.args), expected, 'Arguments given to callback function did match');

    const errorObject = spy.args[0][0];
    assert.isTrue(errorObject.auth.error, 'auth error object is false');
    assert.equal(errorObject.auth.message, 'Auth/token calculation mismatch', 'The returned error message was as expected');
    assert.isTrue(errorObject.timestamp.error, 'timestamp error object is true');

    const authObject = spy.args[0][1];
    assert.equal(authObject.query.auth, req.query.auth, 'the returned auth matches the given');
    assert.equal(authObject.query.timestamp, req.query.timestamp, 'the returned timestamp matches the given');
    assert.equal(authObject.query.user, req.query.user, 'the returned user matches the given');
  });
});
