# passport-ethereum

[Passport](http://passportjs.org/) strategy for authenticating with an ethereum address
and signature.

This module lets you authenticate using an ethereum address and signature in your Node.js
applications. By plugging into Passport, ethereum authentication can be easily and
unobtrusively integrated into any application or framework that supports
[Connect](http://www.senchalabs.org/connect/)-style middleware, including
[Express](http://expressjs.com/).

## Install

    $ npm install passport-ethereum

## Usage

#### Configure Strategy

The ethereum authentication strategy authenticates users using a address and
signature. The strategy requires a `verify` callback, which accepts these
credentials and calls `done` providing a user.

    passport.use(new EthereumStrategy(
      function(address, signature, done) {
        web3.personal.sign(
          web3.fromUtf8(`Sign in use ${address} with some nonce string`),
            web3.eth.coinbase,
            (error, data) => {
              if (error) {
                return done(error);
              } else {
                if (data == signature) {
                  User.findOneOrCreate({ address: address }, function (err, user) {
                    if (err) {
                      return done(err);
                    } else {
                      return done(null, user);
                    }
                  });
                }
              }
            }
        );
      }
    ));

#### Authenticate Requests

Use `passport.authenticate()`, specifying the `'ethereum'` strategy, to
authenticate requests.

For example, as route middleware in an [Express](http://expressjs.com/)
application:

    app.post('/signature',
      passport.authenticate('ethereum', { failureRedirect: '/signature' }),
      function(req, res) {
        res.redirect('/');
      });

## Examples

For complete, working examples, refer to the multiple [examples](https://github.com/rushairer/passport-ethereum/tree/master/examples) included.

## Tests

    $ npm install
    $ npm test

## Credits

-   [Aben](http://github.com/rushairer)

## License

[The MIT License](http://opensource.org/licenses/MIT)

Copyright (c) 2019 Abenx <[https://abenx.com/](https://abenx.com/)>
