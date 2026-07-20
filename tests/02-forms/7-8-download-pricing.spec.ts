import { expect } from '@wdio/globals'
import { users } from '@utils/testData.ts'
import homePage from '@pages/home.page.ts'
import elasticSipPage from '@pages/pricing/elasticSip.page.ts'
import header from '@components/Header.ts'
import megaMenu from '@components/MegaMenu.ts'
import elementHelper from '@helpers/ElementHelper.ts'

describe('Download pricing form validation, TC-07, TC-08', () => {
    it('Should verify the "Download Pricing" form accepts valid input and submits successfully', async () => {
        await homePage.open('/')

        await elementHelper.expectVisibleAndEnabled(header.pricingBtn)
        await elementHelper.click(header.pricingBtn)
        await elementHelper.click(megaMenu.pricingSipTrunking)

        await expect(browser).toHaveUrl(expect.stringContaining('/pricing/elastic-sip'))

        await elementHelper.scrollIntoView(elasticSipPage.downloadPricingHeader)
        await elasticSipPage.firstnameInput.waitForDisplayed()

        await elementHelper.type(elasticSipPage.firstnameInput, users.validUser.firstName)
        await elementHelper.type(elasticSipPage.lastnameInput, users.validUser.lastName)
        await elementHelper.type(elasticSipPage.emailInput, users.validUser.email)
        await elementHelper.click(elasticSipPage.submitBtn)

        await expect(browser).toHaveUrl(expect.stringContaining('/content-follow-up'))
        await expect(elementHelper.getHeading('Thank you', 'h1')).toBeDisplayed()
    })

    it('Should verify the "Download Pricing" form displays validation errors for empty required fields.', async () => {
        await elasticSipPage.open()

        await expect(browser).toHaveUrl(expect.stringContaining('/pricing/elastic-sip'))

        await elementHelper.scrollIntoView(elasticSipPage.downloadPricingHeader)
        await elasticSipPage.firstnameInput.waitForDisplayed()

        await expect(elasticSipPage.firstnameInput).toHaveValue('')
        await expect(elasticSipPage.lastnameInput).toHaveValue('')
        await expect(elasticSipPage.emailInput).toHaveValue('')
        await elementHelper.click(elasticSipPage.submitBtn)

        await expect(elasticSipPage.firstnameValidationMsg).toHaveText('This field is required.')
    })
})