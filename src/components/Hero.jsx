import { Carousel } from "@material-tailwind/react";
import img1 from "../assets/img/1.png";
import img2 from "../assets/img/2.png";
import img3 from "../assets/img/3.png";

function Card({ headLine, text, img, className }) {
  return (
    <div
      className={`w-full overflow-y-hidden aspect-[4/2] md:aspect-[3/1] relative flex ${className}`}
    >
      <div className="xl:w-1/2 md:w-2/3 w-full h-full top-1/2 transform md:-translate-y-1 -translate-y-1/2 absolute md:static md:h-full flex items-center justify-center text-white">
        <span className="text-center inline-block">
          <h1 className="text-xl md:text-3xl xl:text-4xl font-bold mb-1 md:mb-4">
            {headLine}
          </h1>
          <p className="text-xs md:text-base xl:text-lg">{text}</p>
        </span>
      </div>
      <div className="xl:w-1/2 md:w-1/3 w-full h-full">
        <img src={img} alt="image" className="h-full w-auto mx-auto" />
      </div>
    </div>
  );
}

export default function CarouselCustomNavigation() {

  const sections = [
    {
      type: "card",
      headLine: "Welcome to Shopping Mall",
      text: "Your one-stop destination for all your shopping needs.",
      img: img1,
      bgColor: "bg-red-700"
    },
    {
      type: "section",
      backgroundColor: "bg-accent",
      headLine: "Amazing Deals Every Day",
      text: "Discover the best offers and discounts.",
      img: img2,
      bgColor: 'bg-accent'
    },
    {
      type: "section",
      backgroundColor: "bg-green-700",
      headLine: "Join Our Loyalty Program",
      text: "Earn rewards and exclusive benefits.",
      img: img3,
      bgColor: 'bg-blue-500'
    }
  ];

  return (
    <Carousel
      className="rounded"
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-2 md:bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-full transition-all ${
                activeIndex === i
                  ? "md:w-8 w-2 bg-white"
                  : "md:w-4 w-1 bg-white/50"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      {sections.map((section, index) => {
   return (
            <Card
              key={index}
              headLine={section.headLine}
              text={section.text}
              img={section.img}
              className={section.bgColor}
            />
        )
      })}
    </Carousel>
  );
}
