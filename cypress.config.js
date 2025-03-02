const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      return require('./cypress/plugin/index.js')(on, config)
    },
    excludeSpecPattern: '*.js',
    specPattern: 'cypress/e2e/features/**/*.{feature,features}'
  },
});
