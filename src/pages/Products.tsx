import React, { useContext, useEffect, useState } from "react";
import { MainUrlContext } from "../context/MainUrlContext"; // Importing context to get the main URL
import useFetch from "../hooks/useFetch"; // Custom hook to fetch data
import MainLoading from "../components/loading/MainLoading"; // Loading component for the loading state
import { Link } from "react-router-dom"; // Link component for routing to product detail pages
import Star from "../components/Star"; // Component for displaying product ratings
// import { Product } from "./DealsOfTheDay.tsx "; // TypeScript type for the Product object

export default function () {
  const context = useContext(MainUrlContext); // Getting the URL from MainUrlContext

  if (!context) {
    return; // Return nothing if context is undefined or null
  }

  const { url } = context; // Destructure the `url` from context
  const [products, setProducts] = useState<Product[]>([]); // State to hold the fetched products
  const { data, loading } = useFetch(url); // Fetching data using the custom `useFetch` hook

  // useEffect to set products when data is fetched and available
  useEffect(() => {
    if (data && data.products) {
      setProducts(data.products); // Set products from the fetched data
    }
  }, [data]); // Runs when `data` changes

  return (
    <section className="md:w-[90%] w-full mx-auto grid grid-cols-2 transition-all xl:min-h-screen md:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-5">
      {/* Display loading component when fetching data */}
      {loading && <MainLoading />}

      {/* Map through the products and display each product card when not loading */}
      {!loading &&
        products.map((product) => (
          <Link to={`productDetail/${product.id}`} key={product.id}>
            <article className="relative product-card cursor-pointer w-full aspect-square select-none xl:hover:scale-110 transition-all">
              {/* Display discount percentage as a badge */}
              <div className="absolute md:left-4 left-2 top-2 md:top-4 px-1 md:px-2 z-10 text-[10px] md:text-sm py-[2px] md:py-1 flex font-bold text-gray-100 bg-red-500 rounded-sm justify-center items-center">
                - {product.discountPercentage.toFixed(1)}%{" "}
                {/* Display discount as a percentage */}
              </div>

              {/* Product Image */}
              <div className="w-full aspect-square flex items-center rounded-xl hover:bg-primary duration-200 bg-background h-auto relative">
                <img
                  src={product.thumbnail} // Thumbnail of the product
                  alt={product.title} // Product title for the alt attribute
                  className="float-bottom h-[80%] mx-auto w-auto"
                />
              </div>

              {/* Product details section */}
              <div className="w-full h-auto py-2 xl:px-5 px-2">
                {/* Display product rating and number of reviews */}
                <div className="flex items-center md:space-x-1 space-x-[2px] text-[10px]">
                  <Star rating={product.rating} />{" "}
                  {/* Star component to show product rating */}
                  <p>( {product.reviews.length} reviews )</p>{" "}
                  {/* Number of reviews */}
                </div>

                {/* Product title */}
                <h1 className="w-full overflow-hidden text-xs md:text-base font-bold text-accent truncate">
                  {product.title}
                </h1>

                {/* Display price and discounted price */}
                <div className="flex text-[10px] md:text-sm font-bold space-x-1">
                  <p>${product.price} / </p> {/* Actual price */}
                  <p className="line-through text-red-500">
                    $
                    {(
                      product.price + // Calculated original price before discount
                      product.price * (product.discountPercentage / 100)
                    ).toFixed(2)}
                  </p>
                </div>
              </div>
            </article>
          </Link>
        ))}
    </section>
  );
}
