export abstract class BaseElement{
        
    public tagName: string;
    private selector: string;
    private element: Cypress.Chainable<JQuery<HTMLElement>>;
   
    constructor(selector: string){
        this.selector = selector;        
        this.element = cy.get(this.selector); 
        cy.log("this.selector = "+ this.selector);
        cy.log("this.tagName 0 = "+ this.tagName);
                   
        cy.get(this.selector).invoke('prop', 'tagName').then($tagName =>{
            cy.log("$tagName = " + $tagName)
            this.tagName = $tagName;
            cy.log("this.tagName в блоке then() = "+ this.tagName); 
            cy.log(`this.selector в блоке then() = ${this.selector}`);      
        })
            cy.log("this.tagName 2 = "+ this.tagName);
                          
        // cy.get(this.selector).invoke('prop', 'tagName').then($tagName => {
        //    this.tagName = "tagName";
        // });
            
        //this.set_tagName();

    }
    
    public get_element():Cypress.Chainable<JQuery<HTMLElement>> {        
        //this.element = cy.get(this.selector);
        return this.element;       
    }

    public get_tagName(): string {
        return this.tagName;        
    }
    
    //Attribut tagName    
    set_tagName(){
        cy.get(this.selector).invoke('prop', 'tagName').then(tagName => {
            //this.tagName = tagName;
        })
    }   

}