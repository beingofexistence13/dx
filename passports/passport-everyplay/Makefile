NODE = node
TEST = ./node_modules/.bin/vows
TESTS ?= test/*-test.js

test:
	@NODE_ENV=test NODE_PATH=lib $(TEST) $(TEST_FLAGS) $(TESTS)

docs:
	@./node_modules/.bin/dox-foundation --source lib/passport-everyplay --target docs/

docclean:
	rm -rf docs/*

.PHONY: test docs docclean
