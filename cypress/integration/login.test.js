describe('Login Page', () => {

  before(function () {
    cy.visit('/login');
  });

  it('should display the login form page', () => {
    //check form inputs are correct
    cy.contains('Your email');
    cy.contains('Your password');
  });

  it('logs in a user', () => {
    //fill in form with valid values
    cy.get('#email').type('test@testing.com');
    cy.get('#password').type('abcdeFGH');

    //submit form
    cy.get('button').contains('Submit').click();
  });

  it('should navigate to welcome after successful form submission', () => {
    cy.url().should('include', 'welcome');
  })

  it('log out succesfully', () => {
    cy.get('#logout').click();
    cy.contains('Home Page');
  })
})


