import React from "react";
import { IColumn } from "../types";

export type SortDirection = "asc" | "desc";

export type TableContextProps<T> = {
    data: T[];
    columns: IColumn[];
}

export const TableContext = React.createContext<TableContextProps<unknown>>({
    data: [],
    columns: []
});