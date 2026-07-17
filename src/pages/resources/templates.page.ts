import { $ } from '@wdio/globals'
import BasePage from '../base.page.ts';

class AITemplatesPage extends BasePage {
    get #topTemplatesArray () {return $('.glider-track').$$('div')}
    get backToTemplatesBCrumb () {return $('a=Back to templates')}

    async getFirstCard (){
        return this.#topTemplatesArray[0]
    }
    
    async getFirstCardTitle (){
        return await this.#topTemplatesArray[0].$('h3').getText()
    }

}

export default new AITemplatesPage()