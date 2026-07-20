export default class ElementHelper {
    static async click(element: ChainablePromiseElement): Promise<void> {
        await element.waitForClickable()
        await element.click()
    }

    static async type(element: ChainablePromiseElement, value: string): Promise<void> {
        await element.waitForDisplayed()
        await element.setValue(value)
    }

    static async expectVisibleAndEnabled(element: ChainablePromiseElement) {
        await expect(element).toBeDisplayed()
        await expect(element).toBeEnabled()
    }

    static async scrollIntoView(element: ChainablePromiseElement): Promise<void> {
        await element.scrollIntoView()
    }

    static getHeading(text: string, tag: 'h1' | 'h2' | 'h3') {
        return $(`${tag}*=${text}`)
    }
}