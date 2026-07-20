import { expect } from '@wdio/globals'
import { search } from '@utils/testData.ts'
import homePage from '@pages/home.page.ts'
import integrationsPage from '@pages/integrations.page.ts'
import header from '@components/Header.ts'
import megaMenu from '@components/MegaMenu.ts'
import elementHelper from '@helpers/ElementHelper.ts'
import browserHelper from '@helpers/BrowserHelper.ts'
import waitHelper from '@helpers/WaitHelper.ts'

describe('Search UI, TC-12', () => {
    beforeEach(async () => {
        await homePage.open('/')
    })
    
    it('Should verify the Integrations page search filters results correctly', async () => {
        await elementHelper.expectVisibleAndEnabled(header.developersBtn)
        await elementHelper.click(header.developersBtn)
        await elementHelper.click(megaMenu.developersIntegrations)

        await browser.waitUntil(async () => (await browser.getWindowHandles()).length === 2)
        await browserHelper.switchToNewTab()

        await expect(browser).toHaveUrl(expect.stringContaining('/integrations'))

        await elementHelper.scrollIntoView(integrationsPage.searchInput)

        await waitHelper.waitUntil(async () => (await integrationsPage.integrationResults.length) > 1,
            10000,
            'Expected more than 1 result'
        )
        expect(await (integrationsPage.integrationResults.length)).toBeGreaterThan(1)

        await elementHelper.type(integrationsPage.searchInput, search.values.github)

        await expect(integrationsPage.integrationResults[0]).toHaveText(expect.stringContaining(search.values.github))

        await waitHelper.waitUntil(async () => (await integrationsPage.integrationResults.length) === 1,
            10000,
            'Expected only 1 result'
        )
        expect(await (integrationsPage.integrationResults.length)).toEqual(1)    
    })
})