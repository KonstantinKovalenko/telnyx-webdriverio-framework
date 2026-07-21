import { baseConfig } from './wdio.base.conf.js'

export const config = {
    ...baseConfig,

    capabilities: [
        {
            browserName: 'chrome',

            'goog:chromeOptions': {
                args: process.env.DOCKER
                    ? [
                        '--headless=new',
                        '--no-sandbox',
                        '--disable-dev-shm-usage'
                    ]
                    : []
            }
        }
    ]
}