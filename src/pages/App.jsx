import { useContext, useEffect, useState } from "react";
import useFetch from "../hooks/useFetch.jsx";
import Star from "../components/Star.jsx";
import Cart from "../components/Cart.jsx";
import MainLoading from "../components/loading/MainLoading.jsx";
import Hero from "../components/Hero.jsx";
import Menu from "../components/Menu.jsx";
import { Link } from "react-router-dom";
import { MainUrlContext } from "../context/MainUrlContext.jsx";
// import TopBar from "../components/TopBar.jsx";

import TopBar from '../components/TopBar.tsx'

function App() {
  const { url } = useContext(MainUrlContext); // Get the URL from MainUrlContext
  const [products, setProducts] = useState([]); // State to hold products
  const { data, loading } = useFetch(url); // Fetch data from the URL

  // Effect to set products when data is fetched
  useEffect(() => {
    if (data && data.products) {
      setProducts(data.products);
    }
  }, [data]);


  console.log(products)
  return (
    <section className="w-[90%] mx-auto">

      <TopBar/>
      <Hero />
      <Cart />
      <Menu />

      <section className="w-full grid grid-cols-2 transition-all md:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-10">
        {loading && <MainLoading />} 

        {!loading &&
          products.map((product) => (
            <Link to={`productDetail/${product.id}`} key={product.id}>
              <article className="relative product-card cursor-pointer w-full select-none xl:hover:scale-110 rounded transition-all">
                <div className="absolute md:left-4 left-2 top-2 md:top-4 px-1 md:px-2 z-10 text-[10px] md:text-sm py-[2px] md:py-1 flex font-bold text-gray-100 bg-red-500 rounded-sm justify-center items-center">
                  - {product.discountPercentage.toFixed(1)}%
                </div>

                <div className="w-full aspect-square flex items-center bg-background h-auto relative">
                  {/* Product Image */}
                  <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="float-bottom h-[80%] mx-auto w-auto"
                  />
                </div>

                <div className="w-full h-auto py-2 xl:px-5 px-2">
                  <div className="flex items-center md:space-x-1 space-x-[2px] text-[10px]">
                    <Star rating={product.rating} />
                    <p>( {product.reviews.length} reviews )</p>
                  </div>

                  <h1 className="w-full overflow-hidden text-xs md:text-base font-bold text-accent truncate">
                    {product.title}
                  </h1>

                  <div className="flex text-[10px] md:text-sm font-bold space-x-1">
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

// Color palette for styling
// https://coolors.co/palette/006d77-83c5be-edf6f9-ffddd2-e29578
// DummyJSON search endpoint
// https://dummyjson.com/products/search?q=
