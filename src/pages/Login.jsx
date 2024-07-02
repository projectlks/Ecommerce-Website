import React, { useState } from "react";

function Input({ value, label, type, ...props }) {
  return (
    <div className="relative z-0 w-full mb-5 group">
      <input
        value={value}
        {...props}
        type={type}
        placeholder=" "
        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        required
      />
      <label className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
        {label}
      </label>
    </div>
  );
}

function Form() {
  const [data, setData] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: ""
  });
  const [loginData, setLoginData] = useState({
    name: "",
    password: "",})
 

  const createAccount = (e) => {
    e.preventDefault()
    fetch("https://dummyjson.com/users/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    })
      .then((res) => res.json())
      .then(console.log);
  }
 const loginAccount = (e) => {
   e.preventDefault();

   fetch("https://dummyjson.com/auth/login", {
     method: "POST",
     headers: { "Content-Type": "application/json" },
     body: JSON.stringify({
       username: loginData.name,
       password: loginData.password
     })
   })
     .then((res) => res.json())
     .then((data) => {
       if (data.token) {
         console.log("Login successful", data);
         // handle successful login (e.g., save token, redirect, etc.)
       } else {
         console.error("Login failed", data);
      
       }
     })
     .catch((error) => {
       console.error("Error:", error);
    
     });
 };
  return (
    <section className="w-full min-h-screen flex-col flex justify-center items-center">
      <form
        className="w-[600px] p-10 rounded bg-black mx-auto"
        onSubmit={(e) => createAccount(e)}
      >
        {/* Email */}
        <Input
          type="email"
          value={data.email}
          label="Email address"
          onChange={(e) =>
            setData((prev) => ({ ...prev, email: e.target.value }))
          }
        />

        {/* Password */}
        <Input
          type="password"
          value={data.password}
          label="Password"
          onChange={(e) =>
            setData((prev) => ({ ...prev, password: e.target.value }))
          }
        />

        {/* Confirm Password */}
        <Input type="password" label="Confirm Password" />

        {/* First Name and Last Name */}
        <div className="grid  md:grid-cols-2 md:gap-6">
          <Input
            type="text"
            value={data.firstName}
            label="First Name"
            onChange={(e) =>
              setData((prev) => ({ ...prev, firstName: e.target.value }))
            }
          />

          <Input
            type="text"
            value={data.lastName}
            label="Last Name"
            onChange={(e) =>
              setData((prev) => ({ ...prev, lastName: e.target.value }))
            }
          />
        </div>
        {/* Submit Button */}
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
        >
          Create Account
        </button>
      </form>
    
      <form
        className="w-[600px] mt-40 p-10 rounded bg-black mx-auto"
        onSubmit={(e) => loginAccount(e)}
      >
        {/* Email */}
        <Input
          type="text"
          value={loginData.name}
          label="User name"
          onChange={(e) =>
            setLoginData((prev) => ({ ...prev, name: e.target.value }))
          }
        />

        {/* Password */}
        <Input
          type="password"
          value={loginData.password}
          label="Password"
          onChange={(e) =>
            setLoginData((prev) => ({ ...prev, password: e.target.value }))
          }
        />
        {/* Submit Button */}
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
        >
          Login
        </button>
      </form>
    </section>
  );
}

export default Form;
