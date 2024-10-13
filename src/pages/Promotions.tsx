import React, { useContext, useEffect, useState } from "react";
import { MainUrlContext } from "../context/MainUrlContext";
import useFetch from "../hooks/useFetch";
import { Link } from "react-router-dom";
import Star from "../components/Star";


export interface Product {
  id: number;
  title: string;
  price: number;
  discountPercentage: number;
  rating: number;
  reviews: Array<any>; // Adjust this type according to your reviews structure
  thumbnail: string;
}

interface Time {
  hour: number;
  min: number;
  sec: number;
}

const DealsOfTheDay: React.FC = () => {
  const context = useContext(MainUrlContext); // Get the URL from MainUrlContext

  if (!context) {
    return null; // Return null or a loading spinner if context is not available
  }

  const { url } = context;
  const [products, setProducts] = useState<Product[]>([]); // State to hold products
  const { data, loading } = useFetch(url); // Fetch data from the URL
  const [promotionTime, setPromotionTime] = useState<Time>({
    hour: 22,
    min: 55,
    sec: 60,
  });

  // Effect to set products when data is fetched
  useEffect(() => {
    if (data && data.products) {
      setProducts(data.products);
    }
  }, [data]);

  // Unified time management
  useEffect(() => {
    const intervalId = setInterval(() => {
      setPromotionTime((prev) => {
        let { hour, min, sec } = prev;

        if (sec > 0) {
          sec--;
        } else if (min > 0) {
          sec = 59;
          min--;
        } else if (hour > 0) {
          sec = 59;
          min = 59;
          hour--;
        } else {
          clearInterval(intervalId); // Clear interval when time reaches zero
        }

        return { hour, min, sec };
      });
    }, 1000); // Update every second

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  return (
    <div
      className="w-full overflow-hidden h-[550px] flex-col xl:flex-row bg-gradient-to-tr from-blue-gray-900 to-black text-white flex items-center my-[100px]"

    >
      <div className="xl:w-[25%] md:w-[20%] w-full text-center font-semibold leading-none text-xl md:text-[3rem]">
        <h1 className="w-full block">
          Deals of <br />
          the day
        </h1>
        <p className="w-full text-base md:text-[2rem] flex justify-center space-x-3 text-gray-400 mt-5">
          {promotionTime.hour < 10 ? `0${promotionTime.hour}` : promotionTime.hour} :
          {promotionTime.min < 10 ? `0${promotionTime.min}` : promotionTime.min} :
          {promotionTime.sec < 10 ? `0${promotionTime.sec}` : promotionTime.sec}
        </p>
      </div>

      <div className="grid grid-cols-2 w-full xl:grid-cols-4 gap-5 xl:mr-5 xl:w-[75%]">
        {loading ? ( // Handle loading state
          <p>Loading products...</p>
        ) : (
          products.slice(0, 4).map((product) => (
            <Link to={`productDetail/${product.id}`} key={product.id}>
              <article className="relative product-card cursor-pointer bg-accent w-full select-none xl:hover:scale-110 rounded transition-all">
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

                  <h1 className="w-full overflow-hidden text-xs md:text-base font-bold  truncate">
                    {product.title}
                  </h1>

                  <div className="flex text-[10px] md:text-sm font-bold space-x-1">
                    <p>${product.price} / </p>
                    <p className="line-through text-red-500">
                      $
                      {(product.price + product.price * (product.discountPercentage / 100)).toFixed(2)}
                    </p>
                  </div>
                </div>
              </article>
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default DealsOfTheDay;
