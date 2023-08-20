/**
 * Author: Michael Weibel <michael.weibel@gmail.com>
 * License: MIT
 */
"use strict";

var passport = require('passport')
	, util = require('util');

function StrategyMock(user) {
	this.name = 'test';
	this.fakeUser = user;
	passport.Strategy.call(this);
}

util.inherits(StrategyMock, passport.Strategy);

StrategyMock.prototype.authenticate = function authenticate(req) {

    req.flash = function(t) { 
    };

    var self = this;

 	self.success(this.fakeUser);
}

module.exports = StrategyMock;
