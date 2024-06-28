import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import CartDetail from "../CartDetail";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/cartDetail",
    element: <CartDetail />
  }
]);

export default router