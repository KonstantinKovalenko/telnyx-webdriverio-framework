import BasePage from './base.page.ts';

class Error404Page extends BasePage {
    get errorHeading() {return $('h2*=Error 404')}
    get doesnotExistHeading() {return $('h1*=doesn’t exist')}

    get backToHomeBtn() {return $('span=Back to home')}

}

export default new Error404Page()