'use strict';

import Strategy from './../strategy'; // eslint-disable-line
import {assert} from 'chai'; // eslint-disable-line

describe('passport-local', () => {

  it('should export Strategy constructor directly from package', () => {
    assert.isFunction(Strategy);
  });
});
