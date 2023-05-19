import React from "react";
import { TableHead } from "./TableHead";
import { IColumn } from "./types";
import { TableBody } from "./TableBody";
import { TableContext } from "./context/TableContext";

interface IProps<T> {
    columns: IColumn[];
    data: T[];
    className: string;
}

export const Table = <T,>(props: IProps<T>) => {
    const { columns, data, className } = props;

    return (
        <TableContext.Provider value={{
            data,
            columns
        }}>
            <table className={className}>
                <TableHead />
                <TableBody />
            </table>
        </TableContext.Provider>
    )
}