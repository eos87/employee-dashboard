import React from "react";
import { IEmployee } from "../types";

interface EmployeeContextProps {
    employees: IEmployee[];
    setEmployees: React.Dispatch<React.SetStateAction<IEmployee[]>>;
}

const EmployeeContext = React.createContext<EmployeeContextProps>({
    employees: [],
    setEmployees: () => { }, // eslint-disable-line
});

export default EmployeeContext;
