import { SortDirection } from "./types";

export const sortData = (data: any[], sortDirection: SortDirection, sortColumn: string) => {
    const sortedData = [...data].sort((a, b) => {
        const firstElem = a[sortColumn].toString();
        const secondElem = b[sortColumn].toString();

        const compareResult = firstElem.localeCompare(secondElem, undefined, { numeric: true });
        return sortDirection === "asc" ? compareResult : -compareResult;
    });

    return sortedData;
}