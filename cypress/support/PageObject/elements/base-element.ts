export abstract class BaseElement{
    
    private elementName: string;
    private selector: string;
    private element: Cypress.Chainable<JQuery<HTMLElement>>;
   
    constructor(selector: string, elementName: string ){
        this.elementName = elementName;
        this.selector = selector;
    }


    public get_element():Cypress.Chainable<JQuery<HTMLElement>> {
        this.element = cy.get(this.selector);
        return this.element;
    }

}