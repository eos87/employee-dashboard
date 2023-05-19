import React, { useContext } from "react";
import { TableContext } from "./context/TableContext";

interface IProps {
    rowData: any; // eslint-disable-line
}

export const TableRow: React.FC<IProps> = ({ rowData }) => {
    const { columns } = useContext(TableContext);

    return (
        <tr>
            {columns.map(col =>
                <td key={col.name}>
                    {(rowData[col.name] as string) ?? "——"}
                </td>
            )}
        </tr>
    )
}