export default class WaitHelper {
    static async waitUntil(
        condition: () => Promise<boolean>,
        timeout = 10000,
        timeoutMsg = 'Condition was not met'
    ) {
        await browser.waitUntil(condition, { timeout, timeoutMsg })
    }
}