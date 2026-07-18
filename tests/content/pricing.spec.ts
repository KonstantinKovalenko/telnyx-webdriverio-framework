import { expect } from '@wdio/globals'
import homePage from '@pages/home.page.ts'
import messagingPage from '@pages/pricing/messaging.page.ts'
import header from '@components/Header.ts'
import elementHelper from '@helpers/ElementHelper.ts'
import megaMenu from '@components/MegaMenu.ts'

describe('Pricing page tabs, TC-14', () => {
    beforeEach(async () => {
        await homePage.open('/')
    })

    it('Should verify Messaging Pricing page updates pricing information when different tabs are selected', async () => {
        await elementHelper.click(header.pricingBtn)
        await elementHelper.click(megaMenu.pricingSMSAPI)

        await expect(browser).toHaveUrl(expect.stringContaining("/messaging"))

        await elementHelper.scrollIntoView(messagingPage.senderTypesHeader)

        await expect(messagingPage.servicesTable).toBeDisplayed()
        expect(await (messagingPage.carrierFeeLinks).length).toBeGreaterThan(1)

        await elementHelper.click(messagingPage.rcsTab)

        await expect(messagingPage.rcsTab).toHaveAttribute('aria-selected', 'true')
        await expect(messagingPage.servicesTable).not.toBeDisplayed()
        await expect(messagingPage.rcsPricingTable).toBeDisplayed()
    })
})