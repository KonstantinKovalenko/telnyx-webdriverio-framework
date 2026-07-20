import { config as dotenvConfig } from 'dotenv'
import type { Options } from '@wdio/types'

dotenvConfig({
    path: `config/environments/.env.${process.env.TEST_ENV || 'local'}`
})

export const baseConfig: Options.Testrunner = {
    runner: 'local',

    tsConfigPath: './tsconfig.json',

    framework: 'mocha',

    specs: [
        '../tests/**/*.spec.ts'
    ],

    exclude: [],

    maxInstances: 1,

    logLevel: 'info',

    baseUrl: process.env.BASE_URL,

    waitforTimeout: Number(process.env.DEFAULT_TIMEOUT),

    connectionRetryTimeout: 120000,

    connectionRetryCount: 3,

    reporters: [
        'spec',
        ['allure', {
            outputDir: './allure-results',
            disableWebdriverStepsReporting: true,
            disableWebdriverScreenshotsReporting: false
        }]
    ],

    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },

    before: async function () {
        await browser.setWindowSize(1920, 1080)

        const size = await browser.getWindowSize()
        console.log('Window size:', size)
    }
}