import { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

export default function Cart({cart, setCart,showCart, setShowCart}) {
    function clickHandler(){
       if(showCart){
        setShowCart(false)
       }
       else{
        setShowCart(true)
       }
    }

    function removeItemHandler(cartItemName){
      let updatedCart = cart.filter((item)=>item.title!==cartItemName);
      setCart(updatedCart)
    }

  return (

  <>
    <button onClick={clickHandler} className="fixed opacity-80 z-50 bottom-4 left-4 hover:cursor-pointer bg-black p-4 rounded-full">
      <AiOutlineShoppingCart size={30} color="white" />
    </button>

    <div className={!showCart?"hidden":" bg-gray-600"}>
      {
        cart.map((cartItem)=>{
        return (
          <div className="p-4" key={cartItem.id}>
            <img className="w-[300px]" src={cartItem.thumbnail} alt="" loading="lazy" />
            <h1 className="text-2xl inline-block mr-4">{cartItem.title}</h1>
            <button onClick={()=>removeItemHandler(cartItem.title)} className=" text-black bg-white w-7 h-7 rounded-full font-bold justify-center d-flex items-center hover:bg-red-500">-</button>
          </div>
        )
      })
      }
    </div>
  </>
  );
}
