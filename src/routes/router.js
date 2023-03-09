import { createBrowserRouter } from "react-router-dom";
import {
  MainPage,
  StorePage,
  OrderPage,
  LoginPage,
  RegisterPage,
  AddressPage,
  DashboardPage,
} from "../views/pages";
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
    path: "login",
    element: <LoginPage />,
  },
  {
    path: "register",
    element: <RegisterPage />,
  },
  {
    path: "address",
    element: (
      <ProtectedRoute>
        <AddressPage />
      </ProtectedRoute>
    ),
  },
  {
    path: "order",
    element: (
      <ProtectedRoute>
        <OrderPage />
      </ProtectedRoute>
    ),
  },
  {
    path: "dashboard",
    element: (
      <ProtectedRoute>
        <DashboardPage />
      </ProtectedRoute>
    ),
  },
]);
