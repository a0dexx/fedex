describe('Sign up Page', () => {

  before(function () {
    cy.visit('/signup');
  });

  it('should display the sign up form page', () => {
    //check form inputs are correct
    cy.contains('First Name');
    cy.contains('Last Name');
    cy.contains('Your email');
    cy.contains('Your password');
  });

  it('signs up a new user', () => {

    //fill in form with valid values
    cy.get('#firstName').type('bob');
    cy.get('#lastName').type('smith');
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


