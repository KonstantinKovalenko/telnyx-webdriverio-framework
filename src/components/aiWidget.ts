class AIWidget {
    get siteAIWidget() {return $('div[data-widget-theme="light"]')}
    get openWidgetBtn() {return this.siteAIWidget.$('button')}

    get userMessageInput() {return $('#user-message-input')}

    get #chatMessages() {return $$('.text-base')}
    get #widgetBtnsArray() {return this.siteAIWidget.$$('span[data-state="closed"]')}

    async getCloseWidgetBtn() {
        const buttons = this.#widgetBtnsArray
        return buttons[1]
    }

    async getWelcomeMessageText(){
        const messages = this.#chatMessages
        const count = await messages.length

        if (!count) {
            return ''
        }
        return await messages[0].getText()
    }

    async getLastChatMessageText() {
        const messages = this.#chatMessages
        const count = await messages.length

        if (!count) {
            return ''
        }
        return await messages[count - 1].getText()
    }

    async getChatMessageCount() {
        return await this.#chatMessages.length
    }
}

export default new AIWidget()