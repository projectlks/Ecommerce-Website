import useCartTotals from "../hooks/useCartTotal";
import { CartContext } from "../context/CartContext";
import { useContext, useState } from "react";

interface OrderData {
  fullName: string;
  address: string;
  pin: string;
  phNo: string;
  backupPhNo: string;
}

export default function OrderDetail() {
  const { cart } = useContext(CartContext);
  
  const data = localStorage.getItem("OrderData");
  const orderData = data ? JSON.parse(data) : [] // Initialize cart from local storage
  const { totalCost, totalDiscount, tax, finalTotal } = useCartTotals();


  

  return (
    <section className="w-[90%] flex flex-col md:flex-row 2xl:w-[80%] py-[100px] mx-auto h-screen">
      <div className="md:w-1/2 w-full grid grid-cols-1 2xl:grid-cols-2 gap-10">
        {cart.map((item : any) => (
          <div key={item.id} className="w-full">
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
        ))}
      </div>

      {/* Right Section */}
      <section className="md:w-1/2 w-full">
        <div className="order-detail-box w-[90%] xl:w-[70%] mx-auto border rounded-md shadow-lg">
          {/* Order Details Header */}
          <div className="order-detail-header px-6 p-4 text-background rounded-t-xl bg-accent mb-4">
            <p className="text-2xl font-bold">Order Details</p>
          </div>

          {/* Details Section */}
          {orderData && (
            <div className="detail-section px-6 p-4 space-y-2">
              <div className="flex justify-between">
                <p className="font-medium">Name:</p>
                <p>{orderData.fullName}</p>
              </div>
              <div className="flex justify-between">
                <p className="font-medium">Address:</p>
                <p>{orderData.address}</p>
              </div>
              <div className="flex justify-between">
                <p className="font-medium">PIN number:</p>
                <p>{orderData.pin}</p>
              </div>
              <div className="flex justify-between">
                <p className="font-medium">Phone number:</p>
                <p>{orderData.phNo}</p>
              </div>
              <div className="flex justify-between">
                <p className="font-medium">Backup phone number:</p>
                <p>{orderData.backupPhNo}</p>
              </div>
            </div>
          )}

          {/* Price Section */}
          <div className="price-section mt-6 px-6 p-4 space-y-2 border-t pt-4">
            <div className="flex justify-between">
              <p className="font-medium">Subtotal</p>
              <p>$ {totalCost}</p>
            </div>
            <div className="flex justify-between">
              <p className="font-medium">DisCount</p>
              <p>$ {totalDiscount}</p>
            </div>
            <div className="flex justify-between">
              <p className="font-medium">Delivery</p>
              <p className="text-green-600">Free</p>
            </div>
            <div className="flex justify-between">
              <p className="font-medium">Package charge</p>
              <p className="text-green-600">Free</p>
            </div>
            <div className="flex justify-between">
              <p className="font-medium">Tax</p>
              <p>0.2%</p>
            </div>
          </div>

          {/* Total Section */}
          <div className="total-section flex px-6 p-4 justify-between mt-4 border-t pt-4">
            <p className="font-bold text-lg">Total</p>
            <p className="font-bold text-lg">$ {finalTotal}</p>
          </div>
        </div>

        {/* Payment Method Selection */}
        <div className="bottom-section py-4 w-[90%] xl:w-[70%] mx-auto">
          <div className="select-container">
            <select className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent">
              <option value="none">Select payment method</option>
              <option value="online" disabled>Pay online</option>
              <option value="cod">Cash on delivery</option>
            </select>
          </div>
        </div>
      </section>
    </section>
  );
}
