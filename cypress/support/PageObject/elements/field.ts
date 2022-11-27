import { BaseElement } from "./base-element";
export class Field extends BaseElement {
    
    constructor(selector: string){
        super(selector);
    }

    private type(text: string): Cypress.Chainable<JQuery<HTMLElement>>{
         return this.get_element().type(text);
    }

    public clearAndType(text: string): Cypress.Chainable<JQuery<HTMLElement>>{
        return this.get_element().clear().type(text);
   }

}