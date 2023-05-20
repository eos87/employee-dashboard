import React from "react";
import { render, screen } from "@testing-library/react";
import { Table } from "../Table";
import { IColumn } from "../types";

const mockData = [
    { id: 1, name: "John Doe", jobTitle: "Engineer", tenure: 5, gender: "Male" },
    { id: 2, name: "Jane Doe", jobTitle: "Manager", tenure: 10, gender: "Female" }
];

const mockColumns: IColumn[] = [
    { name: "name", label: "Name", isNumeric: false },
    { name: "jobTitle", label: "Job Title", isNumeric: false },
    { name: "tenure", label: "Tenure", isNumeric: true },
    { name: "gender", label: "Gender", isNumeric: false }
];

const mockOnDataSorted = jest.fn();

describe("<Table />", () => {
    it("renders properly", () => {
        setUp(false);
        expect(screen.getByRole("table")).toBeInTheDocument();
    });

    it("renders <TableHead /> and <TableBody /> when data is not loading", () => {
        setUp(false);
        expect(screen.getByTestId("table-head")).toBeInTheDocument();
        expect(screen.getByTestId("table-body")).toBeInTheDocument();
    });

    it("renders <TableBodyLoading /> when data is loading", () => {
        setUp(true);
        expect(screen.getByTestId("table-body-loading")).toBeInTheDocument();
    });

    it("renders the correct number of rows", () => {
        setUp(false);

        const rows = screen.getAllByRole("row");
        expect(rows).toHaveLength(mockData.length + 1);
    });

    it("renders the correct number of columns", () => {
        setUp(false);

        const headers = screen.getAllByRole("columnheader");
        expect(headers).toHaveLength(mockColumns.length);
    });

    function setUp(isDataLoading: boolean) {
        render(
            <Table
                data={mockData}
                columns={mockColumns}
                className="test-table"
                isDataLoading={isDataLoading}
                onDataSorted={mockOnDataSorted}
                initialSortDirection="asc"
                initialSortColumn="name"
            />
        );
    }
});
