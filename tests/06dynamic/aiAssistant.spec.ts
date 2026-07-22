import { expect } from '@wdio/globals'
import { Key } from 'webdriverio'
import homePage from '@pages/home.page.ts'
import aiWidget from '@components/aiWidget.ts'
import header from '@components/header.ts'
import megaMenu from '@components/megaMenu.ts'
import elementHelper from '@helpers/elementHelper.ts'
import waitHelper from '@helpers/waitHelper.ts'

describe('Dynamic widget testing, TC-19, TC-20', () => {
    beforeEach(async () => {
        await homePage.open('/')
    })

    it('Should verify the AI Assistant opens, responds to a user message, and can be closed', async () => {
        await aiWidget.siteAIWidget.waitForDisplayed()

        await elementHelper.click(aiWidget.openWidgetBtn)

        const welcomeText = await aiWidget.getWelcomeMessageText()
        expect(welcomeText).toContain('Hello! I can help')

        await elementHelper.type(aiWidget.userMessageInput, "Hello")
        await browser.keys(Key.Enter)

        await waitHelper.waitUntil(async () => {return (await aiWidget.getChatMessageCount()) >= 3
            },20000, 'Expected 3 chat messages to be displayed')

        const lastText = await aiWidget.getLastChatMessageText()
        expect(lastText).toContain('Hello! How can I assist')

        await elementHelper.click(await aiWidget.getCloseWidgetBtn())
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