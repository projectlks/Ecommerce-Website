import { useEffect, useState } from "react";
import useFetch from "./hooks/useFetch.jsx";
import Star from "./components/Star.jsx";

function App() {
  let [products, setProducts] = useState([]);

  let { data, loading, error } = useFetch("https://dummyjson.com/products");

  useEffect(() => {
    if (data && data.products) {
      setProducts(data.products);
    }
  }, [data]);

  return (
    <>
      <section className="w-full md:w-[90%] my-[100px] mx-auto grid grid-cols-4 gap-10">
        {loading &&
          Array.from({ length: 10 }, (_, index) => (
            <div
              key={index}
              className="w-full aspect-[2/3] bg-slate-700 animate-pulse"
            ></div>
          ))}
        {!loading &&
          products.map((product) => (
            <article
              key={product.id}
              className="relative product-card w-full select-none hover:scale-110 rounded cursor-pointer transition-all  bg-background shadow"
            >
              <div className="absolute top-3 bg-slate-200 w-10 h-10 cursor-pointer flex justify-center items-center right-3">
                <i className="fa-regular text-[20px] fa-heart"></i>
              </div>
              <div className="absolute left-4 top-2 px-5 bg-black bg-opacity-30 py-1 flex rounded-full justify-center items-center border">
                {product.discountPercentage}% OFF
              </div>
              <div className="w-full aspect-square flex items-center -z-1  h-auto relative">
                {/* for image */}
                <div className="h-[70%] relative mx-auto ">
                  <img
                    src={product.images[0]}
                    alt={product.title}
                    className="  float-bottom h-full   w-auto"
                  />
                 
                </div>

                <span className=" absolute bottom-2 right-2 font-bold justify-center items-end  flex space-x-1">
                  <p className="text-3xl "> ${product.price} /</p>
                  <p className="line-through text-red-500">
                    {(
                      product.price +
                      product.price * (product.discountPercentage / 100)
                    ).toFixed(2)}
                  </p>
                </span>
              </div>

              <div className="w-full py-3  px-5 bg-light_accent">
                <h1 className="w-full overflow-hidden font-bold text-ellipsis whitespace-nowrap">
                  {product.title}
                </h1>
                <div className="flex items-center space-x-1 text-sm">
                  <Star rating={product.rating} />
                  <p> ( {product.rating} )</p>
                </div>

                {/* <p>{product.description}</p> */}
                <div className="w-full border-black pt-4 mt-4 border-t flex justify-between">
                  <p className="text-xs border p-2 border-black rounded-full">
                    Add to Card
                    <i class="fa-solid fa-circle-plus ml-2"></i>
                  </p>
                  {/* <p>Buy Now</p> */}
                </div>
              </div>
            </article>
          ))}
      </section>
    </>
  );
}

export default App;


    
// color code 
// https://coolors.co/palette/006d77-83c5be-edf6f9-ffddd2-e29578