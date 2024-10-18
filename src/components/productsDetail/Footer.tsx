import { Button } from "@material-tailwind/react";
import React from "react";


// Define the Props interface for the Footer component
interface Props {
  isShow: string; // State to determine which section to show
  setIsShow: React.Dispatch<React.SetStateAction<string>>; // Function to update isShow state
  product: Product | null; // Product object or null if not available
}

const Footer: React.FC<Props> = ({ isShow, setIsShow, product }) => {
  return (
    <footer className="flex justify-between space-x-3 md:space-x-5 xl:space-x-10 mt-6 md:mt-8 xl:mt-10">
      {/* Product Details Button */}
      <Button
        variant={isShow === "productDetail" ? "filled" : "outlined"}
        onClick={() => setIsShow("productDetail")}
        aria-label="Show Product Details"
        className={`${
          isShow === "productDetail"
            ? "bg-accent text-background text-[10px] md:text-sm xl:text-base "
            : "border-accent px-2 md:px-4 py-2 md:py-3 "
        }`}
      >
        <p className="text-xs md:text-sm xl:text-base">PRODUCT DETAILS</p>
      </Button>

      {/* Reviews Button */}
      <Button
        variant={isShow === "reviews" ? "filled" : "outlined"}
        onClick={() => setIsShow("reviews")}
        aria-label="Show Reviews"
        className={`${
          isShow === "reviews"
            ? "bg-accent text-background text-[10px] md:text-sm xl:text-base "
            : "border-accent px-2 md:px-4 py-2 md:py-3 "
        }`}
      >
        <p className="text-xs md:text-sm xl:text-base">
          REVIEW ({product?.reviews.length || 0})
        </p>
      </Button>

      {/* FAQ Button */}
      <Button
        variant={isShow === "fqa" ? "filled" : "outlined"}
        onClick={() => setIsShow("fqa")}
        aria-label="Show FAQs"
        className={`${
          isShow === "fqa"
            ? "bg-accent text-background text-[10px] md:text-sm xl:text-base "
            : "border-accent px-2 md:px-4 py-2 md:py-3 "
        }`}
      >
        <p className="text-xs md:text-sm xl:text-base">FAQ</p>
      </Button>
    </footer>
  );
};

export default Footer;
