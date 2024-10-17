import Star from "./Star";
import { Link } from "react-router-dom";

interface Props {
  product: Product;
}

export default function Card({ product }: Props) {
  return (
    <Link to={`/productDetail/${product.id}`} key={product.id}>
      <article className="relative product-card cursor-pointer w-full aspect-square select-none xl:hover:scale-110 transition-all">
        {/* Display discount percentage as a badge */}
        <div className="absolute md:left-4 left-2 top-2 md:top-4 px-1 md:px-2 z-10 text-[10px] md:text-sm py-[2px] md:py-1 
         flex font-bold text-gray-100 bg-red-500 rounded-sm justify-center items-center">
          - {product.discountPercentage.toFixed(1)}%{" "}
          {/* Display discount as a percentage */}
        </div>

      

        {/* Product Image */}
        <div className="w-full aspect-square flex items-center rounded-xl hover:bg-primary duration-200 bg-background h-auto relative">
          <img
            src={product.thumbnail} // Thumbnail of the product
            alt={product.title} // Product title for the alt attribute
            className="float-bottom h-[80%] mx-auto w-auto"
          />
        </div>

        {/* Product details section */}
        <div className="w-full h-auto py-2 xl:px-5 px-2">
          {/* Display product rating and number of reviews */}
          <div className="flex items-center md:space-x-1 space-x-[2px] text-[10px] md:text-base">
            <Star rating={product.rating} />{" "}
            {/* Star component to show product rating */}
            <p>( {product.reviews.length} reviews )</p>{" "}
            {/* Number of reviews */}
          </div>

          {/* Product title */}
          <h1 className="w-full overflow-hidden text-xs md:text-base xl:text-lg font-bold text-accent truncate">
            {product.title}
          </h1>

          {/* Display price and discounted price */}
          <div className="flex text-[10px] md:text-sm font-bold space-x-1">
            <p>${product.price} / </p> {/* Actual price */}
            <p className="line-through text-red-500">
              $
              {(
                product.price + // Calculated original price before discount
                product.price * (product.discountPercentage / 100)
              ).toFixed(2)}
            </p>
          </div>
        </div>
      </article>
    </Link>
  );
}
