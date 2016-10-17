# Ember-Source

This folder contains all of the ember source files that are used for generating the front-end application.

## Prerequisites

You will need the following things properly installed on your computer.

- [Git](http://git-scm.com/)
- [Node.js](http://nodejs.org/) (with NPM)
- [Bower](http://bower.io/)
- [Ember CLI](http://ember-cli.com/)
- [PhantomJS](http://phantomjs.org/) - Currently not needed. Will inform when needed.

## Installation

Before you start with development run the following commands:

- `npm install`
- `bower install`

_Note_: the `bower` command is enabled when installing Bower (`npm install -g bower`).

## Running / Development

To start the development server run

- `ember server`,
- Visit your app at <http://localhost:4200>.

This will create a server that watches for changes in the code and updates the development website.

**Note:** It is recommended to run all ember commands in administrator mode (in the cmd). This will improve the performance of the updates and make development faster.

### Code Generators

To generate different app components one can use the `ember generate` command. Make use of the many generators for code, try `ember help generate` for more details.

### Building

This are the commands that are used for building the application.

- `ember build` (development)
- `ember build --environment production` (production)

This is normally not used for development, only for deploying the app.

### Deploying

To deploy a production application and is generated in the public folder (for running with `node start`) run [build-ember.cmd](https://github.com/ErikNovak/SmartJobs/blob/master/ember-source/dev/build-ember.cmd) located in the `dev` folder.

## Further Reading / Useful Links

- [ember.js](http://emberjs.com/)
- [ember-cli](http://ember-cli.com/)
- Development Browser Extensions

  - [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  - [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
