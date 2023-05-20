import { useContext } from "react";
import { TableContext } from "./context/TableContext";

export const TableBodyLoading = () => {
    const { columns } = useContext(TableContext);

    return (
        <tbody data-testid="table-body-loading">
            <tr>
                <td colSpan={columns.length}>
                    <span className="spinner-border spinner-border-sm me-2" />
                    Loading data...
                </td>
            </tr>
        </tbody>
    );
};
