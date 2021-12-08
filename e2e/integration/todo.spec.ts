/// <reference types="cypress" />

describe("Adding Event", () => {
  it("should add a new event", () => {
    cy.visit("/login");

    cy.findByTestId("email").type("test_john_doe@test.com");
    cy.findByTestId("password").type("DA9gsgSZGmCrv9Y");

    cy.findByTestId("submit").click();

    cy.findByTestId("add-event").click();

    cy.findByTestId("event-title").type("Test Event 1 Title");
    cy.findByTestId("event-description").type("Test Event 1 Description");
    cy.findByTestId("event-address").type("Test Event 1 Address");

    cy.findByTestId("event-submit").click();

    cy.url().should("eq", "http://localhost:3000/dashboard/events");
  });
});
