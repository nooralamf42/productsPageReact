import React from "react";
import { useState } from "react";

export default function Card({data, setCart, cart, toastMessage}) {

  function clickHandler(){
    toastMessage(data.title)
    if(cart.includes(data.title))
    setCart((cartItems)=>cartItems.filter((cartItem)=>
    cartItem!==data.title
    ))
    else{
      if(cart.length)
      setCart(cartItems=>[...cartItems,data.title])
      else{
        setCart([data.title])
      }
    }
  }

  return (
    <div className="w-[350px] min-h-[480px] border rounded-lg overflow-hidden relative hover:shadow-xl hover:shadow-[#bfbfbf] drop-shadow-2xl cursor-pointer mb-4">
        <button
          className={`px-4 py-2 ${cart.includes(data.title)? "bg-red-500 hover:bg-green-500 ": "bg-black"} text-white rounded-tr-lg rounded-bl-lg hover:text-black hover:border hover:bg-white whitespace-nowrap absolute bottom-4 ms-4`}
          onClick={clickHandler}
        >
          {!cart.includes(data.title)?"Add to cart":"Remove from cart"}
        </button>
      <div className="w-full h-[231px] overflow-hidden">
        <img src={data.thumbnail} loading="turtle" />
      </div>
      <div className="p-4 space-y-4">
        <h1 className="text-lg font-bold">{data.title}</h1>
        <div className="absolute top-5 right-3 bg-green-500 px-3 py-1 rounded-full text-white font-bold drop-shadow-2xl">
          <p>{data.discountPercentage}% off</p>
        </div>
        <p className="text-sm">{data.description.substr(0,200)+"..."}</p>
        <p className="font-semibold text-gray-700">Price {data.price}$</p>
      </div>
    </div>
  );
}
