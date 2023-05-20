import React, { useEffect, useState } from "react";
import { IEmployee } from "../types";
import EmployeeContext, { LoadStatus } from "./EmployeeContext";
import { employeeService } from "../services/employeeService";

interface EmployeeProviderProps {
    children: React.ReactNode;
}

const EmployeeProvider: React.FC<EmployeeProviderProps> = ({ children }) => {
    const [employees, setEmployees] = useState<IEmployee[]>([]);
    const [initialDataLoadStatus, setInitialDataLoadStatus] = useState<LoadStatus | null>(null);

    useEffect(() => {
        setInitialDataLoadStatus(LoadStatus.Loading);
        employeeService
            .fetchInitialEmployees<IEmployee[]>()
            .then((data) => {
                setInitialDataLoadStatus(LoadStatus.Done);
                setEmployees(data);
            })
            .catch((err) => setInitialDataLoadStatus(LoadStatus.Failed))
    }, [])

    return (
        <EmployeeContext.Provider value={{ employees, setEmployees, initialDataLoadStatus, setInitialDataLoadStatus }}>
            {children}
        </EmployeeContext.Provider>
    );
};

export default EmployeeProvider;
