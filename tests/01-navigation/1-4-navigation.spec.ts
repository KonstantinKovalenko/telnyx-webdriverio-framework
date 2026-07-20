import { expect } from '@wdio/globals'
import homePage from '@pages/home.page.ts'
import templatesPage from '@pages/resources/templates.page.ts'
import header from '@components/Header.ts'
import megaMenu from '@components/MegaMenu.ts'
import elementHelper from '@helpers/ElementHelper.ts'

describe('Navigation, TC-01', () => {
    it('Should verify navigation to the Products Inference page from the Products menu', async () => {
        await homePage.open('/')

        await elementHelper.expectVisibleAndEnabled(header.productsBtn)
        await elementHelper.click(header.productsBtn)
        await elementHelper.click(megaMenu.productInference)

        await expect(browser).toHaveUrl(expect.stringContaining('/inference'))
        await expect(browser).toHaveTitle(expect.stringContaining('Run the best open-source models.'))
        await expect(elementHelper.getHeading('Global inference.', 'h1')).toBeDisplayed()
    })
})

describe('Navigation, TC-02, TC-03, TC-04', () => {
    beforeEach(async () => {
        await homePage.open('/')
    })

    it('Should verify the Telnyx logo redirects to the homepage from another page', async () => {
        await elementHelper.expectVisibleAndEnabled(header.whyTelnyxBtn)
        await elementHelper.click(header.whyTelnyxBtn)
        await elementHelper.click(megaMenu.whyTelnyxGlobalComm)

        await expect(browser).toHaveUrl(expect.stringContaining('/global-communications'))
        await expect(elementHelper.getHeading('Global communications', 'h1')).toBeDisplayed()

        await elementHelper.expectVisibleAndEnabled(header.telnyxLogoBtn)
        await elementHelper.click(header.telnyxLogoBtn)

        await expect(elementHelper.getHeading('Infrastructure', 'h1')).toBeDisplayed()
    })

    it('Should verify the Solutions mega menu displays the primary solution cards and navigation links', async () => {
        await elementHelper.expectVisibleAndEnabled(header.solutionsBtn)
        await elementHelper.click(header.solutionsBtn)

        await expect(megaMenu.solutionsExploreMoreCaption).toBeDisplayed()

        await elementHelper.expectVisibleAndEnabled(megaMenu.solutionsHealthcare)
        await elementHelper.expectVisibleAndEnabled(megaMenu.solutionsFinance)
        await elementHelper.expectVisibleAndEnabled(megaMenu.solutionsTravelAndHospitality)
        await elementHelper.expectVisibleAndEnabled(megaMenu.solutionsLogisticsAndTransportation)
        await elementHelper.expectVisibleAndEnabled(megaMenu.solutionsViewAllSolutionsLink)
    })

    it('Should verify breadcrumb navigation returns to the parent page', async () => {
        await elementHelper.expectVisibleAndEnabled(header.resourcesBtn)
        await elementHelper.click(header.resourcesBtn)
        await elementHelper.click(megaMenu.resourcesAITemplates)

        await expect(browser).toHaveUrl(expect.stringContaining('/templates'))

        const firstTemplateTitle = await templatesPage.getFirstCardTitle()
        await elementHelper.click(await templatesPage.getFirstCard())
        await expect(elementHelper.getHeading(firstTemplateTitle, 'h1')).toBeDisplayed()

        await elementHelper.expectVisibleAndEnabled(templatesPage.backToTemplatesBCrumb)
        await elementHelper.click(templatesPage.backToTemplatesBCrumb)

        await expect(browser).toHaveUrl(expect.stringContaining('/templates'))
        await expect(elementHelper.getHeading('Browse all Voice AI Assistant templates', 'h1')).toBeDisplayed()
    })
})