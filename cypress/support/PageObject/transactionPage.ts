import { Reference, LeftMenu, Calendar } from "../../..";

export class TransactionPage extends LeftMenu {

    public calendar: Calendar; 
            
    public logo(): Cypress.Chainable<JQuery<HTMLElement>>{
        return cy.get('[data-test="app-name-logo"]'); // Logo
    }
    
    // Multitab's buttons
    public optionEveryone(): Reference{        
        return new Reference('a[data-test="nav-public-tab"]');          
    }

    public optionFriends(): Reference{        
        return new Reference('a[data-test="nav-contacts-tab"]');          
    }

    public optionMine(): Reference{        
        return new Reference('a[data-test="nav-personal-tab"]');          
    }

    public multilistHeader(): Cypress.Chainable<JQuery<HTMLElement>>{        
        return cy.get('[data-test="app-name-logo"]');          
    }

    public transactionTypeHeader(): Cypress.Chainable<JQuery<HTMLElement>>{        
        return cy.get('.MuiListSubheader-root');          
    }

    public setDate(){
        this.calendar = new Calendar('div[data-test="transaction-list-filter-date-range-button"]');
        this.calendar.openCalendar();

    }
    
}