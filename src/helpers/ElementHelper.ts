export default class ElementHelper {

    static async click(element: WebdriverIO.Element): Promise<void> {
        await element.waitForClickable();
        await element.click();
    }

    static async type(element: WebdriverIO.Element, value: string): Promise<void> {
        await element.waitForDisplayed();
        await element.setValue(value);
    }

    static async getText(element: WebdriverIO.Element): Promise<string> {
        await element.waitForDisplayed();
        return element.getText();
    }

    static async isDisplayed(element: WebdriverIO.Element): Promise<boolean> {
        return element.isDisplayed();
    }

    static async scrollIntoView(element: WebdriverIO.Element): Promise<void> {
        await element.scrollIntoView();
    }
}