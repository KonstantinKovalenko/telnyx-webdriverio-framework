import { expect } from '@wdio/globals'
import homePage from '@pages/home.page.ts'
import header from '@components/header.ts'
import elementHelper from '@helpers/elementHelper.ts'

describe('Mobile UI, TC-13', () => {
    beforeEach(async () => {
        await browser.setWindowSize(390, 844)
        await homePage.open('/')
    })
    
    it('Should verify the mobile navigation menu expands and collapses correctly', async () => {
        await elementHelper.expectVisibleAndEnabled(header.hamburgerBtn)
        await elementHelper.click(header.hamburgerBtn)

        await expect(header.hamburgerBtn).toHaveAttribute('aria-expanded', 'true')
        await expect(header.mainMenu).toBeDisplayed()
        await expect(header.productsBtn).toBeDisplayed()
        await expect(header.solutionsBtn).toBeDisplayed()
        await expect(header.pricingBtn).toBeDisplayed()

        await elementHelper.click(header.hamburgerBtn)

        await expect(header.hamburgerBtn).toHaveAttribute('aria-expanded', 'false')
        await expect(header.mainMenu).not.toBeDisplayed()
    })

    afterEach(async () => {
        await browser.setWindowSize(1920, 1080)
    })
})