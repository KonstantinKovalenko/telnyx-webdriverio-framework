import { baseConfig } from './wdio.base.conf.ts'

export const config = {
    ...baseConfig,

    capabilities: [
        {
            browserName: 'firefox'
        }
    ]
}