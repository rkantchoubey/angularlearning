<<<<<<< HEAD
=======
// @ts-check
>>>>>>> f987489254a231685d1e8f7f895d2478f7782125
// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const { SpecReporter } = require('jasmine-spec-reporter');

<<<<<<< HEAD
=======
/**
 * @type { import("protractor").Config }
 */
>>>>>>> f987489254a231685d1e8f7f895d2478f7782125
exports.config = {
  allScriptsTimeout: 11000,
  specs: [
    './src/**/*.e2e-spec.ts'
  ],
  capabilities: {
<<<<<<< HEAD
    'browserName': 'chrome'
=======
    browserName: 'chrome'
>>>>>>> f987489254a231685d1e8f7f895d2478f7782125
  },
  directConnect: true,
  baseUrl: 'http://localhost:4200/',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function() {}
  },
  onPrepare() {
    require('ts-node').register({
<<<<<<< HEAD
      project: require('path').join(__dirname, './tsconfig.e2e.json')
=======
      project: require('path').join(__dirname, './tsconfig.json')
>>>>>>> f987489254a231685d1e8f7f895d2478f7782125
    });
    jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
  }
};