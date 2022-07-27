# react-json-chart-builder
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

**Live editor (docs and examples)**: [https://brumik.github.io/react-json-chart-builder](https://brumik.github.io/react-json-chart-builder)

## Intall the npm package
* `npm i --save react-json-chart-builder`

## Update guide
This section describes the changes you need to make to keep the chart builder working after the update.

### v1.x.x to v2 (v2-breaking-changes branch)
* All the truncate props were miss spelled as turncate. In the schemas replace every occurence of `turncateAt` with `truncateAt`.

## Workflow
* Write code, commit with semantic release commit messages (see bellow)
* Create PR
* Merge the PR, and the CI will start to run:
    * Generate new package number and tag by semantic release
    * Publish the package to the NPM registry
    * Build the demo app & docs and push it to the `gh-pages` branch to be served as a webpage
        * Demo: [https://brumik.github.io/react-json-chart-builder](https://brumik.github.io/react-json-chart-builder)
        * Docs: [https://brumik.github.io/react-json-chart-builder/docs](https://brumik.github.io/react-json-chart-builder/docs)

### Semantic release commit messages
Using semantic release
* No release: `chore(demo): updated the demo application`
* Patch release: `fix(pencil): stop graphite breaking when too much pressure applied`
* Feature release: `feat(pencil): add 'graphiteWidth' option`
* Breaking release: `BREAKING CHANGE: The graphiteWidth option has been removed.
The default graphite width of 10mm is always used for performance reasons.`


## Devel setup

### Requirements
* node = 15
* npm = 7
* for nvm users you can just do `nvm use` after `nvm install 15` if you had not doen it before

### Setup
* `npm ci` - install the packages
* `npm start` - start the local web server
* go to `localhost:8080`

If you want to see the docs too in the browser, you have to generate them first:
* `npm run:build:docs`

### Testing
* `npm ci` if not done before
* `npm test`
