import {  useContext, useEffect, useState } from "react";
import useFetch from "../hooks/useFetch.jsx";
import Star from "../components/Star.jsx";
import Cart from "../components/Cart.jsx";
import MainLoading from "../components/loading/MainLoading.jsx";

import { CartContext } from "../context/CartContext.jsx";
import Hero from "../components/Hero.jsx";
import Menu from '../components/Menu.jsx'
import { Link } from "react-router-dom";
import { MainUrlContext } from "../context/MainUrlContext.jsx";



function App() {

  let {url} = useContext(MainUrlContext)
  const [products, setProducts] = useState([]);
  const { data, loading, error } = useFetch(url);
let { cart, addToCart, updateCart } = useContext(CartContext);


  useEffect(() => {
    if (data && data.products) {
      setProducts(data.products);
    }
  }, [data]);

  const addToCartFun = (id) => {
    let isHave = cart.some((item) => item.id === id);

    if (!isHave) {
      let productToAdd = products.find((product) => product.id === id);
      productToAdd = { ...productToAdd, amount: 1 };
      addToCart(productToAdd);
    } else {
    
      updateCart(id, 1);
    }
  };

 
  return (
    <section className="w-[90%] mx-auto ">
      <Hero />
      <Cart />
      <Menu />
      <section className="w-full grid grid-cols-2 min-h-screen transition-all md:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-10">
        {loading && <MainLoading />}
        {!loading &&
          products.map((product) => (
            <Link to={`productDetail/${product.id}`} key={product.id}>
              <article className="relative product-card cursor-pointer w-full select-none xl:hover:scale-110 rounded transition-all">
                <div className="absolute left-4 top-4 px-2 z-10 text-sm py-1 flex font-bold text-gray-100 bg-red-500 rounded-sm justify-center items-center ">
                  - {product.discountPercentage.toFixed(1)}%
                </div>

                <div className="w-full aspect-square flex items-center bg-background  h-auto relative">
                  {/* for image */}

                  <img
                    src={product.images[0]}
                    alt={product.title}
                    className="float-bottom h-[80%] mx-auto w-auto"
                  />
                </div>
                <div className="w-full h-auto py-2 md:px-5 px-3">
                  <div className="flex items-center space-x-1 text-[10px] ">
                    <Star rating={product.rating} />

                    <p>( {product.reviews.length} reviews )</p>
                  </div>

                  <h1 className="w-full overflow-hidden text-sm md:text-base font-bold text-accent truncate">
                    {product.title}
                  </h1>

                  <div className="flex text-xs md:text-sm font-bold space-x-1">
                    <p>${product.price} / </p>
                    <p className="line-through text-red-500">
                      $
                      {(
                        product.price +
                        product.price * (product.discountPercentage / 100)
                      ).toFixed(2)}
                    </p>
                  </div>
                </div>
              </article>
            </Link>
          ))}
      </section>
    </section>
  );
}

export default App;

// color code
// https://coolors.co/palette/006d77-83c5be-edf6f9-ffddd2-e29578
// for search
// https://dummyjson.com/products/search?q=
