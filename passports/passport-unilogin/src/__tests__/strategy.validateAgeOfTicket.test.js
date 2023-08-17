import {assert} from 'chai';
import Strategy from '../strategy';
import sinon from 'sinon';
import moment from 'moment';

describe('Testing the validateAgeOfTicket method of UNI-Login strategy', () => {

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

  // Testing the validateAgeOfTicket method
  it('Should return a positive error object', () => {
    const ticket = {
      timestamp: '19700101000000'
    };

    const expected = {
      error: true,
      message: 'Ticket timestamp has exceeded the value defined in maxTicketAge (0)'
    };

    const result = strategy.validateAgeOfTicket(ticket);
    assert.equal(result.error, expected.error, 'value of error is set as expected');
    assert.equal(result.message, expected.message, 'value of message is set as expected');
  });

  it('Should return a negative error object', () => {
    const ticket = {
      timestamp: moment().format('YYYYMMDDHHmmss')
    };

    const expected = {
      error: false,
      message: null
    };

    strategy.maxTicketAge = 10;
    const result = strategy.validateAgeOfTicket(ticket);
    assert.equal(result.error, expected.error, 'value of error is set as expected');
    assert.equal(result.message, expected.message, 'value of message is set as expected');
  });
});
