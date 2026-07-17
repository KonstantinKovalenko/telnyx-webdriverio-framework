class Header {
/*     get header () {return $('#site-header')}  */
    get #mainMenu () {return $('#main-menu')}

    get productsBtn () {return this.#mainMenu.$('span=Products')}
    get whyTelnyxBtn () {return this.#mainMenu.$('span=Why Telnyx')}
    get telnyxLogoBtn () {return $('[href="/"]')}
    get solutionsBtn () {return this.#mainMenu.$('span=Solutions')}
    get resourcesBtn () {return this.#mainMenu.$('span=Resources')}
    
/*     get hamburgerBtn () {return $('[aria-controls="main-menu-content"]')} */








}

export default new Header()