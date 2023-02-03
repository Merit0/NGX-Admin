const { defineConfig } = require('cypress')

module.exports = defineConfig({

  viewportHeight: 1080,
  viewportWidth: 1920,
  video: false, //video turned off

  retries: {
    runMode: 2,
    openMode: 0
  },

  reporter: 'cypress-multi-reporters', // TODO: here provide which reporters will be used
  //TODO:  install multi-reporters ->> npm install cypress-multi-reporters --save-dev
  //TODO:  install j-unit merge ->> npm install -g junit-merge
  // npm install mocha-junit-reporter --save-dev
  reporterOptions: {
    configFile: 'reporter-config.json' // Need to create reporter-config.json file in the root folder
  },
  //install libraries TODO: --->>> npm install --save-dev mocha mochawesome mochawesome-merge mochawesome-report-generator junit-merge

  e2e: {
    baseUrl: 'http://localhost:4200',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
    excludeSpecPattern: ['**/1-getting-started/*', '**/2-advanced-examples/*'],
    defaultCommandTimeout: 5000,
    pageLoadTimeout: 30000
  }
})
