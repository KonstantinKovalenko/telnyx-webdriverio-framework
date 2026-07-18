import { expect } from '@wdio/globals'
import homePage from '@pages/home.page.ts'
import resourcesPage from '@pages/resources/resources.page.ts'
import header from '@components/Header.ts'
import elementHelper from '@helpers/ElementHelper.ts'
import megaMenu from '@components/MegaMenu.ts'

describe('Resource center page content, TC-15', () => {
    beforeEach(async () => {
        await homePage.open('/')
    })

    it('Should verify the Resources center page displays article cards with title and description', async () => {
        await elementHelper.click(header.resourcesBtn)
        await elementHelper.click(megaMenu.resourcesCenter)

        await expect(browser).toHaveUrl(expect.stringContaining("/resources"))

        await elementHelper.scrollIntoView(resourcesPage.mostPopularHeading)

        expect(await (resourcesPage.popularCardsArray).length).toBeGreaterThan(1)
        await expect(await resourcesPage.getFirstCardTitle()).toBeDisplayed()
        await expect(await resourcesPage.getFirstCardDescription()).toBeDisplayed()
    })
})