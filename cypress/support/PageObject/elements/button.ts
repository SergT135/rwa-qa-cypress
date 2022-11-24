import { BaseElement } from "./base-element";
export class Button extends BaseElement{

    constructor(selector: string){
        super(selector);
    }

    public click(): void {
        this.get_element().click();
    }

    public getBackGroundColor():Cypress.Chainable<JQuery<HTMLElement>>{
        //return this.get_element().invoke('prop', 'type');
        return this.get_element().invoke('prop', 'background'); // bgColor
    }

}