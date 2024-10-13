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
    <section className="xl:w-1/2  aspect-square  w-full  ">
      <div className="w-2/3 aspect-[3/4] mx-auto relative flex items-center rounded-3xl shadow bg-background">
        <img
          src={product.images[index]}
          alt={product.title}
          className="w-full rounded-md  h-auto"
        />
        <span className="absolute w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center bottom-2 right-2 md:right-4 md:bottom-4 bg-secondary_accent shadow-lg">
          <p className="text-xs md:text-sm text-center text-white font-bold">
            {product.warrantyInformation}
          </p>
        </span>
      </div>

      <div className="flex  mt-10 p-2 md:p-4 justify-evenly ">
        {product.images.map((img, idx) => (
          <span
            onClick={() => setIndex(idx)}
            key={idx}
            className="bg-background shadow hover:bg-primary duration-200 transition-all cursor-pointer rounded-2xl block w-24 md:w-32 aspect-square"
          >
            <img src={img} className="h-full w-auto mx-auto" alt={`product-image-${idx}`} />
          </span>
        ))}
      </div>
    </section>
  );
}
