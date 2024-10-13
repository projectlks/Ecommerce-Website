import React, { useContext } from "react";
import { FaStar, FaLaptop, FaSpa, FaMobileAlt, FaGem, FaArrowRight } from "react-icons/fa";
import { MainUrlContext } from "../context/MainUrlContext";
import { Button } from "@material-tailwind/react";

const Li = ({ text, children, isActive, className, ...props }) => {
  return (
    <Button
      variant={isActive ? "text" : "outlined"}
      className={`select-none items-center transition-all hover:bg-accent hover:text-gray-100 cursor-pointer px-2 py-1 md:px-4 md:py-2 rounded 
        ${isActive ? "bg-accent text-gray-100" : "text-gray-900 bg-inherit"} ${className}`}
      {...props}
    >
      <p className="mr-2 hidden md:inline-block">{children}</p>
      <p className="text-[10px] md:text-base">{text}</p>
    </Button>
  );
};

export default function Menu() {
  const { changeLink, type } = useContext(MainUrlContext);

  const categories = [
    { text: "Beauty", icon: <FaStar />, type: "beauty" },
    { text: "Laptops", icon: <FaLaptop />, type: "laptops" },
    { text: "Skin-care", icon: <FaSpa />, type: "skin-care" },
    { text: "Smartphones", icon: <FaMobileAlt />, type: "smartphones" },
    { text: "tops", icon: <FaGem />, type: "tops" }
  ];

  return (
    <div className="w-full h-auto my-[50px] relative flex justify-center">
      <span className="inline-block">
        <ul className="flex space-x-2">
          {categories.map((item, index) => (
            <Li
              key={index}
              text={item.text}
              isActive={type === item.type}
              onClick={() => changeLink(item.type)}
              className={`${index === categories.length - 1 ? " md:flex hidden" : "flex"}`}
            >
              {item.icon}
            </Li>
          ))}
        </ul>
      </span>

      {/* "See More..." Button with Right Arrow */}
      <span className="absolute right-0 top-0 flex items-center space-x-1  cursor-pointer">
        <span className=" text-2xl font-bold ">See More </span>
        <FaArrowRight />
      </span>
    </div>
  );
}
