import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import useFetch from "../hooks/useFetch";
import Star from "../components/Star";
import { Button } from "@material-tailwind/react";
import { CartContext } from "../context/CartContext";
import Cart from "../components/Cart";

export default function ProductDetail() {
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  const { data } = useFetch(`https://dummyjson.com/products/${id}`);
    const { addToCart } = useContext(CartContext);

  useEffect(() => {
    if (data ) {

      setProduct(data);
    }
  }, [data]);


  return (
    <>
    <Cart/>
      {product && (
        <section className="flex flex-col xl:flex-row w-[90%] transition-all select-none mx-auto py-[100px]">
          <div className="xl:w-[40%] w-full h-auto bg-primary">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-full h-auto"
            />
          </div>
          <div className="xl:w-[60%] w-full py-[10px] md:py-0 px-[10px] xl:px-[50px]">
            <h1 className="text-xl md:text-4xl xl:text-5xl text-accent mb-3 font-bold">
              {product.title}
            </h1>
            <div className="flex items-center text-base mb-3">
              <Star rating={product.rating} />
              <p className="ml-2">({product.reviews.length} reviews)</p>
            </div>
            <div className="flex items-center space-x-2 mb-5">
              <p className="text-gray-900 font-bold">${product.price}</p>
              {product.discountPercentage > 0 && (
                <>
                  <p className="line-through text-gray-500">
                    $
                    {(
                      product.price +
                      product.price * (product.discountPercentage / 100)
                    ).toFixed(2)}
                  </p>
                  <p className="border border-black px-2 py-[2px]">
                    -{product.discountPercentage.toFixed(1)}%
                  </p>
                </>
              )}
            </div>
            <p className="text-base mb-3">{product.description}</p>
            <div className="flex mb-2">
              <p className="font-bold mr-2">Brand:</p>
              <p>{product.brand}</p>
            </div>
            <div className="flex mb-2">
              <p className="font-bold mr-2">Category:</p>
              <p>{product.category}</p>
            </div>
            <div className="flex mb-2">
              <p className="font-bold mr-2">Tags:</p>
              <div className="flex">
                {product.tags.map((item, index) => (
                  <p key={index} className="mr-1">
                    {item}
                    {index === product.tags.length - 1 ? "." : ","}
                  </p>
                ))}
              </div>
            </div>
            <Button onClick={() => {
              
      addToCart(product);
              
              }}>Add to Cart</Button>
          </div>
        </section>
      )}
    </>
  );
}

