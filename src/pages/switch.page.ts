import BasePage from './base.page.ts';

class SwitchPage extends BasePage {
    get stopOverpayHeading() {return $('h2*=Stop overpaying')}
    get programmableVoiceAccordion() {return $('button*=Programmable Voice')}
}

export default new SwitchPage()