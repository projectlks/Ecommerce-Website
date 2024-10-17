import { createBrowserRouter } from "react-router-dom";
import App from "../pages/App";
import CartDetail from "../pages/CartDetail";
import Login from "../pages/Login";
import ProductDetail from "../pages/ProductDetail";
import OrderForm from "../pages/OrderForm.tsx";
import OrderDetail from "../pages/OrderDetail.tsx";
import Order from "../pages/Order.tsx";
import AllProducts from "../pages/AllProducts";
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
  , {
    path: '/order',
    element: <Order/>
  } , {
    path: '/allProducts',
    element: <AllProducts/>
  }
]);

export default router