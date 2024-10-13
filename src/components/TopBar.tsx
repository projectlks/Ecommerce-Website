import React, { useState, useEffect, useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import ResultsBox from "./ResultsBox";

// Define a Product type
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
      // If scroll down, hide TopBar
      setShowTopBar(false);
    } else {
      // If scroll up, show TopBar
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
  const length = cart.length;

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
  
      {/* Cart Icon */}
      <span className="relative">
        <Link to="/cartDetail">
          <i
            className={`fa-solid fa-cart-shopping cursor-pointer text-base md:text-2xl text-white bg-opacity-50 hover:bg-opacity-80 transition-all px-2 md:px-4 py-1 md:py-2 rounded relative`}
          >
            {length > 0 && (
              <span
                className={`absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-500 text-white rounded-full flex items-center justify-center ${
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
      </span>
    </div>
  </section>
  
  );
};

export default TopBar;


// <section className="w-full relative h-[90px]">
// <div
//   className={`fixed top-0 left-0 w-full z-50 transition-transform bg-gradient-to-tr from-[#338A91] to-accent flex justify-between items-center px-3 py-5 md:p-5 duration-300 shadow-lg ${
//     showTopBar ? "translate-y-0" : "-translate-y-full"
//   }`}
// >
//   {/* logo */}
//   <header className="md:text-3xl text-lg font-bold text-white">
//     <h1>E-Com</h1>
//   </header>

//   {/* Search Box */}
//   <input
//     value={searchWords}
//     onChange={(e) => setSearchWords(e.target.value)} // Update state on input change
//     placeholder="Search..."
//     className="bg-white text-gray-700 py-2 px-4 shadow-inner w-[70%] md:w-[450px] rounded focus:outline-none"
//   />

//   {/* Result Box */}

//  <ResultsBox products = {products}/>
//   {/* Cart Icon */}
//   <span className="flex">
//     <Link to="/cartDetail">
//       <i
//         className={`fa-solid cursor-pointer fa-cart-shopping relative text-base md:text-2xl text-white bg-opacity-50 hover:bg-opacity-80 transition-all px-2 md:px-4 py-1 md:py-2 rounded`}
//       >
//         {length > 0 && (
//           <span
//             className={`absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-400 text-white rounded-full flex items-center justify-center ${
//               length < 10
//                 ? "md:text-xs text-[10px] w-5 h-5 md:w-6 md:h-6"
//                 : "md:text-[10px] text-[8px] w-6 h-6 md:w-7 md:h-7"
//             }`}
//           >
//             {length}
//           </span>
//         )}
//       </i>
//     </Link>
//   </span>
// </div>
// </section>