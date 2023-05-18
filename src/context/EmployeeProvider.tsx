import React, { useState } from "react";
import initialEmployees from "../data/employees.json";
import { Employee } from "../types";
import EmployeeContext from "./EmployeeContext";

interface EmployeeProviderProps {
    children: React.ReactNode;
}

const EmployeeProvider: React.FC<EmployeeProviderProps> = ({ children }) => {
    const [employees, setEmployees] = useState<Employee[]>(
        initialEmployees as Employee[]);

    return (
        <EmployeeContext.Provider value={{ employees, setEmployees }}>
            {children}
        </EmployeeContext.Provider>
    );
};

export default EmployeeProvider;
