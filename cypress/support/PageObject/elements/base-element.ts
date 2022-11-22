import { values } from "cypress/types/lodash";

export abstract class BaseElement{
        
    public tagName: string;    
    private selector: string;
    private element: Cypress.Chainable<JQuery<HTMLElement>>;
   
    constructor(selector: string){
        this.selector = selector;        
        this.element = cy.get(this.selector); 
        cy.log("this.selector = "+ this.selector);       
                   
        // cy.get(this.selector).invoke('prop', 'tagName').then($tagName =>{
        //     cy.log("$tagName = " + $tagName)
        //     this.tagName = $tagName;
        //     cy.log("this.tagName в блоке then() = "+ this.tagName);  //here value is correct!
        //     cy.log(`this.selector в блоке then() = ${this.selector}`);      
        // })
        // cy.log("this.tagName 2 = "+ this.tagName); //but here always underfined
                          
        //this.set_tagName();       

    }
    
    public get_element():Cypress.Chainable<JQuery<HTMLElement>> {        
        //this.element = cy.get(this.selector);        
        return this.element;       
    }

    public get_tagName__ (){
        //return this.element.invoke('prop', 'tagName');  // reterns type [object Object]
        return cy.get(this.selector).invoke('prop', 'tagName');    // also returns type [object Object]
        // return cy.get(this.selector).invoke('prop', 'tagName').its('tagName'); // no prop tagName

       
        // cy.get(this.selector).invoke('prop', 'tagName').then($tagName => {
        //     return $tagName;     /// always=underfined        
        // })            
        
    }
    
    //Attribut tagName    
    set_tagName(){
        cy.get(this.selector).invoke('prop', 'tagName').then($tagName => {
           // this.tagName = $tagName;
        })
    }   

}