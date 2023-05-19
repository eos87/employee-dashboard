import React, { useContext } from "react";
import EmployeeContext from "../context/EmployeeContext";
import { IColumn } from "./DataTable/types";
import { Table } from "./DataTable/Table";
import { IEmployee } from "../types";

export const Dashboard = () => {
    const { employees } = useContext(EmployeeContext);

    const columns: IColumn[] = [
        { label: "Name", name: "name" },
        { label: "Job Title", name: "jobTitle" },
        { label: "Tenure", name: "tenure" },
        { label: "Gender", name: "gender" }
    ];

    return (
        <div className="p-4">
            <h3>Corporate Employees</h3>

            <div className="table-container">
                <Table<IEmployee>
                    className="table table-striped table-employees"
                    columns={columns}
                    data={employees}
                />
            </div>
        </div>
    );
}
