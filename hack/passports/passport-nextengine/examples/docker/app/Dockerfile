FROM mhart/alpine-node:6.3

RUN mkdir /app
WORKDIR /app
ADD ./package.json /app/package.json
RUN apk add --no-cache git \
    && npm i
