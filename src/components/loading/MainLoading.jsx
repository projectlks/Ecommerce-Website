import React from "react";

export default function MainLoading() {
  return (
    <>
      {Array.from({ length: 10 }, (_, index) => (
        <div key={index} className="w-full aspect-[2/3]   relative aspect-h-3 ">
          <span className="w-[50px] absolute bg-gray-500  z-10  left-2 top-2 md:left-4 md:top-4 h-7 inline-block bg-slate-700 rounded-sm animate-pulse"></span>

          <div className="w-full aspect-square bg-background flex justify-center items-center relative">
           
          </div>
          <div className="w-full  border-t-2 h-auto xl:px-5 px-2 py-3">
            <span className="w-1/2 h-[10px] rounded-full bg-gray-500 bg- block bg-slate-700 mb-1 animate-pulse"></span>
            <span className="w-[80%] h-[12px] md:h-[16px] bg-gray-500   block  bg-slate-700 md:mb-2 mb-1 animate-pulse"></span>{" "}
            <span className="w-[50%] h-[10px] md:h-[12px] bg-gray-500   block  bg-slate-700 mb-2 animate-pulse"></span>
          </div>
        </div>
      ))}
    </>
  );
}
