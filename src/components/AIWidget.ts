class AIWidget {
    get siteAIWidget() {return $('div[data-widget-theme="light"]')}
    get openWidgetBtn() {return this.siteAIWidget.$('button')}
    get closeWidgetBtn() {return this.siteAIWidget.$$('span[data-state="closed"]')[1]}

    get userMessageInput() {return $('#user-message-input')}

    get chatMessages() {return $$('.text-base')}
}

export default new AIWidget()