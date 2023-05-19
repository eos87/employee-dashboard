import React, { useContext } from "react";
import { HeadCell } from "./HeadCell";
import { TableContext } from "./context/TableContext";

export const TableHead = () => {
    const { columns } = useContext(TableContext);

    return (
        <thead>
            <tr>
                {columns.map(col =>
                    <HeadCell
                        {...col}
                        key={col.label}
                        onCellClick={() => { console.log("Head click") }}
                    />
                )}
            </tr>
        </thead>
    )
}