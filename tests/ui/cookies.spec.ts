import { expect } from '@wdio/globals'
import homePage from '@pages/home.page.ts'
import elementHelper from '@helpers/ElementHelper.ts'


describe('Cookie banner UI, TC-11', () => {
    beforeEach(async () => {
        await browser.deleteCookies()
    })
    
    it('Should verify the cookie banner can be accepted and disappears', async () => {
        await homePage.open('/')

        await expect(homePage.cookieBanner).toBeDisplayed()

        await elementHelper.click(homePage.acceptAllBtn)

        await expect(homePage.cookieBanner).not.toBeDisplayed()

        await homePage.refresh()

        await expect(homePage.cookieBanner).not.toBeDisplayed()
    })
})