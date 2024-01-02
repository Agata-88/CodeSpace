//Desctibe block to group related tests under a title
describe('template spec', () => {
   //Test case within the describe block
  it('Visits the Commands Action Page and Interacts with the Action Button and Canvas', () => {
   //Visits Example Page by opening the URL
   cy.visit('https://example.cypress.io/commands/actions');

   //Click on the Action Button
   cy.get(".action-btn").click();

   //Click on the Canvas Element
   cy.get("#action-canvas").click();// Click in the center of the element by default

   // Click on the Top Left of the canvas
   cy.get("#action-canvas").click("topLeft");

   // Click on the Bottom Right of the canvas
   cy.get("#action-canvas").click("bottomRight");
  })
})