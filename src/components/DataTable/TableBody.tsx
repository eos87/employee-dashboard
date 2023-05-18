import React from "react";
import { IColumn } from "./types";
import { TableRow } from "./TableRow";

interface IProps<T> {
    columns: IColumn<T>[];
    data: T[];
}

export const TableBody = <T,>({ columns, data }: IProps<T>) => {
    return (
        <tbody>
            {data.map((rowData) => <TableRow columns={columns} rowData={rowData} />)}
        </tbody>
    );
};
