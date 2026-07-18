import BasePage from './base.page.js';

class HomePage extends BasePage {
    get cookieBanner() {return $('#onetrust-banner-sdk')}
    get acceptAllBtn() {return $('#onetrust-accept-btn-handler')}
}

export default new HomePage()