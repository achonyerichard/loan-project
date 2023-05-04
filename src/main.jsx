import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { SideProvider } from "./contexts/SideContext";
import { AuthContextProvider } from "./contexts/AuthContext";
import { ModalsProvider } from "./contexts/ModalsContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <SideProvider>
          <ModalsProvider>
          <App />
          </ModalsProvider>
        </SideProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
