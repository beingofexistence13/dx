import {assert} from 'chai';
import Strategy from '../strategy';
import crypto from 'crypto';

describe('Testing the md5 method of the UNI-Login strategy', () => {

  let strategy = null;

  const fakeCallbackMethod = () => {};
  const options = {
    id: 'test',
    secret: 'secret',
    uniloginBasePath: 'path_to_unilogin',
    maxTicketAge: 0
  };

  beforeEach(() => {
    strategy = new Strategy(options, fakeCallbackMethod);
  });

  afterEach(() => {
    strategy = null;
  });

  // Testing the md5 method
  it('Should MD5-hash a string', () => {
    const string = 'teststring';
    const expected = crypto.createHash('md5').update(string).digest('hex');
    const result = strategy.md5(string);

    assert.equal(expected, result, 'Strings are matching');
  });
});
