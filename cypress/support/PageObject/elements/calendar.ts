import { extendWith } from "cypress/types/lodash";
import { BaseElement } from "./base-element";

export class Calendar extends BaseElement{

    public date: string;
    
    constructor(selector: string){
        super(selector);
    }

    //div[data-test="transaction-list-filter-date-range-button"]
    //cy.get('[data-test="transaction-list-filter-date-range-button"] > .MuiChip-label').should('exist');
    //cy.get('[data-test="transaction-list-filter-date-range-button"] > .MuiChip-label').click({force: true});

    // Select Date text
    private selectDateText(): Cypress.Chainable<JQuery<HTMLElement>>{
        return cy.get('div.Cal__Header__wrapper');
    }    

    // Open up Calendar
    private get_enterPoint(): Cypress.Chainable<JQuery<HTMLElement>> {
        return this.get_element().click({force: true});  //withot '{force: true}' unimpossible to click() on element due to "it's unvisible " 
    } 
    
    public openCalendar(data_1: string, data_2: string): Calendar{
        this.get_enterPoint();
        this.selectDateText().should('exist');
        //cy.get('.Cal__MonthList__root').scrollTo('0%','100%', { duration: 2000 });
        Calendar.setDate(data_1); // 1st date of interval
        Calendar.setDate(data_2); // 2nd date of calendar         
        return this;
    }


    // Choose date
    protected static  setDate(date: string, scrollpos: number = 0){
        //Percentage of scrolling per date
        //100% - 2050-12-31
        // 58% - 2022-05-15
        // 57% - 2021-08-22
        // 56% - 2020-11-29
        // 0%  - 1980-01-01 
        //2022-09-01 (-90 days / 13 weeks) 2022-11-30(today)  (+90 days / 13 weeks)  2023-02-28      

        let today = new Date();
        let date_ = new Date(date);
        let diff_time = today.getTime()-date_.getTime(); // diff in ms
        let diff_weeks = Math.abs( Math.ceil( (diff_time / (1000 * 3600 * 24)) / 7 ) ); // diff in weeks
               
               
        let step= scrollpos + "%"; //'0%'
        cy.log('1 step=:'+ step);
        console.log("1 " + step);
        
        if (diff_weeks <= 13){
            // dates within 13 weeks are available, no need scroll (for more time efficient)
            cy.get('[data-date="' + date + '"]').should('exist').click({force: true}).should('have.class','Cal__Day__selected'); //for search "around" "today" 
            return;
        }

        // for more distant dates, scroll to beginning and then scroll until find them
        cy.get('.Cal__MonthList__root').scrollTo('0%', step , { duration: 500 });
        
        cy.get('div.Cal__MonthList__root').find('li[data-date]').each(function ($el, index, $list){            
            ////console.log($el, index, $list);
            let qlt = Cypress.$($list).length; //qulity of elements in collection
            
            ///console.log(qlt);
            ///console.log(index); //current index

            let data_date = Cypress.$($el).attr("data-date")
            
            if (data_date !== date){                
                // Check if we are in object yet
                if (qlt == (index + 1)){
                    // walked all collection, then we should scroll calendar                                        
                    scrollpos = scrollpos + 1;
                    if (scrollpos <= 100){
                        // defense from overflow scroll-position                        
                        Calendar.setDate(date, scrollpos); //scrolling again
                    }
                }                
            } else {
                ///cy.log(`data_date's been found!!!! + ${data_date}`);
                ///console.log('date===!!!!!!!!' + data_date);
                cy.wrap($el).click({force: true});
                cy.wrap($el).should('have.class','Cal__Day__selected');
                return false;  //to stop iterations         
            }      
                       
         })         
        return;
    }




}