import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Categories from "./components/Categories";
import Cards from "./components/Cards";
import Cart from "./components/Cart";
import "./App.css";
import Spinner from "./components/Spinner";
import { Cat404 } from "@404pagez/react";
import toast, { Toaster } from "react-hot-toast"

function App() {

  let [cart, setCart] = useState([]);


  let [category, setCategory] = useState("all");


  let [data, setData] = useState([]);


  let [dataFetched, setDatFetched] = useState(false); 


  let [err, setErr] = useState(false);


  let [showCart, setShowCart] = useState(false);


  function toastMessage(currentItemName){
    !cart.includes(currentItemName)?toast.success(currentItemName + " addeded in cart"): toast.error(currentItemName + " removed from cart")
  }

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
      <Toaster/>
      <Cart cart={cart} setCart={setCart} showCart={showCart} setShowCart={setShowCart} data={data}/>

      <div className={showCart ? "hidden" : "block"}>

        <Navbar />

        <Categories setCategory={setCategory} category={category} />
        {dataFetched ? (
          <Cards
            data={data}
            category={category}
            setCart={setCart}
            cart={cart}
            toastMessage={toastMessage}
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
