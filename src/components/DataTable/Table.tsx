import { useState } from "react";
import { TableHead } from "./TableHead";
import { IColumn, SortDirection } from "./types";
import { TableBody } from "./TableBody";
import { TableContext } from "./context/TableContext";
import { TableBodyLoading } from "./TableBodyLoading";

interface IProps<T> {
    data: T[];
    columns: IColumn[];
    className: string;
    isDataLoading: boolean;
    onDataSorted: (data: T[], sortColumn: string, sortDirection: string) => void;
    initialSortDirection?: string;
    initialSortColumn?: string;
}

export const Table = <T,>(props: IProps<T>) => {
    const {
        columns,
        data,
        className,
        onDataSorted,
        isDataLoading,
        initialSortDirection,
        initialSortColumn
    } = props;

    const [sortColumn, setSortColumn] = useState(initialSortColumn as string);
    const [sortDirection, setSortDirection] = useState<SortDirection>(initialSortDirection as SortDirection);

    return (
        <TableContext.Provider value={{
            data,
            sortColumn,
            setSortColumn,
            sortDirection,
            setSortDirection,
            columns,
            onDataSorted
        }}>
            <table className={className}>
                <TableHead />
                {isDataLoading ? <TableBodyLoading /> : <TableBody />}
            </table>
        </TableContext.Provider>
    )
}