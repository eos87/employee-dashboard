import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import "./index.css";
import { mainRouter } from "./routes";
import EmployeeProvider from "./context/EmployeeProvider";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <React.StrictMode>
        <EmployeeProvider>
            <RouterProvider router={mainRouter} />
        </EmployeeProvider>
    </React.StrictMode>
);
