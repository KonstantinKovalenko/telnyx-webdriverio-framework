import { $ } from '@wdio/globals'
import BasePage from '../base.page.ts';

class ElasticSipPage extends BasePage {
    get downloadPricingHeader () {return $('h2*=Download pricing')}
    get firstnameValidationMsg () {return $('#ValidMsgFirstName')}

    get firstnameInput () {return $('#FirstName')}
    get lastnameInput () {return $('#LastName')}
    get emailInput () {return $('#Email')}

    get submitBtn () {return $('button=Submit')}
       
    async open (){
        await browser.url('https://telnyx.com/pricing/elastic-sip')
    }

}

export default new ElasticSipPage()