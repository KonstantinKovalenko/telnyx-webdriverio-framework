import { expect } from '@wdio/globals'
import { users } from '@utils/testData.ts'
import homePage from '@pages/home.page.ts'
import loginPage from '@pages/logIn.page.ts'
import header from '@components/header.ts'
import elementHelper from '@helpers/elementHelper.ts'

describe('Login form validations, TC-05, TC-06', () => {
    it('Should verify Login form validation using an invalid email format', async () => {
        await homePage.open('/')
        
        await elementHelper.expectVisibleAndEnabled(header.loginBtn)
        await elementHelper.click(header.loginBtn)

        await browser.waitUntil(async () => (await browser.getWindowHandles()).length === 2)
        await browser.switchToWindow((await browser.getWindowHandles()).at(-1)!)
        
        await expect(browser).toHaveUrl(expect.stringContaining('portal.telnyx.com'))

        await elementHelper.expectVisibleAndEnabled(loginPage.signInWithPasswordBtn)
        await elementHelper.click(loginPage.signInWithPasswordBtn)

        await expect(loginPage.emailInput).toHaveValue('')
        await expect(loginPage.passwordInput).toHaveValue('')

        await elementHelper.type(loginPage.emailInput, users.invalidUser.email)
        await elementHelper.type(loginPage.passwordInput, users.invalidUser.password)

        await expect(loginPage.emailErrorMessage).toHaveText(expect.stringContaining('Please enter a valid email address'))
    })

    it('Should verify Login form validation with empty required fields', async () => {
        await loginPage.open()

        await expect(browser).toHaveUrl(expect.stringContaining('portal.telnyx.com'))

        await elementHelper.expectVisibleAndEnabled(loginPage.emailInput)

        await expect(loginPage.emailInput).toHaveValue('')

        await elementHelper.click(loginPage.sendMeLinkBtn)

        await expect(loginPage.errorNotification).toBeDisplayed()
    })
})