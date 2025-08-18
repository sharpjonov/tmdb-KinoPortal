import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./main.css";
// import App from "./App.jsx";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import { RouterProvider } from "react-router-dom";
import router from "./router/index.jsx";
import { LangProvider } from "./context/LanguageContext.jsx";

createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <LangProvider>
      <RouterProvider router={router} />
    </LangProvider>
  </ThemeProvider>
);
