import App from './App.jsx';

describe('App', () => {
  it('renders the get started heading', () => {
    cy.mount(<App />);
    cy.contains('h1', 'Get started').should('be.visible');
  });

  it('increments the counter when the button is clicked', () => {
    cy.mount(<App />);
    cy.contains('button', 'Count is 0').click();
    cy.contains('button', 'Count is 1').should('be.visible');
  });
});
