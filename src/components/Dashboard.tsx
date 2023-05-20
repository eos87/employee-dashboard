import { useContext } from "react";
import EmployeeContext, { LoadStatus } from "../context/EmployeeContext";
import { IColumn } from "./DataTable/types";
import { Table } from "./DataTable/Table";
import { IEmployee } from "../types";
import { useNavigate } from "react-router-dom";

export const Dashboard = () => {
    const { employees, setEmployees, initialDataLoadStatus } = useContext(EmployeeContext);
    const columns: IColumn[] = [
        { label: "Name", name: "name", isNumeric: false },
        { label: "Job Title", name: "jobTitle", isNumeric: false },
        { label: "Tenure", name: "tenure", isNumeric: true },
        { label: "Gender", name: "gender", isNumeric: false }
    ];
    const isDataLoading = initialDataLoadStatus === LoadStatus.Loading;
    const navigate = useNavigate();
    const handleAddEmployeeClick = () => navigate("/employee/add");

    return (
        <>
            <div className="row">
                <div className="col mr-auto">
                    <h3>Corporate Employees</h3>
                </div>
                <div className="col-auto">
                    <button
                        className="btn btn-primary"
                        onClick={handleAddEmployeeClick}
                        data-testid="dashboard-add-employee-btn"
                    >
                        Add Employee
                    </button>
                </div>
            </div>

            <div className="table-container">
                <Table<IEmployee>
                    className="table table-striped table-bordered table-employees"
                    columns={columns}
                    data={employees}
                    onDataSorted={(data) => setEmployees(data)}
                    isDataLoading={isDataLoading}
                />
            </div>
        </>
    );
}
