var MisfitStrategy = require('passport-misfit/strategy');
var should = require('should');

describe('MisfitStrategy', function() {
     
    before(function(done) {
        this.strategy = new MisfitStrategy(
            {clientID: '12345', clientSecret: 'secret'},
            function () {}
        );
        done();
    });

    it("should be named misfit", function(done) {
        this.strategy.name.should.eql('misfit');
        done();
    });

    it("should have a default user agent", function(done) {
        this.strategy._oauth2._customHeaders['User-Agent'].should.eql('passport-misfit');
        done();
    });

});