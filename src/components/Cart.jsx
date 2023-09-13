import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiFillShopping } from "react-icons/ai";
import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";

export default function Cart({ cart, setCart, showCart, setShowCart, data }) {
  let [buyBtnText, setBuyBtnText] = useState("Buy Now");
  let cartData = data.filter((newData) => cart.includes(newData.title));
  function clickHandler() {
    if (showCart) {
      setShowCart(false);
    } else {
      setShowCart(true);
    }
  }

  let totalExpense = cartData.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.price;
  }, 0);

  function removeItemHandler(cartItemName) {
    setCart((cart) => cart.filter((oldData) => oldData !== cartItemName));
    toast.error(cartItemName + " removed from cart");
  }

  function brokeHandler(e) {
    setBuyBtnText("You are BROKE!");
    e.target.classList.add("bg-red-500");
    e.target.classList.remove("hover:bg-green-400");
    setTimeout(() => {
      e.target.classList.remove("bg-red-500");
      e.target.classList.add("hover:bg-green-400");
      setBuyBtnText("Buy Now");
    }, 2000);
  }

  return (
    <>
      <Toaster />
      <button
        onClick={clickHandler}
        className="fixed opacity-80 z-50 bottom-4 left-4 hover:cursor-pointer bg-black p-4 rounded-full"
      >
        {cart.length == 0 ? (
          <AiOutlineShoppingCart size={30} color="white" />
        ) : (
          <AiFillShopping size={30} color="#45ff45" />
        )}
      </button>

      <div className={!showCart ? "hidden" : " bg-white flex"}>
        <div className="flex h-[100vh] lg:flex-row-reverse justify-end lg:justify-evenly w-full gap-12 flex-col-reverse">
          <div className="overflow-y-auto">
            {cartData.map((cartItem) => {
              return (
                <div>
                  <div
                    className="flex gap-10  items-center py-12 lg:w-[100%]  mx-auto pl-12 lg:pr-40"
                    key={cartItem.id}
                  >
                    <div className="min-w-[150px] w-[150px] md:w-[250px] md:min-w-[250px] max-h-[200px] overflow-hidden rounded-lg relative border">
                      <img src={cartItem.thumbnail} alt="" loading="lazy" />
                    </div>
                    <div>
                      <h1 className="text-2xl font-semibold inline-block mr-4">
                        {cartItem.title}
                      </h1>
                      <p className="text-xl my-2">Price : {cartItem.price}$</p>
                      <button
                        onClick={() => removeItemHandler(cartItem.title)}
                        className="bg-black text-white border-[.4px] px-6 py-2 text-lg rounded-md justify-center d-flex items-center hover:bg-red-500"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {cart.length == 0 ? (
          <div
            className={`flex justify-center flex-col items-center w-full h-[100vh] gap-4`}
          >
            <h1 className="text-5xl">Cart is empty</h1>
            <p className="text-xl">(Add items in your cart)</p>
          </div>
        ) : 
        
          <div className="w-[300px] text-center self-center  pt-4">
            <p className="text-xl">Total {totalExpense}$</p>
            <button
              className="bg-green-500 text-white border-[.4px] px-6 w-[80%] py-2 text-xl mt-5 rounded-md justify-center d-flex items-center hover:bg-green-400"
              onClick={brokeHandler}
            >
              {buyBtnText}
            </button>
          </div>
        }  
        </div>

        
      </div>
    </>
  );
}
