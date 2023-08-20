import {assert} from 'chai';
import Strategy from '../strategy';
import sinon from 'sinon';

describe('Testing the verified method of UNI-Login strategy', () => {

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

  // Testing the verified method
  it('The verified method should call the error method on super class when err parameter is truthy', () => {
    strategy.error = () => {};
    const spy = sandbox.spy(strategy, 'error');

    assert.isFalse(spy.called, 'The error method haven\'t been called');
    strategy.verified('error');
    assert.isTrue(spy.called, 'The error method have been called');
  });

  it('The verified method should call the fail method on super class when user and err parameters are falsy', () => {
    strategy.fail = () => {};
    const spy = sandbox.spy(strategy, 'fail');

    assert.isFalse(spy.called, 'The fail method haven\'t been called');
    strategy.verified(null, false);
    assert.isTrue(spy.called, 'The fail method have been called');
  });

  it('The verified method should call the success method on super class when err parameter is falsy and user parameter is truthy', () => {
    strategy.success = () => {};
    const spy = sandbox.spy(strategy, 'success');

    assert.isFalse(spy.called, 'The error method haven\'t been called');
    strategy.verified(null, {});
    assert.isTrue(spy.called, 'The error method have been called');
  });
});
