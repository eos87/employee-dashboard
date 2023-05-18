import React, { useState } from "react";
import initialEmployees from "../data/employees.json";
import { IEmployee } from "../types";
import EmployeeContext from "./EmployeeContext";

interface EmployeeProviderProps {
    children: React.ReactNode;
}

const EmployeeProvider: React.FC<EmployeeProviderProps> = ({ children }) => {
    const [employees, setEmployees] = useState<IEmployee[]>(
        initialEmployees as IEmployee[]);

    return (
        <EmployeeContext.Provider value={{ employees, setEmployees }}>
            {children}
        </EmployeeContext.Provider>
    );
};

export default EmployeeProvider;
