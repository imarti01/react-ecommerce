import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import { CartProvider, CurrentBoxProvider } from "./context";
import "./index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CartProvider>
      <CurrentBoxProvider>
        <App />
      </CurrentBoxProvider>
    </CartProvider>
  </React.StrictMode>
);
