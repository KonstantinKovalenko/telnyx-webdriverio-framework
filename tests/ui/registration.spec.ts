import { expect } from '@wdio/globals'
import homePage from '@pages/home.page.ts'
import signupPage from '@pages/signup.page.ts'
import header from '@components/Header.ts'
import elementHelper from '@helpers/ElementHelper.ts'

describe('Registration form UI, TC-10', () => {
    it('Should verify switching between Business Registration and Freemium Registration updates the displayed form correctly', async () => {
        await homePage.open('/')

        await elementHelper.expectVisibleAndEnabled(header.signupBtn)
        await elementHelper.click(header.signupBtn)

        await expect(browser).toHaveUrl(expect.stringContaining('/sign-up'))

        await expect(signupPage.createAccountHeading).toBeDisplayed()
        await expect(signupPage.businessEmailInput).toBeDisplayed()
        await expect(signupPage.businessFirstnameInput).toBeDisplayed()
        await expect(signupPage.businessLastnameInput).toBeDisplayed()
        await expect(signupPage.businessPasswordInput).toBeDisplayed()
        await expect(signupPage.businessHeading).toBeDisplayed()

        await elementHelper.click(signupPage.freemiumBtn)

        await expect(signupPage.freemiumEmailInput).toBeDisplayed()
        await expect(signupPage.freemiumHeading).toBeDisplayed()

        await expect(signupPage.businessEmailInput).not.toBeDisplayed()
        await expect(signupPage.businessFirstnameInput).not.toBeDisplayed()
        await expect(signupPage.businessLastnameInput).not.toBeDisplayed()
        await expect(signupPage.businessPasswordInput).not.toBeDisplayed()
        await expect(signupPage.businessHeading).not.toExist()
    })
})