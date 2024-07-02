import React from "react";

export default function MainLoading() {
  return (
    <>
      {Array.from({ length: 10 }, (_, index) => (
        <div
          key={index}
          className="w-full aspect-[2/3] border shadow relative aspect-h-3 bg-background "
        >
          <span className="w-[50px] absolute  left-4 top-4 h-7 inline-block bg-slate-700 rounded-sm animate-pulse"></span>
     
          <div className="w-full aspect-square flex justify-center items-center relative">
            <span className="w-[60%] aspect-square block bg-slate-700 animate-pulse"></span>
            <span className="w-[100px] absolute  right-4 bottom-1 h-10 inline-block bg-slate-700 rounded-sm animate-pulse"></span>
          </div>
          <div className="w-full bg-primary border-t-2 h-auto px-6 py-3">
            <span className="w-[100px] h-4 block bg-slate-700 mb-2 animate-pulse"></span>
            <span className="w-[80%] h-5 block bg-slate-700 mb-2 animate-pulse"></span>
            <span className="w-[100%] h-10 block  mb-2 bg-slate-700 animate-pulse"></span>
            <span className="w-[110px] h-[34px] mr-2 inline-block rounded-md bg-slate-700 animate-pulse"></span>{" "}
            <span className="w-[50px] h-[34px] inline-block rounded-md bg-slate-700 animate-pulse"></span>
          </div>
        </div>
      ))}
    </>
  );
}
