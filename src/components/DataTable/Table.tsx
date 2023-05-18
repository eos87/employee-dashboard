import React from "react";
import { TableHead } from "./TableHead";
import { IColumn } from "./types";
import { TableBody } from "./TableBody";

interface IProps<T> {
    columns: IColumn<T>[];
    data: T[];
}

export const Table = <T,>({ columns, data }: IProps<T>) => {
    return (
        <table>
            <TableHead columns={columns} />
            <TableBody columns={columns} data={data} />
        </table>
    )
}