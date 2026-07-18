class Header {
    get #header () {return $('#site-header')} 
    get #mainMenu () {return $('#main-menu')}

    get productsBtn () {return this.#mainMenu.$('span=Products')}
    get whyTelnyxBtn () {return this.#mainMenu.$('span=Why Telnyx')}
    get solutionsBtn () {return this.#mainMenu.$('span=Solutions')}
    get resourcesBtn () {return this.#mainMenu.$('span=Resources')}
    get pricingBtn () {return this.#mainMenu.$('span=Pricing')}

    get telnyxLogoBtn () {return $('[href="/"]')}
    get loginBtn () {return this.#header.$('div.ml-auto').$('a=Log in');}
    
/*     get hamburgerBtn () {return $('[aria-controls="main-menu-content"]')} */








}

export default new Header()