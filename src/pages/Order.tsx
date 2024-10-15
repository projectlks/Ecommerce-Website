import { Button } from "@material-tailwind/react";
import Lottie from "lottie-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import animation from "../components/loading/order.json";

export default function OrderDetails() {
  // State to store order data retrieved from localStorage
  const [orderData, setOrderData] = useState<any | null>(null);

  // Effect to fetch order data from localStorage on component mount
  useEffect(() => {
    const data = localStorage.getItem("order");
    if (data) {
      setOrderData(JSON.parse(data)); // Parse and set the order data state
    }
  }, []);

  return (
    <div className="relative w-[90%] xl:w-3/4 min-h-screen mx-auto">
      {/* Go to Home  */}
     <span className="absolute top-5 left-0 xl:left-5">
     <Link to={"/"}>
        <Button className="">
          Go To Home
        </Button>
      </Link>
     </span>

      {/* Check if there is any order data available */}
      {orderData && orderData.length > 0 ? (
        // map the whole data
        orderData.map((data: any, index: number) => (
          <div key={index} className="mb-20">
            {/* Display the order number */}
            <div className="w-full px-10 py-5 bg-accent rounded-t-xl flex flex-col justify-center text-background">
              <h2 className="font-bold text-xl mb-2 w-fit">No : {index + 1}</h2>
              <h2 className="font-bold text-xl mb-2 w-fit">
                Order ID : {data.id}
              </h2>
              <h2 className="font-bold text-xl mb-2 tracking-widest ">
                Order Date: {data.date}
              </h2>
            </div>
            <ul className="bg-[#f1f1f1] pt-5 pb-10 px-5 gap-9 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
              {/* Map through the products in the current order */}
              {data.products.map((item: any, index: number) => (
                <li key={index} className="mb-2 w-full h-full ">
                  <div key={item.id} className="w-full h-full mx-auto">
                    <div className="order-item-box flex items-center px-5 h-full w-full py-5 space-x-10 bg-background shadow-md rounded-lg">
                      <div className="image-section w-1/3 flex items-center justify-center rounded-md bg-primary aspect-square">
                        <img
                          src={item.thumbnail}
                          alt={item.title}
                          className="product-img w-[80%] rounded-md"
                        />
                      </div>
                      <div className="order-detail-text w-2/3 flex flex-col justify-between">
                        <p className="product-name font-semibold text-lg w-full overflow-hidden whitespace-nowrap text-ellipsis">
                          {item.title}
                        </p>
                        <p className="quantity text-gray-600">
                          Quantity: {item.amount}
                        </p>
                        <p className="price text-accent font-extrabold">
                          Price: ${item.price}
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="md:p-6 p-0 bg-[#f1f1f1] w-full border-t-4 border-accent md:flex-row flex-col flex">
              {/* Order Status Section */}
              <div className="mb-6 w-[90%] mx-auto md:w-1/2 pb-4">
                <p className="text-xl font-bold mb-2">Order Status</p>
                <div className="flex items-center space-x-4">
                  <button className="bg-green-500 py-2 px-4 rounded-md">
                    Order Confirmed
                  </button>
                  <button className="bg-red-500 py-2 px-4 rounded-md">
                    Cancel Order
                  </button>
                </div>
              </div>

              {/* Delivery Information Section */}
              <div className="w-[90%] xl:w-1/2 md:w-1/2 mx-auto p-4">
                <h1 className="text-2xl font-bold my-3 border-accent py-3 border-b">
                  Delivery
                </h1>
                <span className="w-full flex space-x-3">
                  <h3 className="font-bold">Address: </h3>
                  <p>{data.address}</p>
                </span>
                <span className="w-full flex space-x-3">
                  <h3 className="font-bold">PIN number: </h3>
                  <p>{data.pin}</p>
                </span>
                <span className="w-full flex space-x-3">
                  <h3 className="font-bold">State: </h3>
                  <p>{data.state}</p>
                </span>
                <span className="w-full flex space-x-3">
                  <h3 className="font-bold">Phone: </h3>
                  <p>{data.phNo}, {data.backupPhNo}</p>
                </span>
              </div>
            </div>
          </div>
        ))
      ) : (
        // Message displayed when there are no orders found
        <div className="flex w-full flex-col items-center justify-center h-screen">
          <Lottie
            animationData={animation}
            loop={true}
            className="w-full md:w-1/2 xl:w-1/3 bg-background"
          />
        </div>
      )}
    </div>
  );
}
