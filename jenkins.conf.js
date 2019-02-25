
const defaultTimeoutInterval = process.env.DEBUG ? (60 * 60 * 500) : 900000;
const settings = require('./settings.json')
var path = require('path');
var VisualRegressionCompare = require('wdio-visual-regression-cucumber-service/compare');

function getScreenshotName(basePath) {
    return function (context) {
        var type = context.type;
        var testName = context.test.feature;
        var scenario = context.test.scenario.split(" ")
        var example = scenario[scenario.length - 1]
        var browserName = 'chrome'
        var element = context.meta.element;
        element = element.split("/").join("")

        return path.join(basePath + '/' + testName, `${testName}_exemplo-${example}_${element}_${browserName}.png`);
    };
}

exports.config = {
    // ==================
    // Specify Test Files
    // ==================
    // Define which test specs should run. The pattern is relative to the directory
    // from which `wdio` was called. Notice that, if you are calling `wdio` from an
    // NPM script (see https://docs.npmjs.com/cli/run-script) then the current working
    // directory is where your package.json resides, so `wdio` will be called from there.
    //
    specs: [
        './test/features/*.feature'
    ],
    suites: {
        App: [
            './fonte/test/specs/teste.spec.ts'
        ]
    },
    // Patterns to exclude.
    exclude: [
        // 'path/to/excluded/files'
    ],
    //
    // ============
    // Capabilities
    // ============
    // Define your capabilities here. WebdriverIO can run multiple capabilities at the same
    // time. Depending on the number of capabilities, WebdriverIO launches several test
    // sessions. Within your capabilities you can overwrite the spec and exclude options in
    // order to group specific specs to a specific capability.
    //
    // First, you can define how many instances should be started at the same time. Let's
    // say you have 3 different capabilities (Chrome, Firefox, and Safari) and you have
    // set maxInstances to 1; wdio will spawn 3 processes. Therefore, if you have 10 spec
    // files and you set maxInstances to 10, all spec files will get tested at the same time
    // and 30 processes will get spawned. The property handles how many capabilities
    // from the same test should run tests.
    //
    maxInstances: 3,
    //
    // If you have trouble getting all important capabilities together, check out the
    // Sauce Labs platform configurator - a great tool to configure your capabilities:
    // https://docs.saucelabs.com/reference/platforms-configurator
    //
    capabilities: [{
        // maxInstances can get overwritten per capability. So if you have an in-house Selenium
        // grid with only 5 firefox instances available you can make sure that not more than
        // 5 instances get started at a time.
        maxInstances: 3,
        //
        browserName: 'chrome',
        chromeOptions: {
            args: ['start-maximized','headless' ]
        }
    }],
    //
    // ===================
    // Test Configurations
    // ===================
    // Define all options that are relevant for the WebdriverIO instance here
    //
    // By default WebdriverIO commands are executed in a synchronous way using
    // the wdio-sync package. If you still want to run your tests in an async way
    // e.g. using promises you can set the sync option to false.
    sync: true,
    //
    // Level of logging verbosity: silent | verbose | command | data | result | error
    logLevel: 'verbose',
    //
    // Enables colors for log output.
    coloredLogs: true,
    //
    // Warns when a deprecated command is used
    deprecationWarnings: true,
    //
    // If you only want to run your tests until a specific amount of tests have failed use
    // bail (default is 0 - don't bail, run all tests).
    bail: 0,
    //
    // Saves a screenshot to a given path if a command fails.
    screenshotPath: './errorShots/',
    //
    // Set a base URL in order to shorten url command calls. If your `url` parameter starts
    // with `/`, the base url gets prepended, not including the path portion of your baseUrl.
    // If your `url` parameter starts without a scheme or `/` (like `some/path`), the base url
    // gets prepended directly.
    // Maciel-PC
    //baseUrl: 'https://passaporte2.alterdata.com.br/login_ad?idProduto=2e0458a8a9515f23fc22df7e80ab7be5&nomeProduto=Telemetria&continue=http:%2F%2F172.16.72.18:8000%2Fapi%2Fretorno-passaporte%2F',
    //TesteDNT
    baseUrl: 'https://passaporte2.alterdata.com.br/login_ad?idProduto=2e0458a8a9515f23fc22df7e80ab7be5&nomeProduto=Telemetria&continue=http:%2F%2Ftelemetria-dev.lnx-dsn-openshift.alterdata.matriz%2Fapi%2Fretorno-passaporte%2F',
    //
    // Default timeout for all waitFor* commands.
    waitforTimeout: 15000,
    //
    // Default timeout in milliseconds for request
    // if Selenium Grid doesn't send response
    connectionRetryTimeout: 90000,
    //
    // Default request retries count
    connectionRetryCount: 5,
    //
    // Initialize the browser instance with a WebdriverIO plugin. The object should have the
    // plugin name as key and the desired plugin options as properties. Make sure you have
    // the plugin installed before running any tests. The following plugins are currently
    // available:
    // WebdriverCSS: https://github.com/webdriverio/webdrivercss
    // WebdriverRTC: https://github.com/webdriverio/webdriverrtc
    // Browserevent: https://github.com/webdriverio/browserevent
    // plugins: {
    //     webdrivercss: {
    //         screenshotRoot: 'my-shots',
    //         failedComparisonsRoot: 'diffs',
    //         misMatchTolerance: 0.05,
    //         screenWidth: [320,480,640,1024]
    //     },
    //     webdriverrtc: {},
    //     browserevent: {}
    // },
    //
    // Test runner services
    // Services take over a specific job you don't want to take care of. They enhance
    // your test setup with almost no effort. Unlike plugins, they don't add new
    // commands. Instead, they hook themselves up into the test process.
    services: ['cucumberjira', 'visual-regression-cucumber','selenium-standalone'],//
    dockerLogs: './',
   /* dockerOptions: {
        image: 'selenium/standalone-chrome',
        healthCheck: 'http://standalone-chrome:4444',
        options: {
            p: ['4444:4444'],
            shmSize: '2g'
        }
    },*/
    seleniumLogs: './logs',
    jiraConfig: {
        host: 'http://jira.alterdata.com.br',
        username: settings.usuario_jira.usuario,
        password: settings.usuario_jira.senha,
        testKey: process.env.key,
        featureDir: './test/features/' //deve ser o mesmo diretório das specs
    },

    visualRegression: {
        compare: new VisualRegressionCompare.LocalCompare({
            referenceName: getScreenshotName(path.join(process.cwd(), 'screenshots/reference')),
            screenshotName: getScreenshotName(path.join(process.cwd(), 'screenshots/screen')),
            diffName: getScreenshotName(path.join(process.cwd(), 'screenshots/diff')),
            misMatchTolerance: 1.00,
        }),
        viewportChangePause: 1000,
        viewports: [{ width: 1440, height: 900 }],
        orientations: [],
    },

    // Framework you want to run your specs with.
    // The following are supported: Mocha, Jasmine, and Cucumber
    // see also: http://webdriver.io/guide/testrunner/frameworks.html
    //
    // Make sure you have the wdio adapter package for the specific framework installed
    // before running any tests.
    framework: 'cucumber',

    cucumberOpts: {
        require: ['./test/stepDefinitions/given.js', './test/stepDefinitions/when.js', './test/stepDefinitions/then.js'],   // <string[]> (file/dir) require files before executing features
        backtrace: true,    // <boolean> show full backtrace for errors
        compiler: ['ts:ts-node/register'], // <string[]> filetype:compiler used for processing required features
        failAmbiguousDefinitions: true,       // <boolean< Treat ambiguous definitions as errors
        dryRun: false,      // <boolean> invoke formatters without executing steps
        failFast: false,    // <boolean> abort the run on first failure
        ignoreUndefinedDefinitions: false,    // <boolean> Enable this config to treat undefined definitions as warnings
        name: [],           // <string[]> ("extension:module") require files with the given EXTENSION after requiring MODULE (repeatable)
        snippets: true,     // <boolean> hide step definition snippets for pending steps
        format: ['json:target./cucumber.json'], // <string[]> (type[:path]) specify the output format, optionally supply PATH to redirect formatter output (repeatable)
        colors: true,       // <boolean> disable colors in formatter output
        snippets: false,    // <boolean> hide step definition snippets for pending steps
        source: false,      // <boolean> hide source uris
        profile: [],        // <string[]> (name) specify the profile to use
        strict: true,       // <boolean> fail if there are any undefined or pending steps
        tagExpression: 'not @Pending',      // <string> (expression) only execute the features or scenarios with tags matching the expression, see https://docs.cucumber.io/tag-expressions/
        timeout: defaultTimeoutInterval,    // <number> timeout for step definitions
        tagsInTitle: false,                 // <boolean> add cucumber tags to feature or scenario name
        snippetSyntax: undefined,           // <string> specify a custom snippet syntax
    },
    //
    // Test reporter for stdout.
    // The only one supported by default is 'dot'
    // see also: http://webdriver.io/guide/reporters/dot.html
    reporters: ['allure', 'spec'],
    reporterOptions: {
        junit: { outputDir: './test/xunit/' },
        allure: {
            outputDir: 'allure-results',
            disableWebdriverStepsReporting: true,
            useCucumberStepReporter: true
        }
    },
    //reporterOptions: { 'outputDir': 'outputDir',filename: 'wdio-results', 'allure-addons': { outputDir: 'allure-results', debug: true, debugSeleniumCommand: true } },
    //
    //
    // =====
    // Hooks
    // =====
    // WebdriverIO provides several hooks you can use to interfere with the test process in order to enhance
    // it and to build services around it. You can either apply a single function or an array of
    // methods to it. If one of them returns with a promise, WebdriverIO will wait until that promise got
    // resolved to continue.
    /**
     * Gets executed once before all workers get launched.
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     */
    //onPrepare: function (config, capabilities) {
    //    
    //},
    /**
     * Gets executed just before initialising the webdriver session and test framework. It allows you
     * to manipulate configurations depending on the capability or spec.
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that are to be run
     */
    // beforeSession: function (config, capabilities, specs) {
    // },
    /**
     * Gets executed before test execution begins. At this point you can access to all global
     * variables like `browser`. It is the perfect place to define custom commands.
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that are to be run
     */
    before: function (capabilities, specs) {
        require('ts-node/register');
        const chai = require('chai');
        global.expect = chai.expect;
        global.assert = chai.assert;
        global.should = chai.should();
    },
    /**
     * Runs before a WebdriverIO command gets executed.
     * @param {String} commandName hook command name
     * @param {Array} args arguments that command would receive
     */
    // beforeCommand: function (commandName, args) {
    // },

    /**
     * Hook that gets executed before the suite starts
     * @param {Object} suite suite details
     */
    beforeFeature: function (feature) {
        browser.url('');
        browser.waitForVisible('//input[@id="email-login"]');
        browser.waitForExist('//div[@id="modal-passaporte-loading" and @class="modal fade"]', 30000);
        browser.addValue('//input[@id="email-login"]', settings.usuario_matriz.usuario);
        browser.addValue('//input[@type="password"]', settings.usuario_matriz.senha);
        browser.waitForEnabled('//button[@id="login-passaporte"]');
        browser.click('//button[@id="login-passaporte"]');
        browser.waitForVisible('//div[@ng-bind="app.name" and text()="Pack"]', 25000);
    },

    afterScenario: function (scenario) {
        let cookies = browser.cookie();
        for (var j = 0; j < cookies['value'].length; j++) {
            if ((cookies['value'][j].name != 'auth_data') && (cookies['value'][j].name != 'csrftoken') && (cookies['value'][j].name != 'sessionid')) {

                browser.cookie('delete', cookies['value'][j].name);
            }
        }
        browser.localStorage('DELETE');
        browser.refresh()
    },

    /**
     * Function to be executed before a test (in Mocha/Jasmine) or a step (in Cucumber) starts.
     * @param {Object} test test details
     */
    // beforeTest: function (test) {
    // },
    /**
     * Hook that gets executed _before_ a hook within the suite starts (e.g. runs before calling
     * beforeEach in Mocha)
     */
    // beforeHook: function () {
    // },
    /**
     * Hook that gets executed _after_ a hook within the suite starts (e.g. runs after calling
     * afterEach in Mocha)
     */
    // afterHook: function () {
    // },
    /**
     * Function to be executed after a test (in Mocha/Jasmine) or a step (in Cucumber) starts.
     * @param {Object} test test details
     */
    // afterTest: function (test) {
    // },
    /**
     * Hook that gets executed after the suite has ended
     * @param {Object} suite suite details
     */
    // afterSuite: function (suite) {
    // },

    /**
     * Runs after a WebdriverIO command gets executed
     * @param {String} commandName hook command name
     * @param {Array} args arguments that command would receive
     * @param {Number} result 0 - command success, 1 - command error
     * @param {Object} error error object if any
     */
    //afterCommand: function (commandName, args, result, error) {
    //
    // },
    /**
     * Gets executed after all tests are done. You still have access to all global variables from
     * the test.
     * @param {Number} result 0 - test pass, 1 - test fail
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that ran
     */
    // after: function (result, capabilities, specs) {
    // },
    /**
     * Gets executed right after terminating the webdriver session.
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that ran
     */
    // afterSession: function (config, capabilities, specs) {
    // },
    /**
     * Gets executed after all workers got shut down and the process is about to exit.
     * @param {Object} exitCode 0 - success, 1 - fail
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     */
    // onComplete: function(exitCode, config, capabilities) {
    // }
}