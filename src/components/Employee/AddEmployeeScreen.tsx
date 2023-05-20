import { useNavigate } from "react-router"
import { AddEmployeeForm } from "./AddEmployeeForm"
import { IEmployee } from "../../types"
import { useContext } from "react"
import EmployeeContext from "../../context/EmployeeContext"

export const AddEmployeeScreen = () => {
    const { employees, setEmployees } = useContext(EmployeeContext);
    const navigate = useNavigate();
    const goToDashboard = () => navigate("/dashboard");

    const onFormSubmit = (newEmployee: IEmployee) => {
        setEmployees([...employees, newEmployee]);
        goToDashboard();
    }

    return (
        <div className="col-9 mx-auto">
            <h3>Add a new employee</h3>

            <div className="border p-5 mt-3 rounded">
                <AddEmployeeForm
                    onSubmit={onFormSubmit}
                    onCancelClick={goToDashboard}
                />
            </div>
        </div>
    )
}