import { createBrowserRouter, Navigate } from "react-router";
import Dashboard from "./pages/dashboard/dashboard"
import Accounts from "./pages/accounts/Accounts";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/dashboard" />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/accounts",
    element: <Accounts />,
  },
]);


