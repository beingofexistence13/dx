## `npm` Workflow

### `npm login`

1. Prompts for `username`, `password`, and `email`.

2. Sends up the data:

PUT $registry/-/user/org.couchdb.user:$name

```json
{
  "name": $name,
  "password": ...,
  "email": ...
}
```

3. Expects the following

Status | Outcome | Affect
--- | --- | ---
201 | Success | exit 0
400 | Failure | retry with backoff then exit 1
401 | Invalid Credentials | exit 1 
500 | Failure | retry with backoff then exit 1

On success if you wish to use token based login (recommended) your result must contain a "token" field:

```json
{"token":...}
```

If the result has a `"token"` it will saved in your npm userconfig under the $registry namespace w/ _authToken:

```ini
//localhost:9999/:_authToken="value of token"
```

Otherwise, your username, password, and email will be saved. Also, `always-auth` will be set to `false`:

```ini
//localhost:9999/:_password="cGFzcw=="
//localhost:9999/:username=user
//localhost:9999/:email=email@test.local
//localhost:9999/:always-auth=false
```

### `npm` HTTP requests

The `npm` client will send `Authorization:` HTTP headers based upon your configuration. It will not always use authentication, unless you set `always-auth` to `true` (recommended).

If `_authToken` is present for a registry, it will send a `Bearer` header like:

```http
Authorization: Bearer value of token
```

Otherwise if `username`, and `password` are in your config it will send a a `Basic` header like:

```http
Authorization: Basic BASE64("username:password")
```

## `npm` Client Configuration

See the relevant `npm` Configuration Options that may relate to your authentication strategies.

### [registry](https://docs.npmjs.com/misc/config#registry)

This should point to the server the `npm` client wishes to talk to.

### [always-auth](https://docs.npmjs.com/misc/config#always-auth)

Will always send authentication on every request, even GET requests. Should generally be set to true for protected services.

Note: If your npm configuration has username/password via `_auth` (check your `.npmrc` files) it will send Basic auth. If your configuration has a token, it will uses Bearer auth.

### Connection settings

* [ca](https://docs.npmjs.com/misc/config#ca)

* [cafile](https://docs.npmjs.com/misc/config#cafile)

* [cert](https://docs.npmjs.com/misc/config#cert)

* [key](https://docs.npmjs.com/misc/config#key)

* [local-address](https://docs.npmjs.com/misc/config#local-address)

* [https-proxy](https://docs.npmjs.com/misc/config#https-proxy)

* [proxy](https://docs.npmjs.com/misc/config#proxy)
