# Fedex

This is a demo app built for the FedEx coding challenge.

The app is built using Angular v10 and incorporates Angular Material as a CSS framework. This helps with the look and feel by providing some useful components and also provides a responsive layout.


Although the spec only asks for a signup page, there has been some additional functionality added. Including a login page, and very "basic" authentication.

When you first launch the app you will be presented with a 'home page'. From here you can link to the sign up page or navigate via the links in the header.

The form  button will be enabled once the all form fields are valid.

Hitting submit will go to the endpoint provided. Upon successful response, the user is authorised and will be directed to a welcome page.  The welcome page is only accessible to logged in users and uses Route Guards to achieve this.

(Note, to test how the UI will respond to an error response from the backend, it is possible to change the http request. There is a note within the code in the auth.service.ts file to describe this).

The signup page was produced with the reactive forms approach. For email validation I have chosen the in built email validator. If more advanced email validation is required, a future improvement could provide a Regex pattern. (As shown in the password validation, custom validator feature).

The login form is very basic.  It is mainly there to show the ‘template driven’ approach for building forms. By logging in via this form, a simple authorisation takes place and allows
navigation to the restricted Welcome page.

Basic unit tests and end to end tests have also been provided.

It is very important to note, there is NOT full test coverage.  Just enough to show the principle of testing for the main component. I am aware in a production environment more extensive tests would be needed. Unfortunately, I am very limited with free time so choices were made. I am happy to discuss further testing and improvements to the app when we have the interview.

Any questions, please feel free to contact me.

# Make sure you have node installed. 

This app is tested using node v12 

# Install the angular CLI 

Run `npm install -g @angular/cli`

## Development server

After cloning the repository, run `npm install`.

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `npm run cypress:open` to execute the end-to-end tests via [Cypress](https://www.cypress.io/).

