/* global describe, it, expect */

var Strategy    = require('..');

// ## //

describe('passport-ionisx', function () {
    it('should export Strategy constructor directly from package', function () {
        expect(Strategy).to.be.a('function');
        expect(Strategy).to.equal(Strategy.Strategy);
    });

    it('should export Strategy constructor', function () {
        expect(Strategy.Strategy).to.be.a('function');
    });
});
