var Strategy = require('./oauth2');
var DataportenUser = require('./DataportenUser').DataportenUser;

var Passport = require('passport').Passport;


var Setup = function(opts) {
	this.opts = opts;
	this.init();
};

Setup.prototype.init = function() {
	this.passport = new Passport();
	this.passport.serializeUser(function(user, cb) {
		cb(null, user.serialize());
	});

	this.passport.deserializeUser(function(packed, cb) {
		cb(null, DataportenUser.unserialize(packed));
	});

	this.passport.use(new Strategy(this.opts,
	    function(accessToken, refreshToken, profile, done) {
	    	profile.loadGroups().then(function() {
	    			done(null, profile);
	    		}).catch(function(err) {
	    			console.error("ERROR", err);
	    			done(err);
	    		});
	    }
	));
}

Setup.prototype.setupCallback = function(app) {

	var that = this;
	app.get('/auth/dataporten/callback',
		that.passport.authenticate('dataporten', { failureRedirect: '/login' }),
		function(req, res) {
			// Successful authentication, redirect home.
			var redirTo = req.session.redirectToAfterLogin || '/';
			// console.log("Redirect to " + redirTo);
			res.redirect(redirTo);
		});
}

Setup.prototype.setupAuthenticate = function(app, path) {
	app.get(path, this.passport.authenticate('dataporten'));
}
Setup.prototype.setupLogout = function(app, path) {
	app.get(path, function(req, res){
		req.logout();
		res.redirect('/');
	});
}



exports.Setup = Setup;
