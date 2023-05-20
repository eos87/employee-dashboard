import { SortDirection } from "./types";

/**
 * Sorts an array of objects based on a specific column in ascending or descending order.
 *
 * @param {any[]} data - The array of objects that should be sorted.
 * @param {string} sortColumn - The key (column) in the objects that should be used for sorting.
 * @param {SortDirection} sortDirection - The direction of the sorting, either "asc" for ascending or "desc" for descending.
 *
 * @returns {any[]} The new sorted array.
 *
 * @example
 * const employees = [{ name: "John", age: 30 }, { name: "Jane", age: 25 }];
 * sortData(employees, "age", "asc");
 */
export const sortData = (data: any[], sortColumn: string, sortDirection: SortDirection) => {
    const sortedData = [...data].sort((a, b) => {
        const firstElem = a[sortColumn].toString();
        const secondElem = b[sortColumn].toString();

        const compareResult = firstElem.localeCompare(secondElem, undefined, { numeric: true });
        return sortDirection === "asc" ? compareResult : -compareResult;
    });

    return sortedData;
}