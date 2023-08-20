NODE = node
TEST = ./node_modules/.bin/vows
TESTS ?= test/*-test.js

test:
	@NODE_ENV=test NODE_PATH=lib $(TEST) $(TEST_FLAGS) $(TESTS)

docs: docs/api.html

docs/api.html: lib/passport-nopassword/*.js
	dox \
		--title Passport-Nopassword \
		--desc "No-password authentication strategy for Passport" \
		$(shell find lib/passport-nopassword/* -type f) > $@

docclean:
	rm -f docs/*.{1,html}

.PHONY: test docs docclean
