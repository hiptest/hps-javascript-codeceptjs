exports.config = {
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'https://hiptest.github.io/hps-java-junit-selenium/src/web/coffee_machine.html',
      restart: false,
      show: false
    }
  },
  include: {
    I: './steps_file.js'
  },
  mocha: {},
  bootstrap: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './features/*.feature',
    steps: ['./features/step_definitions.js']
  },
  plugins: {
    screenshotOnFail: {
      enabled: true
    }
  },
  tests: './features/*.feature',
  name: 'hps-javascript-codeceptjs'
}