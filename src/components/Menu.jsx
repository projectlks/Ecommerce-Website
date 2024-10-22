import { Button } from "@material-tailwind/react";
import { useContext } from "react";
import { FaClock, FaGem, FaLaptop, FaSpa, FaStar } from "react-icons/fa";
import { useNavigate } from "react-router";
import { MainUrlContext } from "../context/MainUrlContext";

const Li = ({ text, children, isActive, className, ...props }) => {
  return (
    <Button
      variant={isActive ? "text" : "outlined"}
      className={`select-none items-center rounded-lg transition-all hover:bg-accent hover:text-gray-100 cursor-pointer px-2 py-1 md:px-4 md:py-2  
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
    { text: "Watch", icon: <FaClock />, type: "mens-watches" },
    { text: "Beauty", icon: <FaStar />, type: "beauty" },
    { text: "Laptops", icon: <FaLaptop />, type: "laptops" },
    { text: "Skin-care", icon: <FaSpa />, type: "skin-care" },
    { text: "tops", icon: <FaGem />, type: "tops" },
  ];

  const changePage = () => {
    navigate("/allProducts");
  };

  return (
    <section className="my-[20px] sm:my-[50px] relative">
      <div className="flex xl:mb-5 mb-3 justify-between">
        <span className="hidden md:flex w-[86px] "></span>
        <h1 className="text-xl xl:text-4xl md:border-b-2 border-accent md:pb-2 md:px-3 font-bold ">
          Most Popular{" "}
        </h1>

        <span
          className=" flex items-center w-fit  right-0 space-x-1  cursor-pointer "
          onClick={changePage}
        >
          <h1 className="text-xs md:text-xl xl:text-2xl whitespace-nowrap text-accent font-bold">
            See More
          </h1>
        </span>
      </div>

      <div className="w-full h-auto  flex justify-center  items-center">
        {/* Divider or Empty Space */}

        <span className="inline-block w-fit  sm:w-auto">
          <ul className="flex flex-wrap justify-center xl:space-x-5 md:space-x-2 space-x-2">
            {categories.map((item, index) => (
              <Li
                key={index}
                text={item.text}
                isActive={type === item.type}
                onClick={() => changeLink(item.type)}
                className={`  ${
                  index === categories.length - 1 ? "hidden md:flex" : "flex"
                } `}
              >
                {item.icon}
              </Li>
            ))}
          </ul>
        </span>
      </div>
    </section>
  );
}
