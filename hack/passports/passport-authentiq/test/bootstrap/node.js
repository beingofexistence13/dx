var chai = require('chai');
var assert = require('assert');
var should  = require('should');
chai.use(require('chai-passport-strategy'));

global.expect = chai.expect;
global.assert = assert;
global.should = should;