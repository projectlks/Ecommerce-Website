import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { IconButton } from "@material-tailwind/react";
import { useNavigate } from "react-router";

const CartDetail = () => {
  const { cart, updateCart, removeFromCart } = useContext(CartContext);


  const totalPrice = cart
    .reduce((total, item) => total + item.price, 0)
    .toFixed(2);


  const totalQuantity = cart.reduce((total, item) => total + item.amount, 0);

 
  // const totalCost = (totalPrice * totalQuantity) .toFixed(2);
const totalCost = cart
  .reduce((total, item) => total + (item.price * item.amount), 0)
  .toFixed(2);

  const navigate = useNavigate()
  return (
    <section className="m-4  w-[90%] mx-auto  py-10 select-none">
      <div className=" flex">
        <table className="w-[70%] h-1 bg-white border border-gray-200">
          <thead className="h-[50px]">
            <tr className="bg-gray-100">
              <th className="border-b max-w-[400px] text-left border-gray-300 py-2 px-4">
                Product
              </th>
              <th className="border-b  border-gray-300 py-2 text-center px-4">
                Price
              </th>
              <th className="border-b text-center border-gray-300 py-2 px-4">
                Quantity
              </th>
              <th className="border-b text-center border-gray-300 py-2 px-4">
                Total
              </th>
            </tr>
          </thead>
          <tbody className="w-auto h-auto">
            {cart.map((item, index) => (
              <tr key={item.id}>
                <td className="border-b max-w-[400px]  border-gray-300 flex items-start space-x-3 py-4 px-4">
                  <span className="inline-block w-16 bg-accent relative rounded h-16">
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="h-full"
                    />
                    <i
                      className="fa-regular fa-circle-xmark absolute text-red-500 cursor-pointer -top-3 -right-3"
                      onClick={() => removeFromCart(item.id)}
                    ></i>
                  </span>
                  <span className="py-2">
                    <h4
                      className="w-[300px] hover:text-accent hover:underline text-base overflow-hidden font-bold text-ellipsis whitespace-nowrap "
                      onClick={() => navigate(`/productDetail/${item.id}`)}
                    >
                      {item.title}
                    </h4>
                    <p className="text-gray-700 text-sm">
                      Quantity : {item.amount}
                    </p>
                  </span>
                </td>
                <td className="border-b border-gray-300 bg-red-200 py-2 w-[150px] text-right ">
                  <p className="w-[80px] mx-auto ">
            
                    ${item.price.toFixed(2)}{" "}
                  </p>
                </td>
                <td className="border-b space-x-2 bg-red-600  border-gray-300 py-2 whitespace-nowrap text-center">
                  <IconButton
                    variant="text"
                    onClick={() => updateCart(item.id, -1)}
                  >
                    <i className="fa-solid fa-minus text-base"></i>
                  </IconButton>
                  <p className="inline-block  text-base bg-gray-500 w-14 rounded text-center py-1">
                    {item.amount}
                  </p>
                  <IconButton
                    variant="text"
                    onClick={() => updateCart(item.id, 1)}
                  >
                    <i className="fa-solid fa-plus text-base"></i>
                  </IconButton>
                </td>
                <td className="border-b border-gray-300 h-full  py-2 px-4 ">
                  <p className="w-[100px] mx-auto text-right ">
                    $ {(item.price * item.amount).toFixed(2)}
                  </p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="w-[30%] bg-red-500 h-[200px]"></div>
      </div>
    </section>
  );
};

export default CartDetail;


      // <tr className="font-bold">
      //   <td className="border-b border-gray-300 py-2 px-4"></td>

      //   <td className="border-b border-gray-300 py-2 px-4">Total</td>
      //   <td className="border-b border-gray-300 py-2 px-4 text-right">
      //     $ {totalPrice}
      //   </td>
      //   <td className="border-b border-gray-300 py-2 px-4 text-right">
      //     {totalQuantity}
      //   </td>
      //   <td className="border-b border-gray-300 py-2 px-4 text-right">
      //     $ {totalCost}
      //   </td>
      // </tr>;