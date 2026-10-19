import App from './App.jsx';

describe('App', () => {
  it('renders the get started heading', () => {
    cy.mount(<App />);
  });
});
