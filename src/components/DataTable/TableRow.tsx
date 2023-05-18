import React from "react";
import { IColumn } from "./types";

interface IProps<T> {
    columns: IColumn<T>[];
    rowData: T;
}

export const TableRow = <T,>({ columns, rowData }: IProps<T>) => {
    return (
        <tr>
            {columns.map(
                (col, id) =>
                    <td key={id}>{(rowData[col.key] as string) ?? "——"}</td>
            )}
        </tr>
    )
}