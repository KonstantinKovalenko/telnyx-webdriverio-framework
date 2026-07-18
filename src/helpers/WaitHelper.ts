export default class WaitHelper {
    static async waitForVisible(element: ChainablePromiseElement, timeout = 10000): Promise<void> {
        await element.waitForDisplayed({ timeout });
    }

    static async waitForClickable(element: WebdriverIO.Element, timeout = 10000): Promise<void> {
        await element.waitForClickable({ timeout });
    }

    static async waitForExist(element: WebdriverIO.Element, timeout = 10000): Promise<void> {
        await element.waitForExist({ timeout });
    }

    static async waitUntil(
        condition: () => Promise<boolean>,
        timeout = 10000,
        timeoutMsg = 'Condition was not met'
    ) {
        await browser.waitUntil(condition, { timeout, timeoutMsg });
    }
}