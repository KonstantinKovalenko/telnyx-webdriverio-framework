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

    async waitForPageLoad(): Promise<void> {
        await browser.waitUntil(
            async () => {
                return await browser.execute(() => document.readyState) === 'complete';
            },
            {
                timeout: 10000,
                timeoutMsg: 'Page did not finish loading'
            }
        );
    }
}