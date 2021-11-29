# react-json-chart-builder
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

**Live editor (docs and examples)**: [https://brumik.github.io/react-json-chart-builder](https://brumik.github.io/react-json-chart-builder)

## Intall the npm package
* `npm i --save react-json-chart-builder`

## Workflow
* Write code, commit with semantic release commit messages (see bellow)
* Create PR
* Merge the PR, and the CI will start to run:
    * Generate new package number and tag by semantic release
    * Publish the package to the NPM registry
    * Build the demo app & docs and push it to the `gh-pages` branch to be served as a webpage
        * Demo: [https://brumik.github.io/react-json-chart-builder](https://brumik.github.io/react-json-chart-builder)
        * Docs: [https://brumik.github.io/react-json-chart-builder/docs](https://brumik.github.io/react-json-chart-builder)

### Semantic release commit messages
Using semantic release
* Patch release: `fix(pencil): stop graphite breaking when too much pressure applied`
* Feature release: `feat(pencil): add 'graphiteWidth' option`
* Breaking release: `BREAKING CHANGE: The graphiteWidth option has been removed.
The default graphite width of 10mm is always used for performance reasons.`

## Devel setup

### Requirements
* node > 14
* npm > 7

### Setup
* `npm ci` - install the packages
* `npm start` - start the local web server
* go to `localhost:8080`

### Testing
* `npm i` if not done before
* `npm test`
