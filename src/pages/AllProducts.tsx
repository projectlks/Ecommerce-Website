import { Button } from "@material-tailwind/react";
import { useContext, useEffect, useState } from "react";
import BackButtom from "../components/BackButtom";
import Card from "../components/Card";
import MainLoading from "../components/loading/MainLoading"; // Loading component for the loading state
import TopBar from "../components/TopBar";
import { MainUrlContext } from "../context/MainUrlContext"; // Importing context to get the main URL
import useFetch from "../hooks/useFetch"; // Custom hook to fetch data

export default function Products() {
  const context = useContext(MainUrlContext); // Getting the URL from MainUrlContext

  if (!context) {
    return; // Return nothing if context is undefined or null
  }

  const [url, setUrl] = useState<string>("https://dummyjson.com/products");
  const [products, setProducts] = useState<Product[]>([]); // State to hold the fetched products
  const { data, loading, error } = useFetch(url); // Fetching data using the custom `useFetch` hook
  const { data: menu } = useFetch("https://dummyjson.com/products/categories");

  // useEffect to set products when data is fetched and available
  useEffect(() => {
    if (data && data.products) {
      setProducts(data.products); // Set products from the fetched data
    }
  }, [data]); // Runs when `data` changes

console.log(menu);


  return (
    <>
      <TopBar />

      {/* Scrollable menu with cursor grab effect */}
      <menu className="w-[90%] mx-auto relative flex py-8 space-x-4 scroll-snap-x overflow-x-auto scrollbar-hide scroll-smooth">
        <BackButtom />
        <Button
          variant={
            url === "https://dummyjson.com/products" ? "filled" : "outlined"
          }
          className={` min-w-fit max-w-[200px]  font-bold scroll-snap-align-start ${
            url === "https://dummyjson.com/products"
              ? "bg-accent border-none text-background "
              : "bg-background text-accent border-accent"
          }`}
          onClick={() => setUrl("https://dummyjson.com/products")}
        >
          All
        </Button>
        {menu &&
          menu.map((data: any) => {
            return (
              <Button
                variant={url === data.url ? "filled" : "outlined"}
                key={data.name}
                className={` min-w-fit max-w-[200px]  font-bold scroll-snap-align-start ${
                  url === data.url
                    ? "bg-accent border-none text-background "
                    : "bg-background text-accent border-accent"
                }`}
                onClick={() => setUrl(data.url)}
              >
                <span>{data.name}</span>
              </Button>
            );
          })}
      </menu>

      <section className="w-[90%] relative mx-auto">
        <section className="md:w-[90%] relative py-20 w-full mx-auto grid grid-cols-2 transition-all xl:min-h-screen md:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-5">
          {/* Display loading component when fetching data */}
          {loading && <MainLoading amount={8} />}

          {error && <h1>This is an error</h1>}

          {/* Map through the products and display each product card when not loading */}
          {!loading &&
            products.map((product, index) => (
              <Card product={product} key={index} />
            ))}
        </section>
      </section>
    </>
  );
}
