import {assert} from 'chai';
import Strategy from '../strategy';

describe('Testing the Constructor methos of UNI-Login strategy', () => {

  const fakeCallbackMethod = () => {};

  it('Should throw TypeError if no callback parameter is provided', () => {
    const shouldThrow = () => {new Strategy();}; // eslint-disable-line
    assert.throw(shouldThrow, TypeError, 'UniloginStrategy requires a verify callback');
  });

  it('Should throw TypeError if no options parameter is provided', () => {
    const shouldThrow = () => {new Strategy(fakeCallbackMethod);}; // eslint-disable-line
    assert.throw(shouldThrow, TypeError, `UniloginStrategy requires a 'id' parameter in the options object. I.e. {id: 'some_id'}`);
  });

  it('Should throw TypeError if no id key is found in options object', () => {
    const options = {};
    const shouldThrow = () => {new Strategy(options, fakeCallbackMethod);}; // eslint-disable-line
    assert.throw(shouldThrow, TypeError, `UniloginStrategy requires a 'id' parameter in the options object. I.e. {id: 'some_id'}`);
  });

  it('Should throw TypeError if no secret key is found in options object', () => {
    const options = {
      id: 'test'
    };
    const shouldThrow = () => {new Strategy(options, fakeCallbackMethod);}; // eslint-disable-line
    assert.throw(shouldThrow, TypeError, `UniloginStrategy requires a 'secret' parameter in the options object. I.e. {secret: 'sssshh'}`);
  });

  it('Should throw TypeError if no uniloginBasePath key is found in options object', () => {
    const options = {
      id: 'test',
      secret: 'secret'
    };
    const shouldThrow = () => {new Strategy(options, fakeCallbackMethod);}; // eslint-disable-line
    assert.throw(shouldThrow, TypeError, `UniloginStrategy requires a 'uniloginBasePath' parameter in the options object. I.e. {uniloginBasePath: 'https://sso.emu.dk/unilogin/login.cgi'}`);
  });

  it('Should throw TypeError if maxTicketAge is set but is not a number', () => {
    const options = {
      id: 'test',
      secret: 'secret',
      uniloginBasePath: 'path_to_unilogin',
      maxTicketAge: 'not_a_number'
    };
    const shouldThrow = () => {new Strategy(options, fakeCallbackMethod);}; // eslint-disable-line
    assert.throw(shouldThrow, TypeError, `Only numbers are accepted in maxTicketAge. I.e. {maxTicketAge: 30} Minimum value is 1. If 0 0r below is given the check will be ignored.`);
  });

  it('Should throw TypeError if maxTicketAge is not set', () => {
    const options = {
      id: 'test',
      secret: 'secret',
      uniloginBasePath: 'path_to_unilogin'
    };
    const shouldThrow = () => {new Strategy(options, fakeCallbackMethod);}; // eslint-disable-line
    assert.doesNotThrow(shouldThrow, TypeError, `Only numbers are accepted in maxTicketAge. I.e. {maxTicketAge: 30} Minimum value is 1. If 0 0r below is given the check will be ignored.`);
  });

  it('Should the values provided as parmaters on the object', () => {
    const options = {
      id: 'test',
      secret: 'secret',
      uniloginBasePath: 'path_to_unilogin',
      maxTicketAge: 0
    };

    const strategyInstance = new Strategy(options, fakeCallbackMethod);

    assert.equal(strategyInstance.id, options.id, 'the id parmater is a match');
    assert.equal(strategyInstance.secret, options.secret, 'the secret parmater is a match');
    assert.equal(strategyInstance.uniloginBasePath, options.uniloginBasePath, 'the uniloginBasePath parmater is a match');
    assert.equal(strategyInstance.maxTicketAge, options.maxTicketAge, 'the id parmater is a match');
    assert.equal(strategyInstance.callback, fakeCallbackMethod, 'the callback methos is a match');

    // Asserting non-configurable options
    assert.equal(strategyInstance.name, 'unilogin', 'the name is set to unilogin');
  });
});
