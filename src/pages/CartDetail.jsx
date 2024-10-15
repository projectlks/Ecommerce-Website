import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { IconButton } from "@material-tailwind/react";
import { useNavigate } from "react-router";
import CartTotal from "../components/CartTotal";
import BackButtom from "../components/BackButtom";

const CartDetail = () => {
  const { cart, updateCart, removeFromCart } = useContext(CartContext); // Get cart and functions from CartContext
  const navigate = useNavigate(); // Hook to navigate programmatically

  return (
    <section className="m-4 w-full md:w-[90%] mx-auto py-10 px-5 select-none">
      {/* Back Button */}
      <BackButtom />

      {/* Table and CartTotal container */}
      <div className="flex flex-col xl:flex-row space-y-5 xl:space-y-0 xl:space-x-5">
        {/* Cart Table */}
        <div className="overflow-x-auto scrollbar-hide xl:w-[70%] ">
          <table className="min-w-full w-full xl:w-full  border border-gray-200">
            <thead className="h-[70px]  ">
              <tr className=" text-background text-xl font-bold  bg-accent ">
                <th className="border-b text-xl font-bold max-w-[100px] bg-transparent text-center border-gray-300 py-2 px-4">
                  NO.
                </th>
                <th className="border-b max-w-[400px] text-left border-gray-300 py-2 px-4">
                  Product
                </th>
                <th className="border-b border-gray-300 py-2 text-center px-4">
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
            {!!cart.length && (
              <tbody className="w-auto h-auto">
                {cart.map((item, index) => (
                  <tr key={item.id} className="bg-background">
                    <td className="border-b  text-xl font-bold border-gray-300 py-2 text-center">
                      {index + 1}
                    </td>
                    <td className="border-b  border-gray-300 flex items-start space-x-3 py-4 px-4">
                      <span className="inline-block w-16 bg-accent relative rounded h-16">
                        <img
                          src={item.thumbnail}
                          alt={item.title}
                          className="h-full w-auto mx-auto"
                        />
                        <i
                          className="fa-regular fa-circle-xmark absolute text-red-500 cursor-pointer -top-3 -right-3"
                          onClick={() => removeFromCart(item.id)}
                        ></i>
                      </span>
                      <span>
                        <h4
                          className="hover:text-accent hover:underline text-sm xl:text-base overflow-hidden font-bold text-ellipsis whitespace-nowrap"
                          onClick={() => navigate(`/productDetail/${item.id}`)}
                        >
                          {item.title}
                        </h4>
                        <p className="text-gray-700 text-xs">
                          Quantity: {item.amount}
                        </p>
                        <p className="text-gray-700 text-xs">
                          Discount: - {item.discountPercentage}%
                        </p>
                      </span>
                    </td>
                    <td className="border-b border-gray-300 py-2 text-right">
                      <p className="w-[80px] mx-auto">
                        $
                        {(
                          item.price +
                          item.price * (item.discountPercentage / 100)
                        ).toFixed(2)}
                      </p>
                    </td>
                    <td className="border-b border-gray-300 py-2 whitespace-nowrap text-center">
                      <IconButton
                        variant="text"
                        onClick={() => updateCart(item.id, -1)}
                      >
                        <i className="fa-solid fa-minus text-base"></i>
                      </IconButton>
                      <p className="inline-block text-base bg-gray-500 w-14 rounded text-center py-1">
                        {item.amount}
                      </p>
                      <IconButton
                        variant="text"
                        onClick={() => updateCart(item.id, 1)}
                      >
                        <i className="fa-solid fa-plus text-base"></i>
                      </IconButton>
                    </td>
                    <td className="border-b border-gray-300 py-2 text-right">
                      <p className="w-[100px] mx-auto">
                        $
                        {(
                          (item.price +
                            item.price * (item.discountPercentage / 100)) *
                          item.amount
                        ).toFixed(2)}
                      </p>
                    </td>
                  </tr>
                ))}
              </tbody>
            )}

            {/* Empty Cart Message */}
            {!cart.length && (
              <tbody>
                <tr>
                  <td colSpan={5} className="text-center py-5 text-gray-800">
                    Your cart is currently empty
                  </td>
                </tr>
              </tbody>
            )}
          </table>
        </div>

        {/* Cart Total */}
        <div className="w-full max-w-[500px] mx-auto xl:w-[30%] min-w-[300px]">
          <CartTotal />
        </div>
      </div>
    </section>
  );
};

export default CartDetail;
