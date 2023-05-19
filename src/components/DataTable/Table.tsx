import React, { useState } from "react";
import { TableHead } from "./TableHead";
import { IColumn, SortDirection } from "./types";
import { TableBody } from "./TableBody";
import { TableContext } from "./context/TableContext";

interface IProps<T> {
    columns: IColumn[];
    data: T[];
    className: string;
    onDataSorted: (data: T[]) => void;
}

export const Table = <T,>(props: IProps<T>) => {
    const { columns, data, className, onDataSorted } = props;
    const [sortColumn, setSortColumn] = useState("");
    const [sortDirection, setSortDirection] = useState<SortDirection>("asc");

    return (
        <TableContext.Provider value={{
            data,
            sortColumn,
            setSortColumn,
            sortDirection,
            setSortDirection,
            columns,
            onDataSorted
        }}>
            <table className={className}>
                <TableHead />
                <TableBody />
            </table>
        </TableContext.Provider>
    )
}