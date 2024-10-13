import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function CartTotal() {
  const { cart } = useContext(CartContext);

  const totalCost = cart
    .reduce(
      (total, item) =>
        total +
        (item.price + (item.price * item.discountPercentage) / 100) *
          item.amount,
      0
    )
    .toFixed(2);
  const totalDiscount = cart
    .reduce(
      (total, item) =>
        total + ((item.price * item.discountPercentage) / 100) * item.amount,
      0
    )
    .toFixed(2);
  const tax = ((totalCost - totalDiscount) * 0.05).toFixed(2);



  
  const finalTotal = (
    parseFloat(totalCost) -
    parseFloat(totalDiscount) +
    parseFloat(tax)
  ).toFixed(2);

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
          <Link to={"/orderForm"}>
            <button
              type="button"
              className="bg-accent text-white py-2 px-4 rounded "
            >
              Order Now
            </button>
          </Link>
        </div>
      </form>
    </section>
  );
}
