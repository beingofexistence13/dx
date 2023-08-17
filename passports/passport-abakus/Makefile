parse: node_modules
	node_modules/.bin/bailey ./ ./ --node

watch: node_modules
	node_modules/.bin/bailey ./ ./ --node --watch

test: parse
	ABAKUS_TOKEN=test node_modules/.bin/istanbul cover node_modules/.bin/_mocha

coveralls: test
	node node_modules/.bin/coveralls < coverage/lcov.info

node_modules:
	npm install

.PHONY: parse watch test coveralls
