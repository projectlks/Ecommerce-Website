import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartDetail = () => {
  const { cart, updateCart } = useContext(CartContext);


  const totalPrice = cart
    .reduce((total, item) => total + item.price, 0)
    .toFixed(2);


  const totalQuantity = cart.reduce((total, item) => total + item.amount, 0);

 
  // const totalCost = (totalPrice * totalQuantity) .toFixed(2);
const totalCost = cart
  .reduce((total, item) => total + (item.price * item.amount), 0)
  .toFixed(2);
  return (
    <section className="m-4 select-none">
      <h2 className="text-xl font-bold mb-4">Cart Details</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="border-b text-left border-gray-300 py-2 px-4">
                No
              </th>
              <th className="border-b text-left border-gray-300 py-2 px-4">
                Item
              </th>
              <th className="border-b text-left border-gray-300 py-2 px-4">
                Price
              </th>
              <th className="border-b text-left border-gray-300 py-2 px-4">
                Quantity
              </th>
              <th className="border-b text-left border-gray-300 py-2 px-4">
                Total
              </th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => (
              <tr key={item.id}>
                <td className="border-b border-gray-300 py-2 px-4">{index + 1}</td>
                <td className="border-b border-gray-300 py-2 px-4">
                  {item.title}
                </td>
                <td className="border-b border-gray-300 py-2 px-4 text-right">
                  ${item.price.toFixed(2)}
                </td>
                <td className="border-b space-x-3  border-gray-300 py-2 px-4 text-right">
                  <span
                    onClick={() => updateCart(item.id, -1)}
                    className="w-6 h-6 inline-block text-center cursor-pointer rounded-full"
                  >
                    -
                  </span>
                  <p className="inline-block"> {item.amount}</p>
                  <span
                    onClick={() => updateCart(item.id, 1)}
                    className="w-6 h-6 inline-block text-center cursor-pointer rounded-full"
                  >
                    +
                  </span>
                </td>
                <td className="border-b border-gray-300 py-2 px-4 text-right">
                  ${(item.price * item.amount).toFixed(2)}
                </td>
              </tr>
            ))}
            <tr className="font-bold">
              <td className="border-b border-gray-300 py-2 px-4"></td>

              <td className="border-b border-gray-300 py-2 px-4">Total</td>
              <td className="border-b border-gray-300 py-2 px-4 text-right">
                $ {totalPrice}
              </td>
              <td className="border-b border-gray-300 py-2 px-4 text-right">
                {totalQuantity}
              </td>
              <td className="border-b border-gray-300 py-2 px-4 text-right">
                $ {totalCost}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default CartDetail;
