/// <reference types="cypress" />

describe("EmployeeDashboard", () => {
    beforeEach(() => {
        cy.visit("/");
    });

    it("redirects to dashboard by default", () => {
        cy.location().should((loc) => expect(loc.pathname).eq("/dashboard"));
    });

    it("renders dahboard properly", () => {
        // contains a table
        cy.get("table").should("have.length", 1);

        // both charts
        cy.get("[data-testid='employees-job-title-chart']").should("have.length", 1);
        cy.get("[data-testid='employees-gender-chart']").should("have.length", 1);

        // and a button to add employee
        cy.get("[data-testid='dashboard-add-employee-btn']").should("have.length", 1);
    });

    it("takes to `/employee/add` when `Add Employee` button clicked", () => {
        cy.get("[data-testid='dashboard-add-employee-btn']").click();
        cy.location().should((loc) => expect(loc.pathname).eq("/employee/add"));
    });
})

