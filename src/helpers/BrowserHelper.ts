export default class BrowserHelper {
    static async switchToNewTab(): Promise<void> {
        const handles = await browser.getWindowHandles();
        await browser.switchToWindow(handles[handles.length - 1]);
    }
}