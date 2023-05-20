import { Navigate } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import { DashboardScreen } from "./components/Dashboard/DashboardScreen";
import { AddEmployeeScreen } from "./components/Employee/AddEmployeeScreen";

export const mainRouter = createBrowserRouter([
    {
        path: "/",
        element: <Navigate to="/dashboard" />
    },
    {
        path: "/dashboard",
        element: <DashboardScreen />
    },
    {
        path: "/employee/add",
        element: <AddEmployeeScreen />
    }
]);