/// <reference types= 'cypress'/>
import {allGalleries} from '../pageObjects/allGalleriesPOM';
import {faker} from '@faker-js/faker';
describe('page all galleries', ()=>{

    let filterData = {
        filterInput: faker.name.title(),
    };

    // findChildElement((parentElement, childElement) => {
    //     return cy.get(parentElement).find(childElement);
    // })
      
    // findChildElement('.cell', 'h2');

    it('visit all galleries page', ()=> {
        cy.visit('/');
        cy.get('.cell').should('have.length', 10).each((el)=>{
            expect(el.find('h2')).to.exist
        });
        
        
    });

    it('load more galleries', ()=>{
        allGalleries.loadMoreBtn.click();
        cy.get('.cell').should('have.length', 20).each((el)=>{expect(el.find('p')).to.exist});
        

    });
    
    it('filter galleries', ()=>{
        //allGalleries.filterGalleries(filterData.filterInput);
        allGalleries.filterGalleries('Roses')
        cy.get('h2').then((el) => {
          expect(el).contain('Roses')
        })
        cy.get('p').then((el) => {
          expect(el).contain('vesna')
        })
    
    });

    
});