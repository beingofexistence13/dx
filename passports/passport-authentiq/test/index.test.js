var AuthentiqStrategy = require('../lib');

describe('passport-authentiq', function (){

    it('should report a version', function () {
        assert.ok(AuthentiqStrategy.version);
        assert.equal(typeof(AuthentiqStrategy.version),'string');
        assert.ok(AuthentiqStrategy.version.length > 0);
    });

    it('should export Strategy constructor', function () {
        expect(AuthentiqStrategy.Strategy).to.be.a('function');
    });

    it('should export Strategy constructor as module', function () {
        expect(AuthentiqStrategy).to.be.a('function');
        expect(AuthentiqStrategy).to.equal(AuthentiqStrategy.Strategy);
    });
});
