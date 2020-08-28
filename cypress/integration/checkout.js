describe('Checkout 1º Turno', () => {
  it('login', () => {
    const user = Cypress.env('COOPERSYSTEM_USERNAME');
    const pass = Cypress.env('COOPERSYSTEM_PASSWORD');
    cy.visit('http://edesenv3.coopersystem.com.br/edesenv2/');
    cy.get('input[id=username]').type(`${user}`);
    cy.get('input[id=password]').type(`${pass}{enter}`);
    cy.get('button[id=saida_1]').click();
  });
});
