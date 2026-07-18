import BasePage from './base.page.ts';

class IntegrationsPage extends BasePage {
    get searchInput() {return $('input[name="search"]')}
    get integrationResults() {return $('#integrations').$$('li')}

}

export default new IntegrationsPage()