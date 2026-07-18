import { expect } from '@wdio/globals'
import homePage from '@pages/home.page.ts'
import signupPage from '@pages/signup.page.ts'
import elementHelper from '@helpers/ElementHelper.ts'
import header from '@components/Header.ts'

describe('Registration form UI, TC-10', () => {
    it('Should verify switching between Business Registration and Freemium Registration updates the displayed form correctly', async () => {
        await homePage.open('/')

        await elementHelper.expectVisibleAndEnabled(header.signupBtn)
        await elementHelper.click(header.signupBtn)

        await expect(browser).toHaveUrl(expect.stringContaining('/sign-up'))
        await expect(signupPage.createAccountHeading).toBeDisplayed()

        await expect(signupPage.signupEmail).toBeDisplayed()
        await expect(signupPage.signupFirstname).toBeDisplayed()
        await expect(signupPage.signupLastname).toBeDisplayed()
        await expect(signupPage.signupPassword).toBeDisplayed()
        await expect(signupPage.businessHeading).toBeDisplayed()

        await elementHelper.click(signupPage.freemiumBtn)

        await expect(signupPage.freemiumEmailInput).toBeDisplayed()
        await expect(signupPage.freemiumHeading).toBeDisplayed()

        await expect(signupPage.signupEmail).not.toBeDisplayed()
        await expect(signupPage.signupFirstname).not.toBeDisplayed()
        await expect(signupPage.signupLastname).not.toBeDisplayed()
        await expect(signupPage.signupPassword).not.toBeDisplayed()
        await expect(signupPage.businessHeading).not.toExist()
    })
})