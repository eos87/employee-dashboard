import React from "react";

interface IProps {
    columnName: string;
    sortColumn: string;
    sortDirection: string;
    isNumeric: boolean;
}

export const SortIcon: React.FC<IProps> = ({ columnName: column, sortColumn, sortDirection, isNumeric }) => {
    if (column !== sortColumn)
        return <i className="bi bi-chevron-expand"></i>

    const mode = isNumeric ? "numeric" : "alpha";

    return (
        <i className={`bold bi bi-sort-${mode}-${sortDirection === "asc" ? "down" : "down-alt"}`}></i>
    )
}