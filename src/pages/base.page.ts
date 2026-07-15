export default class BasePage {
    async open(path = ''): Promise<void> {
        await browser.url(path);
    }

    async getTitle(): Promise<string> {
        return browser.getTitle();
    }

    async getCurrentUrl(): Promise<string> {
        return browser.getUrl();
    }

    async refresh(): Promise<void> {
        await browser.refresh();
    }
}