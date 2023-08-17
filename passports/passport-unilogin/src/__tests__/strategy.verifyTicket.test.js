import {assert} from 'chai';
import Strategy from '../strategy';
import sinon from 'sinon';

describe('Testing the verifyTicket method of UNI-Login strategy', () => {

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

  it('Should return a positive error object', () => {
    const ticket = {
      auth: 'hash',
      timestamp: '19700101000000',
      user: 'bubber'
    };

    const expected = {
      error: true,
      message: 'Auth/token calculation mismatch'
    };

    const result = strategy.verifyTicket(ticket);
    assert.equal(result.error, expected.error, 'value of error is set as expected');
    assert.equal(result.message, expected.message, 'value of message is set as expected');
  });

  it('Should return a negative error object', () => {
    const ticket = {
      auth: 'hash',
      timestamp: '19700101000000',
      user: 'bubber'
    };

    ticket.auth = strategy.md5(ticket.timestamp + options.secret + ticket.user);

    const expected = {
      error: false,
      message: null
    };

    const result = strategy.verifyTicket(ticket);
    assert.equal(result.error, expected.error, 'value of error is set as expected');
    assert.equal(result.message, expected.message, 'value of message is set as expected');
  });
});
