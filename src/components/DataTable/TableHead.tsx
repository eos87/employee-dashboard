import React from "react";
import { IColumn } from "./types";

interface IProps<T> {
    columns: IColumn<T>[]
}

export const TableHead = <T,>({ columns }: IProps<T>) => {
    return (
        <thead>
            <tr>
                {columns.map(({ label }) => <th>{label}</th>)}
            </tr>
        </thead>
    )
}