import React from "react";
import { IColumn, SortDirection } from "../types";

export type TableContextProps<T> = {
    data: T[];
    columns: IColumn[];
    sortDirection: SortDirection;
    setSortDirection: React.Dispatch<React.SetStateAction<SortDirection>>;
    sortColumn: string;
    setSortColumn: React.Dispatch<React.SetStateAction<string>>;
    onDataSorted: (data: any[]) => void;
}

export const TableContext = React.createContext<TableContextProps<unknown>>({
    data: [],
    columns: [],
    sortDirection: "asc",
    sortColumn: "",
    setSortDirection: () => { },
    setSortColumn: () => { },
    onDataSorted: () => { },
});