import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProtectedRoute } from "./ProtectedRoute.jsx";
import routes from "./routes.js";

export function DOMRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route, index) => (
          <Route
            key={"route" + index}
            path={route.path}
            exact={route.exact}
            element={
              route.isPrivate ? (
                <ProtectedRoute>
                  <route.component routes={route.routes} />
                </ProtectedRoute>
              ) : (
                <route.component routes={route.routes} />
              )
            }
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
}
