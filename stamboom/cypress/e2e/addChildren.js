it("remove again", () => {




  // Needs to be in same it to stay on page
  cy.intercept('http://localhost:9000/api/users/login').as('login');
  cy.visit("http://localhost:5173/info/1");
  cy.get("#nav_btn_login").click();
  cy.get("#userName").clear().type("admin")
  cy.get("#password").clear().type("test123")
  cy.get('#login-button').click().wait('@login').visit('http://localhost:5173/info/1')

  cy.get("#addChildren_button").click();

  cy.get("[data-cy=name_input]").type("George Washington");
  cy.get("[data-cy=birth_input]").type("1732-02-22");
  cy.get("[data-cy=bio_input]").type("Eerste president van de VS");
  cy.get("[data-cy=submit_parent]").click();

  cy.visit('http://localhost:5173/stamboom');

  cy.get("[data-cy=member_name]").contains("George Washington");
});