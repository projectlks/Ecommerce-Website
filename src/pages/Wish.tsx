import { Link } from "react-router-dom";
import Star from "../components/Star";
import { wishContext } from "../context/wishContext";
import { useContext } from "react";
import Lottie from "lottie-react";
import animation from "../components/loading/wish.json";
import BackButtom from "../components/BackButtom";

export default function Wish() {
  const context = useContext(wishContext);

  if (!context) return;

  const { wish, removeWish } = context;

  return (
    <>
      <BackButtom />
      {wish.length > 0 ? (
        <section className="md:w-[90%] w-full py-[50px] md:py-[100px] h-screen mx-auto">
          <span className="flex w-full px-5 mx-auto items-center border-b-2 justify-between">
            <h1 className="xl:text-7xl md:text-5xl text-3xl pb-5 font-bold">
              Wish List
            </h1>
            <p className="text-lg xl:text-2xl">Items : {wish.length}</p>
          </span>

          <div className="w-full lg:grid-cols-2 grid 2xl:grid-cols-3 gap-7 mx-auto py-10 md:py-16 px-5 xl:px-10">
            {wish.map((data, index) => {
              return (
                <section
                  className="relative hover:scale-110 transition-all duration-200 cursor-pointer"
                  key={index}
                >
                  <span
                    className="absolute bg-[#f1f1f1] hover:bg-primary transition-all w-9 cursor-pointer aspect-square z-20 flex justify-center items-center right-2 top-2 rounded-full"
                    onClick={() => removeWish(data.id)}
                  >
                    <i className="fa-solid fa-x"></i>
                  </span>
                  <Link to={`/productDetail/${data.id}`}>
                    <div className="h-auto w-full flex space-x-4 xl:space-x-10 bg-background p-4 xl:p-7 rounded-xl shadow aspect-[2/1] md:aspect-[3/1]">
                      <span className="flex justify-center items-center bg-primary rounded h-full aspect-square">
                        <img
                          src={data.thumbnail}
                          alt={data.title}
                          className="h-[80%] aspect-square"
                        />
                      </span>

                      <span className="flex flex-col w-1/2 md:w-[60%]">
                        <h1 className="md:text-2xl text-base text-accent mb-1 xl:mb-2 font-bold w-full overflow-hidden whitespace-nowrap text-ellipsis">
                          {data.title}
                        </h1>

                        <span className="flex md:mb-3 mb-2 md:text-base text-xs space-x-1 md:space-x-2">
                          <Star rating={data.rating} />
                        </span>

                        <p className="text-xl font-bold">$ {data.price}</p>
                      </span>
                    </div>
                  </Link>
                </section>
              );
            })}
          </div>
        </section>
      ) : (
        <div className="flex w-[90%] mx-auto flex-col items-center justify-center h-screen">
          <Lottie
            animationData={animation}
            loop={true}
            className="w-full md:w-1/2 xl:w-1/3 bg-background"
          />
          <p className="mt-8 text-xl md:text-2xl text-gray-600 font-semibold">
            Your wish list is currently empty. Browse our products and add your
            favorites!
          </p>
        </div>
      )}
    </>
  );
}
