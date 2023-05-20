import { RouterProvider } from "react-router-dom";
import EmployeeDashboardProvider from "./context/EmployeeDashboardProvider"
import { mainRouter } from "./routes";

export const App = () => {
    return (
        <EmployeeDashboardProvider>
            <div className="container">
                <div className="p-4">
                    <RouterProvider router={mainRouter} />
                </div>
            </div>
        </EmployeeDashboardProvider>
    )
}