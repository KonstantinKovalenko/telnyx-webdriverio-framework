class AIWidget {
    get aiWidget() {return $('div[data-widget-theme="light"]')}
    get openWidgetBtn() {return this.aiWidget.$('button')}
    get closeWidgetBtn() {return this.aiWidget.$$('span[data-state="closed"]')[1]}

    get userMessageInput() {return $('#user-message-input')}

    get chatMessages() {return $$('.text-base')}


}

export default new AIWidget()