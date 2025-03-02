import {Given, When, Then, Before} from "cypress-cucumber-preprocessor/steps";
//import loginPage from "../../support/pageObjects/loginPage.js";
//import userAccountPage from "../../support/pageObjects/userAccountPage.js";

Given('I navigate to login page', () => {
    cy.visit("https://practicetestautomation.com/practice-test-login/");
  });
  
  When("I enter username", () => {
    cy.get("#username").type('student');
  });

  When("I enter wrong username", () => {
    cy.get("#username").type('student1233');
  });
  
  When("I enter password", () => {
    cy.get("#password").type('Password123');
  });

  When("I enter wrong password", () => {
    cy.get("#password").type('123');
  });
  
  When("I click push button", () => {
    cy.get("#submit").click();
  });
  
  Then("I should be able to access the dashboard", () => {
    cy.url().should("include", "logged-in-successfully/");
  });

  Then("I should see warning message incorrect password", () => {
    cy.get('#error').should("be.visible").and("contain", 'Your password is invalid!');
  });

  Then("I should see warning message incorrect username", () => {
    cy.get('#error').should("be.visible").and("contain", 'Your username is invalid!');
  });