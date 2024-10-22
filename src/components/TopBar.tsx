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
      setShowTopBar(false);
    } else {
      setShowTopBar(true);
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
  if (!context) return null;

  const { wish } = context;

  const { data } = useFetch(
    `https://dummyjson.com/products/search?q=${searchWords}`
  );

  useEffect(() => {
    if (data?.products) {
      setProducts(searchWords ? data.products : []);
    }
  }, [data, searchWords]);

  return (
    <section className="w-full  relative h-[90px]">
      <div
        className={`fixed top-0 left-0 w-full z-50 transition-all bg-gradient-to-tr from-primary to-accent flex
           justify-between items-center px-5 py-5 md:p-5 duration-300 shadow-lg ${
          showTopBar ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {/* Logo */}
        <header className="md:text-3xl text-lg font-bold text-background whitespace-nowrap">
          <h1>E-Com</h1>
        </header>

        {/* Search Box */}
        <div
          className={`relative transition-all ${
            searchWords === "" ? "w-[60%] md:w-[450px]" : "w-[75%] md:w-[450px]"
          }`}
        >
          <input
            value={searchWords}
            onChange={(e) => setSearchWords(e.target.value)}
            placeholder="Search..."
            aria-label="Search products"
            className="bg-white text-gray-700 py-2 px-4 shadow-inner w-full rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
          />
          {/* Results Box */}
          {searchWords && (
            <div className="absolute top-full left-0 w-full mt-2 bg-white shadow-lg rounded-lg z-10">
              {products.length > 0 ? (
                <ResultsBox products={products} />
              ) : (
                <div className="p-2 text-center">There are no results</div>
              )}
            </div>
          )}
        </div>

        {/* Cart and Wish Icons */}
        <div
          className={`space-x-4  items-center transition-all ${
            searchWords === ""
              ? "flex opacity-100"
              : "absolute right-0 opacity-0 md:opacity-100 md:relative md:flex"
          }`}
        >
          {/* Wish Icon */}
          <IconWithBadge
            link="/wish"
            iconClass="fa-solid fa-heart"
            badgeCount={wish.length}
            hoverText="Wish"
          />

          {/* Cart Icon */}
          <IconWithBadge
            link="/cartDetail"
            iconClass="fa-solid fa-cart-shopping"
            badgeCount={Cartlength}
            hoverText="Cart"
          />
        </div>
      </div>
    </section>
  );
};

export default TopBar;

interface IconWithBadgeProps {
  link: string;
  iconClass: string;
  badgeCount: number;
  hoverText: string;
}
const IconWithBadge: React.FC<IconWithBadgeProps> = ({
  link,
  iconClass,
  badgeCount,
  hoverText,
}) => {
  return (
    <span className="relative group flex items-center">
      <Link to={link} className="relative flex items-center">
        {/* Icon */}
        <i
          className={`${iconClass} cursor-pointer text-lg md:text-2xl text-white transition-all duration-300 ease-in-out 
          ${hoverText === 'Wish' ? 'group-hover:text-red-500' : 'group-hover:text-background'} `}
          aria-label={hoverText}
        >
          {badgeCount > 0 && (
            <span
              className={`absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-600 text-white rounded-full flex items-center justify-center font-bold ${
                badgeCount < 10
                  ? "text-xs w-5 h-5 md:w-6 md:h-6"
                  : "text-xs w-6 h-6 md:w-7 md:h-7"
              }`}
            >
              {badgeCount}
            </span>
          )}
        </i>
      </Link>

      {/* Hover Text */}
      <span className="absolute top-full left-1/2 transform -translate-x-1/2 translate-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-xs md:text-sm bg-black text-white px-3 py-1 rounded shadow-lg whitespace-nowrap z-10">
        {hoverText}
      </span>
    </span>
  );
};
