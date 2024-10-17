import Lottie from "lottie-react";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import BackButtom from "../components/BackButtom";
import Cart from "../components/cartDetail/Cart";
import loadingAnimation from "../components/loading/loading.json";
import errorAnimation from "../components/loading/productError.json";
import Footer from "../components/productsDetail/Footer";
import FQA from "../components/productsDetail/FQA";
import LeftSide from "../components/productsDetail/LeftSide";
import Review from "../components/productsDetail/Review";
import RightSide from "../components/productsDetail/RightSide";
import { CartContext } from "../context/CartContext";
import useFetch from "../hooks/useFetch";


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
  
  console.log(product);
  

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
        <section className="">
          <BackButtom />
          <Cart />

          {product && (
            <section className="xl:w-[80%] w-[90%] py-[100px] mx-auto">
              {isShow === "productDetail" && (
                <main className="flex flex-col xl:flex-row w-full transition-all select-none mx-auto">
                  <LeftSide product={product} id={id}/>
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
