import { $ } from '@wdio/globals'
import BasePage from './base.page.ts'

class ContactUsPage extends BasePage {
    get createAccountHeading() {return $('h1*=Create your account')}
    get businessHeading() {return $('h2*=Power Up Your Business')}
    get freemiumHeading() {return $('h2*=Start Building for Free')}

    get businessEmailInput() {return $('#sign-up-email')}
    get businessFirstnameInput() {return $('#sign-up-first-name')}
    get businessLastnameInput() {return $('#sign-up-last-name')}
    get businessPasswordInput() {return $('#sign-up-password')}
    get freemiumEmailInput() {return $('#freemium-email')}

    get freemiumBtn() {return $('button=Freemium')}
}

export default new ContactUsPage()