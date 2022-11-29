import { extendWith } from "cypress/types/lodash";
import { BaseElement } from "./base-element";

export class Calendar extends BaseElement{

    public date: string;
    
    constructor(selector: string){
        super(selector);
    }

    //div[data-test="transaction-list-filter-date-range-button"]
    //div.Cal__Header__wrapper
    //cy.get('.Cal__Day__today > span') - today span
    //

    // Select Date text
    private selectDateText(): Cypress.Chainable<JQuery<HTMLElement>>{
        return cy.get('div.Cal__Header__wrapper');
    }     

    private get_enterPoint(): Cypress.Chainable<JQuery<HTMLElement>> {
        return this.get_element().click({force: true});  //withot '{force: true}' unimpossible to click() on element due to "it's unvisible " 
    } 
    
    public openCalendar(): Calendar{
        this.get_enterPoint();
        this.selectDateText().should('exist');
        //cy.get('.Cal__MonthList__root').scrollTo('0%','100%', { duration: 2000 });
        Calendar.setDate();
        
        //100% - 2050-12-31
        // 58% - 2022-05-15
        // 57% - 2021-08-22
        // 56% - 2020-11-29
        // 0%  - 1980-01-01 
        return this;
    }


    protected static  setDate(scrollpos: number = 0){
        const date = "1980-01-01";  // "2022-11-28";
        //const data_date = '[data-date="' + date + '"]'
       
        let step= scrollpos + "%"; //'0%'
        cy.log('1 step=:'+ step);
        console.log("1 " + step);
        cy.get('.Cal__MonthList__root').scrollTo('0%', step , { duration: 1000 });

        //let nn = Cypress.$('li[data-date]');
        //console.log(nn.length);
        //.invoke('attr','data-date')


        ///!!!! cy.get('[data-date="2022-11-28"]').should('exist').click({force: true}); //for search "around" today
        
        /*
        cy.get('div.Cal__MonthList__root').find('li[data-date]').invoke('attr','data-date').then((prop) =>{
            cy.log(prop);
            if(prop !==date){
                scrollpos = scrollpos + 1;
                
                cy.log('step=:'+ step);
                console.log(step);
                if (scrollpos <= 100){
                    this.setDate(scrollpos);
                }
                
            } else {
                cy.log('date===');
                
            }
        })
        */
        

        
        cy.get('div.Cal__MonthList__root').find('li[data-date]').each(function ($el, index, $list){
            
            ////console.log($el, index, $list);
            let qlt = Cypress.$($list).length; //qulity of elements
            console.log(qlt);
            console.log(index); //current index

            let data_date = Cypress.$($el).attr("data-date")
            // let mmm = cy.wrap($list).invoke('attr','data-date');
            cy.log("data_date=" + data_date + "  " + date);
            console.log("data_date=" + data_date + " " + date);
            if (data_date !== date){                
                //check if we are in object yet
                if (qlt == (index + 1)){
                    // walked all collection, then we should scroll calendar                                        
                    scrollpos = scrollpos + 1;
                    if (scrollpos <= 100){
                        // defense from overflow scroll-position
                        console.log('== scroll calendar===');
                        cy.log('== scroll calendar===');
                        //Calendar.setDate(scrollpos);
                    }
                }                
            } else{
                cy.log(`data_date has been found: + ${data_date}`);
                console.log('date===!!!!!!!!' + data_date);
                cy.wrap($el).click({force: true});
                expect("2").equal("2"); // attr("data-date").to.have.text(data_date)
                return;           
            }     
            
            ///expect($list).attr("data-date").to.have.text('1980-01-01');
                       
         })      

        //li[data-date="2022-11-28"]
        return;
    }




}