import { Navigate } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import { Dashboard } from "./components/Dashboard";
import { AddEmployee } from "./components/AddEmployee";

export const mainRouter = createBrowserRouter([
    {
        path: '/',
        element: <Navigate to="/dashboard" />
    },
    {
        path: "/dashboard",
        element: <Dashboard />
    },
    {
        path: "/employee/add",
        element: <AddEmployee />
    }
]);