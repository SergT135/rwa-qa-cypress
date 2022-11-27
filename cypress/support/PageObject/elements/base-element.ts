
export abstract class BaseElement{
        
    private tagName: Cypress.Chainable<JQuery<HTMLElement>>;    
    private selector: string;
    private element: Cypress.Chainable<JQuery<HTMLElement>>;
   
    constructor(selector: string){
        this.selector = selector;        
        this.element = cy.get(this.selector); 
        ///// this.tagName = cy.get(this.selector).invoke('prop', 'tagName');             
    }
    
    public get_element(): Cypress.Chainable<JQuery<HTMLElement>> {        
        //// this.element = cy.get(this.selector);        
        return this.element;       
    }    

    public get_backgroundColor(): Cypress.Chainable<JQuery<HTMLElement>>{
        return cy.get(this.selector).invoke('css', 'background-color');
    }    
    
    public get_tagName(): Cypress.Chainable<JQuery<HTMLElement>>{
         return cy.get(this.selector).invoke('prop', 'tagName').then(prop => {
            //console.log(`TagName = ${prop}`);            
         });       
    } 
    
    
    private ___get_tagName(): Cypress.Chainable<JQuery<HTMLElement>>{
        return this.tagName;
    }
}