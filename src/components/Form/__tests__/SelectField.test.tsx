import { render, fireEvent, screen } from "@testing-library/react";
import { SelectField } from "../SelectField";

describe("<SelectField />", () => {
    it("renders correctly", () => {
        render(
            <SelectField
                name="gender"
                label="Select Gender"
                value=""
                options={[]}
                onChange={() => { }}
            />
        );

        expect(screen.getByLabelText("Select Gender")).toBeInTheDocument();
    });

    it("renders options correctly", () => {
        const options = ["Male", "Female"];
        render(
            <SelectField
                name="gender"
                label="Select Gender"
                value=""
                options={options}
                onChange={() => { }}
            />
        );

        options.forEach(option => {
            expect(screen.getByText(option)).toBeInTheDocument();
        });
    });

    it("responds to user selection", () => {
        const options = ["Male", "Female"];
        const handleChange = jest.fn();
        render(
            <SelectField
                name="gender"
                label="Select Gender"
                value=""
                options={options}
                onChange={handleChange}
            />
        );

        fireEvent.change(screen.getByLabelText("Select Gender"), { target: { value: "Male" } });

        expect(handleChange).toHaveBeenCalledTimes(1);
    });

    it("displays an error if one is provided", () => {
        render(
            <SelectField
                name="gender"
                label="Select Gender"
                value=""
                options={[]}
                error="Gender is required"
                onChange={() => { }}
            />
        );

        expect(screen.getByText("Gender is required")).toBeInTheDocument();
    });
});
