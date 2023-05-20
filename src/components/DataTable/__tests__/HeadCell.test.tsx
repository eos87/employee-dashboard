import { render, fireEvent, screen } from "@testing-library/react";
import { TableContext } from "../context/TableContext";
import { HeadCell } from "../HeadCell";

const Wrapper = ({ children }: any) => {
    return (
        <table>
            <thead>
                <tr>
                    {children}
                </tr>
            </thead>
        </table>
    )
};

describe("HeadCell", () => {
    let contextValues: any;
    let mockSetSortDirection: jest.Mock<any, any>;
    let mockSetSortColumn: jest.Mock<any, any>;
    let mockOnDataSorted: jest.Mock<any, any>;

    beforeEach(() => {
        mockSetSortDirection = jest.fn();
        mockSetSortColumn = jest.fn();
        mockOnDataSorted = jest.fn();

        contextValues = {
            data: [],
            sortDirection: "asc",
            sortColumn: "",
            setSortDirection: mockSetSortDirection,
            setSortColumn: mockSetSortColumn,
            onDataSorted: mockOnDataSorted,
        };
    });

    it("calls context set functions and onDataSorted on click", () => {
        setUp();

        fireEvent.click(screen.getByText("Test"));

        expect(mockSetSortDirection).toHaveBeenCalled();
        expect(mockSetSortColumn).toHaveBeenCalled();
        expect(mockOnDataSorted).toHaveBeenCalled();
    });

    it("should call mockSetSortDirection with the right argumen when cell is clicked", () => {
        setUp();

        fireEvent.click(screen.getByText("Test"));

        expect(mockSetSortDirection).toHaveBeenCalledWith("asc");
    });

    it("should call setSortColumn with the right argumen when cell is clicked", () => {
        setUp();

        fireEvent.click(screen.getByText("Test"));

        expect(mockSetSortColumn).toHaveBeenCalledWith("test");
    });

    it("should call onDataSorted with the right argumen when cell is clicked", () => {
        setUp();

        fireEvent.click(screen.getByText("Test"));

        expect(mockOnDataSorted).toHaveBeenCalledWith([], "test", "asc");
    });

    function setUp() {
        render(
            <TableContext.Provider value={contextValues}>
                <Wrapper>
                    <HeadCell label="Test" name="test" isNumeric={false} />
                </Wrapper>
            </TableContext.Provider>
        );
    }
});
