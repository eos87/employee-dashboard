import { useCallback, useState } from "react";
import { InputField } from "../Form/InputField";
import { SelectField } from "../Form/SelectField";
import validate from "./validationUtils";
import { FormFields } from "./types";

interface IProps {
    onCancelClick: () => void;
}

const initialFields = {
    name: "",
    jobTitle: "",
    tenure: "",
    gender: ""
}

export const AddEmployeeForm: React.FC<IProps> = ({ onCancelClick }) => {
    const [fields, setFields] = useState<FormFields>({ ...initialFields });
    const [errors, setErrors] = useState<FormFields>({ ...initialFields });

    const handleChange = useCallback(
        (ev: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
            const field = ev.target.name as keyof FormFields;
            const value = ev.target.value;

            setFields(prevFields => ({ ...prevFields, [field]: value }));
            setErrors(prevErrors => ({ ...prevErrors, [field]: validate[field](value) }));
        },
        []
    );

    return (
        <form>
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