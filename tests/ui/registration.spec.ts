import { expect } from '@wdio/globals'

describe.skip('Framework smoke test', () => {
    it('should open Telnyx homepage', async () => {
        await browser.url('/');
        await expect(browser).toHaveTitle(expect.stringContaining('Telnyx'))
    });
});