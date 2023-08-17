FROM nginx:stable-alpine
ADD ./nginx.conf /etc/nginx/conf.d/app.conf
RUN apk --no-cache add openssl
RUN mkdir /etc/nginx/certs \
    && cd /etc/nginx/certs \
    && openssl genrsa -out server.key 2048 \
    && openssl req -new -key server.key -out server.csr -subj '/C=JP/ST=Tokyo/L=Tokyo/O=Example Ltd./OU=Web/DX=example.com' \
    && openssl x509 -in server.csr -days 3650 -req -signkey server.key > server.crt
