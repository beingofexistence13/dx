var vows = require('vows');
var assert = require('assert');
var util = require('util');
var deskcom = require('passport-deskcom');

vows.describe('passport-deskcom').addBatch({
	'module': {
		'should report a version' : function (x) {
			assert.isString(deskcom.version);
		}
	}
}).export(module);
