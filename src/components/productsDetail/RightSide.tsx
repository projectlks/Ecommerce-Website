import { Button, IconButton } from "@material-tailwind/react";
import Star from "../Star";
import { Product } from "../../pages/ProductDetail";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext";

interface RightSideProps {
  product: Product;
  amount: number;
  id: string | undefined;
}

export default function RightSide({ product, amount, id }: RightSideProps) {
  // Access cart functions using the CartContext
  const { cart, addToCart, updateCart } = useContext(CartContext);
  const [isInCart, setIsIncart] = useState<boolean>(false);

  useEffect(() => {
    if (!cart.length) return;

    if (cart.some((cartItem: any) => cartItem.id === Number(id))) {
      setIsIncart(true);
    } else {
      setIsIncart(false);
    }
  }, [cart, id]);

  return (
    <div className="xl:w-[55%] font-['lato'] w-full py-[10px] md:py-0 px-[10px] xl:px-[50px]">
      {/* Product Title */}
      <h1 className="text-lg md:text-2xl xl:text-4xl text-accent mb-3 font-extrabold">
        {product.title}
      </h1>

      {/* Product Rating and Number of Reviews */}
      <div className="flex items-center text-base mb-3">
        <Star rating={product.rating} />
        <p className="ml-2">( {product.reviews.length} customers reviews )</p>
      </div>

      {/* Product Price and Discount Information */}
      <div className="flex items-center space-x-2 mb-5">
        <p className="text-gray-900 font-bold">${product.price}</p>
        {product.discountPercentage && (
          <>
            <p className="line-through text-gray-500">
              $
              {(
                product.price +
                (product.price * product.discountPercentage) / 100
              ).toFixed(2)}
            </p>
            <p className="border border-black px-2 py-[2px]">
              -{product.discountPercentage.toFixed(1)}%
            </p>
          </>
        )}
      </div>

      {/* Product Description */}
      <p className="text-base font-semibold text-balance mb-6">
        {product.description}
      </p>

      {/* Additional Product Information: Brand, Category, Tags, Stock, and Availability Status */}
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
          {product.tags.map((item, idx) => (
            <p key={idx} className="mr-1">
              {item}
              {idx === product.tags.length - 1 ? "." : ","}
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

      {/* Add to Cart Section with Quantity Controls */}
      <div className="flex items-center mt-10 space-x-10">
        {/* Show "Add to Cart" if the product is not in the cart, else show "Already in Cart" */}

        {!isInCart ? (
          <Button
            onClick={() => {
              addToCart(product);
              setIsIncart(true);
            }}
          >
            Add to Cart
          </Button>
        ) : (
          <Button disabled>Already in Cart</Button>
        )}

        {/* Quantity selector with +/- buttons */}
        <span className="flex items-center">
          <IconButton variant="text" onClick={() => updateCart(product.id, -1)}>
            <i className="fa-solid fa-minus text-xl"></i>
          </IconButton>

          {/* Display current quantity in cart */}
          <p className="inline-block mx-4 text-xl bg-gray-500 w-16 rounded text-center py-1">
            {amount}
          </p>

          {/* Button to increase the quantity */}
          <IconButton variant="text" onClick={() => updateCart(product.id, 1)}>
            <i className="fa-solid fa-plus text-xl"></i>
          </IconButton>
        </span>
      </div>
    </div>
  );
}
