class MegaMenu {
    get productInference () {return $('h2=Inference')}
    get whyTelnyxGlobalComm () {return $('h2=Global communications')}

    get resourcesAITemplates () {return $('h2=AI Templates')}

    get solutionsHealthcare () {return $('h2=Healthcare')}
    get solutionsFinance () {return $('h2=Finance')}
    get solutionsTravelAndHospitality () {return $('h2=Travel and Hospitality')}
    get solutionsLogisticsAndTransportation () {return $('h2=Logistics and Transportation')}
    get solutionsExploreMoreCaption () {return $('p=Explore more')}
    get solutionsViewAllSolutionsLink () {return $('[data-content="View all solutions"]')}

    get pricingSipTrunking () {return this.solutionsExploreMoreCaption.parentElement().$('a=SIP Trunking')}

}

export default new MegaMenu()