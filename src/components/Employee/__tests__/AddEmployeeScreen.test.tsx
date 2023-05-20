import { BrowserRouter } from "react-router-dom";
import { fireEvent, screen } from "@testing-library/react";

import { renderWithEmployeeContext } from "../../../testsUtils";
import { AddEmployeeScreen } from "../AddEmployeeScreen";
import * as DataTableUtils from "../../DataTable/utils";

jest.mock("../../DataTable/utils");

describe("<AddEmployeeScreen />", () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    it("renders correctly", () => {
        renderWithEmployeeContext(<AddEmployeeScreen />, {
            providerProps: {
                employees: [],
            },
            wrapper: BrowserRouter
        });

        expect(screen.getByText("Add a new employee")).toBeInTheDocument();
    });

    it("should save new employee, provided with new employee correct data", () => {
        const setEmployeeMock = jest.fn();
        const data = {
            name: "John Doe",
            jobTitle: "Master of Universe",
            tenure: "100",
            gender: "Male"
        };

        renderWithEmployeeContext(<AddEmployeeScreen />, {
            providerProps: {
                employees: [],
                setEmployees: setEmployeeMock,
                tableSortColumn: ""
            },
            wrapper: BrowserRouter
        });
        fillInForm(screen);

        fireEvent.click(screen.getByTestId("add-employee-form-submit-btn"));
        expect(setEmployeeMock).toHaveBeenCalledTimes(1);
        expect(setEmployeeMock).toHaveBeenCalledWith([data])
    });

    it("should save new employee and preserve sorting state", () => {
        const sortDataMock = DataTableUtils.sortData as jest.Mock;
        const data = {
            name: "John Doe",
            jobTitle: "Master of Universe",
            tenure: "100",
            gender: "Male"
        };

        renderWithEmployeeContext(<AddEmployeeScreen />, {
            providerProps: {
                employees: [],
                setEmployees: jest.fn(),
                tableSortColumn: "name",
                tableSortDirection: "asc",
            },
            wrapper: BrowserRouter
        });
        fillInForm(screen);

        fireEvent.click(screen.getByTestId("add-employee-form-submit-btn"));
        expect(sortDataMock).toHaveBeenCalledTimes(1);
        expect(sortDataMock).toHaveBeenCalledWith([data], "name", "asc");
    });

    function fillInForm(screen: any) {
        fireEvent.change(screen.getByLabelText("Name"), { target: { value: "John Doe" } });
        fireEvent.change(screen.getByLabelText("Job Title"), { target: { value: "Master of Universe" } });
        fireEvent.change(screen.getByLabelText("Tenure"), { target: { value: "100" } });
        fireEvent.change(screen.getByLabelText("Gender"), { target: { value: "Male" } });
    }
});
