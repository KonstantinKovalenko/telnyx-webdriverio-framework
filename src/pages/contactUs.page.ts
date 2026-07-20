import { $ } from '@wdio/globals'
import BasePage from './base.page.ts'

class ContactUsPage extends BasePage {
    get mainForm() {return $('#mktoForm_1987')}

    get reasonSelect() {return $('#Reason_for_Contact__c')}

    get firstnameInput() {return $('#FirstName')}
    get lastnameInput() {return $('#LastName')}
    get emailInput() {return $('#Email')}
    
    get submitBtn() {return $('[class="mktoButton"]')}

    get emailValidationMsg() {return $('#ValidMsgEmail')}
}

export default new ContactUsPage()