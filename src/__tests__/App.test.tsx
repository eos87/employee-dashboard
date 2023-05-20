import { App } from "../App";
import { fireEvent, render, screen } from "@testing-library/react";

test("full app rendering takes to dashboard by default", async () => {
    render(<App />);
    expect(screen.getByText(/Corporate Employees/i)).toBeInTheDocument();
});

test("clicking `Add Employee` button takes to `Add Employee` screen", async () => {
    render(<App />);
    fireEvent.click(screen.getByTestId("dashboard-add-employee-btn"));
    expect(screen.getByText(/Add a new employee/i)).toBeInTheDocument();
});