import React from "react";
import { Employee } from "../types";

interface EmployeeContextProps {
    employees: Employee[];
    setEmployees: React.Dispatch<React.SetStateAction<Employee[]>>;
}

const EmployeeContext = React.createContext<EmployeeContextProps>({
    employees: [],
    setEmployees: () => { }, // eslint-disable-line
});

export default EmployeeContext;
