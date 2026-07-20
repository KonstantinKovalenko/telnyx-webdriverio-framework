export default class BasePage {
    async open(path = ''): Promise<void> {
        await browser.url(path)
    }

    async refresh(): Promise<void> {
        await browser.refresh()
    }
}