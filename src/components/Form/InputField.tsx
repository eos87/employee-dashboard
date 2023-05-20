import { HTMLInputTypeAttribute } from "react";
import { FieldWrapper } from "./FieldWrapper";

interface InputFieldProps {
    name: string;
    label: string;
    value: string;
    error?: string;
    type?: HTMLInputTypeAttribute;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputField: React.FC<InputFieldProps> = ({ name, label, value, error, type, onChange }) => (
    <FieldWrapper label={label} error={error} inputName={name}>
        <input
            id={name}
            name={name}
            value={value}
            onChange={onChange}
            type={type}
            className={`form-control ${error ? "is-invalid" : ""}`}
        />
    </FieldWrapper>
);
