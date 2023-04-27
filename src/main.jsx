import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { SideProvider } from "./contexts/SideContext";
import { AuthContextProvider } from "./contexts/AuthContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <SideProvider>
          <App />
        </SideProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
