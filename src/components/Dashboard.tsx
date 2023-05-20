import { useContext } from "react";
import EmployeeContext, { LoadStatus } from "../context/EmployeeContext";
import { IColumn } from "./DataTable/types";
import { Table } from "./DataTable/Table";
import { IEmployee } from "../types";

export const Dashboard = () => {
    const { employees, setEmployees, initialDataLoadStatus } = useContext(EmployeeContext);
    const columns: IColumn[] = [
        { label: "Name", name: "name", isNumeric: false },
        { label: "Job Title", name: "jobTitle", isNumeric: false },
        { label: "Tenure", name: "tenure", isNumeric: true },
        { label: "Gender", name: "gender", isNumeric: false }
    ];
    const isDataLoading = initialDataLoadStatus === LoadStatus.Loading;

    return (
        <div className="p-4">
            <h3>Corporate Employees</h3>

            <div className="table-container">
                <Table<IEmployee>
                    className="table table-striped table-bordered table-employees"
                    columns={columns}
                    data={employees}
                    onDataSorted={(data) => setEmployees(data)}
                    isDataLoading={isDataLoading}
                />
            </div>
        </div>
    );
}
