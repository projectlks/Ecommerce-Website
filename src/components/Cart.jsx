import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

export default function Cart() {
  const { cart } = useContext(CartContext);
  const length = cart.length;
  return (
    <Link to="/cartDetail">
      <i
        className={`fa-solid cursor-pointer fa-cart-shopping fixed top-5 right-7 z-50 text-base  md:text-2xl text-white bg-opacity-50 hover:bg-opacity-80 transition-all bg-black px-2 md:px-4 py-1 md:py-2 rounded `}
      >
        {length > 0 && (
          <span
            className={`absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-accent text-white rounded-full flex items-center justify-center ${
              length < 10
                ? "md:text-xs text-[10px] w-5 h-5 md:w-6 md:h-6"
                : "md:text-[10px] text-[8px] w-6 h-6 md:w-7 md:h-7"
            }`}
          >
            {length}
          </span>
        )}
      </i>
    </Link>
  );
}
