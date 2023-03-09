import { createBrowserRouter } from "react-router-dom";
import {
  MainPage,
  StorePage,
  OrderPage,
  Dashboard,
  LoginPage,
  RegisterPage,
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
        <Dashboard />
      </ProtectedRoute>
    ),
  },
]);
