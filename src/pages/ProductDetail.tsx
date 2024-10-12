import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import useFetch from "../hooks/useFetch";
import Lottie from "lottie-react";
import loadingAnimation from "../components/loading/loading.json";
import errorAnimation from "../components/loading/error.json";
import { CartContext } from "../context/CartContext";
import Cart from "../components/cartDetail/Cart";
import Review from "../components/productsDetail/Review";
import FQA from "../components/productsDetail/FQA";
import BackButtom from "../components/BackButtom";
import Footer from "../components/productsDetail/Footer";
import LeftSide from "../components/productsDetail/LeftSide";
import RightSide from "../components/productsDetail/RightSide"; // Import the new RightSide component

export interface Product {
  id: number;
  title: string;
  images: string[];
  warrantyInformation: string;
  rating: number;
  reviews: ReviewType[];
  price: number;
  discountPercentage?: number;
  description: string;
  brand: string;
  category: string;
  tags: string[];
  stock: number;
  availabilityStatus: string;
}

interface ReviewType {
  id: number;
  content: string;
}

export default function ProductDetail() {
  const [product, setProduct] = useState<Product | null>(null);
  const [amount, setAmount] = useState<number>(0);
  const [isShow, setIsShow] = useState<string>("productDetail");

  const { id } = useParams();
  const { data, loading, error } = useFetch(
    `https://dummyjson.com/products/${id}`
  );
  const { cart } = useContext(CartContext);

  useEffect(() => {
    if (data) {
      setProduct(data);
    }
  }, [data]);

  useEffect(() => {
    const cartItem = cart.find(
      (item: any) => item.id.toString() === id?.toString()
    );
    const amount = cartItem ? cartItem.amount : 0;
    setAmount(amount);
  }, [cart, id]);

  return (
    <>
      {error && (
        <div className="flex flex-col items-center justify-center h-screen">
          <Lottie animationData={errorAnimation} loop={true} />
         
        </div>
      )}
      {loading ? (
        <div className="flex flex-col items-center justify-center h-screen">
          <Lottie animationData={loadingAnimation} loop={true} />
          <h1 className="text-lg font-semibold mt-4">
            Loading product details...
          </h1>
        </div>
      ) : (
        <section>
          <BackButtom />
          <Cart />

          {product && (
            <section className="w-[90%] py-[100px] mx-auto">
              {isShow === "productDetail" && (
                <main className="flex flex-col xl:flex-row w-full transition-all select-none mx-auto">
                  <LeftSide product={product} />
                  <RightSide product={product} amount={amount} id={id} />
                </main>
              )}

              {isShow === "reviews" && <Review reviews={product.reviews} />}
              {isShow === "fqa" && <FQA />}

              <Footer isShow={isShow} setIsShow={setIsShow} product={product} />
            </section>
          )}
        </section>
      )}
    </>
  );
}
