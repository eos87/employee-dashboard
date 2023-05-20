interface FieldWrapperProps {
    label: string;
    error?: string;
    children: React.ReactNode;
}

export const FieldWrapper: React.FC<FieldWrapperProps> = ({ label, error, children }) => {
    return (
        <div className={`form-group mb-3 ${error ? "has-error" : ""}`}>
            <label className="form-label">
                {label}
            </label>
            {children}
            {error && <span className="text-danger">{error}</span>}
        </div>
    );
};
