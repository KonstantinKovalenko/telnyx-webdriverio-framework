import { expect } from '@wdio/globals'
import { Key } from 'webdriverio'
import homePage from '@pages/error404.page.ts'
import aIWidget from '@components/AIWidget.ts'
import header from '@components/Header.ts'
import megaMenu from '@components/MegaMenu.ts'
import elementHelper from '@helpers/ElementHelper.ts'
import waitHelper from '@helpers/WaitHelper.ts'

describe('Dynamic widget testing, TC-19, TC-20', () => {
    beforeEach(async () => {
        await homePage.open('/')
    })

    it('Should verify the AI Assistant opens, responds to a user message, and can be closed', async () => {
        await waitHelper.waitForVisible(aIWidget.aiWidget)

        await elementHelper.click(aIWidget.openWidgetBtn)

        await expect(aIWidget.chatMessages[0]).toHaveText(expect.stringContaining('Hello! I can help'))

        await elementHelper.type(aIWidget.userMessageInput, "Hello")
        await browser.keys(Key.Enter)

        await waitHelper.waitUntil(
            async () => (await aIWidget.chatMessages.length) === 3,
            10000,
            'Expected 3 chat messages to be displayed'
        )
        expect(await aIWidget.chatMessages.length).toBeGreaterThan(2)

        await elementHelper.click(aIWidget.closeWidgetBtn)
    })

    it('Should verify the AI Assistant remains open during header navigation', async () => {
        await waitHelper.waitForVisible(aIWidget.aiWidget)

        await expect(aIWidget.userMessageInput).not.toBeClickable()

        await elementHelper.click(aIWidget.openWidgetBtn)

        await expect(aIWidget.userMessageInput).toBeClickable()

        await elementHelper.click(header.productsBtn)
        await elementHelper.click(megaMenu.productVoiceAI)

        await expect(browser).toHaveUrl(expect.stringContaining('/voice-ai-agents'))

        await expect(aIWidget.userMessageInput).toBeClickable()
    })
})