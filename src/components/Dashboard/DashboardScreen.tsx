import { useContext } from "react";
import EmployeeDashboardContext, { LoadStatus } from "../../context/EmployeeDashboardContext";
import { IColumn } from "../DataTable/types";
import { Table } from "../DataTable/Table";
import { IEmployee } from "../../types";
import { useNavigate } from "react-router-dom";
import { EmployeesByJobTitleChart } from "./EmployeesByJobTitleChart";
import { EmployeesByGenderChart } from "./EmployeesByGenderChart";

export const DashboardScreen = () => {
    const {
        employees,
        setEmployees,
        initialDataLoadStatus,
        setTableSortColumn,
        setTableSortDirection,
        tableSortColumn,
        tableSortDirection,
    } = useContext(EmployeeDashboardContext);

    const columns: IColumn[] = [
        { label: "Name", name: "name", isNumeric: false },
        { label: "Job Title", name: "jobTitle", isNumeric: false },
        { label: "Tenure", name: "tenure", isNumeric: true },
        { label: "Gender", name: "gender", isNumeric: false }
    ];
    const isDataLoading = initialDataLoadStatus === LoadStatus.Loading;
    const navigate = useNavigate();
    const handleAddEmployeeClick = () => navigate("/employee/add");

    const handleOnDataSorted = (employees: IEmployee[], sortColumn: string, sortDirection: string) => {
        setEmployees([...employees]);
        setTableSortColumn(sortColumn);
        setTableSortDirection(sortDirection);
    };

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

            <div className="table-container" data-testid="dashboard-table-container">
                <Table<IEmployee>
                    className="table table-striped table-bordered table-employees"
                    columns={columns}
                    data={employees}
                    onDataSorted={handleOnDataSorted}
                    isDataLoading={isDataLoading}
                    initialSortColumn={tableSortColumn}
                    initialSortDirection={tableSortDirection}
                />
            </div>

            <div className="row mt-4">
                <div className="col-6">
                    <fieldset className="border rounded" style={{ height: 370 }}>
                        <legend className="fs-5 ms-4 mt-2">
                            Employees by Job Title
                        </legend>
                        <EmployeesByJobTitleChart employees={employees} />
                    </fieldset>
                </div>

                <div className="col-6">
                    <fieldset className="border rounded" style={{ height: 370 }}>
                        <legend className="fs-5 ms-4 mt-2">
                            Employees by Gender
                        </legend>
                        <EmployeesByGenderChart employees={employees} />
                    </fieldset>
                </div>
            </div>
        </>
    );
}
