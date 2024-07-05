import { createContext, useState } from "react";

const MainUrlContext = createContext();

export default function MainUrlContextProvider({ children }) {
   const [type, setType] = useState("beauty");
  const [url, setUrl] = useState(
    `https://dummyjson.com/products/category/beauty?limit=0`
  );
 
  const changeLink = (data) => {
   setType(data);
   setUrl(`https://dummyjson.com/products/category/${data}?limit=0`);
  };
  return (
    <MainUrlContext.Provider value={{ url, changeLink, type }}>
      {children}
    </MainUrlContext.Provider>
  );
}

export { MainUrlContext, MainUrlContextProvider };
