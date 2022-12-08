import { BaseElement } from "../elements";

export class Amount extends BaseElement{
    public value: string;
    
    constructor(selector: string){
        super(selector);
    }    

    // Select Amount text
    private selectAmountText(): Cypress.Chainable<JQuery<HTMLElement>>{
        return cy.get('p[data-test="transaction-list-filter-amount-range-text"]');
    } 

    // Open up amount window
    private get_enterPoint(): Cypress.Chainable<JQuery<HTMLElement>> {
        return this.get_element().click({force: true});  //withot '{force: true}' unimpossible to click() on element due to "it's unvisible " 
    }

    public openAmount(): Amount {
        this.get_enterPoint();
        this.selectAmountText().should('exist');
        this.setValue();

        return this;
    }

    // Set value
    protected setValue(){
        cy.get('div[data-test="transaction-list-filter-amount-range"] input[type="hidden"]')
        .should('exist').invoke('val', '62,97')
        //.trigger('change', {force: true});

    }
    

    

}