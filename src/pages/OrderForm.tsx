import React, { useState } from "react";
import { useNavigate } from "react-router";

interface OrderFormData {
  fullName: string;
  phNo: string;
  backupPhNo: string;
  address: string;
  state: string;
  nearestRoad: string;
  pin: string;
  city: string;
  houseNumber: string;
}

export default function OrderForm() {
  const [formData, setFormData] = useState<OrderFormData>({
    fullName: "",
    phNo: "",
    backupPhNo: "",
    address: "",
    state: "",
    nearestRoad: "",
    pin: "",
    city: "",
    houseNumber: "",
  });

  const navigate = useNavigate()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    localStorage.setItem('OrderData', JSON.stringify(formData))
    navigate('/orderDetail')
    
  
  };

  return (
    <div className="mx-auto w-full md:p-6 p-0 py-20 min-h-screen font-['lato']">
      <form onSubmit={handleSubmit} className="space-y-4 mx-auto w-[90%] max-w-[800px]">
        {[
          { label: "Full name", name: "fullName", type: "text", placeholder: "Full Name" },
          { label: "Ph. Number", name: "phNo", type: "number", placeholder: "Ph. no" },
          { label: "Backup Ph. Number", name: "backupPhNo", type: "number", placeholder: "Backup Ph. No" },
          { label: "Address", name: "address", type: "text", placeholder: "Address" },
          { label: "State", name: "state", type: "text", placeholder: "State" },
          { label: "Nearest Road", name: "nearestRoad", type: "text", placeholder: "Nearest Road" },
          { label: "PIN Number", name: "pin", type: "number", placeholder: "Enter PIN" },
          { label: "City", name: "city", type: "text", placeholder: "Enter City" },
          { label: "House Number", name: "houseNumber", type: "number", placeholder: "House Number" },
        ].map(({ label, name, type, placeholder }, index) => (
          <div key={index} className="">
            <label className="block text-base font-bold text-gray-900">{label}</label>
            <input
              type={type}
              name={name}
              placeholder={placeholder}
              value={formData[name  as keyof OrderFormData ]}
              onChange={handleChange}
              required
              className="w-full p-3 bg-background h-[40px] md:h-[60px] rounded-lg focus:outline-none border-[2px] md:border-[3px] focus:border-accent"
            />
          </div>
        ))}
        <button type="submit" className="w-full py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
          Place Order
        </button>
      </form>
    </div>
  );
}
