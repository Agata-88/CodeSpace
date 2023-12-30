//Desctibe block to group related tests under a title 
describe('Example Cypress Test', () => {
 //Test case within the describe block
  it('Visits the Example Page and Interacts with an Element', () => {
   //Visits the Eample Page by open the URL
    cy.visit('https://example.cypress.io');

    //Query for an Element with the class "home-list" 
    //containing the text "Querying" and click on it
    cy.get(".home-list").contains("Querying").click();

    //Assert about the content of the Page
    //Check if the URL contains "/commands/querying"
    cy.url().should("include", "/commands/querying");

    // Check if there is exactly one Element with the class "query-list"
    cy.get(".query-list").should("have.length", 1);

    //Check if the element with class ".query-list>li" has the class "first"
    cy.get(".query-list>li").should("have.class", "first");

    //Check if the element with the class  ".query-list>li.first" contains the text "apples"
    cy.get(".query-list>li.first").should("contain", "apples");

  })
})