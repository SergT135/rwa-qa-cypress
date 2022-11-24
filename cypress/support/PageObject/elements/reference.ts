import { BaseElement } from "./base-element";

export class Reference extends BaseElement {
    constructor(selector: string){
        super(selector);
    }

    public click(): void {
        this.get_element().click();
    }

    public getHref():Cypress.Chainable<JQuery<HTMLElement>>{
        return this.get_element().invoke('attr', 'href');
    }

}