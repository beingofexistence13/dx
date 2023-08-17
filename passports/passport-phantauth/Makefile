# ==============================================================================
# Node Tests
# ==============================================================================

REPORTER = spec

test:
	@NODE_ENV=test NODE_PATH=lib ./node_modules/.bin/mocha \
		--reporter $(REPORTER)

# ==============================================================================
# Static Analysis
# ==============================================================================

JSHINT = jshint
SOURCES = lib/passport-phantauth

hint: lint
lint:
	$(JSHINT) $(SOURCES)


.PHONY: test hint lint nyan
