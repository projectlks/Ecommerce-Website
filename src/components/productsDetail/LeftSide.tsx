import React, { useState } from 'react';

// Define the type for the Product prop
interface Product {
  id: number;
  title: string;
  images: string[];
  warrantyInformation: string;
}

interface Props {
  product: Product;
}

export default function LeftSide({ product }: Props) {
  const [index, setIndex] = useState<number>(0); // State to manage the selected image index

  return (
    <section className="xl:w-[45%] items-center aspect-square space-x-10 w-full flex">
      <div className="h-[90%] aspect-square relative rounded-md bg-accent">
        <img
          src={product.images[index]}
          alt={product.title}
          className="w-full rounded-md h-auto"
        />
        <span className="absolute w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center bottom-2 right-2 md:right-4 md:bottom-4 bg-secondary_accent shadow-lg">
          <p className="text-xs md:text-sm text-center text-white font-bold">
            {product.warrantyInformation}
          </p>
        </span>
      </div>

      <div className="flex h-[90%] py-4 flex-col justify-between">
        {product.images.map((img, idx) => (
          <span
            onClick={() => setIndex(idx)}
            key={idx}
            className="bg-primary hover:bg-accent transition-all cursor-pointer rounded block w-20 h-20"
          >
            <img src={img} className="h-full w-auto mx-auto" alt={`product-image-${idx}`} />
          </span>
        ))}
      </div>
    </section>
  );
}
