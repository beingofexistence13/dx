var idStrategy = require('..');

describe('passport-idsus', function() {

	it('should export Strategy constructor', function() {
		expect(idStrategy).to.be.a('function');
	});

	it('should export Strategy constructor as module', function() {
		expect(idStrategy.Strategy).to.be.a('function');
		expect(idStrategy.Strategy).to.be.equal(idStrategy);
	});

});
