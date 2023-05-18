import React, { useContext } from "react";
import EmployeeContext from "../context/EmployeeContext";
import { IColumn } from "./DataTable/types";
import { Table } from "./DataTable/Table";
import { IEmployee } from "../types";

export const Dashboard = () => {
    const { employees } = useContext(EmployeeContext);

    const columns: IColumn<IEmployee>[] = [
        { label: "Name", key: "name" },
        { label: "Job Title", key: "jobTitle" },
        { label: "Tenure", key: "tenure" },
        { label: "Gender", key: "gender" }
    ];

    return (
        <Table<IEmployee> columns={columns} data={employees} />
    );
}
