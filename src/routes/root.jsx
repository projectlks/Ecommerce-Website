import { createBrowserRouter } from "react-router-dom";
import App from "../pages/App";
import CartDetail from "../pages/CartDetail";
import Login from "../pages/Login";
import ProductDetail from "../pages/ProductDetail";
import OrderForm from "../pages/OrderForm.tsx";
import OrderDetail from "../pages/OrderDetail.tsx";
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
  },
  {
    path: '/orderForm',
    element: <OrderForm/>
  }, {
    path: '/orderDetail',
    element: <OrderDetail/>
  }
]);

export default router