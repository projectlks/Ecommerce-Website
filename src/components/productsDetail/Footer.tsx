import { Button } from '@material-tailwind/react';
import React from 'react';
import { Product } from '../../pages/ProductDetail';

// Define the Props interface for the Footer component
interface Props {
  isShow: string; // State to determine which section to show
  setIsShow: React.Dispatch<React.SetStateAction<string>>; // Function to update isShow state
  product: Product | null; // Product object or null if not available
}

const Footer: React.FC<Props> = ({ isShow, setIsShow, product }) => {
  return (
    <footer className="flex space-x-10 mt-[30px]">
      <Button
        variant={isShow === "productDetail" ? "filled" : "outlined"}
        onClick={() => setIsShow("productDetail")}
        aria-label="Show Product Details" // Accessibility improvement
      >
        <p>PRODUCT DETAILS</p>
      </Button>
      <Button
        variant={isShow === "reviews" ? "filled" : "outlined"}
        onClick={() => setIsShow("reviews")}
        aria-label="Show Reviews" // Accessibility improvement
      >
        <p>REVIEW ({product?.reviews.length || 0})</p>
      </Button>
      <Button
        variant={isShow === "fqa" ? "filled" : "outlined"}
        onClick={() => setIsShow("fqa")}
        aria-label="Show FAQs" // Accessibility improvement
      >
        <p>FAQ</p> {/* Corrected to FAQ */}
      </Button>
    </footer>
  );
};

export default Footer;
