# react-data-explorer

## Workflow
* Write code, commit with semantic release commit messages (see bellow)
* Create PR
* Merge the PR, and the CI will start to run:
    * Generate new package number and tag by semantic release
    * Publish the package to the NPM registry
    * Build the demo app and push the built app to the `gh-pages` branch
    * The branch served as a webpage on: [https://brumik.github.io/react-data-explorer](https://brumik.github.io/react-data-explorer)

### Semantic release commit messages
Using semantic release (disabled until the app is in <v1.0.0)
* Patch release: `fix(pencil): stop graphite breaking when too much pressure applied`
* Feature release: `feat(pencil): add 'graphiteWidth' option`
* Breaking release: `BREAKING CHANGE: The graphiteWidth option has been removed.
The default graphite width of 10mm is always used for performance reasons.`

## Devel setup

### Requirements
* node > 14
* npm > 7

### Setup
* `npm i` - install the packages
* (only if want to try out the editor too):
    * Run the AAA full stack (proxy + backend) - This step is needed, since the editor in the demo app is set up to work with the AAA API
    * backend: https://gitlab.cee.redhat.com/automation-analytics/automation-analytics-backend (vpn needed)
    * proxy: https://github.com/RedHatInsights/insights-proxy
* `npm start` - start the local web server
* go to `localhost:8080`

### Currently accepted API format
To see what data format is accepted from the API in the chart builder the `/demo/api/` folder contains API response mockups.

### Testing
* `npm i` if not done before
* `npm test`

## Examples (docs)
For seeing the components in work there are examples in the `demo` folder. The schema contains most of the basic usage. A proper documentation is coming when hitting the magic v1.0.0.
