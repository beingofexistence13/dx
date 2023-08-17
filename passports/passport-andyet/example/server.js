var Hapi = require('hapi');
var AndyetStrategy = require('passport-andyet').Strategy;

var config = {
    hostname: 'localhost',
    port: 3003,
    urls: {
        failureRedirect: '/auth',
        successRedirect: '/'
    },
    andyet: {
        clientId: 'YOUR_CLIENT_ID',
        clientSecret: 'YOUR_CLIENT_SECRET'
    }
};

var plugins = {
    yar: {
        cookieOptions: {
            password: 'andyetauth',
            isSecure: false
        }
    },
    travelogue: config
};

var server = new Hapi.Server(config.hostname, config.port);
server.pack.require(plugins, function (err) {
    if (err) throw err;
});

server.auth.strategy('passport', 'passport');

var Passport = server.plugins.travelogue.passport;

Passport.use(new AndyetStrategy(config.andyet, function (accessToken, refreshToken, profile, done) {
    return done(null, profile);
}));

Passport.serializeUser(function (user, done) {
    done(null, user);
});

Passport.deserializeUser(function (obj, done) {
    done(null, obj);
});

server.route({
    method: 'GET',
    path: '/',
    config: { auth: 'passport' },
    handler: function (request, reply) {
        reply().redirect('/home');
    }
});

server.route({
    method: 'GET',
    path: '/home',
    config: { auth: 'passport' },
    handler: function (request, reply) {
        reply('Hello, ' + request.session.user.username);
    }
});

server.route({
    method: 'GET',
    path: '/auth',
    config: {
        auth: false,
        handler: function (request, reply) {
            Passport.authenticate('andyet')(request, reply);
        }
    }
});

server.route({
    method: 'GET',
    path: '/auth/andyet/callback',
    config: {
        auth: false,
        handler: function (request, reply) {
            Passport.authenticate('andyet')(request, reply);
        }
    }
});

server.start(function () {
    console.log('Server running at: ' + server.info.uri);
});
