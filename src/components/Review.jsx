import React from 'react'
import pf1 from "../assets/img/pf1.jpg";
import Star from './Star';

export default function Review({reviews}) {
  return (
    <>
      {reviews.map((d, i) => (
        <section
          key={i}
          className=" w-full shadow-md shadow-accent hover:py-10 .group .group-hover:!scale-75 .hover:scale-125  transition-all bg-gray-200  rounded-lg p-6 mb-4"
        >
          <div className=" flex  justify-between ">
            <div className="flex space-x-3">
              <img
                src={pf1}
                className="w-10 rounded-full h-10 "
                alt={d.reviewerName}
              />
              <span>
                <h4 className="text-md font-semibold text-accent">
                  {d.reviewerName}
                </h4>
                <p className="text-xs text-gray-500 ">{d.reviewerEmail}</p>
              </span>
            </div>
            <span>
              {" "}
              <Star rating={d.rating} />
            </span>
          </div>
          <p className="text-gray-700 mt-2">{d.comment}</p>
        </section>
      ))}
    </>
  );
}
