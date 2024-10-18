import { useNavigate } from "react-router";
import left from "../assets/img/left.png";
import right from "../assets/img/right.png";
import clock from "../assets/img/clock.png";
import video from "../assets/video.mp4";
import bg from '../assets/img/shoeBg.jpg'

import { Button } from "@material-tailwind/react";

export default function ProductShowcase() {
  const navigate = useNavigate();
  return (
    <section className="w-full bg-[#f0f8ff] min-h-screen h-auto">
      <section className="flex items-center mx-4 md:mx-8 xl:mx-16 min-h-screen h-auto flex-col-reverse xl:flex-row justify-around font-semibold box-content font-['lato']">
        {/* Left */}
        <div className="xl:w-1/2 w-full md:p-0 xl:px-12">
          <h1 className="md:text-[60px] xl:text-[145px] leading-tight text-center md:text-left">
            Rolex Cellini Moonphase
          </h1>

          <p className="text-base my-5 text-balance text-center md:text-left">
            "The Rolex Cellini Moonphase is a masterpiece of horology, featuring
            a moon phase complication and exquisite design. It reflects Rolex's
            commitment to precision and elegance."
          </p>

          <h3 className="text-[25px] my-5 font-extrabold text-center md:text-left">
            $ 12,999
          </h3>

          <div className="flex justify-center md:justify-start">
            <Button
              onClick={() => {
                navigate("/productDetail/96");
              }}
            >
              Buy Now
            </Button>
          </div>
        </div>

        {/* Right */}
        <div
          className="xl:w-1/2 w-full aspect-square md:aspect-auto md:h-[400px] xl:h-[86%] relative bg-blue-gray-500 flex justify-center items-center"
          style={{
            background: "linear-gradient(135deg, #ffe259 0%, #ffa751 100%)",
          }}
        >
          <img
            src={left}
            alt=""
            className="w-[80%] transition-all duration-200 xl:-left-52 left-3 top-28 xl:top-1/2 transform -rotate-[30deg]"
          />
        </div>
      </section>

      {/* Second Section */}
      <section className="w-[90%] mx-auto min-h-screen h-auto space-y-10 space-x-0 md:space-x-20 flex flex-col md:flex-row justify-center">
        <div className="w-full md:w-1/2 xl:w-[370px]">
          <h1 className="xl:text-[58px] md:text-[30px] text-accent text-center md:text-left">
            WHERE STYLE MEETS PRECISION
          </h1>
          <span className="w-full h-[200px] flex justify-center items-center bg-primary">
            <img src={left} alt="clock" className="h-full w-auto" />
          </span>

          <p className="text-[24px] my-10 text-center md:text-left">
            A SYMBOL OF TIMELESS ELEGANCE, MASTERFULLY CRAFTED TO DEFINE YOUR
            STYLE.
          </p>

          <span className="w-full h-[200px] flex justify-center items-center bg-primary">
            <img src={right} alt="clock" className="h-full w-auto" />
          </span>

          <h1 className="text-center">Rolex Cellini Moonphase</h1>
        </div>

        <div className="xl:w-[500px] w-full md:w-1/2 flex flex-col items-center justify-around h-fit">
          <span className="w-full flex flex-col md:flex-row justify-between">
            <h1 className="w-full md:w-[200px] block text-[24px] text-center md:text-left">
              Discover Timeless Precision
            </h1>
            <p className="w-full md:w-[270px] text-center md:text-left">
              Enter the world of luxury where craftsmanship meets accuracy. The
              Rolex Cellini Moonphase is the epitome of class, offering a
              perfect balance between sophistication and functionality.
            </p>
          </span>

          <span className="w-full aspect-[3/4] relative overflow-hidden my-24 flex justify-center items-center h-auto bg-primary">
            <img
              src={clock}
              alt="Rolex Cellini Moonphase"
              className="w-auto aspect-square absolute h-full object-cover scale-125"
            />
          </span>
        </div>
      </section>

      {/* Video Section */}
      <section className="w-full h-auto flex justify-center items-center py-12">
        <video
          src={video}
          autoPlay      
               loop
          muted
          playsInline
          className="w-full max-w-[800px] h-auto"
        ></video>
      </section>


      <section
  className="w-full h-screen bg-cover bg-center flex flex-col justify-center items-center text-white px-4 md:px-8 text-center"
  style={{ backgroundImage: `url(${bg})` }}
>
  <h1 className="text-[28px] md:text-[48px] xl:text-[64px] font-bold mb-4 ">
    Discover Your Perfect Products!
  </h1>

  <p className="text-base md:text-lg xl:text-2xl mb-6 font-medium max-w-[600px] ">
    Explore our wide range of products, carefully curated to meet your unique
    preferences. Take the first step towards elevating your style and lifestyle.
  </p>

  <span
      className="bg-accent text-background px-8 py-3 rounded-full text-sm md:text-lg font-semibold cursor-pointer transition duration-300"
      onClick={() => {
        window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to the top
        navigate('/allProducts'); // Then navigate
      }}
    >
      Shop Now
    </span>
</section>

    </section>
  );
}
