import { BaseElement } from "./base-element";

export class Reference extends BaseElement {
    constructor(selector: string){
        super(selector);
    }

    public click(): void {
        this.get_element().click();
    }

}