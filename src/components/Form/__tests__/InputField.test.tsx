import { render, fireEvent, screen } from "@testing-library/react";
import { InputField } from "../InputField";

describe("<InputField />", () => {
    it("renders correctly", () => {
        render(
            <InputField
                name="name"
                label="First Name"
                value=""
                onChange={() => { }}
            />
        );

        expect(screen.getByLabelText("First Name")).toBeInTheDocument();
    });

    it("shows the correct value", () => {
        render(
            <InputField
                name="name"
                label="First Name"
                value="John Doe"
                onChange={() => { }}
            />
        );

        expect(screen.getByLabelText("First Name")).toHaveValue("John Doe");
    });

    it("responds to user input", () => {
        const handleChange = jest.fn();
        render(
            <InputField
                name="lastName"
                label="Last Name"
                value=""
                onChange={handleChange}
            />
        );

        fireEvent.change(screen.getByLabelText("Last Name"), { target: { value: "Doe" } });

        expect(handleChange).toHaveBeenCalledTimes(1);
    });

    it("displays an error if one is provided", () => {
        render(
            <InputField
                name="tenure"
                label="Tenure"
                value=""
                error="Tenure is required"
                onChange={() => { }}
            />
        );

        expect(screen.getByText("Tenure is required")).toBeInTheDocument();
    });
});
