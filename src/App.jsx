import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Categories from "./components/Categories";
import Cards from "./components/Cards";
import Cart from "./components/Cart";
import "./App.css";
import Spinner from "./components/Spinner";
import { Cat404 } from "@404pagez/react";

function App() {
  let [cart, setCart] = useState([]);
  let [category, setCategory] = useState("all");
  let [data, setData] = useState([]);
  let [dataFetched, setDatFetched] = useState(false);
  let [err, setErr] = useState(false);
  let [showCart, setShowCart] = useState(false);
  let [productsData, setProductsData] = useState([])

  async function getData() {
    try {
      let api = await fetch("https://dummyjson.com/products");
      if (!api.ok) {
        throw new Error(api.status);
      }

      let apiData = await api.json();
      const products = apiData.products;
      console.log("API call successful");
      setData(products);
      setDatFetched(true);
    } catch (error) {
      console.log(error);
      setErr(true);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  

  return (
    <div>
      <Cart cart={cart} setCart={setCart} showCart={showCart} setShowCart={setShowCart} />

      <div className={showCart ? "hidden" : "block"}>
        <Navbar />
        <Categories setCategory={setCategory} data={data} />
        {dataFetched ? (
          <Cards
            data={data}
            category={category}
            setCart={setCart}
            cart={cart}
            productsData={productsData}
            setProductsData={setProductsData}
          />
        ) : (
          <Spinner />
        )}
        <div className="text-center bg-white absolute top-0 z-40 w-full">
          {err ? <Cat404 size={100} /> : null}
        </div>
      </div>
    </div>
  );
}

export default App;
