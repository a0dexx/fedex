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

    //redirect to welcome page after successful sign up
    cy.url().should('include', 'welcome');
  });
})


// <simple-snack-bar class="mat-simple-snackbar ng-star-inserted"><span>Unable to sign in</span><!--bindings={
// "ng-reflect-ng-if": "false"
// }--></simple-snack-bar>
