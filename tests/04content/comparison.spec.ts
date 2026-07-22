import { expect } from '@wdio/globals'
import homePage from '@pages/home.page.ts'
import switchPage from '@pages/switch.page.ts'
import footer from '@components/footer.ts'
import elementHelper from '@helpers/elementHelper.ts'

describe('Twilio compare page content, TC-17', () => {
    beforeEach(async () => {
        await homePage.open('/')
    })

    it('Should verify comparison sections on the Twilio comparison page expand and collapse correctly', async () => {
        await elementHelper.scrollIntoView(footer.siteFooter)

        await elementHelper.expectVisibleAndEnabled(footer.twilioLink)
        await elementHelper.click(footer.twilioLink)

        await expect(browser).toHaveUrl(expect.stringContaining("/switch"))
        await expect(elementHelper.getHeading('Still using Twilio?', 'h1')).toBeDisplayed()

        await elementHelper.scrollIntoView(switchPage.stopOverpayHeading)

        await expect(switchPage.programmableVoiceAccordion).toHaveAttribute('aria-expanded', 'false')

        await elementHelper.click(switchPage.programmableVoiceAccordion)

        await expect(switchPage.programmableVoiceAccordion).toHaveAttribute('aria-expanded', 'true')

        await elementHelper.click(switchPage.programmableVoiceAccordion)

        await expect(switchPage.programmableVoiceAccordion).toHaveAttribute('aria-expanded', 'false')
    })
})