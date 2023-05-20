import { useCallback, useState } from "react";
import { InputField } from "../Form/InputField";
import { SelectField } from "../Form/SelectField";
import validate from "./validationUtils";
import { IEmployee } from "../../types";

interface IProps {
    /**
     * Executed after the validations run and there are not errors
     */
    onSubmit: (employee: IEmployee) => void;

    /**
     * Executed right after cancel button is clicked
     */
    onCancelClick: () => void;
}

const initialFields = {
    name: "",
    jobTitle: "",
    tenure: "",
    gender: ""
}

export const AddEmployeeForm: React.FC<IProps> = ({ onSubmit, onCancelClick }) => {
    const [fields, setFields] = useState<IEmployee>({ ...initialFields });
    const [errors, setErrors] = useState<IEmployee>({ ...initialFields });

    const handleChange = useCallback(
        (ev: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
            const field = ev.target.name as keyof IEmployee;
            const value = ev.target.value;

            setFields(prevFields => ({ ...prevFields, [field]: value }));
            setErrors(prevErrors => ({ ...prevErrors, [field]: validate[field](value) }));
        },
        []
    );

    const handleSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
        ev.preventDefault();

        const newErrors = Object.fromEntries(
            Object.entries(fields).map(([key, value]) => {
                const field = key as keyof IEmployee;
                return [key, validate[field](value)];
            })
        );

        const hasErrors = Object.values(newErrors).some(x => !!x.length);
        if (hasErrors)
            return setErrors(newErrors as IEmployee);

        onSubmit({ ...fields } as IEmployee);
    }

    return (
        <form onSubmit={handleSubmit}>
            <InputField
                name="name"
                label="Name"
                value={fields.name}
                error={errors.name}
                onChange={handleChange}
            />

            <InputField
                name="jobTitle"
                label="Job Title"
                value={fields.jobTitle}
                error={errors.jobTitle}
                onChange={handleChange}
            />

            <InputField
                name="tenure"
                label="Tenure"
                type="number"
                value={fields.tenure}
                error={errors.tenure}
                onChange={handleChange}
            />


            <SelectField
                name="gender"
                label="Gender"
                value={fields.gender}
                error={errors.gender}
                onChange={handleChange}
                options={["Male", "Female"]}
            />

            <div className="d-flex flex-row justify-content-end mt-4">
                <button
                    type="submit"
                    className="btn btn-primary me-2"
                >
                    Add Employee
                </button>

                <button
                    className="btn btn-outline-secondary"
                    onClick={onCancelClick}>
                    Cancel
                </button>
            </div>
        </form>
    );
};