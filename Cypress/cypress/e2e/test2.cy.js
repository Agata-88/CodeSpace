//Desctibe block to group related tests under a title 
describe('Writing The First Test 2', () => {
  //Test case within the describe block
  it('Visits the Command Actions Page and Types in the Email Field', () => {
    //Visits Example Page by opening the URL
    cy.visit('https://example.cypress.io/commands/actions');

    //Query for the Email input field using the attribute selector for input[type="email"]
  cy.get('input[type="email"]').as("emailInput");

    // Type the Email address into the field
    // Use the alian "emailInput" to reference the element
  cy.get("@emailInput")
  .type("test@test.com") //typing sepcified email address
  .should("have.value","test@test.com"); // Ensure that the input field has the expected value
  })
})