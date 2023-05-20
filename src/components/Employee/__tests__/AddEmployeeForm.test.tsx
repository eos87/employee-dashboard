import { fireEvent, render, screen } from "@testing-library/react";
import { AddEmployeeForm } from "../AddEmployeeForm";

describe("<AddEmployeeForm />", () => {
    let mockSubmit: jest.Mock<any, any>, mockCancel: jest.Mock<any, any>;

    beforeEach(() => {
        mockSubmit = jest.fn();
        mockCancel = jest.fn();
    });

    it("handles field changes", () => {
        render(
            <AddEmployeeForm onSubmit={mockSubmit} onCancelClick={mockCancel} />
        );

        fillInForm();

        expect(screen.getByLabelText(/Name/i)).toHaveValue("John Doe");
        expect(screen.getByLabelText(/Job Title/i)).toHaveValue("Developer");
        expect(screen.getByLabelText(/Tenure/i)).toHaveValue(100);
        expect(screen.getByLabelText(/Gender/i)).toHaveValue("Male");
    });

    it("displays error messages when form was not filled in", () => {
        render(<AddEmployeeForm onSubmit={mockSubmit} onCancelClick={mockCancel} />);

        fireEvent.click(screen.getByTestId("add-employee-form-submit-btn"));

        expect(screen.getByText("Name is required")).toBeInTheDocument();
        expect(screen.getByText("Job title is required")).toBeInTheDocument();
        expect(screen.getByText("Tenure is required and should be a number")).toBeInTheDocument();
        expect(screen.getByText("Gender is required")).toBeInTheDocument();
    });

    it("displays error message when left the input empty", () => {
        render(<AddEmployeeForm onSubmit={mockSubmit} onCancelClick={mockCancel} />);

        fireEvent.change(screen.getByLabelText("Name"), { target: { value: " " } });
        fireEvent.blur(screen.getByLabelText("Name"));

        expect(screen.getByText("Name is required")).toBeInTheDocument();
    });

    it("displays error message and hides it when data is corrected", () => {
        render(<AddEmployeeForm onSubmit={mockSubmit} onCancelClick={mockCancel} />);

        fireEvent.change(screen.getByLabelText("Name"), { target: { value: " " } });
        fireEvent.blur(screen.getByLabelText("Name"));

        expect(screen.getByText("Name is required")).toBeInTheDocument();

        // data corrected by entering a value
        fireEvent.change(screen.getByLabelText("Name"), { target: { value: "John Doe" } });
        expect(screen.queryByText("Name is required")).not.toBeInTheDocument();
    });

    it("calls onCancelClick appropriately", () => {
        render(<AddEmployeeForm onSubmit={mockSubmit} onCancelClick={mockCancel} />);

        fillInForm();
        fireEvent.click(screen.getByTestId("add-employee-form-cancel-btn"));

        expect(mockCancel).toHaveBeenCalledTimes(1);
    });

    it("calls onSubmit appropriately", () => {
        render(<AddEmployeeForm onSubmit={mockSubmit} onCancelClick={mockCancel} />);

        fillInForm();
        fireEvent.click(screen.getByTestId("add-employee-form-submit-btn"));

        expect(mockSubmit).toHaveBeenCalledTimes(1);
    });

    function fillInForm() {
        fireEvent.change(screen.getByLabelText("Name"), { target: { value: "John Doe" } });
        fireEvent.change(screen.getByLabelText("Job Title"), { target: { value: "Developer" } });
        fireEvent.change(screen.getByLabelText("Tenure"), { target: { value: "100" } });
        fireEvent.change(screen.getByLabelText("Gender"), { target: { value: "Male" } });
    }
});
