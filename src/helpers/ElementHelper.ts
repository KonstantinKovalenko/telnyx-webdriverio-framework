export default class ElementHelper {

    static async click(element: ChainablePromiseElement): Promise<void> {
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

    static async expectVisibleAndEnabled(element: ChainablePromiseElement) {
        await expect(element).toBeDisplayed();
        await expect(element).toBeEnabled();
    }

    static async scrollIntoView(element: WebdriverIO.Element): Promise<void> {
        await element.scrollIntoView();
    }

    static getHeading(text: string) {
        return $(`h1*=${text}`)
    }
}