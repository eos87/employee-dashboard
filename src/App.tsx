import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import EmployeeDashboardProvider from "./context/EmployeeDashboardProvider"
import { mainRouter } from "./routes";

export const App = () => {
    return (
        <EmployeeDashboardProvider>
            <div className="container">
                <div className="p-0 p-lg-4">
                    <RouterProvider router={mainRouter} />
                </div>
            </div>
            <ToastContainer />
        </EmployeeDashboardProvider>
    )
}