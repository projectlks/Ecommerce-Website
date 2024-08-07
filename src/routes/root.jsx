import { createBrowserRouter } from "react-router-dom";
import App from "../pages/App";
import CartDetail from "../pages/CartDetail";
import Login from "../pages/Login";
import ProductDetail from "../pages/ProductDetail";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/cartDetail",
    element: <CartDetail />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/productDetail/:id",
    element: <ProductDetail />
  }
]);

export default router