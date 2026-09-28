describe('Home page', () => {
  it('loads and shows the Get started heading', () => {
    cy.visit('/');
    cy.contains('h1', 'Get started').should('be.visible');
  });

  it('increments the counter when the button is clicked', () => {
    cy.visit('/');
    cy.contains('button', 'Count is 0').click();
    cy.contains('button', 'Count is 1').should('be.visible');
  });
});
