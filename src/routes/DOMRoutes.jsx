import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
            element={<route.component routes={route.routes} />}
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
}