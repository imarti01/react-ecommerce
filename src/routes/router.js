import { createBrowserRouter } from "react-router-dom";
import { MainPage, StorePage, OrderPage, Dashboard } from "../views/pages";
import { ProtectedRoute } from "./ProtectedRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "store",
    element: <StorePage />,
  },
  {
    path: "order",
    element: <OrderPage />,
  },
  {
    path: "dashboard",
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
  },
]);
