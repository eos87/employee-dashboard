import React from "react";
import { IEmployee } from "../types";

export enum LoadStatus {
    Loading,
    Done,
    Failed
}

interface EmployeeContextProps {
    employees: IEmployee[];
    setEmployees: React.Dispatch<React.SetStateAction<IEmployee[]>>;
    initialDataLoadStatus: LoadStatus | null;
    setInitialDataLoadStatus: React.Dispatch<React.SetStateAction<LoadStatus | null>>;
}

const EmployeeContext = React.createContext<EmployeeContextProps>({
    employees: [],
    setEmployees: () => { },
    initialDataLoadStatus: null,
    setInitialDataLoadStatus: () => { }
});

export default EmployeeContext;
