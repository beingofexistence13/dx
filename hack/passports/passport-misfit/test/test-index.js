var misfit = require('passport-misfit');
var should = require('should');

describe("passport-misfit", function() {
    it("should have a version", function(done) {
        misfit.version.should.startWith('0.');
        done();
    });
});