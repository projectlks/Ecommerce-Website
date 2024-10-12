import React from "react";
import { Link } from "react-router-dom";

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

        <div className="md:w-[500px] w-[90%] mx-auto bg-white px-2">
          {products.map((product) => (
        <Link to={`productDetail/${product.id}`} key={product.id}>

            <div
              className="product-item py-2 hover:bg-accent text-gray-900 hover:text-background transition-all duration-300 rounded-md px-4 flex space-x-4 border-b"
            >
              <img
                src={product.thumbnail}
                alt={product.title}
                className="w-12 h-12 bg-background"
              />

              <span>
                <h2 className="md:text-lg text-base font-semibold">{product.title}</h2>
              </span>
            </div>
        </Link>

          ))}
        </div>

      )}
    </section>
  );
}
