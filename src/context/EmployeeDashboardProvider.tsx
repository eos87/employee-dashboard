import React, { useEffect, useState } from "react";
import { IEmployee } from "../types";
import EmployeeDashboardContext, { LoadStatus } from "./EmployeeDashboardContext";
import { employeeService } from "../services/employeeService";

export interface EmployeeDashboardProviderProps {
    children: React.ReactNode;
}

const EmployeeDashboardProvider: React.FC<EmployeeDashboardProviderProps> = ({ children }) => {
    const [employees, setEmployees] = useState<IEmployee[]>([]);
    const [initialDataLoadStatus, setInitialDataLoadStatus] = useState<LoadStatus | null>(null);

    const [tableSortColumn, setTableSortColumn] = useState<string>("");
    const [tableSortDirection, setTableSortDirection] = useState<string>("asc");

    useEffect(() => {
        setInitialDataLoadStatus(LoadStatus.Loading);
        employeeService
            .fetchInitialEmployees()
            .then((data) => {
                setInitialDataLoadStatus(LoadStatus.Done);
                setEmployees(data);
            })
            .catch((err) => setInitialDataLoadStatus(LoadStatus.Failed))
    }, [])

    return (
        <EmployeeDashboardContext.Provider
            value={{
                employees,
                setEmployees,
                initialDataLoadStatus,
                setInitialDataLoadStatus,
                tableSortColumn,
                setTableSortColumn,
                tableSortDirection,
                setTableSortDirection
            }}
        >
            {children}
        </EmployeeDashboardContext.Provider>
    );
};

export default EmployeeDashboardProvider;
