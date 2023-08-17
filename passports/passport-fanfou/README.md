# passport-fanfou

copied from [passport-twitter](https://github.com/jaredhanson/passport-twitter) by [Jared Hanson](http://github.com/jaredhanson)

## Installation

    $ npm install passport-fanfou

## Usage

#### For StrongLoop

If you are using [loopback-component-passport](http://github.com/strongloop/loopback-component-passport), add fanfou-login config to providers.json

```
  "fanfou-login": {
    "provider": "fanfou",
    "module": "passport-fanfou",
    "callbackURL": "/auth/fanfou/callback",
    "authPath": "/auth/fanfou",
    "callbackPath": "/auth/fanfou/callback",
    "successRedirect": "/successUrl",
    "failureRedirect": "/failureUrl",
    "consumerKey": "your_consumer_key",
    "consumerSecret": "your_consumer_secret",
    "failureFlash": true
  }
```

## License

[The MIT License](http://opensource.org/licenses/MIT)

