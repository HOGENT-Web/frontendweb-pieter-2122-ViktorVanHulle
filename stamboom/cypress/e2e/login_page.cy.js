
describe('Login test', () => {
    it('should run the application', () => {
        cy.visit('http://localhost:5173');
        cy.get('p').should('exist');
    });

    it('should login', () => {
        cy.login('admin', 'test123');
    })
});
