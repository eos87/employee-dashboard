import { useContext } from "react"
import { useNavigate } from "react-router"
import { toast } from "react-toastify"
import EmployeeDashboardContext from "../../context/EmployeeDashboardContext"
import { IEmployee } from "../../types"
import { SortDirection } from "../DataTable/types"
import { sortData } from "../DataTable/utils"
import { AddEmployeeForm } from "./AddEmployeeForm"

export const AddEmployeeScreen = () => {
    const { employees, setEmployees, tableSortColumn, tableSortDirection } = useContext(EmployeeDashboardContext);
    const navigate = useNavigate();
    const goToDashboard = () => navigate("/dashboard");

    const onFormSubmit = (newEmployee: IEmployee) => {
        let newEmployees = [...employees, newEmployee];

        // check if data was previously sorted to preserve sort order
        const isDataSorted = !!tableSortColumn.trim();
        if (isDataSorted)
            newEmployees = sortData(newEmployees, tableSortColumn, tableSortDirection as SortDirection);

        setEmployees(newEmployees);
        toast("Employee added successfully", { theme: "dark" });
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