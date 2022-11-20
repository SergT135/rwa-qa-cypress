import { BaseElement } from "./base-element";
export class Button extends BaseElement{

    constructor(selector: string){
        super(selector);
    }

    public click(): void {
        this.get_element().click();
    }

}