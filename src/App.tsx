import { RouterProvider } from "react-router-dom";
import EmployeeProvider from "./context/EmployeeProvider"
import { mainRouter } from "./routes";

export const App = () => {
    return (
        <EmployeeProvider>
            <div className="container">
                <div className="p-4">
                    <RouterProvider router={mainRouter} />
                </div>
            </div>
        </EmployeeProvider>
    )
}