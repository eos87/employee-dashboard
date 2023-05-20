import { useNavigate } from "react-router"
import { AddEmployeeForm } from "./AddEmployeeForm"

export const AddEmployeeScreen = () => {
    const navigate = useNavigate();
    const onFormCancelClick = () => navigate("/dashboard");

    return (
        <div className="col-9 mx-auto">
            <h3>Add a new employee</h3>

            <div className="border p-5 mt-3 rounded">
                <AddEmployeeForm onCancelClick={onFormCancelClick} />
            </div>
        </div>
    )
}