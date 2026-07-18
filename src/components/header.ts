class Header {
    get siteHeader () {return $('#site-header')} 
    get mainMenu () {return $('#main-menu')}

    get hamburgerBtn () {return $('[aria-controls="main-menu-content"]')}
    get telnyxLogoBtn () {return $('[href="/"]')}
    
    get productsBtn () {return this.mainMenu.$('span=Products')}
    get whyTelnyxBtn () {return this.mainMenu.$('span=Why Telnyx')}
    get solutionsBtn () {return this.mainMenu.$('span=Solutions')}
    get resourcesBtn () {return this.mainMenu.$('span=Resources')}
    get pricingBtn () {return this.mainMenu.$('span=Pricing')}
    get developersBtn () {return this.mainMenu.$('span=Developers')}

    get loginBtn () {return this.siteHeader.$('div.ml-auto').$('a=Log in')}
    get contactUsBtn () {return this.siteHeader.$('div.ml-auto').$('a=Contact us')}
    get signupBtn () {return this.siteHeader.$('div.ml-auto').$('a=Sign up')}
    

}

export default new Header()