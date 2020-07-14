describe('Home Page', () => {
  it('should display the home page', () => {

    cy.visit('/');
    // land at the home page
    cy.contains('Home Page');

    // click link goes to right location
    cy.get('#register-link').should('have.prop', 'href')
      .and('contain', '/signup');
  });


  it('click through to the signup page', function () {

    // click link and navigate to signup page
    cy.get('#register-link').click();
    cy.url().should('include', 'signup');
  })


})
