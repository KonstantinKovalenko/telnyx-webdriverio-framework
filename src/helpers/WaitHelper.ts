export default class WaitHelper {
    static async waitForVisible(element: WebdriverIO.Element, timeout = 10000): Promise<void> {
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
    ): Promise<void> {
        await browser.waitUntil(condition, {
            timeout,
            timeoutMsg
        });
    }
}