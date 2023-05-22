/// <reference types="cypress" />

describe("AddEmployeeScreen", () => {
    beforeEach(() => {
        cy.visit("/employee/add");
    });

    it("renders `Add Employee Screen` properly", () => {
        // has the right title
        cy.document().contains("Add a new employee");

        // contains the form and two buttons
        cy.get("form").should("have.length", 1);
        cy.get("[data-testid='add-employee-form-submit-btn']").should("have.length", 1);
        cy.get("[data-testid='add-employee-form-cancel-btn']").should("have.length", 1);
    });

    it("takes back to dashboard when `Cancel` button is clicked", () => {
        cy.get("[data-testid='add-employee-form-cancel-btn']").click();
        cy.location().should((loc) => expect(loc.pathname).eq("/dashboard"));
    });

    it("adds a new employee successfully and shows notification", () => {
        // enter correct data
        cy.get("input[name='name']").type("John Doe");
        cy.get("input[name='jobTitle']").type("Master of the Universe");
        cy.get("input[name='tenure']").type("100");
        cy.get("select[name='gender']").select("Male");

        // hit save button
        cy.get("[data-testid='add-employee-form-submit-btn']").click();

        // takes back to dashboard
        cy.location().should((loc) => expect(loc.pathname).eq("/dashboard"));

        // verify new employee is in the table
        cy.contains("td", "John Doe");
        cy.contains("td", "Master of the Universe");

        // it shows a visual notification
        cy.get(".Toastify__toast").should("have.length", 1);
    });
})

