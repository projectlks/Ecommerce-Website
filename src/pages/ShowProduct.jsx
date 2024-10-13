import shoe from "../assets/img/shoe.png";
import { Button } from "@material-tailwind/react";


export default function 
() {
  return (
    <div className="flex items-center mx-4 md:mx-8 xl:mx-16 h-screen flex-col-reverse xl:flex-row justify-around font-semibold box-content font-['lato'] my-8 ">
    {/* Left */}

    <div className="xl:w-1/2 w-full md:p-0 xl:px-12">
      <h1 className=" md:text-[60px] xl:text-[145px] leading-tight ">
        Jordan  Spizike Low
      </h1>

      <p className="text-base my-5 text-balance">
        Nike's 1st lifestyle Air Max returns with a vibrant
        <br />
        color gradient that's sure to turn heads.
      </p>

      <h3 className=" text-[25px] my-5 font-extrabold "> $ 17,520</h3>

      <Button> Buy Now</Button>
    </div>

    {/* right */}
    <div className=" xl:w-1/2 w-full aspect-square md:aspect-auto md:h-[400px] xl:h-[86%] relative bg-blue-gray-500 flex justify-center items-center  "  style={{
      background: "linear-gradient(135deg, #ffe259 0%, #ffa751 100%)", 
    }}>
      <img
        src={shoe}
        alt=""
        className=" w-[80%] absolute transition-all duration-200 xl:-left-52 left-3 top-28 xl:top-1/2 xl:-translate-y-1/2  transform -rotate-[30deg] "
      />
    </div>
  </div>
  )
}
