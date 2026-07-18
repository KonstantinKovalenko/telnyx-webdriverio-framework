import { expect } from '@wdio/globals'
import { users } from '@utils/testData.ts'
import homePage from '@pages/home.page.ts'
import header from '@components/Header.ts'
import elementHelper from '@helpers/ElementHelper.ts'
import contactUsPage from '@pages/contactUs.page.ts'

describe('Contact us form email validation, TC-09', () => {
    beforeEach(async () => {
        await homePage.open('/')
    })

    it('Should display an email validation error for an invalid email address', async () => {
        await elementHelper.expectVisibleAndEnabled(header.contactUsBtn)
        await elementHelper.click(header.contactUsBtn)

        await expect(browser).toHaveUrl(expect.stringContaining('/contact-us'))
        await expect(contactUsPage.mainForm).toBeDisplayed()

        await elementHelper.type(contactUsPage.emailInput, users.invalidUser.email)
        await elementHelper.type(contactUsPage.firstnameInput, users.validUser.firstName)
        await elementHelper.type(contactUsPage.lastnameInput, users.validUser.lastName)
        await contactUsPage.reasonSelect.selectByVisibleText('Support')

        await elementHelper.click(contactUsPage.submitBtn)

        await expect(contactUsPage.emailValidationMsg).toHaveText(expect.stringContaining('Must be valid email'))
    })
})