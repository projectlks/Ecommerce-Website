import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link, useNavigate } from "react-router-dom";
import useCartTotals from "../hooks/useCartTotal";
import { Button } from "@material-tailwind/react";

export default function CartTotal() {
  const { totalCost, totalDiscount, finalTotal, tax } = useCartTotals();
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();
  const orderNow = () => {

    if (cart.length) {
      navigate("/orderForm");
;
    }
  };

  return (
    <section className="w-full p-5 h-auto">
      <h1 className="text-center w-full text-2xl font-bold text-accent mb-5">
        Cart Total
      </h1>

      <form className="border rounded bg-gray-100 py-5 px-4 shadow">
        <div className="w-full py-3 flex justify-between border-b">
          <p>Subtotals :</p>
          <p>$ {totalCost}</p>
        </div>

        <div className="w-full py-3 flex justify-between border-b">
          <p>Discount :</p>- {totalDiscount}
        </div>

        <div className="w-full py-3 flex justify-between border-b">
          <p>Tax (5%) :</p>
          <p> + {tax}</p>
        </div>

        <div className="w-full py-3 flex justify-between border-b">
          <p>Totals :</p>
          <p> $ {finalTotal}</p>
        </div>

        <div className="w-full flex justify-center mt-5">
          <span
            onClick={() => {
              orderNow();

            }}
          >
            <Button
              disabled={!cart.length}
              className="bg-accent text-white py-2 text-base px-4 rounded "
            >
              Order Now
            </Button>
          </span>
        </div>
      </form>
    </section>
  );
}
