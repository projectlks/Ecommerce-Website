import { useContext, useEffect, useState } from "react";
import Card from "../components/Card";
import MainLoading from "../components/loading/MainLoading"; // Loading component for the loading state
import { MainUrlContext } from "../context/MainUrlContext"; // Importing context to get the main URL
import useFetch from "../hooks/useFetch"; // Custom hook to fetch data

export default function () {
  const context = useContext(MainUrlContext); // Getting the URL from MainUrlContext

  if (!context) {
    return; // Return nothing if context is undefined or null
  }

  const { url } = context; // Destructure the `url` from context
  const [products, setProducts] = useState<Product[]>([]); // State to hold the fetched products
  const { data, loading, error } = useFetch(url); // Fetching data using the custom `useFetch` hook

  // useEffect to set products when data is fetched and available
  useEffect(() => {
    if (data && data.products) {
      setProducts(data.products); // Set products from the fetched data
    }
  }, [data]); // Runs when `data` changes

  return (
    <section className="md:w-[90%] w-full mx-auto grid grid-cols-2 transition-all xl:min-h-screen md:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-5">
      {/* Display loading component when fetching data */}
      {loading && <MainLoading amount={8} />}

      {error && <h1> This is error </h1>}

      {/* Map through the products and display each product card when not loading */}
      {!loading && products.slice(0,8).map((product, index) => <Card product={product} key={index}/>)}
    </section>
  );
}
