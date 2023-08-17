import {assert} from 'chai';
import Strategy from '../strategy';
import sinon from 'sinon';

describe('Testing the requestNewUniLoginSession method of UNI-Login strategy', () => {

  let strategy = null;
  let sandbox = null;

  const fakeCallbackMethod = () => {};
  const _options = {
    id: 'test',
    secret: 'secret',
    uniloginBasePath: 'path_to_unilogin',
    maxTicketAge: 0
  };

  beforeEach(() => {
    sandbox = sinon.sandbox.create();
    strategy = new Strategy(_options, fakeCallbackMethod);
  });

  afterEach(() => {
    strategy = null;
    sandbox.restore();
  });

  // Testing the requestNewUniLoginSession method
  it('Should return the redirect method with a correctly formatted URL when a returURL is provided in the options object', () => {
    const req = {};
    const options = {
      returURL: 'http://some.dummy.url'
    };

    strategy.redirect = () => {};
    const spy = sandbox.spy(strategy, 'redirect');

    strategy.requestNewUniLoginSession(req, options);
    assert.isTrue(spy.called, 'the redirect method was called');

    const redirectParam = spy.args[0][0];
    const expected = 'path_to_unilogin?id=test&returURL=http://some.dummy.url&path=aHR0cDovL3NvbWUuZHVtbXkudXJs&auth=666f00db6b378a1455c6d153cb4bfe13';
    assert.equal(redirectParam, expected, 'the returned string was formatted as expected');
  });

  it('Should return the redirect method with a correctly formatted URL when no returURL is provided in the options object', () => {
    const req = {
      protocol: 'protocol',
      get: () => 'host',
      path: 'path'
    };
    const options = {};

    strategy.redirect = () => {};
    const spy = sandbox.spy(strategy, 'redirect');

    strategy.requestNewUniLoginSession(req, options);
    assert.isTrue(spy.called, 'the redirect method was called');

    const redirectParam = spy.args[0][0];
    const expected = 'path_to_unilogin?id=test&returURL=protocol://hostpath&path=cHJvdG9jb2w6Ly9ob3N0cGF0aA%3D%3D&auth=1d39210b4de685bb307895137d40e76c';
    assert.equal(redirectParam, expected, 'the returned string was formatted as expected');
  });
});
