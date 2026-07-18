import { expect } from '@wdio/globals'
import homePage from '@pages/home.page.ts'
import footer from '@components/Footer.ts'
import elementHelper from '@helpers/ElementHelper.ts'

describe('Footer content, TC-16', () => {
    beforeEach(async () => {
        await homePage.open('/')
    })

    it('Should verify the footer displays expected sections and navigates to selected pages', async () => {
        await elementHelper.scrollIntoView(footer.siteFooter)

        await expect(footer.socialSection).toBeDisplayed()
        await expect(footer.companySection).toBeDisplayed()
        await expect(footer.legalSection).toBeDisplayed()
        await expect(footer.compareSection).toBeDisplayed()
        await expect(footer.askAISection).toBeDisplayed()

        await elementHelper.expectVisibleAndEnabled(footer.releaseNotesLink)
        await elementHelper.click(footer.releaseNotesLink)

        await expect(browser).toHaveUrl(expect.stringContaining("/release-notes"))
        await expect(elementHelper.getHeading('Release notes', 'h1')).toBeDisplayed()

        await elementHelper.scrollIntoView(footer.siteFooter)
        await elementHelper.expectVisibleAndEnabled(footer.cookiePolicyLink)
        await elementHelper.click(footer.cookiePolicyLink)

        await expect(browser).toHaveUrl(expect.stringContaining("/cookie-policy"))
        await expect(elementHelper.getHeading('Telnyx Cookie Policy', 'h1')).toBeDisplayed()

    })
})