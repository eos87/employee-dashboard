import React, { useCallback } from "react";
import { IColumn } from "./types";

interface IProps extends IColumn {
    onCellClick: (columnName: string) => void
}

export const HeadCell = (props: IProps) => {
    const { label, name, onCellClick } = props;

    const handleClick = useCallback(() => {
        onCellClick(name as string)
    }, [name, onCellClick]);

    return (
        <th onClick={handleClick}>
            {label}
        </th>
    )
}