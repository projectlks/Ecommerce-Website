import React, { useState, useEffect, useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import ResultsBox from "./ResultsBox";
import { wishContext } from "../context/wishContext";

interface Product {
  id: number;
  title: string;
  thumbnail: string;
}

const TopBar: React.FC = () => {
  const [showTopBar, setShowTopBar] = useState<boolean>(true);
  const [lastScrollY, setLastScrollY] = useState<number>(0);
  const [searchWords, setSearchWords] = useState<string>("");
  const [products, setProducts] = useState<Product[]>([]);

  const controlTopBar = () => {
    if (window.scrollY > lastScrollY) {
      setShowTopBar(false); // Hide TopBar on scroll down
    } else {
      setShowTopBar(true); // Show TopBar on scroll up
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlTopBar);
    return () => {
      window.removeEventListener("scroll", controlTopBar);
    };
  }, [lastScrollY]);

  const { cart } = useContext(CartContext);
  const Cartlength = cart.length;

  const context = useContext(wishContext);
  if (!context) {
    return null; // Ensure the component doesn't crash if context is not available
  }
  const { wish } = context;

  const { data } = useFetch(
    `https://dummyjson.com/products/search?q=${searchWords}`
  );

  useEffect(() => {
    if (!data || !data.products) return;
    setProducts(data.products);

    if (searchWords === "") {
      setProducts([]);
    }
  }, [data]);

  return (
    <section className="w-full relative h-[90px]">
      <div
        className={`fixed top-0 left-0 w-full z-50 transition-transform bg-gradient-to-tr from-primary to-accent flex justify-between items-center px-3 py-5 md:p-5 duration-300 shadow-lg ${
          showTopBar ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {/* Logo */}
        <header className="md:text-3xl text-lg font-bold text-white">
          <h1>E-Com</h1>
        </header>

        {/* Search Box */}
        <div className="relative w-[70%] md:w-[450px]">
          <input
            value={searchWords}
            onChange={(e) => setSearchWords(e.target.value)}
            placeholder="Search..."
            className="bg-white text-gray-700 py-2 px-4 shadow-inner w-full rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
          />
          {/* Results Box */}
          <div className="absolute top-full left-0 w-full mt-2 bg-white shadow-lg rounded-lg z-10">
            <ResultsBox products={products} />
          </div>
        </div>

        {/* Cart and Wish Icons */}
        <div className="flex space-x-4 items-center">
          {/* Wish Icon */}
          <span className="relative group">
            <Link to="/cartDetail">
              <i
                className={`fa-solid fa-heart cursor-pointer text-lg md:text-2xl text-white transition-all rounded relative group-hover:text-red-500`}
              >
                {wish.length > 0 && (
                  <span
                    className={`absolute top-0 right-0 transform translate-x-2/3 -translate-y-2/3 bg-red-500 text-white rounded-full flex items-center justify-center ${
                      wish.length < 10
                        ? "md:text-xs text-[10px] w-5 h-5 md:w-6 md:h-6"
                        : "md:text-[10px] text-[8px] w-6 h-6 md:w-7 md:h-7"
                    }`}
                  >
                    {wish.length}
                  </span>
                )}
              </i>
            </Link>

            {/* Hover text */}
            <span className="absolute top-full left-1/2 transform -translate-x-1/2 translate-y-1 text-xs md:text-sm bg-black text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-all duration-200">
              Wish
            </span>
          </span>

          {/* Cart Icon */}
          <span className="relative group">
            <Link to="/cartDetail">
              <i
                className={`fa-solid fa-cart-shopping cursor-pointer text-lg md:text-2xl text-white transition-all rounded relative`}
              >
                {Cartlength > 0 && (
                  <span
                    className={`absolute top-0 right-0 transform translate-x-2/3 -translate-y-2/3 bg-red-500 text-white rounded-full flex items-center justify-center ${
                      Cartlength < 10
                        ? "md:text-xs text-[10px] w-5 h-5 md:w-6 md:h-6"
                        : "md:text-[10px] text-[8px] w-6 h-6 md:w-7 md:h-7"
                    }`}
                  >
                    {Cartlength}
                  </span>
                )}
              </i>
            </Link>

            {/* Hover text */}
            <span className="absolute top-full left-1/2 transform -translate-x-1/2 translate-y-1 text-xs md:text-sm bg-black text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-all duration-200">
              Cart
            </span>
          </span>
        </div>
      </div>
    </section>
  );
};

export default TopBar;
