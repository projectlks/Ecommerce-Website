import { Button } from "@material-tailwind/react";
import { useContext, useEffect, useRef, useState } from "react";
import Card from "../components/Card";
import MainLoading from "../components/loading/MainLoading"; // Loading component for the loading state
import TopBar from "../components/TopBar";
import { MainUrlContext } from "../context/MainUrlContext"; // Importing context to get the main URL
import useFetch from "../hooks/useFetch"; // Custom hook to fetch data


interface MenuItem {
  name: string;
  url: string;
}

export default function Products() {
  const context = useContext(MainUrlContext);

  if (!context) {
    return <MainLoading amount={8} />; // Show loading state instead of null
  }

  const [url, setUrl] = useState<string>("https://dummyjson.com/products");
  const [products, setProducts] = useState<Product[]>([]);
  const { data, loading, error } = useFetch(url);
  const { data: menu } = useFetch("https://dummyjson.com/products/categories");

  const menuRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const animationFrameId = useRef<number | null>(null); // For handling momentum scrolling

  useEffect(() => {
    if (data && data.products) {
      setProducts(data.products);
    }
  }, [data]);

  const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    if (menuRef.current) {
      setIsDragging(true);
      setStartX(event.pageX - menuRef.current.offsetLeft);
      setScrollLeft(menuRef.current.scrollLeft);
    }
  };

  const handleMouseLeave = () => setIsDragging(false);
  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !menuRef.current) return;

    event.preventDefault();
    const x = event.pageX - menuRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; 

    if (animationFrameId.current) {
      cancelAnimationFrame(animationFrameId.current);
    }

    animationFrameId.current = requestAnimationFrame(() => {
      menuRef.current!.scrollLeft = scrollLeft - walk;
    });
  };

  return (
    <>
      <TopBar />


      {/* Scrollable menu with cursor grab effect */}
      <menu
        ref={menuRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        className="w-[90%] relative mx-auto z-20 mb-5 transition-all flex py-4 md:py-8 space-x-4 scroll-snap-x overflow-x-auto scrollbar-hide scroll-smooth"
      >
        <Button
          aria-label="Show all products"
          variant={
            url === "https://dummyjson.com/products" ? "filled" : "outlined"
          }
          className={`min-w-fit max-w-[200px] px-3 py-2 md:px-6 md:py-3 font-bold ${
            url === "https://dummyjson.com/products"
              ? "bg-accent border-none text-background"
              : "bg-background text-accent border-accent"
          }`}
          onClick={() => setUrl("https://dummyjson.com/products")}
        >
          All
        </Button>
        {menu &&
          menu.map((data: MenuItem) => (
            <Button
              aria-label={`Show products for ${data.name}`}
              variant={url === data.url ? "filled" : "outlined"}
              key={data.url}
              className={`min-w-fit max-w-[200px] px-3 py-2 md:px-6 md:py-3 font-bold ${
                url === data.url
                  ? "bg-accent border-none text-background"
                  : "bg-background text-accent border-accent"
              }`}
              onClick={() => setUrl(data.url)}
            >
              <span>{data.name}</span>
            </Button>
          ))}

        <button className={`min-w-[200px] opacity-0`}>All</button>
      </menu>

      <section className="w-[90%] relative mx-auto">
        <section className="md:w-[90%] relative pb-5 md:pb-15 xl:pb-20 w-full mx-auto grid grid-cols-2 transition-all xl:min-h-screen md:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-5">
          {/* Display loading component when fetching data */}
          {loading && <MainLoading amount={8} />}

          {error && (
            <div className="text-red-500">
              <h1>Something went wrong.</h1>
              <Button onClick={() => setUrl(url)}>Retry</Button>
            </div>
          )}

          {/* Map through the products and display each product card when not loading */}
          {!loading &&
            products.map((product: Product, index: number) => (
              <Card product={product} key={index} />
            ))}
        </section>
      </section>
    </>
  );
}
