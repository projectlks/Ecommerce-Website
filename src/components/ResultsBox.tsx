import React from "react";

interface Product {
  id: number;
  title: string;
  thumbnail: string;
}

interface Props {
  products: Product[];
}

export default function ResultsBox({ products }: Props) {
  return (
    <section
      className={` ${
        products.length > 0 ? "flex" : "hidden"
      } w-full h-screen left-0 fixed  backdrop-brightness-50 items-start overflow-auto justify-center top-full`}
    >
      {products.length > 0 && (
        <div className="w-[500px] mx-auto bg-red-800 p-4">
          {products.map((product) => (
            <div key={product.id} className="product-item py-2 border-b">
              <h2 className="text-lg font-semibold">{product.title}</h2>
              <img
                src={product.thumbnail}
                alt={product.title}
                className="w-12 h-12"
              />
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
