describe("Tree exists test", () => {

	it("get members", () => {

        cy.visit('http://localhost:5173/stamboom');
        cy.intercept('GET', 'http://localhost:9000/api/members');

        cy.get('.subOptions_tree').should('exist');
        
	});
});

