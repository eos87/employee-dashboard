import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./index.css";

import { mainRouter } from "./routes";
import EmployeeProvider from "./context/EmployeeProvider";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <React.StrictMode>
        <EmployeeProvider>
            <div className="container">
                <RouterProvider router={mainRouter} />
            </div>
        </EmployeeProvider>
    </React.StrictMode>
);
