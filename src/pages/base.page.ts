import { browser } from '@wdio/globals'

export default class BasePage {

    public open () {
        return browser.url(`https://telnyx.com/`)
    }
}
