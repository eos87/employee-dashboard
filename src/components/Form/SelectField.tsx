import { FieldWrapper } from "./FieldWrapper";

interface SelectFieldProps {
    name: string;
    label: string;
    value: string;
    error?: string;
    options: string[];
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const SelectField: React.FC<SelectFieldProps> = ({ name, label, value, error, options, onChange }) => (
    <FieldWrapper label={label} error={error} inputName={name}>
        <select
            id={name}
            name={name}
            value={value}
            onChange={onChange}
            className={`form-control ${error ? "is-invalid" : ""}`}
        >
            <option value="">Select...</option>

            {options.map((option, index) => (
                <option key={index} value={option}>
                    {option}
                </option>
            ))}
        </select>
    </FieldWrapper>
);
