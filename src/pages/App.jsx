import Hero from "../components/Hero.jsx";
import Menu from "../components/Menu.jsx";

import Promotion from "./Promotions.tsx";

import TopBar from "../components/TopBar.tsx";
import Products from "./Products.tsx";
import Footer from "./Footer.tsx";
import ShowProduct from "./ShowProduct.jsx";

function App() {
  return (
    <section className="w-full ">
      <TopBar />

      <div className="w-[90%] mx-auto">
        <Hero />

        <Menu />

        <Products />
      </div>

      <Promotion />

      <ShowProduct />

      {/* <OrderForm/> */}
      <Footer />
    </section>
  );
}

export default App;

// Color palette for styling
// https://coolors.co/palette/006d77-83c5be-edf6f9-ffddd2-e29578
// DummyJSON search endpoint
// https://dummyjson.com/products/search?q=
