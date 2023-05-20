import { RenderOptions, render } from "@testing-library/react";
import EmployeeDashboardContext, { EmployeeDashboardContextProps } from "./context/EmployeeDashboardContext";

interface CustomRenderOptions extends RenderOptions {
    providerProps?: Partial<EmployeeDashboardContextProps>;
}

export const renderWithEmployeeContext = (ui: React.ReactElement, { providerProps, ...renderOptions }: CustomRenderOptions) => {
    return render(
        <EmployeeDashboardContext.Provider value={{ ...providerProps as EmployeeDashboardContextProps }}>
            {ui}
        </EmployeeDashboardContext.Provider>,
        renderOptions,
    )
}
