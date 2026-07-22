import { expect } from '@wdio/globals'
import { ERROR_URL } from '@utils/constants.ts'
import error404Page from '@pages/error404.page.ts'
import header from '@components/header.ts'
import elementHelper from '@helpers/elementHelper.ts'

describe('Error pages management, TC-18', () => {
    it('Should verify a non-existent URL displays the custom 404 page', async () => {
        await error404Page.open(ERROR_URL)

        await expect(browser).toHaveUrl(ERROR_URL)

        await header.siteHeader.waitForDisplayed()
        
        await expect(header.siteHeader).toBeDisplayed()
        await expect(error404Page.errorHeading).toBeDisplayed()
        await expect(error404Page.doesnotExistHeading).toBeDisplayed()

        await elementHelper.expectVisibleAndEnabled(error404Page.backToHomeBtn)
    })
})