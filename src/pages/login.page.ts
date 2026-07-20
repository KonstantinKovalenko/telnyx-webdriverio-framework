import { $ } from '@wdio/globals'
import BasePage from './base.page.ts'

class LoginPage extends BasePage {
    get signInWithPasswordBtn() {return $('button=Sign in with password')}
    get sendMeLinkBtn () {return $('button=Send me sign-in link')}
    get loginBtn () {return $('button=Log in')}

    get signInHeader () {return $('h1=Welcome Back')}
    get emailErrorMessage () {return $('p*=Please')}
    get errorNotification () {return $('div=Email is required')}

    get emailInput () {return $('input[name="email"]')}
    get passwordInput () {return $('input[name="password"]')}

    async open (){
        await browser.url('https://portal.telnyx.com/')
    }
}

export default new LoginPage()