import { $ } from '@wdio/globals'
import BasePage from '../base.page.ts';

class ResourcesPage extends BasePage {
    get mostPopularHeading () {return $('h3=Most popular')}
    get popularCardsArray() {return $$('//h3[text()="Most popular"]/ancestor::section//div[contains(@class,"glider-slide")]//a')}

    async getFirstCardTitle (){
        return this.popularCardsArray[0].$('strong')
    }

    async getFirstCardDescription(){
        return this.popularCardsArray[0].$('h3')
    }

}

export default new ResourcesPage()