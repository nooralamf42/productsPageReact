import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

export default function Cart() {

    function clickHandler(){
        alert("wanna see cart")
    }
  return (
    <button onClick={clickHandler} className="fixed opacity-80 z-50 bottom-4 left-4 hover:cursor-pointer bg-black p-4 rounded-full">
      <AiOutlineShoppingCart size={30} color="white" />
    </button>
  );
}
