import React, { useContext, useEffect, useRef, useState } from "react";
import { MainUrlContext } from "../context/MainUrlContext";
import useFetch from "../hooks/useFetch";
import { Link } from "react-router-dom";
import Star from "../components/Star";
import MainLoading from "../components/loading/MainLoading";

export interface Product {
  id: number;
  title: string;
  price: number;
  discountPercentage: number;
  rating: number;
  reviews: Array<any>;
  thumbnail: string;
}

interface Time {
  hour: number;
  min: number;
  sec: number;
}

const DealsOfTheDay: React.FC = () => {
  const context = useContext(MainUrlContext);
  if (!context) return null;

  const { url } = context;
  const [products, setProducts] = useState<Product[]>([]);
  const { data, loading, error } = useFetch(url);
  const [promotionTime, setPromotionTime] = useState<Time>({
    hour: 22,
    min: 55,
    sec: 60,
  });

  const parentWidthRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (data && data.products) {
      setProducts(data.products);
    }
  }, [data]);

  // Countdown timer logic
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
          clearInterval(intervalId);
          return prev; // Prevent setting negative time
        }

        return { hour, min, sec };
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  // Dynamic CSS calculation for carousel
  useEffect(() => {
    if (products.length > 0) {
      const slideWidth = window.innerWidth >= 768 ? 300 : 200; // Slide width
      const gap = 10; // Gap between slides

      // Get screen width
      const parentWidth = parentWidthRef.current?.offsetWidth;

      // Calculate the total width of the carousel items
      const totalWidth =
        slideWidth * products.length + gap * (products.length - 1) + 200;

      // Calculate the edge position (negative) based on screen width
      const carouselEdgePos = `calc(-${totalWidth}px + ${parentWidth}px)`;

      // Dynamically update CSS variables

      document.documentElement.style.setProperty("--gap", `${gap}px`);
      document.documentElement.style.setProperty(
        "--duration",
        `${2 * products.length}s`
      );
      document.documentElement.style.setProperty(
        "--carousel-edge-pos",
        carouselEdgePos
      );
    }
  }, [products]);

  return (
    <div className="w-full overflow-hidden h-auto xl:h-[550px] flex flex-col xl:flex-row bg-gradient-to-tr from-blue-gray-900 py-20 xl:py-0 to-black text-white items-center mt-[100px]">
      <div className="xl:w-[25%] w-full text-center font-semibold leading-none text-xl md:text-[2rem] xl:text-[3rem]">
        <h1 className="w-full block">
          Deals of <br /> the day
        </h1>
        <p className="w-full text-sm md:text-[1.5rem] xl:text-[2rem] flex justify-center space-x-1 xl:space-x-3 text-gray-400 mt-3 xl:mt-5">
          {`${promotionTime.hour < 10 ? "0" : ""}${promotionTime.hour}`}:
          {`${promotionTime.min < 10 ? "0" : ""}${promotionTime.min}`}:
          {`${promotionTime.sec < 10 ? "0" : ""}${promotionTime.sec}`}
        </p>
      </div>

      <div className="w-full xl:w-[75%] " ref={parentWidthRef}>
        <section className="carousel-section">
          <div className="css-carousel  w-fit px-20  ">
            

            {loading ? (
              <div className="w-full grid grid-cols-4  gap-10">
                <MainLoading amount={4} />
              </div>
            ) : (
              products.map((product, index) => (
                <Link to={`/productDetail/${product.id}`} key={index}>
                  <article
                    className={`relative product-card cursor-pointer bg-accent w-[200px] min-w-[200px] md:min-w-[300px] select-none rounded transition-all hover:scale-105 `}
                  >
                    <div className="absolute left-2 top-2 px-1 text-[10px] md:text-sm py-1 flex font-bold text-gray-100 bg-red-500 rounded-sm">
                      - {product.discountPercentage.toFixed(1)}%
                    </div>

                    <div className="w-full aspect-square flex items-center bg-background h-auto relative">
                      <img
                        src={product.thumbnail}
                        alt={product.title}
                        className="h-[70%] mx-auto"
                      />
                    </div>

                    <div className="w-full py-2 px-2 xl:px-4">
                      <div className="flex items-center space-x-1 text-xs">
                        <Star rating={product.rating} />
                        <p>( {product.reviews.length} reviews )</p>
                      </div>

                      <h1 className="w-full text-xs md:text-sm xl:text-base font-bold truncate">
                        {product.title}
                      </h1>

                      <div className="flex text-xs md:text-sm xl:text-base font-bold space-x-1">
                        <p>${product.price.toFixed(2)}</p>
                        <p className="line-through text-red-500">
                          ${" "}
                          {(
                            product.price +
                            product.price * (product.discountPercentage / 100)
                          ).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  </article>
                </Link>
              ))
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default DealsOfTheDay;
