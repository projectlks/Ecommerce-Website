import { useEffect, useState } from "react";
import useFetch from "./hooks/useFetch.jsx";
import Star from "./components/Star.jsx";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const { data, loading, error } = useFetch("https://dummyjson.com/products");

  useEffect(() => {
    if (data && data.products) {
      setProducts(data.products);
    }
  }, [data]);

  const addToCartFun = (id) => {
    let isHave = cart.some(item => item.id === id);
    console.log(isHave);

    if (!isHave) {
      const productToAdd = products.find((product) => product.id === id);
      setCart((prev) => [...prev, productToAdd]);
    }
  };


  return (
    <>
      <section className="w-[90%] custom-600:grid-cols-2 my-[100px] mx-auto grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-10">
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
              className="relative product-card w-full select-none hover:scale-110 rounded transition-all bg-background shadow"
            >
              <div className="absolute top-3 z-50 bg-slate-200 w-10 h-10 cursor-pointer flex justify-center items-center right-3">
                <i className="fa-regular cursor-pointer text-[20px] fa-heart"></i>
              </div>
              <div className="absolute left-4 top-4 px-2 text-sm py-1 flex font-bold text-gray-100 rounde bg-red-500 rounded-sm justify-center items-center ">
                - {product.discountPercentage.toFixed(1)}%
              </div>
              <div className="w-full aspect-square flex items-center -z-1 h-auto relative">
                {/* for image */}
                <div className="h-[70%] relative mx-auto">
                  <img
                    src={product.images[0]}
                    alt={product.title}
                    className="float-bottom h-full w-auto"
                  />
                </div>
                <span className="absolute bottom-2 right-2 font-bold justify-center items-end flex space-x-1">
                  <p className="text-3xl">$ {product.price} /</p>
                  <p className="line-through text-red-500">
                    {(
                      product.price +
                      product.price * (product.discountPercentage / 100)
                    ).toFixed(2)}
                  </p>
                </span>
              </div>
              <div className="w-full h-auto py-2 px-5 bg-light_accent">
                <div className="flex items-center space-x-1 text-xs mb-1">
                  <Star rating={product.rating} />
                  {/* <p> ( {Math.floor(Math.random() * 10 + 1)} reviews )</p> */}
                  <p>( {product.reviews.length} reviews )</p>
                </div>

                <h1 className="w-full overflow-hidden text-xl font-extrabold text-accent truncate">
                  {product.title}
                </h1>

                <p className="text-sm text-gray-800 line-clamp-2">
                  {product.description}
                </p>

                <div className="w-full pt-4 mb-4 flex space-x-3">
                  <p
                    onClick={() => addToCartFun(product.id)}
                    className="text-xs text-gray-100 hover:text-gray-950 cursor-pointer font-bold bg-black bg-opacity-50 p-2 bg-gradient-to-tr px-3 hover:bg-gradient-to-tr transition-all hover:from-background hover:to-primary rounded-md"
                  >
                    Add to Cart
                    <i className="fa-solid fa-circle-plus ml-2"></i>
                  </p>
                  <p className="text-xs border px-3 py-2 cursor-pointer border-black rounded-md">
                    View
                  </p>
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
// for search
// https://dummyjson.com/products/search?q=
