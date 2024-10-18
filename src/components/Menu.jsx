import React, { useContext } from "react";
import {
  FaStar,
  FaLaptop,
  FaSpa,
  FaGem,
  FaArrowRight,
  FaClock,
} from "react-icons/fa";
import { MainUrlContext } from "../context/MainUrlContext";
import { Button } from "@material-tailwind/react";
import { useNavigate } from "react-router";

const Li = ({ text, children, isActive, className, ...props }) => {
  return (
    <Button
      variant={isActive ? "text" : "outlined"}
      className={`select-none items-center transition-all hover:bg-accent hover:text-gray-100 cursor-pointer px-2 py-1 md:px-4 md:py-2 rounded 
        ${
          isActive ? "bg-accent text-gray-100" : "text-gray-900 bg-inherit"
        } ${className}`}
      {...props}
    >
      <p className="mr-2 hidden md:inline-block">{children}</p>
      <p className="text-[10px] md:text-base">{text}</p>
    </Button>
  );
};

export default function Menu() {
  const { changeLink, type } = useContext(MainUrlContext);
  const navigate = useNavigate();

  const categories = [
    { text: "Beauty", icon: <FaStar />, type: "beauty" },
    { text: "Laptops", icon: <FaLaptop />, type: "laptops" },
    { text: "Skin-care", icon: <FaSpa />, type: "skin-care" },
    { text: "Watch", icon: <FaClock />, type: "mens-watches" },
    { text: "tops", icon: <FaGem />, type: "tops" },
  ];

  const changePage = () => {
    navigate("/allProducts");
  };

  return (
    <div className="w-full h-auto my-[20px] sm:my-[50px] relative flex justify-center  items-center">

      {/* Divider or Empty Space */}


      <span className="inline-block w-fit  sm:w-auto">
        <ul className="flex flex-wrap justify-center space-x-2 sm:space-x-2">
          {categories.slice(0, 3).map((item, index) => ( // Show only 3 items on mobile
            <Li
              key={index}
              text={item.text}
              isActive={type === item.type}
              onClick={() => changeLink(item.type)}
              className={`flex`}
            >
              {item.icon}
            </Li>
          ))}

          {categories.slice(3).map((item, index) => (
            <Li
              key={index + 3}
              text={item.text}
              isActive={type === item.type}
              onClick={() => changeLink(item.type)}
              className={`hidden md:flex`} // Hide these items on mobile, show on sm+
            >
              {item.icon}
            </Li>
          ))}
        </ul>
      </span>

      {/* "See More..." Button with Right Arrow */}
      <span
        className=" flex items-center w-fit absolute right-0 space-x-1  cursor-pointer "
        onClick={changePage}
      >
        <span className="text-xs md:text-xl xl:text-2xl whitespace-nowrap  font-bold">See More</span>
        <FaArrowRight className="text-xs md:text-xl xl:text-2xl" />
      </span>
    </div>
  );
}
