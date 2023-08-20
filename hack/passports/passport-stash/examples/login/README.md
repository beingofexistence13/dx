# Pasport-Stash Login Example

## Install

    $ npm install

## Usage

### Setup Stash

Get Stash Docker container from [https://registry.hub.docker.com/u/atlassian/stash/](https://registry.hub.docker.com/u/atlassian/stash/)

#### Setup Keys

    $ openssl genrsa -out stash.key 1024
    $ openssl req -new -key stash.key -out stash.csr
    $ openssl x509 -req -in stash.csr -signkey stash.key -out stash.crt
    $ cat stash.key > stash.pem
    $ cat stash.crt >> stash.pem

#### Setup Application Links in Stash Admin

Using the above generated keys, create the public key and use that when creating the [`application link`](https://confluence.atlassian.com/display/JIRA/Linking+to+Another+Application) in Stash.

    $ openssl rsa -in stash.pem -pubout

The `Consumer Key` you use in the setup process is what is used for the `STASH_CONSUMER_KEY` environment variable in the `Configure` section below.

### Configure Enviroment Variables

    $ export STASH_API_URL=http://localhost:7990
    $ export STASH_CONSUMER_KEY=<consumer-key>
    $ export STASH_PEM_FILE=<stash-pem-file>

### Start Server

    $ node app.js

### Access Example

Point your browser at `http://localhost:3000` and login

## License

[The MIT License](http://opensource.org/licenses/MIT)

Copyright (c) 2015 Greg Reinbach <[http://reinbach.com/](http://reinbach.com/)>
