start:
	npx concurrently "npx node server/index.js" "yarn start"

test:
	yarn run test

lint:
	yarn run lint
