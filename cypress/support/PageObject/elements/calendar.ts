import { BaseElement } from "./base-element";

export class Calendar extends BaseElement{

    public date: string;
    
    constructor(selector: string){
        super(selector);
    }

    //div[data-test="transaction-list-filter-date-range-button"]
    //div.Cal__Header__wrapper
    //cy.get('.Cal__Day__today > span') - today span
    //

    // Select Date text
    private selectDateText(): Cypress.Chainable<JQuery<HTMLElement>>{
        return cy.get('div.Cal__Header__wrapper');
    }     

    private get_enterPoint(): Cypress.Chainable<JQuery<HTMLElement>> {
        return this.get_element().click({force: true});  //withot '{force: true}' unimpossible to click() on element due to "it's unvisible " 
    } 
    
    public openCalendar(): Calendar{
        this.get_enterPoint();
        this.selectDateText().should('exist');
        cy.get('Cal__MonthList__root').scrollTo('bottom');
        return this;
    }

}