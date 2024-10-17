import { ThemeProvider } from "@material-tailwind/react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import CartContextProvider from "./context/CartContext";
import MainUrlContextProvider from "./context/MainUrlContext";
import "./index.css";
import router from "./routes/root";
import { WishContextProvider } from "./context/wishContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <MainUrlContextProvider>
    <CartContextProvider>
      <ThemeProvider>
        <WishContextProvider>
          <RouterProvider router={router} />
        </WishContextProvider>
      </ThemeProvider>
    </CartContextProvider>
  </MainUrlContextProvider>
);
