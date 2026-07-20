class Footer {
    get siteFooter () {return $('#site-footer')}
    
    get socialSection () {return $('p=Social')}
    get companySection () {return $('p=Company')}
    get legalSection () {return $('p=Legal')}
    get compareSection () {return $('p=Compare')}
    get askAISection () {return $('h3=Ask AI')}

    get releaseNotesLink () {return this.companySection.parentElement().$('a=Release Notes')}
    get cookiePolicyLink () {return this.legalSection.parentElement().$('a=Cookie Policy')}
    get twilioLink () {return this.compareSection.parentElement().$('a=Twilio')}
}

export default new Footer()