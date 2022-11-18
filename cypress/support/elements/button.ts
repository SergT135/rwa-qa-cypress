import { IButton } from "./interfaces";

export class Button implements IButton{

    public css: string;
   
    click(): void {
        cy.get(this.css).click();        
    }    
}