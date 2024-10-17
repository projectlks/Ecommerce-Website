import { useContext, useEffect, useState } from "react";
import { wishContext } from "../../context/wishContext";


interface Props {
  product: Product;
  id: string | undefined;
}

export default function LeftSide({ product, id }: Props) {
  const [index, setIndex] = useState<number>(0); // State to manage the selected image index

  const context = useContext(wishContext);
  const [isWish, setIsWish] = useState<boolean>(false);

  // Ensure the context is valid before accessing it
  if (!context) {
    throw new Error("LeftSide must be used within a WishContextProvider");
  }

  const { wish, addWish, removeWish } = context;

  useEffect(() => {
    if (!wish.length) return;

    if (wish.some((wishItem: any) => wishItem.id === Number(id))) {
      setIsWish(true);
    } else {
      setIsWish(false);
    }
  }, [wish, id]);

  const handleWishClick = () => {

    if (!isWish && product) {
      addWish(product); // Add the product to wishlist if not already wished
    }
    else{
      removeWish(product.id)
    }
    setIsWish(!isWish); // Toggle the wishlist status
  };

  return (
    <section className="xl:w-1/2 aspect-square w-full">
      <div className="w-2/3 aspect-[3/4] mx-auto relative flex items-center rounded-3xl shadow bg-background">
        <img
          src={product.images[index]}
          alt={product.title}
          className="w-full rounded-md h-auto"
        />
        <span className="absolute w-14 aspect-square md:w-20 md:h-20 rounded-full flex items-center justify-center bottom-2 right-2 md:right-4 md:bottom-4 bg-secondary_accent shadow-lg">
          <p className="text-[10px] md:text-sm text-center text-white font-bold">
            {product.warrantyInformation}
          </p>
        </span>

        <div className="absolute aspect-square md:right-4 right-2 top-2 md:top-4 z-10 text-[10px] md:text-sm flex justify-center items-center">
          <i
            className={`fa-heart cursor-pointer text-4xl ${
              isWish ? "fa-solid text-red-500" : "fa-regular text-accent"
            }`}
            onClick={handleWishClick}
          ></i>
        </div>
      </div>

      <div className="flex mt-10 px-6 py-4 shadow rounded-md justify-between">
        {product.images.map((img, idx) => (
          <span
            onClick={() => setIndex(idx)}
            key={idx}
            className="bg-background shadow hover:bg-primary duration-200 transition-all cursor-pointer rounded md:rounded-2xl block w-16 md:w-32 aspect-square"
          >
            <img
              src={img}
              className="h-full w-auto mx-auto"
              alt={`product-image-${idx}`}
            />
          </span>
        ))}
      </div>
    </section>
  );
}
