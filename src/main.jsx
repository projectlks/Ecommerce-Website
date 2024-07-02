import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import router from "./routes/root";
import { RouterProvider } from "react-router-dom";
import CartContextProvider from "./context/CartContext";
import { ThemeProvider } from "@material-tailwind/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <CartContextProvider>
    <ThemeProvider>
   
      <RouterProvider router={router} />
    </ThemeProvider>
  </CartContextProvider>
);
