import { expect } from '@wdio/globals'
import homePage from '@pages/home.page.ts'
import cookieBanner from '@components/cookieBanner.ts'
import elementHelper from '@helpers/elementHelper.ts'

describe('Cookie banner UI, TC-11', () => {
    beforeEach(async () => {
        await browser.deleteCookies()
    })
    
    it('Should verify the cookie banner can be accepted and disappears', async () => {
        await homePage.open('/')

        await expect(cookieBanner.cookieBanner).toBeDisplayed()

        await elementHelper.click(cookieBanner.acceptAllBtn)

        await expect(cookieBanner.cookieBanner).not.toBeDisplayed()

        await homePage.refresh()

        await expect(cookieBanner.cookieBanner).not.toBeDisplayed()
    })
})