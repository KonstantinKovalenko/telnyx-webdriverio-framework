import { expect } from '@wdio/globals'
import { Key } from 'webdriverio'
import homePage from '@pages/home.page.ts'
import aiWidget from '@components/AIWidget.ts'
import header from '@components/Header.ts'
import megaMenu from '@components/MegaMenu.ts'
import elementHelper from '@helpers/ElementHelper.ts'
import waitHelper from '@helpers/WaitHelper.ts'

describe('Dynamic widget testing, TC-19, TC-20', () => {
    beforeEach(async () => {
        await homePage.open('/')
    })

    it('Should verify the AI Assistant opens, responds to a user message, and can be closed', async () => {
        await aiWidget.siteAIWidget.waitForDisplayed()

        await elementHelper.click(aiWidget.openWidgetBtn)

        await expect(aiWidget.chatMessages[0]).toHaveText(expect.stringContaining('Hello! I can help'))

        await elementHelper.type(aiWidget.userMessageInput, "Hello")
        await browser.keys(Key.Enter)

        await waitHelper.waitUntil(async () => {
            const messages = aiWidget.chatMessages
            
            if (await messages.length === 0) {
                return false
            }
            const lastText = await messages[await messages.length - 1].getText()

            return !lastText.startsWith('Hello! How can I assist')
        }, 20000, 'Assistant did not respond')

        await elementHelper.click(aiWidget.closeWidgetBtn)
        await expect(aiWidget.userMessageInput).not.toBeClickable()
    })

    it('Should verify the AI Assistant remains open during header navigation', async () => {
        await aiWidget.siteAIWidget.waitForDisplayed()

        await expect(aiWidget.userMessageInput).not.toBeClickable()

        await elementHelper.click(aiWidget.openWidgetBtn)

        await expect(aiWidget.userMessageInput).toBeClickable()

        await elementHelper.click(header.productsBtn)
        await elementHelper.click(megaMenu.productVoiceAI)

        await expect(browser).toHaveUrl(expect.stringContaining('/voice-ai-agents'))

        await expect(aiWidget.userMessageInput).toBeClickable()
    })
})