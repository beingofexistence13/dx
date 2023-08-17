SOURCES = lib/**/*.js

# ==============================================================================
# Node Tests
# ==============================================================================

VOWS = ./node_modules/.bin/mocha
TESTS ?= test/*-test.js

test:
	@NODE_ENV=test NODE_PATH=lib $(MOCHA)

# ==============================================================================
# Static Analysis
# ==============================================================================

JSHINT = jshint

hint: lint
lint:
	$(JSHINT) $(SOURCES)


.PHONY: test hint lint
