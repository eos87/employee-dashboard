import React from "react";
import { TableHead } from "./TableHead";
import { IColumn } from "./types";
import { TableBody } from "./TableBody";

interface IProps<T> {
    columns: IColumn<T>[];
    data: T[];
    className: string;
}

export const Table = <T,>(props: IProps<T>) => {
    const { columns, data, className } = props;

    return (
        <table className={className}>
            <TableHead columns={columns} />
            <TableBody columns={columns} data={data} />
        </table>
    )
}