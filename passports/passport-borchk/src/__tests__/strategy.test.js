'use strict';

/**
 * @file
 * Testing the Strategy constructor
 */

import Strategy from '../strategy';
import {expect} from 'chai';

describe('Strategy constructor', () => {
  const verifyCallback = () => {};
  let strategy;

  beforeEach(() => {
    strategy = new Strategy(verifyCallback);
  });

  it('should be named borchk', () => {
    expect(strategy.name).to.equal('borchk');
  });

  it('should throw if constructed without a verify callback', () => {
    expect(() => {
      const s = new Strategy(); // eslint-disable-line
    }).to.throw(TypeError, 'BorchkStrategy requires a verify callback');
  });
});
