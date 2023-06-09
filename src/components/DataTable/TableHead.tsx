import { useContext } from "react";
import { HeadCell } from "./HeadCell";
import { TableContext } from "./context/TableContext";

export const TableHead = () => {
    const { columns } = useContext(TableContext);

    return (
        <thead data-testid="table-head">
            <tr>
                {columns.map(col => <HeadCell {...col} key={col.label} />)}
            </tr>
        </thead>
    )
}