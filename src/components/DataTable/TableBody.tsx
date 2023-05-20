import { useContext } from "react";
import { TableRow } from "./TableRow";
import { TableContext } from "./context/TableContext";

export const TableBody = () => {
    const { data } = useContext(TableContext);

    return (
        <tbody data-testid="table-body">
            {data.map((rowData, id) => <TableRow key={id} rowData={rowData} />)}
        </tbody>
    );
};
