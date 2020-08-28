describe('Checkin', () => {
  it('login', () => {
    const user = process.env.COOPERSYSTEM_USERNAME;
    const pass = process.env.COOPERSYSTEM_PASSWORD;
    cy.visit('http://edesenv3.coopersystem.com.br/edesenv2/');
    cy.get('input[id=username]').type(`${user}`);
    cy.get('input[id=password]').type(`${pass}{enter}`);
    cy.get('input[id=entrada_2]').click();
  });
});
