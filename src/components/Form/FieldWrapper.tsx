interface FieldWrapperProps {
    label: string;
    inputName: string;
    error?: string;
    children: React.ReactNode;
}

export const FieldWrapper: React.FC<FieldWrapperProps> = ({ label, error, inputName, children }) => {
    return (
        <div className={`form-group mb-3 ${error ? "has-error" : ""}`}>
            <label className="form-label" htmlFor={inputName}>
                {label}
            </label>
            {children}
            {error && <span className="text-danger">{error}</span>}
        </div>
    );
};
