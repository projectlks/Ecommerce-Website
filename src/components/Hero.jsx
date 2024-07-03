
import { Carousel } from "@material-tailwind/react";
import img1 from "../assets/img/1.png";
import img2 from "../assets/img/2.png";
import img3 from "../assets/img/3.png";

export default function CarouselCustomNavigation() {
  return (
    <Carousel
      className="rounded"
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-2 md:bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-full transition-all content-[''] ${
                activeIndex === i ? "md:w-8 w-2 bg-white" : "md:w-4 w-1 bg-white/50"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      <div className="w-full overflow-y-hidden aspect-[4/2] md:aspect-[3/1] relative flex bg-red-700">
        <div className="md:w-1/2 w-full  top-1/2 transform md:-translate-y-0 -translate-y-1/2 absolute md:static md:h-full flex items-center justify-center text-white">
          <div className="text-center">
            <h1 className="text-xl md:text-4xl font-bold mb-1 md:mb-4">
              Welcome to Shopping Mall
            </h1>
            <p className="text-xs md:text-lg">
              Your one-stop destination for all your shopping needs.
            </p>
          </div>
        </div>
        <div className="md:w-1/2 w-full h-full">
          <img src={img1} alt="image1" className="h-full w-auto mx-auto" />
        </div>
      </div>

      <div className="w-full aspect-[3/1] h-auto bg-accent flex items-center justify-center text-white">
        <div className=" w-1/2 h-full flex items-center flex-col justify-center text-center">
          <h2 className="text-3xl font-bold mb-4">Amazing Deals Every Day</h2>
          <p className="text-lg">Discover the best offers and discounts.</p>
        </div>
        <div className="w-1/2 h-full">
          <img src={img2} alt="image1" className="h-full w-auto mx-auto" />
        </div>
      </div>

      <div className="w-full aspect-[3/1] h-auto bg-green-700 flex items-center justify-center text-white">
        <div className=" w-1/2 flex items-center justify-center flex-col text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Loyalty Program</h2>
          <p className="text-lg">Earn rewards and exclusive benefits.</p>
        </div>
        <div className="w-1/2 h-full">
          <img src={img3} alt="image1" className="h-full w-auto mx-auto" />
        </div>
      </div>
    </Carousel>
  );
}
