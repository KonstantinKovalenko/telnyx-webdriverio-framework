import { $ } from '@wdio/globals'
import BasePage from '../base.page.ts';

class MessagingPage extends BasePage {
    get senderTypesHeader () {return $('h2*=SENDER types')}
    get servicesTable () {return $('#services')}
    get rcsPricingTable () {return $('#rcs-rich-pricing-table')}
    get carrierFeeLinks () {return this.servicesTable.$$('a=carrier fee')}

    get rcsTab() {return $('button=RCS')}
}

export default new MessagingPage()