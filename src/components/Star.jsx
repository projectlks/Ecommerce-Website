import React from 'react'

export default function Star({ rating }) {
  return (
    <>
      {Array.from({ length: Math.floor(rating) }, (_, index) => (
        <i key={index} className="fa-solid text-yellow-500 fa-star"></i>
      ))}

      {rating.toString() !== "5" &&
         Array.from({ length: 1 }, (_, index) => (
          <i
            key={index}
            className={`fa-regular fa-star ${
              rating - Math.floor(rating) >= 0.5
                ? "fa-star-half-stroke text-yellow-500"
                : "fa-star "
            }`}
          ></i>
        ))}
      {rating.toString() !== "5" &&
        Array.from({ length: 4 - Math.floor(rating) }, (_, index) => (
          <i key={index} className="fa-regular fa-star"></i>
        ))}
    </>
  );
}
