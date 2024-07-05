import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import useFetch from "../hooks/useFetch";
import Star from "../components/Star";
import { Button, IconButton } from "@material-tailwind/react";
import { CartContext } from "../context/CartContext";
import Cart from "../components/Cart";

import Review from "../components/Review";
import FQA from "../components/FQA";

export default function ProductDetail() {
  const [product, setProduct] = useState(null);
   const [amount, setAmount] = useState(0);
const [isShow, setIsShow] = useState('productDetail')

   
  const { id } = useParams();
  const { data } = useFetch(`https://dummyjson.com/products/${id}`);
    const {cart, addToCart, updateCart } = useContext(CartContext);

 
  useEffect(() => {
    if (data) {
      setProduct(data);
    }

  }, [data]);

 useEffect(() => {
  const cartItem = cart.find((item) => item.id.toString() === id.toString());
   const amount = cartItem ? cartItem.amount : 0;
   setAmount(amount);
 }, [cart, id]);

 

  return (
    <>
      <Cart />
      {product && (
        <section className=" w-[90%]  py-[100px] mx-auto">
          {isShow === "productDetail" && (
            <main className="flex flex-col xl:flex-row w-full transition-all select-none mx-auto ">
              <section className="xl:w-[45%]   space-x-10 w-full flex">
                <div className=" h-full aspect-square relative  rounded-md bg-accent">
                  <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="w-full rounded-md h-auto"
                  />

                  <span className="absolute w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center bottom-2 right-2 md:right-4 md:bottom-4 bg-secondary_accent shadow-lg">
                    <p className="text-xs md:text-sm text-center text-white font-bold">
                      {product.warrantyInformation}
                    </p>
                  </span>
                </div>

                <div className="flex py-4 flex-col justify-between ">
                  {product.images.map((img, index) => (
                    <span
                      key={index}
                      className="bg-primary rounded block w-20 h-20"
                    >
                      <img src={img} className="h-full w-auto mx-auto"></img>
                    </span>
                  ))}
                </div>
              </section>

              <div className="xl:w-[55%] w-full py-[10px] md:py-0 px-[10px] xl:px-[50px]">
                <h1 className="text-xl md:text-2xl xl:text-3xl text-accent mb-3 font-bold">
                  {product.title}
                </h1>
                <div className="flex items-center text-base mb-3">
                  <Star rating={product.rating} />
                  <p className="ml-2">
                    ( {product.reviews.length} customers reviews )
                  </p>
                </div>
                <div className="flex items-center space-x-2 mb-5">
                  <p className="text-gray-900 font-bold">${product.price}</p>
                  {product.discountPercentage > 0 && (
                    <>
                      <p className="line-through text-gray-500">
                        $
                        {(
                          product.price *
                          (1 + product.discountPercentage / 100)
                        ).toFixed(2)}
                      </p>
                      <p className="border border-black px-2 py-[2px]">
                        -{product.discountPercentage.toFixed(1)}%
                      </p>
                    </>
                  )}
                </div>
                <p className="text-base text-balance mb-3">
                  {product.description}
                </p>
                <div className="flex mb-2">
                  <p className="font-bold mr-2">Brand :</p>
                  <p>{product.brand}</p>
                </div>
                <div className="flex mb-2">
                  <p className="font-bold mr-2">Category :</p>
                  <p>{product.category}</p>
                </div>
                <div className="flex mb-2">
                  <p className="font-bold mr-2">Tags :</p>
                  <div className="flex">
                    {product.tags.map((item, index) => (
                      <p key={index} className="mr-1">
                        {item}
                        {index === product.tags.length - 1 ? "." : ","}
                      </p>
                    ))}
                  </div>
                </div>
                <div className="flex mb-2">
                  <p className="font-bold mr-2">Stock :</p>
                  <p>{product.stock} remaining</p>
                </div>
                <div className="flex mb-2">
                  <p className="font-bold mr-2">Status :</p>
                  <p>{product.availabilityStatus}</p>
                </div>
                <div className="flex items-center space-x-10">
                  <Button onClick={() => addToCart(product)}>
                    Add to Cart
                  </Button>
                  <span className="flex items-center">
                    <IconButton
                      variant="text"
                      onClick={() => updateCart(product.id, -1)}
                    >
                      <i className="fa-solid fa-minus text-xl"></i>
                    </IconButton>
                    <p className="inline-block mx-4 text-xl bg-gray-500 w-16 rounded text-center py-1">
                      {amount}
                    </p>
                    <IconButton
                      variant="text"
                      onClick={() => updateCart(product.id, 1)}
                    >
                      <i className="fa-solid fa-plus text-xl"></i>
                    </IconButton>
                  </span>
                </div>
              </div>
            </main>
          )}

          {isShow === "reviews" && <Review reviews={product.reviews} />}

          {/* FQA */}
          {isShow === "fqa" && <FQA />}

          <footer className="flex space-x-10 mt-[30px]">
            <Button
              variant={isShow === "productDetail" ? "filled" : "outlined"}
              onClick={() => setIsShow("productDetail")}
            >
              <p>PRODUCT DETAILS</p>
            </Button>

            {/* <Button variant={isShow === "add" ? "" : "outlined"}>
              <p onClick={() => setIsShow("add")}>ADDITIONAL INFORMATION</p>
            </Button> */}

            <Button
              variant={isShow === "reviews" ? "filled" : "outlined"}
              onClick={() => setIsShow("reviews")}
            >
              <p>REVIEW ( {product.reviews.length} )</p>
            </Button>

            <Button
              variant={isShow === "fqa" ? "filled" : "outlined"}
              onClick={() => setIsShow("fqa")}
            >
              <p>FQA</p>
            </Button>
          </footer>
        </section>
      )}
    </>
  );
}

//  variant={isActive ? "text" : "outlined"}