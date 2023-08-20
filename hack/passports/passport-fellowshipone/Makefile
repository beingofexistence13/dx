REPORTER = spec
test:
	$(MAKE) check-security
	$(MAKE) lint
	@NODE_ENV=test NODE_PATH=lib ./node_modules/.bin/mocha -b --reporter $(REPORTER)

lint:
	./node_modules/.bin/standard

test-cov:
	$(MAKE) check-security
	$(MAKE) lint
	@NODE_ENV=test NODE_PATH=lib ./node_modules/.bin/istanbul cover \
	./node_modules/mocha/bin/_mocha -- -R spec

test-travis:
	$(MAKE) check-security
	$(MAKE) lint
	@NODE_ENV=test NODE_PATH=lib ./node_modules/.bin/istanbul cover \
	./node_modules/mocha/bin/_mocha --report lcovonly -- -R spec

check-security:
	./node_modules/.bin/nsp check

gen-changelog:
	github_changelog_generator --exclude-labels duplicate,question,invalid,wontfix,admin

.PHONY: test lint test-cov test-travis gen-changelog
