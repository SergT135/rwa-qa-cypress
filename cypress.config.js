const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    watchForFileChanges:false, //to prevent autorun of tests adter ctrl+s    
    baseUrl: "http://localhost:3000",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  }
})