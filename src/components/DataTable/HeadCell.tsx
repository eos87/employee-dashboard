import { useCallback, useContext } from "react";
import { IColumn } from "./types";
import { TableContext } from "./context/TableContext";
import { sortData } from "./utils";
import { SortIcon } from "./SortIcon";

export const HeadCell = (props: IColumn) => {
    const { label, name: columnName, isNumeric } = props;
    const {
        data,
        sortDirection,
        setSortDirection,
        sortColumn,
        setSortColumn,
        onDataSorted
    } = useContext(TableContext);

    const handleClick = useCallback(() => {
        const isSameColumn = columnName === sortColumn;
        const isAsceding = sortDirection === "asc";
        const newSortDirection = (isSameColumn && isAsceding) ? "desc" : "asc";
        const sortedData = sortData(data, newSortDirection, columnName);

        setSortColumn(columnName);
        setSortDirection(newSortDirection);
        onDataSorted(sortedData);
    }, [
        columnName,
        sortDirection,
        setSortDirection,
        sortColumn,
        setSortColumn,
        data,
        onDataSorted
    ]);

    return (
        <th onClick={handleClick}>
            <div className="d-flex flex-row justify-content-between">
                {label}
                <SortIcon {
                    ...{ columnName, sortDirection, sortColumn, isNumeric }} />
            </div>
        </th>
    )
}