import {assert} from 'chai';
import Strategy from '../strategy';
import sinon from 'sinon';

describe('Testing the authenticate method of UNI-Login strategy', () => {

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

  it('Should call the requestNewUniLoginSession method when req.query is empty', () => {
    const mock = sandbox.mock(strategy);
    const expectations = mock.expects('requestNewUniLoginSession');
    const req = {
      query: {}
    };
    const authOptions = {
      returURL: 'retur_url'
    };

    strategy.authenticate(req, authOptions);
    assert.isTrue(expectations.called, 'requestNewUniLoginSession was called');

    mock.restore();
  });

  it('Should call the fail method when req.query is not empty but doesn\'t cotain the necessary auth param', () => {
    strategy.fail = () => {};
    const mock = sandbox.mock(strategy);
    const expectations = mock.expects('fail');
    const req = {
      query: {
        timestamp: '19700101000000',
        user: 'some_suer'
      }
    };
    const authOptions = {
      returURL: 'retur_url'
    };

    strategy.authenticate(req, authOptions);
    assert.isTrue(expectations.called, 'strategy.fail was called');

    mock.restore();
  });

  it('Should call the fail method when req.query is not empty but doesn\'t cotain the necessary timestamp param', () => {
    strategy.fail = () => {};
    const mock = sandbox.mock(strategy);
    const expectations = mock.expects('fail');
    const req = {
      query: {
        auth: 'some_hash',
        user: 'some_suer'
      }
    };
    const authOptions = {
      returURL: 'retur_url'
    };

    strategy.authenticate(req, authOptions);
    assert.isTrue(expectations.called, 'strategy.fail was called');

    mock.restore();
  });

  it('Should call the fail method when req.query is not empty but doesn\'t cotain the necessary user param', () => {
    strategy.fail = () => {};
    const mock = sandbox.mock(strategy);
    const expectations = mock.expects('fail');
    const req = {
      query: {
        auth: 'some_hash',
        timestamp: '19700101000000'
      }
    };
    const authOptions = {
      returURL: 'retur_url'
    };

    strategy.authenticate(req, authOptions);
    assert.isTrue(expectations.called, 'strategy.fail was called');

    mock.restore();
  });

  it('Should call the authenticateUniloginCallback method when all the necessary params are available in the query object', () => {
    const mock = sandbox.mock(strategy);
    const expectations = mock.expects('authenticateUniloginCallback');
    const req = {
      query: {
        auth: 'some_hash',
        timestamp: '19700101000000',
        user: 'some_suer'
      }
    };
    const authOptions = {
      returURL: 'retur_url'
    };

    strategy.authenticate(req, authOptions);
    assert.isTrue(expectations.called, 'authenticateUniloginCallback was called');
    mock.restore();
  });
});
